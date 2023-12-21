import Typewriter from "typewriter-effect";
import { RandomReveal } from "react-random-reveal";
import HeroSVG from "../assets/8775515_4002783.svg"

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
        <div className="mt-2 ml-4 mb-4">
          As a software developer, I turn caffeine into code, sprinkling a bit 
          of magic and a dash of debugging.<br/> My attention to detail is so
          precise; even typos fear my wrath. <br/> I don&apos;t always write bugs, but
          when I do, I make sure they&apos;re elusive and keep the team on their
          toes.
        </div>
      </div>

      {/* Right Box */}
      <div className="m-4 flex items-center ">
        <img src={HeroSVG} width={500} alt="heroImage" />
      </div>
      </div>
  );
}

export default ContentSection;
