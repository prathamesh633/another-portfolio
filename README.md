# Deploy this Portfolio to GitHub Pages

This is a Vite + React + TypeScript project. Follow these steps to host it on GitHub Pages.

## 1) Prerequisites
- GitHub account and a repository created for this code (e.g., `portfolio`)
- Node 18+ and npm installed

## 2) Install and build locally
```sh
npm install
npm run build
```
This creates a production build in `dist/`.

## 3) Set correct base path (only for project pages)
If your repository is NOT `username.github.io` (i.e., it’s a project site like `github.com/username/portfolio`), set Vite’s base in `vite.config.ts` to the repository name so assets resolve correctly:

File: `vite.config.ts`
```ts
export default defineConfig({
  plugins: [react()],
  base: "/REPO_NAME/", // e.g., "/portfolio/"
})
```
Skip this step if your repository is `username.github.io` (a user/organization site).

## 4) Deploy using GitHub Actions (recommended)
Enable Pages via Actions so each push to `main` publishes automatically.

1. In GitHub → your repo → Settings → Pages → set Source to GitHub Actions.
2. Add a workflow file at `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install deps
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit and push:
```sh
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```
After the workflow completes, GitHub Pages will serve your site.

## 5) Where to access your site
- Project site URL: `https://<username>.github.io/<REPO_NAME>/`
- User/Org site URL (repo named `username.github.io`): `https://<username>.github.io/`

## 6) Optional: Custom domain
1. In repo Settings → Pages, set your custom domain.
2. In your DNS, add a CNAME to `<username>.github.io`.
3. If using a custom domain, you typically do not need the `base` setting in Vite.

## 7) Troubleshooting
- Blank/404 after deploy: Ensure `base` in `vite.config.ts` equals `"/<REPO_NAME>/"` for project sites, then rebuild and push.
- Assets 404: Re-run the workflow after fixing `base`.
- Old content: Hard refresh (Ctrl+F5) or clear cache. Verify latest workflow run succeeded in the Actions tab.

## Local development
```sh
npm run dev
```
Open the printed localhost URL (usually `http://localhost:5173`).
