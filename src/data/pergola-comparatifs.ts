// ========================================
// PERGOLA COMPARATIFS - 6 comparatifs décisionnels
// ========================================

export interface ComparatifRow {
    critere: string;
    a: string;
    b: string;
}

export interface PergolaComparatif {
    slug: string;
    title: string;
    a: string;
    b: string;
    intro: string;
    rows: ComparatifRow[];
    verdict: string;
    verdictTitle: string;
    prix: string;
    faqs: { question: string; reponse: string }[];
    image: string;
}

const IMG = {
    c1: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2670&auto=format&fit=crop",
    c2: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2670&auto=format&fit=crop",
    c3: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2670&auto=format&fit=crop",
    c4: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
    c5: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2670&auto=format&fit=crop",
    c6: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2670&auto=format&fit=crop",
};

export const PERGOLA_COMPARATIFS: PergolaComparatif[] = [
    {
        slug: "bioclimatique-vs-classique",
        title: "Pergola bioclimatique ou pergola classique ?",
        a: "Bioclimatique",
        b: "Classique (toile ou polycarbonate)",
        intro: "La pergola bioclimatique oriente ses lames pour moduler l'ombre et la lumière, quand la pergola classique offre une couverture fixe. L'écart de prix est significatif : lequel est vraiment utile ?",
        rows: [
            { critere: "Prix 3x3 posé", a: "2 990 à 4 500 €", b: "1 200 à 2 500 €" },
            { critere: "Lames orientables", a: "0° à 140°", b: "Aucune" },
            { critere: "Capteur vent/pluie", a: "Inclus", b: "Absent" },
            { critere: "Gestion de la chaleur", a: "Excellent (lames fermées)", b: "Faible (toile opaque)" },
            { critere: "Lumière naturelle", a: "Oui (lames ouvertes)", b: "Non" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Pour une terrasse exposée sud ou ouest, la bioclimatique se rentabilise : elle abaisse de 4 à 8°C la température sous la pergola et permet d'utiliser la terrasse toute la journée. La classique reste pertinente pour un budget très serré ou une exposition nord.",
        prix: "2 990 € à 4 500 €",
        faqs: [
            { question: "La pergola classique chauffe-t-elle la terrasse ?", reponse: "Oui, une couverture fixe opaque transforme la terrasse en serre. La bioclimatique, elle, laisse passer l'air entre les lames : la chaleur s'évacue naturellement." }
        ],
        image: IMG.c1,
    },
    {
        slug: "adossee-vs-autoportee",
        title: "Pergola adossée ou autoportée ?",
        a: "Adossée",
        b: "Autoportée",
        intro: "La pergola adossée s'appuie sur la façade, l'autoportée repose sur quatre piliers. Prix, faisabilité, usage : le choix dépend de votre terrasse et de vos envies.",
        rows: [
            { critere: "Prix 3x3 posé", a: "2 990 à 4 500 €", b: "3 900 à 6 000 €" },
            { critere: "Fixation", a: "Mur + poteaux", b: "4 piliers scellés" },
            { critere: "Largeur max", a: "6 m sans pilier", b: "5 m (piliers renforcés)" },
            { critere: "Emplacement", a: "Contre la maison", b: "Partout" },
            { critere: "Permis", a: "Souvent dispensée", b: "Idem (selon emprise)" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Si votre terrasse jouxte la maison, l'adossee est plus économique et plus simple. Pour un îlot de jardin, une terrasse isolée ou un bord de piscine, l'autoportée est indispensable — et son prix supérieur est justifié par la structure autoporteuse.",
        prix: "2 990 € à 6 000 €",
        faqs: [
            { question: "Peut-on fixer une pergola adossée sur n'importe quel mur ?", reponse: "Parpaing plein, brique, béton : oui. Ossature bois ou brique creuse : une étude de fixation est nécessaire. Le professionnel le vérifie gratuitement avant le devis." }
        ],
        image: IMG.c2,
    },
    {
        slug: "brustor-vs-solisysteme",
        title: "Brustor ou Solisysteme : quelle pergola choisir ?",
        a: "Brustor",
        b: "Solisysteme",
        intro: "Le duel des leaders : Brustor, le belge premium, face à Solisysteme, le français du rapport qualité/prix. Les deux dominent le marché hexagonal.",
        rows: [
            { critere: "Prix 3x3 posé", a: "3 500 à 5 500 €", b: "2 990 à 4 500 €" },
            { critere: "Garantie structure", a: "10 ans", b: "10 ans" },
            { critere: "Lames", a: "Double paroi", b: "Simple paroi" },
            { critere: "Réseau France", a: "600 installateurs", b: "250 installateurs" },
            { critere: "Options domotique", a: "Très complètes", b: "Standard" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Solisysteme offre le meilleur rapport qualité/prix : 2 990€ pour une pergola complète, c'est 15 à 20% de moins que Brustor pour un usage identique. Brustor justifie son supplément par les lames double paroi et un réseau plus dense — à choisir si la réactivité SAV est votre priorité.",
        prix: "2 990 € à 5 500 €",
        faqs: [
            { question: "Les lames double paroi valent-elles le supplément ?", reponse: "Les lames double paroi (Brustor B600) améliorent l'isolation thermique et la rigidité. Sur une terrasse exposée plein sud, elles réduisent notablement la chaleur sous la pergola." }
        ],
        image: IMG.c3,
    },
    {
        slug: "aluminium-vs-bois",
        title: "Pergola aluminium ou pergola bois ?",
        a: "Aluminium",
        b: "Bois",
        intro: "L'aluminium domine le marché des pergolas bioclimatiques, mais le bois séduit par son cachet. Le match matériau : coût, entretien, durée de vie.",
        rows: [
            { critere: "Prix 3x3 posé", a: "2 990 à 4 500 €", b: "2 500 à 4 000 €" },
            { critere: "Entretien", a: "Aucun", b: "Lasure tous les 2 ans" },
            { critere: "Durée de vie", a: "30 ans+", b: "15 à 20 ans" },
            { critere: "Lames orientables", a: "Standard", b: "Rare" },
            { critere: "Résistance intempéries", a: "Excellente", b: "Sensible à l'humidité" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Pour une pergola bioclimatique, l'aluminium s'impose : seules les lames aluminium orientables sont fiables à long terme, et l'entretien est nul. Le bois reste pertinent pour une pergola classique décorative, à condition d'assumer l'entretien bisannuel.",
        prix: "2 500 € à 4 500 €",
        faqs: [
            { question: "Une pergola bois peut-elle avoir des lames orientables ?", reponse: "Techniquement oui, mais les lames bois gonflent et se déforment avec l'humidité : le mécanisme s'use prématurément. Les lames aluminium sont recommandées." }
        ],
        image: IMG.c4,
    },
    {
        slug: "pergola-vs-store-ban",
        title: "Pergola bioclimatique ou store banne ?",
        a: "Pergola bioclimatique",
        b: "Store banne",
        intro: "Le store banne est la solution historique d'ombrage, la pergola bioclimatique la modernité. Le comparatif pour trancher entre 3 000€ et 1 000€ d'investissement.",
        rows: [
            { critere: "Prix posé", a: "2 990 à 6 000 €", b: "800 à 2 500 €" },
            { critere: "Résistance au vent", a: "Excellente (lames fermées)", b: "Fragile (rentrer dès 40 km/h)" },
            { critere: "Pluie", a: "Abrite de la pluie", b: "Ne protège pas" },
            { critere: "Durée de vie", a: "30 ans", b: "8 à 12 ans" },
            { critere: "Esthétique", a: "Structure intégrée", b: "Toile visible" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Le store banne ne protège ni de la pluie ni du vent et doit être rentré dès 40 km/h. La bioclimatique, elle, offre un vrai espace de vie extérieur. Sur 15 ans, la bioclimatique est rentable : le store est remplacé 1 à 2 fois pendant la durée de vie de la pergola.",
        prix: "2 990 € à 6 000 €",
        faqs: [
            { question: "Le store banne résiste-t-il à la pluie ?", reponse: "Non, un store banne doit être fermé dès les premières gouttes. Les pergolas bioclimatiques, elles, ferment leurs lames et évacuent l'eau par les poteaux." }
        ],
        image: IMG.c5,
    },
    {
        slug: "carport-vs-garage",
        title: "Carport bioclimatique ou garage fermé ?",
        a: "Carport bioclimatique",
        b: "Garage fermé",
        intro: "Pour protéger votre voiture, faut-il construire un garage fermé ou installer un carport bioclimatique ? Prix, usages et valeur immobilière au comparatif.",
        rows: [
            { critere: "Prix 1 place", a: "4 900 à 7 500 €", b: "15 000 à 30 000 €" },
            { critere: "Permis", a: "DP sous 20 m²", b: "Permis de construire" },
            { critere: "Délai", a: "2 à 4 jours", b: "2 à 4 mois" },
            { critere: "Double usage", a: "Abri + terrasse", b: "Voiture uniquement" },
            { critere: "Valeur immobilière", a: "+2 à 3%", b: "+5 à 8%" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Le carport bioclimatique coûte 3 à 5 fois moins cher qu'un garage, s'installe en quelques jours sans permis lourd, et sert aussi de terrasse d'été. Seul un garage fermé protège du vol et du vandalisme : à réserver aux véhicules de collection ou très exposés.",
        prix: "4 900 € à 7 500 €",
        faqs: [
            { question: "Le carport protège-t-il la voiture de la grêle ?", reponse: "Oui : les lames fermées forment un toit rigide qui résiste à la grêle comme à la neige, selon les charges prévues par le fabricant." }
        ],
        image: IMG.c6,
    },
];

export function getPergolaComparatifBySlug(slug: string): PergolaComparatif | undefined {
    return PERGOLA_COMPARATIFS.find((c) => c.slug === slug);
}