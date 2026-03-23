# Anietie Ekong Studio — Architecture Portfolio

A cinematic Next.js 14 portfolio for **Anietie Ekong**, an architecture and design studio based in Lagos, Nigeria.  
Inspired by the Makhno Studio aesthetic: monochrome precision, Cormorant Garamond editorial typography, and warm terracotta accents.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Cormorant Garamond · Syne · IBM Plex Mono |
| Animation | CSS keyframes + Intersection Observer |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
ekong-studio/
├── app/
│   ├── layout.tsx              # Root layout — fonts, Cursor, Navbar
│   ├── page.tsx                # Homepage — hero, services grid, about, contact
│   ├── globals.css             # Tailwind base + grain overlay + scrollbar
│   ├── not-found.tsx           # 404 page
│   └── services/
│       └── [slug]/
│           └── page.tsx        # Dynamic service + projects page
│
├── components/
│   ├── Cursor.tsx              # Custom dual-layer cursor (dot + lagging ring)
│   ├── Loader.tsx              # Makhno-style 0% → 100% loading screen
│   ├── Navbar.tsx              # Fixed topbar + full-screen numbered menu + scroll progress
│   ├── ProjectCard.tsx         # Individual project card with hover reveals
│   ├── RevealOnScroll.tsx      # Intersection Observer scroll reveal wrapper
│   └── ServiceCard.tsx         # Service card linking to /services/[slug]
│
├── lib/
│   ├── services.ts             # All service + project data (typed)
│   └── svgs.tsx                # Architectural line-drawing SVG components
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Services & Routes

| Service | Route |
|---|---|
| 3D Modeling | `/services/3d-modeling` |
| 3D Visualization | `/services/3d-visualization` |
| Animation | `/services/animation` |
| Construction Drawings | `/services/construction-drawings` |
| Presentation Drawings | `/services/presentation-drawings` |
| Interior Design | `/services/interior-design` |

---

## Customisation

### Replace placeholder project data
Edit `lib/services.ts` — each service has a `projects` array with title, location, year, area, description, and tags.

### Add real project images
In `components/ProjectCard.tsx` and `components/ServiceCard.tsx`, replace the SVG drawings with `<Image>` components pointing to `/public/projects/`.

### Change accent colour
In `tailwind.config.ts` update `accent: "#c8874a"` and `warm: "#d4975e"`.

### Add new services
Push a new entry to the `SERVICES` array in `lib/services.ts` — the nav, home grid, and static params generation all derive from this single source of truth.

---

## Build for Production

```bash
npm run build
npm start
```

---

Built with precision. Lagos, Nigeria. 2024.
