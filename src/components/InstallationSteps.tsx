"use client";
export default function InstallationSteps() {
    const steps = [
        { title: "1. Étude de votre projet", desc: "Décrivez la surface, le type de béton choisi (imprimé, désactivé) et l&apos;accès toupie." },
        { title: "2. Visite et Terrassement", desc: "Nos artisans réalisent le calepinage, l&apos;excavation et la préparation du fond de forme." },
        { title: "3. Coulage & Finition", desc: "Coulage du béton à la toupie, traitement de surface désactivant ou empreinte, puis lavage." }
    ];
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-12">Les étapes de réalisation de votre béton décoratif</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-purple-500 mb-2">{s.title}</h3>
                            <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: s.desc }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
