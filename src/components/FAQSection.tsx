"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ city }: { city?: string }) {
    const cityText = city ? ` à ${city}` : "";
    const faqs = [
        {
            question: "Qu&apos;est-ce que le béton désactivé" + cityText + " ?",
            answer: "Le béton désactivé est un béton décoratif obtenu par pulvérisation d&apos;un retardateur de prise sur la surface fraîche du béton, suivi d&apos;un lavage haute pression. Cela laisse apparaître les gravillons en relief, offrant un aspect esthétique naturel et antidérapant idéal pour les allées et terrasses."
        },
        {
            question: "Quel est le prix moyen au m² du béton décoratif ?",
            answer: "Le tarif d&apos;une dalle de béton décoratif varie entre 70€ et 150€ par m² (fourniture, préparation du sol et pose comprise). Le prix final dépend de la surface totale (tarifs dégressifs au-delà de 50m²), du terrassement nécessaire et du type de finition (imprimé, désactivé)."
        },
        {
            question: "Le passage d&apos;un camion toupie est-il obligatoire ?",
            answer: "Pour les surfaces importantes (supérieures à 20m²), l&apos;acheminement du béton prêt à l&apos;emploi par camion toupie est fortement recommandé pour garantir l&apos;homogénéité du mélange. Si le camion ne peut pas accéder directement, un système de pompe ou de tapis peut être déployé."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
                    <p className="text-slate-600">Todo savoir sur votre projet de béton décoratif.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                <span className="font-bold text-slate-900 pr-8" dangerouslySetInnerHTML={{ __html: question }} />
                {isOpen ? <Minus className="w-5 h-5 text-purple-600 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
            </button>
            {isOpen && <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2" dangerouslySetInnerHTML={{ __html: answer }} />}
        </div>
    );
}
