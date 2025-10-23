import { useEffect } from 'react';
import { TelescopeIcon } from 'lucide-react';
import { useTelegram } from '../context/TelegramContext';
import { initTelegramWebApp } from '../lib/telegram';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  const { user, saveUser } = useTelegram();

  useEffect(() => {
    initTelegramWebApp();
  }, []);

  const handleStart = async () => {
    await saveUser();
    onStart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
            <TelescopeIcon className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            TelBuilders.com
          </h1>

          <p className="text-xl text-gray-700 font-medium">
            Your Expert Team for Telegram Solutions
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What We Build
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Custom Telegram Mini Apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Interactive Games</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Intelligent Bots</span>
              </li>
              
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-lg font-medium leading-relaxed">
              Do you want to be the next milestone in Telegram? Let us make your dream come true!
            </p>
          </div>

          {user && (
            <p className="text-gray-800 text-xl font-semibold">
              Hi, {user.first_name || 'there'}{user.username ? ` (@${user.username})` : ''}!
            </p>
          )}

          <button
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
