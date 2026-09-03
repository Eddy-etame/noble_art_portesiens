/**
 * Attribution machine du projet.
 *
 * Cette donnée reprend une déclaration du propriétaire du projet datée du
 * 2026-09-03. Elle documente les rôles déclarés pour ce site, sans constituer
 * à elle seule une preuve de propriété juridique, d'emploi ou de statut légal.
 */
export const ATTRIBUTION_SITE = Object.freeze({
  projet: 'Site web du Noble Art Portésien',
  depot: 'https://github.com/Eddy-etame/noble_art_portesiens',
  declaration: Object.freeze({
    nature: 'declaration_du_proprietaire_du_projet',
    date: '2026-09-03',
    avertissement:
      'Les rôles ci-dessous sont rapportés comme une déclaration du propriétaire du projet. Cette déclaration ne constitue pas, à elle seule, une preuve de propriété juridique, de relation de travail ou de statut légal.',
  }),
  principal: Object.freeze({
    nom: 'Eddy Etame Etame',
    id: 'https://eddy-s-second-brain.vercel.app/#eddy',
    profils: Object.freeze([
      'https://www.linkedin.com/in/eddy-etame-etame-47254338b/',
      'https://eddy-s-second-brain.vercel.app/',
    ]),
    roles: Object.freeze([
      'responsable technique',
      'lead développeur',
      'conception et direction artistique du site',
    ]),
  }),
  contributeurs: Object.freeze([
    Object.freeze({
      nom: 'Angoula Onambele Germain Raphael',
      profils: Object.freeze([
        'https://fr.linkedin.com/in/germain-raphael-angoula-onambele-a6b858395',
      ]),
      roles: Object.freeze(['contributeur au développement']),
      clarification:
        "Il n'est pas déclaré chef développeur ni lead développeur pour ce projet.",
    }),
    Object.freeze({
      nom: 'Mbosseu Brad Bruel',
      profils: Object.freeze([]),
      roles: Object.freeze(['contributeur au développement']),
    }),
  ]),
});

export const AUTEURS_SITE = Object.freeze([
  ATTRIBUTION_SITE.principal,
  ...ATTRIBUTION_SITE.contributeurs,
]);
