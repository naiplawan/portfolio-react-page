'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Users, Award } from "lucide-react";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Cloudflare", "DigitalOcean"]
    },
    {
      icon: Smartphone,
      title: "Mobile & AI",
      skills: ["React Native", "PWA", "LLM Integration", "RAG Systems"]
    }
  ];

  const highlights = [
    { icon: Users, text: "3+ Years Experience" },
    { icon: Award, text: "50+ Projects Delivered" },
    { icon: Code, text: "Full-Stack Expertise" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 p-6"
    >
      <motion.div variants={itemVariants}>
        <Card className="border-ocean-blue-200 dark:border-ocean-blue-800">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                I'm a passionate <span className="text-ocean-blue-600 font-semibold">Fullstack Developer</span> with 
                expertise in modern web technologies and a strong foundation in both frontend and backend development. 
                With over 3 years of hands-on experience, I specialize in creating scalable web applications and 
                exploring cutting-edge AI technologies.
              </p>
              
              <p>
                My journey spans from crafting intuitive user interfaces with <span className="text-ocean-blue-600 font-semibold">React and Next.js</span> to 
                building robust APIs with <span className="text-ocean-blue-600 font-semibold">Node.js and Python</span>. I have particular expertise in 
                developing and deploying AI-powered applications, including Large Language Models (LLM) and 
                Retrieval-Augmented Generation (RAG) systems.
              </p>
              
              <p>
                I'm proficient with cloud platforms like <span className="text-ocean-blue-600 font-semibold">AWS, Cloudflare, and DigitalOcean</span>, 
                and development tools including Docker for containerization and various CI/CD pipelines. My approach 
                combines technical expertise with a keen eye for user experience and performance optimization.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-ocean-blue-50 dark:bg-ocean-blue-950 px-4 py-2 rounded-lg">
                  <highlight.icon className="w-5 h-5 text-ocean-blue-600" />
                  <span className="text-sm font-medium text-ocean-blue-800 dark:text-ocean-blue-200">{highlight.text}</span>
                </div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-center mb-6 text-primary">Technical Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-ocean-blue-200 dark:border-ocean-blue-800 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-ocean-blue-100 dark:bg-ocean-blue-900 rounded-lg">
                      <area.icon className="w-6 h-6 text-ocean-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-ocean-blue-50 text-ocean-blue-700 hover:bg-ocean-blue-100 dark:bg-ocean-blue-900 dark:text-ocean-blue-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-ocean-blue-50 to-blue-50 dark:from-ocean-blue-950 dark:to-blue-950 border-ocean-blue-200 dark:border-ocean-blue-800">
          <CardContent className="pt-6">
            <p className="text-center text-lg text-muted-foreground">
              "As an active member of the tech community, I regularly attend developer meetups and AI conferences 
              to stay current with industry trends. I'm always eager to tackle new challenges and collaborate 
              with teams to deliver innovative solutions that make a real impact."
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
