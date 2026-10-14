# Kazi Radwan Ahamed — Portfolio

A fast, accessible, animated personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Dark-first with a light-mode toggle, electric-cyan accent, and tasteful motion throughout.

## ✨ Features

- **Hero** — animated rotating role, gradient-ring portrait treatment, magnetic CTAs, live-status badge, social links.
- **About / Skills / Projects / Experience / Contact** — scroll-reveal animations, 3D-tilt project cards, grouped tech-stack grid, timeline.
- **Theme toggle** — dark/light with no flash-of-wrong-theme (persisted to `localStorage`).
- **Accessible** — semantic HTML, keyboard-navigable, focus-visible rings, `prefers-reduced-motion` respected, alt text, color contrast.
- **SEO-ready** — title/description, Open Graph + Twitter cards, SVG favicon, sitemap-friendly static output.
- **Performance** — static pre-render, `next/font` (Space Grotesk · Inter · JetBrains Mono), optimized `next/image`.

## 🧰 Tech stack

| Area | Choice |
|------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | lucide-react |

## 🚀 Run locally

Requires **Node.js 18.17+** (you have Node 20).

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev
# open http://localhost:3000

# 3. production build + run
npm run build
npm start
```

## ✏️ Editing content

Almost all site content lives in **one file**: [`src/lib/data.ts`](src/lib/data.ts).
Update your bio, skills, projects, experience, email, and GitHub there — no need to touch components.

- **Add a project** → add an object to the `projects` array (`featured: true` to show it as a card; `flagship: true` for the full-width highlight; add `github` / `live` for links, or `status` for a pill when there's no public link).
- **Secondary repos** → the `secondaryProjects` array ("More on GitHub" grid).
- **Your photo** → replace [`public/kazi.jpg`](public/kazi.jpg) (portrait, ~4:5 works best).

## ☁️ Deploy to Vercel

The easiest path (zero config):

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/kaziradwanahamed/portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com/new](https://vercel.com/new)**, import the repo. Vercel auto-detects Next.js — just click **Deploy**.
3. (Optional) add a custom domain under the project's **Settings → Domains**.

Or deploy straight from the CLI without GitHub:

```bash
npm i -g vercel
vercel        # follow prompts (first run links/creates the project)
vercel --prod # production deploy
```

> After you set a real domain, update `siteUrl` in [`src/app/layout.tsx`](src/app/layout.tsx) so Open Graph URLs are correct.

## 📄 License

Personal project © Kazi Radwan Ahamed.
