"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
    city?: string;
    type?: string;
    themeColor?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'slate' | 'stone';
    items?: { question: string; answer: string; }[];
}

export default function FAQ({ city, type, themeColor = 'purple', items }: FAQProps) {
    const defaultQuestions = [
        {
            question: "Combien coûte l'installation d'une pergola bioclimatique ?",
            answer: "Le coût moyen d'une pergola bioclimatique en aluminium sur mesure varie entre 3500€ et 8000€, selon les dimensions, la motorisation et les options choisies (lumières LED, stores latéraux, capteurs météo)."
        },
        {
            question: "Faut-il un permis de construire pour une pergola ?",
            answer: "Pour une pergola dont la surface au sol est comprise entre 5m² et 20m², une simple déclaration préalable de travaux en mairie est suffisante. Au-delà de 20m², un permis de construire est requis."
        },
        {
            question: "Quelle est la résistance d'une pergola face au vent et à la neige ?",
            answer: "Nos pergolas bioclimatiques en aluminium extrudé sont conçues pour résister à des vents violents allant jusqu'à 120 km/h et peuvent supporter une charge de neige importante. Les capteurs de pluie et de vent ferment automatiquement les lames."
        },
        {
            question: "Comment entretenir sa pergola bioclimatique ?",
            answer: "L'entretien est très simple. Un nettoyage deux fois par an à l'eau savonneuse (sans détergent agressif) suffit pour maintenir l'aluminium et le mécanisme des lames orientables en parfait état."
        },
        {
            question: "Quelles garanties sont offertes par vos installateurs partenaires ?",
            answer: "Tous nos installateurs partenaires disposent d'une assurance garantie décennale. Les structures en aluminium sont généralement garanties 10 ans et les motorisations 5 ans."
        }
    ];

    const questions = items || defaultQuestions;

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const themeStyles: Record<string, string> = {
        blue: "bg-blue-100 text-blue-700",
        emerald: "bg-emerald-100 text-emerald-700",
        amber: "bg-amber-100 text-amber-800",
        purple: "bg-purple-100 text-purple-700",
        rose: "bg-slate-100 text-slate-800",
        slate: "bg-slate-100 text-slate-800",
        stone: "bg-stone-100 text-stone-800"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };
    const badgeClass = themeStyles[themeColor] || themeStyles.purple;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${badgeClass}`}>
                        Questions Fréquentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Des questions sur les pergolas bioclimatiques ?
                    </h2>
                    <p className="text-xl text-slate-600 mt-4">
                        Nous avons réuni les réponses pour vous guider dans votre aménagement extérieur.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-slate-900 pr-8">{item.question}</span>
                                <ChevronDown
                                    className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>

                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
