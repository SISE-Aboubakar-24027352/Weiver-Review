/* ==========================================================================
   script.js — shared on every page
   1. Bascule du thème (clair/sombre, enregistrée dans localStorage)
   2. Menu latéral (hamburger en dessous de 1024px)
   3. Validation du formulaire de contact (s'exécute uniquement si le formulaire existe)
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'pixel-ledger-theme';
  var root = document.documentElement;

  /* ------------------------------------------------------------------------
     1. Thème
     Le thème initial est défini par un petit script inline dans le <head> (sans flash).
     Ce code gère le bouton de bascule et les changements ultérieurs.
     ------------------------------------------------------------------------ */
  var colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  var themeButton = document.querySelector('[data-theme-toggle]');
  var themeLabel = themeButton ? themeButton.querySelector('[data-theme-label]') : null;

  function readStoredTheme() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Storage unavailable (private mode, blocked): the choice just won't persist. */
    }
  }

  function applyTheme(theme) {
    var normalizedTheme = theme === 'light' || theme === 'dark' ? theme : 'light';
    root.setAttribute('data-theme', normalizedTheme);

    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(normalizedTheme === 'dark'));
    }

    if (themeLabel) {
      themeLabel.textContent = normalizedTheme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
    }

    if (themeButton) {
      themeButton.setAttribute('aria-label', normalizedTheme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    }
  }

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') {
      return attr;
    }
    return colorScheme.matches ? 'dark' : 'light';
  }

  applyTheme(currentTheme());

  if (themeButton) {
    themeButton.addEventListener('click', function (event) {
      event.preventDefault();
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    });
  }

  var crowModal = document.getElementById('crow-master-modal');
  if (crowModal) {
    var openCrowModalButtons = document.querySelectorAll('[data-open-crow-modal]');
    var closeCrowModalButtons = document.querySelectorAll('[data-close-crow-modal]');
    var setCrowModalOpen = function (open) {
      crowModal.classList.toggle('is-visible', open);
      crowModal.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('modal-open', open);
      if (open) {
        var closeButton = crowModal.querySelector('[data-close-crow-modal]');
        if (closeButton) {
          closeButton.focus();
        }
      }
    };

    openCrowModalButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        if (event.target && event.target.closest('a, button')) {
          event.preventDefault();
        }
        setCrowModalOpen(true);
      });

      button.addEventListener('keydown', function (event) {
        if ((event.key === 'Enter' || event.key === ' ') && button.getAttribute('role') === 'button') {
          event.preventDefault();
          setCrowModalOpen(true);
        }
      });
    });

    closeCrowModalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setCrowModalOpen(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && crowModal.classList.contains('is-visible')) {
        setCrowModalOpen(false);
      }
    });
  }

  // Follow the system setting until the visitor makes an explicit choice
  var onSystemChange = function (event) {
    if (!readStoredTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  };
  if (colorScheme.addEventListener) {
    colorScheme.addEventListener('change', onSystemChange);
  } else if (colorScheme.addListener) {
    colorScheme.addListener(onSystemChange);
  }

  /* ------------------------------------------------------------------------
     2. Menu de navigation
     ------------------------------------------------------------------------ */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  var desktop = window.matchMedia('(min-width: 1024px)');

  function isNavOpen() {
    return !!nav && nav.classList.contains('is-open');
  }

  function setNavOpen(open, restoreFocus) {
    if (!nav || !navToggle) {
      return;
    }
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      var firstLink = nav.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    } else if (restoreFocus) {
      navToggle.focus();
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setNavOpen(!isNavOpen(), false);
    });

    // Close when a link is chosen
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setNavOpen(false, false);
      }
    });

    // Close on Escape and give focus back to the hamburger button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isNavOpen()) {
        setNavOpen(false, true);
      }
    });

    // Close on a click outside the drawer
    document.addEventListener('click', function (event) {
      if (isNavOpen() && !nav.contains(event.target) && !navToggle.contains(event.target)) {
        setNavOpen(false, false);
      }
    });

    // Close when keyboard focus leaves the header
    document.addEventListener('focusin', function (event) {
      var header = nav.closest('header');
      if (isNavOpen() && header && !header.contains(event.target)) {
        setNavOpen(false, false);
      }
    });

    // Reset when the viewport becomes desktop-sized
    var onBreakpointChange = function (event) {
      if (event.matches) {
        setNavOpen(false, false);
      }
    };
    if (desktop.addEventListener) {
      desktop.addEventListener('change', onBreakpointChange);
    } else if (desktop.addListener) {
      desktop.addListener(onBreakpointChange);
    }
  }

  /* ------------------------------------------------------------------------
     3. Formulaire de contact (validation uniquement côté client, rien n'est envoyé)
     ------------------------------------------------------------------------ */
  var form = document.querySelector('[data-contact-form]');

  if (form) {
    var status = form.querySelector('[data-form-status]');
    var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Une règle par nom de champ ; chacune renvoie un message d'erreur ou ''
    var rules = {
      name: function (value) {
        var text = value.trim();
        if (!text) {
          return 'Veuillez saisir votre nom.';
        }
        return text.length < 2 ? 'Votre nom doit contenir au moins 2 caractères.' : '';
      },
      email: function (value) {
        var text = value.trim();
        if (!text) {
          return 'Veuillez saisir votre adresse e-mail.';
        }
        return EMAIL_PATTERN.test(text) ? '' : 'Veuillez saisir une adresse e-mail valide, par exemple nom@example.com.';
      },
      topic: function (value) {
        return value ? '' : 'Veuillez choisir un sujet.';
      },
      message: function (value) {
        var text = value.trim();
        if (!text) {
          return 'Veuillez écrire un message.';
        }
        return text.length < 20 ? 'Votre message doit contenir au moins 20 caractères.' : '';
      }
    };

    var fields = Array.prototype.slice.call(form.querySelectorAll('[data-validate]'));

    var showError = function (field, message) {
      var error = document.getElementById(field.id + '-error');
      if (message) {
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.removeAttribute('aria-invalid');
      }
      if (error) {
        error.textContent = message;
        error.hidden = !message;
      }
    };

    var validateField = function (field) {
      var rule = rules[field.name];
      var message = rule ? rule(field.value) : '';
      showError(field, message);
      return !message;
    };

    fields.forEach(function (field) {
      // Valider lors de la sortie d'un champ ; une fois signalé, revérifier pendant la saisie
      field.addEventListener('blur', function () {
        validateField(field);
      });
      var recheck = function () {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(field);
        }
      };
      field.addEventListener('input', recheck);
      field.addEventListener('change', recheck);
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (status) {
        status.textContent = '';
      }

      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) {
          firstInvalid = field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // Démo uniquement : aucune requête n'est effectuée. Afficher une confirmation et réinitialiser le formulaire.
      var firstName = form.elements.name.value.trim().split(/\s+/)[0];
      form.reset();
      fields.forEach(function (field) {
        showError(field, '');
      });
      if (status) {
        status.textContent = 'Merci, ' + firstName + ' ! Votre message a été validé. ' +
          'Il s\'agit d\'une démo statique, donc rien n\'a été envoyé.';
      }
    });
  }
})();
