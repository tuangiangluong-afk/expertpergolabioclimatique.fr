// ============================================================
// FAITS LOCAUX REELS - fichier genere, ne pas editer a la main.
// Chaque valeur est une mesure, pas une appreciation redactionnelle :
//   climat, rayonnement et vent  -> NASA POWER, climatologie 20 ans
//       (SYN1DEG/MERRA2), base janvier 2001 - decembre 2020.
//   productible photovoltaique   -> JRC PVGIS-SARAH2 / ERA5, 2005-2020,
//       inclinaison et orientation optimales, pertes systeme 14 %.
//   risques et sismicite         -> Georisques, Ministere de la Transition
//       ecologique et de la Cohesion des territoires.
// ============================================================

export interface LocalFacts {
    /** Rayonnement solaire recu par an, kWh/m2 */
    sunKwh: number | null;
    /** Temperature moyenne annuelle, degres C */
    tmean: number | null;
    /** Minimum moyen de janvier, degres C */
    tminJan: number | null;
    /** Precipitations annuelles, mm */
    rainMm: number | null;
    /** Degres-jours unifies base 18, chauffage */
    dju18: number | null;
    /** Direction dominante du vent (rose des vents) */
    windDir: string | null;
    /** Vitesse moyenne du vent, km/h */
    windKmh: number | null;
    /** Productible reel, kWh par kWc et par an (PVGIS) */
    pvYield?: number;
    /** Inclinaison optimale des modules, degres (PVGIS) */
    pvSlope?: number;
    /** Irradiation dans le plan optimal, kWh/m2/an (PVGIS) */
    pvSun?: number;
    /** Risques recenses dans la commune (Georisques) */
    risks?: string[];
    /** Zone de sismicite reglementaire (Georisques) */
    sismicite?: string | null;
}

export const LOCAL_FACTS_SOURCE =
    "NASA POWER (climatologie 20 ans, SYN1DEG/MERRA2) ; JRC PVGIS-SARAH2 (2005-2020) ; Georisques (Ministere de la Transition ecologique)";

export const LOCAL_FACTS: Record<string, LocalFacts> = {
    "agen": { sunKwh: 1380, tmean: 13.5, tminJan: -8.6, rainMm: 679, dju18: 2052, windDir: "ONO", windKmh: 7.7 },
    "aix-en-provence": { sunKwh: 1621, tmean: 14.2, tminJan: -5.9, rainMm: 558, dju18: 1935, windDir: "NNO", windKmh: 10.9 },
    "ajaccio": { sunKwh: 1652, tmean: 16.1, tminJan: -0.2, rainMm: 832, dju18: 1337, windDir: "O", windKmh: 12.0 },
    "albi": { sunKwh: 1421, tmean: 12.8, tminJan: -12.8, rainMm: 694, dju18: 2221, windDir: "NO", windKmh: 9.4 },
    "alfortville": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "amiens": { sunKwh: 1164, tmean: 10.1, tminJan: -11.6, rainMm: 748, dju18: 2885, windDir: "OSO", windKmh: 11.1 },
    "angers": { sunKwh: 1270, tmean: 11.8, tminJan: -10.9, rainMm: 715, dju18: 2361, windDir: "OSO", windKmh: 10.4 },
    "angouleme": { sunKwh: 1334, tmean: 12.7, tminJan: -10.0, rainMm: 766, dju18: 2171, windDir: "O", windKmh: 9.6 },
    "annecy": { sunKwh: 1357, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4 },
    "antibes": { sunKwh: 1569, tmean: 15.6, tminJan: -0.6, rainMm: 704, dju18: 1496, windDir: "E", windKmh: 10.0 },
    "antony": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "arcueil": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "argenteuil": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "asnieres-sur-seine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "aubervilliers": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "auch": { sunKwh: 1396, tmean: 13.6, tminJan: -7.8, rainMm: 777, dju18: 1974, windDir: "ONO", windKmh: 7.5 },
    "aulnay-sous-bois": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "avignon": { sunKwh: 1609, tmean: 13.7, tminJan: -10.3, rainMm: 635, dju18: 2108, windDir: "N", windKmh: 11.2 },
    "bagneux": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "bastia": { sunKwh: 1570, tmean: 16.0, tminJan: -0.8, rainMm: 639, dju18: 1428, windDir: "O", windKmh: 11.3 },
    "bayonne": { sunKwh: 1359, tmean: 13.8, tminJan: -5.1, rainMm: 1066, dju18: 1779, windDir: "O", windKmh: 8.3 },
    "beauvais": { sunKwh: 1164, tmean: 10.3, tminJan: -12.0, rainMm: 715, dju18: 2801, windDir: "OSO", windKmh: 10.8 },
    "besancon": { sunKwh: 1254, tmean: 10.1, tminJan: -12.7, rainMm: 1007, dju18: 2981, windDir: "SO", windKmh: 8.0 },
    "beziers": { sunKwh: 1508, tmean: 13.2, tminJan: -7.8, rainMm: 617, dju18: 2133, windDir: "NO", windKmh: 6.7 },
    "biarritz": { sunKwh: 1359, tmean: 13.8, tminJan: -5.1, rainMm: 1066, dju18: 1779, windDir: "O", windKmh: 8.3 },
    "blois": { sunKwh: 1258, tmean: 11.7, tminJan: -10.4, rainMm: 675, dju18: 2482, windDir: "OSO", windKmh: 10.3 },
    "bondy": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "bordeaux": { sunKwh: 1378, tmean: 13.4, tminJan: -8.4, rainMm: 748, dju18: 1942, windDir: "ONO", windKmh: 6.6 },
    "boulogne-billancourt": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "bourg-la-reine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "bourges": { sunKwh: 1246, tmean: 11.3, tminJan: -9.8, rainMm: 745, dju18: 2571, windDir: "OSO", windKmh: 9.4 },
    "brest": { sunKwh: 1238, tmean: 11.9, tminJan: -3.5, rainMm: 898, dju18: 2209, windDir: "OSO", windKmh: 16.8 },
    "brive-la-gaillarde": { sunKwh: 1334, tmean: 12.3, tminJan: -10.6, rainMm: 788, dju18: 2297, windDir: "OSO", windKmh: 8.7 },
    "bry-sur-marne": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "cachan": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "caen": { sunKwh: 1193, tmean: 10.8, tminJan: -9.3, rainMm: 745, dju18: 2625, windDir: "OSO", windKmh: 13.2 },
    "cagnes-sur-mer": { sunKwh: 1569, tmean: 15.6, tminJan: -0.6, rainMm: 704, dju18: 1496, windDir: "E", windKmh: 10.0 },
    "cahors": { sunKwh: 1386, tmean: 12.7, tminJan: -11.5, rainMm: 719, dju18: 2204, windDir: "O", windKmh: 8.9 },
    "calais": { sunKwh: 1192, tmean: 11.2, tminJan: -4.3, rainMm: 759, dju18: 2470, windDir: "OSO", windKmh: 17.8 },
    "cannes": { sunKwh: 1569, tmean: 15.6, tminJan: -0.6, rainMm: 704, dju18: 1496, windDir: "E", windKmh: 10.0 },
    "castres": { sunKwh: 1421, tmean: 12.3, tminJan: -8.9, rainMm: 664, dju18: 2360, windDir: "NO", windKmh: 9.1 },
    "cergy": { sunKwh: 1164, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "chambery": { sunKwh: 1367, tmean: 10.1, tminJan: -13.1, rainMm: 949, dju18: 2962, windDir: "NO", windKmh: 4.4 },
    "champigny-sur-marne": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "charenton-le-pont": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "chartres": { sunKwh: 1208, tmean: 10.6, tminJan: -11.9, rainMm: 646, dju18: 2729, windDir: "OSO", windKmh: 11.0 },
    "chateauroux": { sunKwh: 1297, tmean: 11.6, tminJan: -9.5, rainMm: 726, dju18: 2499, windDir: "OSO", windKmh: 9.7 },
    "chatou": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "chaville": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "chelles": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "clamart": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "clermont-ferrand": { sunKwh: 1328, tmean: 10.5, tminJan: -15.2, rainMm: 701, dju18: 2853, windDir: "O", windKmh: 8.8 },
    "colmar": { sunKwh: 1197, tmean: 9.9, tminJan: -13.3, rainMm: 847, dju18: 3049, windDir: "OSO", windKmh: 6.3 },
    "colombes": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "courbevoie": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "creteil": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "croissy-sur-seine": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "dax": { sunKwh: 1359, tmean: 13.8, tminJan: -5.1, rainMm: 1066, dju18: 1779, windDir: "O", windKmh: 8.3 },
    "dijon": { sunKwh: 1250, tmean: 9.9, tminJan: -11.2, rainMm: 796, dju18: 2992, windDir: "O", windKmh: 9.4 },
    "dreux": { sunKwh: 1208, tmean: 10.6, tminJan: -11.9, rainMm: 646, dju18: 2729, windDir: "OSO", windKmh: 11.0 },
    "dunkerque": { sunKwh: 1142, tmean: 10.8, tminJan: -7.5, rainMm: 756, dju18: 2621, windDir: "SO", windKmh: 14.3 },
    "epinay-sur-seine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "evreux": { sunKwh: 1168, tmean: 10.7, tminJan: -11.8, rainMm: 664, dju18: 2687, windDir: "OSO", windKmh: 10.9 },
    "evry-courcouronnes": { sunKwh: 1210, tmean: 11.1, tminJan: -12.1, rainMm: 657, dju18: 2610, windDir: "OSO", windKmh: 10.3 },
    "fontenay-aux-roses": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "fontenay-sous-bois": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "garches": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "gentilly": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "grenoble": { sunKwh: 1367, tmean: 8.0, tminJan: -16.4, rainMm: 858, dju18: 3664, windDir: "E", windKmh: 1.6 },
    "gueret": { sunKwh: 1297, tmean: 10.1, tminJan: -12.6, rainMm: 883, dju18: 2926, windDir: "SO", windKmh: 10.1 },
    "houilles": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "issy-les-moulineaux": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "ivry-sur-seine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "joinville-le-pont": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "la-roche-sur-yon": { sunKwh: 1350, tmean: 12.4, tminJan: -8.6, rainMm: 785, dju18: 2126, windDir: "O", windKmh: 11.4 },
    "la-rochelle": { sunKwh: 1350, tmean: 13.5, tminJan: -3.2, rainMm: 748, dju18: 1766, windDir: "ONO", windKmh: 14.8 },
    "le-blanc-mesnil": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "le-havre": { sunKwh: 1168, tmean: 11.7, tminJan: -3.5, rainMm: 803, dju18: 2307, windDir: "OSO", windKmh: 16.5 },
    "le-kremlin-bicetre": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "le-mans": { sunKwh: 1258, tmean: 11.3, tminJan: -10.9, rainMm: 708, dju18: 2513, windDir: "OSO", windKmh: 10.4 },
    "le-perreux-sur-marne": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "le-plessis-robinson": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "le-vesinet": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "levallois-perret": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "lille": { sunKwh: 1134, tmean: 10.4, tminJan: -10.9, rainMm: 730, dju18: 2783, windDir: "SO", windKmh: 11.1 },
    "limoges": { sunKwh: 1334, tmean: 11.2, tminJan: -10.6, rainMm: 869, dju18: 2608, windDir: "SSO", windKmh: 10.2 },
    "lorient": { sunKwh: 1325, tmean: 13.1, tminJan: -1.6, rainMm: 730, dju18: 1834, windDir: "O", windKmh: 17.4 },
    "lyon": { sunKwh: 1367, tmean: 11.4, tminJan: -11.6, rainMm: 843, dju18: 2641, windDir: "ONO", windKmh: 8.2 },
    "maisons-alfort": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "maisons-laffitte": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "malakoff": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "mantes-la-jolie": { sunKwh: 1208, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "marne-la-vallee": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "marnes-la-coquette": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "marseille": { sunKwh: 1621, tmean: 14.2, tminJan: -5.9, rainMm: 558, dju18: 1935, windDir: "NNO", windKmh: 10.9 },
    "massy": { sunKwh: 1210, tmean: 11.1, tminJan: -12.1, rainMm: 657, dju18: 2610, windDir: "OSO", windKmh: 10.3 },
    "meaux": { sunKwh: 1210, tmean: 10.6, tminJan: -12.1, rainMm: 708, dju18: 2755, windDir: "OSO", windKmh: 10.3 },
    "metz": { sunKwh: 1150, tmean: 9.9, tminJan: -15.5, rainMm: 752, dju18: 3034, windDir: "SO", windKmh: 9.6 },
    "mont-de-marsan": { sunKwh: 1363, tmean: 13.7, tminJan: -7.8, rainMm: 829, dju18: 1892, windDir: "O", windKmh: 0.4 },
    "montauban": { sunKwh: 1386, tmean: 13.3, tminJan: -9.9, rainMm: 694, dju18: 2078, windDir: "ONO", windKmh: 8.7 },
    "montpellier": { sunKwh: 1508, tmean: 15.2, tminJan: -2.4, rainMm: 573, dju18: 1604, windDir: "NNO", windKmh: 12.4 },
    "montreuil": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "montrouge": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "mulhouse": { sunKwh: 1254, tmean: 9.9, tminJan: -13.3, rainMm: 847, dju18: 3049, windDir: "OSO", windKmh: 6.3 },
    "nancy": { sunKwh: 1197, tmean: 9.9, tminJan: -12.1, rainMm: 759, dju18: 3030, windDir: "SO", windKmh: 9.3 },
    "nanterre": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "nantes": { sunKwh: 1270, tmean: 11.8, tminJan: -9.8, rainMm: 799, dju18: 2310, windDir: "OSO", windKmh: 10.4 },
    "neuilly-sur-seine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "nice": { sunKwh: 1569, tmean: 16.7, tminJan: 2.5, rainMm: 683, dju18: 1046, windDir: "E", windKmh: 12.8 },
    "nimes": { sunKwh: 1609, tmean: 14.0, tminJan: -9.2, rainMm: 737, dju18: 2046, windDir: "N", windKmh: 9.6 },
    "niort": { sunKwh: 1350, tmean: 11.9, tminJan: -9.5, rainMm: 781, dju18: 2301, windDir: "O", windKmh: 10.3 },
    "nogent-sur-marne": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "noisy-le-grand": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "orleans": { sunKwh: 1258, tmean: 11.2, tminJan: -11.4, rainMm: 664, dju18: 2575, windDir: "OSO", windKmh: 10.3 },
    "orly": { sunKwh: 1210, tmean: 11.1, tminJan: -12.1, rainMm: 657, dju18: 2610, windDir: "OSO", windKmh: 10.3 },
    "palaiseau": { sunKwh: 1210, tmean: 11.1, tminJan: -12.1, rainMm: 657, dju18: 2610, windDir: "OSO", windKmh: 10.3 },
    "paris": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "pau": { sunKwh: 1363, tmean: 13.6, tminJan: -6.5, rainMm: 960, dju18: 1922, windDir: "O", windKmh: 6.8 },
    "pays-de-gex": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6 },
    "perpignan": { sunKwh: 1487, tmean: 15.7, tminJan: -0.8, rainMm: 584, dju18: 1389, windDir: "NNO", windKmh: 15.0 },
    "poissy": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "poitiers": { sunKwh: 1297, tmean: 11.9, tminJan: -9.0, rainMm: 770, dju18: 2391, windDir: "OSO", windKmh: 10.0 },
    "quimper": { sunKwh: 1298, tmean: 12.4, tminJan: -3.0, rainMm: 934, dju18: 2038, windDir: "O", windKmh: 16.5 },
    "reims": { sunKwh: 1149, tmean: 10.4, tminJan: -12.1, rainMm: 741, dju18: 2819, windDir: "SO", windKmh: 10.1 },
    "rennes": { sunKwh: 1208, tmean: 11.6, tminJan: -10.4, rainMm: 708, dju18: 2364, windDir: "OSO", windKmh: 10.8 },
    "rodez": { sunKwh: 1401, tmean: 11.0, tminJan: -12.1, rainMm: 796, dju18: 2714, windDir: "NNO", windKmh: 9.8 },
    "roissy-en-france": { sunKwh: 1164, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "roubaix": { sunKwh: 1134, tmean: 10.4, tminJan: -10.9, rainMm: 730, dju18: 2783, windDir: "SO", windKmh: 11.1 },
    "rouen": { sunKwh: 1168, tmean: 10.4, tminJan: -11.0, rainMm: 748, dju18: 2757, windDir: "OSO", windKmh: 11.3 },
    "rueil-malmaison": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "saint-cloud": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "saint-denis": { sunKwh: 2112, tmean: 21.7, tminJan: 19.2, rainMm: 792, dju18: 0, windDir: "E", windKmh: 16.4 },
    "saint-etienne": { sunKwh: 1367, tmean: 10.2, tminJan: -13.8, rainMm: 694, dju18: 2976, windDir: "ONO", windKmh: 8.5 },
    "saint-exupery": { sunKwh: 1378, tmean: 13.4, tminJan: -9.4, rainMm: 756, dju18: 2012, windDir: "ONO", windKmh: 5.8 },
    "saint-germain-en-laye": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "saint-maur-des-fosses": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "saint-maurice": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "saint-nom-la-breteche": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "sarcelles": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "sartrouville": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "sceaux": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "sevran": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "sevres": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "strasbourg": { sunKwh: 1197, tmean: 10.3, tminJan: -13.0, rainMm: 756, dju18: 2949, windDir: "OSO", windKmh: 6.9 },
    "tarbes": { sunKwh: 1396, tmean: 9.7, tminJan: -12.3, rainMm: 869, dju18: 3044, windDir: "O", windKmh: 6.0 },
    "toulon": { sunKwh: 1621, tmean: 16.1, tminJan: 0.8, rainMm: 562, dju18: 1175, windDir: "NO", windKmh: 18.1 },
    "toulouse": { sunKwh: 1409, tmean: 13.6, tminJan: -7.7, rainMm: 785, dju18: 2016, windDir: "ONO", windKmh: 8.2 },
    "tourcoing": { sunKwh: 1134, tmean: 10.4, tminJan: -10.9, rainMm: 730, dju18: 2783, windDir: "SO", windKmh: 11.1 },
    "tours": { sunKwh: 1258, tmean: 11.6, tminJan: -10.9, rainMm: 697, dju18: 2462, windDir: "OSO", windKmh: 10.3 },
    "troyes": { sunKwh: 1203, tmean: 10.8, tminJan: -11.2, rainMm: 734, dju18: 2741, windDir: "SO", windKmh: 9.8 },
    "tulle": { sunKwh: 1334, tmean: 10.2, tminJan: -14.3, rainMm: 909, dju18: 2908, windDir: "SO", windKmh: 7.1 },
    "valence": { sunKwh: 1468, tmean: 11.6, tminJan: -11.6, rainMm: 781, dju18: 2611, windDir: "N", windKmh: 9.5 },
    "vanves": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "vaucresson": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "versailles": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "ville-davray": { sunKwh: 1210, tmean: 10.8, tminJan: -12.1, rainMm: 672, dju18: 2687, windDir: "OSO", windKmh: 10.6 },
    "villejuif": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "villeurbanne": { sunKwh: 1367, tmean: 11.4, tminJan: -11.6, rainMm: 843, dju18: 2641, windDir: "ONO", windKmh: 8.2 },
    "villiers-sur-marne": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "vincennes": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
    "vitry-sur-seine": { sunKwh: 1210, tmean: 10.9, tminJan: -12.3, rainMm: 661, dju18: 2648, windDir: "OSO", windKmh: 10.5 },
};

/**
 * Faits locaux d'une commune. Accepte indifferemment le slug de la cible
 * national-targets et le slug derive du nom de la commune.
 */
export function getLocalFacts(...candidates: (string | undefined | null)[]): LocalFacts | undefined {
    for (const candidate of candidates) {
        if (!candidate) continue;
        const direct = LOCAL_FACTS[candidate];
        if (direct) return direct;
    }
    return undefined;
}
