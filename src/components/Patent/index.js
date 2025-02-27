import React from 'react';
import { publications } from '../../data/content';

const Patent = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="patent">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Patent
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {pub.title}
              </h3>
              {pub.status && (
                <span className="text-green-600 dark:text-green-400 text-sm font-medium px-2 py-1 bg-green-100 dark:bg-green-900 rounded">
                  {pub.status}
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {pub.description}
            </p>
            {pub.link && pub.link !== "#" && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block"
              >
                View Patent
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patent; 