interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
      photo_url?: string;
    };
  };
  ready: () => void;
  expand: () => void;
  close: () => void;
  MainButton: {
    text: string;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
  };
}

interface TelegramWindow extends Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}

export const getTelegramWebApp = (): TelegramWebApp | null => {
  const win = window as TelegramWindow;
  return win.Telegram?.WebApp || null;
};

export const initTelegramWebApp = () => {
  const tg = getTelegramWebApp();
  if (tg) {
    tg.ready();
    tg.expand();
  }
  return tg;
};
