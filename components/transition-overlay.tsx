'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TransitionOverlay() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  const overlayVariants = {
    initial: { scaleY: 0, transformOrigin: 'bottom' },
    animate: { 
      scaleY: 1,
      transformOrigin: 'bottom'
    },
    exit: { 
      scaleY: 0,
      transformOrigin: 'top'
    }
  }

  const overlayTransition = {
    duration: 0.4,
    ease: [0.42, 0, 0.58, 1] as const
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key={pathname}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={overlayTransition}
          className="fixed inset-0 bg-gradient-to-b from-blue-600 to-blue-700 z-50 pointer-events-none"
        />
      )}
    </AnimatePresence>
  )
}