/* ==========================================================================
   i18n.js - Internationalisation centralisee de Weiver Review
   ========================================================================== */
(function (window, document) {
  'use strict';

  var LANGUAGE_KEY = 'weiver-review-language';
  var DEFAULT_LANGUAGE = 'fr';
  var SUPPORTED_LANGUAGES = ['fr', 'en'];

  var translations = {
    fr: {
      'nav.home': 'Accueil',
      'nav.reviews': 'Avis',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu principal',
      'theme.light': 'Passer en mode clair',
      'theme.dark': 'Passer en mode sombre',
      'theme.toggle': 'Basculer le thème',
      'language.label': 'Langue',
      'back.top': 'Retour en haut',
      'language.fr': 'Français',
      'language.en': 'English',
      'form.name.required': 'Veuillez saisir votre nom.',
      'form.name.short': 'Votre nom doit contenir au moins 2 caractères.',
      'form.email.required': 'Veuillez saisir votre adresse e-mail.',
      'form.email.invalid': 'Veuillez saisir une adresse e-mail valide, par exemple nom@example.com.',
      'form.topic.required': 'Veuillez choisir un sujet.',
      'form.message.required': 'Veuillez écrire un message.',
      'form.message.short': 'Votre message doit contenir au moins 20 caractères.',
      'form.honeypot': 'Votre demande n’a pas pu être préparée.',
      'form.success': 'Merci, {name} ! Votre logiciel de messagerie va s’ouvrir. Vérifiez puis envoyez le message.',
      'topic.review': 'Demande d’avis',
      'topic.feedback': 'Commentaire',
      'topic.collaboration': 'Collaboration',
      'topic.other': 'Autre'
    },
    en: {
      'nav.home': 'Home',
      'nav.reviews': 'Reviews',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.menu': 'Main menu',
      'theme.light': 'Switch to light mode',
      'theme.dark': 'Switch to dark mode',
      'theme.toggle': 'Toggle theme',
      'language.label': 'Language',
      'back.top': 'Back to top',
      'language.fr': 'Français',
      'language.en': 'English',
      'form.name.required': 'Please enter your name.',
      'form.name.short': 'Your name must contain at least 2 characters.',
      'form.email.required': 'Please enter your email address.',
      'form.email.invalid': 'Please enter a valid email address, for example name@example.com.',
      'form.topic.required': 'Please choose a subject.',
      'form.message.required': 'Please write a message.',
      'form.message.short': 'Your message must contain at least 20 characters.',
      'form.honeypot': 'Your request could not be prepared.',
      'form.success': 'Thank you, {name}! Your email application will open. Review and send the message.',
      'topic.review': 'Review request',
      'topic.feedback': 'Feedback',
      'topic.collaboration': 'Collaboration',
      'topic.other': 'Other'
    }
  };

  var textTranslations = {
    'Avis & aperçus · Sans spoiler': 'Reviews & previews · Spoiler-free',
    'Avis honnêtes sur des jeux vidéo, avant et après leur sortie': 'Honest reviews of video games, before and after release',
    'Weiver Review propose des avis et des aperçus de jeux vidéo : notes claires, points forts, points à surveiller et zéro spoiler.': 'Weiver Review offers video game reviews and previews: clear scores, strengths, watch-outs and no spoilers.',
    "Lire les avis": 'Read reviews',
    "Suggérer un jeu": 'Suggest a game',
    'Choix du critique': "Editor's pick",
    "Lire l'avis": 'Read review',
    'Avis en vedette': 'Featured reviews',
    'Tous les avis': 'All reviews',
    "Lire l’aperçu": 'Read preview',
    "Un jeu qu'on devrait essayer ensuite ?": 'Which game should we try next?',
    'Dites-moi ce qui est dans votre backlog ou quel jeu vous intrigue. Chaque suggestion est lue, même les plus étranges.': 'Tell me what is in your backlog or which game intrigues you. Every suggestion is read, even the unusual ones.',
    'de Crow Master': 'of Crow Master',
    'de Anni 2810': 'of Anni 2810',
    'Aucun jeu n’a été testé pour cette démonstration.': 'No game was tested for this demonstration.',
    'Me contacter': 'Contact me',
    'Suivez le fil': 'Follow us',
    'Sites utiles': 'Useful sites',
    'Avis jeux PC': 'PC game reviews',
    'Jeux indépendants': 'Independent games',
    'Meilleurs jeux 2026': 'Best games of 2026',
    'Actualités gaming': 'Gaming news',
    'Mentions légales': 'Legal notice',
    'Politique de confidentialité': 'Privacy policy',
    'Confidentialité': 'Privacy',
    'À propos': 'About',
    'Contact': 'Contact',
    'Avis': 'Reviews',
    'Accueil': 'Home',
    'Cette page n’existe pas': 'This page could not be found',
    'Erreur 404': '404 Error',
    'Le lien est peut-être obsolète ou contient une erreur. Retrouvez les contenus disponibles depuis l’accueil ou la liste des avis.': 'The link may be outdated or contain an error. Find available content from the home page or review list.',
    'Retour à l’accueil': 'Back to home',
    'Voir les avis': 'View reviews',
    'Avis de jeux': 'Game reviews',
    'Avis de jeux PC': 'PC game reviews',
    'Avis et aperçus de jeux vidéo, avec leurs points forts, leurs points à surveiller et un verdict clair.': 'Video game reviews and previews, with strengths, watch-outs and a clear verdict.',
    'Comment lire cette page': 'How to read this page',
    'Test': 'Review',
    'Aperçu': 'Preview',
    'Des questions, une suggestion de jeu ou une idée de collaboration ? Le formulaire prépare un e-mail dans votre logiciel de messagerie : l’envoi reste sous votre contrôle.': 'Questions, a game suggestion or a collaboration idea? The form prepares an email in your email application: you remain in control of sending it.',
    'Des questions, une suggestion de jeu ou une idée de collaboration ? Le formulaire prépare un e-mail dans votre logiciel de messagerie : l\'envoi reste sous votre contrôle.': 'Questions, a game suggestion or a collaboration idea? The form prepares an email in your email application: you remain in control of sending it.',
    'Nom': 'Name',
    'E-mail': 'Email',
    'Sujet': 'Subject',
    'Choisir un sujet': 'Choose a subject',
    'Autre': 'Other',
    'Demande d’avis': 'Review request',
    'Demande d\'avis': 'Review request',
    'Commentaire': 'Feedback',
    'Message': 'Message',
    'Envoyer le message': 'Send message',
    'Autres moyens de me joindre': 'Other ways to reach me',
    'Délai de réponse': 'Response time',
    'Habituellement dans les trois jours ouvrables.': 'Usually within three working days.',
    'Réseaux sociaux': 'Social networks',
    'Trouvez les liens dans le footer ci-dessous.': 'Find the links in the footer below.',
    'À propos de moi': 'About me',
    'Rencontrez la personne derrière les notes et la manière dont chaque verdict est décidé.': 'Meet the person behind the scores and learn how every verdict is decided.',
    'Salut, je suis John': "Hi, I'm John",
    'Comment je note': 'How I score',
    'Exceptionnel. Un nouveau repère pour son genre.': 'Exceptional. A new benchmark for its genre.',
    'Excellent. Une belle conception avec quelques défauts mineurs.': 'Excellent. Strong design with a few minor flaws.',
    'Correct. Fun par endroits, mais imparfait.': 'Decent. Fun in places, but imperfect.',
    'À éviter sauf si un ami insiste.': 'Avoid unless a friend insists.',
    'Ce à quoi vous pouvez vous attendre': 'What you can expect',
    'Une page démonstrative regroupant des jeux PC fictifs pour tester l’architecture éditoriale du site.': 'A demonstration page gathering fictitious PC games to test the site’s editorial architecture.',
    'Contenu de démonstration': 'Demonstration content',
    'Les jeux, notes et appréciations ci-dessous sont entièrement fictifs. Ils ne représentent pas des expériences réelles ni des performances vérifiées.': 'The games, scores and opinions below are entirely fictitious. They do not represent real experiences or verified performance.',
    'Une sélection démonstrative mettant en avant des propositions originales imaginaires.': 'A demonstration selection highlighting imaginative, original concepts.',
    'Important': 'Important',
    'Cette page est une maquette éditoriale. Studios, jeux, sorties et descriptions sont fictifs et ne doivent pas être utilisés comme informations factuelles.': 'This page is an editorial mockup. Studios, games, releases and descriptions are fictitious and must not be treated as factual information.',
    'Classement fictif utilisé pour développer une sélection éditoriale vérifiable dans sa présentation.': 'A fictitious ranking used to develop an editorial selection whose presentation can be verified.',
    'Déclaration éditoriale': 'Editorial declaration',
    'Tous les titres, studios et notes sont fictifs. Ce classement ne constitue pas un palmarès réel et aucun jeu n’a été testé pour cette démonstration.': 'All titles, studios and scores are fictitious. This ranking is not a real leaderboard and no game was tested for this demonstration.',
    'Des actualités fictives illustrent la structure future d’un fil de publication gaming.': 'Fictitious news illustrates the future structure of a gaming publication feed.',
    'Contenu démonstratif': 'Demonstration content',
    'Les annonces, dates, partenariats et chiffres suivants sont inventés. Ils ne constituent pas des informations gaming réelles.': 'The announcements, dates, partnerships and figures below are invented. They do not constitute real gaming news.'
    ,'Avis & aperçus de jeux annoncés : notes, points forts et points à surveiller, avec une distinction claire entre test et aperçu.': 'Reviews and previews of announced games: scores, strengths and watch-outs, with a clear distinction between reviews and previews.',
    'Avis honnêtes sur des jeux vidéo, avant et après leur sortie': 'Honest reviews of video games, before and after release',
    'Avis et aperçus de jeux PC : tests réellement joués, jeux indépendants annoncés, points forts, points faibles et verdicts clairs.': 'PC game reviews and previews: games actually played, announced independent games, strengths, weaknesses and clear verdicts.',
    'Aperçu, jeu non testé': 'Preview, game not tested',
    'Navigation orbitale, exploration d’un artefact et combats tactiques : un ambitieux Tactical-RPG spatial.': 'Orbital navigation, artifact exploration and tactical combat: an ambitious space tactical RPG.',
    'Un voyage aérien élégant, porté par un vol fluide et un monde ouvert rempli de secrets.': 'An elegant aerial journey driven by fluid flight and an open world full of secrets.',
    'Action aventure': 'Action-adventure',
    'PC · Console': 'PC · Console',
    'PC · Steam Deck': 'PC · Steam Deck',
    'Accès anticipé prévu fin 2026': 'Early access planned for late 2026',
    'Tactical-RPG · Science-fiction': 'Tactical RPG · Science fiction',
    'Découvrir': 'Discover',
    'Jeu de la semaine': 'Game of the week',
    'Atouts': 'Strengths',
    'Inconvénients': 'Weaknesses',
    'Atouts annoncés': 'Announced strengths',
    'Points à surveiller': 'Watch-outs',
    'Fermer': 'Close',
    'Voir la fiche du jeu': 'View the game page',
    'Voir la fiche du studio': 'View the studio page',
    'John Weiver': 'John Weiver',
    'Rédacteur en chef et fondateur': 'Editor-in-chief and founder',
    'Genres préférés': 'Favorite genres',
    'Stratégie, simulations cosy, furtif': 'Strategy, cozy simulations, stealth',
    'Joue depuis': 'Gaming since',
    'Plus de 25 ans': 'More than 25 years',
    'Style de critique': 'Review style',
    'Sans spoilers et direct': 'Direct and spoiler-free',
    'Des opinions sans spoilers majeurs': 'Opinions without major spoilers',
    'Des opinions sans spoilers majeurs et des notes non achetées.': 'Opinions without major spoilers and scores that are not for sale.',
    'Des opinions sans spoilers majeurs et pas de notes sponsorisées.': 'Opinions without major spoilers and no sponsored scores.',
    'La page de contact': 'the contact page',
    'Vous voulez parler jeux ? Rendez-vous sur la': 'Want to talk games? Visit',
    '9–10': '9–10',
    '7–8,9': '7–8.9',
    '5–6,9': '5–6.9',
    'Moins de 5': 'Below 5',
    'Méthodologie': 'Methodology',
    'Hébergeur': 'Hosting provider',
    'Adresse': 'Address',
    'Propriété intellectuelle': 'Intellectual property',
    'Responsable du traitement': 'Data controller',
    'Vos droits': 'Your rights',
    'Évolution de cette politique': 'Changes to this policy',
    'Dernière mise à jour': 'Last updated'
    ,'© 2026 Weiver Review. Les aperçus avant sortie reposent sur les informations communiquées par les studios et ne remplacent pas un test du jeu.': '© 2026 Weiver Review. Pre-release previews rely on information shared by studios and do not replace a game review.',
    'Avis et aperçus sans spoilers de jeux vidéo. Une vitrine front-end statique construite avec HTML, CSS et JavaScript.': 'Spoiler-free game reviews and previews. A static front-end showcase built with HTML, CSS and JavaScript.',
    'Avis et aperçus sans spoilers de jeux vidéo. Une vitrine front-end construite avec HTML, CSS et JavaScript purs.': 'Spoiler-free game reviews and previews. A static front-end showcase built with plain HTML, CSS and JavaScript.',
    'Explication des notes de jeux': 'Explanation of game scores',
    'Guide du jeu accessible': 'Accessible gaming guide',
    'Annuaire des jeux indépendants': 'Independent game directory',
    'Au moins 20 caractères.': 'At least 20 characters.',
    'Entre 20 et 2 000 caractères. Évitez les informations confidentielles.': 'Between 20 and 2,000 characters. Avoid confidential information.',
    'Fortement recommandé pour les joueurs qui cherchent une expérience cohérente.': 'Highly recommended for players looking for a coherent experience.',
    'Un aperçu ne constitue pas un test du jeu.': 'A preview does not constitute a game review.',
    'Réseaux sociaux': 'Social networks'
  };

  var titleTranslations = {
    '/': 'Weiver Review: PC game reviews and spoiler-free previews',
    '/index.html': 'Weiver Review: PC game reviews and spoiler-free previews',
    '/review.html': 'Game reviews and tests: PC reviews and previews | Weiver Review',
    '/avis-jeux-pc.html': 'PC Game Reviews | Weiver Review',
    '/jeux-independants.html': 'Independent Games | Weiver Review',
    '/meilleurs-jeux-2026.html': 'Best Games of 2026: fictitious selection | Weiver Review',
    '/actualites-gaming.html': 'Gaming News | Weiver Review',
    '/contact.html': 'Contact | Weiver Review',
    '/aboutme.html': 'About | Weiver Review',
    '/mentions.html': 'Legal Notice | Weiver Review',
    '/privacy.html': 'Privacy Policy | Weiver Review',
    '/404.html': 'Page Not Found | Weiver Review'
  };

  var currentLanguage = DEFAULT_LANGUAGE;

  function getStoredLanguage() {
    try {
      var stored = window.localStorage.getItem(LANGUAGE_KEY);
      if (SUPPORTED_LANGUAGES.indexOf(stored) !== -1) return stored;
    } catch (error) {}
    return DEFAULT_LANGUAGE;
  }

  function interpolate(message, values) {
    return String(message).replace(/\{(\w+)\}/g, function (_, key) {
      return values && values[key] !== undefined ? values[key] : '{' + key + '}';
    });
  }

  function t(key, values) {
    var value = translations[currentLanguage] && translations[currentLanguage][key];
    if (typeof value !== 'string') {
      if (typeof console !== 'undefined') console.warn('Missing i18n key:', key);
      value = translations[DEFAULT_LANGUAGE][key] || key;
    }
    return interpolate(value, values);
  }

  function translateTextNodes(root) {
    if (currentLanguage === 'fr') return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        var tag = node.parentElement.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      var trimmed = node.nodeValue.trim();
      if (textTranslations[trimmed]) {
        node.nodeValue = node.nodeValue.replace(trimmed, textTranslations[trimmed]);
      }
    }
  }

  function restoreOriginalText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        var tag = node.parentElement.tagName;
        return tag === 'SCRIPT' || tag === 'STYLE' ? NodeFilter.FILTER_REJECT : (node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
      }
    });
    var node;
    var reversed = {};
    Object.keys(textTranslations).forEach(function (source) {
      var translated = textTranslations[source];
      if (!reversed[translated]) reversed[translated] = source;
    });
    while ((node = walker.nextNode())) {
      var trimmed = node.nodeValue.trim();
      if (reversed[trimmed]) {
        node.nodeValue = node.nodeValue.replace(trimmed, reversed[trimmed]);
      }
    }
  }

  function ensureLanguageSelector() {
    var list = document.querySelector('.site-nav__list');
    if (!list || document.querySelector('[data-language-select]')) return;
    var tools = list.querySelector('.site-nav__tools');
    var item = document.createElement('li');
    item.className = 'site-nav__language';
    item.innerHTML =
      '<button class="language-toggle" type="button" data-language-select aria-label="' + t('language.label') + '">' +
      '<svg class="language-toggle__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<circle cx="12" cy="12" r="9"/>' +
      '<path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3z"/>' +
      '</svg>' +
      '<span class="language-toggle__code" data-language-code>' + currentLanguage.toUpperCase() + '</span>' +
      '<span class="language-toggle__label" data-i18n-label="language.label">' + t('language.label') + '</span>' +
      '</button>';
    if (tools) list.insertBefore(item, tools);
    else list.appendChild(item);

    item.querySelector('[data-language-select]').addEventListener('click', function () {
      setLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
    });
  }

  function ensureBackToTop() {
    if (!document.body || document.querySelector('[data-back-to-top]')) return;
    if (!document.body.id) document.body.id = 'top';
    var footer = document.querySelector('.site-footer');
    if (!footer) return;
    var link = document.createElement('a');
    link.className = 'site-footer__top';
    link.href = '#top';
    link.setAttribute('data-back-to-top', '');
    link.setAttribute('aria-label', t('back.top'));
    link.setAttribute('title', t('back.top'));
    link.innerHTML = '<svg class="site-footer__top-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 19V5M5 12l7-7 7 7"/></svg><span class="visually-hidden" data-back-to-top-label>' + t('back.top') + '</span>';
    footer.appendChild(link);
  }

  function applyLanguage(language, announce) {
    currentLanguage = language === 'en' ? 'en' : 'fr';
    document.documentElement.lang = currentLanguage;
    document.documentElement.setAttribute('data-language', currentLanguage);
    var pathname = window.location.pathname || '/';
    var titleKey = pathname.endsWith('/') ? '/' : pathname;
    if (currentLanguage === 'en' && titleTranslations[titleKey]) {
      document.title = titleTranslations[titleKey];
    } else if (currentLanguage === 'fr') {
      var originalTitle = document.documentElement.getAttribute('data-original-title');
      if (!originalTitle) {
        originalTitle = document.title;
        document.documentElement.setAttribute('data-original-title', originalTitle);
      } else {
        document.title = originalTitle;
      }
    }
    var metaLanguage = document.querySelector('meta[property="og:locale"]');
    if (metaLanguage) metaLanguage.setAttribute('content', currentLanguage === 'en' ? 'en_US' : 'fr_FR');

    if (currentLanguage === 'fr') restoreOriginalText(document.body);
    else translateTextNodes(document.body);

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = t(element.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
      element.setAttribute('placeholder', t(element.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      element.setAttribute('aria-label', t(element.getAttribute('data-i18n-aria')));
    });

    var navItems = document.querySelectorAll('.site-nav__link');
    navItems.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '/') link.textContent = t('nav.home');
      else if (href === 'review.html' || href.indexOf('avis-jeux-pc') === 0) link.textContent = t('nav.reviews');
      else if (href === 'aboutme.html') link.textContent = t('nav.about');
      else if (href === 'contact.html') link.textContent = t('nav.contact');
    });

    var label = document.querySelector('[data-i18n-label="language.label"]');
    if (label) label.textContent = t('language.label');
    var button = document.querySelector('[data-language-select]');
    if (button) {
      button.setAttribute('aria-label', t('language.label') + ': ' + (currentLanguage === 'fr' ? t('language.fr') : t('language.en')));
      button.setAttribute('title', t('language.label') + ': ' + (currentLanguage === 'fr' ? t('language.fr') : t('language.en')));
      button.setAttribute('aria-pressed', String(currentLanguage === 'en'));
      var code = button.querySelector('[data-language-code]');
      if (code) code.textContent = currentLanguage.toUpperCase();
    }

    var navToggle = document.querySelector('[data-nav-toggle]');
    if (navToggle) navToggle.setAttribute('aria-label', t('nav.menu'));

    var themeToggle = document.querySelector('[data-theme-toggle]');
    var themeLabel = document.querySelector('[data-theme-label]');
    if (themeLabel) themeLabel.textContent = t('theme.toggle');
    if (themeToggle) themeToggle.setAttribute('aria-label', t('theme.toggle'));
    var backToTop = document.querySelector('[data-back-to-top]');
    if (backToTop) {
      backToTop.setAttribute('aria-label', t('back.top'));
      backToTop.setAttribute('title', t('back.top'));
      var backToTopLabel = backToTop.querySelector('[data-back-to-top-label]');
      if (backToTopLabel) backToTopLabel.textContent = t('back.top');
    }

    document.dispatchEvent(new CustomEvent('weiver:languagechange', {
      detail: { language: currentLanguage }
    }));
  }

  function setLanguage(language) {
    language = SUPPORTED_LANGUAGES.indexOf(language) !== -1 ? language : DEFAULT_LANGUAGE;
    try { window.localStorage.setItem(LANGUAGE_KEY, language); } catch (error) {}
    applyLanguage(language, true);
  }

  function initialize() {
    currentLanguage = getStoredLanguage();
    if (!document.documentElement.getAttribute('data-original-title')) {
      document.documentElement.setAttribute('data-original-title', document.title);
    }
    ensureLanguageSelector();
    ensureBackToTop();
    applyLanguage(currentLanguage, false);
  }

  window.WeiverI18n = {
    getLanguage: function () { return currentLanguage; },
    setLanguage: setLanguage,
    t: t,
    supportedLanguages: SUPPORTED_LANGUAGES.slice()
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})(window, document);
