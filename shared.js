/* ===== Internationalization System ===== */
const LANGS = [
  { code: 'en', native: 'English', rtl: false },
  { code: 'ar', native: 'العربية', rtl: true },
];

const T = {
  en: {
    nav_projects: "Work", nav_contact: "Contact", nav_cta: "Get in touch",
    role: "Systems Architecture & Development",
    hero_title_1: "I architect ", hero_title_span: "resilient systems", hero_title_2: " that scale with your business.",
    hero_desc: "Enterprise-grade management solutions with real-time synchronization, advanced offline capabilities, and optimized performance across all platforms.",
    hero_cta1: "View portfolio", hero_cta2: "Get in touch",
    stat1_n: "Enterprise", stat1_l: "Grade Architecture",
    stat2_n: "100%", stat2_l: "Real-time Sync",
    stat3_n: "Offline", stat3_l: "Always Available",
    card1_tag: "Profile", card1_title: "About",
    card1_bio: "Systems architect with expertise in designing and implementing scalable, real-time business solutions. Specializing in cross-platform development with offline-first capabilities and high-performance UX patterns.",
    card2_tag: "Solution 01", card2_title: "Jewelry Management System", card2_desc: "Synchronized inventory and point-of-sale operations for a gold & silver shop.",
    card3_tag: "Solution 02", card3_title: "Workforce Scheduling", card3_desc: "Centralized shift management and team coordination.",
    open_project: "View solution",
    contact_title: "Let's work together", contact_sub: "Tap any option to connect.",
    contact_phone: "Phone", contact_whatsapp: "WhatsApp", contact_email: "Email", contact_linkedin: "LinkedIn",
    projects_eyebrow: "Portfolio", projects_title: "Solutions Delivered", projects_sub: "Production systems built with enterprise standards and scalability in mind.",
    contact_eyebrow: "Get in touch", contact_cta_title: "Ready to build something great?",
    back_home: "Back to home",
    footer_rights: "All rights reserved.",
    j_tag: "Jewelry Shop Management", j_title: "Jewelry Management System",
    j_intro: "Complete management platform for a gold & silver jewelry shop, including inventory tracking, point-of-sale, vault management, and comprehensive reporting. Deployed as web application and desktop clients (Windows) with real-time data synchronization across all devices and approved accounts.",
    j_core_title: "Core Architecture",
    j_core: "Multi-user environment enabling simultaneous operations across devices. Changes propagate in real-time with automatic offline queuing and background sync upon reconnection.",
    j_features_title: "Key Capabilities",
    j_f1: "Real-time sync across all devices via Firestore infrastructure",
    j_f2: "Account authorization system with developer-controlled access management",
    j_f3: "Live analytics dashboard with sales metrics, inventory status, and activity feeds",
    j_f4: "Automated pricing formulas with flexible manual override capabilities",
    j_f5: "Multi-method payment processing including partial payments and credit operations",
    j_f6: "Complete offline functionality with automatic sync on connection restoration",
    j_f7: "Barcode scanning and label generation system",
    j_f8: "Advanced features: layaway, credit accounts, damage tracking, transaction history",
    j_f9: "Administrative controls with selective data management and access auditing",
    j_f10: "Native desktop application (EXE) with feature parity to web version",
    j_status_title: "Status", j_status_note: "Core systems deployed and operational.",
    r_tag: "Workforce Scheduling", r_title: "Workforce Management System",
    r_intro: "Centralized platform for managing employee schedules, team coordination, and shift operations. Designed to eliminate scheduling conflicts and provide visibility across all workforce activities.",
    r_features_title: "Key Capabilities",
    r_f1: "Unified shift scheduling and team management interface",
    r_f2: "Real-time visibility of staffing across operational periods",
    r_f3: "Built on same real-time sync infrastructure as enterprise systems",
    r_f4: "Extensible architecture ready for roles, permissions, and advanced reporting",
    r_status_title: "Status", r_status_note: "Core scheduling infrastructure complete with modular expansion options.",
  },
  ar: {
    nav_projects: "المحفظة", nav_contact: "تواصل", nav_cta: "تواصل معنا",
    role: "معماري أنظمة وتطوير",
    hero_title_1: "أبني ", hero_title_span: "أنظمة موثوقة", hero_title_2: " تنمو مع عملك.",
    hero_desc: "حلول إدارة احترافية بمواصفات مؤسسية مع مزامنة فورية وقدرات عمل بدون اتصال وأداء محسّن على كل الأنظمة.",
    hero_cta1: "شوف أعمالي", hero_cta2: "تواصل معايا",
    stat1_n: "مؤسسي", stat1_l: "معايير احترافية",
    stat2_n: "100%", stat2_l: "مزامنة فورية",
    stat3_n: "بدون نت", stat3_l: "متاح دائماً",
    card1_tag: "البروفايل", card1_title: "عني",
    card1_bio: "معماري أنظمة متخصص في تصميم وتنفيذ حلول أعمال قابلة للتوسع والعمل بالوقت الفعلي. خبرة في التطوير متعدد الأنظمة مع قدرات العمل بدون اتصال وأنماط واجهة مستخدم عالية الأداء.",
    card2_tag: "حل 01", card2_title: "نظام إدارة محل مجوهرات", card2_desc: "عمليات المخزون ونقاط البيع المتزامنة لمحل دهب وفضة.",
    card3_tag: "حل 02", card3_title: "نظام جدولة الموظفين", card3_desc: "إدارة مركزية للورديات والفرق.",
    open_project: "شوف الحل",
    contact_title: "لنعمل معاً", contact_sub: "دوس على أي خيار عشان تتواصل.",
    contact_phone: "التليفون", contact_whatsapp: "واتساب", contact_email: "الإيميل", contact_linkedin: "لينكدإن",
    projects_eyebrow: "المحفظة", projects_title: "الحلول المُطبّقة", projects_sub: "أنظمة إنتاجية مبنية بمعايير مؤسسية وقابلة للتوسع.",
    contact_eyebrow: "تواصل معايا", contact_cta_title: "جاهز نبني حاجة عظيمة؟",
    back_home: "رجوع للرئيسية",
    footer_rights: "كل الحقوق محفوظة.",
    j_tag: "إدارة محل مجوهرات", j_title: "نظام إدارة محل مجوهرات",
    j_intro: "منصة إدارة شاملة لمحل مجوهرات (دهب وفضة) تشمل تتبع المخزون ونقاط البيع وإدارة الخزنة والتقارير الشاملة. مطبّق كتطبيق ويب وعملاء سطح المكتب (Windows) مع مزامنة بيانات فورية عبر جميع الأجهزة والحسابات المصرح لها.",
    j_core_title: "البنية الأساسية",
    j_core: "بيئة متعددة المستخدمين تمكّن العمليات المتزامنة عبر الأجهزة. التغييرات تنتشر فوراً مع إدراج تلقائي للعمليات بدون اتصال والمزامنة الخلفية عند استعادة الاتصال.",
    j_features_title: "القدرات الرئيسية",
    j_f1: "مزامنة فورية عبر جميع الأجهزة عبر بنية Firestore",
    j_f2: "نظام تفويض الحسابات مع إدارة الوصول يتحكم فيها المطور",
    j_f3: "لوحة تحليلات حية مع مقاييس المبيعات وحالة المخزون وسجلات النشاط",
    j_f4: "معادلات تسعير تلقائية مع إمكانية التعطيل اليدوي المرن",
    j_f5: "معالجة الدفع متعددة الطرق بما فيها الدفعات الجزئية والعمليات الآجلة",
    j_f6: "وظائف كاملة بدون اتصال مع المزامنة التلقائية عند استعادة الاتصال",
    j_f7: "نظام قراءة الباركود وإنشاء الملصقات",
    j_f8: "ميزات متقدمة: الحجز والحسابات الآجلة وتتبع الأضرار والسجل الكامل",
    j_f9: "عناصر تحكم إدارية مع إدارة البيانات الانتقائية وتدقيق الوصول",
    j_f10: "تطبيق سطح مكتب أصلي (EXE) بميزات متطابقة مع الإصدار الويب",
    j_status_title: "الحالة", j_status_note: "الأنظمة الأساسية مطبّقة وتعمل.",
    r_tag: "جدولة الموظفين", r_title: "نظام إدارة الموظفين",
    r_intro: "منصة مركزية لإدارة جداول الموظفين وتنسيق الفرق وعمليات الورديات. مصممة للقضاء على تعارضات الجدولة وتوفير رؤية شاملة لجميع أنشطة القوى العاملة.",
    r_features_title: "القدرات الرئيسية",
    r_f1: "واجهة موحدة لجدولة الورديات وإدارة الفرق",
    r_f2: "رؤية فورية لتوزيع الموظفين عبر الفترات التشغيلية",
    r_f3: "مبني على نفس بنية المزامنة الفورية مثل الأنظمة المؤسسية",
    r_f4: "بنية قابلة للتوسع جاهزة للأدوار والصلاحيات والتقارير المتقدمة",
    r_status_title: "الحالة", r_status_note: "بنية الجدولة الأساسية مكتملة مع خيارات التوسع المعياري.",
  }
};

function t(key) {
  const lang = localStorage.getItem('af_lang') || 'en';
  const dict = T[lang] || T.en;
  return dict[key] !== undefined ? dict[key] : (T.en[key] || '');
}

function applyTranslations() {
  const lang = localStorage.getItem('af_lang') || 'en';
  const meta = LANGS.find(l => l.code === lang) || LANGS[0];
  document.documentElement.lang = lang;
  document.documentElement.dir = meta.rtl ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val) el.innerHTML = val;
  });
}

function buildLangMenu() {
  const menu = document.getElementById('langMenu');
  if (!menu) return;
  const current = localStorage.getItem('af_lang') || 'en';
  menu.innerHTML = '';
  LANGS.forEach(l => {
    const b = document.createElement('button');
    b.textContent = l.native;
    if (l.code === current) b.classList.add('active');
    b.addEventListener('click', () => {
      localStorage.setItem('af_lang', l.code);
      applyTranslations();
      buildLangMenu();
      document.getElementById('langMenu').classList.remove('open');
      const label = document.getElementById('langLabel');
      if (label) label.textContent = l.code.toUpperCase();
    });
    menu.appendChild(b);
  });
  const label = document.getElementById('langLabel');
  if (label) {
    const meta = LANGS.find(l => l.code === current) || LANGS[0];
    label.textContent = meta.code.toUpperCase();
  }
}

function initLangSwitcher() {
  buildLangMenu();
  const btn = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');
  if (btn && menu) {
    btn.addEventListener('click', (e) => { e.stopPropagation(); menu.classList.toggle('open'); });
    document.addEventListener('click', () => menu.classList.remove('open'));
  }
  applyTranslations();
}

/* ===== Reveal on Scroll Animation ===== */
function initReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 6) * 0.06 + 's';
    io.observe(el);
  });
}

/* ===== Apple Card 3D Mouse Tracking ===== */
function initAppleCardTracker() {
  const cards = document.querySelectorAll('.apple-card');
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.matchMedia('(hover: hover)').matches && !isReduced) {
    document.addEventListener('mousemove', (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < 650) {
          const maxRotation = 16;
          const rotateX = Math.max(-maxRotation, Math.min(maxRotation, (-deltaY / 550) * maxRotation));
          const rotateY = Math.max(-maxRotation, Math.min(maxRotation, (deltaX / 550) * maxRotation));

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          
          const mx = ((e.clientX - rect.left) / rect.width) * 100;
          const my = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--mx', `${mx}%`);
          card.style.setProperty('--my', `${my}%`);
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
      });
    });
  }
}

/* ===== Review Management System ===== */
const ReviewManager = {
  storageKey: 'pending_reviews',
  
  addReview(name, email, rating, comment) {
    const reviews = this.getPendingReviews();
    const review = {
      id: Date.now(),
      name,
      email,
      rating: Math.min(5, Math.max(1, parseInt(rating) || 5)),
      comment,
      timestamp: new Date().toISOString(),
      approved: false
    };
    reviews.push(review);
    localStorage.setItem(this.storageKey, JSON.stringify(reviews));
    return review;
  },
  
  getPendingReviews() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  },
  
  getApprovedReviews() {
    return this.getPendingReviews().filter(r => r.approved);
  },
  
  approveReview(id) {
    const reviews = this.getPendingReviews();
    const review = reviews.find(r => r.id === id);
    if (review) {
      review.approved = true;
      localStorage.setItem(this.storageKey, JSON.stringify(reviews));
    }
  },
  
  rejectReview(id) {
    const reviews = this.getPendingReviews().filter(r => r.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(reviews));
  }
};

/* ===== Offline Capability Detection & Management ===== */
const OfflineManager = {
  isOnline: navigator.onLine,
  
  init() {
    window.addEventListener('online', () => this.setStatus(true));
    window.addEventListener('offline', () => this.setStatus(false));
    this.updateUI();
  },
  
  setStatus(online) {
    this.isOnline = online;
    this.updateUI();
  },
  
  updateUI() {
    if (this.isOnline) {
      document.body.classList.remove('offline-mode');
    } else {
      document.body.classList.add('offline-mode');
    }
  }
};

/* ===== Service Worker Registration for PWA ===== */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed or not available
    });
  }
}

/* ===== Performance Monitoring ===== */
const PerformanceMonitor = {
  metrics: {},
  
  mark(name) {
    performance.mark(name);
  },
  
  measure(name, startMark, endMark) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      this.metrics[name] = measure.duration;
    } catch (e) {
      // Measurement failed
    }
  },
  
  logMetrics() {
    if (Object.keys(this.metrics).length > 0) {
      console.log('[Performance Metrics]', this.metrics);
    }
  }
};

/* ===== Initialization ===== */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initReveal();
  initAppleCardTracker();
  OfflineManager.init();
  registerServiceWorker();
  
  document.getElementById('year').textContent = new Date().getFullYear();
  
  PerformanceMonitor.mark('app-ready');
});

/* Cleanup on unload */
window.addEventListener('beforeunload', () => {
  PerformanceMonitor.logMetrics();
});
