
function Footer() {
  return (
    <div className="h-full flex flex-col justify-between text-center">
      <div className="rightFooterBox flex flex-row justify-between">
        <img src="/Squircle.svg" alt="emailIcon" className="w-6 h-6" />
        <div className="footerText text-gray-500 text-sm font-light">
          rachaphol.plo@gmail.com
        </div>
      </div>

      <div className="centerFooterBox text-sm">
        © Copyright 2023 | naiplawan
      </div>

      <div className="leftFooterBox flex flex-row justify-between">
        <img src="/icons8-pacman-50.png" alt="Pacman" className="w-6 h-6" />
      </div>

      

    </div>
  );
}

export default Footer;
