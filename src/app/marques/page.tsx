import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ogImageUrl } from "@/lib/seo-meta";
import { PERGOLA_BRANDS } from "@/data/pergola-brands";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sun,
  Sparkles,
} from "lucide-react";

const ogImage = ogImageUrl({
  q: "Marques Pergolas Bioclimatiques 2026",
  sub: "Brustor, Solisysteme, Biossun, Renson, Gaviota, Mister Menuiserie : comparatif",
  badge: "GUIDE FABRICANTS 2026",
});

export const metadata: Metadata = {
  title: "Meilleures Marques de Pergolas Bioclimatiques 2026 : Comparatif & Prix",
  description:
    "Comparatif indépendant 2026 des grands fabricants de pergolas bioclimatiques : Brustor, Solisysteme, Biossun, Renson, Gaviota, Mister Menuiserie. Prix réels, modèles et garanties.",
  alternates: {
    canonical: "https://www.expertpergolabioclimatique.fr/marques",
  },
  openGraph: {
    title: "Meilleures Marques de Pergolas Bioclimatiques 2026 : Comparatif & Prix",
    description:
      "Brustor, Solisysteme, Biossun, Renson... Quelle marque choisir pour équiper votre terrasse ? Guide complet des constructeurs et devis certifiés Qualibat.",
    url: "https://www.expertpergolabioclimatique.fr/marques",
    siteName: "Expert Pergola Bioclimatique",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Marques Pergolas Bioclimatiques 2026" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marques Pergolas Bioclimatiques 2026 : Guide & Prix",
    description: "Comparatif des constructeurs de pergolas bioclimatiques aluminium en France.",
    images: [ogImage],
  },
};

export default function MarquesHubPage() {
  const faqItems = [
    {
      q: "Quelle est la meilleure marque de pergola bioclimatique en 2026 ?",
      a: "Brustor (modèle B200 XL) offre le meilleur équilibre entre robustesse mécanique et rapport qualité/prix. Biossun et Solisysteme sont les deux grands fleurons de la fabrication 100% française. Pour un projet d'architecte ultra-luxe avec intégration invisible, Renson (Camargue / Skye) reste la référence mondiale incontestée.",
    },
    {
      q: "Quel budget prévoir selon la marque ?",
      a: "Pour une dimension standard de 3x3 m posée, comptez entre 2 200 € et 3 800 € pour Mister Menuiserie, entre 2 990 € et 5 200 € pour Solisysteme ou Brustor, et entre 3 900 € et 7 000 € pour Biossun ou Renson.",
    },
    {
      q: "Quelle motorisation choisir pour les lames orientables ?",
      a: "La motorisation Somfy io-homecontrol est la plus répandue et la plus fiable du marché. Elle permet de piloter l'orientation des lames, l'éclairage LED et les stores verticaux depuis une télécommande unique ou un smartphone (application TaHoma), avec gestion automatique par capteurs vent et pluie.",
    },
    {
      q: "Quelle garantie pour une pergola aluminium de grande marque ?",
      a: "La structure aluminium bénéficie d'une garantie décennale (10 ans). Le thermolaquage labellisé Qualicoat est garanti entre 10 et 25 ans contre la décoloration et l'écaillage. Les moteurs Somfy et vérins électriques sont garantis 5 ans.",
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marques de Pergolas Bioclimatiques Référencées (2026)",
    description: "Catalogue comparatif des constructeurs de pergolas aluminium en France.",
    numberOfItems: PERGOLA_BRANDS.length,
    itemListElement: PERGOLA_BRANDS.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      description: b.gamme,
      url: `https://www.expertpergolabioclimatique.fr/marques/${b.slug}`,
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
    { label: "Marques Pergolas", href: "/marques" },
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
              Guide Fabricants & Matériel 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Labels Qualicoat & Qualimarine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meilleures Marques de Pergolas Bioclimatiques en France
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl leading-relaxed">
            Pour profiter de votre terrasse en toute saison sans craindre les averses ou les chaleurs caniculaires, le choix du fabricant est stratégique. Épaisseur des profilés aluminium, étanchéité des lames orientables, résistance au vent et domotique Somfy : découvrez notre banc d'essai complet des grandes marques posées par les menuisiers certifiés.
          </p>
        </section>

        {/* Brands Grid */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Les 6 Fabricants Leaders du Marché
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Aluminium extrudé de premier choix, motorisation certifiée et garantie décennale
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1.5 bg-slate-100 rounded-full text-slate-600">
              {PERGOLA_BRANDS.length} constructeurs audités
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERGOLA_BRANDS.map((b) => (
              <div
                key={b.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                      Origine {b.origine}
                    </span>
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {b.prix}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">{b.gamme}</p>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
                      Modèles de référence :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {b.modeles.map((m) => (
                        <span
                          key={m}
                          className="text-xs bg-slate-50 border border-slate-200/60 rounded-md px-2 py-0.5 text-slate-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{b.atouts[0]}</span>
                    </div>
                    {b.limites[0] && (
                      <div className="text-xs text-amber-800 font-semibold flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{b.limites[0]}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{b.tailles}</span>
                  <Link
                    href={`/marques/${b.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-700 group-hover:text-purple-800"
                  >
                    <span>Fiche & Devis</span>
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
                Installation Partout en France
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Faites installer votre pergola de marque par un menuisier agréé
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Obtenez jusqu'à 3 devis comparatifs sans intermédiaire commercial. Vérifiez gratuitement la faisabilité de votre projet (murs porteurs, fondations et démarches en mairie).
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-bold text-purple-300">Garantie 10 Ans</div>
                  <div className="text-slate-400 mt-0.5">Structure aluminium & laquage</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-bold text-purple-300">TVA 10% Réduite</div>
                  <div className="text-slate-400 mt-0.5">Sur modèles adossés à l'habitat</div>
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
            Questions Fréquentes sur les Fabricants de Pergolas
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
