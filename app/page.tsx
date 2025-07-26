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
        jobTitle="Frontend Developer"
        email="rachaphol.plo@gmail.com"
        url={baseUrl}
        location="Bangkok, Thailand"
        skills={[
          "React.js", "Next.js", "TypeScript", "Go", "Go Fiber", "Flutter", 
          "Dart", "Node.js", "Python", "Django", "Performance Optimization"
        ]}
        description="Frontend Developer at Unixdev Co., Ltd. specializing in innovative user experiences, performance optimization, and modern web/mobile technologies. Full-stack capabilities with Go and Flutter."
      />
      
      <WebsiteStructuredData
        name="Rachaphol Plookaom - Portfolio"
        description="Frontend Developer at Unixdev Co., Ltd. specializing in innovative user experiences, performance optimization, and modern web/mobile technologies. Full-stack capabilities with Go and Flutter."
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
