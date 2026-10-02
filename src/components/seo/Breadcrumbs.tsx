import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  const normalizedItems = items.map((item) => ({
    name: item.name || item.label || "",
    url: item.url || item.href || "/",
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalizedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://www.expertpergolabioclimatique.fr${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        className={`py-3 px-4 bg-slate-50 border-b border-slate-200 ${className}`}
      >
        <div className="container mx-auto max-w-6xl">
          <ol className="flex items-center flex-wrap gap-1 text-xs text-slate-500">
            {normalizedItems.map((crumb, idx) => {
              const isLast = idx === normalizedItems.length - 1;
              return (
                <li key={crumb.url} className="flex items-center gap-1">
                  {idx > 0 && <ChevronRight size={12} className="text-slate-400" />}
                  {idx === 0 && <Home size={12} className="mr-0.5 text-slate-400" />}
                  {isLast ? (
                    <span className="font-semibold text-slate-900" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.url}
                      className="hover:text-purple-700 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
