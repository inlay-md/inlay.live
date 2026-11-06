# inlay.live

The website for [Inlay](https://github.com/inlay-md/Inlay), a Markdown editor for macOS that renders the HTML, SVG, CSS and JavaScript inside your documents the way a browser would.

Built with [Astro](https://astro.build) as a static site and deployed on Vercel from `main`. Pull requests get preview deployments.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm install` | Install dependencies (Node 22.23+ and pnpm 10+) |
| `pnpm dev` | Dev server at `http://localhost:4321` |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve `dist/` locally |
| `pnpm check` | Biome lint and format check, then `astro check` |
| `pnpm lint:fix` | Apply Biome fixes |
| `pnpm assets` | Regenerate `public/apple-touch-icon.png`, `public/favicon.png` and `public/og.png` from the SVG sources |

## Layout

- `src/pages/index.astro` assembles the landing page from the sections in `src/components/`.
- `src/data/site.ts` holds the copy that repeats (URLs, description, copyright); `src/data/features.ts` holds the feature cards.
- `src/data/progress.ts` holds the milestone statuses shown in the Progress section and the Quick Look mock. Update it, and its `updated` date, whenever a milestone merges in the Inlay repository, keeping it in step with Inlay's `docs/PLAN.md` and README roadmap.
- `src/styles/global.css` defines the brand tokens (Ink, Paper, Brass, Verdigris) and self-hosted fonts (Inter, Sora, JetBrains Mono via Fontsource).
- `src/scripts/demo-chart.ts` runs the Chart.js example shown in the hero demo.
- `vercel.json` sets security headers (CSP, HSTS) and long-lived caching for hashed assets.
- `src/layouts/Base.astro` loads Vercel Web Analytics (`@vercel/analytics`), which fetches `/_vercel/insights/script.js` and reports to `/_vercel/insights/*` on the same origin, so the CSP allows `connect-src 'self'`. `astro.config.ts` keeps scripts out of the HTML because the CSP blocks inline scripts.

## Waitlist form

The "Be first to open it" form posts to the URL in the `PUBLIC_WAITLIST_ACTION` environment variable at build time (for example a Buttondown or Formspree endpoint). When the variable is unset the panel shows GitHub links instead.

## Brand

Icon, logo, palette and the landing-page design come from the Inlay Brand & UI canvas: https://claude.ai/artifact/M3xpg5PiXRRJY4Fv54qF6L

## Contributing

Conventional Commits, signed off with `git commit -s` (Developer Certificate of Origin). Source files carry `SPDX-License-Identifier: Apache-2.0`.

## License

Code is licensed under the [Apache License, Version 2.0](LICENSE). The name "Inlay", the logo and the `inlay.live` name identify the official project and are not covered by that license; see [TRADEMARKS.md](https://github.com/inlay-md/Inlay/blob/main/TRADEMARKS.md) in the Inlay repository.
