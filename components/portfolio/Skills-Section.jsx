'use client'

import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Code, Database, Cloud, Brain, Wrench, Smartphone } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-ocean-blue-500 to-blue-600",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "SASS/SCSS"]
  },
  {
    title: "Backend Development", 
    icon: Database,
    color: "from-green-500 to-emerald-600",
    skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "REST APIs", "GraphQL", "Socket.io", "JWT Auth", "Microservices"]
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "from-purple-500 to-violet-600",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose", "SQLite", "Firebase"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-pink-500 to-rose-600",
    skills: ["Large Language Models", "RAG Systems", "OpenAI API", "Langchain", "Python ML Libraries", "TensorFlow", "Hugging Face", "Prompt Engineering"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-600",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Cloudflare", "DigitalOcean", "Vercel", "Nginx", "Linux"]
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-600",
    skills: ["React Native", "PWA", "Expo", "Postman", "Git", "VS Code", "Figma", "Webflow", "Chrome DevTools", "ESLint"]
  }
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-ocean-blue-50/30 dark:from-background dark:to-ocean-blue-950/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Fullstack Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the entire development lifecycle - from pixel-perfect frontends 
            to scalable backends, cloud infrastructure, and AI integration
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
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-ocean-blue-200 dark:border-ocean-blue-800 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>

                <CardContent>
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
                          className="text-sm bg-ocean-blue-50 text-ocean-blue-700 hover:bg-ocean-blue-100 dark:bg-ocean-blue-900 dark:text-ocean-blue-300 dark:hover:bg-ocean-blue-800 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-ocean-blue-50 to-blue-50 dark:from-ocean-blue-950 dark:to-blue-950 border-ocean-blue-200 dark:border-ocean-blue-800 max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Always Learning & Growing</h3>
              <p className="text-lg text-muted-foreground">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of fullstack development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}