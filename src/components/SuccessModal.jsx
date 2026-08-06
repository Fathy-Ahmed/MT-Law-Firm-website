import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SuccessModal({ isOpen, onClose, ticketNumber }) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="modal-wrapper open" id="successModal" onClick={onClose}>
      <div className="modal-card success-card text-center" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C8A97E" strokeWidth="2.5" className="checkmark-svg">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="success-title">{t('modalSuccessTitle')}</h3>
        <p className="success-message">{t('modalSuccessMessage')}</p>
        <span className="highlight-gold font-weight-bold" style={{ fontSize: '1.2rem', display: 'block', marginBottom: '25px' }}>
          {ticketNumber}
        </span>
        <button className="btn btn-gold btn-md" onClick={onClose}>
          {t('modalSuccessClose')}
        </button>
      </div>
    </div>
  );
}
