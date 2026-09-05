import { MetadataRoute } from 'next';
import { getAllGuides } from '@/lib/mdx';
import { CITIES } from '@/lib/db';
import { slugify } from '@/lib/slugify';
import { createClient } from '@supabase/supabase-js';
import { PERGOLA_BRANDS } from '@/data/pergola-brands';
import { PERGOLA_TYPES } from '@/data/pergola-types';
import { PERGOLA_TAILLES } from '@/data/pergola-tailles';
import { PERGOLA_COMPARATIFS } from '@/data/pergola-comparatifs';

// Base URL (Hub)
const BASE_URL = 'https://www.expertpergolabioclimatique.fr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const guides = getAllGuides();

    // 1. Static Routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/guides`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // Legal pages
        {
            url: `${BASE_URL}/mentions-legales`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/cgv`,
            lastModified: new Date('2026-03-01'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // 2. Guide Routes (static MDX)
    const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
        url: `${BASE_URL}/guides/${guide.slug}`,
        lastModified: new Date(guide.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Blog Routes (dynamic from Supabase)
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (supabaseUrl && supabaseKey) {
            const supabase = createClient(supabaseUrl, supabaseKey);
            const { data: blogPosts } = await supabase
                .from('blog_posts')
                .select('slug, published_at, updated_at')
                .eq('status', 'published')
                .order('published_at', { ascending: false });

            if (blogPosts) {
                blogRoutes = blogPosts.map((post) => ({
                    url: `${BASE_URL}/blog/${post.slug}`,
                    lastModified: new Date(post.updated_at || post.published_at),
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                }));
            }
        }
    } catch (e) {
        console.warn('[Sitemap] Failed to fetch blog posts:', e);
    }

    // 4. City Routes (From CITIES Config)
    const uniqueSites = new Map();
    Object.values(CITIES).forEach(site => {
        if (site.slug !== 'home' && site.slug !== 'expertbetondecoratif.com' && site.slug !== 'www.expertbetondecoratif.com') {
            uniqueSites.set(site.slug, site);
        }
    });

    const cityRoutes: MetadataRoute.Sitemap = Array.from(uniqueSites.values()).map((site) => ({
        url: `${BASE_URL}/ville/${slugify(site.city).toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 5. City x Marque (pSEO Matrix)
    const cityMarqueRoutes: MetadataRoute.Sitemap = Array.from(uniqueSites.values()).flatMap((site) => {
        const citySlug = slugify(site.city).toLowerCase();
        return PERGOLA_BRANDS.map((marque) => ({
            url: `${BASE_URL}/ville/${citySlug}/${marque.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        }));
    });

    // 6. Marques
    const marquesRoutes = PERGOLA_BRANDS.map((m) => ({ url: `${BASE_URL}/marques/${m.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 }));
    // 7. Types
    const typeRoutes = PERGOLA_TYPES.map((t) => ({ url: `${BASE_URL}/type/${t.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 }));
    // 8. Tailles
    const tailleRoutes = PERGOLA_TAILLES.map((t) => ({ url: `${BASE_URL}/tailles/${t.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 }));
    // 9. Comparatifs
    const comparatifRoutes = PERGOLA_COMPARATIFS.map((c) => ({ url: `${BASE_URL}/comparatif/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 }));

    return [...routes, ...guideRoutes, ...blogRoutes, ...cityRoutes, ...cityMarqueRoutes, ...marquesRoutes, ...typeRoutes, ...tailleRoutes, ...comparatifRoutes].map(item => ({
        ...item,
        url: item.url.toLowerCase()
    }));
}
