import { ACTIVITES, INSERTION } from '../data/activites.js';
export function GET() {
  const site = 'https://noble-art-portesien.com';
  const urls = [
    { u: '/', p: '1.0' },
    ...ACTIVITES.map((a) => ({ u: `/${a.slug}/`, p: '0.9' })),
    { u: `/${INSERTION.slug}/`, p: '0.8' },
    { u: '/equipe-coachs-boxe-toulouse/', p: '0.8' },
    { u: '/nos-boxeurs-talents-toulouse/', p: '0.7' },
    { u: '/partenaires/', p: '0.7' },
    { u: '/contactez-noble-art-portesien/', p: '0.9' },
    { u: '/mentions-legales/', p: '0.3' },
    { u: '/politique-de-confidentialite/', p: '0.3' },
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((x) => `  <url><loc>${site}${x.u}</loc><priority>${x.p}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
