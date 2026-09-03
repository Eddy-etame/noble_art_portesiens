/* Les trois activites, plus le pole insertion. Chaque entree porte tout
   ce qui la decrit : son URL d'origine (conservee — l'historique SEO vaut
   plus que l'elegance d'un chemin), ses metadonnees, son contenu au mot
   pres, et l'offre qui la concerne. */

export const ACTIVITES = [
  {
    slug: 'boxe-educative-jeunes-toulouse',
    ancres: ['edivative-offres'], ancreActivites: 'educative-activites',
    nom: 'Boxe Éducative',
    court: 'Éducative',
    icone: 'cible',
    image: 'boxe-anglaise-educative-toulouse.webp',
    imageAlt: 'Jeunes boxeurs en cours de boxe éducative au Noble Art Portésien',
    imageSecondaire: 'boxe-anglaise-educative-toulouse-formation.webp',
    imageSecondaireAlt: 'Formation physique et morale des jeunes par la boxe éducative',
    resume: 'Découvrez la Boxe Éducative : chaque coup enseigne discipline, confiance et respect, transformant l’énergie des jeunes en excellence.',
    seo: {
      title: 'Boxe éducative enfants à Portet | Noble Art Portésien',
      description: 'Boxe éducative pour enfants et ados à Portet-sur-Garonne (31120), près de Toulouse. Discipline, confiance et respect, avec des coachs diplômés BPJEPS.',
    },
    h1: 'La Boxe Éducative : Discipline, Confiance et Respect pour les jeunes',
    chapeau: 'Entrez dans l’univers de la boxe éducative, où chaque coup développe discipline, confiance et respect. Adaptés aux jeunes, nos cours transforment l’énergie en excellence, round après round.',
    sectionTitre: 'Une formation physique & morale',
    sectionTexte: 'Notre objectif à travers les cours de boxe éducative est de fournir une plateforme où les jeunes peuvent non seulement améliorer leur condition physique et apprendre les techniques de la boxe, mais aussi développer des valeurs fondamentales comme la discipline, la persévérance et le respect, les équipant pour réussir tant sur le ring qu’en dehors.',
    piliers: [
      { titre: 'Cours Enfants', texte: 'Grâce à des jeux interactifs, nous enseignons les bases de la boxe tout en développant coordination et équilibre. Notre approche renforce leur confiance et leur fait découvrir leurs capacités, tout en promouvant respect et plaisir.' },
      { titre: 'Cours Ados', texte: 'Nos cours pour adolescents, de 13 à 18 ans, offrent un entraînement structuré et avancé, adapté à leurs besoins. Nous axons le programme sur le perfectionnement technique, la condition physique, et le développement stratégique. Les jeunes peuvent ainsi atteindre leur potentiel personnel ou se préparer aux compétitions dans un environnement de soutien et de discipline.' },
      { titre: 'Développement Personnel & Physique', texte: 'Chez Noble Art Portésien à Portet-sur-Garonne, nous proposons bien plus qu’un entraînement physique en boxe anglaise. Notre programme vise à développer la force, l’endurance et la discipline chez les jeunes, tout en renforçant leur estime de soi. Nos cours enseignent aux jeunes de Toulouse et ses environs à persévérer, se fixer des objectifs et respecter autrui, les préparant à exceller sur le ring et dans la vie.' },
      { titre: 'Environnement Sécurisé & Encadré', texte: 'La sécurité et le bien-être de nos jeunes sont notre priorité à Noble Art Portésien, à Portet-sur-Garonne. Nos entraîneurs qualifiés créent un environnement sûr, propice à l’apprentissage de la boxe anglaise dans le respect des normes. En nous choisissant, vous optez pour un cadre où confiance, respect et sécurité permettent aux jeunes de s’épanouir pleinement.' },
    ],
    creneau: 'Boxe Éducative',
    offres: [],
  },
  {
    slug: 'boxe-loisir-toulouse-detente-sportive',
    ancres: ['loisir-offres'], ancreActivites: 'loisir-activites',
    nom: 'Boxe Loisir',
    court: 'Loisir',
    icone: 'gant',
    image: 'boxe-anglaise-loisir-toulouse.webp',
    imageAlt: 'Séance de boxe loisir dans une ambiance conviviale au Noble Art Portésien',
    imageSecondaire: 'boxe-anglaise-loisir-forme-sante-toulouse.webp',
    imageSecondaireAlt: 'La boxe loisir pour la forme et la santé, sans pression de la compétition',
    resume: 'Notre programme de Boxe Loisir permet de découvrir la boxe sans compétition, dans une ambiance conviviale.',
    seo: {
      title: 'Boxe loisir à Portet-sur-Garonne | Noble Art Portésien',
      description: 'Boxe anglaise loisir à Portet-sur-Garonne (31120), près de Toulouse. Forme, technique et bien-être sans compétition. Tous âges, tous niveaux, le soir et le midi.',
    },
    h1: 'Boxe Loisir : Découverte et Bien-être à Noble Art Portésien',
    chapeau: 'Le programme de Boxe Loisir de Noble Art Portésien propose une découverte conviviale des bienfaits physiques et mentaux de la boxe.',
    sectionTitre: 'Les Bienfaits de la Boxe Loisir à Portet-sur-Garonne',
    sectionTexte: 'La boxe autrement : un sport accessible à tous pour se dépasser, se renforcer et s’amuser, sans pression de la compétition.',
    piliers: [
      { titre: 'Bien-être & Forme Physique', texte: 'Notre programme de boxe loisir est conçu pour tous, quel que soit votre âge ou votre niveau de forme physique. Dans un environnement accueillant et sécurisé, nous mettons l’accent sur le bien-être, la santé et la détente, loin de la pression de la compétition. Avec des séances adaptées, vous améliorerez votre endurance, votre force, et votre agilité, tout en bénéficiant d’un excellent exutoire pour le stress' },
      { titre: 'Technique & Plaisirs', texte: 'Apprenez les fondamentaux de la boxe anglaise, la technique des coups, les déplacements et les stratégies de défense, le tout dans une ambiance ludique et conviviale. Nos entraîneurs expérimentés vous guideront pas à pas, vous permettant de progresser à votre rythme, en mettant un point d’honneur sur la technique correcte pour une pratique sûre et efficace.' },
      { titre: 'Flexible & Accessible', texte: 'Nous proposons une gamme de séances adaptées à tous les emplois du temps, avec des cours en soirée, entre midi et 14h et le week-end. Que vous souhaitiez pratiquer seul, en famille, ou en groupe, Noble Art Portésien a une place pour vous. Notre objectif est de rendre la boxe accessible à tous, en offrant un cadre idéal pour se lancer et s’épanouir dans la pratique de la boxe loisir.' },
      { titre: 'Environnement Soutenant & motivant', texte: 'Rejoignez notre communauté de passionnés de boxe, où chaque membre est valorisé et soutenu. Chez Noble Art Portésien, nous croyons en la force de la communauté pour motiver et inspirer chacun à atteindre ses objectifs personnels de bien-être et de forme physique.' },
    ],
    creneau: 'Boxe Loisirs',
    // La boxe loisir est couverte par l'adhesion : elle n'a pas de carte
    // tarifaire propre. L'ancien site affichait ici les prix Educative et
    // Amateur, qui ne la concernent pas.
    offres: [],
    tarifNote: 'La pratique loisir est comprise dans l’adhésion au club. Écrivez-nous pour connaître les modalités qui vous correspondent.',
  },
  {
    slug: 'boxe-amateur-toulouse-formation-competitive',
    ancres: ['amateur-offres'], ancreActivites: 'amateur-activites',
    nom: 'Boxe Amateur',
    court: 'Amateur',
    icone: 'gants',
    image: 'boxe-anglaise-amateur-toulouse.webp',
    imageAlt: 'Boxeurs amateurs à l’entraînement au Noble Art Portésien',
    imageSecondaire: 'boxe-anglaise-amateur-programme-toulouse.webp',
    imageSecondaireAlt: 'Programme d’entraînement de la boxe amateur : technique, sparring et conditionnement',
    resume: 'La Boxe Amateur allie excellence sportive et développement personnel, offrant soutien et outils pour se surpasser.',
    seo: {
      title: 'Boxe amateur à Portet-sur-Garonne | Noble Art Portésien',
      description: 'Boxe amateur et compétition à Portet-sur-Garonne (31120), près de Toulouse : entraînement, sparring et championnats, avec des coachs Prévôt fédéral FFBoxe.',
    },
    h1: 'L’Excellence de la Boxe Amateur',
    chapeau: 'Découvrez la passion et la compétitivité de la boxe amateur avec Noble Art Portésien, votre porte d’entrée vers l’éminence dans le noble art, au cœur de Portet-sur-Garonne.',
    sectionTitre: 'Notre programme de boxe amateur',
    sectionTexte: 'La boxe amateur occupe une place centrale au noble art Portésien, reflétant notre engagement envers l’excellence sportive et le développement personnel. Notre programme de boxe amateur est conçu non seulement comme un sport de compétition, mais aussi comme un véritable tremplin pour ceux qui aspirent à se surpasser. Que nos membres visent à améliorer leur condition physique, à maîtriser l’art de la boxe, ou à concourir sur la scène nationale et au-delà, nous leur fournissons les outils, l’encadrement et le soutien nécessaires pour atteindre leurs objectifs. À travers un entraînement rigoureux, une discipline de fer, et un esprit de camaraderie, Noble Art Portésien s’engage à cultiver le potentiel de chaque boxeur, faisant de notre association un pilier de la boxe anglaise à Toulouse et un foyer pour tous ceux qui cherchent à exceller dans ce noble art.',
    piliers: [
      { titre: 'Entraînement & Développement', texte: 'Notre programme d’entraînement est conçu pour accompagner les boxeurs à chaque étape de leur développement, des bases de la boxe à des stratégies de combat avancées. Grâce à l’expertise de nos entraîneurs expérimentés, les membres apprennent à perfectionner leur technique, à améliorer leur condition physique et à aiguiser leur mental pour la compétition. Nous proposons un curriculum varié qui inclut des exercices techniques, des séances de sparring, du conditionnement physique et des ateliers de stratégie, le tout dans le but de forger des athlètes complets et compétitifs.' },
      { titre: 'Un suivi individuel', texte: 'Nos entraîneurs, passionnés et dédiés, mettent un point d’honneur à suivre chaque boxeur individuellement, assurant une progression constante et adaptée à leurs objectifs personnels. L’accent est mis sur la création d’un environnement d’apprentissage positif et motivant, où chaque boxeur peut se sentir soutenu et encouragé dans son parcours.' },
      { titre: 'Compétitions & Championnats', texte: 'Noble Art Portésien offre de nombreuses opportunités de compétition pour nos boxeurs amateurs, les encourageant à tester leurs compétences et à gagner en expérience sur le ring. Nos membres ont la possibilité de participer à des tournois locaux, régionaux, et nationaux, leur offrant une plateforme pour se mesurer aux autres et poursuivre l’excellence dans la boxe anglaise.' },
      { titre: 'Un soutien à chaque étape', texte: 'Nous sommes fiers de soutenir nos athlètes à chaque étape de leur parcours compétitif, offrant une assistance logistique, technique, et émotionnelle. Ce soutien comprend la préparation aux compétitions, les conseils stratégiques, et un suivi psychologique, assurant que nos boxeurs se sentent pleinement préparés et confiants pour affronter leurs adversaires.' },
    ],
    creneau: 'Boxe Compétiteurs',
    offres: [],
  },
];

/* =====================================================================
   LE TABLEAU DE LA PESÉE — le +1 du projet.

   Avant chaque combat, la boxe publie le « tale of the tape » : les deux
   adversaires alignés sur les mêmes lignes, pour qu'on les compare d'un
   regard. C'est un objet d'information natif du sport, vieux d'un siècle,
   et aucun des 215 sites S/A de la banque ne fait l'équivalent — les
   studios naviguent par cartes, les catalogues éditorialisent, personne
   ne compare.

   Il répond au défaut mesuré du site : un visiteur ne pouvait pas savoir
   laquelle des trois boxes était la sienne, et les 26 boutons « Je
   choisi cette offre » ne menaient nulle part.

   CHAQUE VALEUR EST TIRÉE DU TEXTE DU CLUB. Rien n'est inventé :
   « de 13 à 18 ans », « quel que soit votre âge », « loin de la pression
   de la compétition », « tournois locaux, régionaux, et nationaux » sont
   ses propres mots, condensés en cellules.
   ===================================================================== */
export const PESEE = {
  lignes: [
    { cle: 'public', libelle: 'Pour qui' },
    { cle: 'objectif', libelle: 'L’objectif' },
    { cle: 'intensite', libelle: 'Intensité' },
    { cle: 'competition', libelle: 'Compétition' },
    { cle: 'creneaux', libelle: 'Créneaux' },
    { cle: 'tarif', libelle: 'Tarif' },
  ],
  colonnes: [
    {
      slug: 'boxe-educative-jeunes-toulouse', nom: 'Éducative',
      public: 'Enfants et ados jusqu’à 18 ans',
      objectif: 'Discipline, confiance et respect',
      intensite: 2,
      competition: 'Compétitions en amateur',
      creneaux: 'Lundi, mercredi et samedi',
      tarif: 'Dès 29 € / 4 sem. · saison 259 €',
    },
    {
      slug: 'boxe-loisir-toulouse-detente-sportive', nom: 'Loisir',
      public: 'Tous âges, tous niveaux de forme',
      objectif: 'Bien-être, santé et détente',
      intensite: 1,
      competition: 'Aucune — sans pression',
      creneaux: 'Mardi, mercredi et jeudi',
      tarif: 'Dès 29 € / 4 sem. · saison 259 €',
    },
    {
      slug: 'boxe-amateur-toulouse-formation-competitive', nom: 'Amateur',
      public: 'Celles et ceux qui veulent se surpasser',
      objectif: 'Excellence sportive et dépassement',
      intensite: 3,
      competition: 'Local, régional, national',
      creneaux: 'Du lundi au samedi',
      tarif: 'Dès 29 € / 4 sem. · saison 259 €',
    },
  ],
};

export const INSERTION = {
  slug: 'pole-insertion-inclusion-boxe-toulouse',
  nom: 'Pôle Insertion – Inclusion',
  image: 'pole-boxe-inclusion-insertion-toulouse.webp',
  imageAlt: 'Le pôle insertion et inclusion du Noble Art Portésien',
  seo: {
    title: 'Handi-boxe et insertion à Portet | Noble Art Portésien',
    description: 'Handi-boxe, Lady Boxing et interventions en écoles : le pôle insertion et inclusion du Noble Art Portésien à Portet-sur-Garonne (31120), près de Toulouse.',
  },
  h1: 'La Boxe au Service de l’Inclusion et de la Cohésion Sociale',
  chapeau: 'Noble Art Portésien utilise la boxe pour promouvoir l’insertion et l’inclusion, offrant des programmes accessibles à tous pour une société solidaire.',
  sectionTitre: 'Une Boxe Engagée pour l’Insertion & l’Inclusion Sociale',
  sectionTexte: 'Promouvoir l’insertion et la cohésion sociale par la boxe en offrant un cadre inclusif, sécurisant et respectueux de chacun.',
  actions: [
    {
      titre: 'Événement Octobre Rose',
      image: 'pole-boxe-inclusion-insertion-evenement-octobre-rose.webp',
      alt: 'Séance de Lady Boxing lors de l’événement Octobre Rose au Noble Art Portésien',
      texte: 'En octobre dernier, nous avons eu l’honneur d’organiser un événement spécial Octobre Rose dédié à la sensibilisation et au soutien de la lutte contre le cancer du sein. L’événement a inclus des séances dynamiques de Lady Boxing, offrant une manière puissante et inspirante pour les femmes de s’engager dans le sport tout en soutenant cette cause cruciale. En parallèle, un atelier animé par la Ligue contre le Cancer a été proposé, fournissant des informations vitales et un soutien aux participantes. Cette journée a non seulement renforcé notre communauté mais aussi mis en lumière l’importance de la prévention et du soutien dans la lutte contre le cancer.',
      lien: { url: 'https://www.ligue-cancer.net/', texte: 'Ligue contre le Cancer' },
    },
    {
      titre: 'Transmettre les valeurs de la boxe aux jeunes générations',
      image: 'pole-boxe-inclusion-insertion-jeunes-toulouse.webp',
      alt: 'Intervention du Noble Art Portésien auprès des jeunes dans les écoles et points jeunes',
      texte: 'Notre engagement ne s’arrête pas là. Noble Art Portésien est régulièrement présent dans les points jeunes et les écoles de notre région, où nous animons des interventions visant à promouvoir les bienfaits de la boxe : discipline, respect de soi et des autres, et bien-être physique. Ces activités permettent non seulement de découvrir la boxe dans un cadre ludique et éducatif mais aussi de transmettre des valeurs essentielles aux jeunes générations.',
    },
  ],
  poles: [
    { titre: 'Pôle Handi-Sport', texte: 'La boxe accessible à tous.', image: 'pole-handi-sport.webp', alt: 'Pôle handi-sport : la boxe adaptée aux personnes en situation de handicap' },
    { titre: 'Pôle Insertion', texte: 'favoriser la diversité, l’égalité, et l’intégration au sein de notre communauté.', image: 'pole-insertion.webp', alt: 'Pôle insertion : diversité, égalité et intégration par la boxe' },
    { titre: 'Actions & Projets', texte: 'Ce que nous faisons et prévoyons', image: 'pole-actions-projets.webp', alt: 'Les actions et projets menés par le Noble Art Portésien' },
  ],
};

/* La navigation d'origine avait deux entetes de sous-menu pointant vers
   href="#" : « Présentation » et « Activités » ne menaient nulle part et
   n'annoncaient rien a un lecteur d'ecran. Ici, un parent est soit un
   vrai lien, soit un bouton qui declare son etat. */
export const NAV = [
  { href: '/', texte: 'Accueil' },
  {
    // Les chemins d'origine sont conserves tels quels. Ils sont laids,
    // mais ils portent les mots-cles et sont indexes depuis novembre 2024 :
    // une redirection 301 dissipe toujours une part du signal, et on
    // n'echangerait ici que de l'esthetique d'URL — que personne ne
    // regarde — contre un risque reel sur le seul canal d'acquisition
    // du club.
    texte: 'Le club', enfants: [
      { href: '/boxe-educative-jeunes-toulouse/', texte: 'Boxe Éducative' },
      { href: '/boxe-loisir-toulouse-detente-sportive/', texte: 'Boxe Loisir' },
      { href: '/boxe-amateur-toulouse-formation-competitive/', texte: 'Boxe Amateur' },
      { href: '/equipe-coachs-boxe-toulouse/', texte: 'Nos Coachs' },
      { href: '/nos-boxeurs-talents-toulouse/', texte: 'Nos Boxeurs' },
    ],
  },
  { href: '/pole-insertion-inclusion-boxe-toulouse/', texte: 'Pôle Insertion – Inclusion' },
  { href: '/partenaires/', texte: 'Devenir Partenaire' },
  // Lien silencieux : le libelle dit « Tarifs », il mene au site de la
  // salle. On ne nomme pas la marque, on ouvre la porte.
  { href: 'https://boxing-center-portet.fr/tarifs/', texte: 'Tarifs', externe: true },
  { href: '/contactez-noble-art-portesien/', texte: 'Nous rejoindre', cta: true },
];
