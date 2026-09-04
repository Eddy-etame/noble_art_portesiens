/* robots.txt — ouvert à tous, et surtout : il indique où sont les
   fichiers d'aide aux machines. Un llms.txt que personne ne trouve ne
   sert à rien ; on le déclare donc ici, à côté du sitemap. */
export function GET() {
  const site = 'https://noble-art-portesien.com';
  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${site}/sitemap.xml`,
      '',
      '# Aide aux assistants et agents',
      `# Résumé      : ${site}/llms.txt`,
      `# Dossier     : ${site}/llms-full.txt`,
      `# Consignes   : ${site}/ai.txt`,
      `# Carte MCP   : ${site}/.well-known/mcp.json`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
