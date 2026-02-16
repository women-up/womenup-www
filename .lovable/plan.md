

# Women Up! — Website Implementation Plan

## Overview
A complete, responsive website for "Women Up!" — a Polish women's social initiative association from Podlasie. The design features a warm, culturally authentic aesthetic with Slavic folk art cross-stitch motifs, cream backgrounds, and deep Polish red accents.

---

## Phase 1: Foundation & Design System

### Brand Setup
- Configure Tailwind with the full brand color palette (red #C41A2C, cream #F5F0E8, warm brown #2D2016, etc.)
- Import Google Fonts: **Cormorant Garamond** (headings) and **Inter** (body text)
- Set up typography scale (H1=56px down to Caption=12px)
- Copy the cross-stitch diamond SVG logo into the project assets

### Reusable Components
- **Cross-stitch top border** — thin repeating pixel pattern strip at page top
- **Diamond section dividers** — decorative line with centered diamond symbol
- **Brand buttons** — Primary (red), Secondary (outlined), Ghost styles with sharp 2px corners
- **Brand cards** — White surface, warm border, subtle corner decorations
- **Navbar** — Sticky cream header with logo, nav links, mobile hamburger menu, and "DOŁĄCZ DO NAS" CTA
- **Footer** — Dark warm brown with cross-stitch border, 4-column layout, social links

---

## Phase 2: Strona Główna (Homepage)

### Hero Section
- Full-width cream background with subtle cross-stitch pattern overlay
- Headline: "Waleczne · Sprawcze · Niezależne" in elegant serif
- Association description and two CTA buttons

### Kim Jesteśmy (Who We Are)
- Two-column layout: mission text + 2×3 grid of value cards with icons (HandHeart, Flame, Sprout, Users, DoorOpen, Scale)

### Nasze Inicjatywy (Our Initiatives)
- Three initiative cards: Dla Psiaków, Moc Podlasia, Kobiety Razem
- Each with icon, description, and "Dowiedz się więcej" link
- CTA to start your own initiative

### Aktualności (News)
- Three placeholder news cards with dates, titles, excerpts

### Social Media Section
- Facebook and Instagram placeholder cards with styled embed areas

### Dołącz CTA Band
- Full-width red background section with white text and contact button

---

## Phase 3: Subpages

### O Nas (/o-nas)
- Association history, expanded mission & values, team member cards (placeholders), statute download link

### Inicjatywy (/inicjatywy)
- Filter tabs (Wszystkie, Aktywne, Planowane)
- Grid of expandable initiative cards
- CTA to start a new initiative

### Aktualności (/aktualnosci)
- Blog-style post grid (2 columns desktop, 1 mobile)
- Category tags, pagination, sidebar with recent posts

### Kontakt (/kontakt)
- Contact form (name, email, topic dropdown, message) with validation
- Contact info cards (email, phone, address, social media)
- Map placeholder

### Dołącz (/dolacz)
- 3-step process explanation
- How to start your own initiative
- Contact form CTA

---

## Phase 4: Polish & Responsiveness

- Mobile-first responsive design across all pages
- Smooth scroll behavior, proper semantic HTML
- Accessible form labels and 44px minimum tap targets
- Cross-stitch decorative elements consistently applied
- Font size scaling for mobile (~20% reduction)
- Card grids: 3 → 2 → 1 column breakpoints

---

## Design Principles
- 🎨 **Cream backgrounds** (#F5F0E8), never plain white for page backgrounds
- 🔴 **Red accents** for headings, buttons, and decorative elements
- ✏️ **Sharp geometric corners** (2px radius) — not rounded or bubbly
- 🧵 **Cross-stitch motifs** subtly woven throughout as section dividers, borders, and patterns
- 🌿 **Warm, cultural, community-focused** — not corporate or startup-y
- 📱 All content in **Polish language**
- No backend needed — purely informational static site

