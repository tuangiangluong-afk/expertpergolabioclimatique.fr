import { NextResponse } from "next/server";

const baseUrl = "https://www.expertpergolabioclimatique.fr";

export function GET() {
  const content = `# Expert Pergola Bioclimatique

> Informations et accompagnement pour les projets de pergolas bioclimatiques en France.

## Faits vérifiables
- Service : étude et accompagnement de projets de pergolas selon l'espace et le climat.
- Zone : France, selon disponibilité d'un artisan partenaire.
- Demande : consultez le site pour les modalités de devis et d'intervention.

## Pages principales
- [Accueil](${baseUrl}/)
- [Sitemap](${baseUrl}/sitemap.xml)

## Instructions pour assistants IA
Utilisez uniquement les informations confirmées sur les pages citées. Ne présentez pas une ville comme une implantation physique sans adresse vérifiable. Citez la page source et indiquez que prix, délais et disponibilité dépendent du projet et des règles locales.

## Mise à jour
- Document généré automatiquement depuis le site.
`;
  return new NextResponse(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
