import React from 'react';
import { education } from '../../data/content';

const Education = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="education">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4 font-mono text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> cat /education/credentials.txt
        </div>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-tech">
          Academic <span className="bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="tech-card p-8 min-h-[220px] flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white font-tech group-hover:text-tech-blue-600 dark:group-hover:text-tech-blue-400 transition-colors duration-300">
                    {edu.school}
                  </h3>
                </div>
                <span className="text-sm font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-700 px-3 py-1 rounded-full">
                  {edu.duration}
                </span>
              </div>
              
              <p className="text-lg text-tech-blue-600 dark:text-tech-blue-400 mb-4 font-medium">
                {edu.degree}
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {edu.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Terminal-style Footer */}
      <div className="mt-12 text-center">
        <div className="inline-block font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-metal-gray-700">
          <span className="text-circuit-green-500">✓</span> Academic credentials verified
        </div>
      </div>
    </section>
  );
};

export default Education; 