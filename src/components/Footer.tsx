import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer: React.FC = () => {

  return (
    <footer id="contact" className="bg-gray-900  text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Santhosh B S<span className="text-primary-500">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer & UI/UX Designer passionate about creating amazing web experiences.
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <FiMail size={16} />
                santhosh220506@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FiPhone size={16} />
                7695801106
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin size={16} />
                Padmavathi Nagar, Poonamallee, Chennai-56
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a> {/* Added */}
            </div>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="text-lg font-bold mb-6">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/santhosh-bs22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/santhosh-b-s-ab6256278"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:santhosh220506@gmail.com"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
            <a
              href="mailto:santhosh220506@gmail.com"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Let's Work Together
              <FiMail />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

       
      </div>
    </footer>
  );
};

export default Footer;