# Interaction & Navigation

## 1. Structure de navigation

Le produit comporte trois vues complémentaires :

| Vue | Nom | Rôle |
| --- | --- | --- |
| B | Aujourd'hui en premier | Entrée par défaut, accès immédiat au contenu du jour |
| A | Grille + tiroir du bas | Vue d'ensemble des 24 jours et consultation dans un tiroir |
| C | Une page par jour | Page autonome et URL partageable pour une journée |

Les trois vues consultent le même calendrier et partagent les mêmes règles de disponibilité.

## 2. Raccourcis visibles

| Commande | Destination / action |
| --- | --- |
| `Aujourd'hui` | Revenir à la vue B et au jour courant |
| `Grille` | Ouvrir la vue A |
| `Partager` | Partager l'URL de la journée sélectionnée |
| `Lire la suite` / `Page complète` | Ouvrir la vue C pour la journée sélectionnée |
| `Retour à la grille` | Revenir à la vue A |

Les libellés doivent être compréhensibles sans connaître les noms internes A, B et C.

## 3. Vue B — Aujourd'hui en premier

### Hiérarchie

1. Titre du calendrier et contexte de décembre.
2. Carte principale du jour.
3. Titre et contenu du jour.
4. Lien associé éventuel.
5. Accès à tous les jours.
6. Grille compacte des 24 dates.
7. Navigation principale.

### Comportement

- La vue B est l'écran par défaut.
- Le contenu du jour est visible sans interaction supplémentaire.
- La grille compacte donne accès aux jours disponibles.
- Un tap sur une journée disponible ouvre sa page C.
- Une journée future est visuellement verrouillée et non consultable.
- Le raccourci `Grille` ouvre A.

## 4. Vue A — Grille + tiroir du bas

### Hiérarchie

1. Titre du calendrier.
2. Instruction courte.
3. Grille complète de 24 cases.
4. Tiroir inférieur après sélection.
5. Navigation principale.

### Comportement du tiroir

- Le tiroir est fermé au chargement de la vue A.
- Un tap sur une case disponible ouvre le tiroir.
- Le tiroir compact présente le numéro de jour, le titre et un aperçu.
- Le tiroir peut être développé pour lire davantage de contenu.
- Le tiroir peut être fermé avec le bouton de fermeture ou par geste vers le bas.
- Une action permet d'ouvrir la page C correspondante.
- Les changements de journée dans le tiroir respectent la disponibilité.

Le tiroir doit disposer de sa propre zone de scroll lorsque le contenu dépasse la hauteur disponible.

## 5. Vue C — Une page par jour

### Hiérarchie

1. Lien de retour à la grille.
2. Numéro de jour et progression `n / 24`.
3. Contenu de la journée.
4. Lien associé éventuel.
5. Navigation précédente / suivante.
6. Action de partage.

### Comportement

- Chaque journée possède une URL stable.
- L'URL permet d'ouvrir directement la journée.
- La page vérifie les règles d'accès avant de fournir le contenu.
- Les boutons précédent et suivant sont visibles.
- Les journées futures restent inaccessibles même avec une URL directe.

## 6. Matrice des gestes

| Zone | Geste | Action |
| --- | --- | --- |
| Carte du jour dans B | Swipe gauche | Jour suivant |
| Carte du jour dans B | Swipe droite | Jour précédent |
| Page C / zone de contenu | Swipe gauche | Jour suivant |
| Page C / zone de contenu | Swipe droite | Jour précédent |
| Page B ou C | Scroll vertical | Défilement normal |
| Poignée du tiroir A | Swipe vers le haut | Développer le tiroir |
| Poignée du tiroir A | Swipe vers le bas | Réduire / fermer le tiroir |
| Tiroir A | Swipe horizontal | Jour précédent / suivant |

## 7. Règles de priorité des gestes

- Le scroll vertical natif reste prioritaire sur les zones de lecture.
- Le swipe horizontal n'est reconnu que si le déplacement horizontal dépasse un seuil et domine clairement le déplacement vertical.
- Les gestes de tiroir sont attachés à la poignée, pas à toute la surface du contenu.
- Les gestes ne remplacent jamais les boutons.
- Un geste qui vise une journée future affiche un retour de verrouillage sans révéler le contenu.
- Les limites du calendrier (jour 1 et jour 24) sont respectées.

## 8. États visuels des cases

| État | Signification | Représentation |
| --- | --- | --- |
| Disponible passée | Contenu publié et accessible | Marqueur d'ouverture distinct du marqueur de lecture |
| Aujourd'hui | Date courante du calendrier | Bordure renforcée et libellé `Aujourd'hui` |
| Future | Contenu non encore disponible | Cadenas et interaction désactivée |
| Lue (optionnel) | Le visiteur a consulté le contenu | Indicateur séparé, seulement si le suivi de lecture est retenu |

Le prototype initial utilisait un signe de coche pour les cases passées. La signification finale de ce signe doit être clarifiée : une coche peut être comprise comme « lu » ou « terminé », alors que la date peut simplement être ouverte.

## 9. Accessibilité et ergonomie

- Les cibles tactiles doivent rester suffisamment grandes pour être sélectionnées confortablement.
- Les cases verrouillées doivent être distinguables autrement que par la couleur seule.
- Les commandes doivent avoir des libellés accessibles.
- Les actions importantes doivent être possibles au tap, pas uniquement au swipe.
- Les animations ne doivent pas empêcher l'accès au contenu.
- Les lecteurs d'écran doivent pouvoir identifier le numéro de jour et son état.
- Le focus clavier doit rester visible lors de la navigation au clavier.

## 10. Cas limites à tester

- Jour 1 : aucune navigation vers un jour précédent.
- Jour 24 : aucune navigation vers un jour suivant.
- Swipe vers un jour futur : contenu non révélé.
- URL directe vers un jour futur : contenu non révélé.
- Contenu long dans le tiroir : scroll interne disponible.
- Contenu long dans C : scroll vertical normal.
- Changement A → B → C : même journée sélectionnée lorsque cela est pertinent.
- Retour `Aujourd'hui` : revient toujours au jour courant.
