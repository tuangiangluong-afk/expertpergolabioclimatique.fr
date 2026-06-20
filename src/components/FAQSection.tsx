"use client";
import FAQ from "./FAQ";

export default function FAQSection() {
    const faqs = [
        {
            question: "Qu'est-ce qu'une pergola bioclimatique ?",
            answer: "Une pergola bioclimatique est une structure extérieure, généralement en aluminium, équipée d'une toiture à lames orientables motorisées. Ces lames vous permettent de contrôler l'ensoleillement et la ventilation naturelle de votre terrasse, tout en vous protégeant de la pluie en position fermée."
        },
        {
            question: "Faut-il un permis de construire pour une pergola ?",
            answer: "Pour une pergola bioclimatique dont la surface est comprise entre 5m² et 20m², une simple déclaration préalable de travaux en mairie est suffisante. Au-delà de 20m², un permis de construire est généralement requis. Nos installateurs partenaires peuvent vous accompagner dans ces démarches."
        },
        {
            question: "Quelle est la différence entre une pergola adossée et autoportée ?",
            answer: "Une pergola adossée (ou murale) repose sur 2 piliers à l'avant et est fixée directement sur la façade de votre maison à l'arrière, créant une extension naturelle. Une pergola autoportée repose sur 4 piliers et peut être installée n'importe où (au milieu du jardin, près d'une piscine)."
        },
        {
            question: "Peut-on utiliser la pergola bioclimatique en hiver ?",
            answer: "Oui, la structure robuste en aluminium résiste aux intempéries (vent, pluie, neige). Avec des options comme des stores latéraux zippés (screens) et un système de chauffage à infrarouge, vous pouvez créer un véritable espace de vie utilisable toute l'année."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-8">Questions fréquentes sur les Pergolas Bioclimatiques</h2>
                <FAQ items={faqs} />
            </div>
        </section>
    );
}
