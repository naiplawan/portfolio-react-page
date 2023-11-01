import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const TEXTS = ["Learn", "Unlearn", "Relearn", "Repeat"];
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const githubProfileUrl = "https://github.com/naiplawan";

  const handlePortfolioClick = () => {
    // Navigate to the GitHub profile URL
    window.location.href = githubProfileUrl;
  };

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <nav className="flex flex-row justify-between  items-center p-5">
        {/* Right Box */}
        <div className="text-3xl">
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>

        {/* Left Box */}
        <div className="flex flex-row hidden md:inline-flex ">
          <motion.div
            className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200"
            onClick={() => navigate("/about")}
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            About Me
          </motion.div>

          <motion.div
            className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200"
            onClick={handlePortfolioClick}
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Portfolio
          </motion.div>

          <motion.div className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200"
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
            Contact
          </motion.div>
        </div>

        <div className="dropdown md:hidden p-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-1 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => navigate("/about")}>About Me</a>
            </li>
            <li>
              <a onClick={handlePortfolioClick}>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
