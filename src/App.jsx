import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/page/HomePage.jsx";
import ErrorPage from "@/page/ErrorPage.jsx";
import AboutPage from "@/page/AboutPage.jsx";
import PortfolioPage from "@/page/PortfolioPage.jsx";
import ContactPage from "@/page/ContactPage.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
