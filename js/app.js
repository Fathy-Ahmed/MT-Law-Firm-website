/* ==========================================================================
   APPLICATION JAVASCRIPT - MT LAW FIRM (BILINGUAL COFFEE THEME)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // 1. DATA: BILINGUAL PRACTICE AREAS DETAILS
    // ----------------------------------------------------
    const servicesData = {
        "1": {
            ar: {
                title: "صياغة ومراجعة العقود (عربي - إنجليزي)",
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
        "2": {
            ar: {
                title: "الترجمة القانونية المعتمدة",
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
        "3": {
            ar: {
                title: "تأسيس الشركات وخدمات رجال الأعمال",
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
        "4": {
            ar: {
                title: "الملكية الفكرية وتراخيص العلامات",
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
        "5": {
            ar: {
                title: "خدمات الشهر العقاري والتوثيق",
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
        "6": {
            ar: {
                title: "الاستشارات والاشتراكات الدورية للشركات",
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
        "7": {
            ar: {
                title: "الاستشارات والقضايا الجنائية",
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

    // ----------------------------------------------------
    // 2. STICKY NAVBAR & ACTIVE SCROLL LINK HIGHLIGHT
    // ----------------------------------------------------
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky class toggle
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Highlight "Practice Areas" if we are on a service detail page
        if (window.location.hash.startsWith('#/service/')) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#services') {
                    link.classList.add('active');
                }
            });
            return;
        }

        // Active link scroll detection
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160; // offset for nav + ticker height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------
    // 3. MULTILINGUAL (LANG SWITCHER)
    // ----------------------------------------------------
    const langToggleBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'ar'; // Default language 'ar'

    const updateLanguageUI = (lang) => {
        // Update document attributes
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Swap all standard translation elements
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.innerHTML = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        });

        // Swap placeholders
        document.querySelectorAll('[data-placeholder-ar]').forEach(el => {
            el.placeholder = lang === 'ar' ? el.getAttribute('data-placeholder-ar') : el.getAttribute('data-placeholder-en');
        });

        // Swap dropdown option texts
        document.querySelectorAll('option[data-ar]').forEach(el => {
            el.text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        });

        // Toggle button label (shows the next language choice)
        const btnLabel = langToggleBtn.querySelector('.lang-label-active');
        if (btnLabel) {
            btnLabel.innerText = lang === 'ar' ? 'EN' : 'عربي';
        }

        // Swap dynamic description content if present in the DOM
        const dynamicDesc = document.getElementById('serviceDetailContent');
        if (dynamicDesc) {
            const encoded = lang === 'ar' ? dynamicDesc.getAttribute('data-ar-desc') : dynamicDesc.getAttribute('data-en-desc');
            if (encoded) {
                dynamicDesc.innerHTML = decodeURIComponent(encoded);
            }
        }

        // Change layout/font dynamic adjustments if any (handled via CSS :lang bindings)
    };

    // Initialize Language
    updateLanguageUI(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', currentLang);
            updateLanguageUI(currentLang);
        });
    }

    // ----------------------------------------------------
    // 4. MOBILE MENU (DRAWER CONTROLS)
    // ----------------------------------------------------
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const openDrawer = () => {
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
            drawerLinks.forEach(dl => dl.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ----------------------------------------------------
    // 5. STATS COUNTER ANIMATION (ON INTERSECT)
    // ----------------------------------------------------
    const statsContainer = document.querySelector('.stats-container');
    const statsCount = document.querySelectorAll('.stat-count');
    let counted = false;

    const countUp = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const speed = 100;
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                el.innerText = Math.ceil(count);
                setTimeout(updateCount, 15);
            } else {
                el.innerText = target;
            }
        };
        updateCount();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                statsCount.forEach(count => countUp(count));
                counted = true;
            }
        });
    }, { threshold: 0.3 });

    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    // ----------------------------------------------------
    // 6. PRACTICE AREAS: MODALS LOGIC (BILINGUAL)
    // ----------------------------------------------------
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModal = document.getElementById('serviceModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalCtaBtn = document.getElementById('modalCtaBtn');

    const openServiceModal = (serviceId) => {
        const activeLang = document.documentElement.getAttribute('lang') || 'ar';
        const data = servicesData[serviceId];
        if (!data || !data[activeLang]) return;

        const localization = data[activeLang];
        const baseData = servicesData[serviceId]['ar']; // fallback to fetch icon from ar block

        // Populate modal data
        modalIcon.innerHTML = servicesData[serviceId]['ar'].icon || servicesData[serviceId]['en'].icon || '';
        modalTitle.innerText = localization.title;
        modalDesc.innerHTML = localization.desc;

        // Auto select dropdown service type if CTA in modal clicked
        const modalCtaHandler = () => {
            const dropdown = document.getElementById('serviceType');
            if (dropdown) {
                dropdown.value = serviceId;
            }
            closeServiceModal();
        };

        modalCtaBtn.onclick = modalCtaHandler;

        // Open modal
        serviceModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeServiceModal = () => {
        serviceModal.classList.remove('open');
        document.body.style.overflow = '';
    };

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service');
            window.location.hash = `#/service/${serviceId}`;
        });
    });

    modalCloseBtn.addEventListener('click', closeServiceModal);
    
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });

    // Populate missing fallback SVGs in servicesData for helper
    serviceCards.forEach(card => {
        const serviceId = card.getAttribute('data-service');
        const iconSvg = card.querySelector('.service-icon').innerHTML;
        if (servicesData[serviceId]) {
            servicesData[serviceId]['ar'].icon = iconSvg;
            servicesData[serviceId]['en'].icon = iconSvg;
        }
    });

    // ----------------------------------------------------
    // 7. CONTACT FORM: FILE UPLOAD FEEDBACK & VALIDATION
    // ----------------------------------------------------
    const caseFileInput = document.getElementById('caseFile');
    const fileUploadText = document.getElementById('fileUploadText');

    if (caseFileInput) {
        caseFileInput.addEventListener('change', (e) => {
            const activeLang = document.documentElement.getAttribute('lang') || 'ar';
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const fileName = file.name;
                const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                
                fileUploadText.innerText = `${fileName} (${fileSizeMB} MB)`;
                fileUploadText.style.color = '#C8A97E'; // Latte gold color
            } else {
                fileUploadText.innerText = activeLang === 'ar' ? "اسحب ملفاتك هنا أو انقر للتصفح" : "Drag & drop your files here or browse";
                fileUploadText.style.color = '';
            }
        });
    }

    // Form inputs and errors
    const form = document.getElementById('consultationForm');
    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');
    const serviceSelect = document.getElementById('serviceType');
    const descTextarea = document.getElementById('caseDesc');

    const nameError = document.getElementById('clientNameError');
    const phoneError = document.getElementById('clientPhoneError');
    const serviceError = document.getElementById('serviceTypeError');
    const descError = document.getElementById('caseDescError');

    const validateForm = () => {
        let isValid = true;

        // Name Validation
        if (nameInput.value.trim().length < 3) {
            nameInput.classList.add('invalid');
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameInput.classList.remove('invalid');
            nameError.style.display = 'none';
        }

        // Phone Validation
        const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.classList.add('invalid');
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneInput.classList.remove('invalid');
            phoneError.style.display = 'none';
        }

        // Service Selection Validation
        if (serviceSelect.value === "") {
            serviceSelect.classList.add('invalid');
            serviceError.style.display = 'block';
            isValid = false;
        } else {
            serviceSelect.classList.remove('invalid');
            serviceError.style.display = 'none';
        }

        // Description Validation
        if (descTextarea.value.trim().length < 15) {
            descTextarea.classList.add('invalid');
            descError.style.display = 'block';
            isValid = false;
        } else {
            descTextarea.classList.remove('invalid');
            descError.style.display = 'none';
        }

        return isValid;
    };

    // Submission Handler (Bilingual Feedback)
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateForm()) {
                const firstInvalid = form.querySelector('.invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const submitBtn = form.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('span');
            const spinner = submitBtn.querySelector('.submit-spinner');

            submitBtn.disabled = true;
            btnText.style.opacity = '0.5';
            spinner.style.display = 'inline-block';

            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.style.opacity = '1';
                spinner.style.display = 'none';

                // Generate random tracking ID
                const randomId = Math.floor(1000 + Math.random() * 9000);
                document.getElementById('ticketNumber').innerText = `#MT-${randomId}`;

                // Open success overlay modal
                const successModal = document.getElementById('successModal');
                successModal.classList.add('open');
                document.body.style.overflow = 'hidden';

                // Reset form
                form.reset();
                if (fileUploadText) {
                    const activeLang = document.documentElement.getAttribute('lang') || 'ar';
                    fileUploadText.innerText = activeLang === 'ar' ? "اسحب ملفاتك هنا أو انقر للتصفح" : "Drag & drop your files here or browse";
                    fileUploadText.style.color = '';
                }
            }, 1500);
        });
    }

    // Success Modal Close
    const successCloseBtn = document.getElementById('successCloseBtn');
    const successModal = document.getElementById('successModal');

    if (successCloseBtn && successModal) {
        const closeSuccess = () => {
            successModal.classList.remove('open');
            document.body.style.overflow = '';
        };

        successCloseBtn.addEventListener('click', closeSuccess);
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeSuccess();
            }
        });
    }

    // Real-time error removals
    if (nameInput) nameInput.addEventListener('input', () => { if (nameInput.value.trim().length >= 3) { nameInput.classList.remove('invalid'); nameError.style.display = 'none'; } });
    if (phoneInput) phoneInput.addEventListener('input', () => { const phoneRegex = /^[+]?[0-9\s-]{7,15}$/; if (phoneRegex.test(phoneInput.value.trim())) { phoneInput.classList.remove('invalid'); phoneError.style.display = 'none'; } });
    if (serviceSelect) serviceSelect.addEventListener('change', () => { if (serviceSelect.value !== "") { serviceSelect.classList.remove('invalid'); serviceError.style.display = 'none'; } });
    if (descTextarea) descTextarea.addEventListener('input', () => { if (descTextarea.value.trim().length >= 15) { descTextarea.classList.remove('invalid'); descError.style.display = 'none'; } });

    // ----------------------------------------------------
    // 8. BACK TO TOP BUTTON LOGIC
    // ----------------------------------------------------
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------
    // 9. DYNAMIC ROUTING & SUB-PAGES
    // ----------------------------------------------------
    function renderServiceDetailPage(serviceId) {
        const data = servicesData[serviceId];
        if (!data) return;

        const arData = data.ar;
        const enData = data.en;
        const iconSvg = data.ar.icon || data.en.icon || '';

        const serviceDetailView = document.getElementById('service-detail-view');
        if (!serviceDetailView) return;

        serviceDetailView.innerHTML = `
            <section class="service-detail-hero">
                <div class="container">
                    <a href="#services" class="back-link">
                        <span data-ar="&larr; عودة للمجالات" data-en="&larr; Back to Services">&larr; عودة للمجالات</span>
                    </a>
                    <div class="service-icon-large">
                        ${iconSvg}
                    </div>
                    <h1 class="service-title-large" data-ar="${arData.title.replace(/"/g, '&quot;')}" data-en="${enData.title.replace(/"/g, '&quot;')}">
                        ${currentLang === 'ar' ? arData.title : enData.title}
                    </h1>
                    <div class="breadcrumbs">
                        <a href="#home" data-ar="الرئيسية" data-en="Home">الرئيسية</a>
                        <span class="separator">/</span>
                        <a href="#services" data-ar="مجالات الاختصاص" data-en="Practice Areas">مجالات الاختصاص</a>
                        <span class="separator">/</span>
                        <span class="current" data-ar="${arData.title.replace(/"/g, '&quot;')}" data-en="${enData.title.replace(/"/g, '&quot;')}">
                            ${currentLang === 'ar' ? arData.title : enData.title}
                        </span>
                    </div>
                </div>
            </section>

            <section class="service-detail-body">
                <div class="container">
                    <div class="service-detail-grid">
                        <!-- Main Content -->
                        <div class="service-detail-main-content" id="serviceDetailContent"
                             data-ar-desc="${encodeURIComponent(arData.desc)}"
                             data-en-desc="${encodeURIComponent(enData.desc)}">
                            ${currentLang === 'ar' ? arData.desc : enData.desc}
                        </div>

                        <!-- Sidebar with Booking Form -->
                        <div class="service-detail-sidebar">
                            <div class="sidebar-sticky-wrapper">
                                <div class="sidebar-booking-card">
                                    <h3 class="card-title" data-ar="طلب هذه الخدمة" data-en="Order This Service">طلب هذه الخدمة</h3>
                                    <p class="card-subtitle" 
                                       data-ar="سجل بياناتك وسيتم توجيه ملفك لأحد مستشارينا المختصين فوراً." 
                                       data-en="Submit details to connect with a specialized attorney immediately.">
                                        سجل بياناتك وسيتم توجيه ملفك لأحد مستشارينا المختصين فوراً.
                                    </p>
                                    
                                    <form class="sidebar-booking-form" id="serviceBookingForm">
                                        <input type="hidden" id="bookingServiceId" value="${serviceId}">
                                        
                                        <div class="form-group">
                                            <label for="bookingName" data-ar="الاسم الكامل" data-en="Full Name">الاسم الكامل</label>
                                            <input type="text" id="bookingName" required data-placeholder-ar="مثال: محمد أحمد" data-placeholder-en="e.g. John Doe" placeholder="${currentLang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="bookingPhone" data-ar="رقم الجوال" data-en="Mobile Number">رقم الجوال</label>
                                            <input type="tel" id="bookingPhone" required data-placeholder-ar="+971 50 123 4567" data-placeholder-en="+971 50 123 4567" placeholder="+971 50 123 4567">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="bookingDesc" data-ar="شرح موجز لطلبك" data-en="Briefly describe your request">شرح موجز لطلبك</label>
                                            <textarea id="bookingDesc" rows="4" required data-placeholder-ar="يرجى كتابة التفاصيل هنا..." data-placeholder-en="Write details here..." placeholder="${currentLang === 'ar' ? 'يرجى كتابة التفاصيل هنا...' : 'Write details here...'}"></textarea>
                                        </div>
                                        
                                        <button type="submit" class="btn btn-gold w-100">
                                            <span data-ar="إرسال الطلب" data-en="Send Request">إرسال الطلب</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-detail-footer">
                        <a href="#services" class="btn-back">
                            <span data-ar="&rarr; العودة لكافة الخدمات" data-en="&rarr; Back to all services">&rarr; Back to all services</span>
                        </a>
                    </div>
                </div>
            </section>
        `;
        
        // Attach form submit listener for the sidebar form
        const bookingForm = document.getElementById('serviceBookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitBtn = bookingForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.5';
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    
                    // Show success modal
                    const randomId = Math.floor(1000 + Math.random() * 9000);
                    document.getElementById('ticketNumber').innerText = `#MT-${randomId}`;
                    
                    const successModal = document.getElementById('successModal');
                    successModal.classList.add('open');
                    document.body.style.overflow = 'hidden';
                    
                    bookingForm.reset();
                }, 1200);
            });
        }
    }

    function handleRouting() {
        const hash = window.location.hash;
        const homeView = document.getElementById('home-view');
        const serviceDetailView = document.getElementById('service-detail-view');
        
        // Match path hash: #/service/:id
        const serviceMatch = hash.match(/^#\/service\/([1-7])$/);
        
        if (serviceMatch) {
            const serviceId = serviceMatch[1];
            
            // Render detail view
            renderServiceDetailPage(serviceId);
            
            // Toggle view visibility
            homeView.style.display = 'none';
            serviceDetailView.style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Run translation update on the new elements
            updateLanguageUI(currentLang);
        } else {
            // Toggle view visibility back to homepage
            homeView.style.display = 'block';
            serviceDetailView.style.display = 'none';
            
            // If the hash is a home section, scroll smoothly to it
            if (hash && hash.startsWith('#')) {
                const targetId = hash.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        const offset = 120; // header height offset
                        const topPos = targetSection.offsetTop - offset;
                        window.scrollTo({
                            top: topPos,
                            behavior: 'smooth'
                        });
                    }, 50);
                }
            }
        }
    }

    // Register routing event listeners
    window.addEventListener('hashchange', handleRouting);
    
    // Run routing check on initial load
    handleRouting();

});

// ----------------------------------------------------
// 9. PRELOADER FADE-OUT WITH 5S MINIMUM DURATION
// ----------------------------------------------------
let resourcesLoaded = false;
let minimumTimeElapsed = false;

function attemptRemovePreloader() {
    if (resourcesLoaded && minimumTimeElapsed) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            document.body.classList.remove('preloader-active');
            
            // Remove preloader from DOM after transition finishes (600ms)
            setTimeout(() => {
                preloader.remove();
            }, 600);
        }
    }
}

// Force a minimum display time of 5 seconds (5000ms)
setTimeout(() => {
    minimumTimeElapsed = true;
    attemptRemovePreloader();
}, 5000);

// Wait for window load event (DOM and all assets ready)
window.addEventListener('load', () => {
    resourcesLoaded = true;
    attemptRemovePreloader();
});
