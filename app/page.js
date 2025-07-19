'use client'

import NavBar from '../src/component/NavBar'
import MoonModel from '../src/component/MoonModel'
import ContentSection from '../src/component/Content-Section'
import Footer from '../src/component/Footer'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div 
      className="w-full min-h-screen flex flex-col justify-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <NavBar />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <MoonModel />
      </motion.div>
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ContentSection />
      </motion.div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  )
}