import React, { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 dark:bg-dark/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary-600 dark:text-primary-500">
            Portfolio<span className="text-primary-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                <FiMail size={20} />
              </a>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:hello@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  <FiMail size={20} />
                </a>
              </div>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 mt-4">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;