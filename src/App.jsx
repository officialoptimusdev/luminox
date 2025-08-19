import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css'

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>

      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
