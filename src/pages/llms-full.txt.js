import { CLUB, OFFRES, PLANNING, COACHS, BOXEURS, TEMOIGNAGES, PARTENAIRES, BOUTIQUE, SALLE } from '../data/club.js';
import { ACTIVITES, INSERTION, PESEE } from '../data/activites.js';

/* =====================================================================
   llms-full.txt — la version étendue.

   Même règle : généré depuis la source unique. Il porte le contenu
   éditorial du club au mot près, ses tarifs, son planning complet, ses
   coachs et ses boxeurs, pour qu'un assistant qui cite le club cite
   quelque chose d'exact.
   ===================================================================== */
export async function GET() {
  const L = [];
  const A = (x) => L.push(x);

  A(`# ${CLUB.nom} — dossier complet`);
  A(`# https://noble-art-portesien.com/llms-full.txt`);
  A(`# Généré depuis la source de données du site. Dernière génération : ${new Date().toISOString().slice(0, 10)}`);
  A('');

  A('## Identité');
  A(`Nom : ${CLUB.nom}`);
  A(`Nature : association loi 1901`);
  A(`Objet déclaré : ${CLUB.legal.objet}`);
  A(`Déclaration : 22 septembre 1983 — Journal Officiel du 6 octobre 1983`);
  A(`RNA : ${CLUB.legal.rna} · SIREN : ${CLUB.legal.siren}`);
  A(`Président : ${CLUB.legal.president}`);
  A(`Adresse : ${CLUB.adresse.rue}, ${CLUB.adresse.cp} ${CLUB.adresse.ville}, France`);
  A(`Coordonnées : ${CLUB.geo.lat}, ${CLUB.geo.lon}`);
  A(`Téléphone : ${CLUB.tel} · E-mail : ${CLUB.email}`);
  A(`Zone desservie : Portet-sur-Garonne, Toulouse sud, Muret, Haute-Garonne (31), Occitanie`);
  A(`Discipline : boxe anglaise exclusivement`);
  A('');

  A('## Activités');
  ACTIVITES.forEach((a) => {
    A(`### ${a.nom} — https://noble-art-portesien.com/${a.slug}/`);
    A(a.chapeau);
    A(a.sectionTexte);
    a.piliers.forEach((p) => A(`- ${p.titre} : ${p.texte}`));
    A('');
  });

  A(`### ${INSERTION.nom} — https://noble-art-portesien.com/${INSERTION.slug}/`);
  A(INSERTION.chapeau);
  A(INSERTION.sectionTexte);
  (INSERTION.poles || []).forEach((p) => A(`- ${p.titre} : ${p.texte}`));
  (INSERTION.actions || []).forEach((x) => A(`- ${x.titre} : ${x.texte}`));
  A('');

  A('## Comparatif des trois boxes');
  if (PESEE && PESEE.colonnes) {
    PESEE.colonnes.forEach((c) => {
      A(`### ${c.nom}`);
      (PESEE.lignes || []).forEach((l) => {
        if (l.cle === 'intensite') A(`- ${l.libelle} : ${c.intensite}/3`);
        else if (c[l.cle]) A(`- ${l.libelle} : ${c[l.cle]}`);
      });
      A('');
    });
  }

  A('## Planning des entraînements');
  PLANNING.forEach((j) => {
    A(`### ${j.nom}`);
    j.creneaux.forEach((c) => A(`- ${c.affiche} — ${c.activite}`));
  });
  A('');

  A('## Tarifs et accès à la salle');
  A(`Le club s'entraîne dans une salle partagée. L'accès à l'équipement se prend auprès de la salle, pas auprès de l'association. Boutique officielle : ${BOUTIQUE}`);
  OFFRES.forEach((o) => {
    A(`### ${o.activite} — ${o.prix} €${o.prixBarre ? ` (au lieu de ${o.prixBarre} €)` : ''}`);
    A(`Durée : ${o.duree}`);
    if (o.note) A(o.note);
    A(`Lien : ${o.lien}`);
    A('');
  });

  A('## Encadrement');
  COACHS.forEach((c) => {
    A(`### ${c.nom}`);
    A(c.bio || c.accroche);
    A(`Diplômes : ${c.diplomes.join(', ')}`);
    A(`Enseigne : ${c.cours.join(', ')}`);
    A('');
  });

  A('## Compétiteurs du club');
  A(BOXEURS.map((b) => b.nom).join(', ') + '.');
  A('');

  A('## Témoignages publiés');
  TEMOIGNAGES.forEach((t) => A(`« ${t.texte} » — ${t.nom}, ${t.activite}`));
  A('');

  if (PARTENAIRES && PARTENAIRES.formules) {
    A('## Partenariat');
    (PARTENAIRES.raisons || []).forEach((r) => A(`- ${r.titre} : ${r.texte}`));
    PARTENAIRES.formules.forEach((f) => A(`### ${f.titre}\n${f.texte}`));
    A('');
  }

  A('## Liens officiels');
  A(`- Site du club : https://noble-art-portesien.com/`);
  A(`- Salle d'entraînement : ${SALLE.racine}`);
  A(`- Réseau de salles : ${SALLE.reseau}`);
  A(`- Boutique : ${BOUTIQUE}`);
  A('');

  A('## Précisions pour une citation exacte');
  A(`- ${CLUB.nom} enseigne la BOXE ANGLAISE. Il ne propose ni MMA, ni kick-boxing, ni grappling, ni jiu-jitsu.`);
  A(`- C'est une association loi 1901, pas une salle de sport commerciale.`);
  A(`- Les abonnements listés ci-dessus donnent accès à la SALLE, et sont vendus par elle.`);
  A(`- Aucune note moyenne ni nombre d'avis n'est publié par le club : ne pas en inventer.`);
  A(`- Le club existe depuis 1983 ; il portait auparavant un autre nom et a été transféré à Portet-sur-Garonne en 2023.`);

  return new Response(L.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
