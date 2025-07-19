'use client'

import { motion } from 'framer-motion'
import NavBar from '../../components/portfolio/NavBar'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'

const projects = [
  {
    id: 1,
    title: "Movie CRUD Application",
    description: "A full-stack movie management system with CRUD operations, built with React and Node.js",
    image: "/assets/moviecrud.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/naiplawan/movie-crud",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Todo List App",
    description: "A responsive todo list application with local storage and drag-and-drop functionality",
    image: "/assets/todolist.png",
    technologies: ["React", "JavaScript", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/naiplawan/todo-app",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Modern mobile application UI design with smooth animations and user-friendly interface",
    image: "/assets/mobileapp.png",
    technologies: ["React Native", "Expo", "TypeScript"],
    githubUrl: "https://github.com/naiplawan/mobile-ui",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Home Service Platform",
    description: "A service booking platform connecting homeowners with service providers",
    image: "/assets/homeservice.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/naiplawan/home-service",
    liveUrl: "#"
  }
]

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a different challenge 
            and showcases various technologies and skills.
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      GitHub
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      disabled={project.liveUrl === '#'}
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}