import { certifications, languages } from '../data/portfolioData';
import { FiAward, FiCheck, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certificationIcons = ['🏆', '📜', '💻', '🚀', '🎯', '✅'];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6">
            <FiAward className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="text-primary-600 dark:text-primary-500">Languages</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional credentials and language proficiency that enhance my capabilities
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Professional <span className="text-primary-600 dark:text-primary-500">Credentials</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full -translate-y-8 translate-x-8"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{certificationIcons[index]}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {cert}
                        </h4>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-500">
                          <FiCheck />
                          <span className="text-sm font-medium">Verified Certification</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Skill Level</span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-500">
                          {85 - (index * 5)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000"
                          style={{ width: `${85 - (index * 5)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6">
              <FiGlobe className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Language <span className="text-blue-500 dark:text-cyan-500">Proficiency</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Communication skills that enable effective collaboration across cultures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Flag */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                      <span className="text-4xl">
                        {lang.name === 'English' ? '🇬🇧' : lang.name === 'Tamil' ? '🇮🇳' : '🇮🇳'}
                      </span>
                    </div>
                  </div>

                  {/* Language Info */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {lang.name}
                    </h4>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full mb-6">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-blue-600 dark:text-cyan-400">
                        {lang.level}
                      </span>
                    </div>

                    {/* Proficiency Indicator */}
                    <div className="relative">
                      <div className="flex justify-center mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-2 rounded-full ${
                                i < getProficiencyLevel(lang.level)
                                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                  : 'bg-gray-200 dark:bg-gray-700'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {getProficiencyDescription(lang.level)}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-lg"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper functions
const getProficiencyLevel = (level: string) => {
  switch (level) {
    case 'Native': return 5;
    case 'Fluent': return 4;
    case 'Conversational': return 3;
    case 'Basic': return 2;
    default: return 1;
  }
};

const getProficiencyDescription = (level: string) => {
  switch (level) {
    case 'Native': return 'Native speaker, complete fluency';
    case 'Fluent': return 'Fluent communication, professional use';
    case 'Conversational': return 'Daily conversations, comfortable speaking';
    case 'Basic': return 'Basic communication, learning phase';
    default: return 'Beginner level';
  }
};

export default Certifications;