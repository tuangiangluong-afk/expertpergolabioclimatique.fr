// ========================================
// NATIONAL TARGETS - 39 HIGH-VALUE ZONES
// Pergola Bioclimatique - Couverture Nationale pSEO (Maximized)
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    price_start: number;
    top_places: string[];
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
    unique_intro?: string;
    unique_expert_tip?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    {
        slug: "paris",
        name: "Paris",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.856, lng: 2.352 },
        price_start: 3500,
        top_places: ["Paris 16","Paris 17","Le Marais","Montmartre"],
        zip: "75000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Paris avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Paris, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "lyon",
        name: "Lyon",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 45.764, lng: 4.835 },
        price_start: 3520,
        top_places: ["Monts d'Or","Presqu'île","Part-Dieu","Confluence"],
        zip: "69000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Lyon avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Lyon résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "marseille",
        name: "Marseille",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.296, lng: 5.369 },
        price_start: 3520,
        top_places: ["Prado","Corniche","Vieux-Port","Euroméditerranée"],
        zip: "13000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Marseille avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Marseille fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "nice",
        name: "Nice",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.71, lng: 7.262 },
        price_start: 3520,
        top_places: ["Promenade des Anglais","Cimiez","Mont Boron","Carré d'Or"],
        zip: "06000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Nice avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Nice fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "bordeaux",
        name: "Bordeaux",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 44.837, lng: -0.579 },
        price_start: 3515,
        top_places: ["Chartrons","Caudéran","Le Bouscat","Talence"],
        zip: "33000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Bordeaux avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Bordeaux résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "toulouse",
        name: "Toulouse",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.604, lng: 1.444 },
        price_start: 3515,
        top_places: ["Capitol","Carmes","Saint-Cyprien","Balma"],
        zip: "31000",
        tier: "BIG5",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Toulouse avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Toulouse fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "cannes",
        name: "Cannes",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.552, lng: 7.017 },
        price_start: 3505,
        top_places: ["La Californie","Croisette","Super Cannes","Mougins"],
        zip: "06400",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Cannes avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Cannes fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "aix-en-provence",
        name: "Aix-en-Provence",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.529, lng: 5.447 },
        price_start: 3500,
        top_places: ["Centre Historique","Puyricard","Les Milles","Tholonet"],
        zip: "13100",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Aix-en-Provence avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Aix-en-Provence fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "antibes",
        name: "Antibes",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.58, lng: 7.125 },
        price_start: 3510,
        top_places: ["Cap d'Antibes","Juan-les-Pins","Biot","Sophia-Antipolis"],
        zip: "06600",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Antibes avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Antibes fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "neuilly-sur-seine",
        name: "Neuilly-sur-Seine",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.884, lng: 2.268 },
        price_start: 3510,
        top_places: ["Saint-James","Sablons","Bagatelle","Ile de la Jatte"],
        zip: "92200",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Neuilly-sur-Seine avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Neuilly-sur-Seine, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "lille",
        name: "Lille",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 50.629, lng: 3.057 },
        price_start: 3500,
        top_places: ["Vieux-Lille","Marcq-en-Barœul","Bondues","Lambersart"],
        zip: "59000",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Lille avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Lille, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "strasbourg",
        name: "Strasbourg",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.573, lng: 7.752 },
        price_start: 3500,
        top_places: ["Orangerie","Robertsau","Contades","Neudorf"],
        zip: "67000",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Strasbourg avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Strasbourg, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "nantes",
        name: "Nantes",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 47.218, lng: -1.553 },
        price_start: 3505,
        top_places: ["Procé","Monselet","Saint-Félix","Carquefou"],
        zip: "44000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Nantes avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Nantes résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "rennes",
        name: "Rennes",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.117, lng: -1.677 },
        price_start: 3505,
        top_places: ["Thabor","Sévigné","Saint-Grégoire","Cesson-Sévigné"],
        zip: "35000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Rennes avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Rennes, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "montpellier",
        name: "Montpellier",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.611, lng: 3.877 },
        price_start: 3505,
        top_places: ["Port Marianne","Aiguelongue","Castelnau-le-Lez","Lattes"],
        zip: "34000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Montpellier avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Montpellier fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "annecy",
        name: "Annecy",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 45.899, lng: 6.129 },
        price_start: 3505,
        top_places: ["Annecy-le-Vieux","Veyrier-du-Lac","Sevrier","Pringy"],
        zip: "74000",
        tier: "GOLDEN",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Annecy avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Annecy résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "toulon",
        name: "Toulon",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.124, lng: 5.928 },
        price_start: 3505,
        top_places: ["Mourillon","Le Mont Faron","Cap Brun","Siblas"],
        zip: "83000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Toulon avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Toulon fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "avignon",
        name: "Avignon",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.949, lng: 4.805 },
        price_start: 3510,
        top_places: ["Palais des Papes","Villeneuve-lès-Avignon","Le Pontet","Montfavet"],
        zip: "84000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Avignon avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Avignon fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "reims",
        name: "Reims",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 49.258, lng: 4.031 },
        price_start: 3500,
        top_places: ["Cathédrale","Cormontreuil","Tinqueux","Bétheny"],
        zip: "51100",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Reims avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Reims, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "dijon",
        name: "Dijon",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 47.322, lng: 5.041 },
        price_start: 3500,
        top_places: ["Centre Historique","Toison d'Or","Fontaine-lès-Dijon","Talant"],
        zip: "21000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Dijon avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Dijon résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "rouen",
        name: "Rouen",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 49.443, lng: 1.099 },
        price_start: 3500,
        top_places: ["Rive Droite","Mont-Saint-Aignan","Bois-Guillaume","Sotteville"],
        zip: "76000",
        tier: "HUB",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Rouen avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Rouen, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "roissy-en-france",
        name: "Roissy-en-France",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 49.009, lng: 2.547 },
        price_start: 3505,
        top_places: ["Tremblay-en-France","Villepinte","Goussainville","Louvres"],
        zip: "95700",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Roissy-en-France avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Roissy-en-France, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "orly",
        name: "Orly",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.726, lng: 2.365 },
        price_start: 3520,
        top_places: ["Thiais","Rungis","Choisy-le-Roi","Athis-Mons"],
        zip: "94310",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Orly avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Orly, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "beauvais",
        name: "Beauvais",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 49.455, lng: 2.113 },
        price_start: 3515,
        top_places: ["Centre-Ville","Tillé","Allonne","Voisinlieu"],
        zip: "60000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Beauvais avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Beauvais, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "saint-exupery",
        name: "Saint-Exupéry",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 45.723, lng: 5.081 },
        price_start: 3515,
        top_places: ["Saint-Laurent-de-Mure","Genas","Meyzieu","Pusignan"],
        zip: "69125",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Saint-Exupéry avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Saint-Exupéry résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "cagnes-sur-mer",
        name: "Cagnes-sur-Mer",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.666, lng: 7.215 },
        price_start: 3520,
        top_places: ["Cros-de-Cagnes","Saint-Laurent-du-Var","Villeneuve-Loubet","La Colle-sur-Loup"],
        zip: "06800",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Cagnes-sur-Mer avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Cagnes-sur-Mer fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "pays-de-gex",
        name: "Pays de Gex",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 46.238, lng: 6.109 },
        price_start: 3505,
        top_places: ["Ferney-Voltaire","Divonne-les-Bains","Saint-Genis-Pouilly","Gex"],
        zip: "01210",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Pays de Gex avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Pays de Gex résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "mulhouse",
        name: "Mulhouse",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 47.59, lng: 7.529 },
        price_start: 3515,
        top_places: ["Saint-Louis","Rixheim","Kingersheim","Wittenheim"],
        zip: "68100",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Mulhouse avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Mulhouse résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "marne-la-vallee",
        name: "Marne-la-Vallée",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 48.876, lng: 2.779 },
        price_start: 3500,
        top_places: ["Chessy","Serris","Bussy-Saint-Georges","Val d'Europe"],
        zip: "77700",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Marne-la-Vallée avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Dans la région de Marne-la-Vallée, une pergola bioclimatique équipée de capteurs de pluie et de neige permet de fermer automatiquement les lames pour protéger votre mobilier de jardin des intempéries."
    },
    {
        slug: "pau",
        name: "Pau",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.295, lng: -0.37 },
        price_start: 3515,
        top_places: ["Centre-Ville","Trespoey","Billère","Lons"],
        zip: "64000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Pau avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Pau fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "bayonne",
        name: "Bayonne",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.492, lng: -1.474 },
        price_start: 3510,
        top_places: ["Grand Bayonne","Petit Bayonne","Anglet","Saint-Esprit"],
        zip: "64100",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Bayonne avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Bayonne fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "biarritz",
        name: "Biarritz",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.483, lng: -1.558 },
        price_start: 3515,
        top_places: ["Côte des Basques","Milady","Saint-Charles","La Négresse"],
        zip: "64200",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Biarritz avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Biarritz fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "tarbes",
        name: "Tarbes",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.232, lng: 0.076 },
        price_start: 3505,
        top_places: ["Centre-Ville","Ormeau","Aureilhan","Laloubère"],
        zip: "65000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Tarbes avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Tarbes fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "agen",
        name: "Agen",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 44.203, lng: 0.616 },
        price_start: 3520,
        top_places: ["Centre-Ville","Ermitage","Le Passage","Boé"],
        zip: "47000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Agen avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Agen résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "montauban",
        name: "Montauban",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 44.015, lng: 1.35 },
        price_start: 3520,
        top_places: ["Centre Historique","Villebourbon","Saint-Martial","Sapiac"],
        zip: "82000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Montauban avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Nos pergolas installées à Montauban résistent à des vents allant jusqu'à 120 km/h, offrant une sécurité totale pour votre aménagement extérieur."
    },
    {
        slug: "albi",
        name: "Albi",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.928, lng: 2.148 },
        price_start: 3520,
        top_places: ["Centre Historique","Leuc","Saint-Juéry","Lescure-d'Albigeois"],
        zip: "81000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Albi avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Albi fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "castres",
        name: "Castres",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.606, lng: 2.24 },
        price_start: 3510,
        top_places: ["Lameilhé","Aillot","Burlats","Lagarrigue"],
        zip: "81100",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Castres avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Castres fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "mont-de-marsan",
        name: "Mont-de-Marsan",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.89, lng: -0.5 },
        price_start: 3520,
        top_places: ["Centre-Ville","Saint-Médard","Saint-Jean-d'Août","Saint-Pierre-du-Mont"],
        zip: "40000",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Mont-de-Marsan avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Mont-de-Marsan fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
    {
        slug: "dax",
        name: "Dax",
        heroTitle: "Pergola Bioclimatique",
        geo: { lat: 43.71, lng: -1.05 },
        price_start: 3515,
        top_places: ["Centre-Ville","Saint-Vincent-de-Paul","Narrosse","Saint-Paul-lès-Dax"],
        zip: "40100",
        tier: "STRATEGIC",
        heroImage: "/images/generated/pergola-hero.png",
        unique_intro: "Aménagez votre terrasse à Dax avec nos pergolas bioclimatiques sur mesure en aluminium. Profitez de votre espace extérieur toute l'année en régulant naturellement la température et l'ensoleillement grâce aux lames orientables motorisées.",
        unique_expert_tip: "Le fort ensoleillement à Dax fait de la pergola bioclimatique un investissement parfait pour créer une ventilation naturelle sans subir la chaleur étouffante estivale."
    },
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const isPerSquareMeter = false;
    const priceDisplay = "€" + target.price_start + (isPerSquareMeter ? "/m²" : "");
    const priceDesc = "Devis et Déplacement gratuits";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} ${target.name}`,
        domain: `${target.slug}.localhost`, // rewrite target
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: target.zip.substring(0, 2),
        region: "France",
        description: `${target.heroTitle} ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Devis Gratuit",
            "Artisans Qualifiés",
            "Intervention Rapide"
        ],
        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,
        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "Variable"
        },
        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },
        phoneNumber: "01 84 80 00 00",
        email: "contact@expertpergolabioclimatique.fr",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} ${target.name} | ${priceDisplay}`,
            description: `${target.heroTitle} ${target.name} ${target.zip}.`
        },
        unique_intro: target.unique_intro,
        unique_expert_tip: target.unique_expert_tip
    };
}
