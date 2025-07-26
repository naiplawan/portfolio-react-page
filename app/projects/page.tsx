'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/portfolio/NavBar';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Movie CRUD Application',
    description:
      'Full-stack movie management system with JWT authentication, advanced search, and real-time updates. Features include user reviews, ratings, and admin dashboard.',
    image: '/assets/moviecrud.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
    githubUrl: 'https://github.com/naiplawan/movie-crud',
    liveUrl: 'https://movie-crud-demo.vercel.app',
    highlights: ['JWT Authentication', 'Real-time Updates', 'Advanced Search', 'Admin Dashboard'],
  },
  {
    id: 2,
    title: 'Todo Assistant',
    description:
      'Intelligent task management categorization, priority suggestions, and natural language processing for task creation.',
    image: '/assets/todolist.png',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/naiplawan/ai-todo-app',
    liveUrl: 'https://ai-todo-assistant.vercel.app',
    highlights: ['AI Task Categorization', 'Natural Language Processing', 'Smart Reminders', 'Analytics Dashboard'],
  },
  {
    id: 3,
    title: 'Homeservice Platform',
    description:
      'Comprehensive platform for home service providers with booking management, customer reviews, and payment integration.',
    image: '/assets/homeservice.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Docker'],
    githubUrl: 'https://github.com/naiplawan/home-services-project',
    liveUrl: '', // Add an empty string or a valid URL if available
    highlights: ['Microservices Architecture', 'Payment Processing', 'Advanced Analytics', 'Multi-tenant'],
  },
  {
    id: 4,
    title: 'ByteTrack',
    description:
      'A sophisticated, production-ready calorie tracking and wellness application built with cutting-edge web technologies. Features a beautiful design system inspired by Apple and Spotify, comprehensive food tracking capabilities, and an exceptional user experience.',
    image: '/assets/byte-track.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/naiplawan/bytetrack',
    liveUrl: 'https://calorie-diary.vercel.app/',
    highlights: ['Intuitive UI', 'Real-time Tracking', 'Personalized Insights', 'Cross-platform'],
  },
] as const;

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a different challenge and
            showcases various technologies and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Metrics block removed because 'metrics' property does not exist on project objects */}

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        aria-label={`View ${project.title} live demo`}
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
