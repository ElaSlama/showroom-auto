# Showroom Auto | TP2 Angular

Application Angular qui permet de consulter la liste des voitures d'une marque via un formulaire de recherche.

- **Dépôt :** https://github.com/ElaSlama/showroom-auto
- **Déploiement :** https://elaslama.github.io/showroom-auto/

## Notions couvertes

- Composants : `head-bar`, `search-bar`, composant principal `App`
- Interface TypeScript : `Auto` (`src/app/interfaces/auto.ts`)
- Communication père → fils : `@Input() autos` (liste `autoList` passée à `app-search-bar`)
- Communication fils → père : `@Output() selectAutoEvent` émis par `selectedAuto()`, reçu par `updateAuto($event)`
- Directives `*ngFor` (modèles de la marque) et `*ngIf` (détails du modèle sélectionné)

## Lancer le projet

```bash
npm install
npm start
```

Puis ouvrir http://localhost:4200/.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui construit l'application et la publie sur GitHub Pages.
