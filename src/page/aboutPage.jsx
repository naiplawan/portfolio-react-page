import NavBar from "@/component/NavBar";
import AboutMe from "@/component/AboutMe";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';


function AboutPage() {

  const handleDownloadCV = () => {
    const fileURL = "/Rachaphol_Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = "Rachaphol_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    }
  };

  return (
    <>
    <NavBar/>
    <motion.div
  initial="out"
  animate="in"
  exit="out"
  variants={pageTransition}
>
    <div className="flex flex-col items-center m-10"> 
    <Typewriter
          options={{
            strings: ["About Me"],
            autoStart: true,
            loop: true,
            fastDelete: true,
            pauseFor: 2000,
            cursor: "|",
            wrapperClassName: "text-3xl",
            cursorClassName: "text-3xl",
            deleteSpeed: 100,
          }}
          className="text-10xl m-4 w-full"
        />
    <div>
      <div > 
        <AboutMe/>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-xl p-2"> Follow me </div>
        <div className="m-4 flex flex-row p-3 justify-evenly border-lg bg-slate-500 card w-96  shadow-xl ">  
        <img src="src/assets/Facebook.svg" width={50} alt="Facebook" />
        <img src="src/assets/LinkedIn.svg" width={50} alt="LinkedIn" />
        <img src="src/assets/GitHub.svg" width={50} alt="GitHub" /></div>
      
      </div>

      <div className="p-5 flex flex-row justify-center ">
    
          <button className="btn-wide m-5 p-5 rounded-full text-xl bg-teal-600" onClick={handleDownloadCV}>Download CV</button>
        </div>

    </div>
    </div>
    </motion.div>
    </>
  )
}

export default AboutPage
