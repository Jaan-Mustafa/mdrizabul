import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    image: '/projects/ecommerce.jpg',
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    image: '/projects/taskapp.jpg',
    links: {
      github: 'https://github.com/yourusername/taskapp',
      demo: 'https://taskapp-demo.com'
    },
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather, forecasts, and historical data with interactive charts and maps.',
    tags: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
    image: '/projects/weather.jpg',
    links: {
      github: 'https://github.com/yourusername/weather',
      demo: 'https://weather-demo.com'
    },
    featured: false
  },
  {
    id: 'proj-4',
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, syntax highlighting, and SEO optimization.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    image: '/projects/blog.jpg',
    links: {
      github: 'https://github.com/yourusername/blog',
      article: 'https://yourblog.com/building-blog-platform'
    },
    featured: false
  },
  {
    id: 'proj-5',
    title: 'Portfolio Generator',
    description: 'An open-source tool to generate beautiful portfolio websites from JSON configuration files.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    links: {
      github: 'https://github.com/yourusername/portfolio-generator'
    },
    featured: false
  },
  {
    id: 'proj-6',
    title: 'API Monitoring Tool',
    description: 'A real-time API monitoring and analytics tool with alerting capabilities and performance metrics.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    links: {
      github: 'https://github.com/yourusername/api-monitor'
    },
    featured: false
  }
];
