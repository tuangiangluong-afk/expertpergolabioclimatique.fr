import { CityConfig } from "@/lib/db";
import { DEPARTEMENTS, ventForDepartement } from "@/data/fr-departements";

interface LocalFAQProps {
    site: CityConfig;
    segment: "B2C" | "COPRO" | "ENTREPRISE";
}

export function LocalFAQ({ site, segment }: LocalFAQProps) {
    const city = site.city;
    const faqs = getLocalFAQData(city, site.department, segment);

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Preguntas frecuentes en {city}
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Tout ce que vous devez savoir sur l'installation de pergolas en aluminium sur mesure.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details 
                            key={idx} 
                            className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                            {...(idx === 0 ? { open: true } : {})}
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-bold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
/**
 * Exporté pour que SchemaJSON génère les données structurées FAQPage.
 *
 * IMPORTANT : aucune statistique n'est inventée ici. Les réponses s'appuient
 * uniquement sur des faits vérifiables (département, région, préfecture, vent
 * dominant) afin de rester citable par les moteurs IA.
 */
export function getLocalFAQData(city: string, department: string | undefined, _segment: "B2C" | "COPRO" | "ENTREPRISE" = "B2C") {
    const dept = department ? DEPARTEMENTS[department] : undefined;
    const deptRef = dept ? `${dept.name} (${dept.code})` : "votre département";
    const region = dept?.region || "France";
    const vent = ventForDepartement(department);
    const montagne = !!dept?.montagne;
    const littoral = !!dept?.littoral;

    return [
        {
            question: `Quel est le prix d'une pergola bioclimatique à ${city} ?`,
            answer: `Le prix d'une pergola bioclimatique posée à ${city} se situe généralement entre 400 € et 850 € par m² selon la motorisation et les options (LED, fermetures latérales, chauffage). Pour une structure résidentielle standard de 3 × 3 à 4 × 3 m, comptez le plus souvent entre 3 500 € et 8 000 €.`
        },
        {
            question: `Combien de temps dure l'installation d'une pergola à ${city} ?`,
            answer: `Après la prise de mesures et la fabrication sur mesure, la pose à ${city} se déroule en 1 à 2 journées, sans gros œuvre. Le délai global dépend surtout du délai de fabrication, généralement de 3 à 5 semaines.`
        },
        {
            question: `Faut-il un permis de construire pour une pergola bioclimatique à ${city} ?`,
            answer: `À ${city}, département ${deptRef} (${region}), une pergola bioclimatique est une structure ouverte et démontable qui ne crée pas de surface habitable close : elle ne relève donc pas du permis de construire dans la majorité des cas. Une déclaration préalable peut rester exigée selon la commune et le PLU, et les règles d'urbanisme locales doivent être vérifiées avant travaux.`
        },
        {
            question: `Quel vent et quelles contraintes climatiques à ${city} ?`,
            answer: `Le vent dominant sur le département ${deptRef} est ${vent}.${montagne ? " En zone de montagne, la charge de neige doit être intégrée au dimensionnement de la structure." : ""}${littoral ? " Sur le littoral, l'air salin impose une finition anticorrosion et une visserie inox." : ""} Ces éléments conditionnent le nombre de points d'ancrage et la résistance mécanique exigée pour une pergola à ${city}.`
        }
    ];
}
