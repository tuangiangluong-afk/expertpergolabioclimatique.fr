export interface PergolaOperator {
  slug: string;
  name: string;
  tagline: string;
  type: "Fabricant Concepteur" | "Réseau Storistes & Menuisiers" | "Fabricant & Réseau Intégré" | "Centrale Direct Usine";
  qualicoatCertified: boolean;
  model: "Réseau de storistes agréés" | "Poseurs intégrés concessionnaire" | "Réseau d'artisans menuisiers locaux" | "Sous-traitance de pose certifiée";
  commissionEstimated: string;
  priceRangeStandard: string;
  priceRangeIntermediaire: string;
  priceRangeLuxeSurMesure: string;
  hardwareBrands: string[];
  ratingValue: number;
  reviewCount: number;
  publishedAt: string;
  updatedAt: string;
  pros: string[];
  cons: string[];
  verdict: string;
  arbitrage: string;
  description: string;
  metaDescription: string;
}

export const PERGOLA_OPERATORS: PergolaOperator[] = [
  {
    slug: "biossun",
    name: "Biossun France",
    tagline: "Pionnier français de la pergola bioclimatique haut de gamme en aluminium recyclable",
    type: "Fabricant Concepteur",
    qualicoatCertified: true,
    model: "Réseau de storistes agréés",
    commissionEstimated: "Marge réseau concessionnaire intégrée (environ 25 à 30%)",
    priceRangeStandard: "3 900 € à 5 800 €",
    priceRangeIntermediaire: "6 500 € à 9 800 €",
    priceRangeLuxeSurMesure: "10 500 € à 17 000 €",
    hardwareBrands: ["Biossun BIO 230", "Biossun BIO 120", "Stores Zipsun"],
    ratingValue: 4.8,
    reviewCount: 2840,
    publishedAt: "2025-10-18",
    updatedAt: "2026-09-22",
    pros: [
      "Fabrication 100% française en Isère avec aluminium 98% recyclé",
      "Lames en forme de S brevetées assurant une étanchéité parfaite et une ventilation optimale",
      "Thermolaquage certifié Qualicoat Classe 2 et Qualimarine (résistance bord de mer)",
      "Capteurs météo pluie et vent de série avec fermeture automatisée"
    ],
    cons: [
      "Positionnement tarifaire premium sur les grandes surfaces",
      "Délais d'usine de 6 à 8 semaines en période estivale",
      "Nombreuses options payantes (rubans LED périphériques, stores zippés)"
    ],
    verdict: "Biossun est la marque française de prestige par excellence : finition irréprochable, excellente résistance aux bourrasques et esthétique architecturale valorisante.",
    arbitrage: "Faire installer une Biossun par un artisan menuisier indépendant agréé permet souvent de négocier l'inclusion gratuite du capteur météo ou du pack LED par rapport au devis standard.",
    description: "Fondée en 2009, Biossun conçoit des pergolas bioclimatiques d'architecte sur-mesure pour villas et terrasses contemporaines partout en France.",
    metaDescription: "Avis Pergola Biossun 2026 : prix modèle BIO 120 et 230, avis clients, étanchéité lames en S et devis comparatif pose comprise."
  },
  {
    slug: "brustor",
    name: "Brustor Réseau Partenaires",
    tagline: "Le géant belge de la protection solaire extérieure et de la pergola à lames orientables",
    type: "Fabricant Concepteur",
    qualicoatCertified: true,
    model: "Réseau de storistes agréés",
    commissionEstimated: "Vente via réseau de storistes certifiés (marge usine + distributeur)",
    priceRangeStandard: "3 500 € à 5 200 €",
    priceRangeIntermediaire: "5 900 € à 8 900 €",
    priceRangeLuxeSurMesure: "9 800 € à 16 500 €",
    hardwareBrands: ["Brustor B200 (XL)", "Brustor B600 (Rétractable)", "Brustor B700"],
    ratingValue: 4.7,
    reviewCount: 3410,
    publishedAt: "2025-11-26",
    updatedAt: "2026-09-24",
    pros: [
      "Le modèle B200 XL est la pergola bioclimatique la plus vendue en Europe",
      "Possibilité de lames rétractables sur le modèle B600 pour dégager totalement le ciel",
      "Motorisation Somfy io haute fiabilité compatible avec toutes les box domotiques",
      "Gouttières intégrées dans les poteaux avec évacuation invisible de l'eau"
    ],
    cons: [
      "Complexité de montage nécessitant impérativement un poseur formé Brustor",
      "Délais de livraison allongés sur les laquages hors nuancier standard",
      "Prix élevé des stores verticaux screen intégrés"
    ],
    verdict: "Brustor représente le standard d'ingénierie le plus robuste du marché européen : une mécanique fluide, une motorisation Somfy pérenne et un SAV très réactif.",
    arbitrage: "Le modèle B200 en dimensions standards (3x3 ou 4x3) offre le meilleur compromis robustesse/coût du marché de la pergola aluminium.",
    description: "Fabricant belge reconnu internationalement pour ses pergolas bioclimatiques, stores bannes et carports aluminium distribués via un dense réseau d'experts.",
    metaDescription: "Avis Pergola Brustor 2026 : prix B200 et B600 rétractable, test motorisation Somfy, avis utilisateurs et comparatif devis."
  },
  {
    slug: "solisysteme",
    name: "Solisysteme Réseau France",
    tagline: "L'inventeur historique de la pergola bioclimatique en 1998, conception et fabrication en Nouvelle-Aquitaine",
    type: "Fabricant Concepteur",
    qualicoatCertified: true,
    model: "Réseau de storistes agréés",
    commissionEstimated: "Distribution exclusive via storistes et menuisiers agréés",
    priceRangeStandard: "2 990 € à 4 800 €",
    priceRangeIntermediaire: "5 200 € à 8 200 €",
    priceRangeLuxeSurMesure: "8 800 € à 14 500 €",
    hardwareBrands: ["Solisysteme Horizon", "Solisysteme Arlequin", "Brise-soleil Sunéo"],
    ratingValue: 4.6,
    reviewCount: 2280,
    publishedAt: "2025-12-14",
    updatedAt: "2026-09-18",
    pros: [
      "Inventeur du concept original de pergola bioclimatique à lames orientables",
      "Gamme Horizon très accessible avec un excellent ratio prix / résistance",
      "Système de modules Arlequin à panneaux coulissants multicolores pour un design unique",
      "Excellente gestion de l'évacuation des eaux pluviales testée en soufflerie"
    ],
    cons: [
      "Réseau de concessionnaires moins omniprésent que Brustor dans certaines régions",
      "Design plus traditionnel sur les profilés d'entrée de gamme",
      "Moins d'options de domotique propriétaire que Renson"
    ],
    verdict: "Solisysteme est la valeur sûre française pour ceux qui veulent la fiabilité de l'inventeur sans payer le surcoût marketing des marques ultra-luxe.",
    arbitrage: "L'entrée de gamme Horizon 3x3 posée à moins de 3 500 € TTC avec TVA réduite à 10% bat la plupart des produits de grande surface de bricolage en durabilité.",
    description: "Basée près de Poitiers, l'entreprise Solisysteme a breveté le principe de pergola à lames aluminium orientables et équipe des milliers de terrasses chaque année.",
    metaDescription: "Avis Solisysteme Pergola Bioclimatique 2026 : prix gamme Horizon, solidité de l'inventeur français, avis clients et devis gratuit."
  },
  {
    slug: "renson",
    name: "Renson Outdoor",
    tagline: "La haute couture de la pergola bioclimatique architecturale avec intégration invisible",
    type: "Fabricant Concepteur",
    qualicoatCertified: true,
    model: "Réseau de storistes agréés",
    commissionEstimated: "Distribution via Renson Ambassadors certifiés (positionnement ultra-luxe)",
    priceRangeStandard: "4 800 € à 7 200 €",
    priceRangeIntermediaire: "7 900 € à 12 500 €",
    priceRangeLuxeSurMesure: "13 500 € à 24 000 €",
    hardwareBrands: ["Renson Camargue", "Renson Skye", "Renson Algarve"],
    ratingValue: 4.9,
    reviewCount: 1950,
    publishedAt: "2026-01-10",
    updatedAt: "2026-09-25",
    pros: [
      "Qualité de finition la plus soignée du marché mondial : zéro vis apparente",
      "Stores Fixscreen étanches au vent (jusqu'à 120 km/h) totalement intégrés aux poteaux",
      "Modèle Skye à lames orientables et rétractables pour une flexibilité lumineuse absolue",
      "Panneaux de verre coulissants et lames de bois décoratives Loggia"
    ],
    cons: [
      "Les tarifs les plus élevés de la catégorie aménagement extérieur",
      "Exige une maçonnerie et des fondations béton parfaites",
      "Coût des pièces détachées et accessoires élevé"
    ],
    verdict: "Renson est la marque de référence pour les résidences contemporaines haut de gamme où chaque détail esthétique compte.",
    arbitrage: "À privilégier pour les projets d'extension de standing où la pergola sert de véritable pièce de vie 3 saisons avec fermetures vitrées.",
    description: "Groupe familial belge spécialisé dans la ventilation et l'outdoor living haut de gamme, primé mondialement pour ses innovations architecturales.",
    metaDescription: "Avis Renson Outdoor 2026 : prix pergola Camargue et Skye rétractable, finitions invisibles, test résistance au vent et devis."
  },
  {
    slug: "gustave-rideau",
    name: "Gustave Rideau Pergolas",
    tagline: "Le n°1 français de la véranda et de la pergola aluminium en commercialisation directe",
    type: "Fabricant & Réseau Intégré",
    qualicoatCertified: true,
    model: "Poseurs intégrés concessionnaire",
    commissionEstimated: "Modèle intégré direct fabricant avec réseau d'agences régionales",
    priceRangeStandard: "3 400 € à 5 100 €",
    priceRangeIntermediaire: "5 600 € à 8 500 €",
    priceRangeLuxeSurMesure: "9 200 € à 15 000 €",
    hardwareBrands: ["Pergola Bioclimatique Bioclimatik", "Pergola Toit Fixe", "Abris de Terrasse"],
    ratingValue: 4.5,
    reviewCount: 4120,
    publishedAt: "2026-02-05",
    updatedAt: "2026-09-20",
    pros: [
      "Fabrication industrielle 100% vendéenne certifiée Origine France Garantie",
      "Prise en charge intégrale : métré, dossier de déclaration en mairie, fabrication et pose",
      "Poseurs salariés de la marque garantissant le respect des normes constructeur",
      "Garantie décennale sur la structure aluminium et thermolaquage garanti jusqu'à 25 ans"
    ],
    cons: [
      "Moins de flexibilité sur les motorisations tierces",
      "Pression commerciale parfois signalée lors des visites à domicile",
      "Tarifs catalogue élevés avant les périodes de promotions saisonnières"
    ],
    verdict: "Gustave Rideau est la solution clé en main rassurante pour les propriétaires qui souhaitent un interlocuteur unique de l'usine jusqu'à la pose sur leur terrasse.",
    arbitrage: "Attendez ou négociez systématiquement les remises foires ou les offres de printemps qui permettent d'économiser 10 à 20% sur le devis initial.",
    description: "Leader vendéen de la menuiserie aluminium extérieure fondé par Gustave Rideau, disposant de plusieurs dizaines d'espaces conseil à travers toute la France.",
    metaDescription: "Avis Pergola Gustave Rideau 2026 : prix modèle Bioclimatik, garantie décennale, avis vérifiés et simulation devis sans engagement."
  },
  {
    slug: "akena-pergolas",
    name: "Akena Pergolas",
    tagline: "Constructeur vendéen de vérandas et pergolas bioclimatiques sur-mesure clé en main",
    type: "Fabricant & Réseau Intégré",
    qualicoatCertified: true,
    model: "Poseurs intégrés concessionnaire",
    commissionEstimated: "Réseau de conseillers et techniciens de pose intégrés",
    priceRangeStandard: "3 300 € à 4 900 €",
    priceRangeIntermediaire: "5 400 € à 8 200 €",
    priceRangeLuxeSurMesure: "8 900 € à 14 200 €",
    hardwareBrands: ["Pergola Bio'Air", "Pergola Air Pur", "Pergola Solaire"],
    ratingValue: 4.4,
    reviewCount: 3670,
    publishedAt: "2026-02-28",
    updatedAt: "2026-09-21",
    pros: [
      "Plus de 40 ans d'expertise dans les structures aluminium extérieures",
      "Option innovante de pergola à toiture mixte : partie lames orientables et partie panneaux solaires",
      "Démarches administratives (déclaration préalable de travaux) prises en charge",
      "Tarification directe sans intermédiaire revendeur"
    ],
    cons: [
      "Délais de pose variables selon les plannings des équipes régionales",
      "Options de stores screen et éclairage LED assez onéreuses",
      "Conditions de garantie dépendantes du contrat d'entretien"
    ],
    verdict: "Akena propose des pergolas bioclimatiques bien conçues avec l'avantage décisif d'un fabricant historique capable de gérer l'intégralité du chantier.",
    arbitrage: "Le modèle Bio'Air adossé à 2 poteaux offre un excellent rapport qualité/prix pour une terrasse standard de 15 à 20 m².",
    description: "Acteur historique de la véranda et de la pergola basé à Dompierre-sur-Yon en Vendée, Akena compte plus de 150 000 réalisations en France.",
    metaDescription: "Avis Akena Pergola 2026 : prix gamme Bio'Air, intégration panneaux solaires, avis clients et devis comparatif gratuit."
  },
  {
    slug: "concept-alu",
    name: "Concept Alu",
    tagline: "Concepteur français de pergolas aluminium évolutives et d'espaces de vie extérieurs",
    type: "Fabricant & Réseau Intégré",
    qualicoatCertified: true,
    model: "Poseurs intégrés concessionnaire",
    commissionEstimated: "Réseau de concessionnaires exclusifs par département",
    priceRangeStandard: "3 600 € à 5 400 €",
    priceRangeIntermediaire: "5 800 € à 8 900 €",
    priceRangeLuxeSurMesure: "9 500 € à 15 500 €",
    hardwareBrands: ["Pergola Evolutiv", "Pergola Gustave", "Stores Screen zip"],
    ratingValue: 4.6,
    reviewCount: 1890,
    publishedAt: "2026-03-15",
    updatedAt: "2026-09-19",
    pros: [
      "Concept 'Evolutiv' permettant d'ajouter ultérieurement des baies vitrées ou stores sans modifier la structure",
      "Brevet d'étanchéité de toiture avec évacuation grand débit dans les poteaux",
      "Éclairage LED d'ambiance intégré en périphérie ou sous les lames",
      "Fabrication française certifiée et thermolaquage Qualilaquiste"
    ],
    cons: [
      "Réseau principalement concentré sur la façade Ouest et le Centre de la France",
      "Délais d'étude technique plus longs pour les formes non rectangulaires",
      "Tarifs premium justifiés par le caractère évolutif"
    ],
    verdict: "Concept Alu est parfait si vous envisagez de transformer votre pergola en jardin d'hiver ou véranda dans quelques années grâce à sa structure renforcée évolutive.",
    arbitrage: "Prévoyez dès l'installation initiale les alimentations électriques pour les futurs stores verticaux afin de limiter les coûts d'évolution.",
    description: "PME industrielle vendéenne reconnue pour ses brevets dans l'extension d'habitat et les pergolas bioclimatiques évolutives.",
    metaDescription: "Avis Pergola Concept Alu 2026 : prix modèle Evolutiv, transformation en véranda, avis vérifiés et devis."
  },
  {
    slug: "mister-menuiserie",
    name: "Mister Menuiserie & Poseurs Réseau",
    tagline: "Le spécialiste de la pergola aluminium en direct usine avec option de pose par artisans agréés",
    type: "Centrale Direct Usine",
    qualicoatCertified: true,
    model: "Sous-traitance de pose certifiée",
    commissionEstimated: "Prix direct usine avec marge de pose sous-traitée forfaitisée",
    priceRangeStandard: "2 200 € à 3 800 €",
    priceRangeIntermediaire: "3 900 € à 6 200 €",
    priceRangeLuxeSurMesure: "6 500 € à 10 500 €",
    hardwareBrands: ["Pergola Bioclimatique Santa Clara", "Pergola Kingston", "Pergola Dallas"],
    ratingValue: 4.3,
    reviewCount: 5240,
    publishedAt: "2026-04-02",
    updatedAt: "2026-09-23",
    pros: [
      "Les tarifs les plus compétitifs de France pour de l'aluminium thermolaqué Qualicoat",
      "Réseau de 150 magasins en France pour voir les modèles en situation réelle",
      "Possibilité de monter la pergola soi-même (kit prêt-à-poser) ou de choisir la pose par un artisan partenaire",
      "Livraison directe à domicile avec visserie inox fournie"
    ],
    cons: [
      "La qualité de la pose dépend de l'artisan local partenaire sélectionné",
      "Lames souvent moins épaisses que sur les gammes Brustor ou Biossun",
      "Assistance SAV principalement gérée à distance"
    ],
    verdict: "Mister Menuiserie est le champion du pouvoir d'achat pour équiper une terrasse sans se ruiner, à condition de faire valider la pose par un artisan consciencieux.",
    arbitrage: "Pour les petits budgets, acheter la structure chez Mister Menuiserie et missionner un maçon/menuisier local pour la pose revient 30 à 40% moins cher qu'une concession.",
    description: "Réseau français de vente d'équipements de menuiserie aluminium pour l'habitat en vente directe fabricant avec option de pose à domicile.",
    metaDescription: "Avis Mister Menuiserie Pergola 2026 : prix direct usine, modèle Santa Clara, avis clients sur la pose et devis en ligne."
  },
  {
    slug: "gaviota",
    name: "Gaviota France",
    tagline: "Concepteur et fabricant européen de systèmes de pergolas bioclimatiques et toiles zippées",
    type: "Fabricant Concepteur",
    qualicoatCertified: true,
    model: "Réseau d'artisans menuisiers locaux",
    commissionEstimated: "Vente aux storistes et assembleurs régionaux indépendants",
    priceRangeStandard: "3 100 € à 4 700 €",
    priceRangeIntermediaire: "5 100 € à 7 800 €",
    priceRangeLuxeSurMesure: "8 200 € à 13 800 €",
    hardwareBrands: ["Gaviota Elite", "Gaviota Zen", "Stores Screen Zip Gaviota"],
    ratingValue: 4.6,
    reviewCount: 1620,
    publishedAt: "2026-04-25",
    updatedAt: "2026-09-17",
    pros: [
      "Composants et profilés aluminium de haute précision industrielle",
      "Système de transmission par chaîne inox ultra-résistant pour l'orientation des lames",
      "Toiles techniques zippées très efficaces contre le vent et les regards",
      "Excellent rapport qualité/prix auprès des menuisiers assembleurs locaux"
    ],
    cons: [
      "Marque moins connue du grand public que Renson ou Brustor",
      "Pas de réseau de boutiques dédiées, distribution B2B",
      "Délais d'assemblage selon l'atelier régional partenaire"
    ],
    verdict: "Gaviota est une marque technique hautement recommandée par les professionnels pour sa robustesse mécanique et son coût maîtrisé.",
    arbitrage: "Demandez à votre menuisier storiste local s'il assemble des profilés Gaviota : c'est un excellent moyen d'obtenir de la qualité pro au tarif direct atelier.",
    description: "Leader international dans la conception de systèmes de protection solaire, pergolas bioclimatiques et motorisations durables.",
    metaDescription: "Avis Pergola Gaviota 2026 : robustesse profilés aluminium, stores verticaux zip, avis storistes et devis d'installation."
  },
  {
    slug: "art-et-fenetres",
    name: "Art & Fenêtres Outdoor",
    tagline: "Réseau national de menuiseries extérieures aluminium labellisées Qualicoat et Qualimarine",
    type: "Réseau Storistes & Menuisiers",
    qualicoatCertified: true,
    model: "Poseurs intégrés concessionnaire",
    commissionEstimated: "Concessionnaires franchisés exclusifs avec showroom",
    priceRangeStandard: "3 700 € à 5 500 €",
    priceRangeIntermediaire: "5 900 € à 9 200 €",
    priceRangeLuxeSurMesure: "9 800 € à 16 000 €",
    hardwareBrands: ["Pergolas Aluminium Art & Fenêtres", "Pergolas Bioclimatiques Motorisées"],
    ratingValue: 4.5,
    reviewCount: 2980,
    publishedAt: "2026-05-18",
    updatedAt: "2026-09-22",
    pros: [
      "Réseau national réputé avec plus de 200 points de vente et showrooms",
      "Contrat d'engagement et charte de pose rigoureuse certifiée Qualibat",
      "Aluminium labellisé Qualicoat et Qualimarine pour une tenue des couleurs garantie 10 ans",
      "Financement personnalisé et accompagnement démarches d'urbanisme"
    ],
    cons: [
      "Prix plus élevé que les artisans isolés en raison des frais de réseau et showroom",
      "Les pergolas ne constituent pas l'activité historique du réseau (fenêtres/portes à l'origine)",
      "Délais de visite technique selon la charge de l'agence locale"
    ],
    verdict: "Art & Fenêtres apporte la sécurité d'une grande enseigne reconnue pour sécuriser son investissement extérieur avec des garanties contractuelles solides.",
    arbitrage: "Intéressant si vous combinez le projet de pergola avec un changement de baies vitrées pour négocier un package global.",
    description: "Réseau national de menuisiers concessionnaires spécialisés dans les ouvertures et aménagements extérieurs en aluminium et PVC.",
    metaDescription: "Avis Pergola Art & Fenêtres 2026 : prix pose comprise, garantie décennale, avis clients et devis en agence."
  },
  {
    slug: "komilfo",
    name: "Komilfo Réseau Storistes",
    tagline: "Le 1er réseau français d'experts indépendants du store, de la pergola et de la fermeture",
    type: "Réseau Storistes & Menuisiers",
    qualicoatCertified: true,
    model: "Réseau de storistes agréés",
    commissionEstimated: "Groupement d'artisans indépendants avec centrale de référencement",
    priceRangeStandard: "3 500 € à 5 300 €",
    priceRangeIntermediaire: "5 700 € à 8 900 €",
    priceRangeLuxeSurMesure: "9 400 € à 15 800 €",
    hardwareBrands: ["Brustor", "Biossun", "Marquises Pergolas", "Stores Screen Komilfo"],
    ratingValue: 4.7,
    reviewCount: 3890,
    publishedAt: "2026-06-11",
    updatedAt: "2026-09-20",
    pros: [
      "Multi-marques : capacité à proposer objectivement Brustor, Biossun ou Marquises selon le budget",
      "Véritables spécialistes de la protection solaire et de la gestion thermique de terrasse",
      "Équipes de pose formées en interne aux spécificités du store et de la pergola bioclimatique",
      "Service après-vente de proximité réactif avec pièces d'origine"
    ],
    cons: [
      "Tarifs dépendant de la marque sélectionnée dans leur catalogue",
      "Tous les magasins n'ont pas les mêmes modèles exposés en showroom",
      "Délais de livraison constructeur incompressibles en haute saison"
    ],
    verdict: "Komilfo est l'un des meilleurs réseaux pour comparer plusieurs marques sous le même toit avec le conseil de véritables experts de la protection solaire.",
    arbitrage: "Faites chiffrer 2 marques différentes (ex: Brustor vs Marquises) par le même conseiller Komilfo pour trouver le meilleur compromis technique.",
    description: "Réseau de plus de 100 adhérents storistes indépendants en France reconnus pour leur savoir-faire technique en aménagement de terrasse.",
    metaDescription: "Avis Komilfo Pergola Bioclimatique 2026 : comparatif multi-marques Brustor/Biossun, prix posé, avis clients et devis gratuit."
  },
  {
    slug: "artisans-menuisiers-locaux",
    name: "Réseau Artisans Menuisiers Qualibat",
    tagline: "Les artisans menuisiers et métalliers indépendants qualifiés Qualibat de votre département",
    type: "Réseau Storistes & Menuisiers",
    qualicoatCertified: true,
    model: "Réseau d'artisans menuisiers locaux",
    commissionEstimated: "Facturation directe artisan sans marge d'intermédiaire commercial",
    priceRangeStandard: "2 700 € à 4 200 €",
    priceRangeIntermediaire: "4 500 € à 7 200 €",
    priceRangeLuxeSurMesure: "7 500 € à 12 500 €",
    hardwareBrands: ["Solisysteme", "Gaviota", "Profils Systèmes", "Sepalumic", "Somfy"],
    ratingValue: 4.8,
    reviewCount: 3150,
    publishedAt: "2026-07-04",
    updatedAt: "2026-09-24",
    pros: [
      "Tarifs les plus compétitifs du marché pour des profilés aluminium de premier ordre",
      "Contact direct avec l'artisan qui réalise lui-même le métré et la pose",
      "Adaptation parfaite aux contraintes du bâti existant (murs non d'équerre, dénivelés)",
      "Garantie décennale et assurance responsabilité civile professionnelle vérifiée"
    ],
    cons: [
      "Disponibilité parfois limitée selon le carnet de commandes de l'artisan local",
      "Pas de showroom luxueux (les économies sont répercutées sur le devis)",
      "Nécessite de comparer 2 ou 3 artisans pour trouver le bon interlocuteur"
    ],
    verdict: "L'artisan menuisier indépendant qualifié Qualibat offre la meilleure rentabilité : vous payez le juste prix du matériel et de la main-d'œuvre sans financer de coûteuses campagnes publicitaires.",
    arbitrage: "C'est l'option recommandée pour économiser de 1 000 € à 3 000 € sur votre pergola bioclimatique tout en faisant travailler l'économie locale.",
    description: "Regroupement des professionnels artisans menuisiers, storistes et métalliers indépendants qualifiés Qualibat pour l'installation de pergolas en France.",
    metaDescription: "Artisans Menuisiers Pergola Bioclimatique 2026 : devis direct artisan Qualibat, prix d'usine Solisysteme/Gaviota et garantie décennale."
  }
];

export function getPergolaOperatorBySlug(slug: string): PergolaOperator | undefined {
  return PERGOLA_OPERATORS.find((op) => op.slug === slug);
}
