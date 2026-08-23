import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';

export default function SearchModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const inputRef = useRef(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
      setQuery('');
      setActiveTab('all');
    }
  }, [isOpen]);

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Build searchable index dynamically based on current language
  const services = Object.values(servicesData).map(service => ({
    type: 'services',
    id: `service-${service.id}`,
    title: service[lang].title,
    snippet: service[lang].excerpt,
    link: `/services/${service.path}`,
    categoryName: lang === 'ar' ? 'مجال اختصاص' : 'Practice Area'
  }));

  const team = [
    {
      type: 'team',
      id: 'team-mirna',
      title: t('directorName'),
      snippet: `${t('directorRole')} - ${t('directorBio')}`,
      link: '/team',
      categoryName: lang === 'ar' ? 'فريق العمل' : 'Our Team'
    },
    {
      type: 'team',
      id: 'team-tariq',
      title: t('deputyName'),
      snippet: `${t('deputyRole')} - ${t('deputyBio')}`,
      link: '/team',
      categoryName: lang === 'ar' ? 'فريق العمل' : 'Our Team'
    },
    {
      type: 'team',
      id: 'team-sarah',
      title: t('cfoName'),
      snippet: `${t('cfoRole')} - ${t('cfoBio')}`,
      link: '/team',
      categoryName: lang === 'ar' ? 'فريق العمل' : 'Our Team'
    }
  ];

  const faqs = [
    {
      type: 'faq',
      id: 'faq-1',
      title: lang === 'ar' ? 'هل يقدم مكتب أركان للمحاماة استشارات قانونية عبر الإنترنت؟' : 'Does Arkan Law Firm provide online legal consultations?',
      snippet: lang === 'ar' ? 'نعم، نقدم استشارات قانونية مرئية ومكتوبة عبر الإنترنت لعملائنا محلياً ودولياً لتسهيل الأعمال وتوفير الوقت والجهد، مع الالتزام التام بالسرية والخصوصية.' : 'Yes, we provide online virtual and written legal consultations to our clients locally and globally to facilitate business operations, save time, and maintain absolute confidentiality.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    },
    {
      type: 'faq',
      id: 'faq-2',
      title: lang === 'ar' ? 'هل يتولى المكتب صياغة وتدقيق عقود البيع والشراء العقارية؟' : 'Does the firm handle drafting and reviewing real estate contracts?',
      snippet: lang === 'ar' ? 'نعم، لدينا قطاع متخصص في صياغة وتدقيق كافة عقود بيع وشراء العقارات والأراضي، والتحقق من سلامة ملكيتها وصحتها القانونية لتأمين استثماراتكم.' : 'Yes, we have a specialized division for drafting and reviewing all real estate purchase and sale agreements, verifying ownership validity and legal standing to secure your investments.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    },
    {
      type: 'faq',
      id: 'faq-3',
      title: lang === 'ar' ? 'كيف يمكنني متابعة قضيتي أو معاملتي الاستشارية؟' : 'How can I track the progress of my case or transaction?',
      snippet: lang === 'ar' ? 'يتم تعيين مستشار قانوني مخصص لكل عميل ليكون حلقة الوصل المباشرة. كما نقدم تقارير دورية حول مستجدات القضايا وتطورات الإجراءات أولاً بأول.' : 'A dedicated legal advisor is assigned to each client as a direct point of contact. We provide regular, structured updates regarding your case progress and procedures.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    },
    {
      type: 'faq',
      id: 'faq-4',
      title: lang === 'ar' ? 'ما هي المجالات القانونية التي يغطيها مكتب أركان للمحاماة؟' : 'What legal fields does Arkan Law Firm cover?',
      snippet: lang === 'ar' ? 'نغطي مجموعة واسعة من الخدمات القانونية بما في ذلك صياغة العقود التجارية، الترجمة القانونية المعتمدة، تأسيس الشركات وخدمات رجال الأعمال، حماية الملكية الفكرية، توثيق الشهر العقاري، الاستشارات الجنائية، وعقود الاستشارات السنوية للشركات.' : 'We cover a comprehensive scope of legal services including commercial contract drafting, certified legal translation, company formation, intellectual property protection, notarization/real estate authentication, criminal defense, and annual corporate retainer consultations.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    },
    {
      type: 'faq',
      id: 'faq-5',
      title: lang === 'ar' ? 'ما هي الإجراءات القانونية المتبعة في قضايا الأحوال الشخصية والطلاق؟' : 'What are the legal procedures in personal status and divorce cases?',
      snippet: lang === 'ar' ? 'نقدم الدعم القانوني والتمثيل القضائي في كافة قضايا الأحوال الشخصية، ونسعى دائماً للتسوية الودية أولاً لحفظ الروابط الأسرية، ثم اتخاذ الإجراءات القضائية اللازمة لضمان الحقوق الشرعية والقانونية.' : 'We provide legal support and representation in personal status matters, prioritizing amicable settlements to preserve relationships, followed by judicial action to secure all legal rights.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    },
    {
      type: 'faq',
      id: 'faq-6',
      title: lang === 'ar' ? 'هل يقدم المكتب خدمات الاستشارات والتمثيل القضائي للشركات؟' : 'Does the firm provide corporate counsel and litigation representation?',
      snippet: lang === 'ar' ? 'نعم، نقدم عقود استشارية مستمرة (Retainers) للشركات تشمل الاستشارات اليومية وصياغة المعاملات وصياغة عقود الموظفين والتمثيل أمام الجهات القضائية والتحكيمية.' : 'Yes, we provide ongoing corporate retainer contracts covering day-to-day counsel, transaction reviews, employee contracts, and representation in arbitration and litigation.',
      link: '/faq',
      categoryName: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'
    }
  ];

  const searchItems = [...services, ...team, ...faqs];

  // Match items based on query and tab filter
  const filteredItems = searchItems.filter(item => {
    const queryClean = query.trim().toLowerCase();
    
    // Check type matching
    if (activeTab !== 'all' && item.type !== activeTab) {
      return false;
    }

    if (!queryClean) {
      // If query is empty, show everything that matches the activeTab filter
      return true;
    }

    // Match in title or snippet content
    return (
      item.title.toLowerCase().includes(queryClean) ||
      item.snippet.toLowerCase().includes(queryClean)
    );
  });

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

  const handleResultClick = (link) => {
    navigate(link);
    onClose();
  };

  return (
    <div 
      className="search-modal-overlay open"
      onClick={onClose}
    >
      <div 
        className="search-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Area */}
        <div className="search-modal-header">
          <div className="search-modal-input-wrapper">
            <svg 
              className="search-modal-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="search-modal-input"
              placeholder={t('searchPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <span className="search-shortcut-prompt">ESC</span>
          
          <button 
            type="button" 
            className="search-modal-close" 
            onClick={onClose}
            aria-label="Close search"
          >
            &times;
          </button>
        </div>

        {/* Tab filters inside modal */}
        <div className="search-modal-tabs">
          <button 
            type="button" 
            className={`search-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            {t('searchTabAll')}
          </button>
          <button 
            type="button" 
            className={`search-tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            {t('searchTabServices')}
          </button>
          <button 
            type="button" 
            className={`search-tab-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            {t('searchTabTeam')}
          </button>
          <button 
            type="button" 
            className={`search-tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            {t('searchTabFaq')}
          </button>
        </div>

        {/* Results List */}
        <div className="search-modal-results">
          {query.trim() && (
            <div className="search-results-count">
              {filteredItems.length} {t('searchResultCount')}
            </div>
          )}

          {filteredItems.length === 0 ? (
            <div className="search-no-results">
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
              <div className="search-no-results-title">
                {t('searchNoResults')} "{query}"
              </div>
            </div>
          ) : (
            filteredItems.map(item => (
              <div 
                key={item.id} 
                className="search-result-link" 
                onClick={() => handleResultClick(item.link)}
              >
                <div className="search-result-card">
                  <div className="search-result-meta">
                    <span className="search-result-category">
                      {item.categoryName}
                    </span>
                  </div>
                  <h4 className="search-result-title">
                    {highlightText(item.title, query)}
                  </h4>
                  <p className="search-result-snippet">
                    {highlightText(item.snippet, query)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
