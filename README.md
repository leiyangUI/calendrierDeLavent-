# Calendrier de l’Avent — Un flocon par jour

Un petit jeu mobile de calendrier de l’Avent, disponible en deux couleurs grâce au sélecteur garçon/fille.

## Le jeu

- Les jours déjà accessibles restent jouables. Résous le puzzle pour valider le flocon du jour.
- Les jours futurs restent verrouillés.
- Chaque date révèle son propre flocon en 3D.
- La vue 3D lance automatiquement une comptine avec paroles synchronisées. Glisse vers le bas pour la fermer.
- La neige apparaît sur l’écran d’accueil et autour du flocon en 3D.
- Le guide des gestes n’apparaît qu’à la première ouverture de la vue 3D.

Le jour est simulé au 5 décembre : les cinq premières cases sont accessibles pour la démonstration.

## Lancer sur son ordinateur

Depuis le dossier du projet, lance un petit serveur local :

```sh
python3 -m http.server 8000
```

Ouvre ensuite <http://localhost:8000> dans ton navigateur. Pour arrêter le serveur, reviens au terminal et appuie sur `Ctrl+C`.

## Publication

Le workflow GitHub Actions copie également le dossier `flacon/` avant de publier le site sur GitHub Pages. Le site utilise Three.js et la lecture audio de Wikimedia Commons ; une connexion Internet est nécessaire pour ces ressources.

## Crédit audio

« Frère Jacques » est l’enregistrement de CambridgeBayWeather, partagé sous licence [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). [Source sur Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fr%C3%A8re_Jacques.ogg).

La fiche du jeu est dans [flacon/Un flocon par jour.md](flacon/Un%20flocon%20par%20jour.md).
