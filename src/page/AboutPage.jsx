import { useState } from 'react';
import NavBar from '@/component/NavBar';
import AboutMe from '@/component/AboutMe';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import FacebookIcon from '@/assets/Facebook.svg';
import LinkendinIcon from '../assets/LinkedIn.svg';
import GitHubIcon from '../assets/GitHub.svg';
import { saveAs } from 'file-saver';
import clsx from 'clsx';

export default function MyPage() {
  const [isDownload, setIsDownload] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleDownloadResume = () => {
    const fileURL = '/Rachaphol_Resume.pdf';
    saveAs(fileURL, 'Rachaphol_Resume.pdf');
    setIsDownload(true);
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsDownload(false);
      setIsPopupVisible(false);
    }, 3000);
  };

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '-100vw',
    },
  };

  return (
    <>
      <NavBar />
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
        <div className="flex flex-col items-center m-10">
          <Typewriter
            options={{
              strings: ['About Me'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              pauseFor: 2000,
              cursor: '|',
              wrapperClassName: 'text-3xl',
              cursorClassName: 'text-3xl',
            }}
            className="text-10xl m-4 w-full"
          />
          <div>
            <div>
              <AboutMe />
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl p-2 "> Follow me </div>
              <div className="m-4 flex flex-row p-3 justify-evenly border-lg bg-slate-500 card w-96  shadow-xl ">
                <img
                  className="cursor-pointer"
                  src={FacebookIcon}
                  width={50}
                  alt="Facebook"
                  onClick={() => window.open('https://www.facebook.com/mos.jrpt')}
                />
                <img
                  className="cursor-pointer"
                  src={LinkendinIcon}
                  width={50}
                  alt="LinkedIn"
                  onClick={() => window.open('https://www.linkedin.com/in/rachaphol-plookaom')}
                />
                <img
                  className="cursor-pointer"
                  src={GitHubIcon}
                  width={50}
                  alt="GitHub"
                  onClick={() => window.open('https://github.com/naiplawan')}
                />
              </div>
            </div>

            <div className="p-5 flex flex-row justify-center ">
              <button
                className={clsx('w-full m-5 p-5 rounded-full text-xl bg-teal-600', { 'bg-teal-700': isDownload })}
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
