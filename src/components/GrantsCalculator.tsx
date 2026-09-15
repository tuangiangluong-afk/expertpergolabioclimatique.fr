"use client";

import { ArrowRight, CheckCircle, Ruler } from "lucide-react";

interface GrantsCalculatorProps {
    themeColor?: string;
    onCalculateClick?: () => void;
}

export default function GrantsCalculator({ onCalculateClick }: GrantsCalculatorProps) {
    const scrollToForm = () => {
        document.getElementById("simulateur")?.scrollIntoView({ behavior: "smooth" });
        onCalculateClick?.();
    };

    return (
        <section id="grants-calculator" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 bg-stone-50 text-stone-600 px-3 py-1.5 rounded-full text-sm font-bold w-fit">
                        <Ruler className="w-4 h-4" /> Étude du projet
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Un budget adapté à votre pergola</h2>
                    <p className="text-lg text-slate-600">
                        Le prix dépend des dimensions, de la structure, des options, des fondations et de l&apos;accès au chantier. Une visite ou une étude technique est nécessaire pour obtenir un montant fiable.
                    </p>
                    <div className="flex flex-col gap-4 mt-4">
                        {["Dimensions et implantation de la terrasse", "Orientation, vent local et évacuation des eaux", "Lames motorisées, éclairage et fermetures", "Fondations, accès et contraintes d’urbanisme"].map((item) => (
                            <div key={item} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollToForm} className="inline-flex items-center text-stone-600 font-bold hover:underline mt-4">
                        Demander une étude gratuite <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Ce que doit contenir un devis</h3>
                        <ul className="space-y-4 text-slate-600">
                            <li><strong>1.</strong> Structure, dimensions et finition</li>
                            <li><strong>2.</strong> Motorisation et équipements inclus</li>
                            <li><strong>3.</strong> Pose, ancrages et évacuation des eaux</li>
                            <li><strong>4.</strong> Garanties et conditions d’entretien</li>
                        </ul>
                        <p className="text-xs text-slate-400 mt-6">Les règles d’urbanisme et les éventuelles aides dépendent de la commune et du projet ; elles doivent être vérifiées au cas par cas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
