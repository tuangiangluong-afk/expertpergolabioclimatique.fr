import { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demande de devis reçue | Expert Béton Décoratif",
        robots: { index: false, follow: false },
    };
}

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white rounded-3xl p-8 border shadow-xl text-center">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6" />
                <h1 className="text-3xl font-black text-slate-900 mb-4">Demande de devis validée !</h1>
                <p className="text-slate-600 mb-8">
                    Votre demande de devis pour vos travaux de béton décoratif a bien été enregistrée. Nos artisans partenaires certifiés étudient vos informations et vous recontacteront sous 24h à 48h.
                </p>
                <Link href="/" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-600 transition">
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}
