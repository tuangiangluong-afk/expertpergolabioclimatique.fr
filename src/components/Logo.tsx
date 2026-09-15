import Link from "next/link";
import { SunMedium } from "lucide-react";

interface LogoProps {
    themeColor?: string;
    city?: string | null;
    isHub?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "light";
    className?: string;
    customLink?: string;
}

export default function Logo({
    city,
    isHub = false,
    size = "md",
    variant = "default",
    className = "",
    customLink
}: LogoProps) {
    const sizes = {
        sm: { height: 32, text: "text-lg", iconSize: 22 },
        md: { height: 48, text: "text-xl", iconSize: 28 },
        lg: { height: 64, text: "text-3xl", iconSize: 38 },
    };

    const s = sizes[size];

    const colors = {
        default: {
            expert: "text-slate-900",
            niche: "text-purple-700",
            dot: "text-purple-500",
            cityText: "text-purple-700"
        },
        light: {
            expert: "text-white",
            niche: "text-white",
            dot: "text-purple-300",
            cityText: "text-white"
        }
    }[variant];

    return (
        <Link href={customLink || "/"} className={`flex items-center gap-2.5 ${className}`}>
            <div className={`flex items-center justify-center p-2 rounded-xl transition ${variant === "light" ? "bg-white/10 border border-white/20 text-white" : "bg-purple-50 border border-purple-200/80 text-purple-700 shadow-sm"}`}>
                <SunMedium size={s.iconSize} strokeWidth={2.2} />
            </div>
            <div className={`${s.text} font-bold tracking-tight leading-tight`}>
                <span className={colors.expert}>Expert </span>
                <span className={`${colors.niche} ${city ? "" : "bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600"}`}>Pergola</span>
                {city && (
                    <span className={`${colors.niche} block text-xs font-semibold uppercase tracking-wider text-purple-700`}>{city}</span>
                )}
            </div>
        </Link>
    );
}

export function LogoIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
    return (
        <div className={`flex items-center justify-center p-2 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-700 ${className}`}>
            <SunMedium size={size} strokeWidth={2.2} />
        </div>
    );
}
