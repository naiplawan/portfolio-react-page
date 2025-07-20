'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Cloud, Brain, Smartphone, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend", 
    icon: Database,
    skills: ["Node.js", "Python", "Express", "Django", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["LLM Integration", "RAG Systems", "OpenAI API", "Langchain"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Cloudflare"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "PWA", "Expo", "Cross-platform"]
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
          {skillCategories.map((category, index) => (
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
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm px-3 py-1 transition-colors"
                      >
                        {skill}
                      </Badge>
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