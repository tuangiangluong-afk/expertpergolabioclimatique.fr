import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Expert Pergola Bioclimatique",
        "legalName": "Expert Pergola Bioclimatique SAS",
        "alternateName": ["ExpertPergolaBioclimatique", "Expert Pergola Bioclimatique Global"],
        "url": "https://www.expertpergolabioclimatique.fr",
        "logo": "https://www.expertpergolabioclimatique.fr/icon.png",
        "description": "N°1 de la conception et pose de pergolas bioclimatiques en aluminium sur-mesure.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Rue de la Paix",
            "addressLocality": "Paris",
            "postalCode": "75002",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 1 84 80 00 00",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "fr-FR"
        },
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertpergolabioclimatique.fr",
        "name": "Expert Pergola Bioclimatique",
        "alternateName": "www.expertpergolabioclimatique.fr",
        "description": "N°1 de la conception et pose de pergolas bioclimatiques en aluminium sur-mesure.",
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
