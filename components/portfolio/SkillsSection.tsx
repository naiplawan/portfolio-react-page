'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Cloud, Brain, Smartphone, Zap } from 'lucide-react'

interface Skill {
  name: string;
  level: number; // 1-100
  years?: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    description: "Building modern, responsive user interfaces",
    skills: [
      { name: "React", level: 95, years: 4 },
      { name: "Next.js", level: 90, years: 3 },
      { name: "TypeScript", level: 85, years: 3 },
      { name: "Tailwind CSS", level: 88, years: 2 },
      { name: "Framer Motion", level: 75, years: 1 }
    ]
  },
  {
    title: "Backend", 
    icon: Database,
    description: "Server-side development and API design",
    skills: [
      { name: "Node.js", level: 88, years: 4 },
      { name: "Python", level: 82, years: 3 },
      { name: "Express", level: 85, years: 3 },
      { name: "Django", level: 75, years: 2 },
      { name: "REST APIs", level: 90, years: 4 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    description: "Data storage and management solutions",
    skills: [
      { name: "PostgreSQL", level: 85, years: 3 },
      { name: "MongoDB", level: 80, years: 2 },
      { name: "Redis", level: 70, years: 2 },
      { name: "Prisma", level: 78, years: 1 },
      { name: "Firebase", level: 75, years: 2 }
    ]
  },
  {
    title: "AI & ML",
    icon: Brain,
    description: "Artificial intelligence and machine learning integration",
    skills: [
      { name: "LLM Integration", level: 85, years: 1 },
      { name: "RAG Systems", level: 80, years: 1 },
      { name: "OpenAI API", level: 88, years: 1 },
      { name: "Langchain", level: 75, years: 1 }
    ]
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Cloud infrastructure and deployment",
    skills: [
      { name: "AWS", level: 78, years: 3 },
      { name: "Docker", level: 82, years: 3 },
      { name: "Kubernetes", level: 65, years: 1 },
      { name: "CI/CD", level: 80, years: 2 },
      { name: "Cloudflare", level: 70, years: 2 }
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    description: "Mobile and cross-platform development",
    skills: [
      { name: "React Native", level: 75, years: 2 },
      { name: "PWA", level: 85, years: 2 },
      { name: "Expo", level: 70, years: 1 },
      { name: "Cross-platform", level: 78, years: 2 }
    ]
  }
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Full-stack expertise across modern web technologies, cloud platforms, and AI integration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          {skill.years && (
                            <Badge 
                              variant="outline"
                              className="text-xs text-blue-600 border-blue-200"
                            >
                              {skill.years}y
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: skillIndex * 0.1 + 0.5,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of modern development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}