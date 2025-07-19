'use client'

import Typewriter from "typewriter-effect";
import { RandomReveal } from "react-random-reveal";
import Image from "next/image";

function ContentSection() {
  return (
    <div
      className="flex flex-row
    justify-center items-center mt-10 p-5 bg-slate-900 m-5 rounded-3xl"
    >
      {/* Left Box */}
      <div className="flex flex-col justify-evenly mr-20 p-5 ">
        <Typewriter
          options={{
            strings: ["Hi !!", "My name is Rachaphol", "Call me Momos"],
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
        <div className="m-4">
          <RandomReveal
            isPlaying
            duration={4}
            revealDuration={1.6}
            characters="Software Developer"
            onComplete={() => ({ shouldRepeat: true, delay: 3 })}
          />
        </div>
        <div className="mt-2 ml-4 mb-4 text-lg leading-relaxed">
          Building innovative web solutions with modern technologies.<br/> 
          Passionate about creating user-centric applications that solve real-world problems.<br/> 
          Let&apos;s collaborate to bring your ideas to life with clean, efficient code.
        </div>
      </div>

      {/* Right Box */}
      <div className="m-4 flex items-center ">
        <Image src="/assets/8775515_4002783.svg" width={500} height={500} alt="heroImage" />
      </div>
      </div>
  );
}

export default ContentSection;
