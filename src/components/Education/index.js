import React from 'react';
import { education } from '../../data/content';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="education">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Education
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[200px] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {edu.school}
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  {edu.duration}
                </span>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {edu.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.location}
              </p>
            </div>
            {/* <p className="text-gray-600 dark:text-gray-300 mt-2">
              GPA: {edu.gpa}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 