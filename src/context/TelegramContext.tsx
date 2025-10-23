import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getTelegramWebApp } from '../lib/telegram';
import { supabase, TelegramUser } from '../lib/supabase';

interface TelegramContextType {
  user: TelegramUser | null;
  loading: boolean;
  saveUser: () => Promise<void>;
}

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export const TelegramProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState(true);

  const saveUser = async () => {
    const tg = getTelegramWebApp();
    const telegramUser = tg?.initDataUnsafe?.user;

    if (!telegramUser) {
      console.error('No Telegram user data available');
      return;
    }

    const userData: TelegramUser = {
      telegram_id: telegramUser.id,
      username: telegramUser.username,
      first_name: telegramUser.first_name,
      last_name: telegramUser.last_name,
      photo_url: telegramUser.photo_url,
      language_code: telegramUser.language_code,
    };

    console.log('Attempting to save user:', userData);

    try {
      const { data: existingUser, error: selectError } = await supabase
        .from('telbuilders_users')
        .select('*')
        .eq('telegram_id', userData.telegram_id)
        .maybeSingle();

      if (selectError) {
        console.error('Error checking existing user:', selectError);
        return;
      }

      if (existingUser) {
        console.log('User exists, updating last_login');
        const { data, error } = await supabase
          .from('telbuilders_users')
          .update({ last_login: new Date().toISOString() })
          .eq('telegram_id', userData.telegram_id)
          .select()
          .single();

        if (error) {
          console.error('Error updating user:', error);
          return;
        }

        if (data) {
          setUser(data);
          console.log('User updated successfully:', data);
        }
      } else {
        console.log('User does not exist, creating new user');
        const { data, error } = await supabase
          .from('telbuilders_users')
          .insert(userData)
          .select()
          .single();

        if (error) {
          console.error('Error creating user:', error);
          return;
        }

        if (data) {
          setUser(data);
          console.log('User created successfully:', data);
        }
      }
    } catch (error) {
      console.error('Unexpected error saving user:', error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const tg = getTelegramWebApp();
      const telegramUser = tg?.initDataUnsafe?.user;

      if (telegramUser) {
        const { data } = await supabase
          .from('telbuilders_users')
          .select('*')
          .eq('telegram_id', telegramUser.id)
          .maybeSingle();

        if (data) {
          setUser(data);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  return (
    <TelegramContext.Provider value={{ user, loading, saveUser }}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => {
  const context = useContext(TelegramContext);
  if (context === undefined) {
    throw new Error('useTelegram must be used within a TelegramProvider');
  }
  return context;
};
