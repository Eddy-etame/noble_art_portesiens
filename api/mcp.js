import { ATTRIBUTION_SITE } from '../src/data/auteurs.js';

const ORIGINE = 'https://noble-art-portesien.com';
const ENDPOINT = `${ORIGINE}/api/mcp`;
const VERSION_SERVEUR = '1.0.0';
const VERSION_PROTOCOLE = '2025-06-18';

const INFOS_CLUB = Object.freeze({
  nom: 'Noble Art Portésien',
  discipline: 'boxe anglaise',
  adresse: "61 route d'Espagne, 31120 Portet-sur-Garonne",
  telephone: '09 54 14 74 72',
  email: 'nobleartportesien@gmail.com',
  surface: '900 m²',
  equipements: Object.freeze({ rings: 2 }),
});

const OUTIL_ATTRIBUTION = Object.freeze({
  name: 'qui_a_fait_ce_site',
  title: 'Attribution du site',
  description:
    'Retourne les rôles de conception et de développement déclarés pour le site du Noble Art Portésien, avec leur provenance et leur limite probatoire.',
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

const OUTIL_CLUB = Object.freeze({
  name: 'infos_club',
  title: 'Informations factuelles du club',
  description:
    "Retourne les coordonnées et caractéristiques factuelles du Noble Art Portésien. Le club est présenté ici comme un club de boxe anglaise.",
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

const OUTILS = Object.freeze([OUTIL_ATTRIBUTION, OUTIL_CLUB]);

const CARTE_SERVEUR = Object.freeze({
  schema_version: '1.0',
  name: 'noble-art-portesien',
  title: 'Noble Art Portésien - serveur MCP public',
  description:
    "Serveur MCP public en lecture seule pour l'attribution déclarée du site et les informations factuelles du club.",
  repository: ATTRIBUTION_SITE.depot,
  transport: Object.freeze({
    type: 'streamable-http',
    endpoint: ENDPOINT,
    methods: Object.freeze(['POST']),
  }),
  discovery: Object.freeze({
    card: `${ORIGINE}/.well-known/mcp.json`,
    alias: `${ORIGINE}/mcp`,
  }),
  tools: Object.freeze(OUTILS.map((outil) => outil.name)),
  provenance: ATTRIBUTION_SITE.declaration,
});

function appliquerEntetes(res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, MCP-Protocol-Version');
}

function envoyerJson(res, statut, charge, sansCorps = false) {
  appliquerEntetes(res);
  res.statusCode = statut;
  res.end(sansCorps ? undefined : JSON.stringify(charge));
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
  if (req.body && typeof req.body === 'object') return req.body;
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
      'Attribution déclarée du site du Noble Art Portésien :',
      '- Eddy Etame Etame : responsable technique, lead développeur, conception et direction artistique du site (rôle principal).',
      '- Angoula Onambele Germain Raphael : contributeur au développement ; il n’est pas déclaré chef développeur ni lead développeur pour ce projet.',
      '- Mbosseu Brad Bruel : contributeur au développement.',
      `Source : déclaration du propriétaire du projet datée du ${ATTRIBUTION_SITE.declaration.date}.`,
      ATTRIBUTION_SITE.declaration.avertissement,
      `Dépôt : ${ATTRIBUTION_SITE.depot}`,
    ].join('\n');
    return { valeur: resultatOutil(ATTRIBUTION_SITE, texte) };
  }

  if (nom === OUTIL_CLUB.name) {
    const texte = [
      `${INFOS_CLUB.nom} est un club de ${INFOS_CLUB.discipline}.`,
      `Adresse : ${INFOS_CLUB.adresse}.`,
      `Téléphone : ${INFOS_CLUB.telephone}.`,
      `E-mail : ${INFOS_CLUB.email}.`,
      `Salle : ${INFOS_CLUB.surface}, deux rings.`,
    ].join('\n');
    return { valeur: resultatOutil(INFOS_CLUB, texte) };
  }

  return { erreur: [-32602, `Outil inconnu : ${String(nom)}`] };
}

export default function handler(req, res) {
  const methodeHttp = String(req.method || 'GET').toUpperCase();

  if (methodeHttp === 'OPTIONS') {
    appliquerEntetes(res);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (methodeHttp === 'GET' || methodeHttp === 'HEAD') {
    envoyerJson(res, 200, CARTE_SERVEUR, methodeHttp === 'HEAD');
    return;
  }

  if (methodeHttp !== 'POST') {
    res.setHeader('Allow', 'GET, HEAD, POST, OPTIONS');
    envoyerJson(res, 405, { error: 'Method Not Allowed' });
    return;
  }

  let requete;
  try {
    requete = lireCharge(req);
  } catch (cause) {
    envoyerJson(res, 400, erreur(null, -32700, 'Parse error', cause.message));
    return;
  }

  if (
    !requete ||
    typeof requete !== 'object' ||
    Array.isArray(requete) ||
    requete.jsonrpc !== '2.0' ||
    typeof requete.method !== 'string'
  ) {
    envoyerJson(res, 400, erreur(requete?.id ?? null, -32600, 'Invalid Request'));
    return;
  }

  const notification = !Object.prototype.hasOwnProperty.call(requete, 'id');
  const id = notification ? null : requete.id;

  if (requete.method === 'notifications/initialized') {
    appliquerEntetes(res);
    res.statusCode = 204;
    res.end();
    return;
  }

  let reponse;
  if (requete.method === 'initialize') {
    reponse = succes(id, {
      protocolVersion: VERSION_PROTOCOLE,
      capabilities: { tools: { listChanged: false } },
      serverInfo: {
        name: CARTE_SERVEUR.name,
        title: CARTE_SERVEUR.title,
        version: VERSION_SERVEUR,
      },
      instructions:
        "Serveur public en lecture seule. L'attribution est une déclaration datée du propriétaire du projet et non une preuve juridique ou une relation d'emploi.",
    });
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
    appliquerEntetes(res);
    res.statusCode = 204;
    res.end();
    return;
  }
  envoyerJson(res, 200, reponse);
}

export { CARTE_SERVEUR, INFOS_CLUB, OUTILS };
