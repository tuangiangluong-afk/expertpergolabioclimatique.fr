// ========================================
// NATIONAL TARGETS - LOCALIZED ZONES (ES PERGOLAS)
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    price_start: number;
    top_places: string[];
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    { slug: "marbella", name: "Marbella", heroTitle: "Pérgola Bioclimática", geo: { lat: 36.5099, lng: -4.8863 }, price_start: 12000, top_places: ["Puerto Banús", "Nueva Andalucía", "Milla de Oro", "Las Chapas"], zip: "29600", tier: "BIG5" },
    { slug: "malaga", name: "Málaga", heroTitle: "Pérgola Bioclimática", geo: { lat: 36.7213, lng: -4.4214 }, price_start: 11000, top_places: ["El Limonar", "Malagueta", "Teatinos", "Pedregalejo"], zip: "29001", tier: "BIG5" },
    { slug: "alicante", name: "Alicante", heroTitle: "Pérgola Bioclimática", geo: { lat: 38.3452, lng: -0.4815 }, price_start: 10500, top_places: ["Cabo de las Huertas", "Playa de San Juan", "Vistahermosa"], zip: "03001", tier: "BIG5" },
    { slug: "ibiza", name: "Ibiza", heroTitle: "Pérgola Bioclimática", geo: { lat: 38.9089, lng: 1.4324 }, price_start: 13000, top_places: ["Marina Botafoc", "Dalt Vila", "Jesús", "Talamanca"], zip: "07800", tier: "GOLDEN" },
    { slug: "palma-de-mallorca", name: "Palma de Mallorca", heroTitle: "Pérgola Bioclimática", geo: { lat: 39.5696, lng: 2.6502 }, price_start: 12000, top_places: ["Son Vida", "Portixol", "Santa Catalina", "Génova"], zip: "07001", tier: "GOLDEN" },
    { slug: "sitges", name: "Sitges", heroTitle: "Pérgola Bioclimática", geo: { lat: 41.2372, lng: 1.8059 }, price_start: 11500, top_places: ["Vinyet", "Terramar", "Aiguadolç", "Centro"], zip: "08870", tier: "STRATEGIC" },
    { slug: "costa-brava", name: "Costa Brava", heroTitle: "Pérgola Bioclimática", geo: { lat: 41.9794, lng: 3.0180 }, price_start: 11000, top_places: ["Begur", "Calella", "Llafranc", "Platja d'Aro"], zip: "17001", tier: "STRATEGIC" },
    { slug: "valencia", name: "Valencia", heroTitle: "Pérgola Bioclimática", geo: { lat: 39.4699, lng: -0.3763 }, price_start: 10500, top_places: ["Patacona", "Campanar", "Gran Vía", "La Canyada"], zip: "46001", tier: "STRATEGIC" },
    { slug: "benidorm", name: "Benidorm", heroTitle: "Pérgola Bioclimática", geo: { lat: 38.5411, lng: -0.1225 }, price_start: 10500, top_places: ["Poniente", "Levante", "Rincón de Loix"], zip: "03501", tier: "STRATEGIC" },
    { slug: "estepona", name: "Estepona", heroTitle: "Pérgola Bioclimática", geo: { lat: 36.4256, lng: -5.1484 }, price_start: 11500, top_places: ["Bel-Air", "Atalaya", "Cancelada", "Puerto"], zip: "29680", tier: "STRATEGIC" }
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = target.price_start + " €";
    const priceDesc = "Diseño y Presupuesto gratis";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} ${target.name}`,
        domain: `${target.slug}.expertopergolabioclimatica.es`, // rewrite target
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "ES",
        region: "España",
        description: `${target.heroTitle} a medida en ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Diseño 3D Gratis",
            "Aluminio Premium",
            "Instaladores Certificados",
            "Garantía 10 Años",
            "Presupuesto en 24h"
        ],
        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,
        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "Variable"
        },
        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },
        phoneNumber: "900 000 000",
        email: "contacto@expertopergolabioclimatica.es",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} ${target.name} | ${priceDisplay}`,
            description: `Pérgolas bioclimáticas de aluminio a medida en ${target.name} (${target.zip}). Transforme su espacio exterior con acabados premium.`
        }
    };
}
