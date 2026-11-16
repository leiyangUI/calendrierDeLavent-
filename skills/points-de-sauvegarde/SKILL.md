---
name: points-de-sauvegarde
description: Tenir l'historique Git d'un projet pour quelqu'un qui ne connaît pas les commandes. À utiliser dès le début d'un projet, avant toute modification risquée, après chaque étape qui fonctionne, à la fin d'un palier, et quand la personne dit « sauvegarde », « montre-moi ce qui a changé », « reviens à la version où… », « annule ce que tu viens de faire », « je veux essayer une idée », « envoie sur GitHub ».
---

# Points de sauvegarde

Tu tiens l'historique Git du projet à la place de la personne. Elle ne connaît
pas les commandes et n'a pas à les apprendre : elle demande, tu exécutes, puis
tu dis ce que tu as fait avec des mots simples.

## Les mots à employer

Parle avec les mots de gauche. Le mot Git peut suivre entre parenthèses la
première fois, pas plus.

| Avec la personne | Dans Git |
| --- | --- |
| un point de sauvegarde | un commit |
| la légende | le message de commit |
| l'atelier | le dossier du projet sur son ordinateur |
| le coffre | le dépôt sur GitHub |
| envoyer au coffre | push |
| un essai à part | une branche |
| adopter l'essai | fusionner la branche dans `main` |
| l'historique | le journal des commits |

## 1. Au démarrage

Avant de toucher au moindre fichier :

1. Vérifie que le projet est versionné (`git rev-parse --is-inside-work-tree`).
   S'il ne l'est pas, initialise-le avec une branche principale `main`.
2. Vérifie qu'un nom et une adresse sont configurés pour signer les
   sauvegardes (`git config user.name`, `git config user.email`). S'il en
   manque un, règle-le pour ce projet seulement. Si la personne est connectée
   à GitHub, reprends son nom de compte et son adresse `noreply` GitHub.
   Sinon, demande-lui un prénom.
3. Vérifie qu'un fichier `.gitignore` existe et qu'il écarte au minimum :
   `.env`, `.env.*`, `*.pem`, `*.key`, les dossiers de dépendances et de
   fabrication (`node_modules/`, `dist/`, `.venv/`…) et les fichiers du
   système (`.DS_Store`, `Thumbs.db`). Crée-le ou complète-le.
4. S'il y a déjà des fichiers et aucun point de sauvegarde, pose le premier :
   « Point de départ du projet ».

Dis ensuite en une phrase où en est le projet : « Le projet est suivi, il a
3 points de sauvegarde, le dernier date de 20 h 12. »

## 2. Quand poser un point de sauvegarde

- **Après chaque étape qui fonctionne.** Une étape fonctionne quand la
  personne l'a vue marcher ou quand tu l'as vérifiée toi-même. Pas avant.
- **Avant toute modification risquée** : supprimer ou déplacer des fichiers,
  changer la façon dont les données sont rangées, toucher à beaucoup de
  fichiers d'un coup, installer ou retirer une dépendance, modifier la tâche
  automatique ou la mise en ligne.
- **À la fin de chaque palier.**

Ne garde jamais plus d'une étape de travail sans sauvegarde. Si le projet est
cassé au moment où il faut sauvegarder, dis-le dans la légende
(« En cours : … ») plutôt que de faire passer l'état pour bon.

Avant chaque point de sauvegarde, relis la liste de ce qui va y entrer
(`git status`, `git diff --cached --name-only`). Voir la section 6.

## 3. Les légendes

- En français, une ligne, 70 caractères au plus.
- Elle dit ce qui a changé, vu par la personne, et pourquoi si ce n'est pas
  évident. Une deuxième ligne est permise pour le pourquoi.
- Elle commence par un verbe au présent.
- Pas de « fix », « update », « wip », « modifs », pas de nom de fichier seul.

Bien : « Affiche la grille des 24 cases », « Rend la case du jour
reconnaissable sans la couleur », « Écarte le fichier de clés des
sauvegardes ».

Mal : « update index.html », « corrections », « étape 2 ».

## 4. Les demandes en langage courant

**« Montre-moi ce qui a changé »**
Compare l'état actuel au dernier point de sauvegarde. Réponds par une liste
courte, en parlant de ce que la personne voit dans son application (« le
titre a changé », « la case 3 a un nouveau texte »), pas ligne par ligne.
Propose le détail si elle le veut.

**« Montre-moi l'historique »**
Donne les points de sauvegarde du plus récent au plus ancien : l'heure et la
légende. Rien d'autre.

**« Reviens à la version où… »**
1. Retrouve le point de sauvegarde dans l'historique. Si deux candidats sont
   possibles, montre-les et demande lequel.
2. Mets à l'abri le travail en cours : pose un point de sauvegarde s'il y a
   des changements non sauvegardés.
3. Remets les fichiers dans l'état du point choisi et pose un **nouveau**
   point de sauvegarde (« Reviens à la version où la grille s'affichait »).
   Ne supprime aucun point existant : l'historique garde la trace de l'aller
   et du retour, et la personne peut encore changer d'avis.
4. Dis ce qui est revenu et ce qui a été mis de côté.

**« Annule ce que tu viens de faire »**
- Si ce n'est pas encore sauvegardé : remets les fichiers dans l'état du
  dernier point de sauvegarde. Si des changements faits par la personne
  partiraient avec, liste-les d'abord et demande confirmation.
- Si c'est déjà sauvegardé : pose un nouveau point qui défait le précédent
  (`git revert`). N'efface pas l'ancien.

**« Je veux essayer une idée »**, ou toute demande incertaine (« et si le
calendrier était en 3D ? »)
Propose un essai à part avant de commencer. Voir la section 5.

## 5. Les essais à part

Quand la personne veut tester une idée dont elle n'est pas sûre :

1. Sauvegarde l'état actuel, puis crée un essai à part nommé d'après l'idée
   (`essai/fond-etoile`). Dis-lui : « La version qui marche est à l'abri. Tout
   ce que nous faisons maintenant reste à part. »
2. Travaille sur l'essai, avec des points de sauvegarde comme d'habitude.
3. Quand elle a vu le résultat, demande : adopter ou abandonner ?
   - **Adopter** : ramène l'essai dans la version principale, vérifie que
     l'application fonctionne, dis que c'est fait.
   - **Abandonner** : reviens à la version principale. Supprimer l'essai est
     une action destructrice (section 8) : propose de le garder de côté.

À savoir : une tâche automatique planifiée sur GitHub ne tourne que depuis la
version principale. Un robot modifié dans un essai ne passera pas à l'heure
tant que l'essai n'est pas adopté. Préviens la personne si c'est le cas.

## 6. Les secrets

Un secret est tout ce qui donne un accès : clé d'API, mot de passe, jeton,
fichier `.env`.

- N'écris jamais un secret dans un fichier suivi. Range-le dans un fichier
  écarté par `.gitignore`, ou dans les secrets de GitHub quand c'est le robot
  qui en a besoin.
- Avant chaque point de sauvegarde, vérifie qu'aucun fichier ajouté ne
  contient de secret. Dans le doute, arrête-toi et demande.
- Si un secret a déjà été sauvegardé, dis-le tout de suite et sans détour :
  supprimer le fichier ne suffit pas, l'historique le garde. S'il a été envoyé
  au coffre, il faut le considérer comme perdu : la personne doit le révoquer
  et en créer un autre chez le fournisseur. Nettoyer l'historique vient après,
  et c'est une action destructrice (section 8).

## 7. Envoyer au coffre

Envoie vers GitHub quand la personne le demande, et propose-le à la fin de
chaque palier.

- **Première fois.** S'il n'y a pas encore de coffre, crée-le sur son compte.
  Demande d'abord s'il doit être public ou privé, en une phrase : « Public,
  n'importe qui peut lire tous les fichiers et tout l'historique. Privé, vous
  seul. » Ne choisis pas à sa place.
- **Avant l'envoi.** Relis ce qui part : la liste des points de sauvegarde
  pas encore envoyés, et aucun secret dedans.
- **Si le coffre refuse** parce qu'il contient des sauvegardes que l'atelier
  n'a pas (le robot a pu en poser une) : récupère-les, intègre-les, puis
  renvoie. Ne force jamais l'envoi pour passer outre.
- **Après l'envoi.** Dis ce qui est parti : « 3 points de sauvegarde envoyés :
  la grille, les trois états, le premier contenu. Ils sont visibles à
  l'adresse … »

## 8. Les actions destructrices

Certaines actions font disparaître du travail ou de l'historique sans retour
possible :

- remettre l'historique à un point antérieur en effaçant ce qui suit
  (`reset --hard`) ;
- écraser l'historique du coffre (`push --force`) ;
- supprimer un essai qui n'a pas été adopté (`branch -D`) ;
- supprimer des fichiers non sauvegardés (`clean`, `checkout -- .`) ;
- réécrire l'historique (`rebase` de points déjà envoyés, `filter-repo`) ;
- supprimer le coffre.

Avant l'une d'elles : explique la conséquence en une phrase (« Les deux
dernières sauvegardes seront perdues pour de bon »), propose l'autre voie
quand il y en a une, et attends un oui explicite. Un oui donné plus tôt pour
autre chose ne compte pas.

## 9. Toujours résumer

Après chaque action sur l'historique, deux phrases au plus : ce qui vient
d'être fait, et dans quel état se trouve le projet. Aucun mot de Git qui n'a
pas été expliqué.

> Sauvegardé : « Affiche les trois états des cases ». Le projet a 5 points de
> sauvegarde, 2 ne sont pas encore au coffre.

Si une commande échoue, dis ce qui s'est passé avec les mêmes mots simples,
ce que tu proposes, et ne réessaie pas en boucle la même commande.
