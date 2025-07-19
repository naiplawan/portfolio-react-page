'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10 flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-blue-600 mb-4">
            404
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-muted-foreground px-8 py-3 rounded-full font-medium hover:bg-accent transition-all duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Looking for something specific?
            </h3>
            <p className="text-muted-foreground mb-4">
              Try visiting these popular pages instead:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                <Link href="/projects">Projects</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}