'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

function ContentSection() {
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
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="pt-24 pb-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-none">
              Rachaphol
              <br />
              <span className="text-blue-600">Plookaom</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Fullstack Developer crafting exceptional digital experiences with modern technologies
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">3+</div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-gray-600 font-medium">Technologies Mastered</div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContentSection;
