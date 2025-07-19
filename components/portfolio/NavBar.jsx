'use client'

import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

function NavBar() {
  const TEXTS = ['Code', 'Create', 'Deploy', 'Innovate'];
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border">
      <motion.div
        className="text-3xl font-bold text-primary cursor-pointer"
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </motion.div>

      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="ghost"
              className="text-lg px-6 py-3 hover:bg-ocean-blue-50 hover:text-ocean-blue-700 transition-all duration-200"
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:bg-ocean-blue-50"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 right-6 bg-card border border-border rounded-lg shadow-lg p-2 z-50 w-48"
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start hover:bg-ocean-blue-50 hover:text-ocean-blue-700"
                onClick={() => {
                  router.push(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
