/**
 * Minority Partners — main.js
 * Minimal, dependency-free. No external libraries.
 */

(function () {
  'use strict';

  /* ── Scroll-reveal ────────────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ── Nav scroll-state ────────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Smooth scroll for anchor links (Safari fallback) ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── Keyboard: close mobile nav hint ────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const focused = document.activeElement;
      if (nav && nav.contains(focused)) {
        const wordmark = nav.querySelector('.wordmark');
        if (wordmark) wordmark.focus();
      }
    }
  });

  /* ── i18n ────────────────────────────────────────────────────────────── */

  const translations = {
    en: {
      'nav-wordmark':       'Minority Partners — return to top',
      'nav-brand':          'Minority Partners',
      'nav-overview':       'Overview',
      'nav-strategy':       'Strategy',
      'nav-approach':       'Approach',
      'nav-team':           'The Team',
      'nav-contact':        'Contact',

      'hero-line1':         'Strategic Capital.',
      'hero-line2':         'Enduring <span class="blue">Impact</span>.',
      'hero-aside':         'Mission statement',
      'hero-statement':     'We partner selectively.<br>We build patiently.<br>We create <em>enduring value</em>.',
      'hero-cta':           'Explore our vision — scroll to Overview section',
      'hero-cta-text':      'Explore our vision',

      'overview-label':     'Overview',
      'overview-eyebrow':   'A strategic investment &amp; partnerships platform',
      'overview-h2':        'Long-term value, built through <em>selective partnership</em>.',
      'overview-p1':        'Minority Partners is a strategic investment and partnerships platform focused on long-term value creation — through minority investments, infrastructure partnerships, and cross-market connectivity.',
      'overview-p2':        'We operate across <em class="cobalt-italic">private capital</em>, public transformation, and emerging markets — deploying capital where strategic alignment, governance, and patient conviction compound into enduring outcomes.',
      'overview-dt1':       'Mandate',
      'overview-dd1':       'Minority investments &amp; partnerships',
      'overview-dt2':       'Horizon',
      'overview-dd2':       'Generational — 10 to 25 years',
      'overview-dt3':       'Geography',
      'overview-dd3':       'Global, with emerging-market focus',

      'strategy-label':     'Strategy',
      'strategy-eyebrow':   'Three disciplines · one conviction',
      'p1-num':             'I · Value Creation',
      'p1-tag':             'Ecosystem',
      'p1-h3':              'Value Creation <em>Investments</em>',
      'p1-p':               'Strategic minority investments across aligned value chains — where our capital, network, and operating insight can create lasting value.',
      'p1-foot-label':      'Discipline',
      'p1-foot-val':        'Minority equity',
      'p2-num':             'II · Urban &amp; Infrastructure',
      'p2-tag':             'Public · Private',
      'p2-h3':              'Urban &amp; <em>Infrastructure</em>',
      'p2-p':               'Public–private partnerships and infrastructure transformation initiatives that underwrite the long arc of urban development, mobility, and economic capacity.',
      'p2-foot-label':      'Discipline',
      'p2-foot-val':        'PPP · Greenfield',
      'p3-num':             'III · Bridge',
      'p3-tag':             'Cross-Market',
      'p3-h3':              'Bridge <em>Investments</em>',
      'p3-p':               'Cross-market investments that connect capital, opportunity, and emerging economies — a deliberate flow of conviction between mature and frontier markets.',
      'p3-foot-label':      'Discipline',
      'p3-foot-val':        'Cross-border',

      'approach-label':     'Approach',
      'approach-sublabel':  'A creed, in three movements',
      'approach-creed-aria':'Long-term thinking. Strategic execution. Enduring impact.',
      'approach-l1':        'Long-term thinking<span class="period">.</span>',
      'approach-l2':        'Strategic execution<span class="period">.</span>',
      'approach-l3':        'Enduring impact<span class="period">.</span>',
      'approach-body':      'We move at the pace of conviction — not of cycles. Our work is judged across decades, not quarters; measured by the institutions, infrastructure, and partnerships that remain when capital has long since been deployed.',
      'approach-stamp':     'MP · Office of the Partners<br>Filed under Investment Philosophy<br>Vol. I  ·  § II',

      'team-label':         'The Team',
      'team-eyebrow':       'Partners &amp; professionals',
      'team-statement':     'Built on <em>complementary</em> expertise and shared conviction.',
      'team-count-label':   'Partners &amp; Professionals',
      't1-name':            'Abdulmajeed AlTurki',
      't1-title':           'Managing Partner',
      't1-bio':             'Operations, execution &amp; business development',
      't1-li':              'Abdulmajeed AlTurki on LinkedIn',
      't2-name':            'Abdullah AlHawsawi',
      't2-title':           'Partner &amp; Strategy',
      't2-bio':             'Strategic advisory, deal structuring &amp; partnership design',
      't2-li':              'Abdullah AlHawsawi on LinkedIn',
      't3-name':            'Shouq AlSaedi, CFA',
      't3-title':           'Partner &amp; Investment',
      't3-bio':             'Investment structuring, valuation &amp; financial modeling',
      't3-li':              'Shouq AlSaedi on LinkedIn',
      't4-name':            'Majed bin Tunbak',
      't4-title':           'Partner &amp; Development',
      't4-bio':             'Engineering support, institutional network &amp; project delivery',
      't4-li':              'Majed bin Tunbak on LinkedIn',
      't5-name':            'Jana AlHazmi',
      't5-title':           'Executive Assistant',
      't5-bio':             'Coordination &amp; administrative operations',

      'contact-label':      'Contact',
      'contact-eyebrow':    'Selective by design',
      'contact-h2':         'We invest where strategic alignment, long-term potential, and <em>enduring impact</em> intersect.',
      'contact-cell1-label':'Contact',
      'contact-cell2-label':'LinkedIn',
      'contact-cell3-label':'Offices',
      'office1-city':       'Madinah',
      'office2-city':       'Abu Dhabi',
      'office3-city':       'Horn of Africa',

      'footer-brand':       'Minority Partners',
      'footer-copy':        '© 2026 — All rights reserved  ·  <a href="/privacy.html">Privacy Policy</a>',
      'footer-tagline':     'Strategic Capital. Enduring Impact.',
    },

    ar: {
      'nav-wordmark':       'ماينورِتي بارتنرز',
      'nav-brand':          'ماينورِتي بارتنرز',
      'nav-overview':       'نظرة عامة',
      'nav-strategy':       'الاستراتيجية',
      'nav-approach':       'منهجنا',
      'nav-team':           'الفريق',
      'nav-contact':        'تواصل',

      'hero-line1':         'رأس مال استراتيجي.',
      'hero-line2':         'أثرٌ <span class="blue">يبقى</span>.',
      'hero-aside':         'رسالتنا',
      'hero-statement':     'ننتقي شراكاتنا بعناية.<br>نبني على مهل.<br>ونصنع <em>قيمةً تمتد</em>.',
      'hero-cta':           'استكشف رؤيتنا',
      'hero-cta-text':      'استكشف رؤيتنا',

      'overview-label':     'نظرة عامة',
      'overview-eyebrow':   'منصة استثمار وشراكات استراتيجية',
      'overview-h2':        'قيمة طويلة الأمد، تُبنى عبر <em>شراكات منتقاة</em>.',
      'overview-p1':        'ماينورِتي بارتنرز منصة استثمار وشراكات استراتيجية، تعمل على بناء قيمة مستدامة من خلال الاستثمارات الأقلية، وشراكات البنية التحتية، وربط الفرص بين الأسواق.',
      'overview-p2':        'نستثمر عند تقاطع <em class="cobalt-italic">رأس المال الخاص</em>، والتحول المؤسسي، والأسواق الناشئة؛ حيث نوجّه رأس المال نحو الفرص التي يجتمع فيها وضوح التوافق الاستراتيجي، والانضباط في الحوكمة، والقناعة طويلة الأمد، لتتحول إلى نتائج راسخة وأثر مستمر.',
      'overview-dt1':       'نطاق العمل',
      'overview-dd1':       'استثمارات وشراكات أقلية',
      'overview-dt2':       'الأفق',
      'overview-dd2':       'طويل الأمد — من 10 إلى 25 سنة',
      'overview-dt3':       'النطاق الجغرافي',
      'overview-dd3':       'عالمي، مع تركيز على الأسواق الناشئة',

      'strategy-label':     'الاستراتيجية',
      'strategy-eyebrow':   'ثلاثة مسارات… وقناعة واحدة',
      'p1-num':             'I · منظومة خلق القيمة',
      'p1-tag':             'منظومة',
      'p1-h3':              'استثمارات <em>خلق القيمة</em>',
      'p1-p':               'استثمارات أقلية استراتيجية في سلاسل قيمة متكاملة، حيث يلتقي رأس مالنا مع شبكتنا وخبرتنا التشغيلية لصناعة قيمة قابلة للنمو والاستمرار.',
      'p1-foot-label':      'المجال',
      'p1-foot-val':        'ملكية أقلية',
      'p2-num':             'II · التطوير الحضري والبنية التحتية',
      'p2-tag':             'عام · خاص',
      'p2-h3':              'التطوير الحضري <em>والبنية التحتية</em>',
      'p2-p':               'شراكات ومبادرات تحول في البنية التحتية، تجمع بين القطاعين العام والخاص، وتدعم المسار الطويل للتنمية الحضرية، والتنقل، وتعزيز القدرة الاقتصادية للمدن والأسواق.',
      'p2-foot-label':      'المجال',
      'p2-foot-val':        'شراكات عامة وخاصة · مشاريع تأسيسية',
      'p3-num':             'III · الربط بين الأسواق',
      'p3-tag':             'عابر للأسواق',
      'p3-h3':              'استثمارات دولية <em>عابرة للأسواق</em>',
      'p3-p':               'استثمارات تربط رأس المال بالفرص، وتفتح مسارات بين الأسواق الناضجة والاقتصادات الناشئة، وفق قناعة مدروسة وتوجه طويل الأمد.',
      'p3-foot-label':      'المجال',
      'p3-foot-val':        'استثمارات عابرة للحدود',

      'approach-label':     'منهجنا',
      'approach-sublabel':  'فلسفة تقوم على ثلاث ركائز',
      'approach-creed-aria':'أفق طويل. تنفيذ منضبط. أثر مستدام.',
      'approach-l1':        'أفق طويل<span class="period">.</span>',
      'approach-l2':        'تنفيذ منضبط<span class="period">.</span>',
      'approach-l3':        'أثر مستدام<span class="period">.</span>',
      'approach-body':      'لا نتحرك بإيقاع السوق القصير، بل بإيقاع القناعة. نقيس عملنا بما يبقى عبر الزمن: مؤسسات أقوى، وبنية تحتية أكثر نضجاً، وشراكات قادرة على الاستمرار بعد أن يكون رأس المال قد أتم دوره.',
      'approach-stamp':     'MP · مكتب الشركاء<br>فلسفة الاستثمار<br>المجلد الأول  ·  القسم الثاني',

      'team-label':         'الفريق',
      'team-eyebrow':       'شركاء محترفون',
      'team-statement':     'خبرات <em>متكاملة</em>، وقناعة مشتركة.',
      'team-count-label':   'شركاء محترفون',
      't1-name':            'عبدالمجيد التركي',
      't1-title':           'شريك إداري',
      't1-bio':             'العمليات، التنفيذ، وتطوير الأعمال',
      't1-li':              'عبدالمجيد التركي على لينكدإن',
      't2-name':            'عبدالله الهوساوي',
      't2-title':           'شريك الاستراتيجية',
      't2-bio':             'الاستشارات الاستراتيجية، هيكلة الصفقات، وتصميم الشراكات',
      't2-li':              'عبدالله الهوساوي على لينكدإن',
      't3-name':            'شوق الصاعدي',
      't3-title':           'شريك الاستثمار',
      't3-bio':             'هيكلة الاستثمارات، التقييم، والنمذجة المالية',
      't3-li':              'شوق الصاعدي على لينكدإن',
      't4-name':            'ماجد بن تنباك',
      't4-title':           'شريك التطوير',
      't4-bio':             'الدعم الهندسي، العلاقات المؤسسية، وتنفيذ المشاريع',
      't4-li':              'ماجد بن تنباك على لينكدإن',
      't5-name':            'جنى الحازمي',
      't5-title':           'مساعدة تنفيذية',
      't5-bio':             'التنسيق والعمليات الإدارية',

      'contact-label':      'تواصل',
      'contact-eyebrow':    'انتقائيون بطبيعتنا',
      'contact-h2':         'نستثمر حيث يلتقي التوافق الاستراتيجي، والإمكان طويل الأمد، و<em>الأثر المستدام</em>.',
      'contact-cell1-label':'البريد الإلكتروني',
      'contact-cell2-label':'لينكدإن',
      'contact-cell3-label':'المكاتب',
      'office1-city':       'المدينة المنورة',
      'office2-city':       'أبوظبي',
      'office3-city':       'القرن الأفريقي',

      'footer-brand':       'ماينورِتي بارتنرز',
      'footer-copy':        '© 2026 — جميع الحقوق محفوظة  ·  <a href="/privacy.html">سياسة الخصوصية</a>',
      'footer-tagline':     'رأس مال استراتيجي. أثرٌ يبقى.',
    }
  };

  const metaSEO = {
    en: {
      title:       'Minority Partners — Strategic Capital. Enduring Impact.',
      description: 'Minority Partners deploys strategic capital through minority investments, public-private urban partnerships, and cross-market bridge investments connecting emerging markets globally.',
      ogTitle:     'Minority Partners — Strategic Capital. Enduring Impact.',
      ogDesc:      'A selective strategic investment platform focused on long-term value creation through minority investments, urban infrastructure partnerships, and cross-market bridge investments.',
      ogLocale:    'en_US',
    },
    ar: {
      title:       'ماينورِتي بارتنرز — رأس مال استراتيجي. أثرٌ يبقى.',
      description: 'ماينورِتي بارتنرز منصة استثمار وشراكات استراتيجية، تنشر رأس المال عبر الاستثمارات الأقلية، وشراكات التطوير الحضري العام والخاص، واستثمارات عابرة للأسواق تربط الاقتصادات الناشئة برأس المال المؤسسي.',
      ogTitle:     'ماينورِتي بارتنرز — رأس مال استراتيجي. أثرٌ يبقى.',
      ogDesc:      'منصة استثمار وشراكات استراتيجية انتقائية، تركّز على خلق قيمة طويلة الأمد عبر الاستثمارات الأقلية، وشراكات البنية التحتية الحضرية، والاستثمارات العابرة للأسواق.',
      ogLocale:    'ar_SA',
    },
  };

  function setMeta(name, content) {
    const el = document.querySelector(`meta[name="${name}"]`);
    if (el) el.setAttribute('content', content);
  }
  function setOgMeta(property, content) {
    const el = document.querySelector(`meta[property="${property}"]`);
    if (el) el.setAttribute('content', content);
  }

  function applyLang(lang) {
    const html = document.documentElement;
    const toggle = document.getElementById('lang-toggle');
    const isAr = lang === 'ar';

    html.setAttribute('lang', lang);
    html.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    if (toggle) {
      toggle.textContent = isAr ? 'EN' : 'AR';
      toggle.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
    }

    const t = translations[lang];
    const s = metaSEO[lang];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    /* ── Update SEO meta tags dynamically ── */
    document.title = s.title;
    setMeta('description', s.description);
    setOgMeta('og:title', s.ogTitle);
    setOgMeta('og:description', s.ogDesc);
    setOgMeta('og:locale', s.ogLocale);

    localStorage.setItem('mp-lang', lang);
  }

  function detectLang() {
    const saved = localStorage.getItem('mp-lang');
    if (saved === 'ar' || saved === 'en') return saved;
    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browser.startsWith('ar') ? 'ar' : 'en';
  }

  const initialLang = detectLang();
  applyLang(initialLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang');
      applyLang(current === 'ar' ? 'en' : 'ar');
    });
  }

})();
