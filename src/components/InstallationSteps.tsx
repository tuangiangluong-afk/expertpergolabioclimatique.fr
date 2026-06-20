"use client";
export default function InstallationSteps() {
    const steps = [
        { title: "1. Étude et Conception", desc: "Un expert se déplace pour prendre les mesures exactes et vous conseiller sur l'orientation des lames et le design (adossée ou autoportée)." },
        { title: "2. Fabrication sur Mesure", desc: "Votre pergola est fabriquée en aluminium extrudé de haute qualité selon vos spécifications exactes, avec intégration des LED et stores." },
        { title: "3. Installation Premium", desc: "Nos artisans poseurs qualifiés installent la structure, règlent la motorisation et assurent les finitions pour un résultat parfait." }
    ];
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-12">Les étapes de votre projet de Pergola Bioclimatique</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-purple-600 mb-2">{s.title}</h3>
                            <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: s.desc }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
