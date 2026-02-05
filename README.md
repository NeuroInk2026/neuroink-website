# 🚀 NeuroInk.fr - Site Vitrine

Site vitrine officiel de **NeuroInk Publishing**, maison d'édition spécialisée dans la démocratisation de l'intelligence artificielle.

## 📋 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **CMS** : Sanity.io
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form + Zod
- **Email** : Resend
- **Hébergement** : Vercel

## 🎨 Charte Graphique

| Couleur | Hex | Usage |
|---------|-----|-------|
| Bleu NeuroInk | `#00A3E0` | Circuits, technologie, liens |
| Violet NeuroInk | `#6B3FA0` | Créativité, accents |
| Turquoise | `#40E0D0` | Succès, CTA secondaires |
| Noir profond | `#0F0D15` | Textes principaux |

## 🛠️ Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Compte Sanity.io (gratuit)
- Compte Vercel (gratuit)

### 1. Cloner le projet
```bash
git clone https://github.com/neuroink/neuroink-site.git
cd neuroink-site
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
```bash
cp .env.example .env.local
```

Remplir les valeurs dans `.env.local` :
- `NEXT_PUBLIC_SANITY_PROJECT_ID` : ID de votre projet Sanity
- `NEXT_PUBLIC_SANITY_DATASET` : "production"
- Autres variables selon vos besoins

### 4. Créer le projet Sanity
```bash
# Dans le dossier sanity/
cd sanity
npx sanity init
```

### 5. Lancer le développement
```bash
# Terminal 1 - Site Next.js
npm run dev

# Terminal 2 - Sanity Studio
npm run sanity:dev
```

## 📁 Structure du Projet

```
neuroink-site/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── livres/            # Pages livres
│   ├── blog/              # Pages blog
│   ├── formations/        # Pages formations
│   └── contact/           # Page contact
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Sections de pages
│   └── ui/                # Composants réutilisables
├── lib/                   # Utilitaires
├── sanity/
│   ├── schemas/           # Modèles de données
│   └── lib/               # Client Sanity
├── public/                # Assets statiques
└── ...config files
```

## 🔐 Administration

Accès : `https://neuroink.fr/admin` (ou Sanity Studio déployé)

### Fonctionnalités Admin :
- ✅ Gestion des livres (CRUD)
- ✅ Gestion des articles de blog
- ✅ Gestion des formations
- ✅ Gestion des témoignages
- ✅ Gestion des FAQ
- ✅ Paramètres généraux du site

## 📦 Déploiement

### Vercel (recommandé)
1. Connecter le repo GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer

### Variables à configurer sur Vercel :
- Toutes les variables de `.env.example`

## ✅ Checklist Phase 1

- [x] Structure projet Next.js 14
- [x] Configuration Tailwind + charte graphique
- [x] Layout global (Navbar, Footer)
- [x] Configuration Sanity (schemas)
- [x] Fichier .env.example
- [x] README documentation

## 📞 Contact

- **Email** : contact@neuroink.fr
- **LinkedIn** : [NeuroInk](https://www.linkedin.com/company/neuroinkai)
- **Instagram** : [@neuroink.official](https://www.instagram.com/neuroink.official)

---

© 2025 NeuroInk Publishing - Tous droits réservés
