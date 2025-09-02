import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarWithMegaMenu from "./components/Navs/NavbarWithMegaMenu";
import Footer from "./components/Footer";
import './index.css'

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Form from "./pages/forms";
import Referral from "./pages/Referral";
import ClientSafetyContract from "./pages/clientSafetyContract";
import InformedConsentContract from "./pages/informedConsentContract";
import TelehealthConsentContract from "./pages/TelehealthConsentContract";
import AuthorizationConsentContract from "./pages/AuthorizationConsentContract";
import Blog from "./pages/blog";

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
          <Route path="/forms" element={<Form />} />
          <Route path="/forms/client-safety" element={<ClientSafetyContract />} />
          <Route path="/forms/informed" element={<InformedConsentContract />} />
          <Route path="/forms/tele-health" element={<TelehealthConsentContract />} />
          <Route path="/forms/authorization-release" element={<AuthorizationConsentContract />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
