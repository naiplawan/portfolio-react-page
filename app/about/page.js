'use client'

import { useState } from 'react'
import NavBar from '../../components/portfolio/NavBar'
import AboutMe from '../../components/portfolio/AboutMe'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import FacebookIcon from '../../public/assets/Facebook.svg'
import LinkendinIcon from '../../public/assets/LinkedIn.svg'
import GitHubIcon from '../../public/assets/GitHub.svg'
import { saveAs } from 'file-saver'
import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Separator } from '../../components/ui/separator'

export default function AboutPage() {
  const [isDownload, setIsDownload] = useState(false)

  const handleDownloadResume = () => {
    const fileURL = '/Rachaphol_Resume.pdf'
    saveAs(fileURL, 'Rachaphol_Resume.pdf')
    setIsDownload(true)
    setTimeout(() => {
      setIsDownload(false)
    }, 3000)
  }

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '-100vw',
    },
  }

  return (
    <>
      <NavBar />
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
        <div className="flex flex-col items-center m-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Typewriter
              options={{
                strings: ['About Me'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 2000,
                cursor: '|',
                wrapperClassName: 'text-4xl font-bold',
                cursorClassName: 'text-4xl',
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Card className="shadow-2xl mb-8">
              <CardContent className="p-8">
                <AboutMe />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md"
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      src={FacebookIcon}
                      width={50}
                      height={50}
                      alt="Facebook"
                      onClick={() => window.open('https://www.facebook.com/mos.jrpt')}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      src={LinkendinIcon}
                      width={50}
                      height={50}
                      alt="LinkedIn"
                      onClick={() => window.open('https://www.linkedin.com/in/rachaphol-plookaom')}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      src={GitHubIcon}
                      width={50}
                      height={50}
                      alt="GitHub"
                      onClick={() => window.open('https://github.com/naiplawan')}
                    />
                  </motion.div>
                </div>
                
                <Separator className="mb-6" />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleDownloadResume}
                    className={clsx(
                      'w-full h-12 text-lg rounded-full transition-all duration-300',
                      isDownload 
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700' 
                        : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700'
                    )}
                  >
                    {isDownload ? '✓ Downloaded!' : 'Download Resume'}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}