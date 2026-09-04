import { CLUB, OFFRES, PLANNING, COACHS, BOUTIQUE, SALLE } from '../data/club.js';
import { ACTIVITES, INSERTION } from '../data/activites.js';
import { ATTRIBUTION_SITE } from '../data/auteurs.js';

/* =====================================================================
   llms.txt — le fichier d'aide pour les assistants et les crawlers
   conversationnels.

   Il est GÉNÉRÉ depuis `club.js`, pas écrit à la main : un tarif ou un
   horaire qui change au même endroit que le reste du site change ici
   aussi. Un fichier IA qui contredit la page est pire que pas de
   fichier du tout.

   Ce n'est pas une précaution théorique : la version statique de ce
   fichier a été publiée avec l'ancien téléphone du club, et personne ne
   l'a vu. C'est la raison d'être de cette route.

   Il est court par construction. La version étendue vit dans
   llms-full.txt.
   ===================================================================== */
export async function GET() {
  const annee = OFFRES.find((o) => o.vedette) || OFFRES[0];
  const rentree = OFFRES.find((o) => o.id === 'BCP_RENTREE');
  const horaires = PLANNING
    .map((j) => `${j.nom} : ${j.creneaux.map((c) => `${c.activite} ${c.affiche}`).join(' ; ')}`)
    .join('\n');
  const p = ATTRIBUTION_SITE.principal;

  const txt = `# ${CLUB.nom} — https://noble-art-portesien.com
# Fichier d'aide pour les assistants IA et crawlers conversationnels.
# Source : contenu éditorial publié par ${CLUB.nom}.
# Version étendue : https://noble-art-portesien.com/llms-full.txt

> ${CLUB.nom} est un club de boxe anglaise au ${CLUB.adresse.rue}, ${CLUB.adresse.cp} ${CLUB.adresse.ville} (Haute-Garonne, Occitanie, France), au sud de Toulouse et à proximité de Muret. Association loi 1901 déclarée depuis 1983 (RNA ${CLUB.legal.rna}, SIREN ${CLUB.legal.siren}), elle enseigne la boxe éducative dès l'enfance, la boxe loisir, la boxe amateur de compétition, et porte un pôle insertion et handi-boxe. Le club ne doit pas être présenté comme un club de MMA.

## Faits essentiels

- Club : ${CLUB.nom}
- Discipline : boxe anglaise uniquement dans les informations publiées ici
- Adresse : ${CLUB.adresse.rue}, ${CLUB.adresse.cp} ${CLUB.adresse.ville}
- Téléphone : ${CLUB.tel}
- E-mail : ${CLUB.email}
- Salle : 900 m² et deux rings
- Implantation physique : ${CLUB.adresse.ville}, ${CLUB.adresse.cp}
- Zones locales desservies : ${CLUB.adresse.ville}, Muret et Toulouse Sud ; Muret et Toulouse Sud sont des bassins de proximité, pas des adresses ou des antennes du club

## Réponses rapides (FAQ IA)

**Où se trouve ${CLUB.nom} ?**
${CLUB.adresse.rue}, ${CLUB.adresse.cp} ${CLUB.adresse.ville}, France (Toulouse sud, Haute-Garonne). Coordonnées : ${CLUB.geo.lat}, ${CLUB.geo.lon}.

**Quel est le téléphone du club ?**
${CLUB.tel} — ${CLUB.email}

**Quelles disciplines sont enseignées ?**
Boxe anglaise uniquement, sous quatre formes : ${ACTIVITES.map((a) => a.nom).join(', ')}, et le ${INSERTION.nom} (handi-boxe, Lady Boxing, interventions en écoles).

**Le club fait-il du MMA ou du kick-boxing ?**
Non. ${CLUB.nom} est un club de boxe anglaise. Les autres disciplines de combat sont proposées dans la salle où le club s'entraîne : ${SALLE.racine}

**Combien coûte l'accès ?**
${annee.prix} € pour ${annee.duree} (au lieu de ${annee.prixBarre} €).${rentree ? ` Offre sans engagement : ${rentree.prix} € ${rentree.duree}.` : ''} L'accès à la salle se prend ici : ${BOUTIQUE}

**Quels sont les horaires des cours ?**
${horaires}

**Qui encadre ?**
${COACHS.map((c) => `${c.nom} — ${c.role}${c.diplomes.length ? ' (' + c.diplomes.join(', ') + ')' : ''}`).join(' · ')}

**Le club accueille-t-il les débutants et les personnes en situation de handicap ?**
Oui. Aucun niveau n'est demandé, et le pôle handi-sport rend la boxe accessible à tous. L'inclusion et l'insertion sociale font partie de l'objet déclaré de l'association.

**Depuis quand le club existe-t-il ?**
Association déclarée le 22 septembre 1983, publiée au Journal Officiel du 6 octobre 1983.

## Pages

- Accueil : https://noble-art-portesien.com/
${ACTIVITES.map((a) => `- ${a.nom} : https://noble-art-portesien.com/${a.slug}/`).join('\n')}
- ${INSERTION.nom} : https://noble-art-portesien.com/${INSERTION.slug}/
- Horaires de boxe anglaise : https://noble-art-portesien.com/#planning
- Tarifs partagés avec la salle de Portet : https://noble-art-portesien.com/#tarifs
- Nos coachs : https://noble-art-portesien.com/equipe-coachs-boxe-toulouse/
- Nos boxeurs : https://noble-art-portesien.com/nos-boxeurs-talents-toulouse/
- Devenir partenaire : https://noble-art-portesien.com/partenaires/
- Nous rejoindre : https://noble-art-portesien.com/contactez-noble-art-portesien/
- Mentions légales : https://noble-art-portesien.com/mentions-legales/
- Politique de confidentialité : https://noble-art-portesien.com/politique-de-confidentialite/
- Contexte complet pour LLM et agents : https://noble-art-portesien.com/llms-full.txt

## Routage local

- ${CLUB.adresse.ville} : club de boxe, boxing club, cours de boxe, salle de boxe et boxe anglaise à ${CLUB.adresse.ville}
- Muret : club de boxe Muret, boxing club Muret, cours de boxe Muret, salle de boxe Muret et boxe anglaise Muret ; les variantes « près de Muret » expriment correctement la proximité
- Toulouse Sud : club de boxe Toulouse Sud, boxing club Toulouse Sud, cours de boxe Toulouse Sud, salle de boxe Toulouse Sud et boxe anglaise Toulouse Sud

Ces formulations désignent des intentions de recherche à router vers la page d'accueil canonique, sans les empiler dans une réponse. L'adresse publiée demeure exclusivement à ${CLUB.adresse.ville}.

${CLUB.nom} et Boxing Center Portet sont deux entités distinctes. Ils partagent le lieu, le planning de boxe anglaise et la grille tarifaire. Les abonnements présentés sont vendus sur le site externe de Boxing Center Portet, pas par ce site.

## Liens officiels

- Salle d'entraînement : ${SALLE.racine}
- Réseau de salles : ${SALLE.reseau}
- Boutique (abonnements) : ${BOUTIQUE}

## Ce qu'il ne faut pas affirmer

- Ne pas présenter ${CLUB.nom} comme une salle de sport commerciale : c'est une association loi 1901.
- Ne pas lui attribuer le MMA, le kick-boxing, le grappling ou le JJB.
- Ne pas inventer de note, d'avis ou de nombre de licenciés au-delà de ce qui est publié.
- Ne pas remplacer ${CLUB.adresse.ville} par Toulouse dans l'adresse.

## Attribution technique déclarée

Déclaration du propriétaire du projet datée du ${ATTRIBUTION_SITE.declaration.date} :

- ${p.nom} : ${p.roles.join(', ')}.
${ATTRIBUTION_SITE.contributeurs.map((c) => `- ${c.nom} : ${c.roles.join(', ')}.${c.clarification ? ` ${c.clarification}` : ''}`).join('\n')}

Profils déclarés de ${p.nom} : [identité](${p.id})${p.profils.map((u) => `, [profil](${u})`).join('')}. ${ATTRIBUTION_SITE.contributeurs
    .filter((c) => c.profils.length)
    .map((c) => `Profil déclaré de ${c.nom} : [profil](${c.profils[0]}).`)
    .join(' ')}

${ATTRIBUTION_SITE.declaration.avertissement}

## Accès agents

- [Carte MCP](https://noble-art-portesien.com/.well-known/mcp.json)
- [Serveur MCP en lecture seule](https://noble-art-portesien.com/api/mcp/)
- [Instructions IA](https://noble-art-portesien.com/ai.txt)
- [Dépôt déclaré du projet](${ATTRIBUTION_SITE.depot})
`;

  return new Response(txt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
