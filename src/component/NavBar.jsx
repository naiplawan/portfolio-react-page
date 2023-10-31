
import TextTransition, { presets } from 'react-text-transition';
import { useState,useEffect } from 'react';


function NavBar() {

  const TEXTS = ['Learn', 'Unlearn', 'Relearn', 'Repeat'];

  const [index, setIndex] = useState(0);

  const githubProfileUrl = "https://github.com/naiplawan";

  const handlePortfolioClick = () => {
    // Navigate to the GitHub profile URL
    window.location.href = githubProfileUrl;
  };

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
    <nav className="flex flex-row justify-between  items-center p-10"> 
      {/* Right Box */}
      <div className='text-3xl'>
      <TextTransition  springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </div>

      {/* Left Box */}
      <div className='flex flex-row'>
        <div className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200">
        About Me</div>

        <div className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200" 
        onClick={handlePortfolioClick}>
        Portfolio</div>

        <div className="p-4 transition duration-300 hover:bg-white hover:text-black hover:delay-200">
        Contact</div>
     </div>
    </nav>
    </>
  );
}

export default NavBar;
