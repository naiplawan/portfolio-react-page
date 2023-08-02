import HeaderSection from "../component/Header-Section";
import ContentSection from "../component/Content-Section";
import SkillSection from "../component/Skill-Section";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
    <HeaderSection />
    <ContentSection />
    <div className="centerText">Why Hire Me ?</div>
    <SkillSection />
    </div>
  );
}

export default App;
