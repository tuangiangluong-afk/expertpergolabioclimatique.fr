import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ogImageUrl } from "@/lib/seo-meta";
import { PERGOLA_OPERATORS } from "@/data/operators";
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sun,
  Sliders,
  Sparkles,
} from "lucide-react";

const ogImage = ogImageUrl({
  q: "Comparatif Fabricants Pergolas Bioclimatiques 2026",
  sub: "Biossun, Brustor, Solisysteme, Renson, Gustave Rideau, Akena : tarifs réels & avis",
  badge: "AUDIT EXPERT 2026",
});

export const metadata: Metadata = {
  title: "Avis & Prix Fabricants Pergolas Bioclimatiques 2026 : Comparatif des 12 Réseaux",
  description:
    "Audit indépendant 2026 des 12 fabricants et installateurs de pergolas bioclimatiques en France : Biossun, Brustor, Solisysteme, Renson, Gustave Rideau, Akena... Prix réels, marges et démarches DP.",
  alternates: {
    canonical: "https://www.expertpergolabioclimatique.fr/operateurs",
  },
  openGraph: {
    title: "Avis & Prix Pergolas Bioclimatiques 2026 : Les 12 Constructeurs Audités",
    description:
      "Quel fabricant choisir pour votre pergola aluminium sur-mesure ? Tarifs constatés, résistance au vent, lames orientables et devis gratuits sans intermédiaire.",
    url: "https://www.expertpergolabioclimatique.fr/operateurs",
    siteName: "Expert Pergola Bioclimatique",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Audit Fabricants Pergola Bioclimatique 2026" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis & Prix Pergolas Bioclimatiques 2026 : 12 Réseaux Audités",
    description: "Comparatif neutre des marques de pergolas aluminium en France.",
    images: [ogImage],
  },
};

export default function OperateursHubPage() {
  const faqItems = [
    {
      q: "Quel est le prix moyen d'une pergola bioclimatique posée en 2026 ?",
      a: "Pour une pergola bioclimatique aluminium standard de 3x3 m (9 m²), le coût moyen fourniture et pose oscille entre 2 990 € et 5 200 € TTC selon la marque. Pour une dimension intermédiaire de 4x3 m ou 4x4 m, comptez de 5 500 € à 8 900 € TTC. Les grands formats sur-mesure (6x4 m) avec stores zippés et LED intégrés atteignent 10 000 € à 17 000 € TTC.",
    },
    {
      q: "Quelle marque offre la meilleure résistance au vent et à la pluie ?",
      a: "Brustor et Renson se distinguent par une résistance au vent extrême testée jusqu'à 120 km/h grâce à leurs stores verticaux Fixscreen zippés. Biossun et Solisysteme excellent dans l'étanchéité des lames avec leurs profils spécifiques en S et leurs chéneaux grand débit intégrés.",
    },
    {
      q: "Faut-il une autorisation de la mairie pour installer une pergola bioclimatique ?",
      a: "Oui : pour une surface au sol comprise entre 5 m² et 20 m² (ou jusqu'à 40 m² en zone urbaine couverte par un PLU), une Déclaration Préalable de travaux (DP) en mairie est obligatoire. Au-delà de 20 m² (ou 40 m² sous PLU), un permis de construire est requis. La plupart des installateurs partenaires vous accompagnent dans le montage du dossier administratif.",
    },
    {
      q: "Quelle est la TVA applicable sur une pergola ?",
      a: "Une pergola bioclimatique adossée à une habitation de plus de 2 ans peut bénéficier de la TVA intermédiaire à 10% sur la main-d'œuvre et le matériel (si elle ne crée pas une surface de plancher fermée close et couverte). Une pergola autoportée au milieu du jardin est en revanche soumise au taux standard de 20%.",
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Audit 2026 des Fabricants & Installateurs de Pergolas Bioclimatiques",
    description: "Comparatif des 12 principaux constructeurs et réseaux d'installation de pergolas en France.",
    numberOfItems: PERGOLA_OPERATORS.length,
    itemListElement: PERGOLA_OPERATORS.map((op, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: op.name,
      description: op.tagline,
      url: `https://www.expertpergolabioclimatique.fr/operateurs/${op.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Opérateurs & Fabricants", href: "/operateurs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Hero */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
              Observatoire National 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Aluminium Qualicoat & Qualimarine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comparatif des 12 Fabricants de Pergolas Bioclimatiques
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl leading-relaxed">
            Biossun, Brustor, Solisysteme, Renson, Gustave Rideau, Akena... Quel constructeur choisir pour valoriser votre terrasse ? Nous avons audité les 12 principaux acteurs français et européens sur leurs prix réels posés, la robustesse de leurs lames orientables, leur motorisation et leurs garanties.
          </p>

          {/* Arbitrage Banner */}
          <div className="mt-8 p-5 bg-gradient-to-r from-purple-900 to-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Règle d'arbitrage financier 2026
              </div>
              <p className="text-sm text-slate-200">
                Faire poser votre pergola par un menuisier indépendant Qualibat local plutôt que par une concession exclusive permet d'économiser entre 1 500 € et 3 000 € sur des profilés aluminium strictement identiques.
              </p>
            </div>
            <a
              href="#simulateur"
              className="shrink-0 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              Comparer les devis locaux
            </a>
          </div>
        </section>

        {/* Operators Grid */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Les 12 Acteurs Nationaux Audités
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fiches techniques détaillées, grilles tarifaires et avis indépendants
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1.5 bg-slate-100 rounded-full text-slate-600">
              12 réseaux passés au crible
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERGOLA_OPERATORS.map((op) => (
              <div
                key={op.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                      {op.type}
                    </span>
                    <div className="flex items-center text-xs font-bold text-slate-700">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                      {op.ratingValue}/5
                      <span className="text-slate-400 font-normal ml-1">({op.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {op.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4 line-clamp-2">{op.tagline}</p>

                  <div className="space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Modèle standard (3x3m) :</span>
                      <span className="font-bold text-slate-900">{op.priceRangeStandard}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Intermédiaire (4x3m) :</span>
                      <span className="font-bold text-purple-700">{op.priceRangeIntermediaire}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Grand format / Sur-mesure :</span>
                      <span className="font-bold text-slate-900">{op.priceRangeLuxeSurMesure}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="line-clamp-1">{op.pros[0]}</span>
                    </div>
                    <div className="text-xs text-amber-800 font-semibold flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span className="line-clamp-1">{op.cons[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{op.model}</span>
                  <Link
                    href={`/operateurs/${op.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-700 group-hover:text-purple-800"
                  >
                    <span>Audit complet</span>
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
                Chiffrage Gratuit & Sans Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Faites jouer la concurrence sur votre projet de pergola
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Comparez jusqu'à 3 installateurs et menuisiers qualifiés Qualibat de votre département. Obtenez une étude de faisabilité technique gratuite et un chiffrage précis sous 24h.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-bold text-purple-300">Garantie Décennale</div>
                  <div className="text-slate-400 mt-0.5">Assurance et pose certifiée</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-bold text-purple-300">TVA Réduite 10%</div>
                  <div className="text-slate-400 mt-0.5">Pour les pergolas adossées</div>
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

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Questions Fréquentes sur les Installateurs de Pergolas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
