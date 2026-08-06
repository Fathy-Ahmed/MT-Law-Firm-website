import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();

  const handleLinkClick = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 120;
        const topPos = el.offsetTop - offset;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  return (
    <footer className="main-footer bg-dark">
      <div className="container footer-grid">
        {/* Col 1: About Brand */}
        <div className="footer-col brand-col">
          <Link to="/" className="logo-box footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/images/logo.png" alt="MT Law Firm Logo" className="logo-emblem" />
            <div className="logo-text">
              <span className="brand-ar">{t('logoTextAr')}</span>
              <span className="brand-en">{t('logoTextEn')}</span>
            </div>
          </Link>
          <p className="footer-desc">{t('aboutText1').substring(0, 100)}...</p>
          <div className="footer-social-links">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Services Links */}
        <div className="footer-col links-col">
          <h4 className="footer-title">{t('navServices')}</h4>
          <ul>
            <li><Link to="/services/contract-drafting">صياغة ومراجعة العقود / Contract Drafting</Link></li>
            <li><Link to="/services/legal-translation">الترجمة القانونية المعتمدة / Certified Translation</Link></li>
            <li><Link to="/services/company-formation">تأسيس الشركات / Company Formation</Link></li>
            <li><Link to="/services/intellectual-property">الملكية الفكرية / Intellectual Property</Link></li>
            <li><Link to="/services/real-estate-auth">خدمات الشهر العقاري / Notarization</Link></li>
            <li><Link to="/services/corporate-retainers">عقود الشركات الدورية / Corporate Retainers</Link></li>
            <li><Link to="/services/criminal-defense">القضايا الجنائية / Criminal Defense</Link></li>
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-title">روابط سريعة / Quick Links</h4>
          <ul>
            <li><Link to={location.pathname === '/' ? '#home' : '/#home'} onClick={(e) => handleLinkClick(e, 'home')}>{t('navHome')}</Link></li>
            <li><Link to={location.pathname === '/' ? '#about' : '/#about'} onClick={(e) => handleLinkClick(e, 'about')}>{t('navAbout')}</Link></li>
            <li><Link to={location.pathname === '/' ? '#services' : '/#services'} onClick={(e) => handleLinkClick(e, 'services')}>{t('navServices')}</Link></li>
            <li><Link to={location.pathname === '/' ? '#hierarchy' : '/#hierarchy'} onClick={(e) => handleLinkClick(e, 'hierarchy')}>{t('navTeam')}</Link></li>
            <li><Link to={location.pathname === '/' ? '#contact' : '/#contact'} onClick={(e) => handleLinkClick(e, 'contact')}>{t('navContact')}</Link></li>
          </ul>
        </div>

        {/* Col 4: Quick Contacts */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">{t('navContact')}</h4>
          <p>{t('mapAddress')}</p>
          <p><span>{t('mapPhoneLabel')}</span> <a href="tel:+97141234567">+971 4 123 4567</a></p>
          <p><span>{t('mapMobileLabel')}</span> <a href="tel:+971509876543">+971 50 987 6543</a></p>
          <p><span>{t('mapEmailLabel')}</span> <a href="mailto:info@mt-lawfirm.com">info@mt-lawfirm.com</a></p>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container footer-bottom-flex">
          <p className="copyright-text">{t('footerCopy')}</p>
          <p className="developer-text">{t('footerDev')}</p>
        </div>
      </div>
    </footer>
  );
}
