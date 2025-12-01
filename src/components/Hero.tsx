import { FiArrowRight, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-50 dark:from-dark dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Frontend Developer & UI/UX Designer
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Santhosh B S
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I craft beautiful, functional digital experiences with modern technologies. 
              Currently pursuing B.E. Computer Science at S.A. Engineering College with 8.49 CGPA.
              Skilled in React, TypeScript, and responsive design to bring your ideas to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiMail className="text-primary-500" />
                <a href="mailto:santhosh220506@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-500">
                  santhosh220506@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiPhone className="text-primary-500" />
                <a href="tel:7695801106" className="hover:text-primary-600 dark:hover:text-primary-500">
                  7695801106
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiMapPin className="text-primary-500" />
                <span>Padmavathi Nagar, Poonamallee, Chennai-56</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all hover:scale-105 font-medium"
              >
                View My Work
                <FiArrowRight />
              </a>
              <a
                href="https://linkedin.com/in/santhosh-b-s-ab6256278"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">10+</p>
                <p className="text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">6+</p>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                <p className="text-gray-600 dark:text-gray-400">Languages</p>
              </div>
            </div>
          </div>
          
          {/* Right Image/Graphic */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-white">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements with Technologies */}
              <div className="absolute -top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce">
                <span className="text-sm font-semibold">React</span>
              </div>
              <div className="absolute top-1/2 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce delay-100">
                <span className="text-sm font-semibold">TypeScript</span>
              </div>
              <div className="absolute -bottom-4 left-1/3 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce delay-200">
                <span className="text-sm font-semibold">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;