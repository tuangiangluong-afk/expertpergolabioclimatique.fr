"use client";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Nous voulions profiter de notre terrasse exposée plein sud sans étouffer sous la chaleur. La pergola bioclimatique est un vrai bonheur : on gère l'ombre et la ventilation avec la télécommande. Matériel très robuste !",
            name: "Marc Dubreuil",
            location: "Bordeaux",
            product: "Pergola Autoportée 4x4m",
            initials: "MD"
        },
        {
            quote: "Très satisfait de notre pergola adossée. Le design gris anthracite se marie parfaitement avec notre maison moderne. L'éclairage LED intégré nous permet de dîner dehors même tard le soir. Pose impeccable.",
            name: "Valérie Lemaire",
            location: "Nice",
            product: "Pergola Adossée avec Stores",
            initials: "VL"
        }
    ];

    return (
        <section className="bg-slate-900 text-white py-16 lg:py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Installateurs Premium partout en France</h2>
                    <p className="text-slate-400 text-lg">Trouvez un expert en aménagement extérieur qualifié pour la pose de votre pergola bioclimatique.</p>
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
