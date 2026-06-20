import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

import AboutPage from "./components/AboutPage.jsx";
import CrewPage from "./components/CrewPage.jsx";
import CastPage from "./components/CastPage.jsx";
import GalleryPage from "./components/GalleryPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/cast" element={<CastPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
