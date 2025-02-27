import React from 'react';
import { Link } from 'react-router-dom';
import printer1 from '../../assets/3d_printer_1.jpeg';
import printer2 from '../../assets/3d_printer_2.jpeg';
import printer3 from '../../assets/3d_printer_3.jpeg';
import printer4 from '../../assets/3d_printer_4.jpeg';
import printer5 from '../../assets/3d_printer_5.jpeg';
import printerDesign from '../../assets/3d printer.png';
import printerGif from '../../assets/3d_printer_gif.mp4';

const PrinterProject = () => {
  const handleBackClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-8 py-16 pt-24">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/" 
          onClick={handleBackClick}
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        3D Printer Build
      </h1>

      {/* Overview Section */}
      <div className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          As part of my final year internship, I had the unique opportunity to design and build a 3D printer from scratch. It was an engaging and challenging project that allowed me to apply the basic principles of mechanical and electrical engineering, software, product development and project management.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Throughout the project, I gained invaluable experience in designing complex mechanical systems, understanding electrical circuits and components, and learning software to control the printer's movements. It also helped me practice time management, working to tight deadlines, and effective communication with colleagues and suppliers. These skills proved to be very useful in my future career as I was able to apply them to various projects in my job.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Assembling the printer was a meticulous process that required me to pay close attention to detail and apply my problem-solving ability to overcome various challenges along the way. However, the end result was worth the effort - a fully functional 3D printer that exceeded my expectations.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This project taught me a great deal about the basic principles of engineering and project management, and it provided me with a unique opportunity to apply these principles in a practical setting. I'm excited to showcase this project on my portfolio website and share the skills and expertise I gained throughout the process.
        </p>
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