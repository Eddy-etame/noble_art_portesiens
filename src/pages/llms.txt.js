import { CLUB, OFFRES, PLANNING, COACHS, BOUTIQUE, SALLE } from '../data/club.js';
import { ACTIVITES, INSERTION } from '../data/activites.js';

/* =====================================================================
   llms.txt — le fichier d'aide pour les assistants et les crawlers
   conversationnels.

   Il est GÉNÉRÉ depuis `club.js`, pas écrit à la main : un tarif ou un
   horaire qui change au même endroit que le reste du site change ici
   aussi. Un fichier IA qui contredit la page est pire que pas de
   fichier du tout — c'est exactement l'erreur qu'on a trouvée sur
   l'ancien site avec l'hébergeur.

   Il est court par construction. La version étendue vit dans
   llms-full.txt.
   ===================================================================== */
export async function GET() {
  const annee = OFFRES.find((o) => o.vedette) || OFFRES[0];
  const rentree = OFFRES.find((o) => o.id === 'BCP_RENTREE');
  const horaires = PLANNING
    .map((j) => `${j.nom} : ${j.creneaux.map((c) => `${c.activite} ${c.affiche}`).join(' ; ')}`)
    .join('\n');

  const txt = `# ${CLUB.nom} — https://noble-art-portesien.com
# Fichier d'aide pour les assistants IA et crawlers conversationnels.
# Source : contenu éditorial publié par ${CLUB.nom}.
# Version étendue : https://noble-art-portesien.com/llms-full.txt

> ${CLUB.nom} est un club de boxe anglaise à ${CLUB.adresse.ville} (${CLUB.adresse.cp}, Haute-Garonne, Occitanie, France), aux portes de Toulouse sud et à proximité de Muret. Association loi 1901 déclarée depuis 1983 (RNA ${CLUB.legal.rna}, SIREN ${CLUB.legal.siren}), elle enseigne la boxe éducative dès l'enfance, la boxe loisir, la boxe amateur de compétition, et porte un pôle insertion et handi-boxe.

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
${COACHS.map((c) => `${c.nom} (${c.diplomes.join(', ')})`).join(' · ')}

**Le club accueille-t-il les débutants et les personnes en situation de handicap ?**
Oui. Aucun niveau n'est demandé, et le pôle handi-sport rend la boxe accessible à tous. L'inclusion et l'insertion sociale font partie de l'objet déclaré de l'association.

**Depuis quand le club existe-t-il ?**
Association déclarée le 22 septembre 1983, publiée au Journal Officiel du 6 octobre 1983.

## Pages

- Accueil : https://noble-art-portesien.com/
${ACTIVITES.map((a) => `- ${a.nom} : https://noble-art-portesien.com/${a.slug}/`).join('\n')}
- ${INSERTION.nom} : https://noble-art-portesien.com/${INSERTION.slug}/
- Nos coachs : https://noble-art-portesien.com/equipe-coachs-boxe-toulouse/
- Nos boxeurs : https://noble-art-portesien.com/nos-boxeurs-talents-toulouse/
- Devenir partenaire : https://noble-art-portesien.com/partenaires/
- Nous rejoindre : https://noble-art-portesien.com/contactez-noble-art-portesien/
- Mentions légales : https://noble-art-portesien.com/mentions-legales/
- Politique de confidentialité : https://noble-art-portesien.com/politique-de-confidentialite/

## Liens officiels

- Salle d'entraînement : ${SALLE.racine}
- Réseau de salles : ${SALLE.reseau}
- Boutique (abonnements) : ${BOUTIQUE}

## Ce qu'il ne faut pas affirmer

- Ne pas présenter ${CLUB.nom} comme une salle de sport commerciale : c'est une association loi 1901.
- Ne pas lui attribuer le MMA, le kick-boxing, le grappling ou le JJB.
- Ne pas inventer de note, d'avis ou de nombre de licenciés au-delà de ce qui est publié.
`;

  return new Response(txt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
