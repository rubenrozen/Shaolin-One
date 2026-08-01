# Setup Supabase pour Shaolin One

## 1. Créer le projet Supabase (2 min)

1. Va sur https://supabase.com et crée un compte gratuit (avec GitHub c'est le plus rapide)
2. Clique sur **New Project**
3. Remplis :
   - **Name** : `shaolin-one` (ou ce que tu veux)
   - **Database Password** : génère-en un fort et note-le quelque part (tu n'en auras pas besoin au quotidien mais utile en cas de reset)
   - **Region** : **West EU (Ireland)** ou **Central EU (Frankfurt)** — le plus proche de Paris
   - **Pricing Plan** : Free
4. Clique **Create new project** et attends ~2 minutes que la base soit provisionnée

## 2. Créer les tables (30 secondes)

1. Dans le projet, ouvre l'onglet **SQL Editor** dans la barre latérale gauche
2. Clique **New query**
3. Copie tout le contenu du fichier `supabase-setup.sql` et colle-le
4. Clique **Run** (ou Ctrl+Enter)
5. Tu dois voir "Success. No rows returned." — les 2 tables et la sécurité RLS sont créées

## 3. Configurer l'auth email (1 min)

1. Ouvre **Authentication** → **Providers** dans la barre latérale
2. **Email** doit déjà être activé par défaut. Sinon, active-le.
3. **IMPORTANT** : Va dans **Authentication** → **URL Configuration**
4. Dans **Site URL**, mets l'URL où ton app sera hébergée. Exemples :
   - Si GitHub Pages : `https://TON-USER.github.io/Shaolin-One/`
   - Si Cloudflare Pages : `https://shaolin-one.pages.dev/`
5. Dans **Redirect URLs** (les URLs autorisées après clic sur le lien magique), ajoute :
   - Ton URL de prod (même que Site URL)
   - `http://localhost:*` (pour tester en local)

Sans cette config, le lien magique renverra vers `http://localhost:3000` par défaut et tomberas dans le vide.

## 4. Récupérer les credentials (30 secondes)

1. Ouvre **Project Settings** (icône engrenage en bas de la barre latérale)
2. Clique **API**
3. Note ces 2 valeurs :
   - **Project URL** : `https://xxxxxxxxxxxx.supabase.co`
   - **Project API keys** → **anon public** : long JWT qui commence par `eyJ...`

⚠️ La clé **anon public** est faite pour être exposée côté client — c'est OK qu'elle soit dans le code. La sécurité est garantie par la Row Level Security qu'on a activée. Ne partage JAMAIS la clé **service_role** (celle en-dessous, que tu ignoreras).

## 5. Brancher dans l'app (30 secondes)

Ouvre `index.html` et cherche en haut du script :

```js
const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

Remplace par tes valeurs :

```js
const SUPABASE_CONFIG = {
  url: 'https://xxxxxxxxxxxx.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

## 6. Déployer

Push sur ton repo, attends que GitHub Pages / Cloudflare Pages redéploie (~1 min), rouvre l'app.

## 7. Premier lancement

- L'app t'accueille avec un écran de login
- Tape ton email → clique **Recevoir le lien**
- Vérifie ta boîte mail (regarde aussi les spams) → clique le lien
- Tu es redirigé vers l'app, connecté
- L'écran d'accueil s'ouvre, la sync se fait en tâche de fond

## Vérifier que ça marche

Après ta première séance validée :
1. Va sur https://supabase.com → ton projet → **Table Editor** → `week_state`
2. Tu dois voir une ligne avec ton `user_id`, ton `week_id` (ex: `2026-W31`) et un JSON dans `data`

Si tu vois la ligne : c'est bon, la sync fonctionne. Tu peux te connecter depuis un autre appareil et tout retrouver.

## Mise en pause du projet

Free tier Supabase : si tu n'utilises pas l'app pendant 7 jours consécutifs, le projet passe en pause. Pas grave — au prochain lancement de l'app tu verras un délai de quelques secondes, le temps qu'il se réveille. Tes données ne sont pas perdues.

Comme tu vas utiliser l'app plusieurs fois par semaine pendant 12 mois, tu ne verras probablement jamais la pause.

## En cas de pépin

- **"Failed to fetch"** au login → l'URL Supabase est fausse dans SUPABASE_CONFIG
- **"Invalid API key"** → la anon key est fausse
- **Le lien magique amène à localhost:3000** → tu n'as pas configuré Site URL / Redirect URLs à l'étape 3
- **RLS empêche les insertions** → tu n'as pas exécuté le SQL complet, relance-le

## Bouton "Continuer sans compte"

Si tu ne veux pas configurer Supabase tout de suite, tu peux ignorer les étapes 1-5 et l'app tournera en mode local uniquement (comme avant). Ou bien tu peux cliquer "Continuer sans compte" sur l'écran de login pour rester en local même si Supabase est configuré.
