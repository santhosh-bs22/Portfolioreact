import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'web application', 'mobile app', 'website'];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Recent Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                        title="Live Demo"
                      >
                        <FiEye className="text-gray-900 dark:text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                        title="View Code"
                      >
                        <FiGithub className="text-gray-900 dark:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 font-medium group"
                >
                  View Project
                  <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 transition-all font-medium"
          >
            View All Projects
            <FiExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;