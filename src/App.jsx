import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Loading preloader with forced timer */}
      <Preloader />

      {/* Rolling ticker bar */}
      <Ticker />

      {/* Sticky header navigation */}
      <Header />

      {/* Main page router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:servicePath" element={<ServiceDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Premium brand footer */}
      <Footer />

      {/* Back to top scroll assist */}
      <BackToTop />
    </LanguageProvider>
  );
}
