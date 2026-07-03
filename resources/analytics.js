/* ==============================================================
   Englewood Family Outreach — Google Analytics 4 (GA4) loader
   --------------------------------------------------------------
   ONE-TIME SETUP: paste your GA4 Measurement ID on the line
   below, replacing G-XXXXXXXXXX. It looks like G-AB12CD34EF.
   (See GA4-SETUP-GUIDE.md in the repository root.)

   This single file powers analytics for every page of the site,
   including the Archer pages. Nothing else needs editing.
   ============================================================== */
var GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; /* <-- REPLACE THIS, KEEP THE QUOTES */

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
  var path = window.location.pathname.toLowerCase();

  if (path.indexOf('/archer/donate/thanks') === 0) {
    window.gtag('event', 'donation_completed', { fund: 'archer' });
  } else if (path.indexOf('/donate/thanks') === 0) {
    window.gtag('event', 'donation_completed', { fund: 'efo' });
  } else if (path.indexOf('/signup/thanks') === 0) {
    window.gtag('event', 'newsletter_signup', { method: 'lgl_form' });
  }
})();
