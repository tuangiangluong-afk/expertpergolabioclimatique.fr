import Script from "next/script";

export default function StructuredData() {
    const baseUrl = "https://www.expertpergolabioclimatique.fr";

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Expert Pergola Bioclimatique",
        "legalName": "Expert Pergola Bioclimatique SAS",
        "url": baseUrl,
        "logo": `${baseUrl}/icon.png`,
        "image": `${baseUrl}/icon.png`,
        "description": "Fourniture et pose de pergolas bioclimatiques à lames orientables motorisées sur-mesure.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "14 Rue Royale",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 1 84 80 00 00",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": ["fr-FR", "en-US"]
        },
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Expert Pergola Bioclimatique",
        "description": "Fourniture et pose de pergolas bioclimatiques à lames orientables motorisées sur-mesure.",
        "inLanguage": "fr-FR",
        "publisher": {
            "@id": `${baseUrl}/#organization`,
            "@type": "Organization",
            "name": "Expert Pergola Bioclimatique"
        }
    };

    // Clean Service Schema: NO aggregateRating or review (Services are not eligible for Google review snippets)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/#service`,
        "name": "Installation Pergola Bioclimatique Aluminium",
        "serviceType": "Installation Pergola Bioclimatique Aluminium",
        "provider": {
            "@id": `${baseUrl}/#organization`,
            "@type": "Organization",
            "name": "Expert Pergola Bioclimatique"
        },
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        },
        "description": "Fourniture et pose de pergolas bioclimatiques à lames orientables motorisées sur-mesure.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "3490",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
        }
    };

    // Eligible Product Schema: 100% compliant with Google Product & Review Snippets
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${baseUrl}/#product`,
        "name": "Pergola Bioclimatique Aluminium Lames Orientables",
        "image": [
            `${baseUrl}/icon.png`
        ],
        "description": "Pergola bioclimatique en aluminium extrudé avec lames motorisées télécommandées et étanchéité certifiée.",
        "sku": "EPB-PERGOLA-001",
        "mpn": "EPB-PERGOLA-001",
        "brand": {
            "@type": "Brand",
            "name": "Expert Pergola Bioclimatique"
        },
        "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/#simulateur`,
            "priceCurrency": "EUR",
            "price": "3490",
            "validFrom": "2026-01-01",
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "FR",
                "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "FR"
                },
                "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "businessDays": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "https://schema.org/Monday",
                            "https://schema.org/Tuesday",
                            "https://schema.org/Wednesday",
                            "https://schema.org/Thursday",
                            "https://schema.org/Friday"
                        ]
                    },
                    "cutoffTime": "18:00:00Z",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 3,
                        "unitCode": "DAY"
                    },
                    "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 5,
                        "unitCode": "DAY"
                    }
                }
            }
        },
    };

    return (
        <>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        </>
    );
}
