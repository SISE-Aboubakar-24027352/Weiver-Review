/* ==========================================================================
   index.js — home page only
   1. Hero: the background glow follows the pointer
   2. Featured section: cards fade in as they scroll into view
   Both effects are skipped when the visitor prefers reduced motion.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    return;
  }

  /* 1. Hero glow */
  var hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('pointermove', function (event) {
      var box = hero.getBoundingClientRect();
      var x = ((event.clientX - box.left) / box.width) * 100;
      var y = ((event.clientY - box.top) / box.height) * 100;
      hero.style.setProperty('--hero-x', x.toFixed(1) + '%');
      hero.style.setProperty('--hero-y', y.toFixed(1) + '%');
    });
  }

  /* 2. Reveal featured cards.
     The .reveal class is added here, so without JavaScript the cards stay visible. */
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length || !('IntersectionObserver' in window)) {
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (item, index) {
    item.classList.add('reveal');
    item.style.transitionDelay = (index * 80) + 'ms';
    observer.observe(item);
  });
})();
