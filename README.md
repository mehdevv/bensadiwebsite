# Bensadi Patesserie — Vite + React

Standalone Vite project generated from the `bensadi` app, with images resolved from the sibling `attached_assets` folder at the workspace root.

## Setup

```bash
npm install
npm run dev
```

## Project layout

- `src/` — React application (routing with Wouter, UI from shadcn/Radix, styling with Tailwind CSS v4).
- `../attached_assets/` — Images imported via the `@assets` alias (see `vite.config.ts`). Keep this folder next to `bensadi-vite` so imports like `@assets/...jpg` keep working.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Typecheck + production build |
| `npm run preview` | Preview production build |
