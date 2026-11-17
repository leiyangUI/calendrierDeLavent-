# Calendrier de l’Avent

Un prototype web de calendrier de l’Avent, conçu pour découvrir une surprise par jour. L’interface est en français et fonctionne sans dépendance à installer.

## Ce que contient le prototype

- **Aujourd’hui** : la surprise du jour apparaît en premier. Sur téléphone, faites glisser la carte vers la gauche ou la droite pour parcourir les jours disponibles.
- **Grille** : les 24 dates sont visibles. Les jours passés sont verts et ouverts ; les jours futurs sont rouges et verrouillés.
- **Page d’un jour** : chaque surprise ouverte a une adresse partageable `#jour-N`, avec des boutons précédent et suivant.
- **Tiroir de la grille** : touchez une date ouverte pour afficher son contenu. Le bouton poignée l’agrandit ; les gestes horizontaux changent de jour.
- **Lecture** : les jours lus sont mémorisés dans le navigateur de la personne, sans compte.

Les gestes mobiles sont des raccourcis : les boutons visibles permettent aussi de naviguer. Le défilement vertical reste disponible pour lire et parcourir la grille.

## Lancer sur son ordinateur

Depuis le dossier du projet, lancez un petit serveur local :

```sh
python3 -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000> dans votre navigateur. Pour arrêter le serveur, revenez au terminal et appuyez sur `Ctrl+C`.

## Mode démonstration

Le prototype est fixé au **5 décembre**. Il contient cinq textes d’exemple ; les jours 6 à 24 restent verrouillés. Les libellés de date utilisent le fuseau `Europe/Paris`, mais le jour courant ne suit pas encore le calendrier réel.

## Publication

Le dépôt contient un workflow GitHub Actions qui prépare les fichiers du site et les publie sur GitHub Pages lors d’une modification de l’application ou d’un lancement manuel. Il ne publie que `index.html`, `styles.css`, `app.js` et les icônes SVG.

Pour la première publication, dans le dépôt GitHub, choisissez **Settings → Pages → Build and deployment → Source → GitHub Actions**. Tant que ce réglage n’est pas activé, le site n’est pas en ligne.

## Étapes suivantes

- Le robot de publication quotidienne, son lancement manuel, le mode accéléré et son journal ne sont pas encore développés.
- La protection des contenus futurs n’est pas encore développée. Les cinq textes de démonstration sont déjà présents dans le dépôt public et son historique ; n’y placez pas de vrais contenus futurs avant de choisir et mettre en place la parade du palier 4.
