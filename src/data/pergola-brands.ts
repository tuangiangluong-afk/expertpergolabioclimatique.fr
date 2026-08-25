// ========================================
// PERGOLA BRANDS - 6 fabricants leaders
// Prix cohérents avec le site : 2 990€ (3x3) à 6 000€ (3x5), options +20-50%
// ========================================

export interface PergolaBrand {
    slug: string;
    name: string;
    origine: string;
    gamme: string;
    tailles: string;
    prix: string;
    modeles: string[];
    atouts: string[];
    limites: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    brustor: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2670&auto=format&fit=crop",
    solisysteme: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2670&auto=format&fit=crop",
    biossun: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2670&auto=format&fit=crop",
    renson: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
    gaviota: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2670&auto=format&fit=crop",
    mister: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2670&auto=format&fit=crop",
};

export const PERGOLA_BRANDS: PergolaBrand[] = [
    {
        slug: "brustor", name: "Brustor", origine: "Belge",
        gamme: "Pergolas bioclimatiques, stores, carports", tailles: "3x3 à 6x6 m", prix: "3 500 € à 8 000 €",
        modeles: ["Brustor B200", "Brustor B600", "Brustor B700"],
        atouts: [
            "Le leader européen de la pergola bioclimatique",
            "Lames aluminium orientables de 0° à 140°, capteur vent/pluie",
            "Fabrication belge, garantie 10 ans sur la structure",
            "Réseau de 600 installateurs agréés en France"
        ],
        limites: ["Haut de gamme : budget à partir de 3 500€", "Délais sur les couleurs personnalisées"],
        expertTip: "Le B200 est la pergola la plus installée en France : excellent rapport qualité/prix, disponible sous 4 à 6 semaines. Pour les projets 4x4 m et plus, passez sur le B600 (lames plus épaisses).",
        image: IMG.brustor,
    },
    {
        slug: "solisysteme", name: "Solisysteme", origine: "Française",
        gamme: "Pergolas bioclimatiques, carports, brise-soleil", tailles: "3x3 à 6x4 m", prix: "2 990 € à 6 500 €",
        modeles: ["Solisysteme Horizon", "Solisysteme Sunéo", "Solisysteme Carport"],
        atouts: [
            "Le champion français du rapport qualité/prix",
            "Lames orientables motorisées, stores verticaux en option",
            "Pose en 1 jour, démarches administratives incluses",
            "Une pergola pour chaque budget : de 2 990€ à 6 500€"
        ],
        limites: ["Moins d'options domotiques que Brustor", "Réseau en croissance (moins dense que Brustor)"],
        expertTip: "L'Horizon 3x3 à 2 990€ est le meilleur rapport qualité/prix du marché : structure aluminium, lames orientables, capteur vent/pluie. Ajoutez les stores verticaux pour un confort extérieur complet.",
        image: IMG.solisysteme,
    },
    {
        slug: "biossun", name: "Biossun", origine: "Française",
        gamme: "Pergolas bioclimatiques design, stores", tailles: "3x3 à 5x5 m", prix: "3 900 € à 8 500 €",
        modeles: ["Biossun Parma", "Biossun Venise", "Biossun Custom"],
        atouts: [
            "Le design comme signature : lignes épurées, finitions soignées",
            "Lames orientables à double paroi pour une isolation thermique",
            "Éclairage LED et chauffage intégrés en option",
            "Projets sur mesure jusqu'à 5x5 m"
        ],
        limites: ["Premium : budget à partir de 3 900€", "Délais de 6 à 10 semaines sur le sur-mesure"],
        expertTip: "Biossun est le choix des architectes : si votre projet est très visible (façade principale, toit-terrasse), l'esthétique Biossun justifie son supplément de prix.",
        image: IMG.biossun,
    },
    {
        slug: "renson", name: "Renson", origine: "Belge",
        gamme: "Pergolas bioclimatiques, brise-soleil, ventilation", tailles: "3x3 à 6x4 m", prix: "3 200 € à 7 500 €",
        modeles: ["Renson Camargue", "Renson Algarve", "Renson Lapure"],
        atouts: [
            "L'innovation au service du confort extérieur",
            "Lames à double paroi avec rupture de pont thermique",
            "Store zip intégré dans la structure en option",
            "Pilotage connecté (app + assistants vocaux)"
        ],
        limites: ["Moins de showrooms physiques en France", "Certaines options domotiques payantes"],
        expertTip: "Si vous voulez une pergola pilotable depuis votre téléphone, c'est Renson qu'il faut choisir : leur application est la plus aboutie du marché.",
        image: IMG.renson,
    },
    {
        slug: "gaviota", name: "Gaviota", origine: "Espagnole",
        gamme: "Pergolas bioclimatiques, stores, volets", tailles: "3x3 à 5x4 m", prix: "2 990 € à 6 900 €",
        modeles: ["Gaviota Sirius", "Gaviota Nilo", "Gaviota Zenith"],
        atouts: [
            "Le savoir-faire espagnol des protections solaires",
            "Très bon rapport qualité/prix sur les pergolas adossées",
            "Motorisation silencieuse Somfy en standard",
            "Disponible rapidement via un réseau d'importateurs"
        ],
        limites: ["SAV moins réactif sur les pièces spécifiques", "Gamme de tailles plus limitée"],
        expertTip: "Pour une pergola adossée à un mur, le Gaviota Sirius est imbattable : son système de fixation murale ne crée aucun pont thermique avec la façade.",
        image: IMG.gaviota,
    },
    {
        slug: "mister-menuiserie", name: "Mister Menuiserie", origine: "Française",
        gamme: "Pergolas bioclimatiques, carports, stores", tailles: "3x3 à 5x4 m", prix: "2 790 € à 5 900 €",
        modeles: ["Mister Bioclimatique", "Mister Aluminium", "Mister Store"],
        atouts: [
            "Le prix le plus accessible du marché français",
            "Pergola bioclimatique complète dès 2 790€",
            "Fabrication française, garantie 5 ans",
            "Pose par un réseau d'artisans locaux"
        ],
        limites: ["Moins d'options domotiques avancées", "Gamme de tailles limitée au-delà de 5x4 m"],
        expertTip: "Mister Menuiserie est le meilleur choix quand le budget est le critère n°1 : 2 790€ pour une pergola bioclimatique complète, c'est 25% de moins que la concurrence.",
        image: IMG.mister,
    },
];

export function getPergolaBrandBySlug(slug: string): PergolaBrand | undefined {
    return PERGOLA_BRANDS.find((b) => b.slug === slug);
}