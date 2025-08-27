import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-metal-gray-800/95 backdrop-blur-md border-b border-gray-200 dark:border-metal-gray-700 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 bg-clip-text text-transparent">
            <Link to="/" className="font-tech tracking-wider">
              &lt;Vedant Choudhary /&gt;
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#education" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Education
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#projects" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#skills" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#experience" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Experience
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#patent" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Patent
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </>
            ) : (
              <Link to="/" className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                &larr; Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-metal-gray-800/95 backdrop-blur-md border-t border-gray-200 dark:border-metal-gray-700">
              {isHomePage ? (
                <>
                  <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    About
                  </a>
                  <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Education
                  </a>
                  <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Experience
                  </a>
                  <a href="#patent" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Patent
                  </a>
                  <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Projects
                  </a>
                  <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Skills
                  </a>
                  <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                    Contact
                  </a>
                </>
              ) : (
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300 font-medium">
                  &larr; Back to Home
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;