import { MetadataRoute } from 'next';
import { NATIONAL_TARGETS } from '@/config/national-targets';
import { slugify } from '@/lib/slugify';
import { getAllGuides } from '@/lib/mdx';
import { PERGOLA_OPERATORS } from '@/data/operators';
import { PERGOLA_BRANDS } from '@/data/pergola-brands';
import { PERGOLA_COMPARATIFS } from '@/data/pergola-comparatifs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.expertpergolabioclimatique.fr';

    // 1. CORE STATIC PAGES
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/operateurs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/marques`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/comparatifs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tailles`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cgv`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ];

    // 2. PARTNER CITIES
    const cityRoutes: MetadataRoute.Sitemap = NATIONAL_TARGETS.map((target) => ({
        url: `${baseUrl}/ville/${slugify(target.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. OPERATEURS
    const operateursRoutes: MetadataRoute.Sitemap = PERGOLA_OPERATORS.map((op) => ({
        url: `${baseUrl}/operateurs/${op.slug}`,
        lastModified: new Date(op.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // 4. MARQUES
    const marqueRoutes: MetadataRoute.Sitemap = PERGOLA_BRANDS.map((b) => ({
        url: `${baseUrl}/marques/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 5. COMPARATIFS
    const comparatifRoutes: MetadataRoute.Sitemap = PERGOLA_COMPARATIFS.map((c) => ({
        url: `${baseUrl}/comparatif/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 6. BLOG GUIDES (Dynamic)
    const guides = getAllGuides();
    const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: new Date(guide.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        ...coreRoutes,
        ...cityRoutes,
        ...operateursRoutes,
        ...marqueRoutes,
        ...comparatifRoutes,
        ...guideRoutes,
    ].map(item => ({
        ...item,
        url: item.url.toLowerCase()
    }));
}
