import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Expert Pergola Bioclimatique",
        "legalName": "Expert Pergola Bioclimatique SAS",
        "alternateName": ["ExpertPergolaBioclimatique", "Expert Pergola Bioclimatique France"],
        "url": "https://www.expertpergolabioclimatique.fr",
        "logo": "https://www.expertpergolabioclimatique.fr/icon.png",
        "description": "N°1 de la conception et pose de pergolas bioclimatiques en aluminium sur-mesure pour particuliers et CHR.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Rue des Bateliers",
            "addressLocality": "Clichy",
            "postalCode": "92110",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.9022,
            "longitude": 2.3060
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 1 49 14 02 64",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "French"
        },
        "areaServed": {
            "@type": "Country",
            "name": "France"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertpergolabioclimatique.fr",
        "name": "Expert Pergola Bioclimatique",
        "alternateName": "www.expertpergolabioclimatique.fr",
        "description": "N°1 de la conception et pose de pergolas bioclimatiques en aluminium sur-mesure pour particuliers et CHR.",
        "inLanguage": "fr-FR",
        "publisher": {
            "@type": "Organization",
            "name": "Expert Pergola Bioclimatique"
        }
    };

    return (
        <>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
