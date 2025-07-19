'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div 
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          variants={spinnerVariants}
          animate="animate"
          className="w-8 h-8 border-2 border-muted-foreground/20 border-t-primary rounded-full mx-auto mb-4"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}