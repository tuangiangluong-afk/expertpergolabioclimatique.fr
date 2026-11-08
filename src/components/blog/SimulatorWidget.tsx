"use client";

import { CheckCircle, Sparkles } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function SimulatorWidget() {
    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <LeadForm 
                city="France" 
                domain="expertpergolabioclimatique.fr" 
                themeColor="purple" 
            />
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-emerald-700 font-medium flex items-center justify-center gap-1.5">
                <CheckCircle size={14} /> Devis 100% gratuit & sans engagement
            </div>
        </div>
    );
}
