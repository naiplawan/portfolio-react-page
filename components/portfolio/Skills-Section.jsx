'use client'

import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Python", "Django", "Express.js", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Large Language Models", "RAG Systems", "Python ML Libraries", "OpenAI API"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Cloudflare", "DigitalOcean", "Docker", "Git", "CI/CD", "Vercel"]
  },
  {
    title: "Tools & Others",
    skills: ["Postman", "Webflow", "Figma", "VS Code", "Chrome DevTools"]
  }
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with modern technologies to build scalable, performant applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}