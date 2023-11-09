import NavBar from "@/component/NavBar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function PortfolioPage() {

    const pageTransition = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
      };

  const handleDownloadCV = () => {
    const fileURL = "/Rachaphol_Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = "Rachaphol_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <NavBar />
      <motion.div
    variants={pageTransition}
    initial="hidden"
    animate="show"
    exit="exit"
  > 
      <div className="flex flex-col items-center m-10">

        <Typewriter
          options={{
            strings: ["Portfolio"],
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

        <div className="m-10 flex flex-row w-full ">
          <motion.div
            className="card w-96 bg-base-100 shadow-xl m-5"
            whileHover={{ scale: 1.1 }}
          >
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src="https://picsum.photos/500/400/?blur=3" alt="Shoes" />
            </figure>
          </motion.div>

          <motion.div
            className="card w-96 bg-base-100 shadow-xl m-5"
            whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.5 },
                boxShadow: "0px 0px 8px rgb(255,255,255)", 
              }}
          >
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src="https://picsum.photos/500/400/?blur=1" alt="Shoes" />
            </figure>
        </motion.div>

        <motion.div 
  className="card w-96 bg-base-100 shadow-xl m-5"
  whileHover={{ 
    scale: 1.2, 
    rotate: 360, 
    transition: { type: 'pop', stiffness: 300 },
    boxShadow: "0px 0px 8px rgb(255,255,255)", 
    backgroundColor: "#ff69b4",
  }}
>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src="https://picsum.photos/500/400/?blur=2" alt="Shoes" />
            </figure>
        </motion.div>
        </div>

       

        <div className="flex flex-col items-center m-10">
          <div className="text-xl p-2"> Follow me </div>
          <div className="m-4"></div>
          <img src="/socialMedia.svg" alt="socialMedia" />
        </div>

        <div className="p-5 flex flex-row justify-center ">
          <button className="btn w-50 m-5 rounded-full">Send Request</button>
          <button
            className="btn w-50  m-5 rounded-full"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default PortfolioPage;
