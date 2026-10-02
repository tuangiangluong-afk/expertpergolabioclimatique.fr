export const revalidate = 86400; // 24h ISR cache
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { slugify } from "@/lib/slugify";
import { getHubConfig } from "@/lib/sites-config";
import { NATIONAL_TARGETS } from "@/config/national-targets";
import { Zap, Award, ArrowRight, Home, CheckCircle, Users, Scale, Sun, FileText, BookOpen, Sparkles, Sliders } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstallationSteps from "@/components/InstallationSteps";
import PricingTable from "@/components/PricingTable";
import FAQSection from "@/components/FAQSection";
import RealizationsGrid from "@/components/RealizationsGrid";
import { ogImageUrl } from "@/lib/seo-meta";

const homeOg = ogImageUrl({
    q: "Pergolas Bioclimatiques Sur-Mesure 2026",
    sub: "Comparatif des 12 fabricants, simulation de prix et devis gratuit 24h",
    badge: "OBSERVATOIRE 2026",
});

export const metadata = {
    title: "Expert Pergola Bioclimatique : Comparatif, Prix & Devis 2026",
    description: "Concevez et installez votre pergola bioclimatique en aluminium sur-mesure en France. Comparez les 12 fabricants et demandez vos devis gratuits.",
    alternates: {
        canonical: "https://www.expertpergolabioclimatique.fr",
    },
    openGraph: {
        title: "Expert Pergola Bioclimatique : Comparatif, Prix & Devis 2026",
        description: "Concevez et installez votre pergola bioclimatique en aluminium sur-mesure en France. Comparez les 12 fabricants et demandez vos devis gratuits.",
        url: "https://www.expertpergolabioclimatique.fr",
        siteName: "Expert Pergola Bioclimatique",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: homeOg,
                width: 1200,
                height: 630,
                alt: "Expert Pergola Bioclimatique - Observatoire et Devis 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Pergola Bioclimatique : Comparatif, Prix & Devis 2026",
        description: "Concevez et installez votre pergola bioclimatique en aluminium sur-mesure en France.",
        images: [homeOg],
    },
};

export default function HomePage() {
    const hub = getHubConfig();
    const cities = NATIONAL_TARGETS.map(t => ({ name: t.name, slug: slugify(t.name), available: true, department: t.zip.substring(0,2) }));

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Header isHub={true} variant="default" themeColor="purple" />
            <main>
            <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 -z-10 bg-slate-100 opacity-30" />
                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
                        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
                            <div>
                                <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700 mb-6">
                                    <CheckCircle size={16} className="mr-2" />
                                    Design de Luxe sur Mesure
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: `Profitez de votre terrasse 365 jours par an avec une <span class="text-purple-600">Pergola Bioclimatique</span>` }} />
                                <p className="text-xl text-slate-600 mb-4 max-w-xl mx-auto lg:mx-0">
                                    Lames orientables motorisées, éclairage LED et fermetures en verre. Comparez les meilleurs fabricants en France.
                                </p>
                            </div>

                            <div className="w-full max-w-xl mx-auto lg:mx-0 relative z-30 text-left">
                                <div id="simulateur" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                                    <div className="p-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                                    <div className="p-6 md:p-8">
                                        <div className="mb-6">
                                            <h3 className="text-lg font-bold text-slate-900">Simulateur de Devis<span className="sr-only">.</span></h3>
                                            <p className="text-sm text-slate-500">Gratuit • Sans engagement • Résultats en 2 min</p>
                                        </div>
                                        <LeadForm
                                            city="France"
                                            domain="expertpergolabioclimatique.fr"
                                            targetType="MIXED"
                                            themeColor="purple"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden border bg-white">
                                <Image
                                    src="/images/generated/pergola-hero.png"
                                    alt="Expert Pergola Bioclimatique"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <InstallationSteps />
            <PricingTable />
            <TestimonialsSection />
            <RealizationsGrid />
            
            {/* Cluster Hubs: Base de Connaissances Pergola Bioclimatique 2026 */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 uppercase tracking-wider mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            Observatoire National de l'Aménagement Extérieur
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Base de Connaissances Pergolas Bioclimatiques 2026
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Explorez nos dossiers exclusifs, l'audit des 12 constructeurs, le guide des dimensions et nos comparatifs impartiaux.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Users,
                                title: "Constructeurs & Réseaux de Pose",
                                desc: "Audit complet des 12 acteurs : Biossun, Brustor, Solisysteme, Renson, Gustave Rideau, Akena, Artisans Qualibat.",
                                href: "/operateurs",
                                badge: "12 CONSTRUCTEURS",
                                iconBg: "bg-purple-100",
                                iconColor: "text-purple-700",
                            },
                            {
                                icon: Sun,
                                title: "Grandes Marques Leaders",
                                desc: "Banc d'essai des fabricants : Brustor B200 XL, Solisysteme Horizon, Biossun BIO 230, Renson Camargue, Gaviota.",
                                href: "/marques",
                                badge: "6 MARQUES",
                                iconBg: "bg-blue-100",
                                iconColor: "text-blue-700",
                            },
                            {
                                icon: Scale,
                                title: "Comparatifs & Duels Décisionnels",
                                desc: "6 duels décisionnels : Bioclimatique vs Classique, Adossée vs Autoportée, Brustor vs Solisysteme, Aluminium vs Bois.",
                                href: "/comparatifs",
                                badge: "6 DUELS",
                                iconBg: "bg-indigo-100",
                                iconColor: "text-indigo-700",
                            },
                            {
                                icon: Sliders,
                                title: "Tailles, Formats & Dimensions",
                                desc: "Prix et configurations pour terrasses 3x3 (9m²), 4x3 (12m²), 4x4 (16m²), 6x4 (24m²) et sur-mesure grande portée.",
                                href: "/tailles",
                                badge: "DIMENSIONS",
                                iconBg: "bg-amber-100",
                                iconColor: "text-amber-700",
                            },
                            {
                                icon: FileText,
                                title: "Réglementation & Mairie (DP)",
                                desc: "Tout sur la Déclaration Préalable de travaux (5 à 20 m²), le permis de construire, la TVA 10% et la taxe d'aménagement.",
                                href: "/guides",
                                badge: "URBANISME",
                                iconBg: "bg-emerald-100",
                                iconColor: "text-emerald-700",
                            },
                            {
                                icon: BookOpen,
                                title: "Glossaire Technique Pergola",
                                desc: "Lames double paroi, Qualicoat Classe 2, Qualimarine, Somfy io, Fixscreen zip, classe au vent : tout expliqué.",
                                href: "/glossaire",
                                badge: "GUIDE TECHNIQUE",
                                iconBg: "bg-rose-100",
                                iconColor: "text-rose-700",
                            },
                        ].map((hub, i) => (
                            <Link key={i} href={hub.href} className="group">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 group-hover:shadow-lg group-hover:border-purple-400 transition-all h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 ${hub.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <hub.icon className={hub.iconColor} size={24} />
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 tracking-wide">
                                            {hub.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                                        {hub.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 flex-1 leading-relaxed">
                                        {hub.desc}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-sm font-bold text-purple-700 group-hover:text-purple-800">
                                        <span>Consulter le dossier</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Cities Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Installateurs de Pergolas par Département<span className="sr-only">.</span></h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {cities.map((city, idx) => (
                            <Link href={`/ville/${city.slug}`} key={idx} className="p-4 bg-white border rounded-xl hover:border-purple-500 shadow-sm text-center font-semibold text-slate-800">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pôle Aménagement Extérieur */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gradient-to-br from-purple-50/60 to-rose-50/40 rounded-3xl p-8 sm:p-10 border border-purple-100/80 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="space-y-3 text-center md:text-left max-w-xl">
                                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full uppercase tracking-wider">
                                    Aluminium Thermolaqué &amp; Lames Orientables
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Concevez votre pergola bioclimatique sur-mesure
                                <span className="sr-only">.</span></h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Profitez d&apos;un espace de vie extérieur protégé du soleil et des intempéries toute l&apos;année : structure aluminium extrudé, motorisation Somfy, capteurs vent/pluie et éclairage LED intégré avec garantie décennale.
                                </p>
                            </div>
                            <a
                                href="#simulateur"
                                className="shrink-0 inline-flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 px-6 py-3.5 rounded-2xl font-bold shadow-sm transition group"
                            >
                                <span>Configurer ma pergola</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
            </main>
            <Footer config={hub} />
            <MobileStickyCTA themeColor="purple" />
        </div>
    );
}
