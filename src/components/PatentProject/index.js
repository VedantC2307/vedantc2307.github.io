import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trussWall from '../../assets/patent/truss_wall.png';
import triangleWaffle from '../../assets/patent/triangle_waffle.png';
import cinderWaffle from '../../assets/patent/cinder_waffle.png';
import sineWaffle from '../../assets/patent/sine_waffle.png';
import layerSection from '../../assets/patent/layer_section.png';

const PatentProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-metal-gray-900 dark:via-metal-gray-800 dark:to-metal-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-8 py-16 pt-24">
        {/* Back Button */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <Link 
            to="/" 
            onClick={handleBackClick}
            className="group flex items-center text-tech-blue-600 hover:text-tech-blue-800 dark:text-tech-blue-400 dark:hover:text-tech-blue-300 transition-all duration-300 bg-white dark:bg-metal-gray-800 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl border border-tech-blue-200 dark:border-tech-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </div>

        {/* Hero Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tech">
            <span className="bg-gradient-to-r from-tech-blue-600 via-cyber-purple-600 to-circuit-green-600 bg-clip-text text-transparent">
              Conversion of 2D/3D Layouts into 3D Printable Design
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            Patent-pending automated method for optimized concrete 3D printing
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Overview Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Overview
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-blue-50 dark:from-metal-gray-800 dark:to-metal-gray-700 border border-tech-blue-200 dark:border-tech-blue-800">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-tech-blue-600 dark:text-tech-blue-400 mb-3">Problem:</h3>  
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Converting 2D/3D designs into 3D-printable concrete structures was traditionally slow, inefficient, and repetitive.  
                </p>
              </div>
              
              <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border-l-4 border-circuit-green-500 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-circuit-green-700 dark:text-circuit-green-300 mb-3">Solution:</h3>  
                <p className="text-circuit-green-700 dark:text-circuit-green-300 leading-relaxed">
                  We developed an algorithm that automates this process, generating structurally optimized designs based on user input.
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Under the guidance of my mentor, COO of Simpliforge Creations, I co-invented a <span className="font-semibold text-tech-blue-600 dark:text-tech-blue-400">patent-pending method</span> to efficiently convert 2D/3D layouts into optimized concrete 3D-printable designs. This involved prototyping, developing a plugin, and leading a team to transform the Rhino Grasshopper algorithm into software—reducing design time and quote turnaround by <span className="font-semibold text-green-600 dark:text-green-400">40%</span>.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-cyber-purple-600 dark:text-cyber-purple-400 mb-3">Key Features:</h3>  
                <ul className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Offers three pre-engineered truss structures, allowing for flexible customization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enables precise control over truss length, meshing distance, layer height, and width
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improves workflow efficiency with faster design iterations and streamlined execution
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The method incorporates intelligent algorithms that automatically generate structurally optimized designs while maintaining architectural integrity. It features customizable truss systems and precise parameter control, allowing for both efficiency and flexibility in the construction process.
              </p>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <p className="text-orange-700 dark:text-orange-300 font-medium">
                  <strong>Patent Status:</strong> This innovation is currently patent-pending (filed in 2023), representing a significant advancement in construction 3D printing and automated design optimization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Addition of trusses between walls Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-circuit-green-500 to-tech-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              I. Addition of Trusses Between Walls
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-circuit-green-50 dark:from-metal-gray-800 dark:to-circuit-green-900/10 border border-circuit-green-200 dark:border-circuit-green-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The wall section is modeled with a wall width of <span className="font-semibold text-circuit-green-600 dark:text-circuit-green-400">250mm</span>. Based on the required printing parameters, such as layer width and meshing distance, the trusses are constructed with a spacing of <span className="font-semibold text-circuit-green-600 dark:text-circuit-green-400">500mm</span> between each trough. This width can be easily adjusted to suit the user's needs.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={trussWall} 
                  alt="Truss Wall Design" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Choose Type of Truss Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-circuit-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              II. Choose Type of Truss
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-cyber-purple-50 dark:from-metal-gray-800 dark:to-cyber-purple-900/10 border border-cyber-purple-200 dark:border-cyber-purple-800">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The user also has an option to choose between <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">3 types of truss strengthening structures</span>:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center group">
                  <div className="bg-white dark:bg-metal-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={triangleWaffle} 
                      alt="Triangle Waffle Design" 
                      className="w-full h-auto rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-800 dark:text-white font-semibold text-lg">Triangle Waffle</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="bg-white dark:bg-metal-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={cinderWaffle} 
                      alt="Cinder Waffle Design" 
                      className="w-full h-auto rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-800 dark:text-white font-semibold text-lg">Cinder Waffle</p>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="bg-white dark:bg-metal-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={sineWaffle} 
                      alt="Sine Waffle Design" 
                      className="w-full h-auto rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-800 dark:text-white font-semibold text-lg">Sine Waffle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adding Layers Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              III. Adding Layers Section
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-orange-50 dark:from-metal-gray-800 dark:to-orange-900/10 border border-orange-200 dark:border-orange-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Users can customize the <span className="font-semibold text-orange-600 dark:text-orange-400">height of the structure</span> and the <span className="font-semibold text-orange-600 dark:text-orange-400">number of layers</span>. This results in a continuous geometric path from the bottom to the top of the structure, providing a tailored solution to the user's specific needs. This highlights the versatility and flexibility of the design.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={layerSection} 
                  alt="Layer Section Design" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentProject; 