import { ArrowLeft, Gamepad2, Smartphone, Bot, DollarSign, Check, Gift } from 'lucide-react';

interface ServicesProps {
  onBack: () => void;
}

export default function Services({ onBack }: ServicesProps) {
  const services = [
    {
      title: 'Telegram Game',
      icon: Gamepad2,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Custom game mechanics',
        'Leaderboard integration',
        'In-game purchases',
        'Social features',
        'Analytics dashboard',
      ],
      pricing: [
        { tier: 'Basic', price: '$500 - $1,500', description: 'Simple casual game' },
        { tier: 'Advanced', price: '$1,500 - $5,000', description: 'Complex multiplayer game' },
        { tier: 'Premium', price: '$5,000+', description: 'AAA-quality game with advanced features' },
      ],
    },
    {
      title: 'Marketplace',
      icon: Gift,
      gradient: 'from-amber-500 to-rose-500',
      features: [
        'Buy and sell gifts and stickers',
        'Support for Telegram Stars',
        'TON wallet integration',
        'Secure in-app payments',
        'Product catalog and search',
        'Order history and receipts',
      ],
      pricing: [
       
        { tier: 'Advanced', price: '$1,500 - $5,000', description: 'Wallet + Stars + advanced features' },
        { tier: 'Premium', price: '$5,000+', description: 'Full marketplace with admin tools and analytics' },
      ],
    },
    {
      title: 'Mini App',
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Responsive design',
        'Database integration',
        'User authentication',
        'Payment processing',
        'Real-time updates',
      ],
      pricing: [
        { tier: 'Basic', price: '$500 - $1,500', description: 'Simple utility app' },
        { tier: 'Advanced', price: '$1,500 - $5,000', description: 'Feature-rich application' },
        { tier: 'Premium', price: '$5,000+', description: 'Enterprise-level solution' },
      ],
    },
    {
      title: 'Telegram Bot',
      icon: Bot,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Custom commands',
        'Automated responses',
        'API integrations',
        'Database storage',
        'Admin panel',
      ],
      pricing: [
        { tier: 'Basic', price: '$100 - $500', description: 'Simple chatbot' },
        { tier: 'Advanced', price: '$500 - $1,500', description: 'AI-powered bot with integrations' },
        { tier: 'Premium', price: '$1,500+', description: 'Complex automation system' },
      ],
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8">
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">Our Services & Pricing</h1>
          <p className="text-gray-600">
            Professional Telegram solutions tailored to your needs
          </p>
        </div>

        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-4 md:p-6 rounded-t-3xl`}>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-5 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors p-2.5">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 flex items-center">
                    <DollarSign className="w-5 h-5 mr-1" />
                    Pricing Options
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.pricing.map((option) => (
                      <div key={option.tier} className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-[1px] hover:from-blue-100 hover:to-cyan-100 transition-colors">
                        <div className="rounded-[0.7rem] bg-white border border-gray-100 p-3 md:p-4">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-semibold text-gray-900 text-sm md:text-base">
                              {option.tier}
                            </span>
                            <span className="font-bold text-blue-600 text-sm md:text-base">
                              {option.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
          <p className="mb-4">
            Contact us today for a free consultation and custom quote
          </p>
          <button
            onClick={() => window.open('https://telbuilders.com/contact', '_blank')}
            
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
          >
            telbuilders
          </button>
        </div>
      </div>
    </div>
  );
}
