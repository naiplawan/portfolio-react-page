import Typewriter from "typewriter-effect";
import { RandomReveal } from "react-random-reveal";


function ContentSection() {
  
  return (
    <div className="w-100 h-full flex flex-row
    justify-center items-center mt-5 p-10">
      {/* Left Box */}
      <div className="w-auto h-full flex flex-col justify-center mr-20 ">  
        <Typewriter
          options={{
            strings: ["Hi !!","My name is Rachaphol", "Call me Momos"],
            autoStart: true,
            loop: true,
            fastDelete: true,
            pauseFor: 2000,
            cursor: "|",
            wrapperClassName: "text-2xl",
            cursorClassName: "text-2xl",
            deleteSpeed: 100,
          }}
          className="text-10xl m-4 w-full"
        />
        <div className="m-4" > 
        <RandomReveal
          isPlaying
          duration={4}
          revealDuration={1.6}
          characters="Full Stack Developer"
          onComplete={() => ({ shouldRepeat: true, delay: 3 })}
        />
        </div>
        <div className="mt-2 ml-4 mb-4">
          I am passionate about applying my analytical skills and <br></br>
          attention to detail to ensure the quality and functionality of
          software products.
        </div>
        
      </div>

      {/* Right Box */}
        <div className="m-4 flex items-center ">
          <img src="/heroImg.svg" alt="heroImage" />
        </div>
    </div>
  );
}

export default ContentSection;
