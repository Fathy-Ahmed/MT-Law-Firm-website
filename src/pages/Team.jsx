import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import director from '../assets/images/director.jpg';
import deputyDirector from '../assets/images/deputy_director.png';
import cfo from '../assets/images/cfo.png';

export default function Team() {
  const { t } = useLanguage();

  return (
    <div className="team-page-view">
      {/* Subpage Hero Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <h1 className="service-title-large">{t('navTeam')}</h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <span className="current">{t('navTeam')}</span>
          </div>
        </div>
      </section>

      {/* Leadership hierarchy section */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline">{t('teamSubtitle')}</span>
            <h2 className="section-title">{t('teamTitle')}</h2>
            <div className="title-divider"></div>
            <p className="section-subtitle">{t('teamDesc')}</p>
          </div>

          <div className="hierarchy-flow" style={{ marginTop: '50px' }}>
            {/* Level 1: Managing Director */}
            <div className="hierarchy-level level-1">
              <div className="director-card">
                <div className="member-img-wrap">
                  <img src={director} alt={t('directorName')} className="member-photo" />
                </div>
                <div className="member-info">
                  <span className="member-badge gold-badge">{t('directorRole')}</span>
                  <h3 className="member-name">{t('directorName')}</h3>
                  <p className="member-bio">{t('directorBio')}</p>
                </div>
              </div>
            </div>

            <div className="hierarchy-connector">
              <div className="connector-vertical"></div>
            </div>

            {/* Level 2: Deputy Director & CFO */}
            <div className="hierarchy-level level-2">
              <div className="deputy-card">
                <div className="member-img-wrap">
                  <img src={deputyDirector} alt={t('deputyName')} className="member-photo" />
                </div>
                <div className="member-info">
                  <span className="member-badge silver-badge">{t('deputyRole')}</span>
                  <h3 className="member-name">{t('deputyName')}</h3>
                  <p className="member-bio">{t('deputyBio')}</p>
                </div>
              </div>

              <div className="cfo-card">
                <div className="member-img-wrap">
                  <img src={cfo} alt={t('cfoName')} className="member-photo" />
                </div>
                <div className="member-info">
                  <span className="member-badge silver-badge">{t('cfoRole')}</span>
                  <h3 className="member-name">{t('cfoName')}</h3>
                  <p className="member-bio">{t('cfoBio')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
