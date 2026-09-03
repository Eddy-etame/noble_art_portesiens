import { defineConfig } from 'astro/config';

// HTML d'abord. Aucun framework client, aucune hydratation par defaut :
// le peu de JavaScript qui existe est ecrit a la main et charge en differe.
export default defineConfig({
  site: 'https://noble-art-portesien.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
