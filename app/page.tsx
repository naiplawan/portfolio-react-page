'use client';

import NavBar from '@/components/portfolio/NavBar';
import ContentSection from '@/components/portfolio/ContentSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import Footer from '@/components/portfolio/Footer';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/seo/structured-data';
import { motion } from 'framer-motion';

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rachaphol-portfolio.vercel.app';
  
  return (
    <>
      <PersonStructuredData
        name="Rachaphol Plookaom"
        jobTitle="Fullstack Developer"
        email={process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com"}
        url={baseUrl}
        location="Bangkok, Thailand"
        skills={[
          "React", "Next.js", "TypeScript", "Node.js", "Python", 
          "PostgreSQL", "MongoDB", "Docker", "AWS", "AI/ML Integration"
        ]}
        description="Experienced fullstack developer specializing in React, Next.js, Node.js, Python, and AI integration. Available for hire."
      />
      
      <WebsiteStructuredData
        name="Rachaphol Plookaom - Portfolio"
        description="Experienced fullstack developer specializing in React, Next.js, Node.js, Python, and AI integration. Available for hire."
        url={baseUrl}
      />

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
    </>
  );
}
