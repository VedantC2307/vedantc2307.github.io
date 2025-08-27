import React from 'react';
import { experience } from '../../data/content';

const Experience = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="experience">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4 font-mono text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> grep -r "experience" /career/
        </div>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-tech">
          Professional <span className="bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Enhanced Timeline line */}
            {index !== experience.length - 1 && (
              <div className="absolute left-0 top-8 h-full w-0.5 bg-gradient-to-b from-tech-blue-400 to-cyber-purple-400 opacity-60"></div>
            )}
            {/* Enhanced Timeline dot */}
            <div className="absolute left-[-7px] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-tech-blue-500 to-cyber-purple-500 border-2 border-white dark:border-metal-gray-800 shadow-glow"></div>
            
            <div className="tech-card p-8 ml-6 group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white font-tech group-hover:text-tech-blue-600 dark:group-hover:text-tech-blue-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                </div>
                <span className="text-sm font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-700 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              
              <h4 className="text-lg text-tech-blue-600 dark:text-tech-blue-400 mb-4 font-medium">
                {exp.company}
              </h4>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies && exp.technologies.length > 0 && 
                  exp.technologies.split(', ').filter(tech => tech).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`skill-tag text-xs ${
                        techIndex % 4 === 0 ? 'bg-tech-blue-100 dark:bg-tech-blue-900/30 text-tech-blue-800 dark:text-tech-blue-200 border border-tech-blue-200 dark:border-tech-blue-800' :
                        techIndex % 4 === 1 ? 'bg-circuit-green-100 dark:bg-circuit-green-900/30 text-circuit-green-800 dark:text-circuit-green-200 border border-circuit-green-200 dark:border-circuit-green-800' :
                        techIndex % 4 === 2 ? 'bg-cyber-purple-100 dark:bg-cyber-purple-900/30 text-cyber-purple-800 dark:text-cyber-purple-200 border border-cyber-purple-200 dark:border-cyber-purple-800' :
                        'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))
                }
              </div>
              
              {/* Location */}
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {exp.location}
              </div>
              
              {/* Responsibilities */}
              <div className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-tech-blue-500 to-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Terminal-style Footer */}
      <div className="mt-12 text-center">
        <div className="inline-block font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-metal-gray-700">
          <span className="text-circuit-green-500">✓</span> {experience.length} roles documented
        </div>
      </div>
    </section>
  );
};

export default Experience;