# Theme sync mapping

Mapping details for Cloudflare Pages projects. Only the Q1X portfolio project is present in this repository; the remaining projects require Cloudflare dashboard access or repository references to confirm.

| Cloudflare project | Production URL | GitHub repo | Framework | <head> location | Header / toggle location |
| --- | --- | --- | --- | --- | --- |
| q1x-portfolio | https://q1x-portfolio-admin.q1x.xyz | quoralinex/q1x-portfolio | Remix + Vite | app/root.jsx | app/layouts/navbar/ (header, nav toggle, theme toggle) |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |
| (additional project) | – | – | – | – | – |

**Notes**

- The project name and production URL come from `package.json` and the Cloudflare Wrangler configuration. The repository is declared in `package.json`.
- The site uses Remix with Vite. The document head is composed in `app/root.jsx`. The navigation header, menu toggle, and theme toggle components live under `app/layouts/navbar/`.
- For the remaining Cloudflare projects, details were not present in this codebase. They need confirmation from Cloudflare “Connected Git repository” settings or additional repository references.
