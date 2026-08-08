import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import SuccessModal from '../components/SuccessModal';

export default function ServiceDetail() {
  const { servicePath } = useParams();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const service = servicesData[servicePath];

  // Form states
  const [formValues, setFormValues] = useState({
    bookingName: '',
    bookingPhone: '',
    bookingDesc: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [servicePath]);

  // If service doesn't exist, redirect to home
  if (!service) {
    return (
      <div className="container text-center" style={{ padding: '100px 0' }}>
        <h2 data-ar="الخدمة غير موجودة" data-en="Service Not Found">الخدمة غير موجودة</h2>
        <p style={{ margin: '20px 0' }} data-ar="يرجى التحقق من الرابط أو العودة للرئيسية." data-en="Please check the URL or return to home.">يرجى التحقق من الرابط أو العودة للرئيسية.</p>
        <Link to="/" className="btn btn-gold">الرئيسية / Home</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formValues.bookingName.trim().length < 3) {
      newErrors.bookingName = t('errName');
    }
    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
    if (!phoneRegex.test(formValues.bookingPhone.trim())) {
      newErrors.bookingPhone = t('errPhone');
    }
    if (formValues.bookingDesc.trim().length < 15) {
      newErrors.bookingDesc = t('errDesc');
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
        bookingName: '',
        bookingPhone: '',
        bookingDesc: ''
      });
    }, 1200);
  };

  return (
    <div id="service-detail-view">
      {/* Hero Header */}
      <section className="service-detail-hero">
        <div className="container">
          <Link to="/#services" className="back-link">
            <span data-ar="&larr; عودة للمجالات" data-en="&larr; Back to Services">&larr; عودة للمجالات</span>
          </Link>
          <div className="service-icon-large">
            {service.icon}
          </div>
          <h1 className="service-title-large">
            {service[lang].title}
          </h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <Link to="/#services">{t('navServices')}</Link>
            <span className="separator">/</span>
            <span className="current">
              {service[lang].title}
            </span>
          </div>
        </div>
      </section>

      {/* Body Content & Sidebar Form */}
      <section className="service-detail-body">
        <div className="container">
          <div className="service-detail-grid">
            
            {/* Main Content (Scope & Breakdown) */}
            <div 
              className="service-detail-main-content" 
              dangerouslySetInnerHTML={{ __html: service[lang].desc }}
            />

            {/* Sidebar Booking card */}
            <div className="service-detail-sidebar">
              <div className="sidebar-sticky-wrapper">
                <div className="sidebar-booking-card">
                  <h3 className="card-title" data-ar="طلب هذه الخدمة" data-en="Order This Service">طلب هذه الخدمة</h3>
                  <p className="card-subtitle" 
                     data-ar="سجل بياناتك وسيتم توجيه ملفك لأحد مستشارينا المختصين فوراً." 
                     data-en="Submit details to connect with a specialized attorney immediately.">
                    سجل بياناتك وسيتم توجيه ملفك لأحد مستشارينا المختصين فوراً.
                  </p>
                  
                  <form className="sidebar-booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="bookingName" data-ar="الاسم الكامل" data-en="Full Name">الاسم الكامل</label>
                      <input
                        type="text"
                        id="bookingName"
                        name="bookingName"
                        value={formValues.bookingName}
                        onChange={handleInputChange}
                        className={errors.bookingName ? 'invalid' : ''}
                        placeholder={lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                      />
                      {errors.bookingName && <span className="error-text">{errors.bookingName}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="bookingPhone" data-ar="رقم الجوال" data-en="Mobile Number">رقم الجوال</label>
                      <input
                        type="tel"
                        id="bookingPhone"
                        name="bookingPhone"
                        value={formValues.bookingPhone}
                        onChange={handleInputChange}
                        className={errors.bookingPhone ? 'invalid' : ''}
                        placeholder="+971 50 123 4567"
                      />
                      {errors.bookingPhone && <span className="error-text">{errors.bookingPhone}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="bookingDesc" data-ar="شرح موجز لطلبك" data-en="Briefly describe your request">شرح موجز لطلبك</label>
                      <textarea
                        id="bookingDesc"
                        name="bookingDesc"
                        value={formValues.bookingDesc}
                        onChange={handleInputChange}
                        className={errors.bookingDesc ? 'invalid' : ''}
                        rows="4"
                        placeholder={lang === 'ar' ? 'يرجى كتابة التفاصيل هنا...' : 'Write details here...'}
                      />
                      {errors.bookingDesc && <span className="error-text">{errors.bookingDesc}</span>}
                    </div>
                    
                    <button type="submit" className="btn btn-gold w-100" disabled={submitting}>
                      <span data-ar="إرسال الطلب" data-en="Send Request">
                        {submitting ? t('formSubmitting') : t('formSubmit')}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail-footer">
            <Link to="/#services" className="btn-back">
              <span data-ar="&rarr; العودة لكافة الخدمات" data-en="&rarr; Back to all services">&rarr; العودة لكافة الخدمات</span>
            </Link>
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
