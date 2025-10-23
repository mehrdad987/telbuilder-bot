import { ArrowLeft, Mail, Send, MessageCircle, Globe } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

export default function Contact({ onBack }: ContactProps) {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Message us directly on Telegram',
      value: '@telbuilders',
      action: 'Open Chat',
      link: 'https://t.me/telbuilders',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      value: 'info@telbuilders.com',
      action: 'Send Email',
      link: 'mailto:info@telbuilders.com',
    },
    {
      icon: Globe,
      title: 'Website',
      description: 'Visit our website',
      value: 'telbuilders.com',
      action: 'Visit Website',
      link: 'https://telbuilders.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8">
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">Get In Touch</h1>
          <p className="text-gray-600">
            We'd love to hear about your project
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Contact Information
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Ready to start your Telegram project? Reach out to us through any of the
            channels below. We typically respond within 24 hours.
          </p>

          <div className="space-y-3 pt-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {method.description}
                      </p>
                      <p className="text-blue-600 font-medium mb-3 break-all">
                        {method.value}
                      </p>
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {method.action}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">What Happens Next?</h2>
          <ol className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Initial Consultation</h3>
                <p className="text-gray-700 text-sm">
                  We discuss your project requirements and goals
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Proposal & Quote</h3>
                <p className="text-gray-700 text-sm">
                  Receive a detailed proposal with timeline and pricing
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Development</h3>
                <p className="text-gray-700 text-sm">
                  We build your project with regular updates
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Launch & Support</h3>
                <p className="text-gray-700 text-sm">
                  Deploy your app and provide ongoing maintenance
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
          <p className="mb-4">
            Not sure where to start? Schedule a free 30-minute consultation
          </p>
          <a
            href="https://t.me/nikisari0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
