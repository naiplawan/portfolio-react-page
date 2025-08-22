'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -10,
  },
}

const pageTransition = {
  type: 'tween' as const,
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
}

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}