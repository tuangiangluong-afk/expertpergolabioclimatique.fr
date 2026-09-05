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
    local_climate_info?: string;
    installation_timeline?: string;
    local_compliance_info?: string;
}

const DEFAULT_REGIONAL = {
    subsidyName: "Garantie Décennale & Devis Gratuit",
    subsidyAmount: "Aluminium extrudé thermolaqué garanti 10 ans",
    avgPrice: "6 000€ – 16 000€"
};

const TIPS = [
        "À {city}, l'orientation des lames perpendiculaires à la façade capte un maximum de luminosité en hiver tout en régulant la chaleur estivale aux heures les plus chaudes.",
        "Nos pergolas bioclimatiques installées à {city} disposent d'un système d'évacuation d'eau pluviale totalement invisible intégré à l'intérieur des poteaux porteurs.",
        "Pour les terrasses exposées aux vents à {city}, l'ajout de stores screens latéraux micro-perforés motorisés crée une protection coupe-vent efficace tout en préservant la vue extérieure.",
        "La motorisation Somfy avec capteurs de pluie et de vent ferme automatiquement les lames dès les premières gouttes pour protéger votre mobilier de jardin à {city}.",
        "Les habitants de {neighborhood_0} optent fréquemment pour l'éclairage LED périphérique à intensité variable pour profiter de leur terrasse lors des soirées d'été.",
        "Pour une surface au sol comprise entre 5 m² et 20 m² à {city}, une simple déclaration préalable de travaux (DP) en mairie suffit sans besoin de permis de construire.",
        "L'aluminium thermolaqué sous labels Qualicoat et Qualimarine garantit une résistance absolue à la corrosion et aux UV sans aucun entretien contraignant à {city}.",
        "Nos poseurs réalisent l'ancrage de la structure sur plots béton ou dalle carrelée en assurant une stabilité certifiée jusqu'à 140 km/h de vent."
];
const INTROS = [
        "<p class=\"mb-4 leading-relaxed\">Vous rêvez de profiter de votre terrasse en toute saison à <strong>{city}{postalMention}</strong> ? La <strong>pergola bioclimatique en aluminium sur mesure</strong> transforme votre espace extérieur en une véritable pièce de vie supplémentaire, ombragée en été et abritée des averses à la mi-saison. {neighborhoodMention}</p><p class=\"mb-4 leading-relaxed\">Grâce à ses lames orientables motorisées de 0° à 135°, vous modulez précisément l'ensoleillement et créez une ventilation naturelle bienfaisante sous la toiture. Le tarif moyen pour une pergola bioclimatique haut de gamme à {city} se situe entre <strong>{avgPrice}</strong> selon les dimensions et les options d'éclairage ou de fermetures latérales.</p><p class=\"leading-relaxed\">Fabriquées en aluminium extrudé français thermolaqué, nos structures sont protégées par une garantie décennale. Contactez nos techniciens conseils pour recevoir votre étude 3D et votre devis gratuit sous 24h.</p>",
        "<p class=\"mb-4 leading-relaxed\">Valorisez votre maison et aménagez votre jardin à <strong>{city}</strong>{deptMention} avec une pergola bioclimatique adossée ou autoportée. Véritable régulateur thermique naturel, elle protège également les baies vitrées de votre salon du rayonnement direct, limitant les surchauffes intérieures en période caniculaire.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} Équipée de capteurs météo intelligents, la toiture s'adapte automatiquement aux aléas du temps pour garder votre mobilier parfaitement au sec. Budget moyen constaté : <strong>{avgPrice}</strong> tout compris.</p><p class=\"leading-relaxed\">Nos artisans poseurs certifiés interviennent avec rigueur pour assurer une fixation solide et une intégration harmonieuse à votre façade. Obtenez votre chiffrage immédiat sans engagement.</p>",
        "<p class=\"mb-4 leading-relaxed\">À <strong>{city}</strong>, créez un espace extérieur chaleureux et contemporain grâce à nos pergolas bioclimatiques motorisées de haute manufacture. {neighborhoodMention}</p><p class=\"mb-4 leading-relaxed\">Personnalisez votre projet selon vos envies : rubans LED blanc chaud ou RGB intégrés, stores zip occultants, parois vitrées coulissantes panoramiques et chauffage infrarouge pour l'hiver. Tarifs indicatifs sur votre commune : <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Nous prenons en charge la constitution complète de votre dossier d'urbanisme en mairie de {city} pour valider votre déclaration préalable en toute conformité.</p>",
        "<p class=\"mb-4 leading-relaxed\">Recherchez-vous un <strong>fabricant et installateur de pergola bioclimatique à {city}{postalMention}</strong> ? Notre réseau réunit des spécialistes de l'aménagement extérieur reconnus pour la qualité de leurs finitions.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} De la prise de mesures initiale au laser jusqu'à la mise en service des télécommandes radio, nous assurons une pose soignée en seulement 1 à 2 jours de chantier. Coût moyen de référence : <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Bénéficiez des conseils avisés de nos experts locaux et recevez une simulation tarifaire détaillée adaptée à la configuration de votre terrasse.</p>",
        "<p class=\"mb-4 leading-relaxed\">Repoussez les limites de votre habitat à <strong>{city}</strong>. La pergola bioclimatique est l'alliance parfaite entre architecture contemporaine, robustesse mécanique et confort thermique haut de gamme.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} Conçue pour résister aux rafales de vent et aux charges de neige de votre département, elle vous offre une tranquillité d'esprit totale au fil des saisons. Le budget moyen observé s'établit entre <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Demandez dès aujourd'hui votre rendez-vous conseil gratuit à domicile et concrétisez votre projet d'aménagement avec nos experts régionaux.</p>"
];

function getExpertTip(city: string, dept: string, neighborhoods: string[]): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const n0 = neighborhoods.length > 0 ? neighborhoods[0] : city;
    const t = TIPS[hash % TIPS.length];
    return t
        .replace(/{city}/g, city)
        .replace(/{dept}/g, dept || "votre département")
        .replace(/{neighborhood_0}/g, n0);
}

function getIntroHtml(city: string, dept: string, neighborhoods: string[], postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";

    const neighborhoodMention = neighborhoods.length >= 2
        ? `Nos artisans et techniciens spécialisés interviennent dans tous les secteurs de la commune : <strong>${neighborhoods.slice(0, 3).join(', ')}</strong> ainsi que dans les localités périphériques.`
        : "Nos spécialistes qualifiés assurent une couverture totale de l'ensemble de votre secteur et de ses environs.";

    const postalMention = postalCode ? ` (${postalCode})` : "";
    const deptMention = dept ? ` (${dept})` : "";

    const t = INTROS[hash % INTROS.length];
    return t
        .replace(/{city}/g, city)
        .replace(/{prep}/g, prep)
        .replace(/{postalMention}/g, postalMention)
        .replace(/{deptMention}/g, deptMention)
        .replace(/{neighborhoodMention}/g, neighborhoodMention)
        .replace(/{avgPrice}/g, avgPrice);
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, department, postalCode, neighborhoods, pricing } = cityConfig;
    const dept = department || "";
    const postal = postalCode || "";
    const quartiers = neighborhoods || [];

    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";
    const postalSpan = postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : "";

    const meta_title = `Installateur Pergola Bioclimatique {city}{postal} | Sur Mesure`
        .replace("{city}", isFrance ? "en France" : city)
        .replace("{postal}", postal ? ` (${postal})` : "");

    const meta_description = `Installation de pergola bioclimatique aluminium à lames orientables motorisées à {city}. Confort thermique 4 saisons. Devis gratuit personnalisé sous 24h.`
        .replace("{city}", city)
        .replace("{price}", realPrice)
        .replace("{prep}", prep);

    const hero_title = `Installateur <span class="text-blue-500">Pergola Bioclimatique</span> {prep} {city}{postalSpan}`
        .replace("{city}", city)
        .replace("{prep}", prep)
        .replace("{postalSpan}", postalSpan);

    const intro_html = getIntroHtml(city, dept, quartiers, postal, realPrice);
    const expert_tip = getExpertTip(city, dept, quartiers);

    return {
        meta_title,
        meta_description,
        hero_title,
        hero_badge: regionalInfo.subsidyName,
        intro_html,
        cta_primary: "Configurer ma pergola sur mesure",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip,
        local_climate_info: expert_tip,
        installation_timeline: "Intervention sous 24h à 48h",
        local_compliance_info: regionalInfo.subsidyAmount
    };
}
