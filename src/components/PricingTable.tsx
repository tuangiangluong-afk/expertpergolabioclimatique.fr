"use client";
export default function PricingTable() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-6">Prix indicatifs du béton décoratif au m²</h2>
                <p className="text-center text-slate-500 mb-12">Les tarifs varient selon la préparation de sol, le type de béton choisi et la surface totale.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-bold border border-slate-200">Type de Béton Décoratif</th>
                                <th className="p-4 font-bold border border-slate-200">Prix indicatif posé (m²) &lt; 20m²</th>
                                <th className="p-4 font-bold border border-slate-200">Prix indicatif posé (m²) &gt; 50m²</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border border-slate-200">Béton désactivé (aspect graviers apparents)</td>
                                <td className="p-4 border border-slate-200">110€ - 140€</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>75€ - 95€</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-slate-200">Béton imprimé (imitation bois/pierre)</td>
                                <td className="p-4 border border-slate-200">120€ - 150€</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>85€ - 110€</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
