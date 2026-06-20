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
            setErrorMessage("Por favor, rellene todos los campos correctamente.");
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

            if (!res.ok) throw new Error('Error al enviar');
            
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
                <h3 className="text-2xl font-bold text-purple-800 mb-3">¡Solicitud de diseño recibida!</h3>
                <p className="text-neutral-700 mb-6">
                    Su solicitud ha sido registrada correctamente. Un especialista en pérgolas de aluminio se pondrá en contacto con usted en **24 horas** para su proyecto en **{city}**.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 p-6 text-white">
                <h3 className="font-bold text-lg">{`Simulador de Pérgolas en ${city} 2026`}</h3>
                <div className="h-2 bg-white/20 rounded-full mt-4">
                    <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Cuál es el tipo de su vivienda?</h4>
                        <button onClick={() => { handleOptionSelect('projectType', 'terrasse'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-purple-500" />
                            <div>
                                <div className="font-bold">Chalet independiente / Pareado</div>
                                <div className="text-sm text-neutral-500">Espacio ideal para pérgola o porche de aluminio</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('projectType', 'allee_garage'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Ático o piso con gran terraza</div>
                                <div className="text-sm text-neutral-500">Apto para pérgolas autoportantes o adosadas</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Tamaño estimado de la terraza/jardín a cubrir?</h4>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'plus_50'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <TrendingUp className="text-purple-500" />
                            <div>
                                <div className="font-bold">Más de 30m²</div>
                                <div className="text-sm text-neutral-500">Espacio amplio, ideal para proyectos premium</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', '20_50'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Entre 15m² y 30m²</div>
                                <div className="text-sm text-neutral-500">Tamaño estándar de terraza o porche</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'moins_20'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Menos de 15m²</div>
                                <div className="text-sm text-neutral-500">Proyecto compacto a medida</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Qué tipo de estructura exterior prefiere?</h4>
                        <button onClick={() => { handleOptionSelect('roofType', 'toupie_oui'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-purple-500" />
                            <div>
                                <div className="font-bold">Pérgola Bioclimática</div>
                                <div className="text-sm text-neutral-500">Lamas de aluminio orientables motorizadas</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'toupie_non'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Cerramientos de cristal / Toldo</div>
                                <div className="text-sm text-neutral-500">Cortinas de vidrio o toldos motorizados</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Dispone ya de una estructura a sustituir o reformar?</h4>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'beton_desactive'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap className="text-purple-500" />
                            <div>
                                <div className="font-bold">Sí, una estructura o toldo antiguo</div>
                                <div className="text-sm text-neutral-500">Reforma y renovación completa</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'beton_imprime'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">No, es un espacio completamente libre</div>
                                <div className="text-sm text-neutral-500">Nueva estructura e instalación de obra limpia</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Solicite su diseño y presupuesto a medida</h4>
                        <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="text" name="zipCode" placeholder="Código Postal (ej. 29600)" value={formData.zipCode} onChange={handleInputChange} maxLength={5} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        <input type="tel" name="phone" placeholder="Número de teléfono" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-purple-500" />
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        
                        <button onClick={handleSubmit} disabled={status === 'loading'} className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-lg transition">
                            {status === 'loading' ? 'Enviando...' : 'Pedir presupuesto a medida'}
                        </button>
                    </div>
                )}

                <div className="flex gap-3 mt-6">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 border rounded-xl hover:bg-neutral-50">
                            Atrás
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
