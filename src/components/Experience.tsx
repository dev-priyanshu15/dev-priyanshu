import React from 'react';
import { Calendar, FileDown } from 'lucide-react';
import { images } from '../assets/images';

const Experience = () => {
  const experiences = [
    {
      title: 'Hacktoberfest 2024',
      role: 'Open Source Contributor',
      duration: 'October 2024',
      technologies: [
        'Git',
        'GitHub',
        'JavaScript',
        'Python',
        'Node.js',
        'React',
        'HTML',
        'CSS',
      ],
      responsibilities: [
        'Contributed to multiple open-source projects across web development, backend services, and AI',
        'Improved code quality through feature additions and bug fixes',
        'Collaborated with global developers and participated in code reviews',
        'Enhanced project documentation and maintainability',
      ],
    },
    {
      title: 'GSSoC (GirlScript Summer of Code)',
      role: 'Full Stack Developer',
      duration: 'May 2024 - August 2024',
      technologies: [
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Git',
        'GitHub',
      ],
      responsibilities: [
        'Contributed to full-stack open-source projects focused on developer collaboration',
        'Built responsive UIs and implemented Redux state management',
        'Developed RESTful APIs and integrated MongoDB database',
        'Engaged with the community through mentoring and documentation',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 dark:bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Work Experience */}
          <div>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-gray-800 dark:bg-gray-900 rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-400">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300 dark:text-gray-400">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                      <Calendar className="w-5 h-5" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-200 dark:text-gray-300">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-400">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-indigo-800 dark:bg-indigo-600 text-indigo-200 dark:text-indigo-100 rounded-full text-sm hover:bg-indigo-700 dark:hover:bg-indigo-500 transition duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Resume Section */}
          <div className="bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-400 mb-4">
              Resume
            </h3>
            <div className="mb-6 relative group">
              <div className="relative w-full h-auto">
                <img
                  src="https://i.postimg.cc/63bTYy98/Whats-App-Image-2024-12-03-at-23-57-48-546d69f2.jpg"
                  alt="Resume Preview"
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <a
                    href={images.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition duration-300"
                  >
                    <FileDown className="w-5 h-5" />
                    View Full Resume
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm text-center mb-4">
              Click to view or download the full resume
            </p>
            <div className="flex justify-center">
              <a
                href={images.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition duration-300"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
