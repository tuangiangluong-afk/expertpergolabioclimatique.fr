import Script from "next/script";

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Expert Pergola Bioclimatique",
        "legalName": "Expert Pergola Bioclimatique SAS",
        "alternateName": ["ExpertPergolaBioclimatique", "Expert Pergola Bioclimatique Official"],
        "url": "https://www.expertpergolabioclimatique.fr",
        "logo": "https://www.expertpergolabioclimatique.fr/icon.png",
        "image": "https://www.expertpergolabioclimatique.fr/icon.png",
        "description": "N°1 de la pergola bioclimatique en aluminium sur-mesure avec lames orientables motorisées. Installation pour particuliers et CHR en France.",
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

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Conception & Installation de Pergolas Bioclimatiques Aluminium",
        "serviceType": "Conception & Installation de Pergolas Bioclimatiques Aluminium",
        "provider": {
            "@type": "Organization",
            "name": "Expert Pergola Bioclimatique",
            "url": "https://www.expertpergolabioclimatique.fr"
        },
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        },
        "description": "N°1 de la pergola bioclimatique en aluminium sur-mesure avec lames orientables motorisées. Installation pour particuliers et CHR en France.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "2990",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "129",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertpergolabioclimatique.fr",
        "name": "Expert Pergola Bioclimatique",
        "alternateName": "www.expertpergolabioclimatique.fr",
        "description": "N°1 de la pergola bioclimatique en aluminium sur-mesure avec lames orientables motorisées. Installation pour particuliers et CHR en France.",
        "inLanguage": "fr-FR",
        "publisher": {
            "@type": "Organization",
            "name": "Expert Pergola Bioclimatique"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Comment obtenir un devis gratuit pour Expert Pergola Bioclimatique ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Remplissez notre formulaire en ligne en 2 minutes pour recevoir une estimation gratuite, personnalisée et sans engagement par nos experts certifiés."
                }
            },
            {
                "@type": "Question",
                "name": "Quelles sont les garanties fournies par Expert Pergola Bioclimatique ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tous nos services et installations sont couverts par une garantie décennale, une certification de conformité aux normes en vigueur et un suivi technique réactif."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.expertpergolabioclimatique.fr"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Conception & Installation de Pergolas Bioclimatiques Aluminium",
                "item": "https://www.expertpergolabioclimatique.fr/#simulateur"
            }
        ]
    };

    
        const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Pergola Bioclimatique Aluminium",
        "image": [
            "https://www.expertpergolabioclimatique.fr/icon.png"
        ],
        "description": "Pergola Bioclimatique Aluminium avec installation certifiée et garantie.",
        "sku": "EPB-PERGOLA-001",
        "mpn": "EPB-PERGOLA-001",
        "brand": {
            "@type": "Brand",
            "name": "Expert Pergola Bioclimatique"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.expertpergolabioclimatique.fr",
            "priceCurrency": "EUR",
            "price": "2990",
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "129"
        }
    };

    return (
        <>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        </>
    );
}
