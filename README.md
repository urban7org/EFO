# englewoodfamily.org

The public website of Englewood Family Outreach, served by GitHub Pages from this repository. It is a plain static site: every page is a hand-written HTML file, there is no build step, and nothing is loaded from a CSS or JavaScript CDN. Edit a file, commit, and the change is live within a minute or two.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `donate/index.html`, `donate/thanks.html` | Giving page (Little Green Light form) and its confirmation page |
| `signup/index.html`, `signup/thanks.html` | Newsletter signup (Little Green Light form) and its confirmation page |
| `englewoodworks/index.html` | Englewood Works after-school club |
| `archer/index.html` | Redirects to archerchristian.org (kept so old links still work) |
| `archer/prayer.pdf`, `archer/prospectus.pdf`, `prayer.pdf` | Downloadable Archer prayer card and prospectus (unlisted, kept for printed QR codes) |
| `latin/index.html` | Lector Latinus, an interactive Latin reader (unlisted) |
| `404.html` | Custom error page (GitHub Pages serves it automatically) |
| `resources/site.css` | The one stylesheet for the whole site: colors, type, layout, light and dark modes |
| `resources/site.js` | Mobile menu toggle, header shadow, footer year |
| `resources/analytics.js` | Google Analytics 4 loader and conversion events (the measurement ID is at the top of the file) |
| `resources/fonts/` | Self-hosted Fraunces and Inter (SIL Open Font License) |
| `resources/img/` | Optimized images: hero, program photos, logos, payment badges, favicons, social-sharing image |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest` | Crawler and AI-readiness files |
| `CNAME` | Binds GitHub Pages to englewoodfamily.org (do not delete) |

## Editing

* **Text**: open the page's HTML file and edit the words between the tags. Every page has the same header and footer; a change to those must be made in each file.
* **Colors and type**: the design tokens are at the top of `resources/site.css` (`--navy-800`, `--blue-500`, `--gold-500`, font families, spacing). Dark mode overrides sit directly below them.
* **Structured data**: each page carries a `<script type="application/ld+json">` block in its `<head>` describing the organization, its programs, and the page. If the address, phone, or programs change, update the JSON-LD on the home page (and the smaller copies on the other pages) as well as the visible text, then re-check with Google's Rich Results Test.
* **Images**: put new photos in `resources/img/`, sized for the web (about 1200 px on the long side, saved as WebP or JPEG). Add `width`, `height`, and a descriptive `alt` on every `<img>`.
* **New pages**: copy an existing page, keep the `<head>` block, change the title, description, canonical URL, and content, and add the new URL to `sitemap.xml` and `llms.txt`.

## Forms and giving

Donations and newsletter signups are Little Green Light forms embedded with LGL's script tag. The form's post-submission redirect is configured inside LGL and points at `/donate/thanks.html` and `/signup/thanks.html`; those confirmation pages fire the GA4 conversion events in `resources/analytics.js`, so keep their addresses unchanged.

## Checking your work

* Validate a page at https://validator.w3.org/nu/
* Check structured data at https://search.google.com/test/rich-results
* Preview a social share at https://www.opengraph.xyz/
