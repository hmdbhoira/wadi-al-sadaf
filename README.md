# Wadi Al Sadaf - Corporate Website

B2B corporate website for Wadi Al Sadaf General Trading LLC, targeting real estate developers, hotels, and residential communities in the UAE.

## Current Status

**Live Site:** https://hmdbhoira.github.io/wadi-al-sadaf/

### Divisions

| Division | Status | Products/Services |
|----------|--------|-------------------|
| Machinery | ✅ Complete | 64 products/services across 8 categories |
| Outdoor & Pool | ✅ Complete | 22 products across 4 categories |

## Site Architecture

```
/                                   # Root hub - 2 division tiles
├── /machinery/                     # Machinery Division
│   ├── /products/                  # All products overview
│   ├── /services/                  # All services overview
│   ├── /[category]/                # Category pages (8 categories)
│   │   └── /[product]/             # Individual product/service pages
│   ├── /about/                     # About page
│   └── /contact/                   # Contact page
│
└── /furniture/                     # Outdoor & Pool Division
    ├── /products/                  # All products overview
    ├── /[category]/                # Category pages (4 categories)
    │   └── /[product]/             # Individual product pages
    ├── /about/                     # About page
    └── /contact/                   # Contact page
```

## Data Structure

### Machinery (`src/data/machinery.ts`)
- **Product Categories:** Electrical, Automation, Instrumentation, Mechanical, Safety & Security
- **Service Categories:** Repairing & Calibration, Panel Fabrication, Control Projects
- **Total:** 64 products/services

### Outdoor & Pool (`src/data/outdoor.ts`)
- **Sun Loungers** (5 products): Eden, Alfa, Wooden, Rattan, Cushion
- **Poolside & Outdoor Furniture** (6 products): Tables, Chairs, Umbrellas, Bases
- **Life Saving & Pool Safety** (9 products): Life jackets, buoy rings, rescue equipment, lifeguard chairs
- **Camp & Staff Supplies** (2 products): Staff Equipment, Roadside Safety
- **Total:** 22 products

## Project Structure

```
/
├── public/images/
│   ├── brands/           # Brand logos (~45 files)
│   ├── machinery/        # Machinery images (8 category folders)
│   └── furniture/        # Outdoor images (4 category folders)
│
├── src/
│   ├── components/
│   │   ├── machinery/    # Machinery-specific components
│   │   └── furniture/    # Outdoor-specific components
│   ├── data/
│   │   ├── brands.ts     # Brand logos mapping
│   │   ├── machinery.ts  # Machinery data (64 items)
│   │   └── outdoor.ts    # Outdoor data (22 items)
│   ├── layouts/
│   │   ├── MachineryLayout.astro
│   │   └── FurnitureLayout.astro
│   └── pages/
│       ├── index.astro   # Root hub
│       ├── machinery/    # Machinery pages
│       └── furniture/    # Outdoor pages
```

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Design Notes

- **Machinery Theme:** Gold/Navy (#d4af37, #1a1a2e)
- **Outdoor Theme:** Emerald green (#10b981, #2D5A5A)
- **Banner Overlays:** 50% opacity gradient on hero images
- **Product Specs:** Generic (products for illustration, orders customizable)

---

**Last Updated:** 2025-12-04
