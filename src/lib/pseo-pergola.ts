import type { CityConfig } from "@/lib/db";
import type { PergolaBrand } from "@/data/pergola-brands";
import { composeLocalIntro } from "@/lib/pseo-local";
import { clampTitle, clampDescription } from "@/lib/seo-meta";

// Ensoleillement réel par département — la pergola bioclimatique n'a de sens que selon le climat local
const SOLEIL: Record<string, { heures: string; conseil: string; prix: string }> = {
    "13": { heures: "2 800 h/an", conseil: "Avec l'un des ensoleillements les plus élevés de France, la pergola bioclimatique est un vrai plus : lames fermées au zénith pour rester au frais, ouvertes le soir pour profiter des soirées d'été", prix: "2 990 € – 5 500 €" },
    "06": { heures: "2 700 h/an", conseil: "Le climat méditerranéen impose de protéger la terrasse du soleil dès 11h : les lames orientables réduisent la température de 4 à 8°C sous la pergola", prix: "3 200 € – 6 000 €" },
    "83": { heures: "2 750 h/an", conseil: "Sur la Côte d'Azur, l'orientation sud-ouest est la plus exposée : une pergola bioclimatique avec stores verticaux est recommandée pour les fins de journée", prix: "3 200 € – 6 000 €" },
    "34": { heures: "2 600 h/an", conseil: "Le climat héraultais favorise un usage extérieur quasi toute l'année : la bioclimatique rentabilise son investissement en moins de 3 ans", prix: "2 990 € – 5 500 €" },
    "33": { heures: "2 000 h/an", conseil: "En Gironde, l'alternance soleil/pluie est la spécialité locale : les lames orientables répondent à la fois au soleil brûlant et aux averses imprévues", prix: "2 990 € – 5 500 €" },
    "75": { heures: "1 650 h/an", conseil: "À Paris, la pergola protège surtout des fortes chaleurs estivales et de la pluie : le format adossé sur plots lestés est le plus adapté aux terrasses urbaines", prix: "3 200 € – 6 000 €" },
    "69": { heures: "1 850 h/an", conseil: "Le climat semi-continental lyonnais alterne canicules et orages : les lames bioclimatiques offrent une réponse immédiate aux deux", prix: "2 990 € – 5 500 €" },
    "59": { heures: "1 550 h/an", conseil: "Dans le Nord, la pergola bioclimatique est surtout utile pour prolonger la saison : 3 à 4 semaines d'utilisation en plus par an grâce aux lames orientables", prix: "2 790 € – 5 000 €" },
    "67": { heures: "1 700 h/an", conseil: "En Alsace, les étés sont chauds et orageux : fermez les lames aux premiers signes d'orage, la structure est conçue pour l'évacuation de la pluie", prix: "2 990 € – 5 500 €" },
    "74": { heures: "1 750 h/an", conseil: "En Haute-Savoie, la bioclimatique protège de l'ensoleillement intense d'altitude : prévoyez un renforcement pour la charge de neige en hiver", prix: "3 200 € – 6 000 €" },
};

const DEFAULT_SOLEIL = {
    heures: "1 900 h/an",
    conseil: "Notre réseau d'installateurs certifiés dimensionne votre pergola selon l'orientation exacte de votre terrasse et le climat local, pour un confort maximal toute l'année",
    prix: "2 990 € – 6 000 €",
};

export interface PseoPergolaContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    intro_html: string;
    prix: string;
    local_conseil: string;
    soleil_html: string;
    faqs: { question: string; reponse: string }[];
    expert_tip: string;
    atouts: string[];
}

function hash(str: string): number {
    return str.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

export function getPseoPergolaContent(city: CityConfig, marque: PergolaBrand): PseoPergolaContent {
    const deptCode = (city.department || "").substring(0, 2);
    const local = SOLEIL[deptCode] || DEFAULT_SOLEIL;
    // Communes limitrophes réelles (avec distance), et non la liste de quartiers du maillage.
    const zones = (city.zones || []).map((z) => z.nom);
    const quartierMention = zones.length >= 2
        ? `Nous réalisons l'étude de faisabilité gratuite à ${city.city} et dans les communes voisines : ${zones.slice(0, 3).join(", ")}.`
        : "";
    const h = hash(city.city + marque.slug);

    const meta_title = `Pergola Bioclimatique ${marque.name} à ${city.city}${city.department ? ` (${city.department})` : ""} | Prix & Devis`;
    const meta_description = `Installation d'une pergola bioclimatique ${marque.name} à ${city.city}. ${marque.prix} pose comprise. Lames orientables, capteur vent/pluie. Devis gratuit sous 24h.`;

    const hero_title = `Installation <span class="text-purple-600">Pergola Bioclimatique ${marque.name}</span> à ${city.city}`;

    const soleil_html = `<div class="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-6">
        <p class="text-sm text-slate-700">
            <strong>Ensoleillement à ${city.city} (${local.heures}) :</strong> ${local.conseil}.
        </p>
    </div>`;

    // L'intro est assemblée à partir de six emplacements factuels (voir
    // pseo-local.ts) : l'ancienne version piochait 1 texte sur 4 par hash, ce
    // qui donnait des pages identiques à un mot près sur tout le département.
    const intro_html = composeLocalIntro(
        {
            city: city.city,
            postal: city.postalCode,
            deptCode: city.department,
            region: city.region,
            zones,
            authority: `le service urbanisme de la mairie de ${city.city}`,
        },
        {
            audience: "Les particuliers et les professionnels",
            service: "l'étude, la fourniture et la pose de la pergola bioclimatique",
            norms: "les règles de mise en œuvre des structures aluminium et l'Eurocode 1 (actions du vent et de la neige)",
            document: "la déclaration préalable de travaux et l'attestation de conformité de pose",
            authorityLabel: "le service qui instruit les autorisations d'urbanisme",
            project: "votre projet d'aménagement extérieur",
        },
        {
            openers: [
                (f) => `Pergola bioclimatique ${marque.name} à ${f.city} : notre réseau pose la gamme ${marque.modeles.join(", ")}.`,
                (f) => `À ${f.city}, la pergola ${marque.name} se pose en 1 à 2 jours, avec lames orientables motorisées et capteur vent/pluie automatique.`,
                (f) => `Pour une terrasse à ${f.city}, la gamme ${marque.name} (${marque.gamme}) se décline en ${marque.tailles}.`,
                (f) => `La pergola ${marque.name} à ${f.city} : ${marque.atouts[0].toLowerCase()}`,
                (f) => `Notre réseau installe ${marque.name} à ${f.city}, une fabrication ${marque.origine}.`,
                (f) => `Terrasse à équiper à ${f.city} : l'étude de faisabilité ${marque.name} est réalisée gratuitement sur place.`,
            ],
            middles: [
                () => `Comptez ${marque.prix} pour une pergola ${marque.name} clé en main, fourniture et pose comprises.`,
                (f) => `Le budget à ${f.city} varie selon la taille (${marque.tailles}) et les options : stores verticaux, éclairage, chauffage.`,
                () => `La pose est réalisée par des installateurs formés à la gamme ${marque.name}, avec garantie constructeur sur la structure et la motorisation.`,
                (f) => `Nous prenons en charge la déclaration préalable à ${f.city} lorsque l'emprise au sol la rend nécessaire.`,
                () => `Les lames orientables de la gamme ${marque.name} abaissent la température sous la pergola et se ferment automatiquement en cas de pluie ou de vent.`,
                (f) => `Le devis remis à ${f.city} détaille la fourniture, la pose, les options et les démarches incluses, sans poste forfaitaire caché.`,
            ],
        },
        h,
    );

    const faqs = [
        {
            question: `Quel est le prix d'une pergola bioclimatique ${marque.name} à ${city.city} ?`,
            reponse: `Comptez entre ${marque.prix} pour une pergola clé en main à ${city.city}, fourniture et pose comprises. Le prix varie selon la taille (3x3 à 6x6 m) et les options (stores verticaux, LED, chauffage). Devis gratuit sous 24h.`,
        },
        {
            question: `Faut-il un permis de construire pour une pergola ${marque.name} à ${city.city} ?`,
            reponse: `Sous 20 m² d'emprise au sol, aucune autorisation n'est requise. Au-delà (généralement les pergolas 4x6 m et plus), une déclaration préalable de travaux est nécessaire : elle est incluse dans notre service à ${city.city}.`,
        },
        {
            question: `Combien de temps dure l'installation d'une pergola ${marque.name} à ${city.city} ?`,
            reponse: `La pose par nos installateurs certifiés prend 1 à 2 jours pour une pergola standard, 2 à 3 jours pour une autoportée avec dalle. La fabrication du sur-mesure prend 4 à 8 semaines selon la marque.`,
        },
        {
            question: `Une pergola ${marque.name} est-elle adaptée au climat de ${city.city} ?`,
            reponse: `Oui. L'ensoleillement de ${city.city} atteint ${local.heures} par an : ${local.conseil}. Les lames orientables et le capteur vent/pluie répondent automatiquement aux conditions locales.`,
        },
        {
            question: `Quelle est la durée de vie d'une pergola ${marque.name} ?`,
            reponse: `Une pergola bioclimatique ${marque.name} en aluminium dure 30 ans et plus. La motorisation (Somfy) se remplace tous les 10 à 15 ans, et les lames sont garanties 10 ans contre la déformation.`,
        },
    ];

    return {
        meta_title: clampTitle(meta_title),
        meta_description: clampDescription(meta_description),
        hero_title,
        intro_html,
        prix: marque.prix,
        local_conseil: local.conseil,
        soleil_html,
        faqs,
        expert_tip: marque.expertTip,
        atouts: marque.atouts,
    };
}