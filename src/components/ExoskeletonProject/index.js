import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import deviceImage from '../../assets/odrive_robot/device_image.jpg';
import lowerBodyImage from '../../assets/odrive_robot/lower_body.jpg';
import ros2DiagramImage from '../../assets/odrive_robot/ros2_odriveCAN.png';

const ExoskeletonProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-metal-gray-900 dark:via-metal-gray-800 dark:to-metal-gray-900">
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
              Wearable Robotic Exoskeleton for Gait Assistance
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            Real-time ROS2 control framework for human-robot interaction
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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At Arizona State University's <span className="font-semibold text-tech-blue-600 dark:text-tech-blue-400">Neuromuscular Control & Human Robotics Lab</span>, I developed a ROS2-based control framework for a wearable robotic exoskeleton designed to reduce joint loading and improve walking patterns. This project combined real-time impedance control, ODrive motor drivers, and biomechanical testing, with applications in rehabilitation and assistive mobility.
            </p>
          </div>
        </div>

        {/* My Contributions Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-circuit-green-500 to-tech-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              My Contributions
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-circuit-green-50 dark:from-metal-gray-800 dark:to-circuit-green-900/10 border border-circuit-green-200 dark:border-circuit-green-800">
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Spearheaded <strong>ROS2 impedance controller framework</strong></span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Integrated <strong>ODrive, encoders, and sensors</strong> for closed-loop torque control and safe human–robot interaction</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Implemented <strong>friction compensation</strong> to smooth motion and enhance comfort</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Designed a <strong>custom PCB for power distribution</strong>, improving reliability and system safety</span>
              </li>
            </ul>
          </div>
        </div>

        {/* System Architecture Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-circuit-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              System Architecture
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-cyber-purple-50 dark:from-metal-gray-800 dark:to-cyber-purple-900/10 border border-cyber-purple-200 dark:border-cyber-purple-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The control framework was built entirely in <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">ROS2</span>:
            </p>

            {/* ROS2 Diagram */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-metal-gray-900 dark:to-metal-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src={ros2DiagramImage} 
                  alt="ROS2 System Architecture Diagram" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* System Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-tech-blue-50 dark:bg-tech-blue-900/20 border border-tech-blue-200 dark:border-tech-blue-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-tech-blue-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-tech-blue-700 dark:text-tech-blue-300">Encoder Feedback</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Publishes motor position and velocity data</p>
              </div>
              <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border border-circuit-green-200 dark:border-circuit-green-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-circuit-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-circuit-green-700 dark:text-circuit-green-300">Impedance Controller</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generates torque commands to be applied</p>
              </div>
              <div className="bg-cyber-purple-50 dark:bg-cyber-purple-900/20 border border-cyber-purple-200 dark:border-cyber-purple-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-cyber-purple-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-cyber-purple-700 dark:text-cyber-purple-300">Friction Compensation</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Helps with backdrivability and smooth motion</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-orange-700 dark:text-orange-300">Motor Control</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Final torque commands sent to ODrive for actuation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Images Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Hardware Implementation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Waist-mounted robot + ODrive */}
            <div className="tech-card p-6 bg-gradient-to-br from-white to-orange-50 dark:from-metal-gray-800 dark:to-orange-900/10 border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Waist-mounted Robot + ODrive</h3>
              <div className="flex justify-center">
                <img 
                  src={deviceImage} 
                  alt="Waist-mounted robot and ODrive setup" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Knee brace */}
            <div className="tech-card p-6 bg-gradient-to-br from-white to-red-50 dark:from-metal-gray-800 dark:to-red-900/10 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Knee Brace</h3>
              <div className="flex justify-center">
                <img 
                  src={lowerBodyImage} 
                  alt="Knee exoskeleton implementation" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Links Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
              Project Resources
            </h2>
          </div>
          <div className="tech-card p-8 bg-gradient-to-br from-white to-gray-50 dark:from-metal-gray-800 dark:to-metal-gray-700 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Explore the complete project implementation
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/VedantC2307/OdriveCANControl/tree/vedant"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-600"
              >
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-lg">ROS2 Control Framework</div>
                  <div className="text-sm text-gray-300">OdriveCANControl - Real-time impedance control</div>
                </div>
              </a>
              <a
                href="https://github.com/VedantC2307/Odrive-control-app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-gradient-to-r from-tech-blue-600 to-tech-blue-700 hover:from-tech-blue-700 hover:to-tech-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-tech-blue-500"
              >
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-lg">Control App</div>
                  <div className="text-sm text-tech-blue-200">ODrive Control Application</div>
                </div>
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with <span className="text-red-500">❤️</span> using ROS2, ODrive, and embedded systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExoskeletonProject;
