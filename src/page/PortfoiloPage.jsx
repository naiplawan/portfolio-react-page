import NavBar from "@/component/NavBar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function PortfolioPage() {
  const pageTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
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

          <div className="m-10 flex flex-col w-3/4 p-5 justify-center items-center">
            <motion.div
              className="card w-3/4 bg-base-100 shadow-xl mb-10 p-10"
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
                <div className="text-2xl font-bold">Home Services</div>
                <p className="mb-5">
                  Web App that revolutionizes on-demand household services. With
                  Home Services, you have the power to select the services you
                  need, whether it&apos;s installing an air conditioner or
                  giving your room a fresh clean.
                </p>
              </div>
              <div className="w-full flex flex-row justify-evenly">
                <figure>
                  <img
                    src="/homeservice.png"
                    alt="homeservice"
                    width={500}
                  />
                </figure>
              </div>
              <div className="flex flex-row justify-between p-4 ">
                  <div className="badge p-4 badge-lg bg-amber-300 text-white">React.js</div>
                  <div className="badge p-4 badge-lg bg-slate-300 text-white" >Node.js</div>
                  <div className="badge p-4 badge-lg bg-green-300 text-white">Express</div>
                  <div className="badge p-4 badge-lg bg-blue-300 text-white" >MongoDB</div>
                </div>
            </motion.div>

            <motion.div
              className="card w-3/4 bg-base-100 shadow-xl mb-10 p-10"
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
                <div className="text-2xl font-bold">Movie App</div>
                <p className="mb-5">
                  This is a JavaScript/React project that allows users to search
                  for movies and add them to a cart.
                </p>
              </div>
              <div className="w-full flex flex-row justify-evenly">
                <figure>
                  <img
                    src="/moviecrud.png"
                    alt="movieapp"
                    className="mb-5"
                  />
                </figure>
              </div>
              <div className="flex flex-row justify-between p-4 ">
                  <div className="badge p-4 badge-lg bg-amber-300 text-white">Next.js</div>
                  <div className="badge p-4 badge-lg bg-slate-300 text-white" >TailwindCSS</div>
                  <div className="badge p-4 badge-lg bg-green-300 text-white">AntDesign</div>
                </div>
            </motion.div>

            <motion.div
              className="card w-3/4 bg-base-100 shadow-xl mb-10"
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
                <div className="font-bold text-2xl">To-do-List App</div>
                <p className="mb-5">
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
                    src="/todolist.png"
                    alt="todolist"
                    width={500}
                    className="mb-5"
                  />
                </figure>     
              </div>
              <div className="flex flex-row justify-between p-4 ">
                  <div className="badge p-4 badge-lg bg-amber-300 text-white">Next.js</div>
                  <div className="badge p-4 badge-lg bg-slate-300 text-white" >TailwindCSS</div>
                  <div className="badge p-4 badge-lg bg-green-300 text-white">AntDesign</div>
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
                src="/icons8-github.svg"
                alt="github"
                className="m-10"
                width={100}
              />
              <img
                src="/contributions.png"
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
