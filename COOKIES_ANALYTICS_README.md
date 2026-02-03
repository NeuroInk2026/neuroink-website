# 🍪 Système Cookies RGPD & Google Analytics - NeuroInk.fr

## 📋 Vue d'ensemble

Ce système implémente une gestion complète des cookies conforme au RGPD avec:
- ✅ Bannière de consentement obligatoire
- ✅ Choix granulaire (Accepter tout / Refuser tout / Personnaliser)
- ✅ Google Analytics conditionnel (ne charge que si consentement donné)
- ✅ Expiration du consentement après 13 mois (conforme RGPD)
- ✅ Tracking d'événements personnalisés

---

## 📂 Fichiers créés

### 1. `/src/hooks/useCookieConsent.ts`
Hook React qui gère:
- État du consentement (localStorage)
- Affichage de la bannière
- Expiration automatique après 13 mois
- Méthodes: `acceptAll()`, `rejectAll()`, `saveConsent()`

### 2. `/src/components/CookieBanner.tsx`
Composant bannière avec:
- **Vue simple**: Accepter tout / Refuser tout / Personnaliser
- **Vue personnalisée**: Toggle individuel pour chaque type de cookie
- Design NeuroInk (couleurs, police Raleway)
- Responsive mobile/desktop

### 3. `/src/components/GoogleAnalytics.tsx`
- Ne charge Google Analytics QUE si `consent.analytics === true`
- Anonymisation IP activée (RGPD)
- Configuration SameSite et Secure

### 4. `/src/lib/analytics.ts`
Utilitaires de tracking pour:
- Clics CTA (hero, livres, etc.)
- Téléchargement PDF
- Inscription newsletter
- Soumission formulaire contact
- Clics achat (Publishroom, Amazon, Fnac)
- Navigation (livres, articles, formations)
- Réseaux sociaux

### 5. `/src/app/layout.tsx`
Layout mis à jour avec:
- Import `<CookieBanner />`
- Import `<GoogleAnalytics />`
- Metadata SEO complète

---

## 🚀 Installation

### Étape 1: Copier les fichiers dans votre projet

```
Destination → Copier le fichier
─────────────────────────────────────────────────
src/hooks/                → useCookieConsent.ts
src/components/           → CookieBanner.tsx
src/components/           → GoogleAnalytics.tsx
src/lib/                  → analytics.ts
src/app/                  → layout.tsx (remplacer)
/                         → .env.example (remplacer)
```

### Étape 2: Variables d'environnement

Créer `.env.local` avec:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RT00B3HQBG
```

### Étape 3: Installer les dépendances (si nécessaire)

```bash
npm install lucide-react --legacy-peer-deps
```

---

## ✅ Tests à effectuer

### Test 1: Affichage de la bannière
1. Ouvrir le site en navigation privée
2. La bannière doit apparaître au premier chargement
3. Overlay sombre + bannière centrée responsive

### Test 2: Accepter tout
1. Cliquer sur "Tout accepter"
2. La bannière doit disparaître
3. Vérifier dans DevTools → Application → Local Storage:
   - `neuroink-cookie-consent` = `{"analytics":true,"marketing":false,"preferences":true}`
   - `neuroink-cookie-consent-timestamp` = date actuelle
4. Vérifier dans DevTools → Network:
   - Requête vers `googletagmanager.com/gtag/js` doit être présente

### Test 3: Refuser tout
1. Effacer le localStorage
2. Recharger la page
3. Cliquer sur "Tout refuser"
4. Vérifier dans localStorage:
   - `neuroink-cookie-consent` = `{"analytics":false,"marketing":false,"preferences":true}`
5. Vérifier dans Network:
   - AUCUNE requête vers Google Analytics

### Test 4: Personnaliser
1. Effacer le localStorage
2. Recharger la page
3. Cliquer sur "Personnaliser"
4. Activer uniquement "Cookies analytiques"
5. Cliquer sur "Enregistrer mes choix"
6. Vérifier que Google Analytics se charge

### Test 5: Persistance
1. Après avoir accepté, recharger la page
2. La bannière NE doit PAS réapparaître
3. Google Analytics doit se charger automatiquement

### Test 6: Expiration (simulation)
1. Dans DevTools → Console:
```javascript
// Simuler un consentement vieux de 14 mois
const oldDate = new Date();
oldDate.setMonth(oldDate.getMonth() - 14);
localStorage.setItem('neuroink-cookie-consent-timestamp', oldDate.toISOString());
```
2. Recharger la page
3. La bannière doit réapparaître (consentement expiré)

---

## 📊 Utilisation du tracking

### Dans vos composants

```typescript
import { analytics } from '@/lib/analytics';

// CTA Hero
<button onClick={() => {
  analytics.trackHeroCTA('/livres');
}}>
  Découvrir nos livres
</button>

// Téléchargement PDF
<a 
  href="/extraits/odyssee-ia.pdf"
  onClick={() => analytics.trackPDFDownload('odyssee-ia')}
  download
>
  Télécharger l'extrait
</a>

// Inscription newsletter
const handleNewsletterSubmit = async (email: string) => {
  // ... logique d'inscription
  analytics.trackNewsletterSignup('homepage');
};

// Bouton achat
<a 
  href="https://publishroom.com/..."
  onClick={() => analytics.trackPurchaseClick('publishroom', 'odyssee-ia', 39.90)}
>
  Acheter sur Publishroom
</a>
```

---

## 🔍 Vérification Google Analytics

### Dans Google Analytics 4

1. Aller sur https://analytics.google.com
2. Sélectionner la propriété `G-RT00B3HQBG`
3. **Rapports → Temps réel** : Vérifier les visites en direct
4. **Événements** : Vérifier les événements personnalisés
   - `cta_click`
   - `pdf_download`
   - `newsletter_signup`
   - `contact_form_submit`
   - `purchase_click`

### Debug en développement

Dans la console DevTools:
```javascript
// Vérifier si gtag est chargé
console.log(window.gtag);

// Vérifier le dataLayer
console.log(window.dataLayer);

// Envoyer un événement test
window.gtag('event', 'test_event', { test: 'value' });
```

---

## 🎨 Personnalisation

### Modifier les couleurs de la bannière

Dans `CookieBanner.tsx`:
- Dégradé bouton: `from-[#6B3FA0] to-[#00A3E0]` → vos couleurs
- Icône succès: `text-[#40E0D0]` → votre couleur
- Liens: `text-[#00A3E0]` → votre couleur

### Modifier le délai d'expiration

Dans `useCookieConsent.ts`, ligne 24:
```typescript
if (monthsDiff > 13) { // 13 mois RGPD
```
Vous pouvez changer à 12 ou 6 mois selon vos besoins.

### Ajouter d'autres types de cookies

Dans `useCookieConsent.ts`, ajouter dans l'interface:
```typescript
export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  social: boolean; // NOUVEAU
};
```

Puis ajouter dans `CookieBanner.tsx` un nouveau toggle.

---

## ⚠️ Points d'attention

### RGPD
✅ Consentement AVANT chargement des trackers
✅ Choix granulaire disponible
✅ Possibilité de refuser
✅ Expiration automatique
✅ Lien vers politique de confidentialité

### Performance
- Google Analytics charge uniquement si consentement donné
- Pas d'impact sur le First Paint si l'utilisateur refuse
- localStorage pour éviter les requêtes serveur

### Mobile
- Bannière responsive (bottom mobile, center desktop)
- Touch targets ≥ 44px
- Texte lisible (≥ 14px)

---

## 🐛 Dépannage

### La bannière ne s'affiche pas
1. Vérifier la console pour des erreurs JavaScript
2. Vérifier que `localStorage` n'est pas déjà rempli
3. Effacer le cache du navigateur

### Google Analytics ne charge pas après acceptation
1. Vérifier la console Network (filtre: `gtag`)
2. Vérifier `.env.local` → `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Vérifier que `consent.analytics === true` dans React DevTools

### La bannière réapparaît à chaque chargement
1. Vérifier que `localStorage` fonctionne (navigation privée le bloque)
2. Vérifier qu'il n'y a pas d'erreur dans `saveConsent()`

---

## 📚 Ressources

- [RGPD - CNIL](https://www.cnil.fr/fr/cookies-et-autres-traceurs)
- [Google Analytics 4](https://support.google.com/analytics/answer/10089681)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)

---

## ✨ Prochaines étapes

Après validation de cette phase, nous passerons à:
1. **Phase 6.3**: Optimisation Lighthouse (images WebP, lazy loading)
2. **Phase 6.4**: Déploiement Vercel
3. **Phase 6.5**: Connexion domaine neuroink.fr
4. **Phase 6.6**: Documentation finale

---

**Créé pour NeuroInk.fr - Franklin KAMCHE**  
*Système cookies RGPD conforme et performant* 🚀
