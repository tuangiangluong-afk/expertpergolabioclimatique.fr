"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, User, Shield, Phone, Mail, User2, ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Zap } from "lucide-react";

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: string;
    themeColor?: string;
    initialProjectType?: string;
}

interface FormData {
    projectType: 'terrasse' | 'allee_garage' | 'tour_piscine' | 'autre' | null;
    monthlyBill: 'plus_50' | '20_50' | 'moins_20' | null;
    roofType: 'toupie_oui' | 'toupie_non' | 'toupie_nsp' | null;
    solarLocation: 'beton_desactive' | 'beton_imprime' | 'beton_lisse_cire' | 'autre' | null;
    name: string;
    email: string;
    phone: string;
    zipCode: string;
}

const PHONE_REGEX = /^(?:\+?34)?\s*[6789](?:[\s.-]*\d){8}$/;
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({ city, domain, initialProjectType }: LeadFormProps) {
    const router = useRouter();
    const [step, setStep] = useState(initialProjectType ? 2 : 1);
    const [formData, setFormData] = useState<FormData>({
        projectType: (initialProjectType as any) || null,
        monthlyBill: null,
        roofType: null,
        solarLocation: null,
        name: "",
        email: "",
        phone: "",
        zipCode: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    const handleOptionSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage("");
        }
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 1: return formData.projectType !== null;
            case 2: return formData.monthlyBill !== null;
            case 3: return formData.roofType !== null;
            case 4: return formData.solarLocation !== null;
            case 5:
                return (
                    formData.name.trim() !== "" &&
                    formData.email.includes("@") &&
                    ZIP_CODE_REGEX.test(formData.zipCode.trim()) &&
                    PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))
                );
            default: return false;
        }
    };

    const nextStep = () => { if (canProceed() && step < totalSteps) setStep(step + 1); };
    const prevStep = () => { if (step > 1) setStep(step - 1); };

    const getLeadScore = (): number => {
        let score = 50;
        if (formData.projectType === 'terrasse') score += 10;
        if (formData.monthlyBill === 'plus_50') score += 40; // >30m2 is high ticket pergola booster (+50/40)
        return score;
    };

    const handleSubmit = async () => {
        if (!canProceed()) {
            setStatus('error');
            setErrorMessage("Veuillez remplir tous les champs correctement.");
            return;
        }

        setStatus('loading');
        try {
            const payload = {
                ...formData,
                city,
                postalCode: formData.zipCode,
                domain,
                niche: 'pergola',
                country: 'ES',
                leadScore: getLeadScore(),
                timestamp: new Date().toISOString()
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Erreur lors de l'envoi");
            
            const data = await res.json();
            if (data?.vud?.devis_id) {
                router.push(`/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }
            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50/30 border border-purple-200 rounded-3xl p-8 text-center">
                <CheckCircle className="text-purple-600 mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Demande de devis reçue !</h3>
                <p className="text-neutral-700 mb-6">
                    Votre demande a bien été enregistrée. Un spécialiste en pergolas bioclimatiques vous contactera sous **24h** pour votre projet à **{city}**.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 p-6 text-white">
                <h3 className="font-bold text-lg">{`Simulateur de Pergolas en ${city} 2026`}</h3>
                <div className="h-2 bg-white/20 rounded-full mt-4">
                    <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Quel est votre type de logement ?</h4>
                        <button onClick={() => { handleOptionSelect('projectType', 'terrasse'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-purple-500" />
                            <div>
                                <div className="font-bold">Maison individuelle</div>
                                <div className="text-sm text-neutral-500">Espace idéal pour une pergola bioclimatique</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('projectType', 'allee_garage'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Appartement avec grande terrasse</div>
                                <div className="text-sm text-neutral-500">Idéal pour pergola adossée ou autoportante</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Surface estimée à couvrir ?</h4>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'plus_50'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <TrendingUp className="text-purple-500" />
                            <div>
                                <div className="font-bold">Plus de 30m²</div>
                                <div className="text-sm text-neutral-500">Grand espace, ideal pour une pergola sur-mesure</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', '20_50'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Entre 15m² et 30m²</div>
                                <div className="text-sm text-neutral-500">Taille standard pour une terrasse</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'moins_20'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Moins de 15m²</div>
                                <div className="text-sm text-neutral-500">Projet compact sur-mesure</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Quel type de structure préférez-vous ?</h4>
                        <button onClick={() => { handleOptionSelect('roofType', 'toupie_oui'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-purple-500" />
                            <div>
                                <div className="font-bold">Pergola Bioclimatique</div>
                                <div className="text-sm text-neutral-500">Lames en aluminium orientables et motorisées</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'toupie_non'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Pergola classique / Store</div>
                                <div className="text-sm text-neutral-500">Toile rétractable ou toit fixe</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Avez-vous déjà une structure à remplacer ?</h4>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'beton_desactive'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap className="text-purple-500" />
                            <div>
                                <div className="font-bold">Oui, une ancienne structure ou store</div>
                                <div className="text-sm text-neutral-500">Remplacement et rénovation</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'beton_imprime'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Non, l'espace est libre</div>
                                <div className="text-sm text-neutral-500">Installation d'une structure neuve</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Demandez votre devis sur-mesure</h4>
                        <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="text" name="zipCode" placeholder="Code Postal (ex: 75000)" value={formData.zipCode} onChange={handleInputChange} maxLength={5} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        
                        <button onClick={handleSubmit} disabled={status === 'loading'} className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-lg transition">
                            {status === 'loading' ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}
                        </button>
                    </div>
                )}

                <div className="flex gap-3 mt-6">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 border rounded-xl hover:bg-neutral-50">
                            Retour
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
