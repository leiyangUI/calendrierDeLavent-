# Consignes pour l'agent

Ce projet est construit pendant une soirée AI First, en deux heures. La
personne qui te parle n'est pas forcément développeuse. Elle te donne un
brief découpé en paliers.

## Comment travailler

- Un palier à la fois. Ne construis que ce que le palier en cours demande,
  et n'anticipe pas les suivants.
- Le brief dit ce que l'application doit faire, pas comment. Choisis la
  solution la plus simple qui tient les règles du palier, et dis en une
  phrase ce que tu as choisi. Seuls Git, GitHub et GitHub Actions sont
  imposés.
- Quand le brief marque « À TRANCHER », pose la question à la personne avec
  les deux options. Ne tranche pas pour elle.
- Parle simplement. Un mot technique s'explique la première fois.
- Après chaque étape, dis comment la vérifier à l'écran.

## Git : la version courte

Si ton outil gère les skills, installe celle du dossier
`skills/points-de-sauvegarde/` pour ce projet et suis-la. Sinon, applique ces
règles :

1. Au démarrage, vérifie que le projet est suivi par Git. Sinon, initialise-le
   (branche `main`), règle le nom et l'adresse de signature, crée un
   `.gitignore`.
2. Pose un point de sauvegarde (commit) après chaque étape qui fonctionne, et
   avant toute modification risquée.
3. Légende en français, une ligne, un verbe au présent, qui dit ce qui a
   changé : « Affiche la grille des 24 cases ». Jamais « update » ou « fix ».
4. Ne sauvegarde jamais un secret (clé d'API, mot de passe, `.env`). S'il y en
   a déjà un dans l'historique, dis-le tout de suite.
5. Idée incertaine : propose un essai à part (branche), puis aide à l'adopter
   ou à l'abandonner.
6. « Montre-moi ce qui a changé », « reviens à la version où… », « annule » :
   fais-le sans effacer d'historique, en posant un nouveau point de
   sauvegarde.
7. Envoie vers GitHub quand la personne le demande et à la fin d'un palier.
   Demande « public ou privé ? » à la création du dépôt. Dis ce qui a été
   envoyé.
8. Avant toute action qui efface de l'historique ou du travail (`reset
   --hard`, `push --force`, suppression de branche) : la conséquence en une
   phrase, puis attends un oui.
9. Après chaque action Git, résume en deux phrases simples ce qui a été fait.
