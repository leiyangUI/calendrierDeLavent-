# Calendrier de l'Avent — Documentation produit

## Documents

| Document | Périmètre |
| --- | --- |
| [User Workflow](./user-workflow.md) | Parcours des visiteurs et parcours de création / publication du calendrier |
| [System Architecture](./system-architecture.md) | Architecture logique, composants, données, publication et contrôle d'accès |
| [Interaction & Navigation](./interaction-navigation.md) | Vues A/B/C, navigation, gestes et états d'interface |
| [Product Decisions](./product-decisions.md) | Décisions confirmées, hypothèses de prototype et points restant à trancher |

## Statut

Ces documents décrivent la cible fonctionnelle et une proposition d'architecture pour le projet. Ils ne signifient pas que tous les composants sont déjà développés.

Le prototype HTML Low-fi V1 est une démonstration front-end autonome. Il ne constitue pas encore une architecture de production : il n'a ni base de données, ni authentification d'administration, ni publication automatisée réelle, ni protection serveur des contenus futurs.

## Principes structurants

- B est la vue d'entrée par défaut.
- A, B et C sont trois modes d'accès au même calendrier, et non trois produits distincts.
- Les 24 cases correspondent aux jours du 1er au 24 décembre.
- Les vues partagent la même source de contenu et les mêmes règles d'accès.
- Une case future ne doit pas pouvoir être lue avant sa date, y compris via son URL directe.
- La solution technique doit rester aussi simple que possible tout en respectant les règles du palier en cours.
