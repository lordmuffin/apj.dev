# andrewjackson.dev

Personal site, résumé, and blog. Astro static site, self-hosted in the homelab behind Traefik.

## Stack

- **Astro 5** — static output, content collections for blog, MDX-ready
- **Inter + JetBrains Mono** via Google Fonts
- **nginx 1.27 alpine** — runtime container
- **Traefik** — TLS + routing on the homelab proxy network
- RSS feed at `/rss.xml`, sitemap at `/sitemap-index.xml`

## Edit content

| What | Where |
|---|---|
| Name, role, intro, stats, experience, skills, certs, socials | `src/site.config.ts` |
| Blog posts | `src/content/blog/*.md` (frontmatter: `title`, `description`, `pubDate`, `tags`, `draft`) |
| About page prose | `src/pages/about.astro` |
| Colors / type / layout | `src/styles/global.css` (CSS variables at the top) |

The whole site reads from `src/site.config.ts` — change a job title there and it updates the home page, about page, and OG tags at once.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve ./dist locally
```

## Deploy to homelab

Assumes a Traefik instance already running on an external Docker network called `proxy`, with a `letsencrypt` cert resolver. Adjust labels in `docker-compose.yml` if your reverse proxy is different (Caddy, Nginx Proxy Manager, etc.).

```bash
# on the homelab host
git clone <this-repo> andrewjackson-site
cd andrewjackson-site

# first deploy
docker compose up -d --build

# update after a content change
git pull
docker compose up -d --build
```

### Rebuild on push (optional)

A git hook or a tiny CI runner (Gitea Actions, Drone, GitHub Actions self-hosted runner) can wrap the two-line update above. Easiest first pass: a `cron` job on the host that pulls + rebuilds every 15 minutes.

### LXC instead of Docker?

Run the build in any LXC with Node 22 installed, then either:
- serve `./dist` from a system nginx (`/etc/nginx/sites-enabled/andrewjackson.conf` — copy the `nginx.conf` from this repo as a starting point), or
- run the same Dockerfile inside the LXC if you have Docker there.

## Domain

Update `astro.config.mjs` (`site:`), `public/robots.txt` (sitemap URL), and the Traefik `Host(...)` rule in `docker-compose.yml` when the real domain is set.

## What's intentionally simple

- No JS framework on the page — Astro ships zero JS by default and that's kept.
- No CMS. Posts are markdown files in git. Add MDX later if you want React/Vue islands.
- No analytics wired up — add Plausible/Umami when ready.
