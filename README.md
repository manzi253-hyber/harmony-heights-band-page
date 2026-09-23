# Harmony Heights — Official Band Page

A responsive official website concept for **Harmony Heights**, an emerging band with an eclectic sound and a high-energy live presence. The project is built with semantic HTML, CSS, and vanilla JavaScript, with no build step or dependency install required.

## Project name

**Harmony Heights: Feel the Music** is the recommended project name. A concise repository name for GitHub is:

```text
harmony-heights-band-page
```

## Included

- Responsive live-stage visual direction with dark venue palette and lime/orange accents
- Band introduction and accessible member photography
- Native audio and video showcases using the supplied Edube media URLs
- Upcoming tour date links that open safely in a new tab
- Social links and a booking/fan message contact form
- Mobile navigation, light/dark mode toggle, scroll reveal, reduced-motion support, and inline form confirmation

## Run locally

Open `harmony-heights.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/harmony-heights.html`.

`index.html` redirects visitors to the named project page, making the repository easy to deploy on GitHub Pages.

## GitHub handoff

This project is published at `https://github.com/manzi253-hyber/harmony-heights-band-page`. To reproduce the publish flow from a fresh checkout:

```bash
gh repo create harmony-heights-band-page --public
git remote add harmony https://github.com/manzi253-hyber/harmony-heights-band-page.git
git push -u harmony HEAD:main
```

If the GitHub account already has a repository with that name, use the existing remote instead:

```bash
git remote add origin https://github.com/YOUR-USERNAME/harmony-heights-band-page.git
git push -u origin main
```

Replace placeholder ticket/social URLs and the Edube media assets with production-owned links before launch.
