import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page-view">
      {/* Subpage Hero Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <h1 className="service-title-large">{t('navAbout')}</h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <span className="current">{t('navAbout')}</span>
          </div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-box">
              <div className="decor-border"></div>
              <div className="experience-badge">
                <span className="exp-number">10+</span>
                <span className="exp-text">{t('aboutExpText')}</span>
              </div>
              <div className="about-svg-illustration">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor">
                  <circle cx="100" cy="100" r="85" stroke="var(--color-gold-primary)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.25" />
                  <path d="M 65,175 L 135,175 A 35,6 0 0,0 65,175 Z" fill="var(--color-silver-dark)" />
                  <path d="M 75,168 L 125,168 A 25,4 0 0,0 75,168 Z" fill="var(--color-silver-dark)" />
                  <line x1="100" y1="40" x2="100" y2="168" stroke="var(--color-silver-dark)" strokeWidth="4.5" />
                  <circle cx="100" cy="120" r="5" fill="var(--color-gold-primary)" />
                  <circle cx="100" cy="80" r="5" fill="var(--color-gold-primary)" />
                  <path d="M 100,22 L 96,33 L 100,40 L 104,33 Z" fill="var(--color-gold-primary)" />
                  <path d="M 45,65 Q 100,58 155,65" stroke="var(--color-gold-primary)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <circle cx="45" cy="65" r="2.5" fill="var(--color-gold-primary)" />
                  <circle cx="155" cy="65" r="2.5" fill="var(--color-gold-primary)" />
                  <line x1="100" y1="61" x2="100" y2="44" stroke="var(--color-gold-primary)" strokeWidth="2" />
                  <line x1="45" y1="65" x2="33" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <line x1="45" y1="65" x2="45" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <line x1="45" y1="65" x2="57" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <path d="M 28,120 L 62,120 A 17,7 0 0,1 28,120" fill="var(--color-gold-primary)" />
                  <path d="M 28,120 L 62,120 A 17,7 0 0,0 28,120" fill="var(--color-gold-primary)" opacity="0.8" />
                  <line x1="155" y1="65" x2="143" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <line x1="155" y1="65" x2="155" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <line x1="155" y1="65" x2="167" y2="120" stroke="var(--color-silver-dark)" strokeWidth="1" />
                  <path d="M 138,120 L 172,120 A 17,7 0 0,1 138,120" fill="var(--color-gold-primary)" />
                  <path d="M 138,120 L 172,120 A 17,7 0 0,0 138,120" fill="var(--color-gold-primary)" opacity="0.8" />
                </svg>
              </div>
            </div>
            
            <div className="about-content">
              <h3 className="about-lead">{t('aboutLead')}</h3>
              <p className="about-text">{t('aboutText1')}</p>
              <p className="about-text">{t('aboutText2')}</p>
              
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-number">01</div>
                  <div className="value-details">
                    <h4>{t('value1Title')}</h4>
                    <p>{t('value1Desc')}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-number">02</div>
                  <div className="value-details">
                    <h4>{t('value2Title')}</h4>
                    <p>{t('value2Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
