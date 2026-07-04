# Deploying VALEN

VALEN is a standard Next.js App Router project, so it deploys to any
free-tier host that supports Next.js out of the box. No configuration
changes are required.

## Important: data persistence

Products added or edited through `/admin` are currently stored in the
**browser's localStorage**, not a database. This means:

- Each visitor's browser has its own product list.
- Products you add won't appear for other people visiting your live site.
- Clearing browser data wipes your local changes.

This is fine for personal use, testing, or as a content-staging step
before manually adding products to a real database later. If you want
products to be visible to *everyone* who visits VALEN, the app needs a
real backend (see "Next step" below).

---

## Option 1: Vercel (recommended)

Built by the makers of Next.js — zero configuration needed.

1. Push this repo to GitHub (see main README or the commands below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, select your `valen` repo.
4. Leave all settings as default. Click **Deploy**.
5. Done — you'll get a live URL like `valen-yourname.vercel.app`.

Every push to your `main` branch auto-deploys.

## Option 2: Netlify

1. Push this repo to GitHub.
2. Go to [netlify.com](https://netlify.com), **Add new site → Import an existing project**.
3. Select your repo. Netlify auto-detects Next.js.
4. Click **Deploy**.

## Option 3: Cloudflare Pages

1. Push this repo to GitHub.
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com), connect your repo.
3. Framework preset: **Next.js**. Click **Deploy**.

---

## Pushing to GitHub for the first time

```bash
cd valen
git init
git add .
git commit -m "Initial commit: VALEN"
```

Then either:

**With the GitHub CLI installed:**
```bash
gh repo create valen --public --source=. --push
```

**Without the CLI:**
1. Create an empty repo at github.com/new (don't initialize with a README).
2. Then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/valen.git
git branch -M main
git push -u origin main
```

---

## Next step: real product persistence

When you're ready for products to be visible to all visitors (not just
your own browser), the only file that needs to change is
`src/lib/store.ts`. Every page in the app already reads through this
file's functions (`getAllProducts`, `createProduct`, `updateProduct`,
`deleteProduct`) rather than talking to localStorage directly — so
swapping it for real API calls to a database (e.g. Supabase, Postgres,
or a simple JSON-backed API route) won't require touching any page or
component.
