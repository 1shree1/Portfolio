# Shree Subedi Portfolio

Personal-brand website for Shree Subedi, a web developer from Nepal focused on fast, responsive, and conversion-focused websites.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.ts`, so the static site is generated into `out/`.

## Deployment

```bash
npm run deploy
```

Deployment uses `gh-pages -d out`. The custom domain is preserved through `public/CNAME`.
