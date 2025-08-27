import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import printer1 from '../../assets/3d_printer_1.jpeg';
import printer2 from '../../assets/3d_printer_2.jpeg';
import printer3 from '../../assets/3d_printer_3.jpeg';
import printer4 from '../../assets/3d_printer_4.jpeg';
import printer5 from '../../assets/3d_printer_5.jpeg';
import printerDesign from '../../assets/3d printer.png';
import printerGif from '../../assets/3d_printer_gif.mp4';

const PrinterProject = () => {
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
              Custom 3D Printer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            Designed & built from scratch using Solidworks and Raspberry Pi
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
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As part of my final year internship, I had the unique opportunity to design and build a <span className="font-semibold text-tech-blue-600 dark:text-tech-blue-400">3D printer from scratch</span>. It was an engaging and challenging project that allowed me to apply the basic principles of mechanical and electrical engineering, software, product development and project management.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Throughout the project, I gained invaluable experience in designing complex mechanical systems, understanding electrical circuits and components, and learning software to control the printer's movements. It also helped me practice time management, working to tight deadlines, and effective communication with colleagues and suppliers.
              </p>
              <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border-l-4 border-circuit-green-500 p-4 rounded-r-lg">
                <p className="text-circuit-green-700 dark:text-circuit-green-300 font-medium">
                  <strong>Key Achievement:</strong> Assembling the printer was a meticulous process that required close attention to detail and problem-solving ability to overcome various challenges along the way.
                </p>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This project taught me a great deal about the basic principles of engineering and project management, and it provided me with a unique opportunity to apply these principles in a practical setting.
              </p>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-circuit-green-500 to-tech-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2V9a2 2 0 00-2-2h-1C14.716 7 8 13.716 8 22H7a2 2 0 01-2-2V3z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Design
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-circuit-green-50 dark:from-metal-gray-800 dark:to-circuit-green-900/10 border border-circuit-green-200 dark:border-circuit-green-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={printerDesign} 
                  alt="3D Printer SolidWorks Design" 
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I utilized <span className="font-semibold text-circuit-green-600 dark:text-circuit-green-400">SolidWorks</span> to craft a detailed 3D model for my printer. This powerful tool facilitated meticulous design adjustments, ensuring perfect component integration and flawless motion testing. The outcome was a precise and functional blueprint guiding the successful real-world construction of my 3D printer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOM & Component Procurement Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-circuit-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              BOM & Component Procurement
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-cyber-purple-50 dark:from-metal-gray-800 dark:to-cyber-purple-900/10 border border-cyber-purple-200 dark:border-cyber-purple-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src={printer5} 
                  alt="3D Printer Components" 
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Following the SolidWorks design finalization, I meticulously compiled a comprehensive <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">bill of materials (BOM)</span>. This included structural frame elements such as the frame, linear rails, and belt drives, alongside electrical components like stepper motors, drivers, SMPS, RAMPS 1.4, and Arduino Mega microcontroller.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Assembly, Testing & Calibration Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Assembly, Testing & Calibration
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-orange-50 dark:from-metal-gray-800 dark:to-orange-900/10 border border-orange-200 dark:border-orange-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-3 gap-3">
                <img 
                  src={printer1} 
                  alt="3D Printer Assembly 1" 
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img 
                  src={printer2} 
                  alt="3D Printer Assembly 2" 
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img 
                  src={printer3} 
                  alt="3D Printer Assembly 3" 
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I meticulously assembled the 3D printer, starting with the frame, linear rails, and belt drives. Employing principles for proper motor positioning and belt tensioning ensured smooth operation while minimizing backlash. For electronics, I carefully wired the stepper motors, endstops, and hotend to the <span className="font-semibold text-orange-600 dark:text-orange-400">RAMPS board</span> and tuned the stepper drivers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Completion
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-green-50 dark:from-metal-gray-800 dark:to-green-900/10 border border-green-200 dark:border-green-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src={printer4} 
                  alt="Final 3D Printer"
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  After flashing Marlin firmware with custom configurations, extensive calibration followed—adjusting steps/mm for precise movement, leveling the bed, and fine-tuning extrusion parameters. This methodical approach culminated in a <span className="font-semibold text-green-600 dark:text-green-400">3D printer delivering accurate, high-quality prints</span>.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    <strong>Final Result:</strong> A fully functional 3D printer that exceeded expectations and provided invaluable hands-on engineering experience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <video 
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={printerGif} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterProject;
