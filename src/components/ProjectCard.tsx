import React, { useState } from 'react';
import { Github, ExternalLink, List, X } from 'lucide-react';
import { ProjectType } from '../types/project';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: ProjectType;
}

/**
 * Renders a project card component with an image, title, description, and technology tags.
 * Clicking the card opens a modal with more details about the project.
 * @param {Object} props - The component props
 * @param {Object} props.project - The project object containing details to be displayed
 * @param {string} props.project.image - URL of the project image
 * @param {string} props.project.title - Title of the project
 * @param {string} props.project.description - Short description of the project
 * @param {string[]} props.project.tech - Array of technology tags used in the project
 * @returns {JSX.Element} A React component representing the project card
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="relative bg-gradient-to-t from-black via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
        <div className="relative p-6 z-10">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded text-sm"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded text-sm">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline">
              <List className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;