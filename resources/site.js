/* Englewood Family Outreach — small shared behaviors (no dependencies).
   1. Mobile navigation toggle (with Escape key and outside-click to close)
   2. Header shadow once the page has scrolled
   3. Current year in the footer                                              */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) { nav.setAttribute('data-open', ''); } else { nav.removeAttribute('data-open'); }
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setOpen(false); }
    });
    document.addEventListener('click', function (e) {
      if (!nav.hasAttribute('data-open')) { return; }
      if (nav.contains(e.target) || toggle.contains(e.target)) { return; }
      setOpen(false);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setOpen(false); }
    });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var year = document.querySelector('[data-year]');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
