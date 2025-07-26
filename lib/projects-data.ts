import { Project } from './types';

export const projects: readonly Project[] = [
  {
    id: 1,
    title: 'ByteTrack',
    description:
      'A sophisticated, production-ready calorie tracking and wellness application with beautiful design system and comprehensive food tracking capabilities.',
    problemStatement:
      'Health-conscious individuals needed an intuitive, accurate calorie tracking solution with personalized insights and exceptional user experience.',
    solution:
      'Created a modern web application with Apple/Spotify-inspired design, PostgreSQL for data reliability, and Prisma for type-safe database operations.',
    image: '/assets/byte-track.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/naiplawan/bytetrack',
    liveUrl: 'https://calorie-diary.vercel.app/',
    highlights: ['Intuitive UI', 'Real-time Tracking', 'Personalized Insights', 'Cross-platform'],
    category: 'wellness',
    status: 'live',
    featured: false,
    completedYear: 2025,
  },
  {
    id: 2,
    title: 'Homeservice Platform',
    description:
      'Comprehensive marketplace platform for home service providers with booking management, customer reviews, and payment integration.',
    problemStatement:
      'Home service providers and customers lacked a reliable platform for booking, payment processing, and service management.',
    solution:
      'Developed a microservices-based platform with Stripe integration, Docker containerization, and PostgreSQL for multi-tenant architecture.',
    image: '/assets/homeservice.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Docker'],
    githubUrl: 'https://github.com/naiplawan/home-services-project',
    liveUrl: '',
    highlights: ['Microservices Architecture', 'Payment Processing', 'Advanced Analytics', 'Multi-tenant'],
    category: 'enterprise',
    status: 'development',
    featured: false,
    completedYear: 2023,
  },
] as const;

export const getFeaturedProjects = (): readonly Project[] => projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: Project['category']): readonly Project[] =>
  projects.filter((project) => project.category === category);

export const getProjectsByStatus = (status: Project['status']): readonly Project[] =>
  projects.filter((project) => project.status === status);
