import React from "react";
import "./ContentSection.css";

function ContentSection() {
  return (
    <div className="contentSection">
      {/* Left Box */}
      <div className="contentLeftbox">
        <div>Hi!</div>
          <div className="subtext">I'm  Rachaphol Plookaom </div>
          Web Developer in Training
        <div>I'm based in Bangkok I am coding with a clean <br/> and beautiful problem solving in mind. </div>
        <div>
          <div className="socialBox"><div className="socialText"> Follow me </div> <img src="/socialMedia.svg" alt="socialMedia" /> </div>
        </div>
        <div className="buttonBox">
          <button>Send Request</button>
          <button>Download CV</button>
        </div>
      </div>

      {/* Right Box */}
      <div className="contentRightbox">
        <div>
          <img src="/heroImg.svg" alt="heroImage"/>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
