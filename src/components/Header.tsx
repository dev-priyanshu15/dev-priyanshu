import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  // State to control the visibility of the mobile menu and sidebar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/50 via-transparent to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white hover:text-indigo-600">
              About
            </a>
            <a href="#skills" className="text-white hover:text-indigo-600">
              Skills
            </a>
            <a href="#experience" className="text-white hover:text-indigo-600">
              Experience
            </a>
            <a
              href="#achievements"
              className="text-white hover:text-indigo-600"
            >
              Achievements
            </a>
            <a href="#projects" className="text-white hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-indigo-600">
              Contact
            </a>{' '}
            {/* Added Contact link */}
          </nav>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu if the backdrop is clicked
      ></div>

      {/* Sidebar (opens from the left) */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6">
          <a
            href="#about"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
          >
            About
          </a>
          <a
            href="#skills"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#achievements"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
          </a>
          <a
            href="#projects"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="py-2 text-white hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>{' '}
          {/* Added Contact link */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
