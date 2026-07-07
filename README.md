# Lesley Hanson — Author Site

A multi-page static site for *Sorrowroot* (The Windsown Trilogy, Book One).

## Files

```
index.html         Home
sorrowroot.html    Book page — synopsis, excerpt, buy links, trilogy roadmap
about.html         About the author
blog.html          Blog (3 sample posts)
contact.html       Contact form + direct email
css/styles.css     All design tokens, layout, and components
js/main.js         Mobile nav, scroll-reveal animation, form handling
images/bloom.svg   Sorrowroot flower favicon
images/meadow.svg  Twilight meadow illustration (rabbit, blooms, fireflies)
images/author.jpg  Author photo (cropped from the mood-board portrait)
images/cover.jpg   Book cover (optimized from the original in ~/Downloads)
```

Open `index.html` in a browser to preview. No build step — just static files.

## Before you launch, replace these placeholders

- **Author photo** — the portrait from `mood_board/Untitled.png` was cropped out of its window screenshot and used as `images/author.jpg` on the home and About pages. If that portrait wasn't meant to be your author photo, just replace `images/author.jpg` with the right image (same filename, roughly 4:5 portrait crop).
- **Book cover** — done: `images/cover.jpg` appears on the home and book-page heroes. If the final print cover changes, just replace that file (roughly 2:3 portrait).
- **Newsletter signup** — the form in the footer (every page) and on the book page currently just shows a "you're on the list" message locally; it isn't connected to a real mailing list yet. Wire it up to Mailchimp, ConvertKit, Substack, or similar, and update the `<form>` tag's `action`/`method` accordingly. Once it's connected, you can remove the `data-placeholder-form` attribute and the JS handler in `main.js` that fakes the success message.
- **Contact form** — same situation on `contact.html`. Easiest path: a service like Formspree (no backend required). Otherwise point it at your own endpoint.
- **Buy links** — the "Coming Soon" buttons on `sorrowroot.html` (Amazon, Barnes & Noble, Bookshop.org) are inert placeholders. Once the book is live, change them from `<span class="btn btn-disabled">` to real `<a href="...">` links.
- **Social links** — Instagram / TikTok / Goodreads links in every footer point to `#`. Update with real URLs.
- **Blog posts** — the three posts on `blog.html` are sample content written to demonstrate tone and structure. Replace with real posts, or duplicate the `<article class="post-card">` block for new ones.
- **Bio copy** — the "About" page bio is placeholder text. Replace with your own.

Note: the manuscript's title page lists a home address and phone number. Those were intentionally left off this site — only the author email was used for the public contact info. Add a mailing address only if you're comfortable making it public (e.g. a P.O. box).

## Design notes

- **Palette**: Puffin in Bloom-inspired — warm cream paper with folk-art florals in Cinderella blue (Sorrowroot Blue, Pale Periwinkle), Rifle-style coral/rose, foliage greens, navy Midnight, and antique gold. All defined as CSS variables at the top of `css/styles.css` if you want to retune anything.
- **Corner bouquets**: `images/floral-corner.svg` is a hand-drawn folk bouquet (layered sorrowroot bloom, coral rose, blush and periwinkle wildflowers, leafy sprigs, berries, gold dots) that frames the top corners of every page's hero, storybook-cover style.
- **Stardust**: the dark twilight bands (newsletter, "Where to Find It", the book-cover placeholder) carry a twinkling star effect inspired by the sparkling tulle on the mood board. It's pure CSS (`twinkle` keyframes) and respects `prefers-reduced-motion`.
- **Meadow**: `images/meadow.svg` is a hand-drawn twilight meadow — sorrowroot blooms, coral wildflowers, berry sprigs, grasses, a rabbit, swallows, butterflies, and fireflies — that sits above the newsletter band on every page. Its dark ground is the same midnight blue the band opens with, so the meadow flows into the starry night.
- **The Maiden & The Warrior**: the home page has a two-panel storybook section for Livia and Varick, framed with gold keylines.
- **Type**: Cormorant Garamond (display/headlines), EB Garamond (body), Jost (nav/labels), Parisienne (hand-lettered script accents, e.g. the "&" between Livia and Varick), loaded from Google Fonts.
- **Signature motif**: a hand-drawn SVG flower (five petals shaped like open book pages) used as the site mark, favicon, hero art, drifting petals, and section dividers — a nod to the sorrowroot flower in the book itself.

## Hosting

Any static host works as-is: GitHub Pages, Netlify, Vercel, or even just uploading the folder to traditional web hosting. No server-side code is required unless you connect the forms to a backend.
