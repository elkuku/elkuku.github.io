# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run wiki:dev      # Start local dev server (http://localhost:5173)
npm run wiki:build    # Build static site to docs/.vitepress/dist/
npm run wiki:preview  # Preview the production build locally
```

## Architecture

This is a **VitePress** personal documentation site deployed to GitHub Pages.

- **Content:** Markdown files in `docs/` — each `.md` file becomes a page
- **Config:** `docs/.vitepress/config.mts` — controls nav, sidebar, site metadata, and theme options
- **Theme:** `docs/.vitepress/theme/` — extends VitePress default theme with custom CSS variables (green branding)
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`

### Adding content

To add a new page:
1. Create a `.md` file in `docs/`
2. Add it to the `sidebar` array in `docs/.vitepress/config.mts`

The `isProd` flag in config switches the favicon between `favicon.ico` (production) and `favicon-dev.ico` (dev).
