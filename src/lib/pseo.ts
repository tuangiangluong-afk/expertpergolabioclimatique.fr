import type { CityConfig } from "@/lib/db";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
}

const DEFAULT_REGIONAL = {
    subsidyName: "Garantía de Fábrica 10 Años",
    subsidyAmount: "Promoción de Temporada aplicable",
    avgPrice: "3.500€ – 8.000€"
};

function getExpertTip(city: string, postalCode: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const tips = [
        `Para su pérgola bioclimática en ${city}, recomendamos integrar iluminación LED regulable en las lamas para disfrutar de su terraza también durante las noches de verano.`,
        `En ${city}, añadir cortinas de cristal o toldos zip laterales a su pérgola le permitirá crear un cerramiento completo para aprovechar el espacio exterior durante los días de lluvia o viento.`,
        `Todas nuestras pérgolas instaladas en ${city} cuentan con sensores de lluvia y viento automatizados para cerrar las lamas automáticamente en caso de mal tiempo.`
    ];
    return tips[hash % tips.length];
}

function getIntroHtml(city: string, postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    
    // Evaluate closures replacing ${city} etc.
    const intros = [
        `<p class="mb-4">¿Busca transformar su terraza o jardín en <strong>${city}</strong> con una <strong>pérgola bioclimática</strong> de diseño? Nuestros instaladores especializados montan estructuras de aluminio con lamas orientables a medida.</p><p>Una pérgola bioclimática motorizada en ${city} tiene un precio estimado de <strong>${avgPrice}</strong> dependiendo de las dimensiones y extras. Regule la temperatura y la entrada de luz solar de forma natural.</p>`,
        `<p class="mb-4">Cree un nuevo espacio de vida en el exterior de su vivienda en <strong>${city}</strong>. Nuestras pérgolas bioclimáticas le protegen del sol, la lluvia y el viento, revalorizando su propiedad.</p><p>Presupuesto estimado: <strong>${avgPrice}</strong> instalación incluida. Ofrecemos acabados premium en diferentes colores de aluminio y opciones de domótica avanzada.</p>`
    ];

    return intros[hash % intros.length];
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, postalCode, pricing } = cityConfig;
    const postal = postalCode || "";
    
    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    // Use a small local function to render the strings that require dynamic interpolation 
    // at runtime (since the strings above use ${city} which we need to evaluate at runtime)
    
    const renderTip = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const tips = [
        `Para su pérgola bioclimática en ${c}, recomendamos integrar iluminación LED regulable en las lamas para disfrutar de su terraza también durante las noches de verano.`,
        `En ${c}, añadir cortinas de cristal o toldos zip laterales a su pérgola le permitirá crear un cerramiento completo para aprovechar el espacio exterior durante los días de lluvia o viento.`,
        `Todas nuestras pérgolas instaladas en ${c} cuentan con sensores de lluvia y viento automatizados para cerrar las lamas automáticamente en caso de mal tiempo.`
      ];
      return tips[hash % tips.length];
    };

    const renderIntro = (c: string, p: string, avg: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const intros = [
        `<p class="mb-4">¿Busca transformar su terraza o jardín en <strong>${c}</strong> con una <strong>pérgola bioclimática</strong> de diseño? Nuestros instaladores especializados montan estructuras de aluminio con lamas orientables a medida.</p><p>Una pérgola bioclimática motorizada en ${c} tiene un precio estimado de <strong>${avg}</strong> dependiendo de las dimensiones y extras. Regule la temperatura y la entrada de luz solar de forma natural.</p>`,
        `<p class="mb-4">Cree un nuevo espacio de vida en el exterior de su vivienda en <strong>${c}</strong>. Nuestras pérgolas bioclimáticas le protegen del sol, la lluvia y el viento, revalorizando su propiedad.</p><p>Presupuesto estimado: <strong>${avg}</strong> instalación incluida. Ofrecemos acabados premium en diferentes colores de aluminio y opciones de domótica avanzada.</p>`
      ];
      return intros[hash % intros.length];
    };

    return {
        meta_title: `Instalador Pérgolas Bioclimáticas en ${city}${postal ? ` (${postal})` : ""} | A Medida`,
        meta_description: `Diseño e instalación de pérgolas bioclimáticas de aluminio a medida en ${city}. Disfrute de su terraza todo el año. Pida su presupuesto gratuito en 24h.`,
        hero_title: `Instalador de <span class="text-slate-500">Pérgolas Bioclimáticas</span> en ${city}${postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : ""}`,
        hero_badge: regionalInfo.subsidyName,
        intro_html: renderIntro(city, postal, realPrice),
        cta_primary: "Solicitar diseño y presupuesto 3D",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip: renderTip(city),
    };
}
