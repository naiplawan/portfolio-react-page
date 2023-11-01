import "../styles/ContentSection.css";
import Typewriter from "typewriter-effect";
import { RandomReveal } from "react-random-reveal";


function ContentSection() {
  const handleDownloadCV = () => {
    const fileURL = "/Rachaphol-Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = "Rachaphol-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="w-full h-full flex flex-row">
      {/* Left Box */}
      <div className="w-full flex-col justify-between p-16">  
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
          className="text-10xl m-4"
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
          {" "}
          I am passionate about applying my analytical skills and <br></br>
          attention to detail to ensure the quality and functionality of
          software products.{" "}
        </div>

        <div>
          <div className="flex-row items-center">
            <div className="socialText"> Follow me </div>
            <div className="m-4"></div>
            <img src="/socialMedia.svg" alt="socialMedia" />
        </div>

        </div>
        <div className="m-4">
          <button className="btn w-50 rounded-full" >Send Request</button>
          <button className="btn w-50 rounded-full" onClick={handleDownloadCV}>Download CV</button>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-1/2">
        <div>
          <img src="/heroImg.svg" alt="heroImage" />
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
