import React from 'react';
import { services } from '../data/portfolioData';
import { FiCode, FiSmartphone, FiLayers } from 'react-icons/fi';

const Services: React.FC = () => {
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case '💻':
        return <FiCode className="text-primary-500" size={28} />;
      case '📱':
        return <FiSmartphone className="text-primary-500" size={28} />;
      case '🎨':
        return <FiLayers className="text-primary-500" size={28} />;
      default:
        return <span className="text-2xl">{icon}</span>;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Quality Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I provide comprehensive digital solutions to help your business grow and succeed in the online world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                {getIconComponent(service.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Link */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-primary-600 dark:text-primary-500 font-medium inline-flex items-center gap-2">
                  Learn more
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have a project in mind? Let's discuss how we can work together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
          >
            Start a Project
            <FiCode />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;