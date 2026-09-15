export const revalidate = 86400; // 24h ISR cache
import LocalAeoSection from "@/components/LocalAeoSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { getCityByCleanSlug, CITIES } from "@/lib/db";
import { getPseoContent } from "@/lib/pseo";
import { PERGOLA_BRANDS } from "@/data/pergola-brands";
import { CheckCircle, Award } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Header from "@/components/Header";
import SchemaJSON from "@/components/SchemaJSON";
import Reviews from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { slugify } from "@/lib/slugify";
import { InternalMesh } from "@/components/InternalMesh";
import { VillesVoisines } from "@/components/VillesVoisines";
import { LocalFAQ } from "@/components/LocalFAQ";
import RealizationsGrid from "@/components/RealizationsGrid";

export async function generateStaticParams() {
    return Object.values(CITIES).map(city => ({ slug: slugify(city.city) }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const site = getCityByCleanSlug(resolvedParams.slug);

    if (!site) {
        return {};
    }

    const pseo = await getPseoContent(site);

    return {
        title: pseo.meta_title,
        description: pseo.meta_description,
        alternates: {
            canonical: `https://www.expertpergolabioclimatique.fr/ville/${resolvedParams.slug}`,
        },
        openGraph: {
            title: pseo.meta_title,
            description: pseo.meta_description,
            siteName: site.name,
            images: [
                {
                    url: site.heroImage,
                    width: 1200,
                    height: 630,
                    alt: `${site.name} ${site.city}`
                }
            ],
            locale: "es_ES",
            type: "website",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const site = getCityByCleanSlug(resolvedParams.slug);

    if (!site) {
        return notFound();
    }

    const pseo = await getPseoContent(site);

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Header
                isHub={true}
                city={site.city}
                phoneNumber={site.phoneNumber}
                variant="default"
                themeColor="purple"
            />

            <SchemaJSON type="LocalBusiness" site={site} />
            <SchemaJSON 
                type="Breadcrumb" 
                site={site} 
                breadcrumbItems={[
                    { name: "Accueil", item: "https://www.expertpergolabioclimatique.fr" },
                    { name: "Villes", item: "https://www.expertpergolabioclimatique.fr/#villes" },
                    { name: site.city, item: `https://www.expertpergolabioclimatique.fr/ville/${resolvedParams.slug}` }
                ]} 
            />
            <SchemaJSON type="FAQPage" site={site} faqSegment="B2C" />

            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <CheckCircle size={16} className="text-purple-600" />
                                {pseo.hero_badge}
                            </div>
                            <h1
                                className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
                                dangerouslySetInnerHTML={{ __html: pseo.hero_title }}
                            />
                            <div
                                className="text-lg text-slate-600 mb-8 leading-relaxed prose prose-lg"
                                dangerouslySetInnerHTML={{ __html: pseo.intro_html }}
                            />
                            
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex gap-3">
                                <Award className="text-purple-600 shrink-0 mt-1" />
                                <p className="text-sm text-slate-700 italic">
                                    <strong>Conseil d'Expert :</strong> {pseo.expert_tip}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#simulateur"
                                    className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-purple-700 transition"
                                >
                                    {pseo.cta_primary}
                                </a>
                                <a
                                    href={`tel:${site.phoneNumber}`}
                                    className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-200 transition"
                                >
                                    Appeler un spécialiste
                                </a>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={site.heroImage}
                                alt={`Installation de pergola bioclimatique ${site.city}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Climat & Installation à {site.city}</h2>
                            <p className="text-slate-600 leading-relaxed">
                                {pseo.local_climate_info}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Délais d'intervention</h2>
                            <p className="text-slate-600 leading-relaxed">
                                {pseo.installation_timeline}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marques installées — maillage interne vers la matrice ville x marque */}
            <section className="py-14 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                        Installation de pergola bioclimatique par marque à {site.city}
                    </h2>
                    <p className="text-slate-600 text-center mb-8">
                        Découvrez les prix par marque, avec des installateurs certifiés à {site.city}.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {PERGOLA_BRANDS.map((marque) => (
                            <Link
                                key={marque.slug}
                                href={`/ville/${resolvedParams.slug}/${marque.slug}`}
                                className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center hover:border-purple-300 hover:bg-purple-50 transition"
                            >
                                <div className="font-bold text-slate-900">Pergola {marque.name}</div>
                                <div className="text-xs text-slate-500 mt-1">à {site.city}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LocalAeoSection site={site} pseo={pseo} />

            <section className="py-16 bg-slate-50 border-y border-slate-200" id="simulateur">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Design 3D et devis sur {site.city}</h2>
                            <p className="text-slate-600">Calcul du coût d'installation sur mesure</p>
                        </div>
                        <LeadForm
                            city={site.city}
                            domain="expertpergolabioclimatique.fr"
                            targetType="MIXED"
                            themeColor="purple"
                        />
                    </div>
                </div>
            </section>

            <Reviews site={site} themeColor="purple" />
            <RealizationsGrid />
            <LocalFAQ site={site} segment="B2C" />
            <VillesVoisines currentCitySlug={slugify(site.city)} department={site.department || ""} cityName={site.city} />
            <InternalMesh city={site.city} config={site} />
            <Footer config={site} />
            <MobileStickyCTA themeColor="purple" />
        </div>
    );
}
