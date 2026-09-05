import Link from "next/link";
import { CheckCircle, ShieldCheck, Clock, Award, Euro, ArrowRight, ChevronRight, FileText, Landmark, Building2 } from "lucide-react";
import type { CityConfig } from "@/lib/db";

interface LocalAeoSectionProps {
    site: CityConfig;
}

const pricingMatrix = [{"name": "Pergola Adossée 3x3m (Lames manuelles/éco)", "usage": "Terrasse standard petit espace", "price": "4 800€ - 7 200€", "aid": "Garantie Décennale", "net": "Dès 4 800€"}, {"name": "Pergola Motorisée 4x3m (Somfy & LED)", "usage": "Format idéal salon de jardin 4-6 pers.", "price": "7 500€ - 11 500€", "aid": "Aluminium Qualicoat", "net": "Dès 7 500€"}, {"name": "Pergola Grande Dimension 6x4m", "usage": "Terrasse spacieuse & îlot autoporté", "price": "12 000€ - 18 500€", "aid": "Fabrication sur mesure", "net": "Dès 12 000€"}, {"name": "Store zip latéral motorisé (3m)", "usage": "Protection vent, soleil rasant & vis-à-vis", "price": "1 200€ - 1 800€", "aid": "Toile Serge Ferrari", "net": "Sur mesure"}];
const steps = [{"title": "Étude d'implantation & Vue 3D", "desc": "Relevé des cotes de terrasse, analyse des ombrages et simulation photoréaliste de votre future pergola."}, {"title": "Déclaration préalable en Mairie de {city}", "desc": "Préparation complète des pièces graphiques (plans de masse et d'élévation) pour validation municipale."}, {"title": "Fabrication sur mesure en usine", "desc": "Usinage de précision des profilés aluminium extrudés et thermolaquage haute durabilité."}, {"title": "Pose & Paramétrage des capteurs météo", "desc": "Ancrage au sol, raccordement électrique étanche, pose des lames et réglage des automatismes Somfy."}];

export default function LocalAeoSection({ site }: LocalAeoSectionProps) {
    const city = site.city;
    const dept = site.department ? ` (${site.department})` : "";
    const neighborhoods = site.neighborhoods || [];
    const neighborhoodsText = neighborhoods.length > 0 
        ? `, notamment dans les quartiers ${neighborhoods.slice(0, 4).join(', ')}` 
        : "";

    return (
        <section className="py-12 bg-slate-50/50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Fil d'Ariane Visuel */}
                <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-500">
                    <Link href="/" className="hover:text-slate-900 transition flex items-center gap-1">
                        Accueil
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-slate-400">Villes</span>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-slate-900">{city}</span>
                </nav>

                {/* Bloc AEO Direct Answer */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-12">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-slate-900 text-white">
                            <FileText size={13} />
                            Pergola Bioclimatique à {city} (2026)
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                            <Clock size={13} /> Données & Tarifs certifiés 2026
                        </span>
                    </div>

                    <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                        <strong>En résumé : </strong>À {city}{dept}, le coût moyen d'une prestation de pergola bioclimatique réalisée par nos artisans qualifiés s'établit entre 6 000€ – 16 000€ avant déduction des éventuelles aides financières. Nos techniciens certifiés interviennent sous 24h à 48h avec garantie décennale.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2">
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Prix estimé</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">6 000€ – 16 000€</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Aides & Primes</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Garantie Décennale & Devis Gratuit</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Délai d'intervention</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Devis 24h, pose rapide</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Garantie & Norme</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Garantie Décennale & RGE</div>
                        </div>
                    </div>
                </div>

                {/* Tableau Comparatif de Prix HTML */}
                <div className="mb-14">
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Grille tarifaire et prestations à {city}
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Coûts indicatifs moyens constatés pour une pose réalisée dans les règles de l'art.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-600 border-b border-slate-200">
                                <tr>
                                    <th className="px-5 py-4">Équipement / Prestation</th>
                                    <th className="px-5 py-4 hidden md:table-cell">Usage conseillé</th>
                                    <th className="px-5 py-4">Coût indicatif</th>
                                    <th className="px-5 py-4">Avantage & Aides</th>
                                    <th className="px-5 py-4 font-bold text-slate-900">Reste à charge</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pricingMatrix.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/60 transition">
                                        <td className="px-5 py-4 font-semibold text-slate-900">{row.name}</td>
                                        <td className="px-5 py-4 text-slate-500 hidden md:table-cell">{row.usage}</td>
                                        <td className="px-5 py-4 text-slate-700 font-medium">{row.price}</td>
                                        <td className="px-5 py-4 text-emerald-700 font-semibold">{row.aid}</td>
                                        <td className="px-5 py-4 font-bold text-slate-900">{row.net}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Guide & Spécificités d'installation à {city} */}
                <div className="mb-14">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Spécificités d'installation & urbanisme à {city}
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Réglementation municipale, exposition au vent et démarches administratives dans votre commune.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Urbanisme & Mairie */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                                    <Landmark size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Urbanisme & Déclaration préalable à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Pour toute pergola bioclimatique adossée ou autoportée dont l'emprise au sol est comprise entre 5 m² et 20 m² à {city}{dept}, une Déclaration Préalable (DP) de travaux doit être déposée auprès du service d'urbanisme de la mairie. Si votre terrain est situé dans le champ de visibilité d'un monument historique ou en zone sauvegardée, l'avis de l'Architecte des Bâtiments de France (ABF) est requis. Nos techniciens montent l'intégralité du dossier administratif avec plans cotés pour obtenir votre arrêté municipal sans tracas.
                            </p>
                        </div>

                        {/* Card 2: Typologie du bâti & Quartiers */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <Building2 size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Typologie des terrasses & Quartiers à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Nos installateurs se déplacent dans tous les secteurs de la commune{neighborhoodsText}. Nous concevons aussi bien des pergolas adossées sur façade isolée (avec scellements chimiques à rupture de pont thermique) que des structures autoportées à 4 poteaux pour abriter un espace lounge près d'une piscine ou au milieu d'un jardin paysager.
                            </p>
                        </div>

                        {/* Card 3: Climat, Performance & Aides */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600">
                                    <ShieldCheck size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Résistance au vent & Climat local à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Nos pergolas sont dimensionnées conformément aux règles Eurocodes pour supporter les charges de neige et les poussées de vent caractéristiques de votre zone géographique. Les profilés en aluminium alliage 6060-T6 et les lames double paroi étanches assurent une évacuation fluide des eaux pluviales jusqu'à 150 mm/h, maintenant votre terrasse propre et abritée même lors d'orages soudains.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Déroulement du chantier en 4 étapes */}
                <div className="mb-14">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Votre projet à {city} en 4 étapes
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Un accompagnement transparent de l'étude préliminaire jusqu'à la garantie de parfait achèvement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white font-black text-sm mb-4">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bannière de Réassurance locale */}
                <div className="rounded-3xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                    <div>
                        <h3 className="text-xl font-bold mb-1">Un projet à {city} ?</h3>
                        <p className="text-slate-300 text-sm">
                            Garantie décennale & devis gratuit sous 24h sans aucun engagement.
                        </p>
                    </div>
                    <a
                        href="#simulateur"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3.5 font-bold hover:bg-slate-100 transition shadow"
                    >
                        <span>Estimer mon projet</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
