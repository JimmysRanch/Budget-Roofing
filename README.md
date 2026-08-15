# Budget Roofing & Siding

Public website for Budget Roofing & Siding, serving San Antonio and 34 nearby communities.

## Website

The site includes residential roofing, roof repair, roof replacement, insurance-claim support, siding, savings information, and a dedicated local page for every service area.

It is a public marketing website. It has no account system, ChatGPT login, or protected customer area.

## GitHub Pages

GitHub Pages serves the prebuilt public website from the root of `main`. This works with the repository's legacy Pages configuration and does not require a GitHub Actions runner.

```bash
npm ci
npm run build:pages
```

The generated contents of `out/` are published at the repository root while the application source remains in `app/`.

## Sites development

```bash
npm run dev
npm run build
```

The regular build remains compatible with the existing Sites deployment; the GitHub Pages settings are enabled only by `npm run build:pages`.
