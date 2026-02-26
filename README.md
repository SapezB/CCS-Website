# CCS London — County Construction Service

A modern, high-end web presence for County Construction Service Ltd — a London-based construction and renovation company.

## Repository overview

- Static React + Vite site showcasing services, projects and contact information.
- Tech: React, TypeScript, Vite, Tailwind CSS.

## Live demo
Deploy to any static host (Netlify, Vercel, GitHub Pages). Example production domain used in metadata: `https://www.ccslondon.co.uk`.

For GitHub Pages deployments, you must set a base path that matches the repository name. Vite uses `base` and React Router uses `basename`:


## Getting started

Prerequisites:

- Node.js 18+ and npm

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```


### Deployment

A GitHub Action (`.github/workflows/deploy.yml`) is already configured to run on every push to `main` — it builds the site and publishes the `dist` folder to GitHub Pages. You can also deploy manually with:

```bash
npm run deploy    # builds and pushes `dist` to the gh-pages branch
```

Ensure the `base` setting in `vite.config.ts` matches your repo name (e.g. `/CCS-Website/`).

## Project structure

- `index.html` — base HTML with site-wide SEO and JSON-LD schema
- `src/` — React app source
  - `pages/` — route pages (Home, About, Services, Projects, Contact, etc.)
  - `components/` — shared components (`Layout`, `Navbar`, `Footer`)
  - `data/` — sample project and service data
  - `images/` — media assets

## SEO and Accessibility

This project includes several SEO improvements:

- Default meta tags (description, keywords, Open Graph, Twitter card) in `index.html`.
- Dynamic per-route meta (title, description, OG tags, canonical) handled in `src/components/Layout.tsx`.
- Organization JSON-LD schema and `robots.txt` and a basic `sitemap.xml` at the project root.
- Image `alt` attributes across pages; consider adding unique OG images per project for richer social previews.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description of your changes

## Notes & Next steps

- Consider generating a fully dynamic `sitemap.xml` at build time including all project detail pages.
- Replace placeholder production domain (`https://www.ccslondon.co.uk`) with the actual domain before publishing.
- If deploying to GitHub Pages and you encounter a white page, verify that `VITE_BASE` is set correctly and consider using `HashRouter` or a rewrite plugin.
- Audit image sizes and convert to WebP for performance where appropriate.

## License & Contact

This repo contains example website code. For questions or support, contact: `0796 0925 977` or via the social links in the footer.

