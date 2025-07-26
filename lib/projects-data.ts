import { Project } from './types';

export const projects: readonly Project[] = [
  {
    id: 1,
    title: 'Movie CRUD Application',
    description: 'Full-stack movie management system with JWT authentication, advanced search, and real-time updates.',
    problemStatement: 'Movie enthusiasts needed a centralized platform to manage their collections with secure user accounts and real-time collaboration features.',
    solution: 'Built a scalable MERN stack application with JWT authentication, Socket.io for real-time updates, and MongoDB for flexible data storage.',
    image: '/assets/moviecrud.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
    githubUrl: 'https://github.com/naiplawan/movie-crud',
    liveUrl: 'https://movie-crud-demo.vercel.app',
    highlights: ['JWT Authentication', 'Real-time Updates', 'Advanced Search', 'Admin Dashboard'],
    metrics: {
      users: '500+ registered users',
      performance: '40% faster search results',
      uptime: '99.9% uptime',
      responseTime: '<200ms API response'
    },
    category: 'fullstack',
    status: 'live',
    featured: false,
    completedYear: 2024,
  },
  {
    id: 2,
    title: 'Todo Assistant',
    description: 'AI-powered task management with intelligent categorization, priority suggestions, and natural language processing.',
    problemStatement: 'Users struggle with task organization and prioritization, leading to decreased productivity and overwhelming todo lists.',
    solution: 'Integrated OpenAI API for intelligent task categorization and priority suggestions, with PostgreSQL for reliable data persistence.',
    image: '/assets/todolist.png',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/naiplawan/ai-todo-app',
    liveUrl: 'https://ai-todo-assistant.vercel.app',
    highlights: ['AI Task Categorization', 'Natural Language Processing', 'Smart Reminders', 'Analytics Dashboard'],
    metrics: {
      users: '1,200+ active users',
      performance: '60% better task completion rates',
      responseTime: '<300ms AI processing',
    },
    category: 'ai',
    status: 'live',
    featured: false,
    completedYear: 2024,
  },
  {
    id: 3,
    title: 'Homeservice Platform',
    description: 'Comprehensive marketplace platform for home service providers with booking management, customer reviews, and payment integration.',
    problemStatement: 'Home service providers and customers lacked a reliable platform for booking, payment processing, and service management.',
    solution: 'Developed a microservices-based platform with Stripe integration, Docker containerization, and PostgreSQL for multi-tenant architecture.',
    image: '/assets/homeservice.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Docker'],
    githubUrl: 'https://github.com/naiplawan/home-services-project',
    liveUrl: '',
    highlights: ['Microservices Architecture', 'Payment Processing', 'Advanced Analytics', 'Multi-tenant'],
    metrics: {
      users: '2,500+ service providers',
      performance: '50% reduction in booking time',
      uptime: '99.8% platform availability',
    },
    category: 'enterprise',
    status: 'development',
    featured: false,
    completedYear: 2024,
  },
  {
    id: 4,
    title: 'ByteTrack',
    description: 'A sophisticated, production-ready calorie tracking and wellness application with beautiful design system and comprehensive food tracking capabilities.',
    problemStatement: 'Health-conscious individuals needed an intuitive, accurate calorie tracking solution with personalized insights and exceptional user experience.',
    solution: 'Created a modern web application with Apple/Spotify-inspired design, PostgreSQL for data reliability, and Prisma for type-safe database operations.',
    image: '/assets/byte-track.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/naiplawan/bytetrack',
    liveUrl: 'https://calorie-diary.vercel.app/',
    highlights: ['Intuitive UI', 'Real-time Tracking', 'Personalized Insights', 'Cross-platform'],
    metrics: {
      users: '3,000+ daily active users',
      performance: '95% user retention rate',
      responseTime: '<150ms page loads',
      uptime: '99.9% availability'
    },
    category: 'wellness',
    status: 'live',
    featured: true,
    completedYear: 2024,
  },
] as const;

export const getFeaturedProjects = (): readonly Project[] => 
  projects.filter(project => project.featured);

export const getProjectsByCategory = (category: Project['category']): readonly Project[] =>
  projects.filter(project => project.category === category);

export const getProjectsByStatus = (status: Project['status']): readonly Project[] =>
  projects.filter(project => project.status === status);