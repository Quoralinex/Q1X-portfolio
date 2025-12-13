# AI change guardrails (Codex / ChatGPT)

Any automated code changes for this repo must follow these rules:

1. **Test & lint first-class**
   - Always run:
     - `npm run lint` (if defined)
     - `npm run test`
     - `npm run build`
   - If any of these fail, fix the code or tests rather than skipping them.

2. **Health check route is sacred**
   - `/health` must:
     - Have no loaders
     - Not read KV, cookies, or headers
     - Return a simple OK message
   - Do not modify `/health` without an explicit task that mentions it.

3. **Routing & Workers config are protected**
   - Do **not** change:
     - Cloudflare routes in `wrangler.toml`
     - Environment names (`preview`, `production`)
     - Top-level route structure, unless the task explicitly allows it.

4. **Branding components only in branding tasks**
   - For theme/branding changes, only touch:
     - `app/components/theme-provider.jsx`
     - `app/layouts/navbar/theme-toggle.jsx`
     - `app/layouts/navbar/navbar.jsx` (or other explicit branding components)
   - Do not edit loaders, routes, or API code in a pure branding task.

5. **No new binary assets without explicit instruction**
   - Do not add large PNG/SVG files unless the task explicitly asks for them.
   - Reuse existing assets in `app/assets` or `public/`.

If a change requires violating one of these rules, stop and leave a comment explaining why instead of making the change.
