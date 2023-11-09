import Lorem from "@/component/Lorem";
import NavBar from "@/component/NavBar";
import Typewriter from "typewriter-effect";


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

  return (
    <>
    <NavBar/>
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
      <div> 
        <Lorem/>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-xl p-2"> Follow me </div>
        <div className="m-4"></div>
        <img src="/socialMedia.svg" alt="socialMedia" />
      </div>

      <div className="p-5 flex flex-row justify-center ">
          <button className="btn w-50 m-5 rounded-full" >Send Request</button>
          <button className="btn w-50  m-5 rounded-full" onClick={handleDownloadCV}>Download CV</button>
        </div>

    </div>
    </div>
    </>
  )
}

export default AboutPage
