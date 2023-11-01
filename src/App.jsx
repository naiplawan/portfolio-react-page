import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import AboutPage from "./page/aboutPage";

function App() {
  return (
    <>
       <BrowserRouter> 
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="*" element={<ErrorPage />} />
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
