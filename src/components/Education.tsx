import { FiBook, FiAward, FiCalendar, FiMapPin, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.E. Computer Science',
      institution: 'S.A. Engineering College',
      period: '2023 - Present',
      details: 'Current CGPA: 8.49',
      location: 'Chennai, India',
      icon: '🎓',
      status: 'ongoing',
      color: 'from-blue-500 to-cyan-500',
      highlights: [
              'Projects: Multiple Web Applications'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      institution: 'Sundar Matriculation Hr. Sec. School',
      period: '2023',
      details: 'Percentage: 75%',
      location: 'Chennai, India',
      icon: '📚',
      status: 'completed',
      color: 'from-green-500 to-emerald-500',
      highlights: [
        'Science Stream with Computer Science',
        // 'Developed Basic Programming Skills'
      ]
    },
    {
      id: 3,
      degree: 'Secondary',
      institution: 'Sundar Matriculation Hr. Sec. School',
      period: '2021',
      details: 'All Pass',
      location: 'Chennai, India',
      icon: '🏫',
      status: 'completed',
      color: 'from-purple-500 to-violet-500',
      highlights: [
       
        'Early Interest in Computers',
        // 'Basic Computer Literacy Achieved'
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg mb-6">
            <FiBook className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Academic qualifications that form the foundation of my technical expertise
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="group relative"
            >
              {/* Education Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Status Ribbon */}
                <div className="absolute top-0 right-0">
                  <div className={`relative px-6 py-2 text-white font-semibold ${
                    item.status === 'ongoing' 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500'
                  }`}>
                    {item.status === 'ongoing' ? 'In Progress' : 'Completed'}
                    <div className="absolute -left-2 top-0 w-4 h-full bg-inherit skew-x-12"></div>
                  </div>
                </div>

                {/* Card Header */}
                <div className={`pt-12 pb-8 px-8 bg-gradient-to-br ${item.color} bg-opacity-10 dark:bg-opacity-20`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Performance Badge */}
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
                    <FiTrendingUp className="text-green-500" />
                    <span className="font-bold text-gray-900 dark:text-white">{item.details}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                          <FiCalendar className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                          <div className="font-semibold text-gray-900 dark:text-white">{item.period}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                          <FiMapPin className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                          <div className="font-semibold text-gray-900 dark:text-white">{item.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FiAward className="text-yellow-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Indicator for Ongoing */}
                  {item.status === 'ongoing' && (
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-gray-900 dark:text-white">Academic Progress</span>
                        <span className="font-bold text-primary-600 dark:text-primary-500">85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: '85%' }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow border-2 border-primary-500"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Accent */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Academic <span className="text-primary-600 dark:text-primary-500">Achievements</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Summary of my educational accomplishments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8.49</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Current CGPA</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">B.E. Computer Science</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">75%</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Higher Secondary</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Science Stream</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Attendance</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Perfect Record</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">3+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Years</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Academic Journey</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Educational Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Software Engineering', 'Data Structures', 'Algorithms', 'UI/UX Design', 'Database Management'].map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Future Goals</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    Complete B.E. with Honors
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    Master Advanced Web Technologies
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    Contribute to Open Source Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;