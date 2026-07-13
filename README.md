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


## Hero headshots

This version expects both files in the existing `assets` folder:

- `assets/faris_saeed.JPG`
- `assets/faris_saeed_2.JPG`

The first is the default hero portrait. The second crossfades in when the visitor hovers over the hero area.

GitHub Pages filenames are case sensitive, so keep `.JPG` capitalized exactly as shown.

To change how a face is cropped, edit this rule near the bottom of `style.css`:

```css
.hero-portrait-image {
  object-position: center top;
}
```

Examples:

- `object-position: center 20%;`
- `object-position: 45% top;`
- `object-position: 60% 15%;`


## Featured @realzaytoon Reel

The hero now features this personal-platform Reel:

`https://www.instagram.com/reel/DNgWHvNv1cz/`

The card describes it as an original satirical skit about Lebanon’s uniquely complex religious mix. The existing Roya case study remains unchanged lower on the page.


## Featured Reel performance

The hero card now displays:

- 375K likes
- 158K reshares


## Hero introduction update

The hero now uses:

- `Faris Saeed`
- `Portfolio.` as the green gradient line
- a revised description covering journalism, satire, and on camera storytelling
- buttons for Work, Instagram, and TikTok

The old `Watch featured skit` button was removed. The featured skit card remains visible on the right.


## @realzaytoon work sample

The independent platform card now links to a dedicated `#realzaytoon-work` section.

The section includes six selected Reels and the performance data supplied for each one.

Combined performance across the six selected Reels:

- 1.633 million likes
- 12,216 comments
- 46,013 reposts
- 687,900 reshares

The links were cleaned to remove Instagram tracking parameters.


## Cross platform @realzaytoon update

The project card now clearly identifies @realzaytoon as an independent cross platform creator brand spanning Instagram, TikTok, and YouTube.

The card highlights:

- 130M+ total views
- 10.3M TikTok likes

The full case study separates overall platform impact from the performance of the six selected Instagram Reels.


## Instagram and TikTok focus

This revision removes YouTube from the @realzaytoon positioning.

The project is now described as a cross platform creator brand built primarily across:

- Instagram
- TikTok
