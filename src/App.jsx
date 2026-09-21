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
import BlogPost from "./pages/BlogPost";
import DepressionPage from "./pages/services/depression";
import AnxietyPage from "./pages/services/anxiety";
import PtsdPage from "./pages/services/ptsd";
import InsomniaPage from "./pages/services/insomnia";
import EatingDisordersPage from "./pages/services/eating-disorders";
import AdhdPage from "./pages/services/adhd";
import OcdPage from "./pages/services/ocd";
import SmokingAlcoholCessationPage from "./pages/services/smoking-alcohol-cessation";
import OddPage from "./pages/services/odd";
import BipolarDisorderPage from "./pages/services/bipolar-disorder";
import useScrollToHash from "./hooks/useScrollToHash";
import { Toaster } from "sonner";

const App = () => {
  return (
    <Router>
      {/*  Now the hook runs within Router context */}
      <ScrollToHashHandler />

      <NavbarWithMegaMenu />
      <div className="flex flex-col min-h-screen bg-transparent">
      <Toaster richColors position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/depression" element={<DepressionPage />} />
          <Route path="/services/anxiety" element={<AnxietyPage />} />
          <Route path="/services/ptsd" element={<PtsdPage />} />
          <Route path="/services/insomnia" element={<InsomniaPage />} />
          <Route path="/services/eating-disorders" element={<EatingDisordersPage />} />
          <Route path="/services/adhd" element={<AdhdPage />} />
          <Route path="/services/ocd" element={<OcdPage />} />
          <Route path="/services/smoking-alcohol-cessation" element={<SmokingAlcoholCessationPage />} />
          <Route path="/services/odd" element={<OddPage />} />
          <Route path="/services/bipolar-disorder" element={<BipolarDisorderPage />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/forms/client-safety" element={<ClientSafetyContract />} />
          <Route path="/forms/informed" element={<InformedConsentContract />} />
          <Route path="/forms/tele-health" element={<TelehealthConsentContract />} />
          <Route path="/forms/authorization-release" element={<AuthorizationConsentContract />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

function ScrollToHashHandler() {
  useScrollToHash();
  return null; // this component just runs the hook
}

export default App;
