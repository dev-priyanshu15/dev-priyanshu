import React from 'react';

const Skills = () => {
  const allSkills = [
    // Languages
    {
      name: 'C++',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
    {
      name: 'Python',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Java',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'JavaScript',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'HTML',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'TypeScript',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    // Databases & Tools
    {
      name: 'MongoDB',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'PostgreSQL',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Git',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Redis',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      name: 'Cloudinary',
      img_src:
        'https://res.cloudinary.com/cloudinary/image/upload/v1691661741/cloudinary_logo.png',
    },
    {
      name: 'Socket.io',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    },
    {
      name: 'Docker',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'AWS',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'Linux',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
    // Frameworks & Libraries
    {
      name: 'Node.js',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
      name: 'Material-UI',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    },
    {
      name: 'Bootstrap',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Express.js',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'RESTful API',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3281/3281034.png',
    },
    {
      name: 'React',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Redux',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      name: 'Next.js',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      img_src:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 w-32 h-32 bg-gray-800 rounded-lg border border-gray-700 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={skill.img_src}
                alt={skill.name}
                className="w-16 h-16 mb-2 mx-auto rounded-full"
              />
              <span className="text-sm text-indigo-600 dark:text-indigo-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
