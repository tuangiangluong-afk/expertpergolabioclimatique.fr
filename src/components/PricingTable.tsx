"use client";
export default function PricingTable() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-6">Prix indicatifs d'une Pergola Bioclimatique</h2>
                <p className="text-center text-slate-500 mb-12">Les tarifs varient selon les dimensions, le type d'installation (adossée ou autoportée) et les options choisies (LED, stores latéraux, capteurs).</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-bold border border-slate-200">Type de Pergola Bioclimatique</th>
                                <th className="p-4 font-bold border border-slate-200">Surface Moyenne (12-15m²)</th>
                                <th className="p-4 font-bold border border-slate-200">Surface Grande (&gt; 20m²)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border border-slate-200">Pergola Adossée (Fixée au mur)</td>
                                <td className="p-4 border border-slate-200">4 500€ - 7 000€</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>7 500€ - 12 000€</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-slate-200">Pergola Autoportée (4 piliers)</td>
                                <td className="p-4 border border-slate-200">5 500€ - 8 500€</td>
                                <td className="p-4 border border-slate-200" style={{color: 'green', fontWeight: 'bold'}}>9 000€ - 15 000€</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
