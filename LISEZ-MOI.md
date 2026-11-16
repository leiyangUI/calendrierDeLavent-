# Le kit du soir

Décompressez ce dossier, renommez-le au nom de votre projet, et ouvrez votre
agent dedans. Il ne contient aucun code : l'application, c'est vous et votre
agent qui la construisez.

| Fichier | À quoi il sert |
| --- | --- |
| `AGENTS.md` | Les consignes que votre agent lit en arrivant : un palier à la fois, et les habitudes Git en version courte. Codex et Cursor le lisent seuls. |
| `CLAUDE.md` | Une ligne qui renvoie Claude Code vers `AGENTS.md`. |
| `skills/points-de-sauvegarde/` | La skill Git complète. Elle apprend à votre agent à sauvegarder, comparer, revenir en arrière et envoyer vers GitHub quand vous le demandez avec vos mots. |
| `prompt-contenu.md` | Le prompt à coller pour remplir vos 24 cases en vingt minutes. |
| `exemples-de-cases.md` | Six cases d'exemple, six formats. |

## Par où commencer

1. Dites à votre agent : « Lis AGENTS.md et installe la skill du dossier
   skills pour ce projet. »
2. Donnez-lui la version Markdown du brief et demandez-lui de ne construire
   que le palier 1.
3. Collez `prompt-contenu.md` quand vous voulez écrire vos cases. Trois ou
   quatre cases suffisent pour démarrer, les autres peuvent attendre.

## Les phrases qui marchent

Vous n'avez aucune commande à connaître. Demandez :

- « Sauvegarde. »
- « Montre-moi ce qui a changé. »
- « Montre-moi l'historique. »
- « Reviens à la version où la grille s'affichait. »
- « Annule ce que tu viens de faire. »
- « Je veux essayer une idée sans rien casser. »
- « Envoie sur GitHub et dis-moi ce qui est parti. »
