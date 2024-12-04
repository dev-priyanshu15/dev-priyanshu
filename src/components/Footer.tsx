import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Bottom Section */}
        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          {/* <p>&copy; {currentYear}</p> */}
          <p>
           &copy; {currentYear} Designed & Built with <span className="text-red-500">&#9829;</span>{' '}
            by Priyanshu Singh 
          </p>

          {/* Horizontal Line before "Let's connect" */}
          <hr className="my-6 border-gray-800" />

          <p className="mt-2 text-sm">
            Let's connect and build something amazing!
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-6">
            <a
              href="https://github.com/dev-priyanshu15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-b20073257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:s.priyanshu.coder@gmail.com"
              className="hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/priyanshu.singh7779"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
