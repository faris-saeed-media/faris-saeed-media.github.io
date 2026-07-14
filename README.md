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


## Work sample ordering and separation

The detailed portfolio sections now follow the same order as the Selected Work cards:

1. Roya Media Group
2. @realzaytoon
3. The Appointment gallery

Roya and @realzaytoon each have:

- a numbered chapter heading
- a distinct full width background treatment
- more spacing between case studies
- a clear divider line
- separate newsroom and independent-platform labels


## Selected Work title update

The five main cards now use direct project or organization names:

1. Roya Media Group
2. @realzaytoon
3. HUUPE
4. The Appointment
5. Seagull Media

The unfinished placeholder card was removed so the section only contains completed work.


## HUUPE work sample

This version expects the following logo file inside the existing assets folder:

`assets/huupe_logo.jpg`

The HUUPE card now uses the real logo and links to a dedicated HUUPE case study.

The detailed work order is now:

1. Roya Media Group
2. @realzaytoon
3. HUUPE
4. The Appointment

The HUUPE case study contains:

- Executive Producer responsibilities
- embedded long form YouTube launch video
- embedded vertical YouTube Short
- direct links to both videos

The supplied video tracking parameters were removed from the clean portfolio URLs.


## Homepage statistic update

The third homepage metric now shows:

- 11M+ likes across platforms


## About section removal

The About section and its navigation link were removed. The portfolio now moves directly from the work sections into Contact.


## The Appointment and Seagull Media sections

The detailed work order now continues with:

4. The Appointment
5. Seagull Media

The Appointment now includes:

- a numbered `04` chapter heading
- a `Final short film coming soon` status panel
- the existing behind the scenes gallery

Seagull Media now includes:

- a link from its Selected Work card
- a numbered `05` chapter heading
- campaign performance metrics
- a polished placeholder for future campaign, Reel, and radio samples


## Overall metrics placement

The three cards showing:

- 120K+ followers
- 130M+ short form views
- 11M+ likes

were removed from the space between the hero and Selected Work.

They now appear inside the detailed @realzaytoon section under an `Overall platform impact` heading, where the numbers have clearer context.


## Restored scrolling skills row

A dedicated Skills and Tools section now appears between Seagull Media and Contact.

The ticker includes:

- Scriptwriting
- Breaking news speed
- Adobe Premiere Pro
- After Effects
- On camera reporting
- Social strategy
- Video production
- Audience analytics
- Creative development
- Short form storytelling


## Mobile optimized version

This version adds responsive layouts for phones and tablets, including:

- mobile navigation menu with outside click and Escape support
- stacked hero layout with responsive portrait and featured Reel card
- full width social buttons on small phones
- single column work cards and case studies
- responsive YouTube and Instagram embeds
- mobile friendly Reel statistics
- single column photo gallery
- touch sized buttons and links
- safe spacing for phone notches and browser toolbars
- mobile lightbox controls
- responsive skills ticker and contact section

Tested breakpoints:

- tablet and small laptop: 820px and below
- standard phones: 520px and below


## Mobile hero layout fix

The portrait and featured Reel card now stack vertically on phones and tablets.

This removes the previous overlap that caused:

- the portrait to be hidden behind the card
- the featured card to extend beyond the visible screen
- large blank areas in the hero
- awkward cropping on narrow devices


## 102.5 Beat FM update

The former Seagull Media card and detailed section are now branded as `102.5 Beat FM`.

This version expects this file inside the existing assets folder:

`assets/beat_1025_logo.png`

The section includes the three supplied Instagram Reel samples. Tracking parameters were removed from the portfolio URLs.


## Occupational Hazards

A sixth Selected Work card and detailed chapter were added for the upcoming acting role in
Bassel Ghandour's `Occupational Hazards`.

The project is labeled `Coming soon` and includes this IMDb link:

`https://www.imdb.com/title/tt39388257/`

The 100K+ campaign-impressions metric was also removed from the 102.5 Beat FM section.


## Role and film credit update

- HUUPE now lists Faris as `Co Producer`
- The Appointment is now identified as a `Short Film by Zaid Sater`


## Compact Occupational Hazards preview

The large standalone Occupational Hazards chapter was removed.

Card 06 now includes:

- a compact expandable `View project preview` banner
- a short coming soon message styled like The Appointment banner
- the existing IMDb link


## LinkedIn button

A LinkedIn button was added to the hero beside the Instagram and TikTok links:

`https://www.linkedin.com/in/faris-saeed-aa30a2390`


## Social icons moved to navigation

Instagram, LinkedIn, and TikTok were moved from the hero into the top navigation.

The icons are inline SVG, so no additional image files are required in the assets folder.


## Featured Reel copy update

The hero Reel language is now broader and portfolio focused:

- `FEATURED ORIGINAL REEL`
- `A quick look at my original short form work.`

The Lebanon specific description was removed from the hero card.
