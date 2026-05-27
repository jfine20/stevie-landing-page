# Stevie Landing Page

The public-facing marketing site for [Stevie](https://stevieai.io) — your AI travel concierge.

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Landing page |
| `about.html` | `/about` | About Stevie |
| `contact.html` | `/contact` | Contact form |
| `rewards.html` | `/rewards` | Rewards program |
| `for-business.html` | `/for-business` | Business travel |
| `mobile-app.html` | `/mobile-app` | Mobile app coming soon |
| `privacy.html` | `/privacy` | Privacy policy |
| `terms.html` | `/terms` | Terms of service |
| `rewards-terms.html` | `/rewards-terms` | Rewards program terms |
| `cookies.html` | `/cookies` | Cookie policy |
| `security.html` | `/security` | Security |

## Stack

Pure HTML / CSS / JS — no build step required. Each page loads:

- **React 18** (UMD, via unpkg CDN)
- **Babel Standalone** (for in-browser TSX compilation)
- **Google Fonts** — DM Sans + DM Serif Display
- `styles.css` — all design tokens and layout
- `primitives.tsx` — logo, icons, and small reusable components
- `sections.tsx` — all landing page sections (Nav, Hero, Marquee, TryIt, HowItWorks, Features, FAQ, Dispatch, Footer)
- `pages.tsx` — subpage templates (LegalPage, AboutPage, ContactPage, ComingSoonPage)
- `main.tsx` — root app composition (landing page only)

## Running locally

Open any `.html` file in a browser — or run a local server to avoid CORS issues with the TSX imports:

```bash
npx serve .
# → http://localhost:3000
```

Or with Python:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Design tokens

All colors, fonts, and spacing are defined as CSS custom properties in `styles.css`:

```css
--cobalt: #004AAD       /* primary brand blue */
--cobalt-deep: #00306E  /* hover/active */
--cobalt-ink: #001F4A   /* dark text / backgrounds */
--cream: #F0EDE6        /* page background */
--paper: #F7F4EC        /* card backgrounds */
--ink: #15151A
--ink-soft: #3D3A36
```

Fonts: **DM Serif Display** (headings) · **DM Sans** (body)
