import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import SuccessModal from '../components/SuccessModal';

// Animated Stat Card Sub-component
const StatCard = ({ target, plus, title }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    let observer;
    let counted = false;

    if (cardRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            let current = 0;
            const increment = target / 80;
            const timer = setInterval(() => {
              current += increment;
              if (current < target) {
                setCount(Math.ceil(current));
              } else {
                setCount(target);
                clearInterval(timer);
              }
            }, 15);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer && cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [target]);

  return (
    <div className="stat-card" ref={cardRef}>
      <span className="stat-count">{count}</span>
      <span className="stat-plus">{plus}</span>
      <span className="stat-title">{title}</span>
    </div>
  );
};

// Collapsible FAQ Card Sub-component
const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        type="button" 
        className="faq-question-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3>{question}</h3>
        <svg className="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-answer-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

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

  // Handle section scrolling on mount if hash exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#')) {
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          const offset = 120;
          const topPos = targetElement.offsetTop - offset;
          window.scrollTo({
            top: topPos,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
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
    <>
      {/* 3. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge-gold">{t('heroBadge')}</div>
            <h1 className="hero-title">
              <span>{t('heroTitleNormal')}</span>{' '}
              <span className="highlight-gold">{t('heroTitleHighlight')}</span>
            </h1>
            <p className="hero-subtitle">{t('heroSubtitle')}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-gold btn-lg" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>{t('btnStartConsultation')}</a>
              <a href="#services" className="btn btn-outline btn-lg" onClick={(e) => {
                e.preventDefault();
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
              }}>{t('btnExploreServices')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES STRIP */}
      <div className="features-strip">
        <div className="container strip-grid">
          <div className="strip-item">
            <div className="strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="strip-info">
              <h3>{t('featConfTitle')}</h3>
              <p>{t('featConfDesc')}</p>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="strip-info">
              <h3>{t('featSpeedTitle')}</h3>
              <p>{t('featSpeedDesc')}</p>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="strip-info">
              <h3>{t('featPrevTitle')}</h3>
              <p>{t('featPrevDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="about-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline">{t('aboutLabel')}</span>
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <div className="title-divider"></div>
          </div>
          
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
            
            <div class="about-content">
              <h3 class="about-lead">{t('aboutLead')}</h3>
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

          {/* Stats Cards */}
          <div className="stats-container section-margin-top">
            <StatCard target={98} plus="%" title={t('statSuccess')} />
            <StatCard target={350} plus="+" title={t('statClients')} />
            <StatCard target={10} plus={t('statYears')} title={t('statYearsTitle')} />
            <StatCard target={12} plus="+" title={t('statAdvisors')} />
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="services-section section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-white">{t('servicesTitle')}</h2>
            <div className="title-divider divider-gold"></div>
            <p className="section-subtitle text-white">{t('servicesSubtitle')}</p>
          </div>
          
          <div className="services-grid">
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

      {/* 7. TEAM SECTION */}
      <section id="hierarchy" className="team-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline">{t('teamSubtitle')}</span>
            <h2 className="section-title">{t('teamTitle')}</h2>
            <div className="title-divider"></div>
            <p className="section-subtitle">{t('teamDesc')}</p>
          </div>

          <div className="hierarchy-flow">
            {/* Level 1: Managing Director */}
            <div className="hierarchy-level level-1">
              <div className="director-card">
                <div className="member-img-wrap">
                  <img src="/assets/images/director.jpg" alt={t('directorName')} className="member-photo" />
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
                  <img src="/assets/images/deputy_director.png" alt={t('deputyName')} className="member-photo" />
                </div>
                <div className="member-info">
                  <span className="member-badge silver-badge">{t('deputyRole')}</span>
                  <h3 className="member-name">{t('deputyName')}</h3>
                  <p className="member-bio">{t('deputyBio')}</p>
                </div>
              </div>

              <div className="cfo-card">
                <div className="member-img-wrap">
                  <img src="/assets/images/cfo.png" alt={t('cfoName')} className="member-photo" />
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
      {/* 7.5. FAQ SECTION */}
      <section id="faq" className="faq-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline">{t('faqLabel')}</span>
            <h2 className="section-title">{t('faqTitle')}</h2>
            <div className="title-divider"></div>
            <p className="section-subtitle">{t('faqSubtitle')}</p>
          </div>

          <div className="faq-grid">
            <div className="faq-column">
              <FaqCard 
                question={lang === 'ar' ? 'هل يقدم مكتب MT للمحاماة استشارات قانونية عبر الإنترنت؟' : 'Does MT Law Firm provide online legal consultations?'}
                answer={lang === 'ar' ? 'نعم، نقدم استشارات قانونية مرئية ومكتوبة عبر الإنترنت لعملائنا محلياً ودولياً لتسهيل الأعمال وتوفير الوقت والجهد، مع الالتزام التام بالسرية والخصوصية.' : 'Yes, we provide online virtual and written legal consultations to our clients locally and globally to facilitate business operations, save time, and maintain absolute confidentiality.'}
              />
              <FaqCard 
                question={lang === 'ar' ? 'هل يتولى المكتب صياغة وتدقيق عقود البيع والشراء العقارية؟' : 'Does the firm handle drafting and reviewing real estate contracts?'}
                answer={lang === 'ar' ? 'نعم، لدينا قطاع متخصص في صياغة وتدقيق كافة عقود بيع وشراء العقارات والأراضي، والتحقق من سلامة ملكيتها وصحتها القانونية لتأمين استثماراتكم.' : 'Yes, we have a specialized division for drafting and reviewing all real estate purchase and sale agreements, verifying ownership validity and legal standing to secure your investments.'}
              />
              <FaqCard 
                question={lang === 'ar' ? 'كيف يمكنني متابعة قضيتي أو معاملتي الاستشارية؟' : 'How can I track the progress of my case or transaction?'}
                answer={lang === 'ar' ? 'يتم تعيين مستشار قانوني مخصص لكل عميل ليكون حلقة الوصل المباشرة. كما نقدم تقارير دورية حول مستجدات القضايا وتطورات الإجراءات أولاً بأول.' : 'A dedicated legal advisor is assigned to each client as a direct point of contact. We provide regular, structured updates regarding your case progress and procedures.'}
              />
            </div>

            <div className="faq-column">
              <FaqCard 
                question={lang === 'ar' ? 'ما هي المجالات القانونية التي يغطيها مكتب MT للمحاماة؟' : 'What legal fields does MT Law Firm cover?'}
                answer={lang === 'ar' ? 'نغطي مجموعة واسعة من الخدمات القانونية بما في ذلك صياغة العقود التجارية، الترجمة القانونية المعتمدة، تأسيس الشركات وخدمات رجال الأعمال، حماية الملكية الفكرية، توثيق الشهر العقاري، الاستشارات الجنائية، وعقود الاستشارات السنوية للشركات.' : 'We cover a comprehensive scope of legal services including commercial contract drafting, certified legal translation, company formation, intellectual property protection, notarization/real estate authentication, criminal defense, and annual corporate retainer consultations.'}
              />
              <FaqCard 
                question={lang === 'ar' ? 'ما هي الإجراءات القانونية المتبعة في قضايا الأحوال الشخصية والطلاق؟' : 'What are the legal procedures in personal status and divorce cases?'}
                answer={lang === 'ar' ? 'نقدم الدعم القانوني والتمثيل القضائي في كافة قضايا الأحوال الشخصية، ونسعى دائماً للتسوية الودية أولاً لحفظ الروابط الأسرية، ثم اتخاذ الإجراءات القضائية اللازمة لضمان الحقوق الشرعية والقانونية.' : 'We provide legal support and representation in personal status matters, prioritizing amicable settlements to preserve relationships, followed by judicial action to secure all legal rights.'}
              />
              <FaqCard 
                question={lang === 'ar' ? 'هل يقدم المكتب خدمات الاستشارات والتمثيل القضائي للشركات؟' : 'Does the firm provide corporate counsel and litigation representation?'}
                answer={lang === 'ar' ? 'نعم، نقدم عقود استشارية مستمرة (Retainers) للشركات تشمل الاستشارات اليومية وصياغة المعاملات وصياغة عقود الموظفين والتمثيل أمام الجهات القضائية والتحكيمية.' : 'Yes, we provide ongoing corporate retainer contracts covering day-to-day counsel, transaction reviews, employee contracts, and representation in arbitration and litigation.'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="contact-section section-padding bg-dark">
        <div className="container">
          <div className="contact-grid">
            {/* Column 1: Booking Form */}
            <div className="form-container-box">
              <h3 className="form-box-title">{t('contactLabel')}</h3>
              
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

            {/* Column 2: Contact Details & Info */}
            <div className="contact-details-box">
              <span className="badge-gold">{t('contactLabel')}</span>
              <h2 className="section-title text-white">{t('contactTitle')}</h2>
              <p className="section-subtitle">{t('contactDesc')}</p>

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
      </section>

      {/* Reusable Success Feedback Modal */}
      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        ticketNumber={ticketNumber}
      />
    </>
  );
}
