import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  RNS Institute of Technology
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
              </div>
            </div>
            <div className="ml-12">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-700 dark:text-gray-200">
                  B.E in Information Science and Engineering
                </p>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <p>2022 – 2026</p>
                <p>CGPA: 8.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;