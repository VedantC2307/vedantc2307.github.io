import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import redChassisV1 from '../../assets/rolle_robot/red_chassis_v1.jpg';
import redChassisWithLidar from '../../assets/rolle_robot/red_chassis_with_lidar.jpg';
import greenChassisOpenWiring from '../../assets/rolle_robot/green_chassis_open_wiring.jpg';
import greenChassisWithLidar from '../../assets/rolle_robot/green_chassis_with_lidar.jpg';
import systemArchitecture from '../../assets/rolle_robot/system_architecture.jpg';
import frontPhoto from '../../assets/rolle_robot/front_photo.jpg';
import phoneSensorGraph from '../../assets/rolle_robot/Phone_sensor_graph.png';

const RolleRobotProject = () => {
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
      {/* Enhanced Back Button */}
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

      {/* Enhanced Hero Title */}
      <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-block mb-4 font-mono text-tech-blue-600 dark:text-tech-blue-400">
          <span className="text-circuit-green-500">$</span> cat roll-e_project.md
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-tech">
          <span className="bg-gradient-to-r from-tech-blue-600 via-cyber-purple-600 to-circuit-green-600 bg-clip-text text-transparent">
            Roll-E
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
          A Vision-Language-Driven Home Robot
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue-600 to-cyber-purple-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Project Stats */}
      <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="tech-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Iterations</div>
          </div>
          <div className="tech-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-circuit-green-500 to-tech-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">$750</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Research Grant</div>
          </div>
          <div className="tech-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">VLM</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">AI Integration</div>
          </div>
          <div className="tech-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">ROS2</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Framework</div>
          </div>
        </div>
      </div>

      {/* Enhanced Motivation Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-tech-blue-500 to-cyber-purple-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Motivation
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-blue-50 dark:from-metal-gray-800 dark:to-metal-gray-700 border border-tech-blue-200 dark:border-tech-blue-800">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I built Roll-E to explore how <span className="font-semibold text-tech-blue-600 dark:text-tech-blue-400">Vision-Language Models (VLMs)</span> could go beyond perception and actually control robots. My goal was to design a faster, smarter brain that fuses AI reasoning with classical robotics control, creating a foundation for a home assistant robot.
            </p>
            <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border-l-4 border-circuit-green-500 p-4 rounded-r-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-circuit-green-600 dark:text-circuit-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
                <span className="text-circuit-green-700 dark:text-circuit-green-300 font-semibold">
                  Project supported by $750 research grant
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The long-term vision is to extend Roll-E with <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">a robot arm</span> first, powered by VLA models, capable of performing real household tasks under a single unified brain with spatial awareness and reasoning.
            </p>
          </div>
        </div>
      </div>

      {/* Iteration 1.0 Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Iteration 1.0 – The First Prototype
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-red-50 dark:from-metal-gray-800 dark:to-red-900/10 border border-red-200 dark:border-red-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text and Features */}
            <div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Built a mecanum wheel base with Raspberry Pi for control</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Used a smartphone as a sensor hub (camera, microphone, WebXR localization)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrated a basic VLM agent to command absolute robot movements and generate spoken responses about objects in the environment</span>
                </li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  <strong>Core Achievement:</strong> A mobile robot that could "see", "hear" and "talk" all through just a phone and its environment indoors.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center items-start">
              <img 
                src={greenChassisWithLidar} 
                alt="Roll-E Iteration 1.0 - Red Chassis" 
                className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
          </div>
          {/* YouTube Video for Iteration 1.0 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Iteration 1.0 Demo
            </h3>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg max-h-56">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FYqDDZrb-XY"
                title="Roll-E Iteration 1.0 Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Iteration 1.1 Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Iteration 1.1 – Adding Spatial Awareness
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-orange-50 dark:from-metal-gray-800 dark:to-orange-900/10 border border-orange-200 dark:border-orange-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex justify-center items-start">
              <img 
                src={redChassisV1} 
                alt="Roll-E Iteration 1.1 - Red Chassis with LiDAR" 
                className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
            {/* Text and Features */}
            <div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Added RPLIDAR A1 and ROS2 SLAM nodes for mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Improved localization and autonomous navigation</span>
                </li>
              </ul>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <p className="text-orange-700 dark:text-orange-300 font-medium">
                  <strong>Spatial Intelligence:</strong> Roll-E gained the ability to understand its environment through LiDAR mapping and SLAM algorithms.
                </p>
              </div>
              
              {/* YouTube Video for Iteration 1.1 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Iteration 1.1 Demo with simple VLM agent and SLAM
                </h3>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg max-h-84">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/watch?v=4LokRFOcv3o"
                    title="Roll-E Iteration 1.1 Demo with LiDAR"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Iteration 2.0 Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-circuit-green-500 to-tech-blue-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Iteration 2.0 – Hardware Overhaul
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-circuit-green-50 dark:from-metal-gray-800 dark:to-circuit-green-900/10 border border-circuit-green-200 dark:border-circuit-green-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text and Features */}
            <div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Upgraded drivetrain with DC motors + encoders and a dedicated ESP32-S3 motor controller</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Implemented PI control with EMA filtering for smoother, accurate motion control</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-circuit-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Redesigned the 3D-printed chassis to reduce vibration noise due to LiDAR</span>
                </li>
              </ul>
              <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border-l-4 border-circuit-green-500 p-4 rounded-r-lg">
                <p className="text-circuit-green-700 dark:text-circuit-green-300 font-medium">
                  <strong>Engineering Milestone:</strong> This marked the shift from a proof-of-concept to a more engineered platform.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center items-start">
              <img 
                src={redChassisWithLidar} 
                alt="Roll-E Iteration 2.0 - Green Chassis Open Wiring" 
                className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Iteration 2.1 Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-circuit-green-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Iteration 2.1 – Intelligence Layer
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-cyber-purple-50 dark:from-metal-gray-800 dark:to-cyber-purple-900/10 border border-cyber-purple-200 dark:border-cyber-purple-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex justify-center items-start">
              <img 
                src={greenChassisOpenWiring} 
                alt="Roll-E Iteration 2.1 - Green Chassis with LiDAR" 
                className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
            {/* Text and Features */}
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                With reliable hardware in place, I integrated <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">higher-level autonomy</span>. Roll-E now runs:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Nav2 for autonomous navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A LangChain-powered agent that fuses maps, sensor data, and language prompts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyber-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A ROS2-based architecture combining localization, motor control, and VLM agent for semantic reasoning and control</span>
                </li>
              </ul>
              <div className="bg-cyber-purple-50 dark:bg-cyber-purple-900/20 border-l-4 border-cyber-purple-500 p-4 rounded-r-lg">
                <p className="text-cyber-purple-700 dark:text-cyber-purple-300 font-medium">
                  <strong>AI Integration:</strong> The fusion of classical robotics with modern language models creating true autonomy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Architecture Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-tech-blue-500 to-circuit-green-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Current Architecture
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-tech-blue-50 dark:from-metal-gray-800 dark:to-tech-blue-900/10 border border-tech-blue-200 dark:border-tech-blue-800">
          <div className="space-y-8">
            {/* Architecture Description */}
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Roll-E's brain combines <span className="font-semibold text-tech-blue-600 dark:text-tech-blue-400">classical robotics stacks</span> (ROS2 + SLAM + Nav2) with <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">modern AI reasoning</span> (LangChain + VLMs) to achieve adaptive and intelligent behavior.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-tech-blue-50 dark:bg-tech-blue-900/20 border border-tech-blue-200 dark:border-tech-blue-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-tech-blue-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-tech-blue-700 dark:text-tech-blue-300">Spatial Intelligence</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Voronoi-based segmentation to partition home map into clear navigable regions.</p>
                </div>
                <div className="bg-circuit-green-50 dark:bg-circuit-green-900/20 border border-circuit-green-200 dark:border-circuit-green-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-circuit-green-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-circuit-green-700 dark:text-circuit-green-300">Memory System</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stores observations of what Roll-E sees in JSON and keeps a brief chat memory, so it can recall past conversations when asked.</p>
                </div>
                <div className="bg-cyber-purple-50 dark:bg-cyber-purple-900/20 border border-cyber-purple-200 dark:border-cyber-purple-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-cyber-purple-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-cyber-purple-700 dark:text-cyber-purple-300">Real-time Fusion</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Combines sensor data, localization, control, and the VLM agent for seamless interaction, with easy option to integrate for more sensors to provide better state estimates.</p>
                </div>
              </div>
            </div>
            {/* System Architecture to Current Robot Comparison */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-tech-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                From Architecture to Reality
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* System Architecture Diagram */}
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">First Iteration</h4>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-metal-gray-900 dark:to-metal-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <img 
                      src={systemArchitecture} 
                      alt="Roll-E System Architecture Diagram" 
                      className="w-full max-w-sm h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Arrow with System Architecture on Top */}
                <div className="flex flex-col justify-center items-center space-y-4">
                  {/* System Architecture Image */}
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-metal-gray-900 dark:to-metal-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <img 
                      src={phoneSensorGraph} 
                      alt="Phone Sensor System Architecture" 
                      className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center items-center">
                    <div className="hidden lg:flex items-center">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-tech-blue-500 to-cyber-purple-500"></div>
                      <svg className="w-8 h-8 text-tech-blue-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="lg:hidden flex justify-center py-4">
                      <svg className="w-8 h-8 text-tech-blue-500 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Latest Robot Photo */}
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Current Implementation</h4>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-metal-gray-900 dark:to-metal-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <img 
                      src={frontPhoto} 
                      alt="Roll-E Current Robot - Front View" 
                      className="w-full max-w-sm h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision Section */}
      <div className={`mb-20 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-tech">
            Future Vision
          </h2>
        </div>
        <div className="tech-card p-8 bg-gradient-to-br from-white to-cyber-purple-50 dark:from-metal-gray-800 dark:to-cyber-purple-900/10 border border-cyber-purple-200 dark:border-cyber-purple-800">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Roll-E is just the first step. My ultimate goal is to extend the platform with <span className="font-semibold text-cyber-purple-600 dark:text-cyber-purple-400">robotic arms</span>, creating a mobile assistant capable of manipulating objects and executing real household tasks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyber-purple-50 to-pink-50 dark:from-cyber-purple-900/20 dark:to-pink-900/20 border border-cyber-purple-200 dark:border-cyber-purple-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-cyber-purple-600 dark:text-cyber-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-cyber-purple-700 dark:text-cyber-purple-300">Dual Arm Manipulation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Integration of robotic arms for object manipulation and complex household tasks</p>
              </div>
              <div className="bg-gradient-to-br from-circuit-green-50 to-tech-blue-50 dark:from-circuit-green-900/20 dark:to-tech-blue-900/20 border border-circuit-green-200 dark:border-circuit-green-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-circuit-green-600 dark:text-circuit-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-circuit-green-700 dark:text-circuit-green-300">VLA Integration</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Vision-Language-Action models unifying state estimation, spatial reasoning, and control</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-tech-blue-50 via-cyber-purple-50 to-circuit-green-50 dark:from-tech-blue-900/20 dark:via-cyber-purple-900/20 dark:to-circuit-green-900/20 border border-tech-blue-200 dark:border-tech-blue-700 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-tech-blue-600 dark:text-tech-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z"/>
                </svg>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-tech-blue-600 via-cyber-purple-600 to-circuit-green-600 bg-clip-text text-transparent">General-Purpose Home Assistant</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">A truly autonomous fun robot capable of acting as a comprehensive household assistant with spatial awareness and reasoning capabilities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Links Section */}
      <div className={`mb-16 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
              Explore the complete project implementation and see Roll-E in action
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/VedantC2307/rolle_robot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-600"
            >
              <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div className="text-left">
                <div className="font-semibold text-lg">GitHub Repository</div>
                <div className="text-sm text-gray-300">Complete source code & documentation</div>
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=4LokRFOcv3o"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-red-500"
            >
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              <div className="text-left">
                <div className="font-semibold text-lg">YouTube Demo</div>
                <div className="text-sm text-red-200">Watch Roll-E in action</div>
              </div>
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with <span className="text-red-500">❤️</span> using ROS2, Python, and Vision-Language Models
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RolleRobotProject;
