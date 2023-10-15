import React from "react";
import './FooterSection.css';

function footerSection() {
    return (
        <div className="footerContainer">
            <div className="rightFooterBox">
            <img src="/Squircle.svg" alt="emailIcon" />
            <div className="footerText"> rachaphol.plo@gmail.com</div>
            </div>

            <div className="centerFooterBox">
             © Copyright 2023 | naiplawan
            </div>

            <div className="rightFooterBox">
            <img src="/icons8-pacman-50.png" alt="Pacman" />
            </div>
        </div>
    );
}

export default footerSection;