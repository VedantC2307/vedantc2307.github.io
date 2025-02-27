import React from 'react';
import { skills } from '../../data/content';

const Skills = () => {
  return (
    <div className="container mx-auto px-8 py-16" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Technical Skills
      </h2>
      
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Robotics Frameworks */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[250px] flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Robotics Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.roboticsFrameworks.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[250px] flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.programmingLanguages.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Embedded Systems & Interfaces */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[250px] flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white whitespace-nowrap">
            Embedded Systems & Interfaces
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.embeddedSystems.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            {/* {skills.sensorsAndInterfaces && skills.sensorsAndInterfaces.map((skill, index) => (
              <span
                key={`sensor-${index}`}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))} */}
          </div>
        </div>

        {/* Design & Simulation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[250px] flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Design & Simulation
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.designAndSimulation.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;