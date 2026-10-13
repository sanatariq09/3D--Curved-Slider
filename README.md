<div align="center">

# Sana Tarique — Creative Portfolio

**Behind the Designs** · an interactive portfolio with a curved, 3D-perspective project carousel.

![Hero](docs/screenshots/hero-desktop.png)

</div>

## Highlights

- **3D carousel** built with pure CSS perspective transforms (no WebGL) — continuous auto-play, drag / swipe, arrow-key navigation, mouse-tilt parallax, depth shading and floor reflections.
- **Project gallery & detail view** — one shared data module powers the carousel, the grid and the dialog.
- **Responsive & accessible** — tuned layouts for phone, tablet and desktop; keyboard-focusable cards, `aria` labels, and `prefers-reduced-motion` support.
- **Static-first** — the page is prerendered to plain HTML, so it deploys anywhere (GitHub Pages, Netlify, Vercel, Cloudflare Pages…).

## Screenshots

| Gallery | Project detail | Mobile |
| --- | --- | --- |
| ![Gallery](docs/screenshots/gallery-desktop.png) | ![Project detail](docs/screenshots/project-detail.png) | <img src="docs/screenshots/hero-mobile.png" width="220" alt="Mobile hero" /> |

## Tech stack

[TanStack Start](https://tanstack.com/start) · [React 19](https://react.dev) · TypeScript · [Tailwind CSS 4](https://tailwindcss.com) · [Radix UI](https://www.radix-ui.com) primitives · Vite · Vitest

## Getting started

Requires Node.js 20 or newer (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/client` (static site) |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint + Prettier check |
| `npm test` | Run unit tests |

## Deploying

### GitHub Pages (automatic)

1. Push this repository to GitHub (branch `main`).
2. In the repository go to **Settings → Pages → Build and deployment** and choose **GitHub Actions**.
3. Every push to `main` runs [`deploy.yml`](.github/workflows/deploy.yml), builds the site with the correct base path and publishes it at `https://<username>.github.io/<repository>/`.

### Any other static host

```bash
npm run build
```

Upload the contents of `dist/client`. If the site lives under a sub-path, build with `BASE_PATH=/your-path/ npm run build`.

## Project structure

```
src/
├── assets/                  Project imagery
├── components/
│   ├── portfolio/           Carousel and image components
│   └── ui/                  Reusable UI primitives (shadcn/ui style)
├── lib/projects.ts          Single source of truth for portfolio projects
├── routes/                  File-based routes (home page, root layout)
└── styles.css               Design tokens and page styles
public/                      Favicon, robots.txt, social preview image
docs/screenshots/            Images used in this README
design/                      Original source image sheet
```

### Adding or editing a project

Drop an image into `src/assets/`, then add an entry to the `projects` array in [`src/lib/projects.ts`](src/lib/projects.ts). The carousel, gallery and detail dialog update automatically.

## License

Released under the [MIT License](LICENSE). Project imagery is part of the portfolio and is shown for demonstration purposes.
