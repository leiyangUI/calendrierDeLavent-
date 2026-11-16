# Product Decisions

## 1. Décisions établies

| Sujet | Décision | Statut |
| --- | --- | --- |
| Vue par défaut | B — Aujourd'hui en premier | Confirmé |
| Vues du calendrier | A, B et C sont toutes conservées | Confirmé |
| Relation entre les vues | Trois modes d'accès au même calendrier et aux mêmes contenus | Confirmé |
| Vue A | Grille complète avec tiroir inférieur | Confirmé |
| Vue B | Contenu du jour en premier, grille des dates en dessous | Confirmé |
| Vue C | Une page par jour, partageable par URL | Confirmé |
| Navigation tactile | Ajouter des gestes horizontaux et verticaux adaptés au contexte | Confirmé dans son principe |
| Commandes visibles | Les raccourcis restent disponibles en complément des gestes | Proposition retenue dans le Low-fi |

## 2. Règles proposées dans le Low-fi

Ces règles sont présentes dans le prototype de démonstration, mais doivent être validées comme règles produit avant la production :

- la date de démonstration est fixée au jour 5 ;
- les jours passés peuvent être rouverts ;
- les jours futurs sont verrouillés ;
- les jours passés affichent une coche ;
- la navigation de journée utilise des fragments d'URL (`#jour-n`) dans le prototype.

Ces choix ne doivent pas être considérés comme des décisions métier définitives uniquement parce qu'ils figurent dans le code de démonstration.

## 3. Décisions à trancher

### 3.1 Accès aux jours passés

- Option A : les jours déjà ouverts restent consultables après leur date.
- Option B : seul le jour courant est consultable ; les jours passés sont fermés.

Impact : accès depuis la grille, navigation précédente, partage des anciennes URLs et durée de disponibilité des contenus.

### 3.2 Suivi de lecture

- Option A : aucun suivi de lecture ; le calendrier indique seulement les journées disponibles.
- Option B : mémoriser les journées lues et afficher un état de lecture distinct.

Impact : stockage, éventuelle identification du visiteur et interprétation des coches.

### 3.3 Fuseau horaire

Définir le fuseau horaire de référence qui détermine le passage au jour suivant et le déclenchement de la publication.

Ne pas déduire ce choix du fuseau horaire du navigateur de chaque visiteur.

### 3.4 Gestion des contenus

Définir si les contenus sont :

- préparés et versionnés directement dans les fichiers du projet ; ou
- gérés dans une interface d'administration et stockés dans un service dédié.

Le kit source ne spécifie pas d'interface d'administration.

### 3.5 Routes partageables

Confirmer le format final des URLs de journée. Proposition :

- `/jour/1`
- `/jour/2`
- …
- `/jour/24`

Le prototype Low-fi utilise actuellement des fragments d'URL ; ce mécanisme ne remplace pas la configuration de routes directes côté hébergement.

## 4. Contraintes non négociables issues du kit

- 24 cases, numérotées de 1 à 24.
- Pas de doublon ni de case vide à la livraison des contenus.
- Le contenu d'une journée future ne doit pas être lisible avant sa date.
- Les faits incertains doivent être signalés et vérifiés.
- Les contenus doivent respecter les droits d'auteur.
- Les liens, défis et formulations doivent être adaptés au public et à son âge.
- Le temps de production est limité ; les contenus non terminés peuvent être marqués « à écrire ».
- Le développement se fait palier par palier.
- Git, GitHub et GitHub Actions sont les outils imposés par le kit.

## 5. Éléments hors décision

Aucun framework, base de données, fournisseur d'hébergement, système de compte visiteur ou outil d'analytics n'est imposé par les documents sources. Ces choix ne doivent être ajoutés qu'en fonction des besoins du palier concerné.
