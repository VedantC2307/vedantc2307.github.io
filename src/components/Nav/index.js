import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            <Link to="/">Vedant Choudhary</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </a>
                <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Education
                </a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Projects
                </a>
                <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Skills
                </a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Experience
                </a>
                <a href="#patent" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Patent
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Contact
                </a>
              </>
            ) : (
              <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isHomePage ? (
                <>
                  <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    About
                  </a>
                  <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Education
                  </a>
                  <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Experience
                  </a>
                  <a href="#patent" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Patent
                  </a>
                  <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Projects
                  </a>
                  <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Skills
                  </a>
                  <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Contact
                  </a>
                </>
              ) : (
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Back to Home
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