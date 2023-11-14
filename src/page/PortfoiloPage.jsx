import NavBar from "@/component/NavBar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import GitHub from "@/public/icons8-github.svg";

function PortfolioPage() {
  const pageTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
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
              strings: ["My Portfolio"],
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

          <div className="m-10 flex flex-col w-full p-5">
            <motion.div
              className="card w-50 bg-base-100 shadow-xl mb-10"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              onClick={() =>
                window.open(
                  "https://github.com/naiplawan/home-services-project",
                  "_blank"
                )
              }
            >
              <div className="card-body">
                <h2 className="card-title">Home Services</h2>
                <p>
                  Web App that revolutionizes on-demand household services. With
                  Home Services, you have the power to select the services you
                  need, whether it&apos;s installing an air conditioner or
                  giving your room a fresh clean.
                </p>
              </div>
              <div className="w-full flex flex-row justify-evenly">
                <figure>
                  <img
                    src="/public/homeservice.png"
                    alt="homeservice"
                    width={500}
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <div>React.js</div>
                  <div>Node.js</div>
                  <div>Express</div>
                  <div>MongoDB</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card w-50 bg-base-100 shadow-xl mb-10"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              onClick={() =>
                window.open("https://movie-crud-next.vercel.app/", "_blank")
              }
            >
              <div className="card-body">
                <h2 className="card-title">Movie App</h2>
                <p>
                  This is a JavaScript/React project that allows users to search
                  for movies and add them to a cart.
                </p>
              </div>
              <div className="w-full flex flex-row justify-evenly">
                <figure>
                  <img
                    src="/public/moviecrud.png"
                    alt="movieapp"
                    width={500}
                    className="mb-5"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <div>Next.js</div>
                  <div>TailwindCSS</div>
                  <div>Ant Design</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card w-50 bg-base-100 shadow-xl mb-10"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              onClick={() =>
                window.open(
                  "https://to-do-list-next-js-roan.vercel.app/",
                  "_blank"
                )
              }
            >
              <div className="card-body">
                <h2 className="card-title">To-do-List App</h2>
                <p>
                  The project is a web application built using JavaScript,and
                  React. The application allows users to create and manage a
                  to-do list, with features such as adding new to-do items,
                  editing existing items, deleting items, and marking items as
                  completed. The application uses the Ant Design library for
                  styling and the Next.js framework for server-side rendering.
                </p>
              </div>
              <div className="w-full flex flex-row justify-evenly">
                <figure>
                  <img
                    src="/public/todolist.png"
                    alt="todolist"
                    width={500}
                    className="mb-5"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <div>Next.js</div>
                  <div>TailwindCSS</div>
                  <div>DaisyUI</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="card w-100 bg-slate-800 shadow-xl mb-10 flex flex-col justify-center items-center p-5 text-3xl"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={() => window.open("https://github.com/naiplawan")}
          >
            My GitHub
            <div className="flex flex-row">
              <img
                src="../../public/icons8-github.svg"
                alt="github"
                className="m-10"
                width={100}
              />
              <img
                src="../../public/contributions.png"
                alt="contribution"
                width={500}
                className="m-10"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default PortfolioPage;
