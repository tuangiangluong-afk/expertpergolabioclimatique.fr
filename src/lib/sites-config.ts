export interface SiteConfig {
    slug: string;
    domain: string;
    aliases?: string[];
    city: string;
    postalCode: string;
    department: string;
    region: string;
    name: string;
    phoneNumber: string;
    email: string;
    targetType: 'SOLAR' | 'MIXED' | 'PMP' | 'CONCRETE';
    priceRange: 'STANDARD' | 'PREMIUM' | 'LUXE';
    theme: 'premium' | 'trust';
    heroImage: string;
    description: string;
    meta: {
        title: string;
        description: string;
    };
    certifications: string[];
    aidesDisponibles: string[];
    features: string[];
    localKeywords: string[];
    quartiers: string[];
    coproprietes: string[];
    centresCommerciaux: string[];
    ga_id?: string;
    gtm_id?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

const TEMPLATE_CERTIFICATIONS = [
    "Conception sur-mesure",
    "Aluminium haute qualité",
    "Garantie décennale et installation"
];
const TEMPLATE_AIDES = [
    "Devis gratuit sans engagement",
    "Projet clé en main"
];
const TEMPLATE_FEATURES = [
    "Lames motorisées",
    "Éclairage LED intégré",
    "Fermetures latérales en option"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertpergolabioclimatique.fr",
    city: "France",
    postalCode: "",
    department: "",
    region: "National",
    name: "Expert Pergola Bioclimatique",
    phoneNumber: "01 84 80 00 00",
    email: "contact@expertpergolabioclimatique.fr",
    targetType: "CONCRETE",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/pergola-hero.png",
    description: "Trouvez des installateurs certifiés de pergolas bioclimatiques en France. Demandez votre devis gratuit.",
    meta: {
        title: "Expert Pergola Bioclimatique | Devis & Installation",
        description: "Trouvez des installateurs certifiés de pergolas bioclimatiques en France. Demandez votre devis gratuit."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "pergola bioclimatica",
    "pergola aluminio"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.22, lng: 2.21 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertpergolabioclimatique.fr": _hubConfig,
    "www.expertpergolabioclimatique.fr": _hubConfig,
    "home": _hubConfig
};

export const getSiteConfig = (hostnameOrSlug: string): SiteConfig | null => {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');
    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;
    if (SITES[hostname]) return SITES[hostname];
    return _hubConfig;
};

export const getSiteBySlug = (slug: string): SiteConfig | null => Object.values(SITES).find(s => s.slug === slug) || null;
export const getSatelliteSites = (): SiteConfig[] => [];
export const isMainHub = (hostname: string): boolean => true;
export const getHubConfig = (): SiteConfig => _hubConfig;
