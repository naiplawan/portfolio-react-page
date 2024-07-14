import NavBar from '@/component/NavBar';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import todolist from '../assets/todolist.png';
import moviecrud from '../assets/moviecrud.png';
import homeservice from '../assets/homeservice.png';
import marvelapp from '../assets/marvelapp.png';
import mobileapp from '../assets/mobileapp.png';
import github from '../assets/icons8-github.svg';
import contribution from '../assets/contributions.png';
import { FaArrowDown } from 'react-icons/fa';
import GitHubCalendar from 'react-github-calendar';
import { useRef } from 'react';

function PortfolioPage() {
  const pageTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  const githubRef = useRef(null);
  const scrollToGithub = () => {
    githubRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            onClick={() => window.open('https://github.com/naiplawan/home-services-project', '_blank')}
          >
            <div className="card-body">
              <div className="text-2xl font-bold">Home Services</div>
              <p className="mb-5">
                Web App that revolutionizes on-demand household services. With Home Services, you have the power to
                select the services you need, whether it&apos;s installing an air conditioner or giving your room a
                fresh clean.
              </p>
            </div>
            <div className="w-full flex flex-row justify-evenly">
              <figure className="mb-5">
                <img src={homeservice} alt="homeservice" width="100%" />
              </figure>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-amber-300 text-white text-lg">React.js</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-slate-300 text-white text-lg">Node.js</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-green-300 text-white text-lg">Express</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-blue-300 text-white text-lg">MongoDB</div>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            onClick={() => window.open('https://movie-crud-next.vercel.app//', '_blank')}
          >
            <div className="card-body">
              <div className="font-bold text-2xl">Movie App</div>
              <p className="mb-5">
                This is a JavaScript/React project that allows users to search for movies and add them to a cart.
              </p>
            </div>
            <div className="w-full flex flex-row justify-evenly">
              <figure className="mb-5">
                <img src={moviecrud} alt="moviecrud" width="100%" />
              </figure>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-black text-white text-lg">Next.js</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-slate-300 text-white text-lg">TailwindCSS</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-green-300 text-white text-lg">AntDesign</div>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            onClick={() => window.open('https://to-do-list-next-js-roan.vercel.app/', '_blank')}
          >
            <div className="card-body">
              <div className="font-bold text-2xl">To-do-List App</div>
              <p className="mb-5">
                The project is a web application built using JavaScript,and React. The application allows users to
                create and manage a to-do list, with features such as adding new to-do items, editing existing items,
                deleting items, and marking items as completed. The application uses the Ant Design library for styling
                and the Next.js framework for server-side rendering.
              </p>
            </div>
            <div className="w-full flex flex-row justify-evenly">
              <figure className="mb-5">
                <img src={todolist} alt="todolist" width="100%" />
              </figure>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-black text-white text-lg">Next.js</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-slate-300 text-white text-lg">TailwindCSS</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-green-300 text-white text-lg">AntDesign</div>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            onClick={() => window.open('https://marvel-ts-app.vercel.app/', '_blank')}
          >
            <div className="card-body">
              <div className="font-bold text-2xl">Marvel App</div>
              <p className="mb-5 text-base sm:text-lg">
                This is a web application that allows users to explore the Marvel Universe using TypeScript, React, and
                the Marvel API. It provides information about characters, comics, and series from the Marvel Universe.
              </p>
            </div>
            <div className="w-full flex flex-row justify-evenly">
              <figure className="mb-5">
                <img src={marvelapp} alt="marvelapp" width="100%" />
              </figure>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-amber-300 text-white text-lg">React.js</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-blue-300 text-white text-lg">TypeScript</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-green-300 text-white text-lg">AntDesign</div>
            </div>
          </motion.div>

          <motion.div
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.5 },
              boxShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            onClick={() => window.open('https://github.com/naiplawan/My-Book-List-React-Native/', '_blank')}
          >
            <div className="card-body">
              <div className="font-bold text-2xl">BookList Mobile App</div>
              <p className="mb-5">
                Welcome to the My Book List - React Native repository! This mobile application is designed to help book
                enthusiasts keep track of their reading journey. Built with React Native, it offers a user-friendly
                experience for organizing your literary adventures.
              </p>
            </div>
            <div className="w-full flex flex-row justify-evenly">
              <figure className="mb-5">
                <img src={mobileapp} alt="mobileapp" width="100%" />
              </figure>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-amber-300 text-white text-lg">ReactNative</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-blue-300 text-white text-lg">JavaScript</div>
              <div className="badge p-4 md:p-4 mt-2 badge-lg bg-blue-900 text-white text-lg">Expo</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:flex card bg-slate-800 shadow-xl mt-4 mr-4 ml-4 flex-col items-center pt-5 text-3xl w-full cursor-pointer"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 },
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
          onClick={() => window.open('https://github.com/naiplawan')}
          ref={githubRef}
        >
          My GitHub
          <div className="flex flex-row mt-5 overflow-x-auto">
            <img src={github} alt="github" className="m-10" width={100} />
            <div className="mr-4 sm:mr-4 md:mr-5 p-2">
              <GitHubCalendar username="naiplawan" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card bg-slate-800 shadow-xl  flex-col items-center w-100 cursor-pointer md:hidden mt-4"
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.5 },
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
          onClick={() => window.open('https://github.com/naiplawan')}
          ref={githubRef}
        >
          <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <img src={github} alt="github" className="m-10" width={100} />
    </motion.div>
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
  );
}

export default PortfolioPage;
