# Chaitanya Muley — Portfolio

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS, deployed to GitHub Pages by GitHub Actions.

Live: https://chaitanya-720.github.io/

## Updating content

All text, links and lists live in **`src/data/profile.ts`**. Anything set to `null` (or an empty list) is hidden on the site. The resume PDF is `public/Chaitanya_Muley_Resume.pdf` (replace the file to update it). Open TODOs in that file:

- `education[0].score` – confirmed diploma semester/aggregate %
- `projects[].repoUrl` – GitHub URLs for CareerNest and NeuroDrive
- NeuroDrive features – split into implemented vs. planned once confirmed
- `certifications` – add dates / credential URLs if available

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Deploy (first time)

1. Create a **public** repo on GitHub named exactly `chaitanya-720.github.io`.
2. Push this folder to its `main` branch.
3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` rebuilds and deploys automatically (see `.github/workflows/deploy.yml`).
