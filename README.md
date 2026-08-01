# Shaolin One · Cervin 2027

App PWA de préparation Cervin — 3 séances par semaine.

## Structure

- `index.html` — l'app complète (données + timer + rendu, tout inline)
- `manifest.webmanifest` — métadonnées PWA
- `sw.js` — service worker (offline + version `shaolin-v3-cervin`)
- Icônes 192/512 + maskable + apple-touch

## Ce que fait l'app

**3 slots par semaine** (rotation libre, dans l'ordre que tu veux) :

1. **Boxe** — coche seule avec avis. Tap sur la tile → dialog "comment ça s'est passé ?" → écris ton avis (optionnel) → marque comme faite. Pas d'écran de suivi.

2. **Cardio** — choix vélo maison ou course à pied. Timer intégré. En fin de séance : saisie durée / km / dénivelé, comparaison à la courbe normative de la phase actuelle. Verdict : au-dessus, dans la cible, en-dessous.

3. **Renfo holistique** — 1 séance qui change chaque semaine (rotation A → B → C → D → A). Chaque variant travaille tout (jambes + haut + core + mobilité) avec un angle différent :
   - Semaine A : Force fondation (bases classiques)
   - Semaine B : Endurance musculaire (tempo lent)
   - Semaine C : Explosivité contrôlée
   - Semaine D : Chaîne postérieure & anti-rotation

Rotation calculée depuis le lundi 27 juillet 2026. Se met à jour toute seule le lundi.

**En plus** :
- 8 séances bonus 20 min (ne comptent pas dans le 3/3)
- 9 techniques parasportives (respiration, apnée, froid, mental)
- Étirements complets 10 min

## Courbe de progression cardio

L'app détecte automatiquement dans quelle phase tu es et adapte les cibles :

| Phase | Course | Vélo |
|---|---|---|
| Phase 0 (jusqu'à sept 2026) | 45 min · 5 km · 50m D+ | 60 min · 18 km · résistance faible-moyenne |
| Phase 1 (oct 2026 - jan 2027) | 60 min · 7.5 km · 100m D+ | 90 min · 28 km · résistance moyenne |
| Phase 2 (fév - avr 2027) | 90 min · 11 km · 200m D+ | 120 min · 40 km · résistance haute |
| Phase 3 (mai - juin 2027) | 60 min · 8 km · 300m D+ | 45 min · 15 km (affûtage) |

À chaque séance cardio :
- Cible affichée avant de démarrer
- À la fin, tu saisis tes chiffres
- Verdict visuel (vert / ambre / rouge) selon % de la cible atteint

Historique cardio conservé en localStorage (pour un tracking futur).

## Timer

- Exercices chronométrés → décompte automatique
- Exercices en reps → bouton "✓ Fait" pour passer au suivant
- Repos automatiques
- Bouton pause global
- Bip + vibration à chaque transition
- Décompte audio les 3 dernières secondes
- Wake lock : l'écran reste allumé
- Skip d'étape possible
- Quitter demande confirmation → séance non validée
- Validation auto seulement si tu vas au bout du dernier step

## Typo

Fraunces poussée à ses paramètres les plus assurés :
- Weight 900 (max)
- SOFT 0 (angles les plus durs)
- YOPQ 208 (épaisseur strokes internes max)
- opsz 144 (taille optique display)
- letter-spacing serré (-0.045em sur les gros titres)

Si ce n'est toujours pas assez punchy, on peut switcher à Archivo Black ou Bricolage Grotesque 800.

## Persistence

- `shaolin-one-state-v2` en localStorage
- État : week (id, boxe, cardio, renfo) + cardioHistory (cross-week)
- Reset auto de la semaine quand l'ID de semaine change

## Déploiement

1. Écrase tous les fichiers du repo `Shaolin-One`
2. Commit + push
3. GitHub Pages redéploie (~1 min)
4. Sur ton tel : ferme complètement l'app et rouvre → le SW `shaolin-v3-cervin` prend le relais

## Roadmap

- **Fin sept 2026** : la Phase 0 s'auto-termine, l'app bascule sur les cibles Phase 1
- **Oct 2026** : vélo prend le pas sur la course dans les habitudes (l'app propose toujours les deux, tu choisis)
- **Janvier 2027** : les cibles se resserrent automatiquement
- **Fév 2027** : Phase 2, la puissance devient prioritaire
- **Mai 2027** : Phase 3, on affûte

Toutes les cibles sont dans `CARDIO_TARGETS` en haut du `<script>`, faciles à ajuster.
