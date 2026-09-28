# Portfolio View India

Educational portfolio mix reference for India. Pick your age, see your split.

Live original: https://easy-nivesh.netlify.app/

Static site — HTML, CSS, JS. No build step.

## Deploy (pick one)

### Netlify
1. New site → Import this repo  
2. Publish directory: `/` (leave build command empty)  
3. Deploy

### Vercel
1. Import repo → Framework Preset: **Other**  
2. Output directory: `.`  
3. Deploy

### GitHub Pages
1. Settings → Pages → Source: **Deploy from a branch**  
2. Branch: `main` / root  
3. For project URL (`username.github.io/easy-nivesh/`), add a custom domain **or** host at root of a user/org pages site so absolute paths work.

### Cloudflare Pages
Connect repo → Build command empty → Output directory `/`

## Local

```bash
npx serve .
# open http://localhost:3000
```

## Structure

| Path | Page |
|------|------|
| `/` | Overview |
| `/new-to-finance` | Beginner path + age calculator |
| `/ipo` | IPO grey market premiums |
| `/gold-etf` | Gold rates by city |
| `/mutual-funds` | Category reference |
| `/equity` | 50-30-20 illustration |
| `/login.html` | Auth (Supabase) |

Data: `data/ipo.json`, `data/gold.json` (refresh manually or via scheduled job).

**Educational only. Not advice. Not SEBI-registered.**
