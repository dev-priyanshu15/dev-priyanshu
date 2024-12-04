import { ProjectType } from '../types/project';
import { images } from '../assets/images';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'EduSphere',
    description: 'A comprehensive placement preparation platform aimed at students and job aspirants. It offers study materials, courses, assignments, and source code to aid in competitive exam preparation.',
    image: images.projects.edusphere,
    tech: ['Next.js', 'TypeScript', 'Material-UI', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis'],
    github: 'EduSphere',
    features: [
      'Admin Dashboard for course management',
      'Real-time communication using Socket.io',
      'Secure payment gateway integration',
      'JWT authentication system'
    ]
  },
  {
    id: 2,
    title: 'Social Media Blockchain App',
    description: 'Decentralized platform connecting music artists with fans through blockchain technology, ensuring secure and transparent interactions.',
    image: images.projects.blockchain,
    tech: ['React.js', 'Next.js', 'Web3.js', 'Ethereum', 'Node.js', 'MongoDB', 'Solidity'],
    github: 'Blockchain-App',
    features: [
      'Smart contract integration',
      'Decentralized content storage',
      'Artist profile management',
      'Token-based fan interactions'
    ]
  },
  {
    id: 3,
    title: 'Flavor-Fusion-App',
    description: 'Recipe discovery and sharing platform with advanced meal planning capabilities and grocery list management system.',
    image: images.projects.flavorFusion,
    tech: ['React.js', 'Redux', 'Material-UI', 'Firebase', 'Tailwind CSS'],
    github: 'Flavor-Fusion-App',
    features: [
      'Recipe search and filtering',
      'Meal planning calendar',
      'Automated grocery lists',
      'User recipe collections'
    ]
  },
  {
    id: 4,
    title: 'AI-Image-Generator',
    description: 'Web application utilizing OpenAI\'s DALL-E model to generate unique images from textual descriptions.',
    image: images.projects.aiGenerator,
    tech: ['React.js', 'Node.js', 'Express.js', 'OpenAI API', 'Cloudinary', 'Tailwind CSS'],
    github: 'AI-Image-Generator',
    features: [
      'Text-to-image generation',
      'Image storage and management',
      'Responsive design',
      'Share generated images'
    ]
  },
  {
    id: 5,
    title: 'Redux-Shopping-App',
    description: 'Full-featured e-commerce platform with shopping cart functionality and secure user authentication system.',
    image: images.projects.shopping,
    tech: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'Redux-Shopping-App',
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'User authentication',
      'Admin dashboard'
    ]
  },
  {
    id: 6,
    title: 'Object-Detection',
    description: 'Real-time object detection system combining Arduino hardware with computer vision for tracking and motor control.',
    image: images.projects.objectDetection,
    tech: ['Python', 'OpenCV', 'Arduino', 'Hardware Integration'],
    github: 'Object-Detection',
    features: [
      'Real-time object tracking',
      'Motor control system',
      'Sensor integration',
      'Computer vision processing'
    ]
  }
];