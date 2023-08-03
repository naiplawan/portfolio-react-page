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
            <div className="footerCenterText"> © Copyright 2023 | naiplawan</div>
            </div>

            <div className="rightFooterBox">
            <img src="/Group 2.svg" alt="instagramIcon" />
            <img src="" alt="" />
            </div>
        </div>
    );
}

export default footerSection;