import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ogImageUrl } from "@/lib/seo-meta";
import { PERGOLA_COMPARATIFS } from "@/data/pergola-comparatifs";
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sun,
} from "lucide-react";

const ogImage = ogImageUrl({
  q: "Comparatifs Pergolas Bioclimatiques 2026",
  sub: "Bioclimatique vs Classique, Adossée vs Autoportée, Brustor vs Solisysteme",
  badge: "COMPARATIFS 2026",
});

export const metadata: Metadata = {
  title: "Comparatifs Pergolas Bioclimatiques 2026 : Duels Face-à-Face & Décisions",
  description:
    "Tous les duels décisionnels pour votre terrasse : Pergola bioclimatique vs Classique, Adossée vs Autoportée, Brustor vs Solisysteme, Aluminium vs Bois, Pergola vs Store banne. Analyses neutres et chiffrées.",
  alternates: {
    canonical: "https://www.expertpergolabioclimatique.fr/comparatifs",
  },
  openGraph: {
    title: "Comparatifs & Duels Pergolas Bioclimatiques (2026) : Guide Décisionnel",
    description:
      "Quelle pergola choisir pour votre terrasse ? Comparez critère par critère pour un aménagement extérieur réussi au meilleur prix.",
    url: "https://www.expertpergolabioclimatique.fr/comparatifs",
    siteName: "Expert Pergola Bioclimatique",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Comparatifs Pergolas 2026" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatifs Pergolas Bioclimatiques 2026 : 6 Duels Clés",
    description: "Analyses comparatives neutres pour bien choisir sa pergola ou son carport.",
    images: [ogImage],
  },
};

export default function ComparatifsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Comparatifs et Duels Pergolas Bioclimatiques (2026)",
    description: "Comparatifs impartiaux pour arbitrer les choix d'équipements de terrasse et de protection solaire.",
    numberOfItems: PERGOLA_COMPARATIFS.length,
    itemListElement: PERGOLA_COMPARATIFS.map((comp, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: comp.title,
      description: comp.intro,
      url: `https://www.expertpergolabioclimatique.fr/comparatif/${comp.slug}`,
    })),
  };

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Comparatifs & Duels", href: "/comparatifs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Hero */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
              Arbitrages & Duels Experts 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Critères Techniques & Urbanisme
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comparatifs & Guides Décisionnels Pergola Aluminium
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl leading-relaxed">
            Pergola bioclimatique ou store banne, adossée à la façade ou autoportée en îlot, aluminium ou bois : nos experts décryptent chaque option point par point pour vous orienter vers la solution la plus durable et rentable.
          </p>
        </section>

        {/* Duels Grid */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERGOLA_COMPARATIFS.map((comp) => (
              <div
                key={comp.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      <Scale className="w-3.5 h-3.5" />
                      Face-à-face
                    </span>
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {comp.prix}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-3 leading-snug">
                    {comp.title}
                  </h3>

                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 text-xs font-semibold">
                    <span className="text-purple-800 font-bold flex-1 text-center truncate">{comp.a}</span>
                    <span className="text-slate-400 font-bold">VS</span>
                    <span className="text-slate-700 font-bold flex-1 text-center truncate">{comp.b}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {comp.intro}
                  </p>

                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 mb-4 text-xs text-emerald-950">
                    <span className="font-bold block mb-1">💡 Synthèse de l'arbitrage :</span>
                    <p className="line-clamp-2">{comp.verdict}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/comparatif/${comp.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-purple-700 group-hover:text-purple-800"
                  >
                    <span>Lire le duel complet</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LeadForm Block */}
        <section id="simulateur" className="bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-12 text-white mb-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Étude Personnalisée
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Un doute sur la configuration idéale de votre terrasse ?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nos menuisiers et storistes partenaires analysent l'orientation de votre maison, la prise au vent et les règles d'urbanisme de votre commune pour concevoir votre pergola sur-mesure.
              </p>
              <div className="space-y-2 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Visite technique et métré précis gratuits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Plans 3D et aide au dossier de Déclaration Préalable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Chiffrage détaillé fourniture et pose sous 24h</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-2xl p-6 text-slate-800 shadow-2xl">
              <LeadForm
                city="France"
                domain="expertpergolabioclimatique.fr"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
