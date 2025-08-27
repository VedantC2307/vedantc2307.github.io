import React from 'react';
import { bio, contact } from '../../data/content';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-metal-gray-900 via-tech-blue-900 to-metal-gray-800 px-4 md:px-8 relative overflow-hidden" id="about">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tech-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyber-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-circuit-green-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
      
      <div className="text-center text-white max-w-5xl relative z-10">
        {/* Terminal-style greeting */}
        <div className="mb-6 font-mono text-sm text-tech-blue-300 tracking-wider">
          <span className="text-circuit-green-400">$</span> whoami
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-tech">
          <span className="bg-gradient-to-r from-white via-tech-blue-200 to-cyber-purple-300 bg-clip-text text-transparent">
            {bio.name}
          </span>
        </h1>
        
        <div className="mb-4 font-mono text-lg text-tech-blue-300">
          <span className="text-circuit-green-400">{">"}</span> {bio.title}
        </div>
        
        <p className="text-xl text-gray-300 mb-8 font-light">
          {bio.subtitle}
        </p>
        
        {/* Bio description with typewriter effect feel */}
        <div className="bg-black/20 border border-tech-blue-500/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono text-sm">
            <span className="text-tech-blue-400">{"//"}</span> {bio.description}
          </p>
        </div>

        {/* Enhanced Highlights/Key Points */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {bio.highlights.map((highlight, index) => (
            <span
              key={index}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                index % 4 === 0 ? 'bg-tech-blue-600/20 border-tech-blue-500/50 text-tech-blue-300' :
                index % 4 === 1 ? 'bg-circuit-green-600/20 border-circuit-green-500/50 text-circuit-green-300' :
                index % 4 === 2 ? 'bg-cyber-purple-600/20 border-cyber-purple-500/50 text-cyber-purple-300' :
                'bg-gray-600/20 border-gray-500/50 text-gray-300'
              }`}
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Enhanced Contact Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href={`mailto:${contact.email}`}
            className="text-tech-blue-400 hover:text-tech-blue-300 transition-all duration-300 hover:scale-110 group"
            title="Email"
          >
            <div className="p-3 rounded-full border border-tech-blue-500/30 group-hover:border-tech-blue-400/60 group-hover:bg-tech-blue-500/10 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </a>
          <a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tech-blue-400 hover:text-tech-blue-300 transition-all duration-300 hover:scale-110 group"
            title="LinkedIn"
          >
            <div className="p-3 rounded-full border border-tech-blue-500/30 group-hover:border-tech-blue-400/60 group-hover:bg-tech-blue-500/10 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>
          <a 
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tech-blue-400 hover:text-tech-blue-300 transition-all duration-300 hover:scale-110 group"
            title="GitHub"
          >
            <div className="p-3 rounded-full border border-tech-blue-500/30 group-hover:border-tech-blue-400/60 group-hover:bg-tech-blue-500/10 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Enhanced Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="tech-button"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              View Projects
            </span>
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-tech-blue-500 text-tech-blue-400 hover:bg-tech-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get in Touch
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;