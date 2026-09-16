// ========================================
// PERGOLA TAILLES - Prix par dimension
// ========================================

export interface PergolaTaille {
    slug: string;
    taille: string;
    dims: string;
    config: string;
    prix: string;
    description: string;
    points: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    t33: "/images/generated/pergola-hero.png",
    t34: "/images/generated/pergola-realization-1.png",
    t44: "/images/generated/pergola-realization-2.png",
    t46: "/images/generated/pergola-realization-3.png",
};

export const PERGOLA_TAILLES: PergolaTaille[] = [
    {
        slug: "3x3", taille: "3 x 3 m", dims: "3,00 x 3,00 m", config: "Terrasse standard 9 m²", prix: "2 990 € à 4 500 €",
        description: "La pergola 3x3 m (9 m²) est le format le plus vendu : parfait pour une table 6 personnes et quelques transats. Idéal pour les maisons de ville, les pavillons sans grand jardin et les terrasses adossées.",
        points: ["Budget le plus accessible : dès 2 990€", "Idéal pour 4 à 6 personnes", "Pose en 1 jour", "Ne nécessite aucun permis (emprise < 20 m²)"],
        expertTip: "Le 3x3 m est le format qui minimise le coût au m² : les fabricants l'ont optimisé pour le volume. Si votre terrasse fait 9 à 12 m², restez sur du 3x3.",
        image: IMG.t33,
    },
    {
        slug: "3x4", taille: "3 x 4 m", dims: "3,00 x 4,00 m", config: "Terrasse 12 m²", prix: "3 500 € à 5 500 €",
        description: "La pergola 3x4 m offre 12 m² d'ombre : assez pour une table 8 personnes, un salon de jardin complet ou un coin repas + espace détente.",
        points: ["La taille la plus confortable pour une terrasse standard", "Dès 3 500€ pose comprise", "Espace repas + salon de jardin", "Pose en 1 à 2 jours"],
        expertTip: "Si votre table de jardin fait 2,50 m, le 3x4 m est le minimum pour circuler autour sans être gêné par les poteaux. Prévoyez 1 m de dégagement autour de la table.",
        image: IMG.t34,
    },
    {
        slug: "4x4", taille: "4 x 4 m", dims: "4,00 x 4,00 m", config: "Terrasse 16 m²", prix: "4 500 € à 7 500 €",
        description: "Le 4x4 m est le format premium : 16 m² d'espace couvert, assez pour un salon de jardin, une table 10 personnes et des fauteuils. C'est le format des projets de vie extérieure complets.",
        points: ["Le format le plus polyvalent : 16 m²", "Dès 4 500€ selon les options", "Espace repas, salon, coin lecture : tout tient", "Pose en 2 à 3 jours"],
        expertTip: "Au-delà de 4x4 m, vérifiez que votre sol est bien nivelé : une pente de 2% (2 cm par mètre) suffit à compliquer la pose et l'étanchéité des joints avec le sol.",
        image: IMG.t44,
    },
    {
        slug: "4x6", taille: "4 x 6 m", dims: "4,00 x 6,00 m", config: "Grande terrasse 24 m²", prix: "6 000 € à 10 000 €",
        description: "Pour une grande terrasse de 24 m² : la pergola 4x6 m couvre l'équivalent d'une pièce de 24 m², avec un coin repas, un salon et même un espace cuisine d'été. Le format des maisons contemporaines.",
        points: ["Le format des grands projets : 24 m²", "Dès 6 000€ pour le modèle de base", "Coin repas, salon et cuisine d'été", "Pose en 3 à 5 jours"],
        expertTip: "À 24 m², la pergola dépasse le seuil de 20 m² d'emprise : une déclaration préalable de travaux est obligatoire. Mais bonne nouvelle : nos démarches administratives incluses couvrent aussi ce seuil.",
        image: IMG.t46,
    },
];

export function getPergolaTailleBySlug(slug: string): PergolaTaille | undefined {
    return PERGOLA_TAILLES.find((t) => t.slug === slug);
}