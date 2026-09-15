import { CityConfig } from "@/lib/db";

export const NATIONAL_CONFIG: CityConfig = {
    slug: "home",
    domain: "expertpergolabioclimatique.fr",
    name: "Expert Pergola Bioclimatique",
    city: "France",
    phoneNumber: "01 84 80 00 00",
    email: "contact@expertpergolabioclimatique.fr",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    description: "Le réseau n°1 d'installateurs de pergolas bioclimatiques en France. Devis gratuit et techniciens certifiés RGE.",
    meta: {
        title: "Expert Pergola Bioclimatique | Conception & Pose Sur-Mesure",
        description: "Installation de pergolas bioclimatiques sur mesure dans toute la France. Devis gratuit en 24h. Lames orientables motorisées, matériaux premium et garantie décennale."
    },
    features: [
        "Conception Sur-Mesure",
        "Devis Gratuit sous 24h",
        "Lames Orientables Motorisées",
        "Installateurs Certifiés"
    ],
    pricing: {
        base: "Sur Devis",
        description: "Devis gratuit personnalisé selon vos dimensions et le climat local"
    },
    hospitals: [],
    stations: [],
    neighborhoods: [],
    points_of_interest: {
        hotels: [],
        nightlife: [],
        monuments: [],
        parking_difficulty: "N/A"
    }
};
