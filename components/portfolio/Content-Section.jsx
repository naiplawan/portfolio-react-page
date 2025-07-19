'use client'

import Typewriter from "typewriter-effect";
import { RandomReveal } from "react-random-reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

function ContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl"
      >
        <Card className="bg-gradient-to-br from-ocean-blue-50 to-white dark:from-ocean-blue-950 dark:to-slate-900 border-ocean-blue-200 dark:border-ocean-blue-800 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div variants={itemVariants} className="flex-1 space-y-6">
              <div className="space-y-4">
                <Typewriter
                  options={{
                    strings: [
                      "Hi! I'm a Fullstack Developer",
                      "Building Modern Web Applications",
                      "Creating Scalable Solutions"
                    ],
                    autoStart: true,
                    loop: true,
                    fastDelete: true,
                    pauseFor: 2000,
                    cursor: "|",
                    wrapperClassName: "text-4xl lg:text-5xl font-bold text-primary",
                    cursorClassName: "text-4xl lg:text-5xl text-primary",
                    deleteSpeed: 50,
                  }}
                />
                
                <div className="text-2xl lg:text-3xl font-semibold text-ocean-blue-600 dark:text-ocean-blue-400">
                  <RandomReveal
                    isPlaying
                    duration={3}
                    revealDuration={1.5}
                    characters="Frontend + Backend + DevOps"
                    onComplete={() => ({ shouldRepeat: true, delay: 4 })}
                  />
                </div>
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Passionate fullstack developer specializing in <span className="text-ocean-blue-600 font-semibold">React, Node.js, and cloud technologies</span>.
                </p>
                <p>
                  I build end-to-end solutions from responsive frontends to scalable backends,
                  with expertise in modern frameworks, databases, and deployment strategies.
                </p>
                <p>
                  Let's collaborate to transform your ideas into powerful, production-ready applications.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-6"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="hover:bg-ocean-blue-50 hover:border-ocean-blue-300">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-ocean-blue-50 hover:border-ocean-blue-300">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-ocean-blue-50 hover:border-ocean-blue-300">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-ocean-blue-200 dark:border-ocean-blue-800"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Image 
                    src="/assets/8775515_4002783.svg" 
                    width={500} 
                    height={500} 
                    alt="Fullstack Developer Illustration"
                    className="max-w-full h-auto"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue-200 to-ocean-blue-300 rounded-full blur-3xl opacity-20 -z-10 scale-110"></div>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

export default ContentSection;
