import React from "react";
import "./HeaderSection.css";

function HeaderSection() {
  const githubProfileUrl = "https://github.com/naiplawan";
  const handlePortfolioClick = () => {
    // Navigate to the GitHub profile URL
    window.location.href = githubProfileUrl;
  };
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
          <div className="portfolioLink" onClick={handlePortfolioClick}>Portfolio</div>
          <div className="contactBox">Contact Me</div>
        </div>
      </div>
    );
  }
  
  export default HeaderSection;
  