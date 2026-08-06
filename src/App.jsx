import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <LanguageProvider>
      {/* Loading preloader with forced timer */}
      <Preloader />

      {/* Rolling ticker bar */}
      <Ticker />

      {/* Sticky header navigation */}
      <Header />

      {/* Main page router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:servicePath" element={<ServiceDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Premium brand footer */}
      <Footer />

      {/* Back to top scroll assist */}
      <BackToTop />
    </LanguageProvider>
  );
}
