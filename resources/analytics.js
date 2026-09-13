/* ==============================================================
   Englewood Family Outreach — Google Analytics 4 (GA4) loader
   --------------------------------------------------------------
   The GA4 Measurement ID is set on the line below. This single file
   powers analytics for every page of the site; nothing else needs
   editing. Pages load it with the "defer" attribute.
   ============================================================== */
var GA4_MEASUREMENT_ID = 'G-B9TDT8VDZG';

(function () {
  'use strict';

  /* Do nothing until a real Measurement ID has been pasted in. */
  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID.indexOf('XXXX') !== -1) {
    return;
  }

  /* Load Google's gtag.js library. */
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID);

  /* ------------------------------------------------------------
     Conversion events, fired automatically by page path.
     These become the "key events" imported into Google Ads.
     ------------------------------------------------------------ */
  /* Fire conversion events only when the page is the top-level window, not
     inside a form iframe. The thank-you pages break out of the iframe on load,
     so the event fires exactly once, in the top window. */
  if (window.self === window.top) {
    var path = window.location.pathname.toLowerCase();

    if (path.indexOf('/donate/thanks') === 0) {
      window.gtag('event', 'donation_completed', { fund: 'efo' });
    } else if (path.indexOf('/signup/thanks') === 0) {
      window.gtag('event', 'newsletter_signup', { method: 'lgl_form' });
    }
  }
})();
