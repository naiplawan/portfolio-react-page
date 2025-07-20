'use client'

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone } from "lucide-react";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building beautiful, responsive interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Scalable server-side applications",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modern deployment and infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Cloudflare", "DigitalOcean"]
    },
    {
      icon: Smartphone,
      title: "Mobile & AI",
      description: "Cross-platform and intelligent applications",
      skills: ["React Native", "PWA", "LLM Integration", "RAG Systems"]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                I&apos;m a passionate fullstack developer with expertise in modern web technologies 
                and a strong foundation in both frontend and backend development. With over 3 years 
                of hands-on experience, I specialize in creating scalable web applications and 
                exploring cutting-edge AI technologies.
              </p>
              
              <p>
                My journey spans from crafting intuitive user interfaces with React and Next.js to 
                building robust APIs with Node.js and Python. I have particular expertise in 
                developing and deploying AI-powered applications, including Large Language Models 
                and Retrieval-Augmented Generation systems.
              </p>
              
              <p>
                I'm proficient with cloud platforms like AWS, Cloudflare, and DigitalOcean, 
                and development tools including Docker for containerization and various CI/CD pipelines. 
                My approach combines technical expertise with a keen eye for user experience and 
                performance optimization.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto">
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{area.title}</h4>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {area.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
              <blockquote className="text-xl text-gray-700 font-light italic leading-relaxed">
                "As an active member of the tech community, I regularly attend developer meetups 
                and AI conferences to stay current with industry trends. I'm always eager to tackle 
                new challenges and collaborate with teams to deliver innovative solutions that make 
                a real impact."
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
