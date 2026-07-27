# Comfort Service H&C LLC

A responsive, single-page website for **Comfort Service H&C LLC**, a family-owned
heating and cooling business in Canutillo, Texas. The site highlights one-day
installation options, financing options, HVAC services, customer reviews,
gallery imagery, and direct phone and map links.

## Technologies

- React
- Vite
- JavaScript and JSX
- Plain CSS
- GitHub Actions
- GitHub Pages

## Install and run

```bash
npm install
npm run dev
```

Vite will display the local development URL in the terminal.

## Lint and build

```bash
npm run lint
npm run build
```

Vite places the production website in `dist`, not `build`.

To inspect the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for the repository name `comfort-service-hc` and the
expected project URL:

```text
https://thegrindnet.github.io/comfort-service-hc/
```

The Vite configuration uses `base: "./"` so built JavaScript, CSS, and imported
images resolve from the repository subdirectory.

1. Create a GitHub repository named `comfort-service-hc`.
2. Add these project files to the repository and push them to the `main` branch.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Pushes to `main` will run `.github/workflows/deploy.yml`.
7. The workflow runs `npm ci`, builds the site, uploads `dist`, and deploys it.

The `dist` directory does not need to be committed or uploaded manually.

## Business information

Reusable business information, navigation links, services, highlights, benefits,
gallery entries, and reviews are stored in:

```text
src/utils/constants.js
```

Update the phone number, address, map link, or section content there.

## Images

Website images are stored in:

```text
src/assets/images/
```

The logo is the supplied Comfort Service logo. The hero and nine gallery files
are optimized local WebP assets. The gallery images are illustrative; replace
`gallery-01.webp` through `gallery-09.webp` with nine actual Comfort Service
project photos when those photos are available. Keep the filenames unchanged to
avoid code changes, or update their imports in `src/utils/constants.js`.

The favicon and social sharing image are stored in `public/`.

## Project structure

```text
comfort-service-hc/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.png
│   └── og-image.webp
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       ├── comfort-service-logo.png
│   │       ├── gallery-01.webp
│   │       ├── gallery-02.webp
│   │       ├── gallery-03.webp
│   │       ├── gallery-04.webp
│   │       ├── gallery-05.webp
│   │       ├── gallery-06.webp
│   │       ├── gallery-07.webp
│   │       ├── gallery-08.webp
│   │       ├── gallery-09.webp
│   │       └── hvac-technician-hero.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Highlights/
│   │   │   ├── Highlights.css
│   │   │   └── Highlights.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── Services/
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   └── Testimonials/
│   │       ├── Testimonials.css
│   │       └── Testimonials.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
