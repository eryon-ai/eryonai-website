export type SupportedLocale = 'en' | 'ja' | 'de' | 'fr' | 'es' | 'ar';

export const layoutTranslations: Record<
  SupportedLocale,
  {
    bannerText: string;
    bannerCta: string;
    quoteBtn: string;
    home: string;
    services: string;
    about: string;
    work: string;
    process: string;
    blogs: string;
    contact: string;
    viewAllServices: string;
    servicesDropdown: { label: string; href: string }[];
    footer: {
      servicesTitle: string;
      companyTitle: string;
      contactTitle: string;
      newsletterTitle: string;
      newsletterDesc: string;
      emailPlaceholder: string;
      subscribeBtn: string;
      subscribedMsg: string;
      tagline: string;
      allRightsReserved: string;
      servicesLinks: string[];
      companyLinks: string[];
      contactLinks: string[];
    };
  }
> = {
  en: {
    bannerText: 'Now Accepting Enterprise Clients',
    bannerCta: 'Get a Free Consultation',
    quoteBtn: 'Get a Free Quote →',
    home: 'Home',
    services: 'Services',
    about: 'About',
    work: 'Work',
    process: 'Process',
    blogs: 'Blogs',
    contact: 'Contact',
    viewAllServices: 'View All Services',
    servicesDropdown: [
      { label: 'Web Applications', href: '/services/web-applications' },
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'Custom SaaS', href: '/services/custom-saas' },
      { label: 'CRM & ERP', href: '/services/crm-erp-solutions' },
      { label: 'Real Estate Software', href: '/services/real-estate-software' },
      { label: 'Gym Management Software', href: '/services/gym-management-software' },
      { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
      { label: 'Business Automation', href: '/services/business-automation' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'Data & Analytics', href: '/services/data-analytics' },
      { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'Services',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      newsletterTitle: 'Stay Ahead with AI & Tech Insights',
      newsletterDesc: 'Subscribe to our monthly engineering newsletter. No spam, ever.',
      emailPlaceholder: 'Enter your business email',
      subscribeBtn: 'Subscribe',
      subscribedMsg: 'Subscribed successfully! Welcome aboard.',
      tagline: 'Enterprise-grade custom software engineering & generative AI solutions built for modern businesses worldwide.',
      allRightsReserved: 'All rights reserved.',
      servicesLinks: ['Web Development', 'Mobile App Development', 'AI / ML Solutions', 'Cloud & DevOps', 'Cybersecurity', 'UI/UX Design'],
      companyLinks: ['About Us', 'Portfolio', 'Our Process', 'Blogs', 'Contact'],
      contactLinks: ['Get a Quote', 'Start a Project', 'Schedule a Call', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
    },
  },
  ja: {
    bannerText: '現在エンタープライズ企業様のご相談を受付中',
    bannerCta: '無料相談はこちら',
    quoteBtn: '無料お見積り・相談 →',
    home: 'ホーム',
    services: 'サービス',
    about: '会社概要',
    work: '実績',
    process: 'プロセス',
    blogs: 'ブログ',
    contact: 'お問い合わせ',
    viewAllServices: 'すべてのサービスを見る',
    servicesDropdown: [
      { label: 'Webアプリケーション', href: '/services/web-applications' },
      { label: 'モバイルアプリケーション', href: '/services/mobile-applications' },
      { label: 'カスタムSaaS', href: '/services/custom-saas' },
      { label: 'CRM & ERP', href: '/services/crm-erp-solutions' },
      { label: '不動産ソフトウェア', href: '/services/real-estate-software' },
      { label: 'ジム管理ソフトウェア', href: '/services/gym-management-software' },
      { label: 'Eコマース', href: '/services/ecommerce-solutions' },
      { label: '業務自動化', href: '/services/business-automation' },
      { label: 'AIソリューション', href: '/services/ai-solutions' },
      { label: 'データ分析', href: '/services/data-analytics' },
      { label: 'DevOps & クラウド', href: '/services/devops-cloud' },
      { label: 'UI/UXデザイン', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'サービス',
      companyTitle: '会社情報',
      contactTitle: 'お問い合わせ',
      newsletterTitle: 'AI・テック最新情報をお届け',
      newsletterDesc: '月刊エンジニアリングニュースレターを購読。スパムは一切ありません。',
      emailPlaceholder: 'ビジネスメールを入力',
      subscribeBtn: '購読する',
      subscribedMsg: '購読が完了しました!ありがとうございます。',
      tagline: '世界中の現代企業のために構築された、エンタープライズグレードのカスタムソフトウェア開発と生成AIソリューション。',
      allRightsReserved: 'All rights reserved.',
      servicesLinks: ['Web開発', 'モバイルアプリ開発', 'AI / ML ソリューション', 'クラウド & DevOps', 'サイバーセキュリティ', 'UI/UXデザイン'],
      companyLinks: ['会社概要', '実績紹介', '開発プロセス', 'ブログ', 'お問い合わせ'],
      contactLinks: ['見積もり依頼', 'プロジェクトを開始', '相談予約', 'プライバシーポリシー', '利用規約', 'サイトマップ'],
    },
  },
  de: {
    bannerText: 'Wir nehmen jetzt Unternehmenskunden an',
    bannerCta: 'Kostenlose Beratung erhalten',
    quoteBtn: 'Kostenloses Angebot →',
    home: 'Startseite',
    services: 'Leistungen',
    about: 'Über uns',
    work: 'Projekte',
    process: 'Prozess',
    blogs: 'Blog',
    contact: 'Kontakt',
    viewAllServices: 'Alle Leistungen ansehen',
    servicesDropdown: [
      { label: 'Webanwendungen', href: '/services/web-applications' },
      { label: 'Mobile Anwendungen', href: '/services/mobile-applications' },
      { label: 'Individuelle SaaS', href: '/services/custom-saas' },
      { label: 'CRM & ERP', href: '/services/crm-erp-solutions' },
      { label: 'Immobilien-Software', href: '/services/real-estate-software' },
      { label: 'Fitnessstudio-Verwaltung', href: '/services/gym-management-software' },
      { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
      { label: 'Geschäftsautomatisierung', href: '/services/business-automation' },
      { label: 'KI-Lösungen', href: '/services/ai-solutions' },
      { label: 'Daten & Analytik', href: '/services/data-analytics' },
      { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
      { label: 'UI/UX-Design', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'Leistungen',
      companyTitle: 'Unternehmen',
      contactTitle: 'Kontakt',
      newsletterTitle: 'Bleiben Sie vorn mit KI- & Tech-Insights',
      newsletterDesc: 'Abonnieren Sie unseren monatlichen Engineering-Newsletter. Kein Spam, versprochen.',
      emailPlaceholder: 'Geschäftliche E-Mail eingeben',
      subscribeBtn: 'Abonnieren',
      subscribedMsg: 'Erfolgreich abonniert! Willkommen an Bord.',
      tagline: 'Individuelle Software-Entwicklung und generative KI-Lösungen auf Unternehmensniveau für moderne Unternehmen weltweit.',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      servicesLinks: ['Webentwicklung', 'Mobile App-Entwicklung', 'KI / ML-Lösungen', 'Cloud & DevOps', 'Cybersicherheit', 'UI/UX-Design'],
      companyLinks: ['Über uns', 'Portfolio', 'Unser Prozess', 'Blog', 'Kontakt'],
      contactLinks: ['Angebot anfordern', 'Projekt starten', 'Termin vereinbaren', 'Datenschutz', 'AGB', 'Sitemap'],
    },
  },
  fr: {
    bannerText: 'Nous accueillons de nouveaux clients entreprise',
    bannerCta: 'Obtenir une consultation gratuite',
    quoteBtn: 'Obtenir un devis gratuit →',
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    work: 'Réalisations',
    process: 'Processus',
    blogs: 'Blog',
    contact: 'Contact',
    viewAllServices: 'Voir tous les services',
    servicesDropdown: [
      { label: 'Applications Web', href: '/services/web-applications' },
      { label: 'Applications Mobiles', href: '/services/mobile-applications' },
      { label: 'SaaS sur mesure', href: '/services/custom-saas' },
      { label: 'CRM & ERP', href: '/services/crm-erp-solutions' },
      { label: 'Logiciels immobiliers', href: '/services/real-estate-software' },
      { label: 'Gestion de salles de sport', href: '/services/gym-management-software' },
      { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
      { label: 'Automatisation métier', href: '/services/business-automation' },
      { label: 'Solutions IA', href: '/services/ai-solutions' },
      { label: 'Données & Analytique', href: '/services/data-analytics' },
      { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
      { label: 'Design UI/UX', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'Services',
      companyTitle: 'Entreprise',
      contactTitle: 'Contact',
      newsletterTitle: "Restez à la pointe de l'IA et de la tech",
      newsletterDesc: "Abonnez-vous à notre newsletter mensuelle d'ingénierie. Jamais de spam.",
      emailPlaceholder: 'Entrez votre e-mail professionnel',
      subscribeBtn: "S'abonner",
      subscribedMsg: 'Abonnement réussi ! Bienvenue à bord.',
      tagline: "Ingénierie logicielle sur mesure et solutions d'IA générative de niveau entreprise, conçues pour les entreprises modernes du monde entier.",
      allRightsReserved: 'Tous droits réservés.',
      servicesLinks: ['Développement Web', "Développement d'apps mobiles", 'Solutions IA / ML', 'Cloud & DevOps', 'Cybersécurité', 'Design UI/UX'],
      companyLinks: ['À propos', 'Portfolio', 'Notre processus', 'Blog', 'Contact'],
      contactLinks: ['Demander un devis', 'Démarrer un projet', 'Planifier un appel', 'Politique de confidentialité', "Conditions d'utilisation", 'Plan du site'],
    },
  },
  es: {
    bannerText: 'Ahora aceptamos clientes empresariales',
    bannerCta: 'Obtener una consulta gratuita',
    quoteBtn: 'Solicitar presupuesto gratis →',
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    work: 'Portafolio',
    process: 'Proceso',
    blogs: 'Blog',
    contact: 'Contacto',
    viewAllServices: 'Ver todos los servicios',
    servicesDropdown: [
      { label: 'Aplicaciones Web', href: '/services/web-applications' },
      { label: 'Aplicaciones Móviles', href: '/services/mobile-applications' },
      { label: 'SaaS a medida', href: '/services/custom-saas' },
      { label: 'CRM y ERP', href: '/services/crm-erp-solutions' },
      { label: 'Software inmobiliario', href: '/services/real-estate-software' },
      { label: 'Software para gimnasios', href: '/services/gym-management-software' },
      { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
      { label: 'Automatización empresarial', href: '/services/business-automation' },
      { label: 'Soluciones de IA', href: '/services/ai-solutions' },
      { label: 'Datos y Analítica', href: '/services/data-analytics' },
      { label: 'DevOps y Cloud', href: '/services/devops-cloud' },
      { label: 'Diseño UI/UX', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'Servicios',
      companyTitle: 'Empresa',
      contactTitle: 'Contacto',
      newsletterTitle: 'Mantente a la vanguardia en IA y tecnología',
      newsletterDesc: 'Suscríbete a nuestro boletín mensual de ingeniería. Sin spam, nunca.',
      emailPlaceholder: 'Ingresa tu correo empresarial',
      subscribeBtn: 'Suscribirse',
      subscribedMsg: '¡Suscripción exitosa! Bienvenido a bordo.',
      tagline: 'Ingeniería de software a medida y soluciones de IA generativa de nivel empresarial para negocios modernos en todo el mundo.',
      allRightsReserved: 'Todos los derechos reservados.',
      servicesLinks: ['Desarrollo Web', 'Desarrollo de apps móviles', 'Soluciones IA / ML', 'Cloud y DevOps', 'Ciberseguridad', 'Diseño UI/UX'],
      companyLinks: ['Nosotros', 'Portafolio', 'Nuestro proceso', 'Blog', 'Contacto'],
      contactLinks: ['Solicitar presupuesto', 'Iniciar un proyecto', 'Agendar una llamada', 'Política de privacidad', 'Términos de servicio', 'Mapa del sitio'],
    },
  },
  ar: {
    bannerText: 'نستقبل الآن عملاء المؤسسات',
    bannerCta: 'احصل على استشارة مجانية',
    quoteBtn: 'احصل على عرض سعر مجاني ←',
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    work: 'أعمالنا',
    process: 'منهجية العمل',
    blogs: 'المدونة',
    contact: 'تواصل معنا',
    viewAllServices: 'عرض جميع الخدمات',
    servicesDropdown: [
      { label: 'تطبيقات الويب', href: '/services/web-applications' },
      { label: 'تطبيقات الجوال', href: '/services/mobile-applications' },
      { label: 'حلول SaaS مخصصة', href: '/services/custom-saas' },
      { label: 'أنظمة CRM و ERP', href: '/services/crm-erp-solutions' },
      { label: 'برمجيات العقارات', href: '/services/real-estate-software' },
      { label: 'برمجيات إدارة النوادي الرياضية', href: '/services/gym-management-software' },
      { label: 'حلول التجارة الإلكترونية', href: '/services/ecommerce-solutions' },
      { label: 'أتمتة الأعمال والعمليات', href: '/services/business-automation' },
      { label: 'حلول الذكاء الاصطناعي', href: '/services/ai-solutions' },
      { label: 'البيانات والتحليلات', href: '/services/data-analytics' },
      { label: 'الحوسبة السحابية DevOps', href: '/services/devops-cloud' },
      { label: 'تصميم واجهات UI/UX', href: '/services/ui-ux-design' },
    ],
    footer: {
      servicesTitle: 'الخدمات',
      companyTitle: 'الشركة',
      contactTitle: 'التواصل',
      newsletterTitle: 'ابقَ في صدارة الابتكار التقني والذكاء الاصطناعي',
      newsletterDesc: 'اشترك في نشرتنا البريدية الهندسية الشهرية. بدون إزعاج.',
      emailPlaceholder: 'البريد الإلكتروني للعمل',
      subscribeBtn: 'اشتراك',
      subscribedMsg: 'تم الاشتراك بنجاح! أهلاً بك معنا.',
      tagline: 'تطوير البرمجيات المخصصة للمؤسسات وحلول الذكاء الاصطناعي التوليدي للشركات الرائدة عالمياً.',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      servicesLinks: ['تطوير الويب', 'تطبيقات الجوال', 'حلول الذكاء الاصطناعي', 'السحابة و DevOps', 'الأمن السيبراني', 'تصميم UI/UX'],
      companyLinks: ['من نحن', 'أعمالنا', 'منهجية العمل', 'المدونة', 'تواصل معنا'],
      contactLinks: ['طلب عرض سعر', 'بدء مشروع', 'حجز مكالمة', 'سياسة الخصوصية', 'الشروط والأحكام', 'خريطة الموقع'],
    },
  },
};

export interface ContentUIStrings {
  backToBlog: string;
  backToPortfolio: string;
  share: string;
  copyLink: string;
  copied: string;
  tableOfContents: string;
  shareArticle: string;
  relatedArticles: string;
  minRead: string;
  projectScreenshots: string;
  techStack: string;
  demoLiveSite: string;
  testCredentials: string;
  projectOverview: string;
  theChallenge: string;
  ourSolution: string;
  interestedCta: string;
  discussProject: string;
  bookStrategyCall: string;
  bookFreeConsultation: string;
  exploreAllServices: string;
  faqHeading: string;
  relatedService: string;
}

export const contentUI: Record<SupportedLocale, ContentUIStrings> = {
  en: {
    backToBlog: 'Back to Blog',
    backToPortfolio: 'Back to Portfolio',
    share: 'Share:',
    copyLink: 'Copy Link',
    copied: 'Copied!',
    tableOfContents: 'Table of Contents',
    shareArticle: 'Share Article',
    relatedArticles: 'Related Articles',
    minRead: 'min read',
    projectScreenshots: 'Project Screenshots',
    techStack: 'Tech Stack',
    demoLiveSite: 'Demo Live Site',
    testCredentials: 'Test Credentials (Must be Highlighted)',
    projectOverview: 'Project Overview',
    theChallenge: 'The Challenge',
    ourSolution: 'Our Solution',
    interestedCta: 'Interested in a similar solution for your business?',
    discussProject: 'Discuss Your Project',
    bookStrategyCall: 'Book Strategy Call',
    bookFreeConsultation: 'Book a Free Consultation',
    exploreAllServices: 'Explore All Services',
    faqHeading: 'Frequently Asked Questions',
    relatedService: 'Related Service',
  },
  ja: {
    backToBlog: 'ブログに戻る',
    backToPortfolio: '実績一覧に戻る',
    share: 'シェア:',
    copyLink: 'リンクをコピー',
    copied: 'コピーしました!',
    tableOfContents: '目次',
    shareArticle: '記事をシェア',
    relatedArticles: '関連記事',
    minRead: '分で読了',
    projectScreenshots: 'プロジェクトのスクリーンショット',
    techStack: '技術スタック',
    demoLiveSite: 'デモサイトを見る',
    testCredentials: 'テスト用ログイン情報(必ずご確認ください)',
    projectOverview: 'プロジェクト概要',
    theChallenge: '課題',
    ourSolution: '私たちのソリューション',
    interestedCta: '貴社にも同様のソリューションをご検討ですか?',
    discussProject: 'プロジェクトについて相談する',
    bookStrategyCall: '無料戦略相談を予約',
    bookFreeConsultation: '無料相談を予約',
    exploreAllServices: 'すべてのサービスを見る',
    faqHeading: 'よくある質問',
    relatedService: '関連サービス',
  },
  de: {
    backToBlog: 'Zurück zum Blog',
    backToPortfolio: 'Zurück zum Portfolio',
    share: 'Teilen:',
    copyLink: 'Link kopieren',
    copied: 'Kopiert!',
    tableOfContents: 'Inhaltsverzeichnis',
    shareArticle: 'Artikel teilen',
    relatedArticles: 'Ähnliche Artikel',
    minRead: 'Min. Lesezeit',
    projectScreenshots: 'Projekt-Screenshots',
    techStack: 'Technologie-Stack',
    demoLiveSite: 'Live-Demo ansehen',
    testCredentials: 'Testzugangsdaten (unbedingt beachten)',
    projectOverview: 'Projektübersicht',
    theChallenge: 'Die Herausforderung',
    ourSolution: 'Unsere Lösung',
    interestedCta: 'Interesse an einer ähnlichen Lösung für Ihr Unternehmen?',
    discussProject: 'Projekt besprechen',
    bookStrategyCall: 'Strategiegespräch buchen',
    bookFreeConsultation: 'Kostenlose Beratung buchen',
    exploreAllServices: 'Alle Leistungen entdecken',
    faqHeading: 'Häufig gestellte Fragen',
    relatedService: 'Verwandte Leistung',
  },
  fr: {
    backToBlog: 'Retour au blog',
    backToPortfolio: 'Retour au portfolio',
    share: 'Partager :',
    copyLink: 'Copier le lien',
    copied: 'Copié !',
    tableOfContents: 'Table des matières',
    shareArticle: "Partager l'article",
    relatedArticles: 'Articles similaires',
    minRead: 'min de lecture',
    projectScreenshots: "Captures d'écran du projet",
    techStack: 'Stack technique',
    demoLiveSite: 'Voir la démo en ligne',
    testCredentials: 'Identifiants de test (à noter impérativement)',
    projectOverview: 'Aperçu du projet',
    theChallenge: 'Le défi',
    ourSolution: 'Notre solution',
    interestedCta: 'Intéressé par une solution similaire pour votre entreprise ?',
    discussProject: 'Discuter de votre projet',
    bookStrategyCall: 'Réserver un appel stratégique',
    bookFreeConsultation: 'Réserver une consultation gratuite',
    exploreAllServices: 'Découvrir tous nos services',
    faqHeading: 'Questions fréquentes',
    relatedService: 'Service associé',
  },
  es: {
    backToBlog: 'Volver al blog',
    backToPortfolio: 'Volver al portafolio',
    share: 'Compartir:',
    copyLink: 'Copiar enlace',
    copied: '¡Copiado!',
    tableOfContents: 'Tabla de contenidos',
    shareArticle: 'Compartir artículo',
    relatedArticles: 'Artículos relacionados',
    minRead: 'min de lectura',
    projectScreenshots: 'Capturas del proyecto',
    techStack: 'Stack tecnológico',
    demoLiveSite: 'Ver demo en vivo',
    testCredentials: 'Credenciales de prueba (deben resaltarse)',
    projectOverview: 'Resumen del proyecto',
    theChallenge: 'El desafío',
    ourSolution: 'Nuestra solución',
    interestedCta: '¿Interesado en una solución similar para tu negocio?',
    discussProject: 'Hablar sobre tu proyecto',
    bookStrategyCall: 'Reservar llamada estratégica',
    bookFreeConsultation: 'Reservar consulta gratuita',
    exploreAllServices: 'Explorar todos los servicios',
    faqHeading: 'Preguntas frecuentes',
    relatedService: 'Servicio relacionado',
  },
  ar: {
    backToBlog: 'العودة إلى المدونة',
    backToPortfolio: 'العودة إلى الأعمال',
    share: 'مشاركة:',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    tableOfContents: 'جدول المحتويات',
    shareArticle: 'مشاركة المقال',
    relatedArticles: 'مقالات ذات صلة',
    minRead: 'دقيقة قراءة',
    projectScreenshots: 'لقطات من المشروع',
    techStack: 'التقنيات المستخدمة',
    demoLiveSite: 'عرض الموقع المباشر',
    testCredentials: 'بيانات تسجيل الدخول التجريبية (يجب الانتباه إليها)',
    projectOverview: 'نظرة عامة على المشروع',
    theChallenge: 'التحدي',
    ourSolution: 'حلنا',
    interestedCta: 'هل تريد حلاً مشابهاً لشركتك؟',
    discussProject: 'ناقش مشروعك',
    bookStrategyCall: 'احجز مكالمة استراتيجية',
    bookFreeConsultation: 'احجز استشارة مجانية',
    exploreAllServices: 'استكشف جميع الخدمات',
    faqHeading: 'الأسئلة الشائعة',
    relatedService: 'خدمة ذات صلة',
  },
};

export function getLocaleFromPathname(pathname: string): SupportedLocale {
  const segment = pathname.split('/')[1];
  if (segment === 'ja' || segment === 'de' || segment === 'fr' || segment === 'es' || segment === 'ar') {
    return segment as SupportedLocale;
  }
  return 'en';
}

export function getLocalizedPath(path: string, locale: SupportedLocale): string {
  if (path.startsWith('http') || path === '#') return path;
  if (locale === 'en') return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

const ALL_LOCALES: SupportedLocale[] = ['en', 'ja', 'de', 'fr', 'es', 'ar'];

/**
 * Builds canonical + hreflang alternates for a locale-prefixed route, e.g. buildAlternates('/about', 'ja').
 * Pass { translated: false } for pages whose body is not translated yet: hreflang would claim a language
 * the content does not match, so only the self-referencing canonical is emitted.
 */
export function buildAlternates(
  path: string,
  locale: SupportedLocale,
  opts: { translated?: boolean } = {},
): { canonical: string; languages?: Record<string, string> } {
  const baseUrl = 'https://www.eryonai.com';
  if (opts.translated === false) {
    return { canonical: `${baseUrl}${getLocalizedPath(path, locale)}` };
  }
  const languages: Record<string, string> = { 'x-default': `${baseUrl}${path}` };
  for (const l of ALL_LOCALES) {
    languages[l] = `${baseUrl}${getLocalizedPath(path, l)}`;
  }
  return {
    canonical: `${baseUrl}${getLocalizedPath(path, locale)}`,
    languages,
  };
}
