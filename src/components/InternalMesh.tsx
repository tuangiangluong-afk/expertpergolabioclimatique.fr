import Link from "next/link";
import { NATIONAL_CONFIG } from "@/config/national";
import { slugify } from "@/lib/slugify";
import { SiteConfig } from "@/lib/sites-config";
import { CityConfig } from "@/lib/db";
import { getNearbyCities } from "@/lib/geo";

interface InternalMeshProps {
    city?: string;
    config?: CityConfig | SiteConfig;
}

export function InternalMesh({ city, config }: InternalMeshProps) {
    const neighborhoods = (config as any)?.neighborhoods || (config as any)?.quartiers || [];

    const rawNearby = config ? getNearbyCities(config.slug, 12) : [];
    const slugs = new Set();
    const nearbyCities = rawNearby.filter(city => {
        if (slugs.has(city.slug)) return false;
        slugs.add(city.slug);
        return true;
    });

    function getVariedAnchor(name: string, index: number) {
        const variations = [
            `Pergola bioclimatique ${name}`,
            `Installateur de pergolas ${name}`,
            `Pergola aluminium ${name}`,
            `Fermetures terrasse ${name}`,
            `Spécialistes pergolas ${name}`
        ];
        return variations[index % variations.length];
    }

    return (
        <section className="bg-neutral-900 border-t border-white/5 py-16 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-4 gap-12 text-left">
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Nos services</h4>
                        <ul className="space-y-3">
                            {[{"title": "Pergola Bioclimatique Adossée", "href": "/type/adossee"}, {"title": "Pergola Bioclimatique Autoportée", "href": "/type/autoportee"}, {"title": "Carport Bioclimatique Aluminium", "href": "/type/carport"}, {"title": "Pergola Toit Plat & Stores Zip", "href": "/type/toit-plat"}, {"title": "Guides & Prix Pergola 2026", "href": "/blog"}].map((service, i) => (
                                <li key={i}>
                                    <Link href={service.href} className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-emerald-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Agences à Proximité</h4>
                        <ul className="space-y-3">
                            {nearbyCities.slice(0, 6).map((city, i) => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/ville/${city.slug}`}
                                        className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2"
                                    >
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {getVariedAnchor(city.city, i)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">
                            {config ? `Zones desservies autour de ${config.city}` : "Zones d'intervention"}
                        </h4>
                        <ul className="space-y-3">
                            {neighborhoods.slice(0, 8).map((quartier: string, i: number) => (
                                <li key={quartier}>
                                    <Link href="/guides" className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {getVariedAnchor(quartier, i + 2)}
                                    </Link>
                                </li>
                            ))}
                            {neighborhoods.length === 0 && (
                                <li className="text-neutral-500 text-sm italic">Tout le département et ses alentours</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Documentation & Conseils</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Prix pergola bioclimatique 2026", href: "/blog/prix-pergola-bioclimatique-m2-cout-reel-installation-2026" },
                                { label: "Guide d'achat", href: "/blog/pergola-bioclimatique-sur-mesure-vs-kit-comparatif-duree-vie" },
                                { label: "Types de fermetures", href: "/blog/stores-lateraux-zip-parois-verre-pergola-bioclimatique" },
                                { label: "Tous les articles", href: "/blog" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}