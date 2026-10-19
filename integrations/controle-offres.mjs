import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

/* =====================================================================
   CONTRÔLE DES OFFRES — lancé à la fin de chaque `astro build`.

   Les pages d'offre /offre/29, /offre/259 et /offres-speciales ont été
   retirées de la boutique le 19 octobre 2026. Un lien qui y mène encore
   envoie le visiteur sur une page vide : le build échoue plutôt que de
   le publier. Sont lus : la sortie du build (pages, JSON-LD, llms.txt)
   et les fonctions serveur de `api/`, qui ne passent pas par le build.
   ===================================================================== */
const INTERDITS = [
  { motif: /offre\/29(?![0-9])/, raison: 'lien vers /offre/29' },
  { motif: /offre\/259/, raison: 'lien vers /offre/259' },
  { motif: /offres-speciales/, raison: 'lien vers /offres-speciales' },
  { motif: /offre-duo|offre-saison/, raison: 'produit retiré de la boutique' },
];
const LISIBLES = /\.(html|txt|xml|json|js|mjs|css|webmanifest)$/;

async function* fichiers(dossier) {
  for (const e of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, e.name);
    if (e.isDirectory()) yield* fichiers(chemin);
    else if (LISIBLES.test(e.name)) yield chemin;
  }
}

export default function controleOffres() {
  let racine = process.cwd();
  return {
    name: 'controle-offres',
    hooks: {
      'astro:config:done': ({ config }) => { racine = fileURLToPath(config.root); },
      'astro:build:done': async ({ dir, logger }) => {
        const dossiers = [fileURLToPath(dir), join(racine, 'api')];
        const fautes = [];
        let lus = 0;
        for (const dossier of dossiers) {
          for await (const f of fichiers(dossier)) {
            lus += 1;
            const texte = await readFile(f, 'utf8');
            for (const { motif, raison } of INTERDITS) {
              const m = texte.match(motif);
              if (m) fautes.push(`${relative(racine, f)} — ${raison} (« ${m[0]} »)`);
            }
          }
        }
        if (fautes.length) {
          throw new Error(`Contrôle des offres : ${fautes.length} faute(s)\n  ${fautes.join('\n  ')}`);
        }
        logger.info(`contrôle des offres : ${lus} fichiers lus, aucun lien vers une offre retirée`);
      },
    },
  };
}
