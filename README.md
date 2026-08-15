# Budget Roofing & Siding

Public website for Budget Roofing & Siding, serving San Antonio and 34 nearby communities.

## Website

The site includes residential roofing, roof repair, roof replacement, insurance-claim support, siding, savings information, and a dedicated local page for every service area.

It is a public marketing website. It has no account system, ChatGPT login, or protected customer area.

## GitHub Pages

Every push to `main` runs `.github/workflows/deploy-pages.yml`, builds a static copy with the correct `/Budget-Roofing/` path, and deploys the `out/` artifact to GitHub Pages.

```bash
npm ci
npm run build:pages
```

## Sites development

```bash
npm run dev
npm run build
```

The regular build remains compatible with the existing Sites deployment; the GitHub Pages settings are enabled only by `npm run build:pages`.
