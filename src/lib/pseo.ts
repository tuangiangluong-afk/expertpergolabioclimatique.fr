import type { CityConfig } from "@/lib/db";
import { departementFromPostal, ventForDepartement, type Departement } from "@/data/fr-departements";
import { composeLocalIntro } from "@/lib/pseo-local";
import { clampTitle, clampDescription } from "@/lib/seo-meta";
import { getLocalFacts, type LocalFacts } from "@/data/local-facts";

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
    /** Faits locaux vérifiables, affichés en bloc sur la page ville */
    local_facts?: { label: string; value: string }[];
    /** Contrainte technique locale (vent, neige, salinité) */
    local_risk_factor?: string;
}

const PRICE_RANGE = "400 € – 850 €/m² posée";
const GUARANTEE = "Garantie de 10 ans sur la structure";

// ========================================
// CONTEXTE LOCAL RÉEL
// ========================================
interface LocalContext {
    /** Slug de la commune, sert à retrouver ses mesures réelles */
    slug: string;
    city: string;
    postal: string;
    /** Communes limitrophes réelles, et non des quartiers inventés */
    zones: string[];
    dept?: Departement;
    deptCode: string;
    deptName: string;
    region: string;
    prefecture: string;
    vent: string;
    littoral: boolean;
    montagne: boolean;
}

function buildContext(c: CityConfig): LocalContext {
    const postal = c.postalCode || "";
    const dept = departementFromPostal(postal);
    return {
        slug: c.slug,
        city: c.city,
        postal,
        // Communes limitrophes réelles (et non la liste de quartiers du maillage)
        zones: (c.zones || []).map((z) => z.nom),
        dept,
        deptCode: dept?.code || c.department || "",
        deptName: dept?.name || "France",
        region: dept?.region || "France",
        prefecture: dept?.prefecture || "",
        vent: ventForDepartement(dept?.code || c.department),
        littoral: !!dept?.littoral,
        montagne: !!dept?.montagne,
    };
}

/** Hash déterministe : deux villes voisines ne doivent pas recevoir le même texte. */
function hash(...parts: (string | number)[]): number {
    const s = parts.join("|");
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
}

const pick = <T,>(arr: T[], h: number): T => arr[h % arr.length];

// ========================================
// PARAGRAPHES D'OUVERTURE (région / préfecture / vent)
// ========================================
const OPENERS: ((c: LocalContext) => string)[] = [
    (c) => `<p class="mb-4 leading-relaxed">Vous souhaitez profiter de votre terrasse ou de votre jardin à <strong>${c.city}${c.postal ? ` (${c.postal})` : ""}</strong> ? La <strong>pergola bioclimatique en aluminium sur mesure</strong> transforme un espace extérieur inutilisé en véritable pièce à vivre. Votre commune se situe en <strong>${c.region}</strong>, où le vent dominant est ${c.vent} — un paramètre qui conditionne directement la structure à choisir.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">À <strong>${c.city}</strong>, département ${c.deptCode ? `${c.deptCode} (${c.deptName})` : c.deptName}, une pergola bioclimatique doit d'abord résister au climat local : ${c.vent}${c.montagne ? ", la charge de neige en zone de montagne" : ""}${c.littoral ? " et l'air salin du littoral" : ""}. C'est ce qui distingue une installation durable d'une structure qui bouge au bout de deux hivers.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Recherchez-vous un <strong>installateur de pergolas bioclimatiques à ${c.city}${c.postal ? ` (${c.postal})` : ""}</strong> ? Nous intervenons sur le département ${c.deptCode}, en <strong>${c.region}</strong>, avec des structures dimensionnées pour le vent local — ${c.vent} — et non des kits standard.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">À <strong>${c.city}</strong>, agrandir la maison sans permis de construire est souvent possible : une pergola bioclimatique est une structure ouverte, démontable, qui ne crée pas de surface habitable close. Elle améliore immédiatement le confort de la terrasse et la valeur du bien, dans un contexte régional bien identifié : ${c.region}.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Équiper votre extérieur à <strong>${c.city}</strong> ? Les lames orientables motorisées régulent l'ensoleillement bien mieux qu'un store banne, qui reste la première cause de déception en zone venteuse. En ${c.region}, où souffle ${c.vent}, la différence est immédiate.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Projet de pergola bioclimatique à <strong>${c.city}</strong> (${c.region}) ? Nous commençons par analyser votre terrain : orientation, masques solaires, exposition au vent ${c.vent}${c.montagne ? ", contrainte de neige" : ""}, avant même de parler d'options.</p>`,
];

// ========================================
// PARAGRAPHES TECHNIQUES (communes limitrophes réelles + prestations)
// ========================================
const MIDDLES: ((c: LocalContext) => string)[] = [
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Nos installateurs interviennent à ${c.city} et dans les communes limitrophes : <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Nos installateurs couvrent la commune et les communes limitrophes."} Lames d'aluminium orientables de 0° à 135°, motorisation et fixation sur mesure.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Interventions régulières à <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Interventions régulières sur la commune."} Évacuation d'eau intégrée dans les piliers, capteurs de pluie et de vent qui replient automatiquement les lames en cas de rafale.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `À ${c.city} comme dans les communes voisines : <strong>${c.zones.slice(0, 3).join(", ")}</strong>,` : `Sur toute la commune de ${c.city},`} nous prenons les mesures sur place puis fabriquons aux dimensions exactes : c'est la seule façon d'éviter les jeux de structure et les infiltrations sur les poutres.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Sur le département ${c.deptCode} : ${c.zones.length >= 2 ? `nous suivons en priorité les secteurs de <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "nous suivons les zones résidentielles de la commune."} Options disponibles : éclairage LED intégré, fermetures latérales vitrées ou stores zip, chauffage infrarouge.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Zones déjà couvertes par nos équipes : <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Déjà installées sur la commune."} Pose en 1 à 2 journées, sans gros œuvre, avec réglage de la motorisation et des capteurs de vent.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Secteurs couverts : <strong>${c.zones.slice(0, 3).join(", ")}</strong> et environs.` : "Couverture communale complète."} Finitions Qualicoat adaptées à l'exposition locale, visserie inox et calfeutrement soigné au raccord de façade.</p>`,
];

// ========================================
// CONTRAINTE TECHNIQUE LOCALE (vent nommé / neige / sel)
// ========================================
function riskParagraph(c: LocalContext): string {
    if (c.vent === "le mistral") {
        return `<p class="leading-relaxed">Contrainte locale : sur le département ${c.deptCode}, <strong>le mistral</strong> peut dépasser 100 km/h en rafales. Il impose une structure dimensionnée pour cette charge, des ancrages sur massif béton et un capteur de vent qui replie les lames automatiquement. Un store banne, dans ces conditions, ne tient pas l'hiver.</p>`;
    }
    if (c.vent === "la tramontane") {
        return `<p class="leading-relaxed">Contrainte locale : la <strong>tramontane</strong>, vent du nord-ouest de la Méditerranée, souffle violemment sur le département ${c.deptCode}. Le dimensionnement mécanique et l'ancrage de la pergola doivent être calculés pour cette charge (Eurocode 1, partie vent), pas repris d'un modèle standard.</p>`;
    }
    if (c.vent === "la bise") {
        return `<p class="leading-relaxed">Contrainte locale : en ${c.region}, <strong>la bise</strong> est un vent froid et sec qui souffle en hiver et au printemps. Il sollicite les mécanismes de motorisation et justifie de choisir un matériel de motorisation robuste, plutôt que les versions d'entrée de gamme.</p>`;
    }
    if (c.vent === "le vent d'autan") {
        return `<p class="leading-relaxed">Contrainte locale : le <strong>vent d'autan</strong>, chaud et humide, souffle fortement en ${c.region} et arrive par rafales soudaines. Les capteurs de vent doivent être correctement calibrés pour réagir avant que la structure ne subisse la charge.</p>`;
    }
    if (c.montagne) {
        return `<p class="leading-relaxed">Contrainte locale : en zone de montagne (${c.deptName}), la <strong>charge de neige</strong> et les cycles gel/dégel sont déterminants. Le dimensionnement de la structure doit être vérifié pour la zone climatique locale, et la poussée de la neige accumulée sur les lames doit pouvoir être évacuée.</p>`;
    }
    if (c.littoral) {
        return `<p class="leading-relaxed">Contrainte locale : le département ${c.deptCode} est exposé au <strong>littoral</strong>. L'air salin attaque les profilés mal protégés et la visserie standard, qui rouille en quelques saisons. Un traitement anticorrosion adapté et une visserie inox sont indispensables sur ${c.city}.</p>`;
    }
    return `<p class="leading-relaxed">Contrainte locale : sur le département ${c.deptCode} (${c.deptName}), les vents dominants sont ${c.vent}. Ils restent modérés la plupart du temps, mais les épisodes de tempête restent le premier motif de déformation observé sur les structures extérieures non dimensionnées.</p>`;
}

// ========================================
// CONSEILS D'EXPERT (ancrés localement, jamais inventés)
// ========================================
/** Énumération à la française : « a, b et c ». */
function joinFr(items: string[]): string {
    if (items.length <= 1) return items.join("");
    return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}

/**
 * Paragraphe bâti sur les mesures réelles de la commune (NASA POWER,
 * climatologie sur vingt ans) : vent dominant, rayonnement reçu, minimum de
 * janvier, précipitations. Deux communes n'ont pas le même climat, donc deux
 * pages n'ont pas le même texte.
 */
function measuredLocalParagraph(c: LocalContext, local: LocalFacts | undefined): string {
    if (!local) return "";
    const items: string[] = [];
    if (local.windDir) {
        items.push(`le vent dominant vient du ${local.windDir} à ${(local.windKmh ?? 0).toLocaleString("fr-FR")} km/h de moyenne`);
    }
    if (local.sunKwh !== null) {
        items.push(`la commune reçoit ${local.sunKwh.toLocaleString("fr-FR")} kWh/m² de rayonnement solaire par an`);
    }
    if (local.tminJan !== null) {
        items.push(`le minimum moyen de janvier y est de ${local.tminJan.toLocaleString("fr-FR")} °C`);
    }
    if (local.rainMm !== null) {
        items.push(`les précipitations cumulées atteignent ${local.rainMm.toLocaleString("fr-FR")} mm par an`);
    }
    if (items.length === 0) return "";
    return `<p class="leading-relaxed">Mesures locales : à ${c.city}, ${joinFr(items)}. Ces valeurs commandent le dimensionnement au vent de la structure (Eurocode 1), le choix des lames et l'évacuation des eaux pluviales.</p>`;
}

const TIPS: ((c: LocalContext) => string)[] = [
    (c) => `À ${c.city}, les lames orientables de 0° à 135° régulent l'ensoleillement et la ventilation : c'est ce qui rend la terrasse utilisable au cœur de l'été, contrairement à un store fixe.`,
    (c) => `L'évacuation d'eau des pergolas bioclimatiques passe par l'intérieur des piliers : aucune goulotte visible, et plus de salissures projetées sur la façade.`,
    (c) => `En ${c.region}, le vent dominant étant ${c.vent}, exigez de connaître la résistance au vent annoncée par le fabricant avant de comparer les prix.`,
    (c) => `Une pergola bioclimatique est une structure ouverte et démontable : dans la majorité des communes, elle ne crée pas de surface habitable close et ne requiert donc pas de permis de construire. Une déclaration préalable peut rester nécessaire selon la commune et le PLU.`,
    (c) => `${c.zones.length ? `À ${c.city}, comme dans les communes voisines : ${c.zones.slice(0, 2).join(" et ")}, ` : `Les habitations de ${c.city} `}choisissent souvent des fermetures latérales vitrées, pour continuer à profiter de la terrasse en demi-saison.`,
    (c) => `Le capteur de vent est l'accessoire le moins spectaculaire et le plus utile : il replie automatiquement les lames avant que la rafale n'atteigne la structure.`,
    (c) => `${c.littoral ? `Sur le littoral du ${c.deptCode}, l'air salin impose une finition anticorrosion et une visserie inox : sans cela, les fixations se dégradent en quelques années.` : `Sur le département ${c.deptCode}, la finition (thermolaquage, visserie inox) pèse plus lourd que la marque sur la durée de vie de la structure.`}`,
    (c) => `Le prix au m² d'une pergola bioclimatique baisse à mesure que la surface augmente, car la motorisation et la structure se répartissent sur une plus grande surface.`,
    (c) => `À ${c.city}, mesurer l'orientation réelle de la terrasse avant de commander évite la principale erreur : une structure magnifique qui ne protège pas du soleil aux heures où vous l'utilisez.`,
    (c) => `${c.montagne ? `En zone de montagne (${c.deptName}), la charge de neige doit être intégrée au dimensionnement : c'est une donnée que seuls les fabricants sérieux communiquent.` : `La ${c.vent.replace("les ", "")} restant le facteur mécanique dominant sur ${c.city}, le nombre de points d'ancrage compte plus que la section visible des piliers.`}`,
    (c) => `L'éclairage LED perimetral intégré se pilote depuis l'intérieur : c'est un vrai gain d'usage, et il est plus économique à la commande qu'après coup en rénovation.`,
    (c) => `Faire fabriquer sur mesure plutôt qu'acheter un kit standard évite les jeux d'assemblage et les points d'infiltration, principaux défauts constatés après quelques saisons.`,
];

// ========================================
// GÉNÉRATEUR
// ========================================
export async function getPseoContent(cityConfig: CityConfig, _targetType: string = "MIXED"): Promise<PseoPageContent> {
    const c = buildContext(cityConfig);
    const h = hash(c.city, c.postal, c.deptCode);

    const realPrice = cityConfig.pricing?.base || PRICE_RANGE;
    const postalSpan = c.postal ? ` <span class="text-slate-400 text-3xl">(${c.postal})</span>` : "";
    const isFrance = c.city.toLowerCase() === "france";

    const metaTitles = [
        `Pergola Bioclimatique ${c.city} (${c.postal}) | Sur Mesure`,
        `Pergola Bioclimatique à ${c.city} | Devis Gratuit ${c.deptName}`,
        `Pergolas Bioclimatiques ${c.city} | ${c.region}`,
        `Installateur Pergola Bioclimatique ${c.city} | Prix 2026`,
        `Pergola Aluminium Sur Mesure ${c.city} (${c.deptCode}) | Devis 24h`,
    ];
    const meta_title = isFrance ? "Expert Pergola Bioclimatique en France | Devis Gratuit" : pick(metaTitles, h);

    const metaDescs = [
        `Pergolas bioclimatiques en aluminium sur mesure à ${c.city} (${c.postal}). Structure dimensionnée pour ${c.vent}, pose par installateurs spécialisés. Devis gratuit.`,
        `Pergola bioclimatique à ${c.city}, en ${c.region} : lames orientables motorisées, capteur de vent et pose en 1 à 2 jours. Prix au m² et devis sous 24h.`,
        `Installez une pergola bioclimatique sur mesure à ${c.city}. Structure adaptée au climat local (${c.vent}), finitions anticorrosion. Devis gratuit et sans engagement.`,
        `Pergola bioclimatique ${c.city} : fabrication sur mesure, motorisation, LED intégrée et fermetures latérales. Estimation gratuite de votre projet.`,
        `Spécialiste des pergolas bioclimatiques à ${c.city} (${c.deptName}) : dimensionnement au vent réel, pose soignée et garantie 10 ans sur la structure.`,
    ];
    const meta_description = pick(metaDescs, h >> 3);

    const hero_title = `Pergola <span class="text-purple-600">Bioclimatique</span> à ${c.city}${postalSpan}`;

    const intro_html = composeLocalIntro(
        {
            city: c.city, postal: c.postal, deptCode: c.deptCode, deptName: c.deptName,
            region: c.region, prefecture: c.prefecture, zones: c.zones,
            authority: "le service urbanisme de votre commune",
            littoral: c.littoral, montagne: c.montagne,
        },
        {
            audience: "Les particuliers et les professionnels",
            service: "la fourniture et la pose d'une pergola bioclimatique sur mesure",
            norms: "les Eurocodes et les règles de l'art applicables aux structures aluminium",
            document: "le dossier de garantie et de notice d'entretien",
            authorityLabel: "l'autorité d'urbanisme compétente",
            project: "votre projet d'aménagement extérieur",
        },
        { openers: OPENERS.map((fn) => () => fn(c)), middles: MIDDLES.map((fn) => () => fn(c)) },
        h,
    ) + riskParagraph(c) + measuredLocalParagraph(c, getLocalFacts(c.slug, c.city));
    const expert_tip = pick(TIPS, h >> 7)(c);

    // --- Mesures réelles de la commune, en tête de bloc ---
    // Vent, ensoleillement, hiver et pluie ne sont plus des appréciations :
    // ce sont les valeurs mesurées par NASA POWER sur vingt ans.
    const local = getLocalFacts(c.slug, c.city);
    const local_facts: { label: string; value: string }[] = [];
    if (local) {
        if (local.windDir) local_facts.push({ label: "Vent dominant", value: `${local.windDir} — ${(local.windKmh ?? 0).toLocaleString("fr-FR")} km/h` });
        if (local.sunKwh !== null) local_facts.push({ label: "Rayonnement solaire", value: `${local.sunKwh.toLocaleString("fr-FR")} kWh/m²/an` });
        if (local.tmean !== null) local_facts.push({ label: "Température moyenne", value: `${local.tmean.toLocaleString("fr-FR")} °C` });
        if (local.tminJan !== null) local_facts.push({ label: "Minimum moyen de janvier", value: `${local.tminJan.toLocaleString("fr-FR")} °C` });
        if (local.rainMm !== null) local_facts.push({ label: "Précipitations annuelles", value: `${local.rainMm.toLocaleString("fr-FR")} mm` });
        if (local.dju18 !== null) local_facts.push({ label: "Degrés-jours base 18", value: `${local.dju18.toLocaleString("fr-FR")} DJU/an` });
    }
    if (c.deptCode) local_facts.push({ label: "Département", value: `${c.deptCode} — ${c.deptName}` });
    if (c.region !== "France") local_facts.push({ label: "Région", value: c.region });
    if (c.prefecture) local_facts.push({ label: "Préfecture", value: c.prefecture });
    if (c.postal) local_facts.push({ label: "Code postal", value: c.postal });
    local_facts.push({ label: "Fourchette de prix", value: PRICE_RANGE });
    if (c.montagne) local_facts.push({ label: "Contrainte", value: "Zone de montagne — charge de neige" });
    if (c.littoral) local_facts.push({ label: "Contrainte", value: "Littoral — air salin" });

    const local_risk_factor = c.vent !== "les vents d'ouest dominants"
        ? `Vent : ${c.vent}`
        : c.montagne
            ? "Charge de neige"
            : c.littoral
                ? "Air salin"
                : "Vents de tempête";

    const timelineOptions = [
        "Pose en 1 à 2 journées",
        "Devis sous 24h, fabrication puis pose en 3 à 5 semaines",
        "Visite technique gratuite sous 48h",
    ];

    return {
        meta_title: clampTitle(meta_title),
        meta_description: clampDescription(meta_description),
        hero_title,
        hero_badge: c.vent !== "les vents d'ouest dominants"
            ? `Structure dimensionnée pour ${c.vent}`
            : "Aluminium sur mesure, garanti 10 ans",
        intro_html,
        cta_primary: pick(
            [
                "Demander mon devis gratuit",
                "Estimer mon projet de pergola",
                "Être rappelé sous 24h",
            ],
            h >> 11
        ),
        pricing_estimated: realPrice,
        regional_subsidy: `Structure dimensionnée pour le climat de ${c.region !== "France" ? c.region : "votre région"}`,
        expert_tip,
        local_climate_info: expert_tip,
        installation_timeline: pick(timelineOptions, h >> 13),
        local_compliance_info: `Dimensionnement au vent conformément à l'Eurocode 1 (EN 1991-1-4) — ${c.region !== "France" ? c.region : "France"}`,
        local_facts,
        local_risk_factor,
    };
}
