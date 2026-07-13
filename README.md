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
  --accent: #ff5ea8;
  --accent-2: #a28bff;
  --accent-3: #ffb35c;
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
