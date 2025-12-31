# ARCBOS Website (Static)

A quiet, clean, white-background website designed for commercial credibility and long-term maintainability.

## Deploy on GitHub Pages

1. Create a GitHub repository (e.g. `arcbos-website`)
2. Commit and push all files in this folder
3. In GitHub: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
4. Optional: Add a `CNAME` file at repository root for a custom domain.

## Structure

- `/partials/header.html` and `/partials/footer.html` are included at runtime via `/assets/js/core.js`
- Page content lives in each `index.html` under section folders
- CSS is split into:
  - `/assets/css/core.css` (layout + typography)
  - `/assets/css/components.css` (header/footer components)

## Notes

- Replace `/assets/favicon.ico` when ready
- Replace `ARCBOS` text logo with `/assets/logo.svg` when ready