import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const BRAND = {
    name: "Expert Pergola Bioclimatique",
    domain: "www.expertpergolabioclimatique.fr",
    color: "#9333ea",
    baseline: "Pergolas bioclimatiques aluminium & sur-mesure",
    cta: "Étude & Devis Gratuit 24h",
};

function pretty(raw: string): string {
    return raw
        .split("-")
        .map((w) => (w.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) : w.toUpperCase()))
        .join(" ");
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").slice(0, 56);
    const sub = (searchParams.get("sub") || BRAND.baseline).slice(0, 110);
    const badge = (searchParams.get("badge") || "").slice(0, 36);
    const title = q ? pretty(q) : "Pergolas Bioclimatiques 2026";

    const titleFontSize = title.length > 36 ? 48 : title.length > 24 ? 60 : 72;

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#09090b",
                    backgroundImage: "linear-gradient(135deg, #09090b 0%, #1e112a 50%, #09090b 100%)",
                    padding: "56px 64px",
                    justifyContent: "space-between",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{ display: "flex", width: 14, height: 56, backgroundColor: BRAND.color, borderRadius: 4 }} />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", color: "#f8fafc", fontSize: 32, fontWeight: 800 }}>{BRAND.name}</div>
                            <div style={{ display: "flex", color: "#a855f7", fontSize: 20, marginTop: 2 }}>{BRAND.domain}</div>
                        </div>
                    </div>
                    {badge ? (
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(147, 51, 234, 0.2)",
                                border: "1px solid rgba(168, 85, 247, 0.4)",
                                color: "#d8b4fe",
                                fontSize: 16,
                                fontWeight: 700,
                                padding: "8px 18px",
                                borderRadius: 9999,
                                letterSpacing: "0.05em",
                            }}
                        >
                            {badge}
                        </div>
                    ) : null}
                </div>

                <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
                    <div
                        style={{
                            display: "flex",
                            color: "#ffffff",
                            fontSize: titleFontSize,
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#c084fc",
                            fontSize: 26,
                            fontWeight: 500,
                            marginTop: 18,
                            lineHeight: 1.35,
                        }}
                    >
                        {sub}
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24 }}>
                    <div style={{ display: "flex", color: "#e2e8f0", fontSize: 20, fontWeight: 600 }}>
                        {BRAND.cta}
                    </div>
                    <div style={{ display: "flex", color: "#94a3b8", fontSize: 16 }}>
                        Aluminium Qualicoat &bull; Pose Qualibat &bull; Garantie 10 ans
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            headers: { "cache-control": "public, max-age=86400, s-maxage=604800" },
        },
    );
}
