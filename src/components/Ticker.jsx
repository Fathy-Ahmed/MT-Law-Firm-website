import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Ticker() {
  const { lang, t } = useLanguage();

  return (
    <div className="top-ticker-bar">
      <div className="container ticker-container">
        <div className="ticker-label">{t('tickerLabel')}</div>
        <div className="ticker-content-wrapper">
          <div className="ticker-content" id="tickerContent">
            <span dir={lang === 'ar' ? 'rtl' : 'ltr'}>{t('tickerContent')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
