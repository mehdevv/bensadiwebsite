# Bensadi Patesserie — Vite + React

Vite + React site for Vercel and local dev. Images live in `attached_assets/` at the **project root** (committed to git) and are imported via the `@assets` alias.

## Setup

```bash
npm install
npm run dev
```

## Project layout

- `src/` — React app (Wouter, shadcn/Radix, Tailwind CSS v4).
- `attached_assets/` — Photos referenced from components (`@assets/...` in `vite.config.ts`).

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Vite dev server                |
| `npm run build`   | Typecheck + production build   |
| `npm run preview` | Preview production build       |

## Vercel

Use the repository root as the project root (no “Root Directory” subfolder). `vercel.json` sets `outputDirectory` to `dist` and SPA rewrites for client-side routing.
