import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarWithMegaMenu from "./components/NavbarWithMegaMenu";
import Footer from "./components/Footer";
import './index.css'

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Referral from "./pages/Referral";

const App = () => {
  return (
    <Router>

      <NavbarWithMegaMenu />
      <div className="flex flex-col min-h-screen bg-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
