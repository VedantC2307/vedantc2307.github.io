import React from 'react';
import { skills } from '../../data/content';

const Skills = () => {
  return (
    <section className="w-[95%] sm:w-[90%] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="skills">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block mb-4 font-mono text-xs sm:text-sm text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> ls -la /skills/
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-tech">
          Technical <span className="bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">Arsenal</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Robotics Frameworks */}
        <div className="tech-card p-6 sm:p-8 flex flex-col group">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-tech-blue-500 to-tech-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-tech leading-tight">
              Robotics Frameworks
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.roboticsFrameworks.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-3 py-1.5 text-sm rounded-full bg-tech-blue-100 dark:bg-tech-blue-900/30 text-tech-blue-800 dark:text-tech-blue-200 border border-tech-blue-200 dark:border-tech-blue-800 hover:bg-tech-blue-200 dark:hover:bg-tech-blue-800/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="tech-card p-6 sm:p-8 flex flex-col group">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-circuit-green-500 to-circuit-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-tech leading-tight">
              Programming Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.programmingLanguages.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-3 py-1.5 text-sm rounded-full bg-circuit-green-100 dark:bg-circuit-green-900/30 text-circuit-green-800 dark:text-circuit-green-200 border border-circuit-green-200 dark:border-circuit-green-800 hover:bg-circuit-green-200 dark:hover:bg-circuit-green-800/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Embedded Systems & Interfaces */}
        <div className="tech-card p-6 sm:p-8 flex flex-col group">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyber-purple-500 to-cyber-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-tech leading-tight">
              Embedded Systems &<br className="sm:hidden" /> Interfaces
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.embeddedSystems.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-3 py-1.5 text-sm rounded-full bg-cyber-purple-100 dark:bg-cyber-purple-900/30 text-cyber-purple-800 dark:text-cyber-purple-200 border border-cyber-purple-200 dark:border-cyber-purple-800 hover:bg-cyber-purple-200 dark:hover:bg-cyber-purple-800/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Design & Simulation */}
        <div className="tech-card p-6 sm:p-8 flex flex-col group">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-tech leading-tight">
              Design & Simulation
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.designAndSimulation.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-3 py-1.5 text-sm rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-800/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Terminal-style Footer */}
      <div className="mt-8 sm:mt-12 text-center px-2">
        <div className="inline-block font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-800 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 dark:border-metal-gray-700">
          <span className="text-circuit-green-500">✓</span> Skills successfully enumerated • Last updated: {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Skills;