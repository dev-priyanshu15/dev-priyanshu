import React from 'react';
import { Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="flex-1">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-300 dark:text-gray-200 leading-relaxed mb-6">
                    I am Priyanshu Singh, a passionate Full Stack Developer
                    currently pursuing a B.E. in Information Science and
                    Engineering at RNS Institute of Technology, Bangalore, with
                    a CGPA of 8.3. My journey into coding began with an innate
                    curiosity about how technology shapes our world, and this
                    curiosity has since evolved into a deep-seated passion for
                    building robust and scalable web applications. Inspired by
                    Steve Jobs' words, “The people who are crazy enough to think
                    they can change the world are the ones who do,” I strive to
                    create impactful solutions that blend innovation with
                    functionality.
                  </p>
                  <p className="text-gray-300 dark:text-gray-200 leading-relaxed mb-6">
                    With a diverse tech stack, including C++, Python, Java,
                    JavaScript, and TypeScript, I specialize in crafting modern
                    applications using frameworks like React.js, Redux, Next.js,
                    Node.js, and Express.js. My expertise extends to managing
                    databases such as MongoDB, PostgreSQL, and Redis, while
                    leveraging tools like Git and Cloudinary for efficient
                    development workflows. Over the years, I have worked on
                    innovative projects like <strong>EduSphere</strong>, a
                    placement preparation app designed to empower students, and
                    a <strong>Social Media Blockchain App</strong> that
                    integrates blockchain technology for secure and transparent
                    interactions.
                  </p>
                  <p className="text-gray-300 dark:text-gray-200 leading-relaxed">
                    For me, coding is more than a profession—it’s a way to
                    transform abstract ideas into impactful realities. Driven by
                    Albert Einstein's philosophy, “Life is like riding a
                    bicycle. To keep your balance, you must keep moving,” I
                    consistently seek to expand my skills, explore emerging
                    technologies, and collaborate on projects that push the
                    boundaries of innovation to make a meaningful difference in
                    society.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend Development Box */}
              <div className="flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg">
                <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-200 mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-center text-sm">
                  Crafting responsive and intuitive user interfaces with modern
                  frameworks
                </p>
              </div>

              {/* Backend Development Box */}
              <div className="flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg">
                <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-200 mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-center text-sm">
                  Building scalable server-side applications and RESTful APIs
                </p>
              </div>

              {/* Database Management Box */}
              <div className="flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg">
                <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-200 mb-2">
                  Database Management
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-center text-sm">
                  Working with both SQL and NoSQL databases for optimal data
                  storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
