import Script from "next/script";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import StructuredData from "@/components/seo/StructuredData";
import AttributionTracker from "@/components/AttributionTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  // Canonical host is ALWAYS this site's own host: a canonical pointing to another
  // domain (e.g. the Spanish twin) removes the page from this site's index.
  const canonicalDomain = "www.expertpergolabioclimatique.fr";
  const path = headersList.get("x-irve-path") || "";
  const baseUrl = `https://${canonicalDomain}`;

  // hreflang uniquement sur les routes réellement partagées entre les deux domaines
  const sharedPath = path === "/" ? "" : path;
  const sharedNorm = sharedPath.replace(/\/+$/, "") || "/";
  const hreflangLanguages = ["/", "/blog", "/guides", "/glossaire"].includes(sharedNorm)
    ? {
        "fr-FR": `https://www.expertpergolabioclimatique.fr${sharedPath}`,
        "es-ES": `https://www.expertopergolabioclimatica.es${sharedPath}`,
        "x-default": `https://www.expertpergolabioclimatique.fr${sharedPath}`,
      }
    : undefined;

  return {
          title: {
    template: "%s",
    default: "Expert Pergola Bioclimatique® - Pergolas en aluminium sur mesure",
  },
    description: "Aménagez votre espace extérieur sur mesure. Comparez les meilleurs fabricants et installateurs de pergolas bioclimatiques en France.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: hreflangLanguages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Expert Pergola Bioclimatique - Pergola Bioclimatique Sur-Mesure",
      description: "Aménagez votre espace extérieur sur mesure. Comparez les meilleurs fabricants et installateurs de pergolas bioclimatiques en France.",
      siteName: "Expert Pergola Bioclimatique",
      locale: "fr_FR",
      type: "website",
      url: `${baseUrl}${path}`,
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: "Expert Pergola Bioclimatique - Conception & Pose Sur-Mesure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Expert Pergola Bioclimatique - Pergola Bioclimatique Sur-Mesure",
      description: "Aménagez votre espace extérieur sur mesure. Comparez les meilleurs fabricants et installateurs de pergolas bioclimatiques en France.",
      images: [`${baseUrl}/api/og`],
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/favicon.png",
      apple: "/icon.png",
      other: [
        {
          rel: "icon",
          url: "/favicon.ico",
        }
      ]
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PLKMW5XR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        <Script src="https://answershaper.com/api/v1/m2m/local-tag/23.js" strategy="lazyOnload" defer />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLKMW5XR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AttributionTracker />
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-QNPM2KD0CP" />
        {children}
      </body>
    </html>
  );
}
