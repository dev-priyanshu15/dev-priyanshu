import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { images } from '../assets/images';

const words = [
  'Full Stack Developer',
  'Open Source Contributor',
  'DevOps Enthusiast',
  'Machine Learning Enthusiast',
];

/**
 * Renders the Hero section of a personal portfolio website.
 * This component displays a profile image, name, dynamic role text,
 * and social media links. It uses a typewriter effect to cycle through
 * different roles.
 *
 * @returns {JSX.Element} A section element containing the hero content
 */
const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  /**
   * Manages the typing effect for a word carousel.
   * 
   * This useEffect hook creates a typing animation that cycles through an array of words.
   * It handles both typing and deleting characters to create a dynamic text effect.
   * 
   * @param {number} currentWordIndex - The index of the current word being displayed.
   * @param {string} currentText - The current text being displayed.
   * @param {boolean} isDeleting - Flag indicating whether the effect is currently deleting characters.
   * @returns {function} Cleanup function to clear the typing interval when the component unmounts.
   * 
   * @sideEffect Sets up an interval to update the displayed text.
   * @sideEffect Updates state variables: currentText, isDeleting, and currentWordIndex.
   */
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const type = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }
    };

    const typingInterval = setInterval(type, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentText, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/* "I am Priyanshu Singh" with responsive font size */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            I am Priyanshu Singh
          </h1>

          {/* "I am a [role]" with responsive font size */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-8">
            I am a {currentText}
          </p>
        </div>

        {/* Profile Image Section */}
        <div className="md:w-1/2 text-center">
          <img
            src={images.profile}
            alt="Priyanshu Singh"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg hover:border-yellow-500 transition-all duration-300 ease-in-out"
          />

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/dev-priyanshu15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-b20073257"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:s.priyanshu.coder@gmail.com"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="tel:+919693271783"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <Phone className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
