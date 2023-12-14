import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import AboutPage from "./page/AboutPage";
import PortfolioPage from "./page/PortfoiloPage";
import ContactPage from "./page/ContactPage";


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
