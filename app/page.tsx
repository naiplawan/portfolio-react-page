'use client';

import NavBar from '../components/portfolio/NavBar';
import MoonModel from '../components/portfolio/MoonModel';
import ContentSection from '../components/portfolio/Content-Section';
import SkillsSection from '../components/portfolio/Skills-Section';
import Footer from '../components/portfolio/Footer';
import { motion } from 'framer-motion';

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
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ContentSection />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <SkillsSection />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}
