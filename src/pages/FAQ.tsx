import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  onBack: () => void;
}

export default function FAQ({ onBack }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is a Telegram Mini App?',
      answer:
        'A Telegram Mini App is a web application that runs directly inside Telegram. It provides a seamless user experience without requiring users to leave the messenger. Mini Apps can include games, utilities, e-commerce platforms, and more.',
    },
    {
      question: 'How long does it take to develop a Telegram bot?',
      answer:
        'Development time varies based on complexity. A simple bot can be ready in 1-2 weeks, while advanced bots with custom features and integrations may take 4-8 weeks. We provide detailed timelines after understanding your requirements.',
    },
    {
      question: 'Can you integrate payment systems into my Mini App?',
      answer:
        'Yes! We can integrate various payment solutions including Telegram Payments, Stripe, PayPal, and cryptocurrency payments. All integrations are secure and comply with industry standards.',
    },
    {
      question: 'Do you provide maintenance and support after launch?',
      answer:
        'Absolutely! We offer ongoing maintenance packages that include bug fixes, updates, feature additions, and technical support. We ensure your app stays up-to-date with Telegram platform changes.',
    },
    {
      question: 'What makes your team different from others?',
      answer:
        'We specialize exclusively in Telegram ecosystem development. Our team has deep expertise in Telegram APIs, best practices, and emerging features. We deliver production-ready, scalable solutions with clean code and comprehensive documentation.',
    },
    {
      question: 'Can you help migrate an existing app to Telegram?',
      answer:
        'Yes! We have experience migrating web applications and mobile apps to the Telegram platform. We analyze your existing app and create a migration strategy that preserves functionality while optimizing for Telegram features.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We use modern web technologies including React, TypeScript, Node.js, and various backend frameworks. For databases, we work with PostgreSQL, MongoDB, and other solutions based on project needs. All our solutions are built with scalability and performance in mind.',
    },
    {
      question: 'Do you provide design services?',
      answer:
        'Yes! Our services include UI/UX design tailored for Telegram Mini Apps. We create intuitive, mobile-first designs that follow Telegram design guidelines and provide excellent user experience.',
    },
    {
      question: 'How do you handle project communication?',
      answer:
        'We maintain transparent communication throughout the project via Telegram, email, or your preferred platform. You receive regular updates, can track progress, and have direct access to the development team.',
    },
    {
      question: 'What are the payment terms?',
      answer:
        'We typically work with a 50% upfront payment and 50% upon completion model. For larger projects, we can arrange milestone-based payments. All payment terms are discussed and agreed upon before project start.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to us for more information
          </p>
          <button
            
            onClick={() => window.open('https://t.me/nikisari0', '_blank')}
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
