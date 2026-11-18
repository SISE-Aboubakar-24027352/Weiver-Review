# Weiver Review

Weiver Review est un site vitrine éditorial francophone consacré aux jeux vidéo. Il rassemble des avis sans spoilers et des aperçus de jeux annoncés, avec des notes, les points forts et les éléments qui restent à surveiller. Les aperçus sont explicitement distingués des tests de jeux effectivement joués.

Site : [weiver-review.fr](https://weiver-review.fr/)

## Contenu du site

- **Accueil** : présentation du site et sélection d’avis et d’aperçus.
- **Avis** : fiches de jeux et fenêtres de détails.
- **Rubriques** : pages démonstratives pour les avis PC, les jeux indépendants, les meilleurs jeux 2026 et les actualités gaming.
- **À propos** : présentation de l’auteur et échelle de notation sur 10.
- **Contact** : formulaire validé qui prépare un e-mail dans la messagerie de l’utilisateur.
- **Mentions légales** et **Politique de confidentialité** : informations éditoriales et sur les données.

Les contenus de démonstration comprennent notamment *Crow Master* (avis) et *Anni 2810* (aperçu basé sur les informations du studio, jeu non testé).

## Stack technique

- **HTML5** : pages statiques et contenu.
- **CSS3** : mise en page responsive, composants communs et thèmes clair/sombre.
- **JavaScript natif** : menu mobile, changement de thème, fenêtres de détails, validation du formulaire et animations légères.
- **SVG** : logo et illustrations intégrées.

Aucun framework, gestionnaire de paquets, serveur applicatif, base de données ou étape de compilation n’est requis. Les feuilles de style et scripts sont partagés entre les pages via le dossier `res/`.

## Architecture

```text
.
├── index.html          # Accueil
├── review.html         # Avis et aperçus des jeux
├── avis-jeux-pc.html   # Rubrique dédiée aux avis PC
├── jeux-independants.html
│                       # Sélection démonstrative de jeux indépendants
├── meilleurs-jeux-2026.html
│                       # Classement démonstratif de 2026
├── actualites-gaming.html
│                       # Fil d’actualités démonstratif
├── aboutme.html        # Présentation et méthode de notation
├── contact.html        # Formulaire de démonstration et contact
├── mentions.html       # Mentions légales
├── privacy.html        # Politique de confidentialité
├── 404.html            # Page d’erreur personnalisée
├── res/
│   ├── css/
│   │   ├── global.css  # Variables, thèmes, composants partagés
│   │   └── style.css   # Mises en page et styles du site
│   ├── js/
│   │   ├── script.js   # Comportements communs aux pages
│   │   ├── index.js    # Effets propres à l’accueil
│   │   └── i18n.js     # Langues, traductions et sélecteur FR/EN
│   ├── logo/
│   │   └── logo.svg
│   ├── images/         # Emplacement des images locales
│   └── videos/         # Emplacement des vidéos locales
├── .htaccess           # Règles pour les hébergements compatibles Apache
├── CNAME               # Nom de domaine personnalisé
├── robots.txt          # Directives d’exploration
└── sitemap.xml         # URLs du site destinées aux moteurs de recherche
```

Chaque page HTML est autonome et charge les feuilles de style communes ainsi que les scripts globaux. L’architecture reste entièrement statique : les textes, fiches de jeux et contenus éditoriaux sont écrits directement dans les pages HTML. Il n’y a ni catalogue de jeux séparé, ni base de données, ni API applicative, ni système de gestion de contenu.

Les responsabilités sont séparées de la manière suivante :

- `res/css/global.css` définit les variables, les thèmes, les grilles et les composants communs.
- `res/css/style.css` contient les mises en page et adaptations propres aux différentes pages.
- `res/js/script.js` gère les interactions communes : thème, navigation mobile, modales et formulaire de contact.
- `res/js/index.js` contient les effets spécifiques à la page d’accueil.
- `res/js/i18n.js` centralise les traductions françaises/anglaises, le changement de langue et la persistance de la préférence.
- `.htaccess`, `CNAME`, `robots.txt` et `sitemap.xml` assurent respectivement les règles de serveur, le domaine personnalisé et l’indexation.

## Internationalisation

- **Français par défaut** : aucune préférence enregistrée ouvre le site en français.
- **Sélecteur global** : un sélecteur `FR / EN` est injecté dans la navigation commune.
- **Changement instantané** : aucun rechargement complet n’est nécessaire pour passer d’une langue à l’autre.
- **Persistance** : la préférence est enregistrée dans `localStorage` sous la clé `weiver-review-language`.
- **Traductions centralisées** : les clés, les libellés accessibles et les mappings de contenu sont regroupés dans `res/js/i18n.js`.
- **Extensibilité** : ajouter une langue revient à l’ajouter à `SUPPORTED_LANGUAGES` et à ses traductions centrales.

## Lancer le site en local

Le site peut être servi avec n’importe quel serveur de fichiers statiques. Avec Python 3, depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Ouvrez ensuite [http://localhost:8000](http://localhost:8000). Il est également possible d’ouvrir `index.html` directement dans un navigateur, mais un serveur local reproduit mieux le fonctionnement d’un hébergement web.

## Modifier le contenu

- Pour modifier l’accueil, mettez à jour `index.html`.
- Pour ajouter ou modifier une fiche d’avis ou d’aperçu, mettez à jour `review.html`. Les sélections visibles sur l’accueil sont également définies dans `index.html`.
- Pour ajuster les couleurs, les thèmes et les composants partagés, modifiez `res/css/global.css`; pour les styles de pages, utilisez `res/css/style.css`.
- Les comportements communs sont dans `res/js/script.js`; les animations de l’accueil sont dans `res/js/index.js`.
- Les visuels de jeux référencés actuellement sont hébergés sur des sites externes. Pour utiliser des fichiers locaux, placez-les dans `res/images/` et adaptez les attributs `src` des pages HTML.

## Fonctionnalités et limites

- Le thème clair ou sombre suit le réglage du système et peut être changé manuellement. Le choix est conservé dans `localStorage` sous la clé `pixel-ledger-theme`.
- Le formulaire de contact valide les champs dans le navigateur, puis ouvre un lien `mailto:` prérempli. **Le site ne reçoit ni ne stocke aucun message** ; l’envoi reste sous le contrôle de l’utilisateur dans son logiciel de messagerie.
- Des effets d’animation sont désactivés lorsque le navigateur indique une préférence pour la réduction des animations.
- Certaines images de jeux sont chargées depuis `flexarion-jeu.fr` et `flexarion-studio.fr`; leur affichage dépend donc de ces services externes.
- Le site contient des métadonnées SEO, des données structurées, un fichier sitemap et un fichier `robots.txt`.
- `.htaccess` contient des règles de redirection HTTPS, compression et cache destinées aux serveurs Apache qui les prennent en charge. Ces règles ne s’appliquent pas nécessairement à d’autres hébergeurs.
- Les mentions légales comportent encore des champs à renseigner pour l’adresse de l’éditeur et les coordonnées de l’hébergeur.

## Déploiement

Il suffit de publier les fichiers statiques et leurs dossiers en conservant leur structure et leurs chemins relatifs. Le fichier `CNAME` déclare le domaine personnalisé `weiver-review.fr`; la configuration DNS et celle de l’hébergeur doivent également pointer vers le site. Aucun pipeline de build n’est nécessaire.
