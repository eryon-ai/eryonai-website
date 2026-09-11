import type { BlogPost } from './blog-data';
import type { Locale } from './dictionary';
import ja from '@/dictionaries/blog/ja.json';
import de from '@/dictionaries/blog/de.json';
import fr from '@/dictionaries/blog/fr.json';
import es from '@/dictionaries/blog/es.json';
import ar from '@/dictionaries/blog/ar.json';

export interface BlogTranslation {
  title: string;
  description: string;
  content: string;
  tags: string[];
}

type TranslationMap = Record<string, BlogTranslation>;

// Static imports so this works identically in both server pages and the
// client-rendered blog listing/search page (which already bundles the full
// English blog content client-side today).
const maps: Partial<Record<Exclude<Locale, 'en'>, TranslationMap>> = {
  ja: ja as TranslationMap,
  de: de as TranslationMap,
  fr: fr as TranslationMap,
  es: es as TranslationMap,
  ar: ar as TranslationMap,
};

export function getLocalizedPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === 'en') return post;
  const t = maps[locale as Exclude<Locale, 'en'>]?.[post.slug];
  if (!t) return post;
  return { ...post, title: t.title, description: t.description, content: t.content, tags: t.tags };
}

export function getLocalizedPosts(posts: BlogPost[], locale: Locale): BlogPost[] {
  if (locale === 'en') return posts;
  return posts.map((post) => getLocalizedPost(post, locale));
}

/** Category id (English, used internally for matching) -> translated display label. */
const categoryLabels: Partial<Record<Exclude<Locale, 'en'>, Record<string, string>>> = {
  ja: {
    All: 'すべて',
    'Artificial Intelligence': '人工知能',
    'Software Engineering': 'ソフトウェアエンジニアリング',
    'Web Development': 'Web開発',
    'Cloud Computing': 'クラウドコンピューティング',
    Startups: 'スタートアップ',
    'Product Design': 'プロダクトデザイン',
    Automation: '自動化',
    'Cyber Security': 'サイバーセキュリティ',
    'Data Engineering': 'データエンジニアリング',
    DevOps: 'DevOps',
  },
  de: {
    All: 'Alle',
    'Artificial Intelligence': 'Künstliche Intelligenz',
    'Software Engineering': 'Software-Engineering',
    'Web Development': 'Webentwicklung',
    'Cloud Computing': 'Cloud Computing',
    Startups: 'Startups',
    'Product Design': 'Produktdesign',
    Automation: 'Automatisierung',
    'Cyber Security': 'Cybersicherheit',
    'Data Engineering': 'Data Engineering',
    DevOps: 'DevOps',
  },
  fr: {
    All: 'Tout',
    'Artificial Intelligence': 'Intelligence Artificielle',
    'Software Engineering': 'Ingénierie Logicielle',
    'Web Development': 'Développement Web',
    'Cloud Computing': 'Cloud Computing',
    Startups: 'Startups',
    'Product Design': 'Design Produit',
    Automation: 'Automatisation',
    'Cyber Security': 'Cybersécurité',
    'Data Engineering': 'Ingénierie des Données',
    DevOps: 'DevOps',
  },
  es: {
    All: 'Todo',
    'Artificial Intelligence': 'Inteligencia Artificial',
    'Software Engineering': 'Ingeniería de Software',
    'Web Development': 'Desarrollo Web',
    'Cloud Computing': 'Cloud Computing',
    Startups: 'Startups',
    'Product Design': 'Diseño de Producto',
    Automation: 'Automatización',
    'Cyber Security': 'Ciberseguridad',
    'Data Engineering': 'Ingeniería de Datos',
    DevOps: 'DevOps',
  },
  ar: {
    All: 'الكل',
    'Artificial Intelligence': 'الذكاء الاصطناعي',
    'Software Engineering': 'هندسة البرمجيات',
    'Web Development': 'تطوير الويب',
    'Cloud Computing': 'الحوسبة السحابية',
    Startups: 'الشركات الناشئة',
    'Product Design': 'تصميم المنتجات',
    Automation: 'الأتمتة',
    'Cyber Security': 'الأمن السيبراني',
    'Data Engineering': 'هندسة البيانات',
    DevOps: 'DevOps',
  },
};

export function getCategoryLabel(category: string, locale: Locale): string {
  return categoryLabels[locale as Exclude<Locale, 'en'>]?.[category] ?? category;
}
