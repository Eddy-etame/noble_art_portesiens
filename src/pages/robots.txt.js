import { ACTIVITES } from '../data/activites.js';
export function GET() {
  const site = 'https://noble-art-portesien.com';
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
