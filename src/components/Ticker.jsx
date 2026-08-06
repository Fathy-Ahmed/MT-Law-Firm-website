import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Ticker() {
  const { t } = useLanguage();

  return (
    <div className="top-ticker-bar">
      <div className="container ticker-container">
        <div className="ticker-label">{t('tickerLabel')}</div>
        <div className="ticker-content-wrapper">
          <div className="ticker-content" id="tickerContent">
            {t('tickerContent')}
          </div>
        </div>
      </div>
    </div>
  );
}
