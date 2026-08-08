import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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

export default function Faq() {
  const { lang, t } = useLanguage();

  return (
    <div className="faq-page-view">
      {/* Subpage Hero Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <h1 className="service-title-large">{t('faqLabel')}</h1>
          <div className="breadcrumbs">
            <Link to="/">{t('navHome')}</Link>
            <span className="separator">/</span>
            <span className="current">{t('faqLabel')}</span>
          </div>
        </div>
      </section>

      {/* FAQ Accordion list */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-outline">{t('faqLabel')}</span>
            <h2 className="section-title">{t('faqTitle')}</h2>
            <div className="title-divider"></div>
            <p className="section-subtitle">{t('faqSubtitle')}</p>
          </div>

          <div className="faq-grid" style={{ marginTop: '40px' }}>
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
    </div>
  );
}
