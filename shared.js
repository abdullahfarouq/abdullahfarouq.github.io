/* Language list: English default, Arabic second, then most-used world languages */
const LANGS = [
  { code:'en', native:'English', rtl:false },
  { code:'ar', native:'العربية', rtl:true },
  
];

/* Full translations for en + ar. Other languages fall back to English
   for any key not present (keeps the site fully functional while a
   native translation can be added later). */
const T = {
  en: {
    nav_projects:"Projects", nav_contact:"Contact", nav_cta:"Get in touch",
    role:"Builder of Systems & Apps",
    hero_title_1:"I build ", hero_title_span:"systems", hero_title_2:" that solve real problems for businesses.",
    hero_desc: "I build fully integrated, cloud-based management systems that seamlessly sync across multiple accounts, devices, and branches in real time—with advanced offline capability and high-performance UX.",
    hero_cta1:"View my work", hero_cta2:"Get in touch",
    stat1_n:"2+", stat1_l:"Systems shipped",
    stat2_n:"100%", stat2_l:"Live sync",
    stat3_n:"Offline", stat3_l:"Works without internet",
    card1_tag:"Profile", card1_title:"About me",
    card1_bio:"Developer focused on building reliable, real-time business systems — from point-of-sale and inventory tools to scheduling apps — with an emphasis on offline resilience and clean UI.",
    card2_tag:"Project 01", card2_title:"Jewelry Shop System", card2_desc:"Live-synced gold & silver shop management system.",
    card3_tag:"Project 02", card3_title:"Roster App", card3_desc:"Shift scheduling system for companies.",
    open_project:"Open project",
    contact_title:"Ways to reach me", contact_sub:"Tap any option to connect directly.",
    contact_phone:"Phone", contact_whatsapp:"WhatsApp", contact_email:"Email", contact_linkedin:"LinkedIn",
    projects_eyebrow:"My work", projects_title:"Systems I've built", projects_sub:"Real, complete systems I designed and developed from the ground up.",
    contact_eyebrow:"Get in touch", contact_cta_title:"Ready to work together?",
    back_home:"Back to home",
    footer_rights:"All rights reserved.",
    /* Jewelry project page */
    j_tag:"Shop Management System", j_title:"Hassan Nassar Jewelry Management System",
    j_intro:"A complete management system for a jewelry shop (gold and silver), covering everything from adding an item to inventory, through selling it on an invoice, to its movement in the vault, and finally reporting. The system runs directly in the browser or as an installed desktop app (Windows), with all shop data synced live across every device and approved account.",
    j_core_title:"Core idea",
    j_core:"The shop owner and staff (e.g. the accountant) can work on the same data at the same time, from any device — computer or phone — and any action taken by one appears instantly for the others.",
    j_features_title:"Key features",
    j_f1:"Live sync across every account and device via Firestore",
    j_f2:"Approval system: every new account is reviewed by the developer before it can access the system",
    j_f3:"Live dashboard with today's sales, vault balance, inventory weight, and a live activity feed",
    j_f4:"Automatic gold pricing formula based on karat 21, plus fully independent manual pricing for silver (999 / 925 / 800)",
    j_f5:"Invoices support every payment method, including old gold/silver buy-back as part of payment",
    j_f6:"Works fully offline, with automatic upload once the connection returns — no manual step required",
    j_f7:"Camera-based barcode scanning and printable barcode labels",
    j_f8:"Layaway, old-metal buy-back, repairs, returns, credit accounts, expenses, and workshop-loss tracking",
    j_f9:"Developer section with selective data wipe and full device/account access control",
    j_f10:"Ready desktop app (EXE) with the same live-sync functionality",
    j_status_title:"Status", j_status_note:"All core modules are complete and shipped.",
    /* Roster project page */
    r_tag:"Company Scheduling System", r_title:"Roster App",
    r_intro:"A system built to manage and schedule employee shifts for companies — designed to organize teams and shifts and reduce scheduling conflicts through a single, clear, central interface.",
    r_features_title:"Key features",
    r_f1:"Manage shift schedules and teams in one central place",
    r_f2:"A clear overview of staff distribution across shifts",
    r_f3:"Built on the same reliability and live-sync philosophy as my other systems",
    r_f4:"Extensible design — ready to add roles, permissions, and reporting as a company's needs grow",
    r_status_title:"Status", r_status_note:"Core scheduling functionality is complete; extra modules can be added on request.",
  },
  ar: {
    nav_projects:"مشاريعي", nav_contact:"تواصل", nav_cta:"تواصل الآن",
    role:"مطوّر أنظمة وتطبيقات",
    hero_title_1:"أبني ", hero_title_span:"أنظمة", hero_title_2:" تحل مشاكل حقيقية للشركات والمحلات.",
    hero_desc: "أبني أنظمة إدارة ومتاجر سحابية متكاملة ومترابطة بالكامل، تعمل بسلاسة عبر متعدد الحسابات والفروع مع مزامنة لحظية بين كافة الأجهزة، ودعم متطور للعمل بدون إنترنت لضمان استقرار العمليات وتجربة مستخدم سلسة وعالية الأداء.",
    hero_cta1:"شوف أعمالي", hero_cta2:"تواصل معايا",
    stat1_n:"2+", stat1_l:"أنظمة منشورة",
    stat2_n:"100%", stat2_l:"مزامنة لحظية",
    stat3_n:"Offline", stat3_l:"يعمل بدون نت",
    card1_tag:"البروفايل", card1_title:"نبذة عني",
    card1_bio:"مطوّر مهتم ببناء أنظمة أعمال موثوقة وفي الوقت الحقيقي — من أنظمة نقاط البيع والمخزون لتطبيقات الجدولة — مع تركيز على العمل بدون إنترنت وواجهة نظيفة.",
    card2_tag:"مشروع 01", card2_title:"نظام محل مجوهرات", card2_desc:"نظام إدارة محل ذهب وفضة بمزامنة لحظية.",
    card3_tag:"مشروع 02", card3_title:"تطبيق روستر", card3_desc:"نظام جدولة ورديات للشركات.",
    open_project:"افتح المشروع",
    contact_title:"طرق التواصل معايا", contact_sub:"دوس على أي خيار عشان تتواصل على طول.",
    contact_phone:"التليفون", contact_whatsapp:"واتساب", contact_email:"الإيميل", contact_linkedin:"لينكدإن",
    projects_eyebrow:"مشاريعي", projects_title:"أنظمة عملتها", projects_sub:"نماذج فعلية لأنظمة كاملة قمت بتصميمها وتطويرها من الصفر.",
    contact_eyebrow:"تواصل معايا", contact_cta_title:"جاهز نتعاون على مشروعك؟",
    back_home:"العودة للرئيسية",
    footer_rights:"كل الحقوق محفوظة.",
    j_tag:"نظام إدارة محل", j_title:"نظام إدارة مجوهرات حسن نصار",
    j_intro:"نظام متكامل لإدارة محلات الذهب والفضة، يغطي كل حاجة من إضافة الصنف للمخزون، لحظة بيعه في فاتورة، لحركته في الخزنة، وأخيرًا التقارير. الموقع يعمل مباشرة من المتصفح أو كبرنامج مثبّت على سطح المكتب (Windows)، مع مزامنة لحظية لكل بيانات المحل بين كل الأجهزة والحسابات المصرح لها.",
    j_core_title:"الفكرة الأساسية",
    j_core:"صاحب المحل والموظفين (زي المحاسب) يقدروا يشتغلوا على نفس البيانات في نفس اللحظة، من أي جهاز — كمبيوتر أو موبايل — وأي عملية يعملها حد تظهر فورًا للباقي.",
    j_features_title:"أهم المميزات",
    j_f1:"مزامنة لحظية بين كل الحسابات والأجهزة عبر Firestore",
    j_f2:"نظام موافقة: أي حساب جديد يراجعه المطور قبل ما يقدر يدخل النظام",
    j_f3:"لوحة تحكم حية بمبيعات اليوم، رصيد الخزنة، وزن المخزون، وسجل عمليات لحظي",
    j_f4:"معادلة تسعير تلقائية للذهب على أساس عيار 21، مع تسعير يدوي مستقل تمامًا للفضة (999 / 925 / 800)",
    j_f5:"الفواتير بتدعم كل طرق الدفع، بما فيها تقييم كسر الذهب/الفضة القديم كجزء من السداد",
    j_f6:"يعمل بالكامل بدون إنترنت، مع رفع تلقائي للبيانات فور عودة الاتصال — من غير أي خطوة يدوية",
    j_f7:"قراءة باركود بالكاميرا مباشرة، وطباعة ملصقات باركود",
    j_f8:"حجز، كسر معدن قديم، تصليح، مرتجعات، حسابات آجلة، مصروفات، وتتبع الفاقد بالورشة",
    j_f9:"قسم مطور بحسم بيانات اختياري وتحكم كامل في الحسابات والأجهزة",
    j_f10:"نسخة برنامج سطح مكتب (EXE) جاهزة بنفس كل المميزات",
    j_status_title:"الحالة", j_status_note:"كل الوحدات الأساسية مكتملة وشغالة.",
    r_tag:"نظام جدولة للشركات", r_title:"تطبيق روستر",
    r_intro:"نظام لإدارة وجدولة مناوبات الموظفين للشركات — مصمم عشان ينظّم الفرق والورديات ويقلل التعارض في الجداول من خلال واجهة مركزية واضحة.",
    r_features_title:"أهم المميزات",
    r_f1:"إدارة جداول الورديات والفرق في مكان واحد",
    r_f2:"رؤية واضحة وسريعة لتوزيع الموظفين على الورديات",
    r_f3:"مبني بنفس فلسفة الموثوقية والمزامنة اللحظية زي باقي أنظمتي",
    r_f4:"تصميم قابل للتوسع — جاهز لإضافة صلاحيات وتقارير حسب احتياج الشركة",
    r_status_title:"الحالة", r_status_note:"الوظيفة الأساسية للجدولة مكتملة، ويمكن إضافة وحدات إضافية حسب الطلب.",
  }
};

function t(key){
  const lang = localStorage.getItem('af_lang') || 'en';
  const dict = T[lang] || T.en;
  return dict[key] !== undefined ? dict[key] : (T.en[key] || '');
}

function applyTranslations(){
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

function buildLangMenu(){
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
  if (label){
    const meta = LANGS.find(l => l.code === current) || LANGS[0];
    label.textContent = meta.code.toUpperCase();
  }
}

function initLangSwitcher(){
  buildLangMenu();
  const btn = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');
  if (btn && menu){
    btn.addEventListener('click', (e) => { e.stopPropagation(); menu.classList.toggle('open'); });
    document.addEventListener('click', () => menu.classList.remove('open'));
  }
  applyTranslations();
}

/* Reveal-on-scroll used across pages */
function initReveal(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced){
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

/* Nav gets a denser glass background + shadow once the page scrolls */
function initNavScroll(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initReveal();
  initNavScroll();
});
