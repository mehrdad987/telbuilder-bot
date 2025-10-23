import { Gamepad2, HelpCircle, Info, Mail } from 'lucide-react';

interface StartProps {
  onNavigate: (page: string) => void;
}

export default function Start({ onNavigate }: StartProps) {
  const servicesCard = {
    id: 'services',
    title: 'Our Services',
    description: 'Explore our Games, Mini Apps & Bots solutions',
    icon: Gamepad2,
    backgroundImage: 'https://i.postimg.cc/85Gwxc9w/Gemini-Generated-Image-osp0v5osp0v5osp0.jpg',
  };

  const bottomCards = [
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Questions',
      icon: HelpCircle,
      backgroundImage: 'https://i.postimg.cc/HxmXYMt6/IYbcz-Wxj-AMq5-XTf-D-generated-image.jpg',
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Our Team',
      icon: Info,
      backgroundImage: 'https://i.postimg.cc/j57n9M9f/Gemini_Generated_Image_5h7gmd5h7gmd5h7g.png',
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in Touch',
      icon: Mail,
      backgroundImage: 'https://i.postimg.cc/TYF0nqQ3/ai-generated-8337333-1280.png',
    },
  ];

  const ServicesIcon = servicesCard.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            What Can We Do For You?
          </h1>
          <p className="text-gray-600">
            Explore our services and get started
          </p>
        </div>

        <button
          onClick={() => onNavigate(servicesCard.id)}
          className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${servicesCard.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80" />

          <div className="relative p-8 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ServicesIcon className="w-12 h-12 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {servicesCard.title}
              </h3>
              <p className="text-white/90 text-base">
                {servicesCard.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-white">
              <span className="text-sm font-medium">View Details</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </button>

        <div className="grid grid-cols-3 gap-3">
          {bottomCards.map((card) => {
            const Icon = card.icon;
            const overlayColors = {
              faq: 'from-blue-600/80 to-cyan-600/80',
              about: 'from-green-600/80 to-emerald-600/80',
              contact: 'from-orange-600/80 to-red-600/80',
            };
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${overlayColors[card.id as keyof typeof overlayColors]}`} />

                <div className="relative p-4 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {card.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
