
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
    <h1>aboutPage</h1>
    <div>
      <div className="flex-row items-center">
        <div className="socialText"> Follow me </div>
        <div className="m-4"></div>
        <img src="/socialMedia.svg" alt="socialMedia" />
      </div>

      <div className="m-4">
          <button className="btn w-50 rounded-full" >Send Request</button>
          <button className="btn w-50 rounded-full" onClick={handleDownloadCV}>Download CV</button>
        </div>

    </div>
    </>
  )
}

export default AboutPage
