'use client'

import NavBar from '../../src/component/NavBar'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import todolist from '../../src/assets/todolist.png'
import moviecrud from '../../src/assets/moviecrud.png'
import homeservice from '../../src/assets/homeservice.png'
import marvelapp from '../../src/assets/marvelapp.png'
import mobileapp from '../../src/assets/mobileapp.png'
import github from '../../src/assets/icons8-github.svg'
import { FaArrowDown } from 'react-icons/fa'
import GitHubCalendar from 'react-github-calendar'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

function PortfolioPage() {
  const pageTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }
  const githubRef = useRef(null)
  const scrollToGithub = () => {
    githubRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <NavBar />
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-col items-center"
      >
        <div className="m-10 text-center">
          <Typewriter
            options={{
              strings: ['My Portfolio'],
              autoStart: true,
              loop: true,
              fastDelete: true,
              pauseFor: 2000,
              cursor: '|',
              wrapperClassName: 'text-3xl',
              cursorClassName: 'text-3xl',
              deleteSpeed: 100,
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-5">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://github.com/naiplawan/home-services-project', '_blank')}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Home Services</CardTitle>
                <CardDescription>
                  Web App that revolutionizes on-demand household services. With Home Services, you have the power to
                  select the services you need, whether it&apos;s installing an air conditioner or giving your room a
                  fresh clean.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image src={homeservice} alt="homeservice" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">React.js</Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-800">Node.js</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Express</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://movie-crud-next.vercel.app//', '_blank')}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Movie App</CardTitle>
                <CardDescription>
                  This is a JavaScript/React project that allows users to search for movies and add them to a cart.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image src={moviecrud} alt="moviecrud" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-black text-white">Next.js</Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-800">TailwindCSS</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">AntDesign</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://to-do-list-next-js-roan.vercel.app/', '_blank')}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">To-do-List App</CardTitle>
                <CardDescription>
                  The project is a web application built using JavaScript,and React. The application allows users to
                  create and manage a to-do list, with features such as adding new to-do items, editing existing items,
                  deleting items, and marking items as completed. The application uses the Ant Design library for styling
                  and the Next.js framework for server-side rendering.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image src={todolist} alt="todolist" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-black text-white">Next.js</Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-800">TailwindCSS</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">AntDesign</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://marvel-ts-app.vercel.app/', '_blank')}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Marvel App</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  This is a web application that allows users to explore the Marvel Universe using TypeScript, React, and
                  the Marvel API. It provides information about characters, comics, and series from the Marvel Universe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image src={marvelapp} alt="marvelapp" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">React.js</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">AntDesign</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://github.com/naiplawan/My-Book-List-React-Native/', '_blank')}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">BookList Mobile App</CardTitle>
                <CardDescription>
                  Welcome to the My Book List - React Native repository! This mobile application is designed to help book
                  enthusiasts keep track of their reading journey. Built with React Native, it offers a user-friendly
                  experience for organizing your literary adventures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image src={mobileapp} alt="mobileapp" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">ReactNative</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-white">Expo</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
          ref={githubRef}
        >
          <Card 
            className="hidden md:flex cursor-pointer hover:shadow-2xl transition-all duration-300 group bg-slate-800 text-white mt-4 mr-4 ml-4"
            onClick={() => window.open('https://github.com/naiplawan')}
          >
            <CardHeader className="w-full text-center">
              <CardTitle className="text-3xl group-hover:text-blue-400 transition-colors">My GitHub</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center overflow-x-auto">
              <Image src={github} alt="github" className="m-10" width={100} height={100} />
              <div className="mr-4 sm:mr-4 md:mr-5 p-2">
                <GitHubCalendar username="naiplawan" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.5 },
          }}
        >
          <Card 
            className="flex flex-col items-center cursor-pointer hover:shadow-2xl transition-all duration-300 group bg-slate-800 text-white md:hidden mt-4"
            onClick={() => window.open('https://github.com/naiplawan')}
          >
            <CardContent className="pt-6">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <Image src={github} alt="github" className="m-10" width={100} height={100} />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed bottom-12 right-10 z-0 bg-black rounded-3xl p-2 cursor-pointer"
        animate={{ y: ['0%', '70%'] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToGithub}
      >
        <FaArrowDown size={30} />
      </motion.div>
    </>
  )
}

export default PortfolioPage