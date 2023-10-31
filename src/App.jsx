import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AboutPage from "./page/aboutPage.jsx";
// import ContentSection from "./component/Content-Section";
// import SkillSection from "./component/Skill-Section";
// import FooterSection from "./component/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
