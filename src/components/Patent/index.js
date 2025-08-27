import React from 'react';
import { publications } from '../../data/content';

const Patent = () => {
  return (
    <section className="w-[95%] sm:w-[60%] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="patent">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block mb-4 font-mono text-xs sm:text-sm text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> find /patents -name "*.pending"
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-tech">
          Patent <span className="bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-8xl mx-auto space-y-8">
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="tech-card p-8 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white font-tech group-hover:text-tech-blue-600 dark:group-hover:text-tech-blue-400 transition-colors duration-300">
                  {pub.title}
                </h3>
              </div>
              {pub.status && (
                <span className="text-circuit-green-600 dark:text-circuit-green-400 text-sm font-mono px-3 py-1 bg-circuit-green-100 dark:bg-circuit-green-900/30 rounded-full border border-circuit-green-200 dark:border-circuit-green-800">
                  {pub.status}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {pub.description}
            </p>
            {pub.link && pub.link !== "#" && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View Patent
              </a>
            )}
          </div>
        ))}
      </div>
      
      {/* Terminal-style Footer */}
      <div className="mt-12 text-center">
        <div className="inline-block font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-metal-gray-700">
          <span className="text-circuit-green-500">✓</span> {publications.length} patent{publications.length > 1 ? 's' : ''} filed
        </div>
      </div>
    </section>
  );
};

export default Patent; 