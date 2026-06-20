import type { CityConfig } from "@/lib/db";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
    local_climate_info: string;
    installation_timeline: string;
}

const DEFAULT_REGIONAL = {
    subsidyName: "Garantie Décennale Inclus",
    subsidyAmount: "Jusqu'à 30% d'économies d'énergie",
    avgPrice: "4 500€ – 12 000€"
};

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, postalCode, pricing } = cityConfig;
    const postal = postalCode || "";
    
    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    const renderTip = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const tips = [
        `Pour votre pergola bioclimatique à ${c}, nous recommandons d'intégrer un éclairage LED orientable dans les lames pour profiter de votre terrasse lors des longues soirées d'été.`,
        `À ${c}, ajouter des stores verticaux (screens) à votre pergola vous permettra de créer un espace protégé du vent tout en conservant la vue sur votre extérieur.`,
        `Toutes les pergolas installées à ${c} peuvent être équipées de capteurs de pluie et de vent pour fermer les lames automatiquement en cas d'intempéries.`
      ];
      return tips[hash % tips.length];
    };

    const renderIntro = (c: string, p: string, avg: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const intros = [
        `<p class="mb-4">Habitants de <strong>${c}</strong>, transformez votre terrasse en un véritable espace de vie avec nos <strong>pergolas bioclimatiques en aluminium</strong>. Nos installateurs certifiés RGE s'occupent de tout.</p><p>Le coût d'installation est estimé à <strong>${avg}</strong>. Optimisez l'ombre et la lumière grâce aux lames orientables motorisées.</p>`,
        `<p class="mb-4">Profitez de votre extérieur en toute saison à <strong>${c}</strong>. L'installation d'une pergola bioclimatique adossée ou autoportée vous protège du soleil et des intempéries.</p><p>Budget estimé : <strong>${avg}</strong>. Nous coordonnons l'ensemble du projet, de la conception 3D à la pose finale.</p>`
      ];
      return intros[hash % intros.length];
    };

    const renderClimateInfo = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const climates = [
        `Dans votre région autour de ${c}, le climat impose souvent des variations rapides de météo. La pergola bioclimatique permet de s'adapter instantanément : lames ouvertes pour la ventilation estivale, fermées et étanches lors des averses, ou légèrement inclinées pour laisser passer la lumière hivernale.`,
        `Le taux d'ensoleillement et les conditions de vent spécifiques à ${c} font de l'aluminium extrudé le matériau le plus durable. Nos pergolas résistent sans problème aux bourrasques et aux forts UV, garantissant une durée de vie de plus de 20 ans sans entretien particulier.`,
        `Que vous soyez exposé plein sud ou dans une zone venteuse près de ${c}, nos structures sont dimensionnées sur-mesure. L'orientation des lames permet de créer un microclimat sur votre terrasse, bloquant l'effet de serre thermique tout en conservant une circulation d'air continue.`
      ];
      return climates[hash % climates.length];
    };

    const renderTimeline = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const timelines = [
        `À ${c}, après validation de votre devis et des métrés définitifs, le délai de fabrication et de livraison est d'environ 6 à 8 semaines. La pose s'effectue généralement en une seule journée par nos équipes expertes locales.`,
        `Nos techniciens intervenant sur ${c} et sa périphérie s'assurent d'un chantier propre et rapide. La structure principale est montée en matinée, suivie de la motorisation et des finitions (leds, stores) l'après-midi. Vous profitez de votre pergola le soir même.`,
        `Pour toute installation à ${c}, nous vous accompagnons également dans les démarches administratives (déclaration préalable de travaux). Une fois le feu vert de l'urbanisme obtenu, l'installation est programmée selon vos disponibilités.`
      ];
      return timelines[hash % timelines.length];
    };

    return {
        meta_title: `Installateur Pergola Bioclimatique à ${city}${postal ? ` (${postal})` : ""} | Devis Gratuit`,
        meta_description: `Conception et installation de pergolas bioclimatiques en aluminium sur mesure à ${city}. Profitez de votre terrasse toute l'année. Devis gratuit en 48h.`,
        hero_title: `Installateur de <span class="text-slate-500">Pergolas Bioclimatiques</span> à ${city}${postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : ""}`,
        hero_badge: regionalInfo.subsidyName,
        intro_html: cityConfig.unique_intro || renderIntro(city, postal, realPrice),
        cta_primary: "Demander une étude 3D et un devis",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip: cityConfig.unique_expert_tip || renderTip(city),
        local_climate_info: renderClimateInfo(city),
        installation_timeline: renderTimeline(city),
    };
}
