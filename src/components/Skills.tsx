import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { FiCode, FiDatabase, FiTool, FiPenTool, FiChevronRight, FiStar, FiAward } from 'react-icons/fi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: '✨', color: 'from-primary-500 to-primary-600' },
    { id: 'frontend', name: 'Frontend', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
    { id: 'tools', name: 'Tools', icon: '🔧', color: 'from-purple-500 to-violet-500' },
    { id: 'design', name: 'Design', icon: '🎨', color: 'from-pink-500 to-rose-500' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <FiCode className="text-blue-500" size={20} />;
      case 'backend': return <FiDatabase className="text-green-500" size={20} />;
      case 'tools': return <FiTool className="text-purple-500" size={20} />;
      case 'design': return <FiPenTool className="text-pink-500" size={20} />;
      default: return <span className="text-xl">✨</span>;
    }
  };

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'frontend': return {
        bg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-700 dark:text-blue-300',
        badge: 'bg-gradient-to-r from-blue-500 to-cyan-500'
      };
      case 'backend': return {
        bg: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-700 dark:text-green-300',
        badge: 'bg-gradient-to-r from-green-500 to-emerald-500'
      };
      case 'tools': return {
        bg: 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-700 dark:text-purple-300',
        badge: 'bg-gradient-to-r from-purple-500 to-violet-500'
      };
      case 'design': return {
        bg: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-700 dark:text-pink-300',
        badge: 'bg-gradient-to-r from-pink-500 to-rose-500'
      };
      default: return {
        bg: 'bg-gradient-to-br from-primary-50 to-primary-50 dark:from-primary-900/20 dark:to-primary-900/20',
        border: 'border-primary-200 dark:border-primary-800',
        text: 'text-primary-700 dark:text-primary-300',
        badge: 'bg-gradient-to-r from-primary-500 to-primary-600'
      };
    }
  };

  const getMasteryStars = (level: number) => {
    const stars = [];
    const filledStars = Math.floor(level / 20); // 5-star scale
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FiStar 
          key={i}
          className={i < filledStars ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"}
          size={16}
        />
      );
    }
    return stars;
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/20 mb-6">
            <FiAward className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Skillset</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of technologies and tools I've mastered through hands-on experience
          </p>
        </div>

        {/* Category Filter - Pill Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? `text-white ${cat.color} shadow-lg`
                  : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
                {activeCategory === cat.id && (
                  <div className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <FiChevronRight size={14} />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid - Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill) => {
            const colors = getSkillColor(skill.category);
            
            return (
              <div
                key={skill.id}
                className="group relative"
              >
                {/* Skill Card */}
                <div className={`relative ${colors.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${colors.border} overflow-hidden`}>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bg} rounded-bl-2xl opacity-50`}></div>

                  {/* Skill Header */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                        {getCategoryIcon(skill.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.text} ${colors.bg}`}>
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Proficiency Level */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {getProficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getMasteryStars(skill.level)}
                    </div>
                  </div>

                  {/* Experience Indicator */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Experience Level</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Simple Bar Indicator */}
                    {/* <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colors.badge} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${colors.badge}`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 dark:group-hover:border-gray-700/20 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-primary-600 dark:text-primary-500">Attributes</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Core qualities that enhance my technical capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Adaptability', 
                desc: 'Quickly adjusts to new technologies and environments', 
                icon: '🔄',
                traits: ['Flexible', 'Quick Learner', 'Versatile']
              },
              { 
                name: 'Teamwork', 
                desc: 'Collaborates effectively in diverse teams', 
                icon: '🤝',
                traits: ['Collaborative', 'Supportive', 'Communicative']
              },
              { 
                name: 'Leadership', 
                desc: 'Guides teams toward successful outcomes', 
                icon: '👑',
                traits: ['Initiative', 'Mentoring', 'Strategic']
              },
              { 
                name: 'Positive Attitude', 
                desc: 'Maintains optimism in challenging situations', 
                icon: '😊',
                traits: ['Optimistic', 'Resilient', 'Solution-focused']
              },
            ].map((softSkill,) => (
              <div
                key={softSkill.name}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{softSkill.icon}</span>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {softSkill.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {softSkill.desc}
                </p>

                {/* Traits */}
                <div className="flex flex-wrap gap-2">
                  {softSkill.traits.map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5 rotate-45 translate-x-8 -translate-y-8"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl border border-primary-200 dark:border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-500 mb-2">
                {skills.length}+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Technical Skills
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-500 mb-2">
                4
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Skill Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-500 mb-2">
                85%
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Average Proficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;