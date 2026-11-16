# User Workflow

## 1. Objectif

Décrire les parcours des personnes qui utilisent et alimentent le Calendrier de l'Avent.

Le calendrier comporte 24 cases, du 1er au 24 décembre. Le parcours de consultation privilégie l'accès rapide au contenu du jour, tout en permettant de parcourir la grille et d'ouvrir chaque journée sur une page partageable.

## 2. Acteurs

### 2.1 Visiteur

Personne qui ouvre le calendrier pour découvrir le contenu quotidien.

Besoins principaux :

- voir immédiatement la case du jour ;
- comprendre quelles cases sont disponibles ;
- accéder à une autre journée déjà disponible ;
- parcourir le calendrier complet ;
- partager le lien d'une journée.

### 2.2 Créateur du calendrier

Personne qui définit le thème et le public, prépare les 24 contenus et vérifie leur progression.

Besoins issus du kit :

- préciser le sujet, le public et le ton ;
- définir une progression sur 24 jours ;
- varier les formats ;
- rédiger et valider les contenus par lots de six ;
- vérifier qu'il existe exactement 24 cases, sans doublon ni case vide ;
- conserver les surprises futures hors d'accès avant leur date.

### 2.3 Agent de développement

Agent qui accompagne la construction du produit.

Règles de travail issues de `AGENTS.md` :

- travailler un palier à la fois ;
- ne pas anticiper les paliers suivants ;
- demander une décision lorsque le brief indique « À TRANCHER » ;
- expliquer simplement les choix techniques ;
- indiquer comment vérifier chaque étape à l'écran ;
- créer un point de sauvegarde après chaque étape fonctionnelle.

## 3. Parcours visiteur — ouverture quotidienne

1. Le visiteur ouvre l'URL principale du calendrier.
2. Le calendrier affiche la vue B — `Aujourd'hui en premier`.
3. Le bloc principal présente la date du jour, le numéro de la case, son titre et son contenu.
4. Le visiteur lit le contenu et utilise le lien associé s'il existe.
5. Sous le contenu du jour, il trouve l'accès à l'ensemble des 24 jours.
6. Il peut revenir à l'accueil ou ouvrir la grille complète.

Résultat attendu : le contenu du jour est accessible sans devoir d'abord chercher la bonne case dans une grille.

## 4. Parcours visiteur — parcourir la grille

1. Le visiteur choisit `Grille`.
2. La vue A affiche les 24 cases.
3. Chaque case présente un état visuel compréhensible :
   - date disponible passée ;
   - date du jour ;
   - date future verrouillée.
4. Le visiteur sélectionne une date disponible.
5. Le contenu s'ouvre dans un tiroir inférieur.
6. Le visiteur peut lire un aperçu, développer le tiroir ou ouvrir la page complète de cette journée.
7. Une date future ne donne pas accès à son contenu.

## 5. Parcours visiteur — consulter une journée indépendante

1. Le visiteur ouvre le lien d'une journée, reçu ou partagé.
2. Le système identifie le numéro de jour dans l'URL.
3. Le système vérifie si cette journée est disponible à la date de consultation.
4. Si elle est disponible, la page C affiche le contenu correspondant.
5. Le visiteur peut naviguer vers une journée précédente ou suivante, dans les limites des règles d'accès.
6. Il peut copier ou partager l'URL de cette journée.

Une URL directe ne doit jamais contourner la règle de disponibilité. Le contrôle doit être appliqué à la récupération du contenu, pas seulement à l'affichage d'une icône de cadenas.

## 6. Parcours visiteur — navigation par gestes

### Sur B et C

- Swipe horizontal vers la gauche : journée suivante.
- Swipe horizontal vers la droite : journée précédente.
- Scroll vertical : lecture et défilement normal de la page.

### Sur A

- Tap sur une case disponible : ouvrir le tiroir.
- Swipe vers le haut sur la poignée du tiroir : développer le tiroir.
- Swipe vers le bas sur la poignée : réduire ou fermer le tiroir.
- Swipe horizontal dans le tiroir : journée précédente ou suivante, si disponible.

Les gestes sont des raccourcis. Les commandes visibles restent disponibles pour les personnes qui ne connaissent pas les gestes ou ne peuvent pas les utiliser.

## 7. Parcours visiteur — partage

1. Le visiteur ouvre une journée dans la vue C.
2. Il choisit `Partager`.
3. Le système propose l'URL canonique de cette journée.
4. Le visiteur copie le lien ou utilise le partage natif du navigateur, si disponible.
5. Le destinataire ouvre le lien.
6. Le système applique les mêmes règles d'accès que lors d'une navigation interne.

Partager une URL future ne doit pas révéler le contenu futur.

## 8. Parcours créateur — préparation des contenus

1. Le créateur indique le sujet qui le passionne.
2. Il précise le public et, si nécessaire, l'âge des destinataires.
3. Il choisit le ton et la durée de lecture souhaitée.
4. L'agent propose deux ou trois thèmes avec un exemple de case pour chacun.
5. Le créateur choisit ou combine les thèmes.
6. L'agent propose un plan progressif de 24 cases.
7. Le créateur ajuste le plan.
8. L'agent rédige les contenus par lots de six.
9. Après chaque lot, le créateur corrige et valide avant le lot suivant.
10. L'agent prépare les contenus dans le format attendu par l'application.
11. L'agent vérifie les 24 identifiants de jour, l'absence de doublons et l'absence de contenu vide.
12. Un point de sauvegarde est créé.

Formats possibles mentionnés dans le kit : anecdote, défi du jour, recette, recommandation, quiz et mini-activité. Les contenus doivent respecter les droits d'auteur, l'âge du public et la vérifiabilité des faits.

## 9. Parcours de publication quotidienne

1. Les contenus des 24 jours sont préparés et validés.
2. Le contenu d'une journée future reste inaccessible au public.
3. À la date prévue, la tâche automatique rend disponible le contenu correspondant.
4. Le visiteur peut alors y accéder depuis B, A ou C.
5. Les jours déjà disponibles suivent la règle de consultation de l'historique qui reste à confirmer.

Le kit prévoit une tâche automatique de publication à la bonne date et précise que la protection des contenus futurs doit être traitée au palier 4.

## 10. États et retours d'interface

Le produit doit distinguer :

- **Disponible** : le contenu peut être consulté.
- **Aujourd'hui** : journée correspondant à la date courante du calendrier.
- **Verrouillé** : contenu non encore disponible.
- **Lu** : état de lecture du visiteur, uniquement si cette fonctionnalité est décidée et implémentée.

Une case disponible n'est pas nécessairement lue. Le signe visuel utilisé pour l'ouverture ne doit donc pas être présenté comme une preuve de lecture.

## 11. Points de décision encore ouverts

- Les visiteurs peuvent-ils relire les journées passées après leur date ?
- Le produit mémorise-t-il l'état « lu » ou ne suit-il que la disponibilité ?
- Quel fuseau horaire définit le changement de jour pour tous les visiteurs ?
- Le créateur dispose-t-il d'une interface d'administration dans le produit, ou les contenus sont-ils préparés directement dans les fichiers du projet ?
