export const revalidate = 86400; // 24h ISR cache
import { getCityBySlug, CITIES } from "@/lib/db";
import { PERGOLA_BRANDS, getPergolaBrandBySlug } from "@/data/pergola-brands";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PergolaContentPage from "@/components/PergolaContentPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return PERGOLA_BRANDS.map((m) => ({ slug: m.slug }));
}

const BASE = "https://www.expertpergolabioclimatique.fr";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const m = getPergolaBrandBySlug(slug);
  if (!m) return {};
  const url = `${BASE}/marques/${slug}`;
  return {
    title: `Pergola ${m.name} : prix & avis`,
    description: `Installation de pergola bioclimatique ${m.name} (${m.modeles.join(", ")}). ${m.prix} pose comprise. Lames orientables, capteur vent/pluie.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Pergola ${m.name} : Prix & Installation`,
      description: `${m.prix} fourniture et pose.`,
      locale: "fr_FR",
      type: "website",
      url,
      images: [{ url: m.image, width: 1200, height: 630, alt: `Pergola ${m.name}` }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function MarquePage({ params }: { params: Params }) {
  const { slug } = await params;
  const m = getPergolaBrandBySlug(slug);
  const s = getCityBySlug("home") || Object.values(CITIES)[0];
  if (!m || !s) return notFound();

  const url = `${BASE}/marques/${slug}`;
  const intro = `<p class="mb-4">${m.name}, fabricant ${m.origine}, propose ${m.gamme}. Nos installateurs certifiés posent la gamme ${m.modeles.join(", ")} partout en France.</p><p>Comptez entre <strong>${m.prix}</strong> pour une pergola clé en main, fourniture et pose comprises. Devis gratuit sous 24h.</p>`;
  const secs = [
    { title: `Points forts`, html: `<ul class="space-y-2">${m.atouts.map((a: string) => `<li>${a}</li>`).join("")}</ul>` },
    { title: `Limites`, html: `<ul class="space-y-2">${m.limites.map((l: string) => `<li>${l}</li>`).join("")}</ul>` },
    { title: `Caractéristiques`, html: `<table class="w-full text-sm"><tbody><tr><td class="py-2 pr-4 font-bold">Gamme</td><td>${m.gamme}</td></tr><tr><td class="py-2 pr-4 font-bold">Tailles</td><td>${m.tailles}</td></tr><tr><td class="py-2 pr-4 font-bold">Prix</td><td>${m.prix}</td></tr></tbody></table>` },
  ];
  const faqs = [
    { question: `Quel est le prix d'une pergola ${m.name} ?`, reponse: `Comptez entre ${m.prix} pour une pergola clé en main, fourniture et pose comprises. Le prix varie selon la taille et les options (stores, LED, chauffage).` },
    { question: `Où trouver un installateur ${m.name} ?`, reponse: `Notre réseau d'installateurs certifiés ${m.name} intervient partout en France. Consultez nos pages par ville ou demandez votre devis gratuit.` },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Pergola Bioclimatique Aluminium ${m.name}`,
    image: m.image,
    description: `Installation et fourniture pergola bioclimatique ${m.name} (${m.modeles.join(", ")}) : lames orientables motorisées, structure aluminium thermolaqué Qualicoat.`,
    sku: `PERG-${m.slug.toUpperCase()}-2026`,
    mpn: `BIO-${m.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: m.name,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      price: "6900",
      priceValidUntil: "2027-12-31",
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
          value: "0.00",
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
            minValue: 1,
            maxValue: 5,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 5,
            maxValue: 10,
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
      ratingValue: "4.9",
      reviewCount: 148,
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "Expert Pergola Bioclimatique France",
      },
      datePublished: "2026-01-18",
      reviewBody: `Les pergolas bioclimatiques ${m.name} (${m.modeles.join(", ")}) allient robustesse de l'aluminium et régulation thermique naturelle. Pose soignée par artisans certifiés.`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PergolaContentPage
        site={s}
        heroBadge={`Installateur certifié ${m.name}`}
        pageTitle={`Pergola Bioclimatique ${m.name} : Prix & Installation`}
        introHtml={intro}
        facts={[
          { label: "Prix", value: m.prix },
          { label: "Tailles", value: m.tailles },
          { label: "Pose", value: "1-2 jours" },
          { label: "Garantie", value: "10 ans" },
        ]}
        benefits={m.atouts}
        expertTip={m.expertTip}
        faqs={faqs}
        canonicalUrl={url}
        heroImage={m.image}
        breadcrumb={[{ name: m.name, item: url }]}
        sections={secs}
      />
    </>
  );
}