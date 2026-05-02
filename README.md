# Shaolin One · PWA programme quotidien

App web installable sur téléphone (PWA). Fonctionne hors-ligne après la première visite, s'ajoute à l'écran d'accueil avec une icône.

## Contenu

- `index.html` — l'app complète, tous les jours et toute la logique inline
- `manifest.webmanifest` — métadonnées d'installation
- `sw.js` — service worker pour le mode hors-ligne
- `icon-192.png`, `icon-512.png` — icônes standards
- `icon-192-maskable.png`, `icon-512-maskable.png` — icônes Android (avec safe zone)
- `apple-touch-icon.png` — icône iOS (180×180)
- `icon-1024.png` — master haute résolution (référence, pas servi)

## Déploiement

### GitHub Pages

1. Pousse les fichiers à la racine de ton repo `Shaolin-One`
2. Settings → Pages → Source : `main` / `(root)` → Save
3. URL en 1 min : `https://rubenrozen.github.io/Shaolin-One/`

### Test local

```bash
cd Shaolin-One
python3 -m http.server 8080
```

Ouvre `http://localhost:8080`. Note : le service worker ne fonctionne pas sur `file://`, il faut un serveur HTTP.

## Installation sur téléphone

### iOS (Safari uniquement)
1. Ouvre l'URL dans Safari
2. Bouton Partager → "Sur l'écran d'accueil"
3. L'icône apparaît, l'app s'ouvre en plein écran

### Android (Chrome)
1. Ouvre l'URL
2. Menu (⋮) → "Installer l'application"
3. Confirme, l'app s'installe comme une vraie app

## HTTPS requis

Pour que l'installation PWA fonctionne, le site doit être servi en HTTPS. GitHub Pages le fait automatiquement. En local, seul `localhost` est autorisé en HTTP.

## Mise à jour des icônes

Pour changer l'image plus tard :
1. Remplace les PNG dans le repo
2. Bumpe la version dans `sw.js` : `CACHE = 'shaolin-v2'`
3. À la prochaine ouverture, le service worker met à jour le cache

## Personnalisation rapide

Tout le contenu est dans le tableau `days` au début de la balise `<script>` dans `index.html`. Pour modifier un exercice, change le texte dans le bon objet, recharge la page.

Les icônes des exercices (stick figures SVG) sont dans l'objet `icons` plus bas.

## Couleurs / thème

CSS variables tout en haut du `<style>`. L'app reste blanche en toutes circonstances (pas de mode sombre).

- `--rust` (corail) : effort, exercices
- `--pine` (vert) : étirements
- `--indigo` : mental
- `--amber` : échauffement, apnée
