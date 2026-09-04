/* =====================================================================
   LA SOURCE UNIQUE.

   Sur l'ancien site, « 180 € » etait recopie sur huit pages. Changer un
   tarif demandait huit modifications, et une seule oubliee creait une
   contradiction publique. Ici chaque donnee existe une fois, et tout ce
   qui l'affiche — page, balisage JSON-LD, PDF — la lit ici.

   Regle absolue : le texte editorial est celui du club, au mot pres.
   Quatre fautes de frappe ont ete corrigees sur accord explicite
   (2026-09-01) : « Insersion » -> « Insertion », « Je choisi » ->
   « Je choisis », « Demie Saison » -> « Demi-saison », « Sainson » ->
   « Saison ». Rien d'autre n'a ete reecrit.
   ===================================================================== */

export const CLUB = {
  nom: 'Noble Art Portésien',
  baseline: 'Insertion et inclusion, la Boxe sous toutes ses facettes à Portet-sur-Garonne.',
  adresse: { rue: '61 route d’Espagne', cp: '31120', ville: 'Portet-sur-Garonne', pays: 'FR' },
  geo: { lat: 43.5222, lon: 1.4058 },
  tel: '09 56 65 37 82',
  telE164: '+33956653782',
  email: 'nobleartportesien@gmail.com',
  // Identite legale relevee au registre national et a l'annuaire de la
  // Ville. Absente de l'ancien site, alors qu'elle est obligatoire.
  legal: {
    president: 'Ilan MOKHTARI',
    rna: 'W311003226',
    siren: '444152482',
    declaration: '1983-09-22',
    jo: '1983-10-06',
    objet: 'initier, développer et promouvoir la pratique de la boxe',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=61+route+d%27Espagne+31120+Portet-sur-Garonne',
};

export const STATS = [
  { valeur: 200, prefixe: '+', suffixe: '', libelle: 'Adhérents' },
  { valeur: 900, prefixe: '', suffixe: 'm²', libelle: 'Pour pratiquer votre sport de combat préféré' },
  { valeur: 98, prefixe: '', suffixe: '%', libelle: 'De retours positifs' },
  { valeur: 20, prefixe: '+', suffixe: '', libelle: 'Compétiteurs' },
];

/* =====================================================================
   TARIFS ET PLANNING PARTAGÉS AVEC LA SALLE DE PORTET.

   Le Noble Art Portésien et la salle sont deux entités distinctes qui
   partagent le même lieu. Les données ci-dessous reprennent la grille
   Portet 2026-2027 confirmée le 3 septembre 2026. Les parcours d'achat
   restent sur la page tarifs de la salle ; ce site ne se présente pas
   comme le vendeur des abonnements.
   ===================================================================== */
export const SALLE = {
  racine: 'https://boxing-center-portet.fr',
  reseau: 'https://boxingcenter.fr',
  tarifs: 'https://boxing-center-portet.fr/tarifs/',
  plannings: 'https://boxing-center-portet.fr/plannings/',
  premiereSeance: 'https://boxing-center-portet.fr/premiere-seance/',
  salles: 'https://boxing-center-portet.fr/salles/',
  galerie: 'https://boxing-center-portet.fr/galerie/',
  contact: 'https://boxing-center-portet.fr/contact/',
};
/* La destination d'achat : la boutique, en direct. */
export const BOUTIQUE = 'https://boutique.boxingcenter.fr/offre/259';
export const TARIFS_BC = SALLE.tarifs;
export const LIEN_TARIFS = SALLE.tarifs;

export const OFFRES = [
  {
    id: 'BCP_ANNEE',
    activite: 'Saison · 12 mois',
    prix: 259,
    prixBarre: 400,
    duree: 'les 12 mois · paiement comptant',
    badge: 'Promo saison 2026–2027',
    note: '259 € comptant pour douze mois d’illimité, 5 salles et toutes les disciplines. Un paiement en 4× peut être proposé par PayPal, uniquement s’il est disponible et sous réserve d’éligibilité.',
    vedette: true,
    lien: BOUTIQUE,
    cta: 'Je prends ma saison',
  },
  {
    id: 'BCP_RENTREE',
    activite: 'Offre Rentrée',
    prix: 29,
    prixBarre: 44,
    duree: 'par personne / toutes les 4 semaines',
    badge: 'Sans engagement',
    note: '29 € par personne toutes les 4 semaines, sans engagement, dans les 5 salles. Première échéance par carte, puis prélèvements sur IBAN ; coordonnées d’un proche demandées. Badge d’accès 34,99 €, facturé 72 h après le début.',
    vedette: false,
    lien: BOUTIQUE,
    cta: 'Je profite de l’offre',
  },
  {
    id: 'BCP_ADULTE',
    activite: 'Adulte',
    prix: 44,
    duree: 'toutes les 4 semaines',
    note: 'L’abonnement classique : accès aux 5 salles, toutes disciplines, sans engagement. Badge d’accès 34,99 € en sus, sauf exception affichée lors de la commande.',
    vedette: false,
    lien: BOUTIQUE,
    cta: 'Je choisis cette formule',
  },
  {
    id: 'BCP_ETUDIANT',
    activite: 'Étudiants',
    prix: 36,
    duree: 'toutes les 4 semaines',
    note: 'Le tarif étudiant, sur justificatif. Badge d’accès 34,99 € en sus, sauf exception affichée lors de la commande.',
    vedette: false,
    lien: BOUTIQUE,
    cta: 'Je choisis cette formule',
  },
  {
    id: 'BCP_JEUNES',
    activite: 'Enfants / Ados',
    prix: 295,
    duree: 'par an',
    note: 'T-shirt officiel du club inclus. Encadrement diplômé, créneaux dédiés — ils repartent plus forts, dedans comme dehors.',
    vedette: false,
    lien: BOUTIQUE,
    cta: 'J’inscris mon enfant',
  },
  {
    id: 'BCP_BABY',
    activite: 'Baby Boxe',
    prix: 250,
    duree: 'par an',
    note: 'Le premier gant, à hauteur d’enfant : motricité, confiance, respect.',
    vedette: false,
    lien: BOUTIQUE,
    cta: 'J’inscris mon enfant',
  },
];

/* Le planning etait promis en telechargement depuis un bouton mort, et
   aucun fichier n'a jamais existe. Il vit maintenant ici : la page, le
   document imprimable et les openingHours du balisage sortent tous de
   ces quatre lignes. */
/* `affiche` porte l'horaire EXACTEMENT comme le club l'ecrit — « 18H20 – 19H »,
   pas « 18:20 – 19:00 ». J'avais normalise le format : c'etait modifier son
   texte sans le lui demander. `debut`/`fin` en 24 h ne servent qu'a la machine
   (openingHours du balisage et reperage du creneau en cours). */
export const PLANNING = [
  {
    nom: 'Lundi', code: 'Mo', creneaux: [
      { texte: 'Boxe Anglaise', activite: 'Boxe Anglaise', affiche: '12:30 – 13:30', jours: ['Mo'], debut: '12:30', fin: '13:30' },
      { texte: 'Boxe Éducative Confirmés', activite: 'Boxe Éducative Confirmés', affiche: '18:00 – 19:00', jours: ['Mo'], debut: '18:00', fin: '19:00' },
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '19:00 – 21:30', jours: ['Mo'], debut: '19:00', fin: '21:30' },
    ],
  },
  {
    nom: 'Mardi', code: 'Tu', creneaux: [
      { texte: 'Préparation Physique', activite: 'Préparation Physique', affiche: '12:30 – 13:30', jours: ['Tu'], debut: '12:30', fin: '13:30' },
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '18:00 – 19:00', jours: ['Tu'], debut: '18:00', fin: '19:00' },
      { texte: 'Préparation Physique', activite: 'Préparation Physique', affiche: '19:00 – 20:00', jours: ['Tu'], debut: '19:00', fin: '20:00' },
      { texte: 'Boxe Anglaise Loisirs', activite: 'Boxe Anglaise Loisirs', affiche: '20:00 – 21:30', jours: ['Tu'], debut: '20:00', fin: '21:30' },
    ],
  },
  {
    nom: 'Mercredi', code: 'We', creneaux: [
      { texte: 'Boxe Éducative 7/11 ans', activite: 'Boxe Éducative 7/11 ans', affiche: '16:00 – 17:00', jours: ['We'], debut: '16:00', fin: '17:00' },
      { texte: 'Boxe Éducative 12/16 ans', activite: 'Boxe Éducative 12/16 ans', affiche: '17:00 – 18:00', jours: ['We'], debut: '17:00', fin: '18:00' },
      { texte: 'Lady Boxing', activite: 'Lady Boxing', affiche: '18:00 – 19:00', jours: ['We'], debut: '18:00', fin: '19:00' },
      { texte: 'Boxe Anglaise Loisirs', activite: 'Boxe Anglaise Loisirs', affiche: '19:00 – 20:00', jours: ['We'], debut: '19:00', fin: '20:00' },
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '20:00 – 21:30', jours: ['We'], debut: '20:00', fin: '21:30' },
    ],
  },
  {
    nom: 'Jeudi', code: 'Th', creneaux: [
      { texte: 'Boxe Anglaise', activite: 'Boxe Anglaise', affiche: '12:30 – 13:30', jours: ['Th'], debut: '12:30', fin: '13:30' },
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '18:00 – 20:00', jours: ['Th'], debut: '18:00', fin: '20:00' },
      { texte: 'Boxe Anglaise Loisirs', activite: 'Boxe Anglaise Loisirs', affiche: '20:00 – 21:30', jours: ['Th'], debut: '20:00', fin: '21:30' },
    ],
  },
  {
    nom: 'Vendredi', code: 'Fr', creneaux: [
      { texte: 'Boxe Anglaise', activite: 'Boxe Anglaise', affiche: '12:30 – 13:30', jours: ['Fr'], debut: '12:30', fin: '13:30' },
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '18:00 – 20:00', jours: ['Fr'], debut: '18:00', fin: '20:00' },
      { texte: 'Open Sparring', activite: 'Open Sparring', affiche: '20:00 – 21:30', jours: ['Fr'], debut: '20:00', fin: '21:30' },
    ],
  },
  {
    nom: 'Samedi', code: 'Sa', creneaux: [
      { texte: 'Boxe Amateurs & Pros', activite: 'Boxe Amateurs & Pros', affiche: '10:00 – 12:00', jours: ['Sa'], debut: '10:00', fin: '12:00' },
      { texte: 'Boxe Anglaise', activite: 'Boxe Anglaise', affiche: '12:30 – 13:30', jours: ['Sa'], debut: '12:30', fin: '13:30' },
      { texte: 'Baby Boxe (3/6 ans)', activite: 'Baby Boxe (3/6 ans)', affiche: '15:15 – 16:00', jours: ['Sa'], debut: '15:15', fin: '16:00' },
      { texte: 'Boxe Éducative 7/11 ans', activite: 'Boxe Éducative 7/11 ans', affiche: '16:00 – 17:00', jours: ['Sa'], debut: '16:00', fin: '17:00' },
      { texte: 'Boxe Éducative 12/16 ans', activite: 'Boxe Éducative 12/16 ans', affiche: '17:00 – 18:00', jours: ['Sa'], debut: '17:00', fin: '18:00' },
    ],
  },
];

/* Les icones du club. Je les avais remplacees par du CSS et des SVG : neuf
   de ses fichiers avaient disparu de l'affichage. On ne redessine pas ses
   fichiers, on les sert. */
export const ICONES = {
  amateur: { fichier: 'boxe-amateur-gants.png', alt: '' },
  loisir: { fichier: 'boxe-loisir-gant.png', alt: '' },
  educative: { fichier: 'boxe-educative-cible.png', alt: '' },
  insertion: { fichier: 'boxe-insertion-flamme.png', alt: '' },
  adresse: { fichier: 'boxe-toulouse-adresse.png', alt: '' },
  email: { fichier: 'boxe-toulouse-email.png', alt: '' },
  telephone: { fichier: 'boxe-toulouse-telephone.png', alt: '' },
  eclair: { fichier: 'flash-right.png', alt: '' },
  etoile: { fichier: 'testimonial-star.png', alt: '' },
};

export const COACHS = [
  {
    slug: 'callixte', nom: 'Callixte', photo: 'boxe-toulouse-coach-callixte.webp',
    alt: 'Callixte, coach de boxe anglaise au Noble Art Portésien',
    accroche: 'Dès 8 ans, Callixte s’est illustré en boxe anglaise, partageant désormais son expertise avec débutants et confirmés.',
    bio: 'Dès son plus jeune âge, à seulement 8 ans, Callixte a plongé dans l’univers des sports de combat avec la boxe anglaise, domaine dans lequel il s’est illustré en livrant avec succès une dizaine de combats. Son parcours impressionnant l’a mené à gravir les échelons qui lui permettent de pratiquer encore sa passion à haut niveau. Fort de ses expériences et de ses succès sur le ring, Callixte s’est lancé dans la mission de partager sa passion et son expertise de la boxe anglaise, offrant son accompagnement à un large éventail de pratiquants, des débutants aux plus confirmés.',
    diplomes: ['BPJEPS mention Boxe'],
    cours: ['Boxe Éducative', 'Boxe Loisir'],
  },
  {
    slug: 'valentin', nom: 'Valentin', photo: 'boxe-toulouse-coach-valentin.webp',
    alt: 'Valentin, coach de boxe anglaise au Noble Art Portésien',
    accroche: 'Après avoir formé des champions de France, Valentin partage son expertise au Noble art portésien avec discipline et convivialité.',
    bio: 'Ayant dirigé son propre club de boxe pendant de nombreuses années et formé plusieurs champions de France, Valentin partage aujourd’hui son expertise au Noble art portésien. Sa philosophie repose sur la discipline, le dévouement et le professionnalisme, tout en valorisant la bonne humeur et la convivialité.',
    diplomes: ['BPJEPS mention Boxe', 'Prévot fédéral FFB'],
    cours: ['Boxe Amateur', 'Boxe Loisir'],
  },
  {
    slug: 'dadi', nom: 'Dadi', photo: 'boxe-toulouse-coach-dadi.webp',
    alt: 'Dadi, coach de boxe anglaise au Noble Art Portésien',
    accroche: 'Dadi, expert reconnu en boxe anglaise, encadre avec passion boxeurs professionnels et amateurs, alliant technique et loisir.',
    bio: 'Dadi est devenu un expert reconnu dans l’enseignement de la boxe anglaise, ayant bâti une solide réputation grâce à son travail avec de nombreux boxeurs professionnels et de haut niveau au fil de sa carrière. Ce passionné, fin technicien, s’occupe aussi bien de la boxe loisir que des compétiteurs.',
    diplomes: ['Prévot fédéral FFBoxe Anglaise'],
    cours: ['Boxe Amateur', 'Boxe Loisir'],
  },
];

/* Sept athletes dont les prenoms n'existaient que dans des noms de
   fichiers : ni texte, ni alt, ni attribut dans le DOM. Ils sont nommes
   ici. Le champ palmares reste vide tant que le club ne le fournit pas —
   on ouvre la structure, on n'invente pas un resultat sportif. */
export const BOXEURS = [
  { slug: 'lois', nom: 'Lois', photo: 'boxeur-lois-club-toulouse.webp', palmares: null },
  { slug: 'llana', nom: 'Llana', photo: 'boxeur-llana-club-toulouse.webp', palmares: null },
  { slug: 'mourad', nom: 'Mourad', photo: 'boxeur-mourad-club-toulouse.webp', palmares: null },
  { slug: 'callixte', nom: 'Callixte', photo: 'boxeur-callixte-club-toulouse.webp', palmares: null },
  { slug: 'victor', nom: 'Victor', photo: 'boxeur-victor-club-toulouse.webp', palmares: null },
  { slug: 'deya', nom: 'Deya', photo: 'boxeur-deya-club-toulouse.webp', palmares: null },
  { slug: 'arthur', nom: 'Arthur', photo: 'boxeur-arthur-club-toulouse.webp', palmares: null },
];

export const TEMOIGNAGES = [
  {
    nom: 'Manon', activite: 'Boxe Loisir',
    texte: 'C’est un club où règne une ambiance incroyable, avec des coachs passionnés qui nous poussent toujours à donner le meilleur de nous-mêmes. Grâce à eux, j’ai pu progresser et vraiment m’épanouir dans ce sport. C’est bien plus qu’un club, c’est une famille où chacun trouve sa place !',
  },
  {
    nom: 'Marc', activite: 'Boxe Loisir',
    texte: 'Je pratique la boxe loisir au Noble Art Portésien. C’est un club exceptionnel avec une ambiance conviviale et des coachs toujours à l’écoute. Chaque séance est l’occasion de repousser mes limites et de partager des moments forts avec des passionnés de boxe. Ici, on progresse ensemble, et c’est ce qui rend ce club unique !',
  },
  {
    nom: 'Victor', activite: 'Boxe Amateur',
    texte: 'Je suis Victor et je pratique la boxe amateur au Noble Art Portésien. C’est un club où je peux vraiment me challenger et développer mes compétences. Les entraînements sont intenses et les coachs sont là pour me guider dans ma progression. L’esprit d’équipe et la discipline sont au cœur de ce club, et cela me motive chaque jour à donner le meilleur de moi-même !',
  },
];

export const PARTENAIRES = {
  raisons: [
    { titre: 'Impact social', texte: 'Votre partenariat aura un impact tangible sur la communauté locale, en aidant les individus à trouver un sens, une direction et des opportunités à travers le sport.' },
    { titre: 'Visibilité', texte: 'Associer votre nom à Noble Art Portésien, c’est aussi bénéficier d’une visibilité auprès de notre communauté engagée et au-delà, à travers des événements, des médias sociaux et notre site web.' },
    { titre: 'Responsabilité sociale d’entreprise', texte: 'Montrez l’engagement de votre entreprise envers des causes sociales importantes, renforçant ainsi votre image de marque responsable.' },
  ],
  formules: [
    {
      id: 'PARTENAIRE_EVENEMENT', titre: 'Partenaire d’événements',
      texte: 'Devenez partenaire de notre prochain événement. Pour organiser ce grand gala de boxe professionnelle nous avons besoin de soutien. Ce soutien peut se faire par l’acquisition d’une table lors de l’événement. Ce qui vous permet de profiter du show tout en participant à la réalisation de ce dernier.',
      image: 'boxe-anglaise-toulouse-devenir-partenaire-evenement.webp',
      alt: 'Gala de boxe professionnelle organisé par le Noble Art Portésien',
      plaquette: '/docs/plaquette-partenaire-evenement-nap-boxe-toulouse.pdf',
      poids: '5,3 Mo',
    },
    {
      id: 'PARTENAIRE_ASSOCIATION', titre: 'Partenaire de l’association',
      texte: 'Devenez partenaire de notre association afin de participer au développement de la structure et de soutenir nos futures missions et nos actions.',
      image: 'boxe-anglaise-toulouse-devenir-partenaire-plaquette.webp',
      alt: 'Plaquette de partenariat de l’association Noble Art Portésien',
      plaquette: '/docs/plaquette-partenaire-nap-boxe-toulouse.pdf',
      poids: '4,4 Mo',
    },
  ],
  confiance: [
    { nom: 'Carrefour', image: 'carrefour-partenaire-nap-boxe-anglaise-toulouse.webp', alt: 'Carrefour, partenaire du Noble Art Portésien', url: 'https://www.carrefour.fr/' },
  ],
};
