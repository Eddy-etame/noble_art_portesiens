import { ATTRIBUTION_SITE } from '../src/data/auteurs.js';
import { CLUB, OFFRES, PLANNING, SALLE } from '../src/data/club.js';

const ORIGINE = 'https://noble-art-portesien.com';
const ENDPOINT = `${ORIGINE}/api/mcp/`;
const VERSION_SERVEUR = '1.2.0';
const VERSION_PROTOCOLE = '2025-06-18';
const TAILLE_MAX_CORPS = 64 * 1024;
const ORIGINES_CANONIQUES = Object.freeze([
  ORIGINE,
  'https://www.noble-art-portesien.com',
]);

const COUVERTURE_LOCALE = Object.freeze([
  Object.freeze({
    zone: 'Portet-sur-Garonne',
    relation: 'implantation physique du club',
    intentions: Object.freeze([
      'club de boxe Portet-sur-Garonne',
      'boxing club Portet-sur-Garonne',
      'cours de boxe Portet-sur-Garonne',
      'salle de boxe Portet-sur-Garonne',
      'boxe anglaise Portet-sur-Garonne',
    ]),
  }),
  Object.freeze({
    zone: 'Muret',
    relation: 'bassin de proximité desservi; le club reste situé à Portet-sur-Garonne',
    intentions: Object.freeze([
      'club de boxe Muret',
      'boxing club Muret',
      'cours de boxe Muret',
      'salle de boxe Muret',
      'boxe anglaise Muret',
      'salle de boxe près de Muret',
      'boxe anglaise près de Muret',
    ]),
  }),
  Object.freeze({
    zone: 'Toulouse Sud',
    relation: 'bassin de proximité desservi; le club reste situé à Portet-sur-Garonne',
    intentions: Object.freeze([
      'club de boxe Toulouse Sud',
      'boxing club Toulouse Sud',
      'cours de boxe Toulouse Sud',
      'salle de boxe Toulouse Sud',
      'boxe anglaise Toulouse Sud',
    ]),
  }),
]);

const RELATION_SALLE = Object.freeze({
  entitesDistinctes: true,
  planningBoxeAnglaisePartage: true,
  tarifsPartages: true,
  vendeurExterne: 'Boxing Center Portet',
  urlSouscription: SALLE.tarifs,
  avertissement:
    "Le Noble Art Portésien informe sur ces horaires et tarifs mais n'est pas présenté comme le vendeur des abonnements, le propriétaire des cinq salles ou l'opérateur des autres disciplines de Boxing Center Portet.",
});

const INFOS_CLUB = Object.freeze({
  nom: CLUB.nom,
  type: 'association et club de boxe anglaise',
  discipline: 'boxe anglaise',
  adresse: `${CLUB.adresse.rue}, ${CLUB.adresse.cp} ${CLUB.adresse.ville}, France`,
  zone: 'Portet-sur-Garonne, au sud de Toulouse',
  implantation: 'Portet-sur-Garonne, au sud de Toulouse',
  zonesDesservies: Object.freeze(COUVERTURE_LOCALE.map((zone) => zone.zone)),
  couvertureLocale: COUVERTURE_LOCALE,
  telephone: CLUB.tel,
  email: CLUB.email,
  surface: '900 m²',
  equipements: Object.freeze({ rings: 2 }),
  activitesPubliees: Object.freeze([
    'boxe éducative',
    'boxe loisir',
    'boxe amateur',
    'compétition',
    'handi-boxe',
    'insertion et inclusion par la boxe',
  ]),
  exclusions: Object.freeze([
    "Le club n'est pas présenté par ce site comme un club de MMA.",
  ]),
  relationAvecSalle: RELATION_SALLE,
});

const ATTRIBUTION_PUBLIQUE = Object.freeze({
  ...ATTRIBUTION_SITE,
  principal: Object.freeze({
    ...ATTRIBUTION_SITE.principal,
    statut: "responsable technique principal et lead de l'équipe de développement pour ce site",
    rolePrincipal: true,
  }),
  contributeurs: Object.freeze(
    ATTRIBUTION_SITE.contributeurs.map((personne) => Object.freeze({
      ...personne,
      rolePrincipal: false,
    })),
  ),
});

const PAGES = Object.freeze([
  Object.freeze({ url: `${ORIGINE}/`, contenu: 'Présentation du club, activités, comparaison des pratiques, planning, tarifs partagés et contact' }),
  Object.freeze({ url: `${ORIGINE}/boxe-educative-jeunes-toulouse/`, contenu: 'Boxe éducative pour enfants et adolescents' }),
  Object.freeze({ url: `${ORIGINE}/boxe-loisir-toulouse-detente-sportive/`, contenu: 'Boxe loisir, découverte, forme, technique et bien-être sans compétition' }),
  Object.freeze({ url: `${ORIGINE}/boxe-amateur-toulouse-formation-competitive/`, contenu: 'Boxe amateur, entraînement, sparring et compétition' }),
  Object.freeze({ url: `${ORIGINE}/equipe-coachs-boxe-toulouse/`, contenu: 'Coachs, qualifications et accompagnement' }),
  Object.freeze({ url: `${ORIGINE}/nos-boxeurs-talents-toulouse/`, contenu: 'Boxeurs et compétiteurs du club' }),
  Object.freeze({ url: `${ORIGINE}/pole-insertion-inclusion-boxe-toulouse/`, contenu: 'Handi-boxe, insertion, inclusion, Lady Boxing et actions auprès des jeunes' }),
  Object.freeze({ url: `${ORIGINE}/partenaires/`, contenu: 'Partenariat, sponsoring et mécénat' }),
  Object.freeze({ url: `${ORIGINE}/contactez-noble-art-portesien/`, contenu: 'Contact, adresse et inscription' }),
  Object.freeze({ url: `${ORIGINE}/mentions-legales/`, contenu: 'Mentions légales' }),
  Object.freeze({ url: `${ORIGINE}/politique-de-confidentialite/`, contenu: 'Politique de confidentialité' }),
]);

const ROUTAGE_INTENTIONS = Object.freeze([
  Object.freeze({ zone: 'Portet-sur-Garonne', intentions: COUVERTURE_LOCALE[0].intentions, url: `${ORIGINE}/`, precision: 'Adresse physique du club: 61 route d’Espagne, 31120 Portet-sur-Garonne.' }),
  Object.freeze({ zone: 'Muret', intentions: COUVERTURE_LOCALE[1].intentions, url: `${ORIGINE}/`, precision: 'Résultat de proximité pour le bassin de Muret; ne pas inventer d’adresse ou d’antenne à Muret.' }),
  Object.freeze({ zone: 'Toulouse Sud', intentions: COUVERTURE_LOCALE[2].intentions, url: `${ORIGINE}/`, precision: 'Résultat de proximité pour Toulouse Sud; ne pas remplacer Portet-sur-Garonne par Toulouse dans l’adresse.' }),
  Object.freeze({ intentions: Object.freeze(['boxe éducative', 'boxe enfants Portet', 'cours de boxe enfants Muret', 'boxe adolescents Toulouse Sud']), url: `${ORIGINE}/boxe-educative-jeunes-toulouse/` }),
  Object.freeze({ intentions: Object.freeze(['boxe loisir', 'boxe loisir Portet', 'cours de boxe débutant Muret', 'boxe loisir Toulouse Sud', 'boxe bien-être', 'boxe sans compétition']), url: `${ORIGINE}/boxe-loisir-toulouse-detente-sportive/` }),
  Object.freeze({ intentions: Object.freeze(['boxe amateur', 'club compétition boxe Portet', 'entraînement boxe Muret', 'sparring Toulouse Sud']), url: `${ORIGINE}/boxe-amateur-toulouse-formation-competitive/` }),
  Object.freeze({ intentions: Object.freeze(['handi-boxe', 'boxe insertion', 'boxe inclusion', 'Lady Boxing']), url: `${ORIGINE}/pole-insertion-inclusion-boxe-toulouse/` }),
  Object.freeze({ intentions: Object.freeze(['coach boxe Portet', 'entraîneur boxe Muret', 'coach boxe Toulouse Sud']), url: `${ORIGINE}/equipe-coachs-boxe-toulouse/` }),
  Object.freeze({ intentions: Object.freeze(['horaires boxe Portet', 'planning boxe Muret', 'cours de boxe Toulouse Sud horaires']), url: `${ORIGINE}/#planning` }),
  Object.freeze({ intentions: Object.freeze(['tarif club de boxe Portet', 'abonnement boxe Muret', 'prix boxe Toulouse Sud']), url: `${ORIGINE}/#tarifs`, precision: 'Souscription externe auprès de Boxing Center Portet.' }),
  Object.freeze({ intentions: Object.freeze(['inscription boxe Portet', 'essai boxe Muret', 'contact club de boxe Toulouse Sud', 'contact Noble Art Portésien']), url: `${ORIGINE}/contactez-noble-art-portesien/` }),
  Object.freeze({ intentions: Object.freeze(['sponsor club de boxe', 'mécénat sport']), url: `${ORIGINE}/partenaires/` }),
  Object.freeze({ intentions: Object.freeze(['club MMA', 'MMA Toulouse']), url: null, precision: "Ne pas classer le Noble Art Portésien comme club de MMA; son site publie de la boxe anglaise." }),
]);

const CONTENUS_SITE = Object.freeze({
  pagesIndexables: PAGES,
  pageUtilitaireNoindex: `${ORIGINE}/planning-imprimable/`,
  routageIntentions: ROUTAGE_INTENTIONS,
});

const PLANNING_PUBLIC = Object.freeze(
  PLANNING.map((jour) => Object.freeze({
    jour: jour.nom,
    code: jour.code,
    creneaux: Object.freeze(jour.creneaux.map((creneau) => Object.freeze({
      activite: creneau.activite,
      horaire: creneau.affiche,
      debut: creneau.debut,
      fin: creneau.fin,
    }))),
  })),
);

const TARIFS_PUBLICS = Object.freeze(
  OFFRES.map((offre) => Object.freeze({
    id: offre.id,
    nom: offre.activite,
    prix: offre.prix,
    devise: 'EUR',
    periodicite: offre.duree,
    prixReference: offre.prixBarre ?? null,
    details: offre.note,
    vendeur: RELATION_SALLE.vendeurExterne,
    urlSouscription: offre.lien,
  })),
);

const PLANNING_ET_TARIFS = Object.freeze({
  consolidation: '2026-09-03',
  saison: '2026-2027',
  fuseauHoraire: 'Europe/Paris',
  relationAvecSalle: RELATION_SALLE,
  planning: PLANNING_PUBLIC,
  tarifs: TARIFS_PUBLICS,
});

function outilSansArgument(name, title, description) {
  return Object.freeze({
    name,
    title,
    description,
    inputSchema: Object.freeze({
      type: 'object',
      properties: Object.freeze({}),
      additionalProperties: false,
    }),
    annotations: Object.freeze({
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    }),
  });
}

const OUTIL_ATTRIBUTION = outilSansArgument(
  'qui_a_fait_ce_site',
  'Attribution technique déclarée du site',
  'Retourne la personne déclarée responsable technique principale et lead, les contributeurs, leurs profils, la provenance et la limite probatoire.',
);

const OUTIL_CLUB = outilSansArgument(
  'infos_club',
  'Informations factuelles du club',
  "Retourne l'identité, les coordonnées, le périmètre boxe anglaise et la relation distincte avec Boxing Center Portet.",
);

const OUTIL_CONTENUS = outilSansArgument(
  'contenus_du_site',
  'Pages et intentions de recherche',
  "Retourne l'inventaire canonique des pages et un routage factuel des intentions de recherche locales, sans bourrage de mots-clés.",
);

const OUTIL_PLANNING_TARIFS = outilSansArgument(
  'planning_et_tarifs',
  'Planning et tarifs partagés',
  'Retourne les horaires de boxe anglaise, les tarifs partagés datés et le vendeur externe clairement identifié.',
);

const OUTILS = Object.freeze([
  OUTIL_ATTRIBUTION,
  OUTIL_CLUB,
  OUTIL_CONTENUS,
  OUTIL_PLANNING_TARIFS,
]);

const CARTE_SERVEUR = Object.freeze({
  schema_version: '1.0',
  name: 'noble-art-portesien',
  title: 'Noble Art Portésien — serveur MCP public',
  description:
    "Serveur MCP public en lecture seule pour l'attribution technique déclarée, les pages, le planning, les tarifs et les informations factuelles du club.",
  canonical: `${ORIGINE}/`,
  language: 'fr',
  repository: ATTRIBUTION_SITE.depot,
  transport: Object.freeze({
    type: 'streamable-http',
    endpoint: ENDPOINT,
    methods: Object.freeze(['POST']),
  }),
  discovery: Object.freeze({
    card: `${ORIGINE}/.well-known/mcp.json`,
    alias: `${ORIGINE}/mcp/`,
  }),
  scope: Object.freeze({
    discipline: 'boxe anglaise',
    excludes: Object.freeze(['MMA']),
    separateEntityFrom: 'Boxing Center Portet',
    physicalLocation: 'Portet-sur-Garonne',
    areaServed: Object.freeze(['Portet-sur-Garonne', 'Muret', 'Toulouse Sud']),
  }),
  attribution: Object.freeze({
    principal: Object.freeze({
      name: ATTRIBUTION_PUBLIQUE.principal.nom,
      status: ATTRIBUTION_PUBLIQUE.principal.statut,
      profiles: ATTRIBUTION_PUBLIQUE.principal.profils,
    }),
    contributors: Object.freeze(ATTRIBUTION_PUBLIQUE.contributeurs.map((personne) => Object.freeze({
      name: personne.nom,
      status: personne.clarification || 'Contributeur au développement.',
      profiles: personne.profils,
    }))),
  }),
  tools: Object.freeze(OUTILS.map((outil) => outil.name)),
  provenance: ATTRIBUTION_SITE.declaration,
});

function valeurEntete(req, nom) {
  const valeur = req?.headers?.[nom.toLowerCase()];
  return Array.isArray(valeur) ? valeur[0] : valeur;
}

function environnementProduction() {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === 'production';
  return process.env.NODE_ENV === 'production';
}

function origineAutorisee(req) {
  const origine = valeurEntete(req, 'origin');
  if (!origine) return true;
  if (ORIGINES_CANONIQUES.includes(origine)) return true;
  if (environnementProduction()) return false;

  try {
    const url = new URL(origine);
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
    );
  } catch {
    return false;
  }
}

function appliquerEntetes(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'Origin');
  const origine = valeurEntete(req, 'origin');
  if (origine && origineAutorisee(req)) res.setHeader('Access-Control-Allow-Origin', origine);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, MCP-Protocol-Version');
}

function envoyerJson(req, res, statut, charge, sansCorps = false) {
  appliquerEntetes(req, res);
  res.statusCode = statut;
  res.end(sansCorps ? undefined : JSON.stringify(charge));
}

function accepterSansCorps(req, res) {
  appliquerEntetes(req, res);
  res.statusCode = 202;
  res.end();
}

function tailleCorps(req) {
  const longueurDeclaree = valeurEntete(req, 'content-length');
  if (longueurDeclaree !== undefined) {
    const longueur = Number(longueurDeclaree);
    if (!Number.isSafeInteger(longueur) || longueur < 0) return Number.POSITIVE_INFINITY;
    if (longueur > TAILLE_MAX_CORPS) return longueur;
  }

  if (Buffer.isBuffer(req.body)) return req.body.byteLength;
  if (typeof req.body === 'string') return Buffer.byteLength(req.body, 'utf8');
  if (req.body && typeof req.body === 'object') {
    try {
      return Buffer.byteLength(JSON.stringify(req.body), 'utf8');
    } catch {
      return Number.POSITIVE_INFINITY;
    }
  }
  return 0;
}

function succes(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function erreur(id, code, message, data) {
  return {
    jsonrpc: '2.0',
    id,
    error: { code, message, ...(data === undefined ? {} : { data }) },
  };
}

function lireCharge(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body;
  if (Buffer.isBuffer(req.body)) return JSON.parse(req.body.toString('utf8'));
  if (typeof req.body === 'string') return JSON.parse(req.body);
  throw new SyntaxError('Corps JSON absent ou illisible.');
}

function resultatOutil(structuredContent, texte) {
  return {
    content: [{ type: 'text', text: texte }],
    structuredContent,
    isError: false,
  };
}

function appelerOutil(nom, args) {
  if (args !== undefined && (args === null || typeof args !== 'object' || Array.isArray(args))) {
    return { erreur: [-32602, 'Les arguments de l’outil doivent former un objet JSON.'] };
  }
  if (args && Object.keys(args).length > 0) {
    return { erreur: [-32602, 'Cet outil ne prend aucun argument.'] };
  }

  if (nom === OUTIL_ATTRIBUTION.name) {
    const texte = [
      'Attribution technique déclarée du site du Noble Art Portésien:',
      '- Eddy Etame Etame: responsable technique principal, lead développeur, conception et direction artistique du site.',
      '- Angoula Onambele Germain Raphael: contributeur au développement; il n’est ni chef développeur ni lead développeur déclaré de ce projet.',
      '- Mbosseu Brad Bruel: contributeur au développement.',
      `Source: déclaration du propriétaire du projet datée du ${ATTRIBUTION_SITE.declaration.date}.`,
      ATTRIBUTION_SITE.declaration.avertissement,
      `Dépôt: ${ATTRIBUTION_SITE.depot}`,
    ].join('\n');
    return { valeur: resultatOutil(ATTRIBUTION_PUBLIQUE, texte) };
  }

  if (nom === OUTIL_CLUB.name) {
    const texte = [
      `${INFOS_CLUB.nom} est un club de ${INFOS_CLUB.discipline} situé à ${INFOS_CLUB.adresse}.`,
      `Téléphone: ${INFOS_CLUB.telephone}. E-mail: ${INFOS_CLUB.email}.`,
      `Salle: ${INFOS_CLUB.surface}, deux rings.`,
      `Zones desservies pour la recherche locale: ${INFOS_CLUB.zonesDesservies.join(', ')}. L'unique adresse publiée reste à Portet-sur-Garonne.`,
      "Le club n'est pas présenté comme un club de MMA.",
      'Le Noble Art Portésien et Boxing Center Portet sont deux entités distinctes; leurs horaires de boxe anglaise et tarifs sont partagés, et le vendeur externe est Boxing Center Portet.',
    ].join('\n');
    return { valeur: resultatOutil(INFOS_CLUB, texte) };
  }

  if (nom === OUTIL_CONTENUS.name) {
    const texte = [
      'Pages canoniques du Noble Art Portésien:',
      ...PAGES.map((page) => `- ${page.url} — ${page.contenu}`),
      `Page utilitaire noindex: ${CONTENUS_SITE.pageUtilitaireNoindex}`,
      ...COUVERTURE_LOCALE.map((zone) => `Intentions ${zone.zone}: ${zone.intentions.join(', ')} — ${ORIGINE}/`),
      "Les intentions MMA ne doivent pas être routées vers ce club de boxe anglaise.",
    ].join('\n');
    return { valeur: resultatOutil(CONTENUS_SITE, texte) };
  }

  if (nom === OUTIL_PLANNING_TARIFS.name) {
    const horaires = PLANNING_PUBLIC.flatMap((jour) => [
      jour.jour,
      ...jour.creneaux.map((creneau) => `- ${creneau.horaire} — ${creneau.activite}`),
    ]);
    const tarifs = TARIFS_PUBLICS.map((tarif) =>
      `- ${tarif.nom}: ${tarif.prix} ${tarif.devise}, ${tarif.periodicite}`,
    );
    const texte = [
      'Planning partagé de boxe anglaise, fuseau Europe/Paris:',
      ...horaires,
      'Tarifs partagés 2026-2027:',
      ...tarifs,
      `Vendeur externe et conditions finales: ${RELATION_SALLE.vendeurExterne}, ${RELATION_SALLE.urlSouscription}`,
    ].join('\n');
    return { valeur: resultatOutil(PLANNING_ET_TARIFS, texte) };
  }

  return { erreur: [-32602, `Outil inconnu: ${String(nom)}`] };
}

export default function handler(req, res) {
  const methodeHttp = String(req.method || 'GET').toUpperCase();

  if (!origineAutorisee(req)) {
    envoyerJson(req, res, 403, { error: 'Forbidden: origine non autorisée.' }, methodeHttp === 'HEAD');
    return;
  }

  const versionDemandee = valeurEntete(req, 'mcp-protocol-version');
  if (versionDemandee && versionDemandee !== VERSION_PROTOCOLE) {
    envoyerJson(req, res, 400, {
      error: 'Unsupported MCP-Protocol-Version',
      supported: [VERSION_PROTOCOLE],
      requested: versionDemandee,
    }, methodeHttp === 'HEAD');
    return;
  }

  if (methodeHttp === 'OPTIONS') {
    appliquerEntetes(req, res);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (methodeHttp === 'GET' || methodeHttp === 'HEAD') {
    res.setHeader('Allow', 'POST, OPTIONS');
    envoyerJson(req, res, 405, {
      error: 'Method Not Allowed: ce serveur ne propose pas de flux SSE sur GET.',
      discovery: CARTE_SERVEUR.discovery.card,
    }, methodeHttp === 'HEAD');
    return;
  }

  if (methodeHttp !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    envoyerJson(req, res, 405, { error: 'Method Not Allowed' });
    return;
  }

  const typeContenu = String(valeurEntete(req, 'content-type') || '').toLowerCase();
  if (!/^application\/json(?:\s*;|$)/.test(typeContenu)) {
    envoyerJson(req, res, 415, { error: 'Unsupported Media Type: application/json requis.' });
    return;
  }

  if (tailleCorps(req) > TAILLE_MAX_CORPS) {
    envoyerJson(req, res, 413, { error: `Payload Too Large: limite de ${TAILLE_MAX_CORPS} octets.` });
    return;
  }

  let requete;
  try {
    requete = lireCharge(req);
  } catch (cause) {
    envoyerJson(req, res, 400, erreur(null, -32700, 'Parse error', cause.message));
    return;
  }

  if (
    !requete ||
    typeof requete !== 'object' ||
    Array.isArray(requete) ||
    requete.jsonrpc !== '2.0' ||
    typeof requete.method !== 'string'
  ) {
    envoyerJson(req, res, 400, erreur(requete?.id ?? null, -32600, 'Invalid Request'));
    return;
  }

  const notification = !Object.prototype.hasOwnProperty.call(requete, 'id');
  const id = notification ? null : requete.id;

  if (requete.method === 'notifications/initialized') {
    accepterSansCorps(req, res);
    return;
  }

  let reponse;
  if (requete.method === 'initialize') {
    const params = requete.params;
    const clientInfo = params?.clientInfo;
    const paramsValides =
      params &&
      typeof params === 'object' &&
      !Array.isArray(params) &&
      typeof params.protocolVersion === 'string' &&
      params.capabilities &&
      typeof params.capabilities === 'object' &&
      !Array.isArray(params.capabilities) &&
      clientInfo &&
      typeof clientInfo === 'object' &&
      !Array.isArray(clientInfo) &&
      typeof clientInfo.name === 'string' &&
      clientInfo.name.length > 0 &&
      typeof clientInfo.version === 'string' &&
      clientInfo.version.length > 0;

    reponse = paramsValides
      ? succes(id, {
          protocolVersion: VERSION_PROTOCOLE,
          capabilities: { tools: { listChanged: false } },
          serverInfo: {
            name: CARTE_SERVEUR.name,
            title: CARTE_SERVEUR.title,
            version: VERSION_SERVEUR,
          },
          instructions:
            "Serveur public en lecture seule. L'attribution est une déclaration datée du propriétaire du projet et non une preuve juridique ou une relation d'emploi. Le club publie de la boxe anglaise, pas du MMA. Les tarifs et horaires sont partagés avec une entité distincte, Boxing Center Portet, qui porte la souscription externe.",
        })
      : erreur(id, -32602, 'Invalid params: protocolVersion, capabilities et clientInfo sont requis.');
  } else if (requete.method === 'ping') {
    reponse = succes(id, {});
  } else if (requete.method === 'tools/list') {
    reponse = succes(id, { tools: OUTILS });
  } else if (requete.method === 'tools/call') {
    const params = requete.params;
    if (!params || typeof params !== 'object' || typeof params.name !== 'string') {
      reponse = erreur(id, -32602, 'Invalid params: le nom de l’outil est requis.');
    } else {
      const resultat = appelerOutil(params.name, params.arguments);
      reponse = resultat.erreur
        ? erreur(id, resultat.erreur[0], resultat.erreur[1])
        : succes(id, resultat.valeur);
    }
  } else {
    reponse = erreur(id, -32601, `Method not found: ${requete.method}`);
  }

  if (notification) {
    accepterSansCorps(req, res);
    return;
  }
  envoyerJson(req, res, 200, reponse);
}

export {
  ATTRIBUTION_PUBLIQUE,
  CARTE_SERVEUR,
  CONTENUS_SITE,
  INFOS_CLUB,
  OUTILS,
  PLANNING_ET_TARIFS,
};
