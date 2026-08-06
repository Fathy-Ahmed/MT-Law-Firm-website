import React from 'react';

export const servicesData = {
  "contract-drafting": {
    id: "1",
    path: "contract-drafting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    ar: {
      title: "صياغة ومراجعة العقود (عربي - إنجليزي)",
      excerpt: "إعداد وصياغة الاتفاقيات التجارية والمدنية وصيغ الحصانة وسرية البيانات باللغتين العربية والإنجليزية لضمان حقوقكم وتجنب أي ثغرات مكلفة.",
      desc: `
        <h4>نطاق الخدمة صياغة العقود والاتفاقيات:</h4>
        <p>تعتبر العقود الركيزة الأساسية لأي علاقة تجارية أو مدنية. نحن نحرص على حماية مصالحك من خلال صياغة احترافية تمنع أي ثغرات قد تؤدي لنزاعات مستقبلية.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>إعداد وصياغة كافة العقود التجارية والمدنية باللغتين العربية والإنجليزية.</li>
          <li>مراجعة وتدقيق العقود الجاهزة وإبداء الرأي القانوني وإعداد ملخصات الثغرات والمخاطر.</li>
          <li>صياغة اتفاقيات تأسيس الشركات وعقود المساهمين (Shareholder Agreements).</li>
          <li>إعداد عقود العمل والتوظيف الخاصة بالوظائف القيادية والحساسة لحفظ سرية البيانات.</li>
          <li>صياغة اتفاقيات عدم الإفصاح وحماية السرية (NDA) وعقود التوزيع والفرنشايز.</li>
        </ul>
      `
    },
    en: {
      title: "Contract Drafting & Review (AR/EN)",
      excerpt: "Drafting, reviewing, and structured refinement of commercial, employment, and civil contracts in Arabic & English to prevent loopholes and secure operations.",
      desc: `
        <h4>Contractual Framework Services:</h4>
        <p>Contracts are the foundation of any commercial or civil relationship. We safeguard your business interests through professional drafting designed to eliminate future disputes.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Preparation and drafting of all business and civil agreements in Arabic and English.</li>
          <li>Audit and review of pre-drafted contracts, issuing risk assessment and liability reports.</li>
          <li>Drafting shareholder agreements (SHA) and corporate charters.</li>
          <li>Drafting executive employment contracts with robust non-disclosure (NDA) and non-compete clauses.</li>
          <li>Drafting franchise, distribution, and commercial agency agreements.</li>
        </ul>
      `
    }
  },
  "legal-translation": {
    id: "2",
    path: "legal-translation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/>
      </svg>
    ),
    ar: {
      title: "الترجمة القانونية المعتمدة",
      excerpt: "ترجمة رسمية وتطابق تام لكافة المستندات وعقود التأسيس والأحكام القضائية، معتمدة لدى المحاكم والجهات والوزارات المعنية.",
      desc: `
        <h4>خدمات الترجمة القانونية المعتمدة:</h4>
        <p>تتطلب الترجمة القانونية فهماً دقيقاً للمصطلحات القانونية في كلا النظامين القانونيين للغتين المصدر والهدف. نوفر لك ترجمة معتمدة ودقيقة ومطابقة تماماً للمستندات الرسمية.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>ترجمة العقود والاتفاقيات الدولية والمراسلات التجارية.</li>
          <li>ترجمة الأحكام القضائية ومذكرات الدفاع وتقارير الخبراء.</li>
          <li>ترجمة مستندات الشركات وعقود التأسيس والوكالات الرسمية.</li>
          <li>ترجمة المستندات الشخصية (الشهادات، عقود الزواج، الهويات الرسمية) للتقديم للجهات الحكومية والسفارات.</li>
          <li>اعتماد الترجمة لدى وزارة العدل والمحاكم والجهات الرسمية داخل الدولة وخارجها.</li>
        </ul>
      `
    },
    en: {
      title: "Certified Legal Translation",
      excerpt: "Certified translations of corporate documents, charters, agreements, and court rulings recognized by judicial bodies, ministries, and embassies.",
      desc: `
        <h4>Accredited Legal Translation Services:</h4>
        <p>Legal translation requires deep knowledge of terminology in both source and target jurisdictions. We deliver certified, precise translations matching official documents.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Translating contracts, international treaties, and commercial correspondence.</li>
          <li>Translating judicial rulings, defense briefs, and expert accounting reports.</li>
          <li>Translating corporate documents, articles of association, and powers of attorney.</li>
          <li>Translating personal certificates (degrees, marriage, IDs) for ministries and embassies.</li>
          <li>Legal translation certification recognized by the Ministry of Justice, courts, and global authorities.</li>
        </ul>
      `
    }
  },
  "company-formation": {
    id: "3",
    path: "company-formation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    ar: {
      title: "تأسيس الشركات وخدمات رجال الأعمال",
      excerpt: "توجيه استشاري كامل لتأسيس الشركات، وهيكلة حصص الشركاء، واستخراج التراخيص الاستثمارية، والتراخيص التجارية في شتى المناطق الحرة.",
      desc: `
        <h4>تأسيس وتطوير بيئة أعمالك بأمان قانوني:</h4>
        <p>نرافقك خطوة بخطوة في رحلتك الاستثمارية لتحديد الكيان القانوني الأنسب وتأمين كافة المستندات والتراخيص لضمان انطلاقة خالية من العقبات.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>تأسيس الشركات بجميع أشكالها القانونية (ذات مسؤولية محدودة، مساهمة مقفلة/عامة، تضامن، توصية بسيطة).</li>
          <li>تأسيس الفروع للشركات الأجنبية ومكاتب التمثيل التجاري.</li>
          <li>إتمام إجراءات التأسيس في المناطق الحرة والمدن الاقتصادية المتخصصة.</li>
          <li>استخراج التراخيص التجارية، الصناعية، والمهنية من الجهات المعنية.</li>
          <li>تعديل الهيكل القانوني للشركات، زيادة أو تخفيض رأس المال، ودخول وخروج الشركاء.</li>
        </ul>
      `
    },
    en: {
      title: "Company Formation & Business Services",
      excerpt: "Boutique incorporation, equity structuring, business licensing, and corporate setup guidance in mainland and all free zones.",
      desc: `
        <h4>Corporate Incorporation & Business Setup:</h4>
        <p>We accompany you step-by-step in your investment journey, choosing the ideal legal structure and securing licenses to start your business smoothly.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Incorporating all legal entities (LLC, Joint Stock, General Partnership, Sole Proprietorship).</li>
          <li>Setting up foreign branch offices and representative commercial offices.</li>
          <li>Execution of corporate setup in all Free Zones and special economic zones.</li>
          <li>Obtaining commercial, industrial, and professional licenses from regulatory ministries.</li>
          <li>Restructuring corporate equity, capital increases/reductions, and partner share transfers.</li>
        </ul>
      `
    }
  },
  "intellectual-property": {
    id: "4",
    path: "intellectual-property",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        <polyline points="12 2 12 6"/><polyline points="12 18 12 22"/><polyline points="4.93 4.93 7.76 7.76"/><polyline points="16.24 16.24 19.07 19.07"/><polyline points="2 12 6 12"/><polyline points="18 12 22 12"/><polyline points="4.93 19.07 7.76 16.24"/><polyline points="16.24 7.76 19.07 4.93"/>
      </svg>
    ),
    ar: {
      title: "الملكية الفكرية وحماية العلامات",
      excerpt: "تسجيل العلامات التجارية وحفظ براءات الاختراع وصياغة اتفاقيات تراخيص الاستخدام وتتبع حالات التعدي ومكافحة التقليد قضائياً.",
      desc: `
        <h4>حماية أصولك اللامادية وابتكاراتك الفريدة:</h4>
        <p>العلامة التجارية والأفكار المبتكرة هي أثمن ما تملك. نحن نسجل ونحمي حقوق ملكيتك الفكرية ضد أي تعد أو استخدام غير مصرح به.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>تسجيل العلامات التجارية، الأسماء التجارية، والشعارات محلياً وعالمياً.</li>
          <li>إجراءات إيداع وتسجيل براءات الاختراع والرسوم والنماذج الصناعية.</li>
          <li>حماية حقوق المؤلف والحقوق المجاورة للمصنفات الفنية والبرمجية والأدبية.</li>
          <li>صياغة اتفاقيات الترخيص بالاستخدام (Licensing) وعقود نقل التكنولوجيا.</li>
          <li>رفع القضايا وملاحقة المعتدين ومقلدي المنتجات وسارقي الهويات التجارية قضائياً والتعويض عنها.</li>
        </ul>
      `
    },
    en: {
      title: "Intellectual Property & Trademarks",
      excerpt: "Registration of trademarks, patents, and copyright protection. Drafting utilization licenses and prosecuting brand infringement claims.",
      desc: `
        <h4>IP Asset Protection & Trademark Safeguarding:</h4>
        <p>Trademarks and innovations are valuable intangibles. We register and defend your intellectual property rights against infringement or unauthorized reproduction.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Local and global registration of trademarks, trade names, and corporate logos.</li>
          <li>Filing patents, industrial designs, and utility models.</li>
          <li>Copyright protection for software, digital platforms, artistic works, and publications.</li>
          <li>Drafting utilization licenses, franchise IP rights, and technology transfer agreements.</li>
          <li>Prosecuting counterfeiting, brand copying, and intellectual theft in courts.</li>
        </ul>
      `
    }
  },
  "real-estate-auth": {
    id: "5",
    path: "real-estate-auth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    ar: {
      title: "خدمات الشهر العقاري والتوثيق",
      excerpt: "توثيق الوكالات والتنازلات والإقرارات الرسمية، وتسهيل الإجراءات العقارية وتسجيل الملكيات وحفظ الأصول وضمان سلامتها القانونية.",
      desc: `
        <h4>تأمين وتوثيق المعاملات القانونية رسمياً:</h4>
        <p>نعمل كقنوات معتمدة لتسهيل معاملات التوثيق والشهر العقاري، مما يمنح مستنداتك وعقودك القوة التنفيذية القانونية المطلقة.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>توثيق عقود البيع، الشراء، والتنازلات عن الأصول العقارية والمنقولة.</li>
          <li>التصديق على التوقيعات وإقرار صحة ونفاذ العقود والاتفاقيات التجارية.</li>
          <li>إعداد وتوثيق الوكالات القانونية الرسمية (العامة والخاصة) بكافة بنود الصلاحيات.</li>
          <li>تسجيل الرهون العقارية وفك الرهن ومتابعة إجراءات الإرث ونقل الملكيات التوريثية.</li>
          <li>الحصول على الصيغ التنفيذية للأوراق الرسمية لمباشرة إجراءات التنفيذ الجبري.</li>
        </ul>
      `
    },
    en: {
      title: "Real Estate Registration & Authentication",
      excerpt: "Notarization of powers of attorney, official declarations, deeds, property transfers, and safeguarding asset acquisitions.",
      desc: `
        <h4>Notarization, Deeds & Real Estate Authentication:</h4>
        <p>We act as accredited channels to streamline notarization and real estate registries, providing your contracts with absolute enforceability.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Authentication of sales, purchases, and assignments of real estate properties.</li>
          <li>Notarization of signatures and ratification of corporate contracts.</li>
          <li>Drafting and notarizing general or specific Powers of Attorney (PoA) with custom scopes.</li>
          <li>Registering real estate mortgages, release of mortgages, and inheritance property transfers.</li>
          <li>Obtaining executive court stamps for direct contract enforcement.</li>
        </ul>
      `
    }
  },
  "corporate-retainers": {
    id: "6",
    path: "corporate-retainers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    ar: {
      title: "العقود والاستشارات المستمرة للشركات",
      excerpt: "باقات اشتراك سنوية متكاملة توفر مستشاراً مخصصاً للمؤسسة، لإجراء الفحص والتدقيق القانوني وتفادي الغرامات بأسعار مرنة.",
      desc: `
        <h4>الحماية القانونية الدورية والمستدامة لعملك:</h4>
        <p>الوقاية القانونية خير من العلاج القضائي. تضمن باقاتنا الدورية بقاء شركتك متوافقة مع القوانين والأنظمة وتجنبها المخالفات والغرامات الإدارية المكلِفة.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>توفير مستشار قانوني دائم ومخصص لشركتك للرد المباشر والسريع على الاستفسارات اليومية.</li>
          <li>مراجعة وتدقيق العقود والاتفاقيات الصادرة والواردة بشكل دوري.</li>
          <li>صياغة وتعديل اللوائح الداخلية للعمل وسياسات شؤون الموظفين بما يتوافق مع أنظمة العمل الحديثة.</li>
          <li>حضور اجتماعات مجلس الإدارة وتقديم التوجيه القانوني السليم للقرارات المصيرية.</li>
          <li>تمثيل الشركة وتوجيهها في المفاوضات والتسويات الودية قبل اللجوء للمحاكم.</li>
        </ul>
      `
    },
    en: {
      title: "Retainer Corporate Legal Services",
      excerpt: "Bespoke annual retainer packages acting as your external legal department, providing ongoing corporate audits and instant counsel.",
      desc: `
        <h4>Ongoing Corporate Retainers & Legal Shield:</h4>
        <p>Prevention is superior to litigation. Our retainer packages ensure your company complies with regulatory updates, avoiding administrative penalties and risk.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Dedicated corporate counsel assigned to handle your daily operations and inquiries.</li>
          <li>Ongoing monthly review and audit of inbound and outbound commercial agreements.</li>
          <li>Drafting internal employee handbooks and compliance policies under updated labor laws.</li>
          <li>Attending board meetings as legal secretary to guide major resolutions.</li>
          <li>Managing out-of-court settlements, mediation, and dispute negotiations.</li>
        </ul>
      `
    }
  },
  "criminal-defense": {
    id: "7",
    path: "criminal-defense",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    ar: {
      title: "الاستشارات والقضايا الجنائية",
      excerpt: "دعم دفاعي صارم في القضايا الجزائية والأموال وتأمين الحماية والمثول أمام جهات التحقيق والنيابة العامة بكل مراحل التقاضي.",
      desc: `
        <h4>دفاع قانوني صارم ورعاية كاملة لحريتك وحقوقك:</h4>
        <p>القضايا الجنائية تتطلب خبرة وسرعة استجابة عالية. نوفر لك تمثيلاً قانونياً متكاملاً ودراسة علمية دقيقة للأدلة الجنائية والظروف المحيطة بالدعوى.</p>
        
        <h4>التفاصيل والخدمات الفرعية المشمولة:</h4>
        <ul>
          <li>التمثيل والدفاع في قضايا الأموال العامة والخاصة (الاختلاس، الرشوة، خيانة الأمانة، التزوير).</li>
          <li>الدفاع في جرائم تقنية المعلومات وقضايا التعدي الإلكتروني والابتزاز ونشر الأخبار الكاذبة.</li>
          <li>مرافقة وحضور التحقيقات مع الموكل أمام مراكز الشرطة والنيابة العامة.</li>
          <li>كتابة مذكرات الدفاع وتقديم الدفوع القانونية والمرافعة الشفهية أمام المحاكم الجنائية والجزائية بمختلف درجاتها.</li>
          <li>تقديم طلبات الكفالة وإجراءات استئناف الأحكام والطعن عليها بالنقض والتمييز.</li>
        </ul>
      `
    },
    en: {
      title: "Criminal Defense & Legal Consultations",
      excerpt: "Robust representation and counseling in financial crimes, corporate white-collar claims, cybercrimes, and representation at prosecution.",
      desc: `
        <h4>Rigorous Criminal Defense & Representation:</h4>
        <p>Criminal matters demand speed and strategic foresight. We deliver comprehensive defense representation, performing critical forensic audits of case parameters.</p>
        
        <h4>Sub-services & Details Included:</h4>
        <ul>
          <li>Representation in white-collar financial crimes (embezzlement, bribery, breach of trust, fraud).</li>
          <li>Defense in cybercrimes, online defamation, digital extortion, and database breaches.</li>
          <li>Escorting and representing clients at police headquarters and prosecution investigations.</li>
          <li>Drafting defense briefs and presenting oral defense arguments before penal courts.</li>
          <li>Filing bail applications, lodging appeals, and petitioning Supreme Courts.</li>
        </ul>
      `
    }
  }
};
