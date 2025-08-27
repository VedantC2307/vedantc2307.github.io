import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/content';

const Projects = () => {
  const handleViewDetails = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-[95%] sm:w-[90%] mx-auto px-4 sm:px-6 py-12 sm:py-16" id="projects">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block mb-4 font-mono text-xs sm:text-sm text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> cd /projects && ls -la
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-tech">
          Featured <span className="bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-8xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <div key={index} className="tech-card overflow-hidden group flex flex-col h-full">
            {/* Project Header */}
            <div className="p-6 border-b border-gray-200 dark:border-metal-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
                    project_{String(index + 1).padStart(2, '0')}.exe
                  </div>
                </div>
                {/* Star Count for ros2-mobile-sensor-bridge */}
                {project.title === "ros2-mobile-sensor-bridge" && (
                  <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="font-bold">100+</span>
                    <span className="ml-1 opacity-90">★</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 font-tech group-hover:text-tech-blue-600 dark:group-hover:text-tech-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.split(', ').map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`skill-tag ${
                      techIndex % 4 === 0 ? 'bg-tech-blue-100 dark:bg-tech-blue-900/30 text-tech-blue-800 dark:text-tech-blue-200 border border-tech-blue-200 dark:border-tech-blue-800' :
                      techIndex % 4 === 1 ? 'bg-circuit-green-100 dark:bg-circuit-green-900/30 text-circuit-green-800 dark:text-circuit-green-200 border border-circuit-green-200 dark:border-circuit-green-800' :
                      techIndex % 4 === 2 ? 'bg-cyber-purple-100 dark:bg-cyber-purple-900/30 text-cyber-purple-800 dark:text-cyber-purple-200 border border-cyber-purple-200 dark:border-cyber-purple-800' :
                      'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              {/* Action Buttons - Fixed at bottom */}
              <div className="flex justify-end space-x-3 mt-6 pt-4">
                {/* View Details Button for specific projects */}
                {project.hasViewDetails && (
                  <Link
                    to={project.title === "Autonomous AI Desktop Assistant Robot" ? "/ai-assistant-robot" : 
                        project.title === "Wearable Robotic Exoskeleton for Gait Assistance" ? "/exoskeleton-project" : "#"}
                    onClick={handleViewDetails}
                    className="tech-button text-sm px-4 py-2"
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View Details
                    </span>
                  </Link>
                )}
                {project.title === "Custom 3D Printer" && (
                  <Link
                    to="/3d-printer-project"
                    onClick={handleViewDetails}
                    className="tech-button text-sm px-4 py-2"
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View Details
                    </span>
                  </Link>
                )}
                {project.title === "Conversion of 2D/3D Layouts into 3D Printable Design" && (
                  <Link
                    to="/patent-project"
                    onClick={handleViewDetails}
                    className="tech-button text-sm px-4 py-2"
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View Details
                    </span>
                  </Link>
                )}
                {project.youtubeLink && project.youtubeLink !== "#" && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    YouTube
                  </a>
                )}
                {/* Multiple GitHub buttons for projects with hasMultipleGithub */}
                {project.hasMultipleGithub ? (
                  <>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      {project.github1Label}
                    </a>
                    <a
                      href={project.githubLink2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      {project.github2Label}
                    </a>
                  </>
                ) : (
                  // Single GitHub button for projects without hasMultipleGithub
                  project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      GitHub
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Terminal-style Footer */}
      <div className="mt-12 text-center">
        <div className="inline-block font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-metal-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-metal-gray-700">
          <span className="text-circuit-green-500">✓</span> {projects.length} projects loaded successfully
        </div>
      </div>
    </section>
  );
};

export default Projects;