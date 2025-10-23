import { ArrowLeft } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  

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

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">About TelBuilders</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for Telegram development
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            TelBuilders is a specialized development team dedicated to creating exceptional
            experiences within the Telegram ecosystem. We focus exclusively on Telegram Mini
            Apps, Games, and Bots, bringing deep expertise and passion to every project.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team consists of experienced developers, designers, and strategists who
            understand the unique opportunities and challenges of building on the Telegram
            platform. We have successfully delivered dozens of projects, from simple utility
            bots to complex multiplayer games and full-featured applications.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Expertise</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Telegram Mini Apps</h3>
                <p className="text-gray-700">
                  Full-stack web applications that run seamlessly inside Telegram
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Interactive Games</h3>
                <p className="text-gray-700">
                  Engaging single and multiplayer games with social features
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Intelligent Bots</h3>
                <p className="text-gray-700">
                  Automated solutions with AI integration and custom workflows
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Payment Integration</h3>
                <p className="text-gray-700">
                  Secure payment processing and e-commerce solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Build Together?</h3>
          <p className="mb-4">
            Let's turn your Telegram vision into reality
          </p>
          <button
            onClick={() => window.open('https://telbuilders.com', '_blank')}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
          >
            telbuilders.com
          </button>
        </div>
      </div>
    </div>
  );
}
