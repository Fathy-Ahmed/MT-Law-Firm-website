import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';

const serviceCategories = {
  "contract-drafting": "contracts",
  "legal-translation": "contracts",
  "company-formation": "corporate",
  "intellectual-property": "corporate",
  "real-estate-auth": "contracts",
  "corporate-retainers": "corporate",
  "criminal-defense": "defense"
};

const categories = [
  { id: 'all', labelKey: 'searchFilterAll' },
  { id: 'corporate', labelKey: 'searchFilterCorp' },
  { id: 'contracts', labelKey: 'searchFilterContracts' },
  { id: 'defense', labelKey: 'searchFilterDefense' }
];

export default function Services() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Safe keyword highlight helper
  const highlightText = (text, queryStr) => {
    if (!queryStr || !queryStr.trim()) return text;
    const cleanQuery = queryStr.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${cleanQuery})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      part.toLowerCase() === queryStr.trim().toLowerCase()
        ? <mark key={i} className="search-highlight">{part}</mark>
        : part
    );
  };

  // Filter services by category tag & search query
  const filteredServices = Object.values(servicesData).filter((service) => {
    // 1. Filter by category
    if (selectedCategory !== 'all') {
      const cat = serviceCategories[service.path];
      if (cat !== selectedCategory) return false;
    }
    
    // 2. Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const titleMatches = service[lang].title.toLowerCase().includes(q);
      const excerptMatches = service[lang].excerpt.toLowerCase().includes(q);
      return titleMatches || excerptMatches;
    }
    
    return true;
  });

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
          
          {/* Real-time Search Input */}
          <div className="services-search-container" style={{ marginTop: '30px' }}>
            <div className="services-search-input-wrap">
              <svg className="services-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="services-search-input"
                placeholder={t('searchInpagePlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="services-filter-tags">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tag-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.length === 0 ? (
              <div className="col-12 text-center" style={{ gridColumn: '1 / -1', padding: '40px 0', color: 'var(--color-text-muted-light)' }}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  style={{ width: '48px', height: '48px', color: 'rgba(200, 169, 110, 0.3)', marginBottom: '16px' }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <h4 style={{ color: '#ffffff', marginBottom: '8px' }}>
                  {t('searchNoResults')} "{searchQuery}"
                </h4>
              </div>
            ) : (
              filteredServices.map((service) => (
                <div className="service-card" key={service.path} onClick={() => navigate(`/services/${service.path}`)}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-title">
                    {highlightText(service[lang].title, searchQuery)}
                  </h3>
                  <p className="service-excerpt">
                    {highlightText(service[lang].excerpt, searchQuery)}
                  </p>
                  <button className="btn-card-action">
                    <span>{t('btnFullDetails')}</span> &larr;
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
