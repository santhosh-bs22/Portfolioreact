import type { Service, Project, Skill } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications with modern technologies.',
    icon: '💻',
    features: ['React', 'TypeScript', 'JavaScript', 'Responsive Design']
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that provide exceptional user experiences.',
    icon: '🎨',
    features: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Creating complete web solutions with frontend and backend integration.',
    icon: '⚡',
    features: ['Full Stack', 'Java', 'Mendix', 'APIs']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'CineVerse – Movie Website',
    description: 'Built using HTML, CSS, and JavaScript with multilingual support, trailers, and upcoming movie sections.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://santhosh-bs22.github.io/CineVerse-Ultimate-Movie-Experience/',
    githubUrl: 'https://github.com/santhosh-bs22/CineVerse-Ultimate-Movie-Experience'
  },
  {
    id: 2,
    title: 'To-Do List (TypeScript)',
    description: 'Task manager built with TypeScript and JavaScript featuring a responsive, minimal UI.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    liveUrl: 'https://santhosh-bs22.github.io/to-do-list-TS/',
    githubUrl: 'https://github.com/santhosh-bs22/to-do-list-TS'
  },
  {
    id: 3,
    title: 'SerenityStays – Hotel Reservation',
    description: 'A responsive hotel booking web app that supports room selection, booking flows, and reservation management.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://santhosh-bs22.github.io/SerenityStays---Luxury-Hotel-Reservation-System/',
    githubUrl: 'https://github.com/santhosh-bs22/SerenityStays---Luxury-Hotel-Reservation-System'
  },
  {
    id: 4,
    title: 'Weather Website',
    description: 'Simple and responsive weather forecasting application using JavaScript, fetching real-time weather data.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800',
    technologies: ['JavaScript', 'CSS', 'Weather API'],
    liveUrl: 'https://santhosh-bs22.github.io/WeatherWebsite/',
    githubUrl: 'https://github.com/santhosh-bs22/WeatherWebsite'
  },
  {
    id: 5,
    title: 'EcomX – E-Commerce Website',
    description: 'Responsive e-commerce front-end with product listing, cart interactions, and clean UI design.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://santhosh-bs22.github.io/EcomX-website/',
    githubUrl: 'https://github.com/santhosh-bs22/EcomX-website'
  },
  {
    id: 6,
    title: 'YogaVibe – App UI Design',
    description: 'Figma-based wellness app design focusing on mindfulness and simplicity.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800',
    technologies: ['Figma', 'UI Design', 'Prototyping'],
    liveUrl: 'https://www.figma.com/proto/BomLNRJRFUjMbVg977trk9/YogaVibe?node-id=16-196'
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: 'React', level: 80, category: 'frontend' },
  { id: 2, name: 'TypeScript', level: 80, category: 'frontend' },
  { id: 3, name: 'JavaScript', level: 90, category: 'frontend' },
  { id: 4, name: 'HTML/CSS', level: 95, category: 'frontend' },
  // Backend
  { id: 5, name: 'Java', level: 75, category: 'backend' },
  { id: 6, name: 'Node.js', level: 70, category: 'backend' },
  // Tools
  { id: 7, name: 'Git/GitHub', level: 85, category: 'tools' },
  { id: 8, name: 'Figma', level: 80, category: 'design' },
  { id: 9, name: 'Mendix', level: 70, category: 'tools' },
];

export const certifications = [
  'MePro Pearson Level 9',
  'NPTEL Java Programming',
  'Matlab Certificate',
  'Mendix Rapid Developer',
  'Novitech Full Stack',
  'HackerRank Python (Basic)'
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Tamil', level: 'Native' },
  { name: 'Telugu', level: 'Native' }
];