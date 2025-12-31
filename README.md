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


---

# ARCBOS Website — Local Development & Content Guide

This repository contains the static website for **ARCBOS Systems Inc.**
The site is intentionally **simple, deterministic, and audit-friendly**.

No framework.
No build step.
No runtime dependency.

---

## 1. Project Philosophy (Important)

This site follows these non-negotiable principles:

* **Static first**
  All pages are plain HTML. No React, no Vue, no SSG.

* **CSS is authoritative**
  Layout, spacing, and visual rhythm are controlled only via CSS.
  HTML structure must remain stable.

* **Predictability over cleverness**
  Future engineers should understand the site in minutes, not hours.

* **No automatic magic**
  Nothing auto-builds, auto-syncs, or auto-generates.

---

## 2. Directory Structure (Canonical)

```
/
├─ assets/
│  ├─ css/
│  │  ├─ core.css        # Global tokens, layout, typography (DO NOT inline)
│  │  └─ components.css  # Header, footer, reusable UI blocks
│  └─ js/
│     └─ core.js         # Minimal JS (includes + small helpers)
│
├─ partials/
│  ├─ header.html        # Global header
│  └─ footer.html        # Global footer
│
├─ products/
│  ├─ index.html
│  ├─ snowbot.html
│  ├─ mowbot.html
│  └─ patrolbot.html
│
├─ platforms/
├─ systems/
├─ industries/
├─ resources/
├─ company/
├─ contact/
├─ privacy/
├─ store/
│
└─ index.html            # Homepage
```

**Rules**

* Never duplicate header/footer markup in page files
* Never move CSS files out of `/assets/css/`
* Never add a second footer or header

---

## 3. How Header & Footer Work

### Header

* Loaded via:

  ```html
  <div data-include="/partials/header.html"></div>
  ```
* Styled exclusively in `components.css`
* Height controlled by `--header-h` in `core.css`

### Footer

* Loaded via:

  ```html
  <div data-include="/partials/footer.html"></div>
  ```
* Background color: `--surface`
* Copyright year:

  ```html
  <span id="footer-year"></span>
  ```

  Automatically populated via JS

⚠️ **Never remove the `©` symbol**
It must remain in the HTML, not CSS.

---

## 4. CSS Responsibilities (Strict)

### `assets/css/core.css`

Used for:

* CSS variables (`--bg`, `--surface`, `--text`, etc.)
* Typography (`h1`, `p`, `.section`)
* Layout rhythm (section padding, grids)

**DO NOT**

* Style header or footer here
* Style icons here

---

### `assets/css/components.css`

Used for:

* Header
* Footer
* Buttons
* Icons
* Navigation

**This file is always loaded from:**

```
/assets/css/components.css
```

If changes do not apply:

* Check DevTools → Network → components.css
* Confirm request path is `/assets/css/components.css`

---

## 5. Content Editing Guide (Non-Engineers)

### Editing Text

* Edit only inside page HTML files
* Do **not** change class names
* Do **not** add inline styles

Example (safe):

```html
<p>
  Quietly engineered commercial robotics for outdoor operations.
</p>
```

Example (not allowed):

```html
<p style="margin-top:40px;color:red">
```

---

### Adding a New Page

1. Copy an existing page folder (e.g. `/products/`)
2. Update text content only
3. Ensure header/footer includes remain untouched

---

## 6. Icons Policy (Final)

* SVG icons are **inline SVG**
* Stroke-based icons preferred
* Color controlled by `currentColor`
* No external icon libraries
* No icon fonts

### LinkedIn

* Icon-only is acceptable
* Text label may be removed for visual clarity

### Store

* **Icon + text ("Store") must both exist**
* Icon must remain stroke-based (no solid fill)

---

## 7. Local Development

You do **not** need a build tool.

### Option A: Simple HTTP Server

```bash
python3 -m http.server
```

Then open:

```
http://localhost:8000
```

### Option B: Direct File Open

Works for most pages, but header/footer includes may not load.

---

## 8. Git Workflow (Authoritative)

### Pull latest changes

```bash
git pull origin main
```

### Make edits

* Edit files locally
* Save changes

### Commit

```bash
git add .
git commit -m "Update content / layout"
```

### Push to GitHub

```bash
git push origin main
```

⚠️ **GitHub Pages updates are not instant**
Expect 30–120 seconds delay.

---

## 9. Common Mistakes to Avoid

* Editing cached CSS in browser and assuming it’s saved
* Changing `section-muted` instead of checking section class
* Removing semantic HTML for visual tweaks
* Adding new CSS files unnecessarily
* Using inline SVG with hardcoded `fill="#000"`

---

## 10. Ownership Boundary

This site is:

* **Engineering-owned**
* **Design-frozen**
* **Content-flexible**

If something looks wrong:

1. Inspect element
2. Confirm CSS file path
3. Confirm class name
4. Then change — never guess

---

## 11. Final Note

This repository is designed so that:

> A competent engineer can safely modify it
> **without understanding its entire history**

If future changes require a framework, build step, or CMS —
that should happen in a **new repository**, not this one.

---

**End of document.**

---

