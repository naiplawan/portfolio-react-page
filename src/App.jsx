import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import PortfolioPage from "./page/PortfolioPage";
import ContactPage from "./page/ContactPage";
import ErrorPage from "./page/ErrorPage";

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
