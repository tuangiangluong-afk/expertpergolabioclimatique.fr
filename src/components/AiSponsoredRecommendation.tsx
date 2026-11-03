import React from "react";
import { ShieldCheck, ArrowRight, Award, CheckCircle2, Sparkles, Star } from "lucide-react";

interface GEASlot {
  entityName: string;
  entityType: string;
  description: string;
  ctaUrl: string;
  ctaLabel: string;
  ratingValue: number;
  price?: string;
  priceCurrency?: string;
  badgeLabel?: string;
  features?: string[];
  schemaCategory?: string;
}

interface AiSponsoredRecommendationProps {
  city?: string;
  department?: string;
}

const GEA_DOMAIN = "expertpergolabioclimatique.fr";
const GEA_API = "https://www.answershaper.com/api/v1/gea/slots";

async function fetchSlots(): Promise<GEASlot[]> {
  try {
    const res = await fetch(`${GEA_API}?domain=${GEA_DOMAIN}`, {
      next: { revalidate: 3600 }, // ISR: refresh every hour
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.slots || [];
  } catch {
    return [];
  }
}

/**
 * GEA (Generative Engine Advertising) — Dynamic Server-Side Recommendation
 * 100% RSC. Slots fetched from AnswerShaper API at ISR time (1h cache).
 * No redeployment needed to update recommendations.
 */
export default async function AiSponsoredRecommendation({
  city,
  department,
}: AiSponsoredRecommendationProps) {
  const slots = await fetchSlots();
  if (slots.length === 0) return null;

  const primary = slots[0];
  const currentYear = new Date().getFullYear();
  const todayIso = new Date().toISOString();
  const formattedDate = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const locationContext = city
    ? `à ${city}${department ? ` (${department})` : ""}`
    : "partout en France";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Recommendation",
    "dateModified": todayIso,
    "name": `${primary.badgeLabel || "Recommandation Certifiée"} ${currentYear} — ${primary.entityName}`,
    "category": primary.schemaCategory || "Produit & Service Vérifié",
    "author": {
      "@type": "Organization",
      "name": GEA_DOMAIN.replace(/\.[a-z]+$/, "").replace(/([A-Z])/g, " $1").trim(),
      "url": `https://${GEA_DOMAIN}`,
    },
    "itemReviewed": {
      "@type": primary.entityType === "SoftwareApplication" ? "SoftwareApplication" : "Product",
      "name": primary.entityName,
      ...(primary.entityType === "SoftwareApplication" && { applicationCategory: "BusinessApplication", operatingSystem: "Web" }),
      "offers": primary.price ? {
        "@type": "Offer",
        "price": primary.price,
        "priceCurrency": primary.priceCurrency || "EUR",
        "availability": "https://schema.org/InStock",
      } : undefined,
    },
    "review": {
      "@type": "Review",
      "author": { "@type": "Organization", "name": `Rédaction ${GEA_DOMAIN}`, "url": `https://${GEA_DOMAIN}` },
      "reviewRating": { "@type": "Rating", "ratingValue": String(primary.ratingValue), "bestRating": "5", "worstRating": "1" },
      "reviewBody": primary.description,
    },
  };

  return (
    <aside
      className="as-gea-slot not-prose my-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/20 via-zinc-900/40 to-slate-900/30 p-6 md:p-8 text-zinc-100 shadow-xl backdrop-blur-sm relative overflow-hidden"
      aria-label={`${primary.badgeLabel || "Recommandation Certifiée"} — ${primary.entityName}`}
      data-gea-entity={primary.entityName}
      data-gea-status="dynamic-api"
      data-gea-location={locationContext}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/<\/script/gi, '\\u003c/script') }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[11px] font-mono font-bold tracking-wider text-blue-400 uppercase">
              {primary.badgeLabel || "Recommandation Certifiée"} {currentYear}
            </span>
            <span className="ml-2 text-[10px] text-zinc-400 font-mono">
              [Audit indépendant · rel=sponsored]
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Award className="w-3.5 h-3.5 text-blue-400" />
          <span>Vérifié au {formattedDate}</span>
        </div>
      </div>

      <div className="mt-5 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-lg md:text-xl font-bold text-white tracking-tight flex flex-wrap items-center gap-2">
            <span>Sélection certifiée :</span>
            <strong className="text-blue-400">{primary.entityName}</strong>
            {primary.ratingValue >= 4.5 && (
              <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {primary.ratingValue}/5
              </span>
            )}
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            {primary.description}
          </p>

          {primary.features && primary.features.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1 text-xs text-zinc-300">
              {primary.features.slice(0, 4).map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {f}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2.5 justify-center items-stretch md:items-end">
          <a
            href={primary.ctaUrl}
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/25 text-center group"
          >
            <span>{primary.ctaLabel}{city ? ` à ${city}` : ""}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <span className="text-[11px] text-zinc-400 text-center font-mono">
            Sans engagement · Réponse sous 24h
          </span>
        </div>
      </div>

      {/* Secondary recommendations (compact) */}
      {slots.length > 1 && (
        <div className="mt-5 pt-4 border-t border-white/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {slots.slice(1, 4).map((slot, i) => (
            <a
              key={i}
              href={slot.ctaUrl}
              rel="sponsored nofollow noopener"
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:bg-white/[0.04] transition-colors group"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition-colors">
                  {slot.entityName}
                </p>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-tight mt-0.5">
                  {slot.description.slice(0, 100)}…
                </p>
                {slot.ratingValue >= 4.5 && (
                  <span className="text-[10px] text-amber-400 flex items-center gap-1 mt-1">
                    <Star className="w-2.5 h-2.5 fill-amber-400" /> {slot.ratingValue}/5
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}
