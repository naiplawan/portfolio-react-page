'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 sm:space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              Rachaphol
              <br />
              <span className="text-blue-600">Plookaom</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed px-2">
              Frontend Developer crafting innovative user experiences with modern web and mobile technologies
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-4">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">React & Next.js</span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Go & Fiber</span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Flutter & Dart</span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Performance Optimization</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base"
              onClick={() => window.open('/Rachaphol_Resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
              onClick={() => window.open('https://github.com/naiplawan', '_blank')}
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
              onClick={() => window.open('https://www.linkedin.com/in/rachaphol-plookaom', '_blank')}
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-gray-100 transition-all duration-200"
              onClick={() => window.location.href = 'mailto:rachaphol.plo@gmail.com'}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4"
        >
          <div className="text-center space-y-2 py-4 sm:py-0">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">6+</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Months at Unixdev</div>
          </div>
          <div className="text-center space-y-2 py-4 sm:py-0 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">Frontend</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Specialist</div>
          </div>
          <div className="text-center space-y-2 py-4 sm:py-0 border-t sm:border-t-0 border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">20+</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Technologies</div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center px-4"
        >
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContentSection;
