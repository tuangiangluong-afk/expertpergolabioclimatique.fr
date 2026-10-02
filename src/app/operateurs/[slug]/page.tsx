import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ogImageUrl } from "@/lib/seo-meta";
import { PERGOLA_OPERATORS, getPergolaOperatorBySlug } from "@/data/operators";
import {
  Star,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Percent,
  Clock,
  Sparkles,
  Sun,
  Sliders,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PERGOLA_OPERATORS.map((op) => ({
    slug: op.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const operator = getPergolaOperatorBySlug(slug);
  if (!operator) return { title: "Opérateur non trouvé" };

  const ogImage = ogImageUrl({
    q: `Avis ${operator.name} Pergola 2026`,
    sub: `Tarifs posés 3x3 et 4x3, résistance vent et devis comparatif`,
    badge: "AUDIT EXPERT 2026",
  });

  return {
    title: `Avis ${operator.name} Pergola Bioclimatique 2026 : Prix, SAV & Qualité`,
    description: operator.metaDescription,
    alternates: {
      canonical: `https://www.expertpergolabioclimatique.fr/operateurs/${operator.slug}`,
    },
    openGraph: {
      title: `Avis ${operator.name} Pergola Bioclimatique (2026) : Tarifs & SAV`,
      description: operator.metaDescription,
      url: `https://www.expertpergolabioclimatique.fr/operateurs/${operator.slug}`,
      siteName: "Expert Pergola Bioclimatique",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `Audit ${operator.name} Pergola` }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Avis ${operator.name} Pergola Bioclimatique 2026`,
      description: operator.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function PergolaOperatorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const operator = getPergolaOperatorBySlug(slug);
  if (!operator) notFound();

  const operatorFaqs = [
    {
      q: `Quel est le prix moyen d'une pergola bioclimatique posée par ${operator.name} ?`,
      a: `Pour un format standard de 3x3 mètres (9 m²), le tarif moyen constaté chez ${operator.name} est de ${operator.priceRangeStandard}. Pour un format intermédiaire très prisé de 4x3 mètres, comptez de ${operator.priceRangeIntermediaire}. Ces tarifs incluent la visite technique, la fourniture des profilés aluminium thermolaqués, la motorisation des lames et la pose avec garantie décennale.`,
    },
    {
      q: `Les pergolas de ${operator.name} résistent-elles aux vents violents et à la pluie ?`,
      a: `Oui, les profilés aluminium utilisés bénéficient des labels Qualicoat et Qualimarine. Les lames orientables sont conçues pour résister à des vents de plus de 100 à 120 km/h en position fermée, et les capteurs météo intégrés ouvrent ou ferment automatiquement la toiture en cas d'intempéries.`,
    },
    {
      q: `Quel est le modèle d'intervention de ${operator.name} ?`,
      a: `${operator.name} intervient via : ${operator.model}. Cela conditionne la réactivité du métré sur place, les délais de livraison et le suivi de chantier.`,
    },
    {
      q: `Comment faire jouer la concurrence sur un devis ${operator.name} ?`,
      a: `Il est fortement conseillé de solliciter un devis comparatif auprès d'un menuisier ou storiste indépendant qualifié Qualibat avant tout engagement. Vous constaterez régulièrement un écart de 1 500 € à 3 000 € pour des profilés aluminium et motorisations Somfy équivalentes.`,
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Pergola Bioclimatique Aluminium ${operator.name}`,
    description: operator.description,
    brand: {
      "@type": "Brand",
      name: operator.name,
    },
    sku: `PERG-${operator.slug.toUpperCase()}-2026`,
    mpn: `MPN-PERG-${operator.slug.toUpperCase()}`,
    image: `https://www.expertpergolabioclimatique.fr/api/og?q=${encodeURIComponent(operator.name)}&badge=AVIS%202026`,
    offers: {
      "@type": "Offer",
      url: `https://www.expertpergolabioclimatique.fr/operateurs/${operator.slug}`,
      priceCurrency: "EUR",
      price: operator.priceRangeStandard.replace(/[^0-9]/g, "").slice(0, 4) || "3500",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Expert Pergola Bioclimatique France",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "EUR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "FR",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 10,
            maxValue: 21,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 14,
            maxValue: 35,
            unitCode: "d",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "FR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: operator.ratingValue.toString(),
      reviewCount: operator.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Frédéric L. (Ingénieur Menuiserie Extérieure)",
        },
        datePublished: operator.publishedAt,
        reviewBody: operator.verdict,
        reviewRating: {
          "@type": "Rating",
          ratingValue: operator.ratingValue.toString(),
          bestRating: "5",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: operatorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Opérateurs & Fabricants", href: "/operateurs" },
    { label: operator.name, href: `/operateurs/${operator.slug}` },
  ];

  const otherOperators = PERGOLA_OPERATORS.filter((op) => op.slug !== operator.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Hero Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                {operator.type}
              </span>
              {operator.qualicoatCertified ? (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Aluminium Qualicoat & Qualimarine
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Aluminium standard non labellisé mer
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(operator.ratingValue)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">{operator.ratingValue}/5</span>
              <span className="text-xs text-slate-500">({operator.reviewCount.toLocaleString()} avis vérifiés)</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Avis & Tarifs {operator.name} (Édition 2026)
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mb-6">
            {operator.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Format Standard 3x3m (9m²)</span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{operator.priceRangeStandard}</p>
              <span className="text-xs text-slate-600">Fourniture + pose comprise</span>
            </div>
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Intermédiaire 4x3m (12m²)</span>
              <p className="text-xl sm:text-2xl font-black text-purple-700 mt-1">{operator.priceRangeIntermediaire}</p>
              <span className="text-xs text-slate-600">Dimension la plus demandée</span>
            </div>
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Grand Format Sur-Mesure (6x4m)</span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{operator.priceRangeLuxeSurMesure}</p>
              <span className="text-xs text-slate-600">Stores verticaux & LED inclus</span>
            </div>
          </div>
        </section>

        {/* Layout: Content + Form Sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            {/* Synthetic Audit Box */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                  <Sun className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Synthèse de l'Audit Technique 2026</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4 text-slate-500" />
                    Modèle Opérationnel
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{operator.model}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Percent className="w-4 h-4 text-slate-500" />
                    Structure Tarifaire
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{operator.commissionEstimated}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Modèles et gammes phares
                </h3>
                <div className="flex flex-wrap gap-2">
                  {operator.hardwareBrands.map((hw) => (
                    <span
                      key={hw}
                      className="px-3 py-1.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-purple-800"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 text-sm leading-relaxed text-slate-700">
                <p>{operator.description}</p>
              </div>
            </section>

            {/* Pros & Cons */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Forces & Points de Vigilance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Points forts
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                    {operator.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 font-bold">
                    <XCircle className="w-5 h-5 text-amber-600" />
                    Points de vigilance
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                    {operator.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Expert Verdict & Arbitrage */}
            <section className="bg-gradient-to-br from-purple-950 to-slate-950 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Le Verdict de l'Expert</h2>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-2">
                <p className="text-purple-200 text-xs font-bold uppercase tracking-wider">Avis objectif</p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-100">{operator.verdict}</p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-400/30 space-y-2">
                <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  Règle d'arbitrage 2026
                </div>
                <p className="text-sm leading-relaxed text-slate-200">{operator.arbitrage}</p>
              </div>
            </section>

            {/* Operator FAQs */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Questions Fréquentes sur {operator.name}</h2>
              <div className="space-y-4">
                {operatorFaqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Operators */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Comparer avec les autres constructeurs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherOperators.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/operateurs/${other.slug}`}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-300 hover:bg-purple-50/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-purple-700">{other.type}</span>
                        <div className="flex items-center text-xs font-bold text-slate-700">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                          {other.ratingValue}/5
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {other.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{other.tagline}</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-purple-700">
                      <span>{other.priceRangeStandard}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar LeadForm Sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-600 shadow-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  Devis Comparatif Gratuit 2026
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Challenger le devis {operator.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 mb-6">
                  Comparez gratuitement jusqu'à 3 menuisiers et storistes certifiés Qualibat de votre département. Économisez de 1 500 € à 3 000 € et vérifiez la faisabilité en mairie.
                </p>

                <LeadForm
                  city="France"
                  domain="expertpergolabioclimatique.fr"
                />
              </div>

              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200/70 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garanties Expert Pergola Bioclimatique
                </div>
                <p>
                  Audit indépendant. Tarifs réels constatés sur les configurations 3x3, 4x3 et sur-mesure en France, conformité aux normes NV65 (résistance vent et neige) et garantie décennale artisan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
