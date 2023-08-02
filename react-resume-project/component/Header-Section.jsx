import React from "react";
import "./HeaderSection.css";

function HeaderSection() {
    return (
      <div className="headerSection">
        {/* Right Box */}
        <div className="headerRightBox">
          Rachaphol
        </div>
  
        {/* Left Box */}
        <div className="headerLeftBox">
          <div>About</div>
          <div>Passion</div>
          <div>Portfolio</div>
          <div className="contactBox">Contact Me</div>
        </div>
      </div>
    );
  }
  
  export default HeaderSection;
  