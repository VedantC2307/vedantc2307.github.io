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
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
          Design
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image on the left */}
            <div className="md:w-1/2">
              <div className="aspect-[4/3] w-full mb-4">
                <img 
                  src={printerDesign} 
                  alt="3D Printer SolidWorks Design" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
            </div>
            {/* Text on the right */}
            <div className="md:w-1/2 flex items-center">
              <p className="text-gray-700 dark:text-gray-300">
                I utilized SolidWorks to craft a detailed 3D model for my printer. This powerful tool facilitated meticulous design adjustments, ensuring perfect component integration and flawless motion testing. The outcome was a precise and functional blueprint guiding the successful real-world construction of my 3D printer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOM & Component Procurement Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
          BOM & Component Procurement
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image on the left */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-80 h-80">
                <img 
                  src={printer5} 
                  alt="3D Printer Components" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">
                Following the SolidWorks design finalization, I meticulously compiled a comprehensive bill of materials (BOM). 
                This included structural frame elements such as the frame, linear rails, and belt drives, alongside electrical components 
                like stepper motors, drivers, SMPS, RAMPS 1.4, and Arduino Mega microcontroller. Through research and supplier comparisons, 
                top-quality components were secured at cost-effective rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assembly, Testing & Calibration Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
          Assembly, Testing & Calibration
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Images on the left */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-3 gap-2 w-full">
                <div>
                  <img 
                    src={printer1} 
                    alt="3D Printer Assembly 1" 
                    className="w-full h-52 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img 
                    src={printer2} 
                    alt="3D Printer Assembly 2" 
                    className="w-full h-52 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img 
                    src={printer3} 
                    alt="3D Printer Assembly 3" 
                    className="w-full h-52 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* Text on the right */}
            <div className="md:w-1/2 flex items-center">
              <p className="text-gray-700 dark:text-gray-300">
                I meticulously assembled the 3D printer, starting with the frame, linear rails, and belt drives. Employing principles for proper motor positioning and belt tensioning ensured smooth operation while minimizing backlash. For electronics, I carefully wired the stepper motors, endstops, and hotend to the RAMPS board and tuned the stepper drivers. After flashing Marlin firmware with custom configurations, extensive calibration followed—adjusting steps/mm for precise movement, leveling the bed, and fine-tuning extrusion parameters. This methodical approach culminated in a 3D printer delivering accurate, high-quality prints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Completion Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
          Completion
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image on the left */}
            <div className="md:w-1/3">
              <div className="w-96 h-96">
                <img 
                  src={printer4} 
                  alt="Final 3D Printer" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Text in the middle */}
            <div className="md:w-1/3">
              <p className="text-gray-700 dark:text-gray-300">
                The completed 3D printer delivers high-quality prints with precision. A demonstration video highlights intricate details and smooth finishes, showcasing the printer's capabilities. Equipped with Octoprint, powered by a Raspberry Pi, it enables remote control and monitoring. Emphasizing features like a sturdy frame, reliable components, and remote printing capabilities, the video illustrates the printer's versatility in producing complex models with intricate geometries and overhangs.
              </p>
            </div>
            {/* Video on the right */}
            <div className="md:w-1/3">
              <div className="w-96 h-96">
                <video 
                  className="w-full h-full object-contain rounded-lg"
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