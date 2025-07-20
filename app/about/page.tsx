'use client';

import { useState } from 'react';
import NavBar from '@/components/portfolio/NavBar';
import AboutMe from '@/components/portfolio/AboutMe';
import GitHubStats from '@/components/portfolio/GitHubStats';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { saveAs } from 'file-saver';

export default function AboutPage() {
  const [isDownload, setIsDownload] = useState(false);

  const handleDownloadResume = () => {
    const fileURL = '/Rachaphol_Resume.pdf';
    saveAs(fileURL, 'Rachaphol_Resume.pdf');
    setIsDownload(true);
    setTimeout(() => {
      setIsDownload(false);
    }, 3000);
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/mos.jrpt',
      label: 'Facebook',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rachaphol-plookaom',
      label: 'LinkedIn',
      color: 'hover:text-blue-700',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/naiplawan',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <AboutMe />
        <GitHubStats />

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl font-bold text-foreground">Let&apos;s Connect</h2>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`w-16 h-16 bg-card rounded-2xl flex items-center justify-center border border-border transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
