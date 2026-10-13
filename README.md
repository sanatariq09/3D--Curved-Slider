# Sana Tarique — Creative Portfolio

**Behind the Designs** — an interactive portfolio with a curved, 3D-perspective project carousel.

## Features

- 3D carousel in pure CSS: auto-play, drag/swipe, arrow keys, mouse tilt, depth shading and reflections
- Project gallery and detail dialog powered by one shared data file
- Responsive, keyboard accessible, respects `prefers-reduced-motion`
- Static build — deploys to GitHub Pages, Netlify, Vercel or any static host

## Tech stack

TanStack Start · React 19 · TypeScript · Tailwind CSS 4 · Radix UI · Vite · Vitest

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run build`     | Production build into `dist/client`      |
| `npm run preview`   | Preview the production build             |
| `npm run typecheck` | TypeScript check                         |
| `npm run lint`      | ESLint + Prettier                        |
| `npm test`          | Unit tests                               |

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site at `https://<username>.github.io/<repo>/`.

For other hosts, run `npm run build` and upload `dist/client` (use `BASE_PATH=/sub-path/` if hosted under a sub-path).

## Add a project

Put an image in `src/assets/` and add an entry to the `projects` array in `src/lib/projects.ts`. The carousel, gallery and dialog update automatically.

## License

[MIT](LICENSE)
