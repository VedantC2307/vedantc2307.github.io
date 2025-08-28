import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isDarkMode, toggleTheme } = useTheme();

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
          <div className="hidden md:flex items-center space-x-8">
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
            
            {/* Theme Toggle Slider */}
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tech-blue-500 focus:ring-offset-2 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span
                className={`inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle Slider */}
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tech-blue-500 focus:ring-offset-2 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span
                className={`inline-flex h-3 w-3 items-center justify-center transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-2 h-2 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                ) : (
                  <svg className="w-2 h-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                )}
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="text-gray-600 hover:text-tech-blue-600 dark:text-gray-300 dark:hover:text-tech-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
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