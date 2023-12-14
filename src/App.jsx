import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
import AboutPage from "./page/aboutPage.jsx";
import PortfolioPage from "./page/PortfoiloPage.jsx";
import ContactPage from "./page/ContactPage.jsx";


function App() {
  return (
    <>
       <BrowserRouter> 
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/portfolio" element={<PortfolioPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="*" element={<ErrorPage />} />
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
