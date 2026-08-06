import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import SuccessModal from '../components/SuccessModal';

export default function Contact() {
  const { lang, t } = useLanguage();

  // Form states
  const [formValues, setFormValues] = useState({
    clientName: '',
    clientPhone: '',
    serviceType: '',
    caseDesc: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  
  // File upload state
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formValues.clientName.trim().length < 3) {
      newErrors.clientName = t('errName');
    }
    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
    if (!phoneRegex.test(formValues.clientPhone.trim())) {
      newErrors.clientPhone = t('errPhone');
    }
    if (!formValues.serviceType) {
      newErrors.serviceType = t('errService');
    }
    if (formValues.caseDesc.trim().length < 15) {
      newErrors.caseDesc = t('errDesc');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setTicketNumber(`#MT-${randomId}`);
      setModalOpen(true);
      setFormValues({
        clientName: '',
        clientPhone: '',
        serviceType: '',
        caseDesc: ''
      });
      setFile(null);
    }, 1500);
  };

  return (
    <div className="contact-page-view">
      {/* Subpage Hero Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <h1 className="service-title-large">{t('navContact')}</h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <span className="current">{t('navContact')}</span>
          </div>
        </div>
      </section>

      {/* Grid forms and map details */}
      <section className="contact-section section-padding bg-dark">
        <div className="container">
          <div className="contact-grid">
            
            {/* Column 1: Booking Form */}
            <div>
              <span className="badge-gold">{t('contactLabel')}</span>
              <h2 className="section-title text-white" style={{ marginTop: '10px', marginBottom: '15px' }}>{t('contactTitle')}</h2>
              <p className="section-subtitle" style={{ marginBottom: '30px' }}>{t('contactDesc')}</p>
              
              <div className="form-container-box">
                <form id="consultationForm" className="consultation-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="clientName">{t('formName')}</label>
                    <input
                      type="text"
                      id="clientName"
                      name="clientName"
                      value={formValues.clientName}
                      onChange={handleInputChange}
                      className={errors.clientName ? 'invalid' : ''}
                      placeholder={lang === 'ar' ? 'أدخل اسمك بالكامل' : 'Enter your full name'}
                    />
                    {errors.clientName && <span className="error-text">{errors.clientName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientPhone">{t('formPhone')}</label>
                    <input
                      type="tel"
                      id="clientPhone"
                      name="clientPhone"
                      value={formValues.clientPhone}
                      onChange={handleInputChange}
                      className={errors.clientPhone ? 'invalid' : ''}
                      placeholder="+971 50 123 4567"
                    />
                    {errors.clientPhone && <span className="error-text">{errors.clientPhone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType">{t('formSelectService')}</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formValues.serviceType}
                      onChange={handleInputChange}
                      className={errors.serviceType ? 'invalid' : ''}
                    >
                      <option value="">{lang === 'ar' ? '-- اختر مجال الاختصاص --' : '-- Choose Practice Area --'}</option>
                      {Object.entries(servicesData).map(([key, service]) => (
                        <option key={key} value={key}>
                          {service[lang].title}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && <span className="error-text">{errors.serviceType}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="caseDesc">{t('formDesc')}</label>
                    <textarea
                      id="caseDesc"
                      name="caseDesc"
                      value={formValues.caseDesc}
                      onChange={handleInputChange}
                      className={errors.caseDesc ? 'invalid' : ''}
                      rows="4"
                      placeholder={lang === 'ar' ? 'اكتب تفاصيل استشارتك هنا باختصار...' : 'Write consultation details briefly...'}
                    />
                    {errors.caseDesc && <span className="error-text">{errors.caseDesc}</span>}
                  </div>

                  {/* Drag and drop file field */}
                  <div className="form-group span-2">
                    <label className="form-label">{t('formUpload')}</label>
                    <div 
                      className={`file-upload-wrapper ${dragActive ? 'drag-active' : ''}`}
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="caseFile"
                        className="file-upload-input"
                        onChange={handleFileChange}
                      />
                      <div className="file-upload-design">
                        <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        <span className="file-upload-text">
                          {file ? `${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)` : t('fileDrag')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-gold btn-submit w-100" disabled={submitting}>
                    <span>{submitting ? t('formSubmitting') : t('formSubmit')}</span>
                    {submitting && <span className="submit-spinner"></span>}
                  </button>
                </form>
              </div>
            </div>

            {/* Column 2: Contact Details & Info */}
            <div>
              <span className="badge-gold">{t('contactInfoLabel')}</span>
              <h2 className="section-title text-white" style={{ marginTop: '10px', marginBottom: '15px' }}>{t('contactInfoTitle')}</h2>
              <p className="section-subtitle" style={{ marginBottom: '30px' }}>{t('contactInfoDesc')}</p>
              <div className="contact-details-box">
              <div className="info-cards-list">
                <div className="info-card-item">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="3"/></svg>
                  </div>
                  <div className="card-text">
                    <h4>العنوان / Address</h4>
                    <p>{t('mapAddress')}</p>
                  </div>
                </div>
                <div className="info-card-item">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="card-text">
                    <h4>الهاتف / Phone</h4>
                    <p><span>{t('mapPhoneLabel')}</span> <a href="tel:+97141234567">+971 4 123 4567</a></p>
                    <p><span>{t('mapMobileLabel')}</span> <a href="tel:+971509876543">+971 50 987 6543</a></p>
                  </div>
                </div>
                <div className="info-card-item">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="card-text">
                    <h4>البريد / Email</h4>
                    <p><a href="mailto:info@mt-lawfirm.com">info@mt-lawfirm.com</a></p>
                  </div>
                </div>
              </div>

              {/* Map block */}
              <div className="map-wrapper-box">
                <div className="map-luxury-placeholder">
                  <div className="map-glow"></div>
                  <svg className="map-bg-grid" viewBox="0 0 400 150">
                    <path d="M 50 0 L 50 150 M 100 0 L 100 150 M 150 0 L 150 150 M 200 0 L 200 150 M 250 0 L 250 150" />
                  </svg>
                  <div className="map-marker-pin">
                    <div className="pulse-ring"></div>
                    <svg viewBox="0 0 24 24" fill="#C8A96A" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <span className="map-label">{t('mapTitle')}</span>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm map-direction-btn">{t('mapBtn')}</a>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        ticketNumber={ticketNumber}
      />
    </div>
  );
}
