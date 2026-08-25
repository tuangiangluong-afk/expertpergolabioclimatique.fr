import type { CityConfig } from "@/lib/db";
import type { PergolaBrand } from "@/data/pergola-brands";

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
    const quartiers = city.neighborhoods || [];
    const quartierMention = quartiers.length >= 2
        ? `Nous réalisons l'étude de faisabilité gratuite dans tous les secteurs : ${quartiers.slice(0, 3).join(", ")} et communes environnantes.`
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

    const intros = [
        `<p class="mb-4">
            Vous cherchez un installateur certifié pour une <strong>pergola bioclimatique ${marque.name}</strong> à <strong>${city.city}${city.postalCode ? ` (${city.postalCode})` : ""}</strong> ?
            Notre réseau pose la gamme ${marque.modeles.join(", ")} avec lames orientables motorisées, capteur vent/pluie et démarches administratives incluses.
            ${quartierMention}
        </p>
        <p>
            Comptez entre <strong>${marque.prix}</strong> pour une pergola ${marque.name} clé en main à ${city.city}, fourniture et pose comprises.
            Devis gratuit et personnalisé sous 24h, étude de faisabilité offerte.
        </p>`,
        `<p class="mb-4">
            Transformez votre terrasse à <strong>${city.city}</strong> en véritable pièce de vie extérieure avec une <strong>pergola bioclimatique ${marque.name}</strong> : lames orientables de 0° à 140°, protection contre le soleil, la pluie et le vent.
            ${quartierMention}
        </p>
        <p>
            Budget indicatif à ${city.city} : <strong>${marque.prix}</strong> pose comprise.
            Nous gérons la déclaration préalable et l'installation complète.
        </p>`,
        `<p class="mb-4">
            Fini la terrasse inutilisable l'été à <strong>${city.city}</strong> : la <strong>pergola bioclimatique ${marque.name}</strong> abaisse la température de 4 à 8°C sous les lames fermées et laisse passer la lumière quand elles sont ouvertes.
            ${quartierMention}
        </p>
        <p>
            Comptez <strong>${marque.prix}</strong> pour une pergola ${marque.name} clé en main à ${city.city}. Devis gratuit, sans engagement, sous 24h.
        </p>`,
        `<p class="mb-4">
            La <strong>pergola bioclimatique ${marque.name}</strong> à <strong>${city.city}</strong> : ${marque.atouts[0].toLowerCase()}. Pose en 1 à 2 jours par nos installateurs certifiés, avec garantie constructeur.
            ${quartierMention}
        </p>
        <p>
            Budget à prévoir à ${city.city} : <strong>${marque.prix}</strong> fourniture et pose comprises.
        </p>`,
    ];

    const intro_html = intros[h % intros.length];

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
        meta_title,
        meta_description,
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