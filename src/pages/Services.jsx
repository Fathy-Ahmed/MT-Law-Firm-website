import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="services-page-view">
      {/* Subpage Hero Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <h1 className="service-title-large">{t('navServices')}</h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <span className="current">{t('navServices')}</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-white">{t('servicesTitle')}</h2>
            <div className="title-divider divider-gold"></div>
            <p className="section-subtitle text-white">{t('servicesSubtitle')}</p>
          </div>
          
          <div className="services-grid" style={{ marginTop: '40px' }}>
            {Object.values(servicesData).map((service) => (
              <div className="service-card" key={service.path} onClick={() => navigate(`/services/${service.path}`)}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service[lang].title}</h3>
                <p className="service-excerpt">{service[lang].excerpt}</p>
                <button className="btn-card-action">
                  <span>{t('btnFullDetails')}</span> &larr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
