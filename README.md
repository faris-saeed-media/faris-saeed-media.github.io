# Faris Saeed Portfolio

A responsive, interactive portfolio designed for GitHub Pages.

## What is included

- Interactive hero section
- Animated audience statistics
- Filterable project cards
- Hover tilt effects
- Instagram Reel modal and fallback link
- Mobile navigation
- Résumé link
- Accessible reduced motion support

## Upload to GitHub Pages

1. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder to the root of the repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Save.

The site should appear at:

`https://faris-saeed-media.github.io`

## Add another Instagram Reel

Copy one of the existing project cards in `index.html`.

For a button that opens the current modal, use:

```html
<button
  class="text-link open-reel"
  data-reel="https://www.instagram.com/reel/REEL_ID/"
>
  View Instagram reel ↗
</button>
```

To change the embedded Reel itself, update both URLs inside the `<dialog class="reel-modal">` section.

Instagram embeds only work for public posts. The fallback button still opens the Reel directly.

## Edit colors

The main colors are at the top of `style.css`:

```css
:root {
  --background: #0b0b0d;
  --accent: #2fd3a2;
  --accent-2: #0f8068;
  --accent-3: #b7f0d4;
}
```

## Update contact links

Search `index.html` for:

- `faris.saeed1020@gmail.com`
- `Faris_Saeed_Resume.pdf`
- the Instagram Reel URL


## The Appointment gallery

The Appointment card now includes a link to `#appointment-gallery`.

The gallery uses:

- `assets/appointment-1.jpg` through `assets/appointment-7.jpg`
- a responsive editorial grid
- click to enlarge
- previous and next controls
- left and right arrow keyboard navigation

To change an image caption, edit the matching `data-caption` value in `index.html`.


## Phthalo green update

This version changes the site palette to deep phthalo green, teal, and mint.

It also changes the location language to:

`Open to relocation opportunities`

This download intentionally does not contain a résumé PDF. Keep the safe résumé already inside your repository's `assets` folder.


## Roya Media Group portfolio section

This version expects both logo files to already exist inside `assets`:

- `assets/roya_transparent.png`
- `assets/roya_logo.jpg`

The transparent PNG is used first. The JPG is used automatically as a fallback.

The Roya project card now links to a dedicated case study containing:

- role and platform metrics
- a featured Instagram Reel
- an embedded YouTube video
- all supplied Instagram links
- a show more button
- a reusable Instagram modal

The archive labels are intentionally generic because only URLs were supplied. Replace labels like `Reel 01` with the actual story headlines inside `index.html` as you refine the portfolio.
