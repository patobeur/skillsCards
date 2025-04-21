# 🎴 79 Cartes de Compétences - Projet Web Interactif

Bienvenue dans ce projet de création d'un jeu de cartes numérique dédié aux compétences acquises lors de différentes formations BTS, Bachelor et MBA (en tests).
[version test](https://patobeur.github.io/skillsCards/) ! 🙏

## 📚 Objectif

Ce projet vise à :
- Afficher de manière interactive toutes les compétences sur des cartes format "poker ou autres",
- Permettre aux utilisateurs de filtrer les cartes par **Famille de compétence** et **Formation associée**.

## 🏗️ Structure du projet

Le projet est composé des fichiers suivants :

- `js/formations.js` : liste complète des formations avec descriptions, icônes, codes RNCP, NSF, Formacodes.
- `js/familles.js` : liste des familles de compétences.
- `js/competences.js` : liste des 74 compétences avec explication claire, familles, formations associées, sources officielles.
- `js/main.js` : script principal qui génère dynamiquement les cartes et les filtres Famille/Formation.
- `assets/style.css` : feuille de styles pour le design des cartes et des boutons.
- `index.html` : page principale du site.

## ✨ Fonctionnalités principales

- 📋 Affichage de 74 cartes de compétences.
- 🎯 Filtres interactifs :
  - 1ère ligne : Filtrer par Famille de compétence,
  - 2e ligne : Filtrer par Formation.
- 🖱️ Système de badges visuels pour les formations et familles.
- 🔗 Liens vers les sources officielles (Onisep, France Compétences, etc.).
- 🎨 Design moderne avec animations simples et responsive.

## ⚙️ Technologies utilisées

- HTML5
- CSS3 (Flexbox, variables CSS, responsive design)
- JavaScript Vanilla (sans framework)

## 🚀 Pour lancer le projet en local

1. Clonez ce dépôt ou téléchargez les fichiers ZIP.
2. Ouvrez simplement `index.html` dans votre navigateur préféré.
3. Amusez-vous à filtrer et explorer les compétences !

Aucune installation supplémentaire n'est nécessaire.

## 📦 Arborescence simplifiée

```
site/
├── assets/
│   └── style.css
├── js/
│   ├── competences.js
│   ├── familles.js
│   ├── formations.js
│   └── main.js
├── index.html
└── README.md
```

## 📅 État actuel du projet

- ✅ Compétences en cours d'écritures.
- ✅ Filtres en test Famille / Formation.
- ✅ Responsive Desktop et Mobile (css a fignoler).
- 🛠️ Prochaines étapes possibles :
  - Idéalement :> Ajouter des illustrations ou icônes personnalisées par compétence,
  - Idéalement :> Version imprimable pour créer un véritable jeu de cartes physiques !

## 🤝 Remerciements

Merci à [francecompetences.fr](https://www.francecompetences.fr/) et à [onisep.fr/metier](https://www.onisep.fr/metier) ! 🙏

---
