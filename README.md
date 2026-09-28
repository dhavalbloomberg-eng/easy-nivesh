# Portfolio View India (Easy Nivesh)

Educational portfolio mix reference for India. Pick your age, see your split.

**Original:** https://easy-nivesh.netlify.app/

Static site — HTML, CSS, JS. No build step.

## Pages

- `/` — Overview
- `/new-to-finance` — Beginner path + age-based mix calculator
- `/ipo` — IPO grey market premiums
- `/gold-etf` — Gold rates by city
- `/mutual-funds` — Category reference
- `/equity` — 50-30-20 mid/large/small illustration
- `/login.html` — Auth (Supabase)

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

- **GitHub Pages:** Settings → Pages → Deploy from branch `main` / root (or `/docs`)
- **Netlify / Vercel / Cloudflare Pages:** Connect this repo, publish directory = root

Data files in `data/` (IPO, gold) can be refreshed manually or via scheduled jobs.

Educational only. Not advice. Not SEBI-registered.
