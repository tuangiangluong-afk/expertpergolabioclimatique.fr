export const revalidate = 86400; // 24h ISR cache
import { getCityByCleanSlug, CITIES } from "@/lib/db";
import { PERGOLA_BRANDS, getPergolaBrandBySlug } from "@/data/pergola-brands";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPseoPergolaContent } from "@/lib/pseo-pergola";
import PergolaContentPage from "@/components/PergolaContentPage";

type Params = Promise<{ slug: string; marque: string }>;

export async function generateStaticParams() {
    const p: { slug: string; marque: string }[] = [];
    Object.values(CITIES).forEach((c) => {
        PERGOLA_BRANDS.forEach((m) => {
            p.push({ slug: slugify(c.city), marque: m.slug });
        });
    });
    return p;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug, marque: ms } = await params;
    const s = getCityByCleanSlug(slug);
    const m = getPergolaBrandBySlug(ms);
    if (!s || !m) return {};
    const pseo = getPseoPergolaContent(s, m);
    const url = `https://www.expertpergolabioclimatique.fr/ville/${slug}/${ms}`;
    return {
        title: pseo.meta_title,
        description: pseo.meta_description,
        alternates: { canonical: url },
        openGraph: {
            title: pseo.meta_title,
            description: pseo.meta_description,
            locale: "fr_FR",
            type: "website",
            url,
            images: [{ url: m.image, width: 1200, height: 630, alt: `Pergola ${m.name} à ${s.city}` }]
        },
        robots: { index: true, follow: true }
    };
}

export default async function CityMarquePage({ params }: { params: Params }) {
    const { slug, marque: ms } = await params;
    const site = getCityByCleanSlug(slug);
    const m = getPergolaBrandBySlug(ms);
    if (!site || !m) return notFound();

    const pseo = getPseoPergolaContent(site, m);
    const url = `https://www.expertpergolabioclimatique.fr/ville/${slug}/${ms}`;

    const secs = [
        {
            title: `Résistance au vent & étanchéité bioclimatique à ${site.city}`,
            html: `<div class="space-y-3 text-slate-700 leading-relaxed text-sm">
                <p>
                    Installer une pergola aluminium <strong>${m.name}</strong> à <strong>${site.city}</strong> garantit un confort 4 saisons adapté au micro-climat local :
                </p>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li><strong>Lames orientables double paroi :</strong> Orientation motorisée de 0° à 135° pour réguler l'ensoleillement et créer une ventilation naturelle rafraîchissante.</li>
                    <li><strong>Résistance aux vents violents :</strong> Structure en aluminium thermolaqué Qualicoat testée en soufflerie CSTB jusqu'à 180 km/h.</li>
                    <li><strong>Évacuation invisible des eaux de pluie :</strong> Gouttières périphériques intégrées dans les chéneaux évacuant l'eau directement dans les poteaux.</li>
                </ul>
            </div>`
        },
        {
            title: `Fiche Technique & Motorisation : Pergola ${m.name}`,
            html: `<div class="overflow-x-auto">
                <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead class="bg-emerald-50 text-slate-800 font-bold border-b border-emerald-200">
                        <tr>
                            <th class="py-3 px-4 text-left">Composant</th>
                            <th class="py-3 px-4 text-left">Spécification ${m.name}</th>
                            <th class="py-3 px-4 text-left">Performance & Confort</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Structure porteuse</td>
                            <td class="py-3 px-4 text-slate-700">Aluminium extrudé thermolaqué Qualimarine</td>
                            <td class="py-3 px-4 text-slate-600">Inaltérable, résiste à la corrosion saline et UV</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Motorisation des lames</td>
                            <td class="py-3 px-4 text-slate-700">Moteur tubulaire vérin silencieux Somfy io</td>
                            <td class="py-3 px-4 text-slate-600">Pilotage smartphone et télécommande radio</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Capteur automatisé</td>
                            <td class="py-3 px-4 text-slate-700">Sonde pluie et anémomètre vent</td>
                            <td class="py-3 px-4 text-slate-600">Fermeture auto en cas de pluie, ouverture en cas de vent</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Options de confort</td>
                            <td class="py-3 px-4 text-slate-700">Rubans LED dimmables et stores screens zip</td>
                            <td class="py-3 px-4 text-slate-600">Protection latérale contre le vent et les regards</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        },
        {
            title: `Démarches Administratives & Mairie à ${site.city}`,
            html: `<div class="space-y-3 text-slate-700 leading-relaxed text-sm">
                <p>
                    À <strong>${site.city}</strong>, l'implantation d'une pergola bioclimatique est encadrée par le Code de l'Urbanisme :
                </p>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li><strong>Jusqu'à 5 m² :</strong> Aucune formalité requise.</li>
                    <li><strong>Entre 5 m² et 20 m² (ou 40 m² en zone urbaine PLU) :</strong> Une simple <strong>Déclaration Préalable de travaux (DP)</strong> en mairie suffit (formulaire Cerfa 13703).</li>
                    <li><strong>Délai d'instruction :</strong> 1 mois en mairie (porté à 2 mois si le bien est situé dans le périmètre d'un Bâtiment de France). Nos équipes gèrent les plans et démarches.</li>
                </ul>
            </div>`
        }
    ];

    return (
        <PergolaContentPage
            site={site}
            heroBadge={`Installateur certifié ${m.name}`}
            pageTitle={`Pergola Bioclimatique ${m.name} à ${site.city}`}
            introHtml={pseo.intro_html}
            facts={[
                { label: "Prix indicatif", value: pseo.prix },
                { label: "Tailles", value: m.tailles },
                { label: "Pose", value: "1-2 jours" },
                { label: "Garantie", value: "10 ans" }
            ]}
            benefits={pseo.atouts}
            expertTip={pseo.expert_tip}
            faqs={pseo.faqs}
            canonicalUrl={url}
            heroImage={m.image}
            breadcrumb={[
                { name: site.city, item: `https://www.expertpergolabioclimatique.fr/ville/${slug}` },
                { name: m.name, item: url }
            ]}
            localHtml={pseo.soleil_html}
            sections={secs}
        />
    );
}
