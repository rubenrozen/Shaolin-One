═══════════════════════════════════════════════════════════════════
CASSANDRE — PROFILS-AUDIT-0 : LE DOSSIER DE DÉCISION
(read-only — tout ce qu'il faut savoir AVANT de trancher la
doctrine des profils ; des faits, aucune recommandation de
conception)
═══════════════════════════════════════════════════════════════════
Contexte : chantier Doctrine-R2 en cadrage. Le sanity check a
établi que les 11 profils existent, que rien ne bifurque dessus,
et que le seul câblage est le registre des modèles en double.
Il faut maintenant le dossier complet pour trier les profils sur
deux axes (style vs format comptable) et décider du périmètre.
Travaille depuis ~/Projets/Cassandre/Site/Projects/cassandre/.
Seule écriture autorisée : git pull --ff-only en ouverture (les
20 commits de données) + le rapport .docx. Aucun appel API.

PARTIE 1 — LA TAXONOMIE ACTUELLE
1. La liste EXACTE des 11 profils : fichier:ligne de la
   définition (type/enum/constante), le nom de chaque profil et
   sa ligne de doctrine VERBATIM, toute métadonnée attachée.
2. Leur histoire : le commit qui les a introduits, et s'ils ont
   déjà bougé depuis.

PARTIE 2 — LA CLASSIFICATION
3. Comment classify choisit : la structure du prompt (les
   critères donnés au modèle, verbatim des passages clés), les
   entrées (quels blocs du workspace), la forme exacte de la
   sortie (classification.json — tous les champs), et les
   signaux durs (classify_hard_signals : la liste). Le profil
   peut-il exprimer un doute, un profil secondaire, une
   transition (ex. « turnaround en sortie ») — ou est-ce un
   label unique sec ?

PARTIE 3 — LES CONSOMMATEURS DU PROFIL (pour chacun :
fichier:ligne + nature : simple label affiché / information
injectée / comportement qui bifurque)
4. Le mandat Opus : le profil y apparaît-il ? Des questions ou
   consignes varient-elles par profil aujourd'hui ?
5. Les juges : comment le profil est injecté à 4b et 4c — cite
   le passage exact (« information, pas une contrainte ») et où
   il se place dans les prompts.
6. Le registre des modèles : la MATRICE COMPLÈTE telle que
   déclarée aujourd'hui — les 12 modèles × leur
   applicableProfiles, côté Python ET côté TS (confirme
   l'identité via la garde de dérive). Dump en tableau.
7. Le sectoriel : la relation profil ↔ secteur de la taxonomie.
   La taxonomie sectorielle contient-elle des secteurs
   financiers (banques, assurance, immobilier/REITs) ? Des
   dossiers sectoriels existent-ils déjà pour eux en base ?
8. Le rendu et le studio : le profil est-il affiché quelque part
   (page lecteur, studio, badges) ?

PARTIE 4 — LA GRAMMAIRE COMPTABLE (le matériau du tri
style/format — des FAITS, pas d'avis)
9. Où la grammaire industrielle est gravée :
   - le schéma de projection 4c : la liste des 33 champs validés
     et les identités comptables vérifiées ;
   - les ~19 drivers : la liste exacte ;
   - le step métriques : les composantes de l'IQS, et Altman /
     Beneish — existe-t-il AUJOURD'HUI une garde ou une mention
     d'inapplicabilité aux financières, ou s'appliquent-ils
     aveuglément à tout ticker ?
   - le harvest yfinance : les champs récoltés — les postes
     spécifiques aux banques/assureurs/foncières (NII,
     provisions, loan book, FFO...) sont-ils récoltés,
     récoltables, ou absents ?
10. Les 12 modèles du registre : pour chacun, ses ENTRÉES
    (ce qu'il consomme : FCF, dividendes, book, multiples...) —
    factuel, sans juger de leur pertinence par profil.
11. Le chemin d'un ticker financier AUJOURD'HUI : un ticker
    banque/assureur/REIT a-t-il déjà tourné (base, fixtures,
    zips) ? Sinon, trace factuellement ce qui se passerait :
    quels champs du harvest sortiraient vides, ce que le step
    métriques calculerait, ce que le validateur 4c exigerait.
    Si un mini-harvest LOCAL sans LLM permet de le constater
    sur pièces (yfinance seul sur un ticker banque, sans
    lancer le pipeline), fais-le et cite les champs réels.

PARTIE 5 — L'ÉTAT DES LIEUX
12. La base : les classifications distinctes présentes, les
    fixtures existantes par profil, les tests qui référencent
    des profils.
13. Les suspens : tout ce qui a été discuté-non-implémenté sur
    les profils (grep des commentaires, TODO, docstrings).

AUCUNE recommandation de conception — le tri des axes et le
périmètre se décideront avec Ruben sur cette carte. Rapport en
.docx à la racine, tableaux pour la taxonomie, la matrice des
modèles et les champs de la grammaire.
═══════════════════════════════════════════════════════════════════
