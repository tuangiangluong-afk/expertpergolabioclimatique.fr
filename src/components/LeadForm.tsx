"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, Shield, Phone, Mail, User, CheckCircle, TrendingUp, Sparkles, ArrowRight, ArrowLeft, Loader2, AlertCircle } from "lucide-react";

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: string;
    themeColor?: string;
    initialProjectType?: string;
}

interface FormData {
    projectType: 'terrasse' | 'allee_garage' | 'tour_piscine' | 'autre';
    monthlyBill: 'plus_50' | '20_50' | 'moins_20';
    roofType: 'toupie_oui' | 'toupie_non' | 'toupie_nsp';
    solarLocation: 'beton_desactive' | 'beton_imprime' | 'beton_lisse_cire' | 'autre';
    name: string;
    email: string;
    phone: string;
    zipCode: string;
    phoneConsent: boolean;
}

const cleanPhone = (v: string) => v.replace(/[^\d+]/g, '');
const isPhoneValid = (v: string) => /^(?:(?:\+|00)33|0)[1-9]\d{8}$/.test(cleanPhone(v));
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({ city, domain, initialProjectType, themeColor = "purple" }: LeadFormProps) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        projectType: (initialProjectType as any) || 'terrasse',
        monthlyBill: '20_50',
        roofType: 'toupie_oui',
        solarLocation: 'beton_desactive',
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        phoneConsent: true
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleOptionSelect = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (fieldErrors[name]) {
            setFieldErrors(prev => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
        if (status === 'error') {
            setStatus('idle');
        }
    };

    const validateStep2 = (): boolean => {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) {
            errors.name = "Veuillez renseigner votre nom complet";
        }
        if (!formData.zipCode.trim() || !ZIP_CODE_REGEX.test(formData.zipCode.trim())) {
            errors.zipCode = "Code postal à 5 chiffres requis (ex: 75000)";
        }
        if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.includes(".")) {
            errors.email = "Adresse email valide requise";
        }
        if (!formData.phone.trim() || !isPhoneValid(formData.phone)) {
            errors.phone = "Numéro de téléphone français valide requis (ex: 06 12 34 56 78)";
        }
        if (!formData.phoneConsent) {
            errors.phoneConsent = "Veuillez accepter d'être contacté pour votre devis";
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const getLeadScore = (): number => {
        let score = 50;
        if (formData.projectType === 'terrasse') score += 10;
        if (formData.monthlyBill === 'plus_50') score += 40;
        return score;
    };

    const handleSubmit = async () => {
        if (!validateStep2()) {
            setStatus('error');
            return;
        }

        setStatus('loading');
        try {
            const payload = {
                ...formData,
                phone: cleanPhone(formData.phone),
                city: city || 'France',
                postalCode: formData.zipCode.trim(),
                domain: domain || 'expertpergolabioclimatique.fr',
                niche: 'pergola',
                consentText: "J'accepte d'être contacté par téléphone par les services qui prendront en charge ma demande de devis pour la qualifier et effectuer une visite technique.",
                consentDate: new Date().toISOString(),
                consentUrl: typeof window !== 'undefined' ? window.location.href : '',
                country: 'FR',
                leadScore: getLeadScore(),
                timestamp: new Date().toISOString()
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Erreur serveur lors de l'enregistrement de votre demande.");
            
            const data = await res.json();
            if (data?.vud?.devis_id) {
                router.push(`/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }
            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setFieldErrors({ global: error.message || "Une erreur est survenue. Veuillez réessayer." });
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-200 rounded-3xl p-8 text-center shadow-lg animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-600" size={36} />
                </div>
                <h3 className="text-2xl font-extrabold text-emerald-950 mb-2">Demande de devis enregistrée !</h3>
                <p className="text-slate-700 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                    Merci <strong>{formData.name}</strong>. Votre simulation de pergola bioclimatique {(!city || city.toLowerCase() === 'france' || city.toLowerCase() === 'national') ? 'en France' : <>à <strong>{city}</strong></>} a bien été transmise aux installateurs certifiés de votre secteur.
                </p>
                <div className="bg-white/80 border border-emerald-100 rounded-2xl p-4 text-xs text-slate-600 max-w-sm mx-auto space-y-1 text-left">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Surface estimée :</span>
                        <span className="font-semibold text-slate-800">{formData.monthlyBill === 'plus_50' ? '> 30 m²' : formData.monthlyBill === 'moins_20' ? '< 15 m²' : '15 à 30 m²'}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Code postal :</span>
                        <span className="font-semibold text-slate-800">{formData.zipCode}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Délai moyen de rappel :</span>
                        <span className="font-semibold text-emerald-700">Moins de 24h ouvrées</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden font-sans">
            {/* Header progress */}
            <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 p-5 text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles size={18} className="text-purple-200" />
                        <h3 className="font-bold text-base md:text-lg">
                            {step === 1 ? `1/2 · Votre projet de pergola` : `2/2 · Coordonnées de votre devis`}
                        </h3>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-purple-100">
                        {step === 1 ? "Étape 1 sur 2" : "Dernière étape"}
                    </span>
                </div>
                <div className="h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
                    <div 
                        className="h-full bg-white rounded-full transition-all duration-300"
                        style={{ width: step === 1 ? "50%" : "100%" }} 
                    />
                </div>
            </div>

            <div className="p-5 md:p-6">
                {step === 1 && (
                    <div className="space-y-5">
                        {/* 1. Emplacement */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                                1. Emplacement souhaité
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('projectType', 'terrasse')}
                                    className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                                        formData.projectType === 'terrasse'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <span className="text-sm">Terrasse maison</span>
                                    <span className="text-[11px] text-slate-500 font-normal mt-0.5">Adossée à la façade</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('projectType', 'allee_garage')}
                                    className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                                        formData.projectType === 'allee_garage'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <span className="text-sm">Jardin / Piscine</span>
                                    <span className="text-[11px] text-slate-500 font-normal mt-0.5">Autoportée 4 pieds</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('projectType', 'tour_piscine')}
                                    className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                                        formData.projectType === 'tour_piscine'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <span className="text-sm">Balcon / Toit</span>
                                    <span className="text-[11px] text-slate-500 font-normal mt-0.5">Appartement / Autre</span>
                                </button>
                            </div>
                        </div>

                        {/* 2. Surface */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                                2. Surface estimée à couvrir
                            </label>
                            <div className="grid grid-cols-3 gap-2.5">
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('monthlyBill', 'moins_20')}
                                    className={`p-3 rounded-xl border text-center transition ${
                                        formData.monthlyBill === 'moins_20'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <div className="text-sm font-semibold">&lt; 15 m²</div>
                                    <div className="text-[10px] text-slate-500">Compacte</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('monthlyBill', '20_50')}
                                    className={`p-3 rounded-xl border text-center transition ${
                                        formData.monthlyBill === '20_50'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <div className="text-sm font-semibold">15 à 30 m²</div>
                                    <div className="text-[10px] text-slate-500">Standard</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('monthlyBill', 'plus_50')}
                                    className={`p-3 rounded-xl border text-center transition ${
                                        formData.monthlyBill === 'plus_50'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <div className="text-sm font-semibold">&gt; 30 m²</div>
                                    <div className="text-[10px] text-slate-500">Grand format</div>
                                </button>
                            </div>
                        </div>

                        {/* 3. Type de toiture */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                                3. Type de couverture
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('roofType', 'toupie_oui')}
                                    className={`p-3 rounded-xl border text-left transition ${
                                        formData.roofType === 'toupie_oui'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <div className="text-sm">Lames orientables motorisées</div>
                                    <div className="text-[11px] text-slate-500 font-normal">Bioclimatique aluminium</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionSelect('roofType', 'toupie_non')}
                                    className={`p-3 rounded-xl border text-left transition ${
                                        formData.roofType === 'toupie_non'
                                            ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-bold shadow-sm'
                                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                    }`}
                                >
                                    <div className="text-sm">Toile rétractable ou verre</div>
                                    <div className="text-[11px] text-slate-500 font-normal">Toit fixe ou ouvrant</div>
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full py-4 mt-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-xl font-bold text-base shadow-lg transition flex items-center justify-center gap-2 active:scale-[0.99]"
                        >
                            <span>Continuer vers mon estimation gratuite</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div className="text-sm text-slate-600 mb-2">
                            Renseignez vos coordonnées pour recevoir le comparatif de prix et le contact d&apos;un technicien certifié {city ? `sur ${city}` : "sur votre secteur"} :
                        </div>

                        {/* Nom */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Nom et prénom *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Jean Dupont"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full p-3 border rounded-xl outline-none font-medium text-slate-900 transition ${
                                    fieldErrors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-purple-600'
                                }`}
                            />
                            {fieldErrors.name && <p className="text-red-600 text-xs mt-1">{fieldErrors.name}</p>}
                        </div>

                        {/* Code Postal + Ville */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Code postal du projet *</label>
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Ex: 75000, 69000, 31000..."
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                maxLength={5}
                                className={`w-full p-3 border rounded-xl outline-none font-medium text-slate-900 transition ${
                                    fieldErrors.zipCode ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-purple-600'
                                }`}
                            />
                            {fieldErrors.zipCode && <p className="text-red-600 text-xs mt-1">{fieldErrors.zipCode}</p>}
                        </div>

                        {/* Téléphone */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Téléphone mobile direct *</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="06 12 34 56 78"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full p-3 border rounded-xl outline-none font-medium text-slate-900 transition ${
                                    fieldErrors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-purple-600'
                                }`}
                            />
                            {fieldErrors.phone && <p className="text-red-600 text-xs mt-1">{fieldErrors.phone}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="jean.dupont@gmail.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-3 border rounded-xl outline-none font-medium text-slate-900 transition ${
                                    fieldErrors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-purple-600'
                                }`}
                            />
                            {fieldErrors.email && <p className="text-red-600 text-xs mt-1">{fieldErrors.email}</p>}
                        </div>

                        {/* Case RGPD */}
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left">
                            <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    name="phoneConsent"
                                    checked={formData.phoneConsent}
                                    onChange={(e) => {
                                        setFormData(prev => ({ ...prev, phoneConsent: e.target.checked }));
                                        if (fieldErrors.phoneConsent) {
                                            setFieldErrors(prev => {
                                                const n = { ...prev };
                                                delete n.phoneConsent;
                                                return n;
                                            });
                                        }
                                    }}
                                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500 accent-purple-600 shrink-0"
                                />
                                <span className="text-[11px] text-slate-600 leading-snug">
                                    J&apos;accepte d&apos;être recontacté(e) gratuitement par les artisans certifiés partenaires pour étudier mon projet de pergola et établir un devis gratuit.
                                </span>
                            </label>
                            {fieldErrors.phoneConsent && <p className="text-red-600 text-xs mt-1">{fieldErrors.phoneConsent}</p>}
                        </div>

                        {fieldErrors.global && (
                            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs">
                                <AlertCircle size={14} />
                                {fieldErrors.global}
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white rounded-xl font-bold text-base shadow-lg transition flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-75"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    <span>Calcul de votre estimation en cours...</span>
                                </>
                            ) : (
                                <span>Obtenir mon devis gratuit sous 24h</span>
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-center text-xs text-slate-500 hover:text-slate-800 py-2 flex items-center justify-center gap-1 transition"
                        >
                            <ArrowLeft size={14} />
                            <span>Modifier les caractéristiques de mon projet</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
