import { useState, useEffect } from 'react';
import { TelegramProvider } from './context/TelegramContext';
import { initTelegramWebApp } from './lib/telegram';
import Home from './pages/Home';
import Start from './pages/Start';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

type Page = 'home' | 'start' | 'services' | 'faq' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    initTelegramWebApp();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onStart={() => setCurrentPage('start')} />;
      case 'start':
        return <Start onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'services':
        return <Services onBack={() => setCurrentPage('start')} />;
      case 'faq':
        return <FAQ onBack={() => setCurrentPage('start')} />;
      case 'about':
        return <About onBack={() => setCurrentPage('start')} />;
      case 'contact':
        return <Contact onBack={() => setCurrentPage('start')} />;
      default:
        return <Home onStart={() => setCurrentPage('start')} />;
    }
  };

  return (
    <TelegramProvider>
      {renderPage()}
    </TelegramProvider>
  );
}

export default App;
