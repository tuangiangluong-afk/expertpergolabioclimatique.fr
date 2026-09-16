// ========================================
// PERGOLA TYPES - 4 configurations
// ========================================

export interface PergolaType {
    slug: string;
    name: string;
    shortName: string;
    prix: string;
    duree: string;
    aides: string;
    ideal: string;
    description: string;
    points: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    adossee: "/images/generated/pergola-hero.png",
    autoportee: "/images/generated/pergola-realization-1.png",
    carport: "/images/generated/pergola-realization-2.png",
    toitplat: "/images/generated/pergola-realization-3.png",
};

export const PERGOLA_TYPES: PergolaType[] = [
    {
        slug: "adossee",
        name: "Pergola bioclimatique adossée",
        shortName: "Pergola adossée",
        prix: "2 990 € à 6 000 €",
        duree: "Pose en 1 à 2 jours",
        aides: "TVA 10% (annexe extérieure)",
        ideal: "Terrasse contre la façade, maison avec mur porteur",
        description: "La pergola adossée s'appuie sur la façade de la maison : une rangée de poteaux à l'avant, un rail fixé au mur. C'est la configuration la plus courante et la plus économique, idéale pour prolonger une pièce à vivre vers l'extérieur.",
        points: [
            "La configuration la plus économique : dès 2 990€",
            "Fixation murale sans pont thermique (rail dédié)",
            "Largeur jusqu'à 6 m sans pilier central",
            "Évacuation des eaux de pluie intégrée à la structure",
            "Pose en 1 à 2 jours, sans gros œuvre"
        ],
        expertTip: "Vérifiez la nature du mur avant le devis : une fixation sur mur en parpaings, en brique creuse ou en ossature bois ne nécessite pas les mêmes chevilles. Un bon installateur le vérifie gratuitement.",
        image: IMG.adossee,
    },
    {
        slug: "autoportee",
        name: "Pergola bioclimatique autoportée",
        shortName: "Pergola autoportée",
        prix: "3 900 € à 8 000 €",
        duree: "Pose en 2 à 3 jours",
        aides: "TVA 10%",
        ideal: "Terrasse isolée, jardin, bord de piscine, îlot de cuisson",
        description: "La pergola autoportée repose sur quatre piliers ancrés dans le sol, sans fixation au mur. Elle s'installe en plein jardin, au bord d'une piscine ou sur une terrasse détachée de la maison, et se positionne librement selon le soleil.",
        points: [
            "Indépendante : s'installe n'importe où dans le jardin",
            "Dès 3 900€ pour un 3x3 m",
            "Ancrage par scellement ou dalle béton (selon le sol)",
            "Orientation libre selon l'exposition au soleil",
            "Options : stores latéraux, LED, chauffage"
        ],
        expertTip: "Pour une autoportée, prévoyez une dalle béton de 10 cm minimum avec ferraillage : le scellement direct dans la terre ne garantit pas la tenue au vent d'une structure de 4x4 m.",
        image: IMG.autoportee,
    },
    {
        slug: "carport",
        name: "Carport bioclimatique (abri voiture)",
        shortName: "Carport bioclimatique",
        prix: "4 900 € à 9 500 €",
        duree: "Pose en 2 à 4 jours",
        aides: "TVA 10%",
        ideal: "Abriter 1 à 2 véhicules + espace terrasse",
        description: "Le carport bioclimatique abrite vos véhicules tout en servant de terrasse d'été : lames orientables qui laissent passer la lumière quand le soleil est au zénith et se ferment pour protéger de la pluie ou du soleil bas.",
        points: [
            "Double usage : abri voiture + terrasse couverte",
            "Dès 4 900€ pour un emplacement",
            "Largeur 3 à 6 m, longueur jusqu'à 7 m",
            "Lames orientables : ombre ou lumière à la demande",
            "Pas de permis de construire sous 20 m² d'emprise"
        ],
        expertTip: "Un carport 2 places (6x5 m) dépasse souvent 20 m² d'emprise : une déclaration préalable de travaux est alors obligatoire. Nos installateurs incluent les démarches dans le devis.",
        image: IMG.carport,
    },
    {
        slug: "toit-plat",
        name: "Pergola toit plat",
        shortName: "Pergola toit plat",
        prix: "3 200 € à 7 000 €",
        duree: "Pose en 1 à 3 jours",
        aides: "TVA 10%",
        ideal: "Terrasses urbaines, balcons, toits-terrasses",
        description: "La pergola à toit plat couvre la terrasse d'un toit-plat avec des lames orientables ou fixes à faible pente. Très prisée en ville, elle crée un espace extérieur utilisable du printemps à l'automne, même en plein soleil.",
        points: [
            "Adaptée aux terrasses d'appartement et toits-terrasses",
            "Dès 3 200€ pour un 3x3 m",
            "Lames orientables ou pente légère pour l'évacuation",
            "Lestage sur plots possible (sans perçage de l'étanchéité)",
            "Idéal pour lutter contre la chaleur des logements sous les toits"
        ],
        expertTip: "Sur un toit-terrasse, exigez une pose sur plots lestés (et non scellés) : elle préserve l'étanchéité et permet le démontage sans trace en cas de vente du logement.",
        image: IMG.toitplat,
    },
];

export function getPergolaTypeBySlug(slug: string): PergolaType | undefined {
    return PERGOLA_TYPES.find((t) => t.slug === slug);
}