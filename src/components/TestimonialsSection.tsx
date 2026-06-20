"use client";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Nous voulions rénover notre allée de garage et notre terrasse. L&apos;artisan proposé nous a conseillé le béton désactivé pour la voiture et le béton imprimé imitation bois pour la terrasse. Le résultat est splendide et extrêmement solide !",
            name: "Marc Dubreuil",
            location: "Bordeaux",
            product: "Béton désactivé & imprimé",
            initials: "MD"
        },
        {
            quote: "Très satisfaite de mon projet de plage de piscine en béton désactivé. Antidérapant, esthétique et très facile d&apos;entretien. Les devis reçus étaient clairs et compétitifs, avec la garantie décennale.",
            name: "Valérie Lemaire",
            location: "Nice",
            product: "Béton Désactivé Piscine",
            initials: "VL"
        }
    ];

    return (
        <section className="bg-slate-900 text-white py-16 lg:py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Artisans bétonneurs partout en France</h2>
                    <p className="text-slate-400 text-lg">Trouvez un expert en béton décoratif qualifié et assuré pour vos travaux extérieurs.</p>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <p className="text-slate-300 italic mb-4" dangerouslySetInnerHTML={{ __html: t.quote }} />
                            <div className="font-bold">{t.name} - <span className="text-purple-500">{t.location}</span></div>
                            <div className="text-xs text-slate-500 mt-1">{t.product}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
