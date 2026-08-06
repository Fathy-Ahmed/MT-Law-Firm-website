import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/images/logo.png';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkProps = (sectionId) => {
    let path = `/${sectionId}`;
    if (sectionId === 'home') path = '/';
    if (sectionId === 'hierarchy') path = '/team';
    
    const isActive = location.pathname === path || 
      (sectionId === 'services' && location.pathname.startsWith('/services/'));
      
    return {
      to: path,
      onClick: () => setDrawerOpen(false),
      className: `nav-link ${isActive ? 'active' : ''}`
    };
  };

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo-box" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="MT Law Firm Logo" className="logo-emblem" />
            <div className="logo-text">
              <span className="brand-ar">{t('logoTextAr')}</span>
              <span className="brand-en">{t('logoTextEn')}</span>
            </div>
          </Link>

          <nav className="nav-menu" id="navMenu">
            <ul>
              <li><Link {...getNavLinkProps('home')}>{t('navHome')}</Link></li>
              <li><Link {...getNavLinkProps('about')}>{t('navAbout')}</Link></li>
              <li><Link {...getNavLinkProps('services')}>{t('navServices')}</Link></li>
              <li><Link {...getNavLinkProps('hierarchy')}>{t('navTeam')}</Link></li>
              <li><Link {...getNavLinkProps('faq')}>{t('faqLabel')}</Link></li>
              <li><Link {...getNavLinkProps('contact')}>{t('navContact')}</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <button className="lang-toggle-btn" id="langToggle" onClick={toggleLang} aria-label="Toggle Language">
              <span className="lang-label-active">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <Link to="/contact" className="btn btn-gold btn-nav">
              {t('btnConsultation')}
            </Link>
            
            <button className="mobile-toggle" id="mobileToggle" onClick={() => setDrawerOpen(true)} aria-label="Open Menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} id="mobileDrawer">
        <div className="drawer-header">
          <span className="drawer-title">{t('drawerTitle')}</span>
          <button className="drawer-close" id="drawerClose" onClick={() => setDrawerOpen(false)}>&times;</button>
        </div>
        <ul className="drawer-links">
          <li><Link {...getNavLinkProps('home')}>{t('navHome')}</Link></li>
          <li><Link {...getNavLinkProps('about')}>{t('navAbout')}</Link></li>
          <li><Link {...getNavLinkProps('services')}>{t('navServices')}</Link></li>
          <li><Link {...getNavLinkProps('hierarchy')}>{t('navTeam')}</Link></li>
          <li><Link {...getNavLinkProps('faq')}>{t('faqLabel')}</Link></li>
          <li><Link {...getNavLinkProps('contact')}>{t('navContact')}</Link></li>
        </ul>
        <div className="drawer-footer">
          <Link to="/contact" onClick={() => setDrawerOpen(false)} className="btn btn-gold w-100 text-center">
            {t('btnConsultation')}
          </Link>
        </div>
      </div>
      
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} id="drawerOverlay" onClick={() => setDrawerOpen(false)}></div>
    </>
  );
}
