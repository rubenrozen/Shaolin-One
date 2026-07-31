# Shaolin One · Cervin 2027

App PWA de préparation Cervin — 3 séances par semaine, tronc principal + bibliothèque bonus + lexique parasportif.

## Contenu

- `index.html` — l'app complète, tout inline (données, timer, rendu)
- `manifest.webmanifest` — métadonnées PWA
- `sw.js` — service worker (offline)
- Icônes 192/512 + variantes maskable + apple-touch

## Ce que l'app fait

**Écran d'accueil**
- Compteur de la semaine (0/3 → 3/3, reset auto le lundi)
- 3 cards du tronc principal (course endurance, renfo bas, renfo haut+core)
- Nav vers bibliothèque bonus, étirements, lexique parasportif

**Séance en cours**
- Timer par étape (exercice chronométré ou en reps avec bouton "Fait")
- Timer global de séance
- Barre de progression au sommet
- Bouton pause
- Signal sonore + vibration à chaque transition
- Wake lock : l'écran ne s'éteint pas pendant la séance
- Skip d'étape possible
- Quitter avec confirmation (séance non validée)
- Validation automatique seulement si toutes les étapes complétées

**Fin de séance**
- Message de validation
- Compteur qui bouge (1/3 → 2/3)
- Proposition d'étirements post-séance

## État actuel du programme

Cette version couvre la **Phase 0 (août-septembre 2026)** : reprise et fondation.
- Course endurance zone 2 (65 min)
- Renfo bas du corps poids de corps (45 min)
- Renfo haut du corps + core (40 min)
- Pas encore de boxe planifiée (à ajouter quand le prof reprend)

**Octobre 2026** : à réviser pour switcher course → vélo d'appartement.
**Janvier 2027** : passage en Phase 1 (charge progressive, sac lesté).

## 8 séances bonus

- Step-ups intensifs (jambes)
- Gainage complet (tronc)
- Tirage & pompes (haut du corps)
- Hanches & chevilles (mobilité)
- HIIT court intense (cardio)
- Farmer & suspension (grip & portage)
- Excentrique jambes (descente)
- Respiration & visualisation (mental)

Ces bonus ne comptent pas dans le compteur 0/3, ils viennent en plus quand tu as la pêche.

## 9 techniques parasportives

Cohérence cardiaque · Box breathing · Wim Hof · Apnée statique · Apnée dynamique · Douche froide · Bain froid · Méditation body scan · Visualisation Cervin

Chaque fiche a : quand l'utiliser, protocole détaillé, points d'attention.

## Déploiement

Le repo GitHub s'appelle `Shaolin One` (avec espace, GitHub le convertit en URL). Sur GitHub Pages, l'URL sera probablement `https://rubenrozen.github.io/Shaolin-One/`.

1. Écrase les fichiers existants dans le repo par ceux du zip
2. Commit + push
3. GitHub Pages redéploie automatiquement en 1 min
4. Sur ton tel : force le rafraîchissement (voir plus bas)

## Rafraîchir l'install sur ton téléphone

Le service worker passe en version `shaolin-v2-cervin`, ce qui force le refresh du cache :

- **Sur iOS** : ferme complètement l'app installée (double-tap accueil, swipe up). Rouvre. La nouvelle version doit charger. Si pas : supprime l'icône de l'écran d'accueil et réinstalle via Safari.
- **Sur Android** : ferme l'app, rouvre — le SW détecte la nouvelle version et met à jour au chargement suivant.

## Persistence

- Compteur de la semaine sauvegardé en `localStorage`
- Reset automatique quand le numéro de semaine change (chaque lundi environ)
- Cocher/décocher une séance : possible pour la boxe seulement (à venir)
- Les autres séances se cochent automatiquement quand tu vas jusqu'au bout du timer

## Personnalisation rapide

Toutes les données sont dans les tableaux `SESSIONS`, `BONUS`, `LEXIQUE`, `STRETCHING` en haut du `<script>`. Structure de chaque étape :

```js
{ type: 'time', name: 'Planche', duration: 45, cues: ['cue 1', 'cue 2'], label: 'gainage' }
{ type: 'reps', name: 'Pompes', reps: '10 reps', cues: [...], label: 'circuit 1/3' }
{ type: 'rest', duration: 20 }
```

## Roadmap

- **Fin septembre** : bascule course → vélo d'appartement pour la séance moteur
- **Octobre** : ajout boxe (tile "coche seulement")
- **Janvier** : passage en Phase 1 (step-ups lestés progressifs, tractions vraies, seuil vélo)
- **Avril** : Phase 2 (VO2, sac 15 kg, défis mensuels)
- **Mai-juin** : bascule vers préparation terrain réel
