# Wadi Al Sadaf - Site Structure Documentation

## 🎯 KEY CONCEPT: Two Separate Website "Domains"

This is NOT a single website with multiple sections. This is **TWO INDEPENDENT WEBSITES** sharing the same root domain:

1. **Machinery Website** at `/machinery/*`
2. **Furniture Website** at `/furniture/*` (future)
3. **Root Hub** at `/` - Simple page with 2 tiles linking to each domain

Each domain has:
- Its own homepage (landing page)
- Its own navigation (Home = their homepage)
- Its own header/footer components
- Its own brand colors
- Its own About Us story
- Completely separate content

---

## URL Structure

### Root Hub (Future - On Hold)
```
/                           → Simple hub with 2 tiles: Machinery | Furniture
                              NO navbar, just contact details
```

### Machinery Domain (Complete Website #1)
```
/machinery/                 → MACHINERY HOMEPAGE (landing page with Mission/Vision)
├── /machinery/products/           → Products listing (3 category tiles)
│   ├── /machinery/electrical/            → Electrical category (8 products)
│   │   ├── /machinery/electrical/vfd/                → Product detail
│   │   ├── /machinery/electrical/motors/
│   │   └── ... (8 products total)
│   ├── /machinery/automation/            → Automation category (8 products)
│   │   ├── /machinery/automation/plc/
│   │   ├── /machinery/automation/hmi/
│   │   └── ... (8 products total)
│   └── /machinery/instrumentation/       → Instrumentation category (8 products)
│       ├── /machinery/instrumentation/flow-instruments/
│       └── ... (8 products total)
├── /machinery/about/              → About Us (machinery-specific story)
└── /machinery/contact/            → Contact page
```

**Machinery Navigation:**
```
Home (=/machinery/) | Products | About Us | Contact | [Request Quote Button]
```

### Furniture Domain (Complete Website #2 - Future)
```
/furniture/                 → FURNITURE HOMEPAGE (landing page with Mission/Vision)
├── /furniture/products/           → Products listing
│   └── [categories...]
├── /furniture/about/              → About Us (furniture-specific story)
└── /furniture/contact/            → Contact page
```

**Furniture Navigation:**
```
Home (=/furniture/) | Products | About Us | Contact | [Request Quote Button]
```

---

## Component Architecture

### Separate Components Per Domain

```
src/components/
├── machinery/
│   ├── Header.astro        → Home links to /machinery/, gold branding
│   ├── Footer.astro        → Machinery-specific footer
│   └── Breadcrumbs.astro
├── furniture/
│   ├── Header.astro        → Home links to /furniture/, different color
│   ├── Footer.astro        → Furniture-specific footer
│   └── Breadcrumbs.astro
└── shared/
    └── HubTile.astro       → For root hub page tiles
```

### Separate Layouts Per Domain

```
src/layouts/
├── BaseLayout.astro         → Basic HTML wrapper (for root hub)
├── MachineryLayout.astro    → Machinery domain (uses machinery/Header + Footer)
└── FurnitureLayout.astro    → Furniture domain (uses furniture/Header + Footer)
```

---

## Page Type Breakdown

### 1. ROOT HUB (`/`)

**Purpose:** Entry point to choose which website to visit

**Content:**
- Minimal branding (logo, company name)
- 2 large tiles:
  - "Machinery" tile → links to `/machinery/`
  - "Furniture" tile → links to `/furniture/`
- Contact details at bottom
- **NO navigation bar**

---

### 2. MACHINERY HOMEPAGE (`/machinery/`)

**Purpose:** Homepage of the machinery website domain

**Content:**
- Hero banner with logo and tagline
- About Us section
- Mission & Vision cards
- Why Choose Us (4 features)
- Industries We Serve badges
- CTA section with "Browse Products" button → `/machinery/products/`

**Navigation:**
- Home (highlighted, links to `/machinery/`)
- Products → `/machinery/products/`
- About Us → `/machinery/about/`
- Contact → `/machinery/contact/`

---

### 3. MACHINERY PRODUCTS PAGE (`/machinery/products/`)

**Purpose:** Shows 3 product categories for machinery

**Content:**
- Hero section
- Industries badges
- 3 category cards:
  - Electrical → `/machinery/electrical/`
  - Automation → `/machinery/automation/`
  - Instrumentation → `/machinery/instrumentation/`
- CTA section

**Navigation:**
- Home → `/machinery/`
- Products (highlighted)
- About Us
- Contact

---

### 4. CATEGORY PAGE (`/machinery/electrical/`)

**Purpose:** Shows 8 products in a category

**Content:**
- Breadcrumbs: Home > Products > Electrical
- Category hero image
- Grid of 8 product cards
- Each card links to product detail page

**Navigation:**
- Home → `/machinery/`
- Products (highlighted because we're in products section)
- About Us
- Contact

---

### 5. PRODUCT DETAIL PAGE (`/machinery/electrical/vfd/`)

**Purpose:** Individual product information

**Content:**
- Breadcrumbs: Home > Products > Electrical > VFD
- Product image
- Product name and description
- Specifications
- Brands
- Request Quote CTA
- Related products

**Navigation:**
- Same as category page

---

## Brand Colors

### Machinery Domain
```css
--brand-gold: #9C7F4F        /* Primary */
--brand-gold-light: #D4AF37  /* Accent */
--brand-gold-dark: #7A6338   /* Hover */
--brand-cream: #F5F2E8       /* Light BG */
```

### Furniture Domain (To Be Defined)
```css
--furniture-primary: TBD
--furniture-secondary: TBD
--furniture-light: TBD
```

---

## Data Structure

```typescript
// src/data/machinery.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  products: Product[];
  brands?: string[];
}
```

---

## Navigation Highlighting Logic

### Machinery Header:
- **Home**: Highlighted when `currentPath === '/machinery/' || currentPath === '/machinery'`
- **Products**: Highlighted when `currentPath.startsWith('/machinery/products')` OR `currentPath.startsWith('/machinery/electrical')` OR `currentPath.startsWith('/machinery/automation')` OR `currentPath.startsWith('/machinery/instrumentation')`
- **About Us**: Highlighted when `currentPath === '/machinery/about/'`
- **Contact**: Highlighted when `currentPath === '/machinery/contact/'`

### Furniture Header (Same pattern):
- **Home**: Highlighted when on `/furniture/`
- **Products**: Highlighted when in furniture products/categories
- etc.

---

## Key Design Decisions

### Why Separate Components?
- Each domain is completely independent
- Different branding, colors, and content
- Navigation "Home" means different things in each domain
- Easier to maintain and modify independently
- Can have different layouts/styles per domain

### Why NOT Share Header/Footer?
- "Home" button behavior is different per domain
- Brand colors are different
- Footer content is domain-specific
- Avoids complex conditional logic in shared components

### Why Subfolders Instead of Subdomains?
- Shares SEO authority
- Single codebase, single deployment
- Easier analytics
- Better user experience with consistent URLs

---

## Image Organization

```
public/images/
├── logo.jpeg                    # Shared logo
├── machinery/
│   ├── electrical/
│   │   ├── hero.png            # Category hero
│   │   ├── vfd.png             # Product images
│   │   ├── motors.png
│   │   └── ... (8 products)
│   ├── automation/
│   │   ├── automation-hero.png
│   │   └── ... (9 images)
│   └── instrumentation/
│       └── ... (partially complete)
└── furniture/
    └── (future)
```

---

## Implementation Status

### ✅ Completed:
1. Brand colors configured
2. Product data structure
3. Images organized (Electrical & Automation complete)
4. **MachineryLayout** with separate Header/Footer
5. `/machinery/` homepage with full landing page
6. `/machinery/products/` with 3 category tiles
7. Navigation highlighting working correctly
8. Root `/` simple homepage

### 🚧 In Progress:
- Documentation updates

### ⏳ To Do:
9. Category pages (`/machinery/electrical/`, etc.)
10. Product detail pages
11. About page (`/machinery/about/`)
12. Contact page (`/machinery/contact/`)
13. Instrumentation images (6 missing)
14. Furniture domain (complete separate website)

---

## User Flow Examples

### Example 1: Direct to Machinery
1. User goes to `wadialsadaf.com/machinery/`
2. Sees full landing page with Mission/Vision
3. Clicks "Browse Products"
4. Goes to `/machinery/products/`
5. Clicks "Electrical" category
6. Goes to `/machinery/electrical/`
7. Clicks "VFD" product
8. Goes to `/machinery/electrical/vfd/`

Throughout this flow, "Home" in nav always goes back to `/machinery/`

### Example 2: From Root Hub
1. User goes to `wadialsadaf.com/`
2. Sees 2 tiles: Machinery | Furniture
3. Clicks "Machinery" tile
4. Goes to `/machinery/` (enters machinery domain)
5. Now in machinery website, all navigation is machinery-specific

---

## Future: Medical Domain

When adding medical:
1. Create `/medical/` domain
2. Create `src/components/medical/Header.astro` and `Footer.astro`
3. Create `src/layouts/MedicalLayout.astro`
4. Add medical tile to root hub
5. Same pattern as machinery and furniture

---

**Last Updated:** 2025-11-24

**Key Insight:** Think of `/machinery/` and `/furniture/` as two different websites that happen to share a domain, not as sections of one website.
