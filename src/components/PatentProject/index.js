import React from 'react';
import { Link } from 'react-router-dom';
import trussWall from '../../assets/patent/truss_wall.png';
import triangleWaffle from '../../assets/patent/triangle_waffle.png';
import cinderWaffle from '../../assets/patent/cinder_waffle.png';
import sineWaffle from '../../assets/patent/sine_waffle.png';
import layerSection from '../../assets/patent/layer_section.png';

const PatentProject = () => {
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
        3D Layout to Printable Design Conversion Method
      </h1>

      {/* Overview Section */}
      <div className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Problem:</h3>  
        <div className="text-base leading-relaxed">
          Converting 2D/3D designs into 3D-printable concrete structures was traditionally slow, inefficient, and repetitive.  
        </div>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Solution:</h3>  
        <div className="text-base leading-relaxed">
          We developed an algorithm that automates this process, generating structurally optimized designs based on user input.  
          <br></br> 
          Under the guidance of my mentor, COO of Simpliforge Creations, I co-invented a patent-pending method to efficiently convert 2D/3D layouts into optimized concrete 3D-printable designs. This involved prototyping, developing a plugin, and leading a team to transform the Rhino Grasshopper algorithm into software—reducing design time and quote turnaround by 40%.  
        </div>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h3>  
        <div className="text-base leading-relaxed">
          - Offers three pre-engineered truss structures, allowing for flexible customization.  
          - Enables precise control over truss length, meshing distance, layer height, and width to meet project-specific requirements.  
          - Improves workflow efficiency with faster design iterations, quicker quotes, and streamlined project execution.
        </div>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
          The method incorporates intelligent algorithms that automatically generate structurally optimized designs while maintaining architectural integrity. It features customizable truss systems and precise parameter control, allowing for both efficiency and flexibility in the construction process.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          This innovation is currently patent-pending (filed in 2023), representing a significant advancement in the field of construction 3D printing and automated design optimization.
        </p>
      </div>

      {/* Addition of trusses between walls Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
            I. Addition of trusses between walls
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {/* Text on the left */}
            <div className="md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                The wall section is modeled with a wall width of 250mm. Based on the required printing parameters,
                such as layer width and meshing distance, the trusses are constructed with a spacing of 500mm
                between each trough. This width can be easily adjusted to suit the user's needs.
              </p>
            </div>
            {/* Image on the right */}
            <div className="md:w-2/5 flex justify-end items-center">
              <img 
                src={trussWall} 
                alt="Truss Wall Design" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Choose Type of Truss Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
            II. Choose Type of Truss
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-6">
            {/* Text at the top */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                The user also has an option to choose between 3 types of truss strengthing structures:
              </p>
            </div>
            {/* Images grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <img 
                  src={triangleWaffle} 
                  alt="Triangle Waffle Design" 
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold text-base">Triangle Waffle</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={cinderWaffle} 
                  alt="Cinder Waffle Design" 
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold text-base">Cinder Waffle</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={sineWaffle} 
                  alt="Sine Waffle Design" 
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold text-base">Sine Waffle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adding Layers Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800 dark:text-white dark:border-gray-700">
            III. Adding Layers Section
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {/* Text on the left */}
            <div className="md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Users can customize the height of the structure and the number of layers. This results in a continuous geometric path from the bottom to the top of the structure, providing a tailored solution to the user's specific needs. This highlights the versatility and flexibility of the design.
              </p>
            </div>
            {/* Image on the right */}
            <div className="md:w-2/5 flex justify-end items-center">
              <img 
                src={layerSection} 
                alt="Layer Section Design" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentProject; 