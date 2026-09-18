# Explore Wings — Frontend Design System

> **Source files analyzed:** `src/components/Hero.jsx`, `src/components/Navbar.jsx`, `src/pages/Resorts.jsx`
> **Purpose:** This document captures the complete visual design language, styling patterns, and component specifications of the new UI so all future sections stay consistent.

---

## 1. Brand Overview

**Explore Wings** is a travel company UI with a **light, airy, hand-crafted** aesthetic. The design blends:
- **Skeuomorphic glass** cards with subtle depth, sheen, and inner shadows
- **Hand-drawn / scrapbook elements** (torn-paper notes, polaroid photos, custom cursive font)
- **Soft nature-inspired gradients** (cream → mint)
- **Playful micro-interactions** (hover lifts, sheen sweeps, fade-in-up entrances)

---

## 2. Color Palette

### 2.1 Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Navy** | `#0d2a49` | Primary text, borders, shadows, dark accents |
| **Teal** | `#1791ab` | Brand accent — highlights, icons, links, logo |
| **Cream** | `#fbfaf6` | Page background (top of hero gradient), navbar bg |
| **Mint** | `#eef6f5` | Secondary background (bottom of hero gradient) |
| **White** | `#ffffff` | Cards, polaroids, sticky notes, icon badges |
| **Amber/Gold** | `#f2b84b` | Accent (heart icon in torn note) |

### 2.2 Opacity Variants (Navy `#0d2a49`)

| Variant | Usage |
|---------|-------|
| `#0d2a49/60` | Subtitle text |
| `#0d2a49/55` | Navbar tagline |
| `#0d2a49/20` | Mobile menu backdrop overlay |
| `#0d2a49/18` | Card bottom border |
| `#0d2a49/15` | Navbar scrolled border, mobile drawer handle |
| `#0d2a49/12` | Card inner shadow |
| `#0d2a49/10` | Mobile drawer border, mobile menu divider |
| `#0d2a4933` | Card corner-dot border (hex with alpha) |

### 2.3 Gradient & Glass Recipes

**Hero background:**
```
linear-gradient(to bottom, #fbfaf6 0%, #eef6f5 100%)
```

**Icon badge / card icon circle background:**
```
linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7))
```

**Hero card inner background:**
```
linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 10%),
linear-gradient(155deg, #fbfaf6 0%, #eef6f5 100%)
```

**Card sheen (hover sweep):**
```
linear-gradient(100deg,
  rgba(255,255,255,0) 0%,
  rgba(255,255,255,0.55) 45%,
  rgba(255,255,255,0.08) 60%,
  rgba(255,255,255,0) 100%)
```

---

## 3. Typography

### 3.1 Custom Font

```css
@font-face {
  font-family: "Cream Cake";
  src: url("/Cream%20Cake.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Font stack (fallback chain):**
```
"Cream Cake", "Caveat", "Segoe Script", cursive
```

### 3.2 Type Scale

| Element | Size | Weight | Other |
|---------|------|--------|-------|
| **Hero H1** | `text-4xl` → `sm:text-6xl` → `lg:text-6xl` | normal | `leading-[1.05]`, `tracking-tight` |
| **Hero subtitle** | `text-base` → `sm:text-lg` | normal | `leading-relaxed`, `max-w-xl` |
| **Card label** | `1.55rem` → `1.95rem` (≥640px) | normal | `line-height: 1`, `letter-spacing: 0.01em`, Cream Cake font |
| **Nav logo** | `text-3xl` | normal | Cream Cake font, `tracking-wide` |
| **Nav tagline** | `text-[10px]` | normal | — |
| **Nav links** | `text-sm` | `font-medium` | — |
| **Torn note** | `1.1rem` → `1.3rem` (≥640px) | normal | `line-height: 1.25`, Cream Cake font |
| **Mobile menu links** | `text-base` | `font-medium` | — |

### 3.3 Text Colors

- **Headline:** `#0d2a49` with "Explore Wings" highlighted in `#1791ab`
- **Subtitle:** `#0d2a49/60`
- **Card labels:** `#1791ab` with `text-shadow: 0 1px 0 rgba(255,255,255,0.6)`
- **Nav links:** `#0d2a49`
- **Torn note text:** `#0d2a49`
- **Torn note underline:** `#1791ab`

---

## 4. Layout & Spacing

### 4.1 Global Container

```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### 4.2 Navbar Structure

- **Position:** `fixed top-0 inset-x-0 z-50`
- **Height:** `h-16` (64px)
- **Grid:** `grid-cols-[1fr_auto]` → `lg:grid-cols-[1fr_auto_1fr]`
- **Columns:**
  - Left: Logo (justify-self-start)
  - Center (desktop only): Nav links
  - Right: Social icons + hamburger (justify-self-end)

### 4.3 Hero Structure

- **Section:** `relative flex min-h-screen w-full items-center overflow-hidden`
- **Padding:** `pt-24 sm:pt-24 lg:pt-28` / `pb-16 sm:pb-20 lg:pb-24`
- **Grid:** `grid-cols-1 gap-20 md:grid-cols-12 md:gap-28`
  - **Left column:** `md:col-span-7` — headline, subtitle, category cards
  - **Right column:** `md:col-span-5` — photo collage (hidden on mobile)

### 4.4 Spacing Rhythm

- Headline → subtitle: `mt-5`
- Subtitle → cards: `mt-8 sm:mt-10`
- Card gap (mobile): `flex-col gap-5`
- Card gap (desktop): `sm:flex-row sm:flex-wrap sm:items-center sm:gap-6`
- Nav link padding: `px-3.5 py-2`
- Nav link gap: `gap-1`
- Social icon gap: `gap-3`

---

## 5. Component Specifications

### 5.1 Navbar

#### States
| State | Background | Border | Shadow |
|-------|-----------|--------|--------|
| **Top (not scrolled)** | `bg-[#fbfaf6]` | `border-transparent` | none |
| **Scrolled (scrollY > 10)** | `bg-[#fbfaf6]` | `border-[#0d2a49]/15` | `shadow-[0_2px_16px_rgba(13,42,73,0.08)]` |

- Transition: `transition-all duration-300`

#### Logo
- Text: **"Explore wings"** — `text-3xl`, `text-[#1791ab]`, Cream Cake font, `tracking-wide`
- Tagline: **"Your Journey, Our Passion"** — `text-[10px]`, `text-[#0d2a49]/55`, hidden on mobile (`hidden sm:block`)

#### Nav Links (Desktop)
- Items: `Home`, `Packages`, `Resorts`, `About`, `Contact`
- Style: `px-3.5 py-2 text-sm font-medium text-[#0d2a49]`
- Container: `hidden lg:flex items-center gap-1`

#### Social Icon Badges
- **Size:** 34×34px circle (`border-radius: 999px`)
- **Background:** `linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7))`
- **Border:** `1px solid rgba(255,255,255,0.7)`
- **Box-shadow:**
  ```
  inset 0 1.5px 0 rgba(255,255,255,0.9),
  inset 0 -2px 4px -2px rgba(13,42,73,0.14),
  0 2px 6px rgba(13,42,73,0.18)
  ```
- **Active state:** `transform: scale(0.94)`
- **Icons:** Instagram 28×28px, Facebook 22×22px (SVG images)

#### Mobile Hamburger
- **Closed:** `plane.svg` image, 20×20px, `rotate-45`
- **Open:** `X` icon from lucide-react, 24×24px
- Container: `lg:hidden grid place-items-center nav-icon-badge`

#### Mobile Menu (Slide-up Drawer)
- **Overlay:** `bg-[#0d2a49]/20 backdrop-blur-sm`, full screen, `z-40`
- **Drawer:** bottom-anchored, `bg-white/95 backdrop-blur-xl rounded-t-3xl`
- **Shadow:** `shadow-[0_-8px_30px_rgba(13,42,73,0.18)]`
- **Border:** `border-t border-[#0d2a49]/10`
- **Handle:** centered pill `h-1.5 w-12 rounded-full bg-[#0d2a49]/15`
- **Links:** `block px-4 py-3 text-[#0d2a49] font-medium text-base rounded-xl`, staggered animation delay `(index * 50)ms`
- **Socials:** Instagram 28×28px, Facebook 20×20px, separated by `border-t border-[#0d2a49]/10`, `space-x-5`
- **Animation:** `translate-y-full` → `translate-y-0`, `transition-transform duration-300 ease-out`

---

### 5.2 Hero

#### Background
- `bg-gradient-to-b from-[#fbfaf6] to-[#eef6f5]`
- `overflow-hidden` to contain decorative elements

#### Headline
```
Explore the World
with **Explore Wings**   ← "Explore Wings" in #1791ab
```

#### Subtitle
> "From breathtaking landscapes to vibrant cultures, we craft unforgettable journeys just for you."

#### Category Cards (Resorts / Packages)

**Card container (`.hero-card`):**
- `display: inline-block`, no text-decoration
- **Rest shadow:**
  ```
  drop-shadow(0 10px 8px rgba(13,42,73,0.12))
  drop-shadow(0 22px 18px rgba(13,42,73,0.10))
  ```
- **Hover:** `translateY(-6px) rotate(0deg) scale(1.03)`
- **Hover shadow:**
  ```
  drop-shadow(0 16px 12px rgba(13,42,73,0.16))
  drop-shadow(0 30px 24px rgba(13,42,73,0.14))
  ```
- Transition: `transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease`

**Card inner (`.hero-card-inner`):**
- **Size:** full width, `min-height: 168px` → `268×188px` (≥640px)
- **Radius:** `14px` → `16px` (≥640px)
- **Background:** dual gradient (see §2.3)
- **Backdrop:** `blur(4px)`
- **Border:** `1px solid rgba(255,255,255,0.7)` + `border-bottom: 1px solid rgba(13,42,73,0.18)`
- **Inner shadows:**
  ```
  inset 0 1.5px 0 rgba(255,255,255,0.85),
  inset 0 -3px 6px -3px rgba(13,42,73,0.12),
  inset 2px 0 5px -4px rgba(255,255,255,0.5),
  inset -2px 0 5px -4px rgba(13,42,73,0.1)
  ```

**Sheen (`.hero-card-sheen`):**
- Diagonal white gradient strip, `rotate(8deg)`, positioned `top: -50%, left: -25%`
- On hover: `left: 90%` (sweeps across), `transition: left 0.6s ease`

**Corner dots (`.hero-card-dot`):**
- 8×8px, `border-radius: 25%`, white with radial gradient bottom shadow
- Border: `1px solid #0d2a4933`
- Positioned at top-left and top-right, half-outside the card edge

**Card top row:**
- Label (Cream Cake font, teal) + icon circle (34×34px → 40×40px ≥640px)
- Icon circle: same glass gradient as nav badges, `border-radius: 999px`
- Icons: 18×18px → 21×21px (≥640px), `color: #1791ab`, `stroke-width: 2`
  - **Resorts:** `Sun` icon (lucide-react)
  - **Packages:** `GiEarthAfricaEurope` icon (react-icons/gi)

**Card image area:**
- Mobile: static flow below top row
- Desktop (≥640px): `position: absolute`, `height: 56%`, anchored bottom
- Image: `object-fit: contain`, `object-position: center bottom`
- **Resorts image:** `/images/illu1.svg` (beach getaway)
- **Packages image:** `/images/illu3.svg` (mountain adventure)

#### Right Column — Photo Collage (desktop only, `hidden md:block`)

**Container:** `relative h-[420px] sm:h-[460px] md:h-[500px]`

**Background illustration:**
- `/images/illu5.svg` — blob, leaves, clouds, sun, plane, droplets
- `absolute inset-0 -z-10 h-full w-full object-contain scale-110`, `pointer-events-none`

**Polaroid frames (`.polaroid`):**
- Plain white, `padding: 10px`, `border-radius: 4px`
- **Shadow:**
  ```
  0 18px 30px -10px rgba(13,42,73,0.28),
  0 6px 12px -4px rgba(13,42,73,0.16)
  ```
- **Photo:** `object-fit: cover`, `border-radius: 1px`

| Polaroid | Position | Size (base) | Size (≥640px) | Size (≥768px) | Rotation | Z-index |
|----------|----------|-------------|---------------|---------------|----------|---------|
| **Top** | `left: 50%, top: 8px` | 166×198px | 190×226px | 206×246px | `-1deg` | 3 |
| **Left** | `left: 44px, bottom: 48px` | 136×158px | 154×180px | 166×196px | `-4deg` | 2 |
| **Right** | `right: 44px, bottom: 70px` | 150×172px | 170×196px | 186×212px | `2deg` | 4 |

**Torn-paper sticky note (`.torn-note`):**
- **Position:** `left: 42%, bottom: 4px`, `translateX(-50%) rotate(-3deg)`, `z-index: 5`
- **Size:** 168px wide → 190px (≥640px)
- **Background:** white, `padding: 0.6rem 0.9rem 0.7rem` → `0.7rem 1.1rem 0.8rem` (≥640px)
- **Torn edges:** `clip-path` polygon with 20 jagged points (top & bottom edges)
- **Shadow:**
  ```
  0 10px 18px -6px rgba(13,42,73,0.24),
  0 3px 6px -2px rgba(13,42,73,0.15)
  ```
- **Content:** "Collect Moments ❤ Not Things" (heart icon in `#f2b84b`, 14×14px)
- **Underline:** hand-drawn SVG squiggle, 70×8px, `color: #1791ab`

---

## 6. Animations & Transitions

### 6.1 Hero Entrance (on load)
- **Left column:** `translate-y-6 opacity-0` → `translate-y-0 opacity-100`, `duration-500`
- **Right column:** same, plus `delay-100`
- Triggered via `useEffect` → `setIsLoaded(true)`

### 6.2 Card Hover
- Lift: `translateY(-6px) scale(1.03)`
- Shadow deepens (see §5.2)
- Sheen sweeps left → right (`left: -25%` → `90%`)

### 6.3 Navbar Scroll
- `scrollY > 10` → transparent border becomes `#0d2a49/15` + soft shadow
- `transition-all duration-300`

### 6.4 Icon Badge Press
- `transform: scale(0.94)` on `:active`

### 6.5 Mobile Menu
- Drawer slides up: `translate-y-full` → `translate-y-0`
- Links stagger in with `fade-in-up` keyframes (0.3s ease-out), `animationDelay: index * 50ms`

### 6.6 Keyframes
```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## 7. Icons & Assets

### 7.1 Icon Libraries
| Library | Icons Used |
|---------|------------|
| `lucide-react` | `Heart`, `Sun`, `X` |
| `react-icons/gi` | `GiEarthAfricaEurope` |

### 7.2 Image Assets (public/images/)
| Asset | Usage |
|-------|-------|
| `illu1.svg` | Resorts card image (beach) |
| `illu3.svg` | Packages card image (mountain) |
| `illu5.svg` | Hero collage background (blob, leaves, clouds, sun, plane, droplets) |
| `instagram.svg` | Social icon (28px desktop, 28px mobile menu) |
| `facebook.svg` | Social icon (22px desktop, 20px mobile menu) |
| `plane.svg` | Mobile hamburger icon (20px, rotated 45°) |
| `Cream Cake.otf` | Custom display font (root `/`) |

---

## 8. Responsive Breakpoints

| Breakpoint | Key Changes |
|------------|-------------|
| **Base (mobile)** | Single column; cards stack vertically; collage hidden; hamburger visible |
| **≥640px (sm)** | Cards fixed 268×188px; card labels 1.95rem; polaroids grow; torn note grows; tagline visible |
| **≥768px (md)** | Two-column grid (7/5 split); collage appears; polaroids grow again |
| **≥1024px (lg)** | Nav links centered; socials visible; hamburger hidden; larger hero padding |

---

## 9. Design Principles (for future sections)

1. **Light & airy** — cream/mint gradients, generous whitespace, `min-h-screen` hero
2. **Glass skeuomorphism** — layered inner/outer shadows, subtle blur, white borders
3. **Hand-crafted feel** — Cream Cake font, torn edges, polaroids, hand-drawn underline, slight rotations
4. **Playful depth** — hover lifts, sheen sweeps, drop shadows with navy tint
5. **Consistent accent** — `#1791ab` teal for all interactive/highlight elements
6. **Navy for structure** — `#0d2a49` for text, borders, and shadow tints
7. **Circular icon badges** — 34px glass circles for all icon buttons
8. **Smooth motion** — 300–500ms transitions, cubic-bezier easing, staggered entrances

---

## 10. Resorts Page (src/pages/Resorts.jsx)

A **grid + detail-drawer** data page fed by Supabase. It reuses the global light/airy system
(cream→mint canvas, navy structure, teal accent) but pushes it toward a **tighter, flatter,
more modern expression**:

- **Squared corners everywhere** — cards, images, buttons, and pills use `rounded-md` (6px),
  never `rounded-3xl`. Detail drawer is fully rectangular.
- **Zero-hover-glow rule** — hover feedback is *motion only* (lift + scale + arrow slide +
  image zoom). No color/shadow blooming on hover.
- **Header typography recipe for all titles** — normal weight (no `font-bold`), `leading-[1.05]`,
  `tracking-tight`; used for page header, card titles, price, drawer title, and section headings.
- **White text only** on teal fills or over photo scrims.

### 10.1 Page Canvas

- **Background:** `bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)]` (global hero gradient).
- **Fixed ambient orbs** (`fixed inset-0 pointer-events-none`): three blurred circles,
  `from-[#1791ab]/10 via-[#eef6f5]/50 to-transparent` (center one `#fbfaf6/50`), `animate-pulse`,
  staggered 0s / 1s / 2s. Teal/mint only — no red or magenta.
- **Container:** `max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24`
- **Header:** `text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49]`,
  accent word in `text-[#1791ab]` (`Our <span teal>Resorts</span>`).

### 10.2 Search Bar (glass input)

- `max-w-xl mx-auto mb-8 md:mb-12 px-4`
- Input: `bg-white/70 backdrop-blur-md border-white/60 rounded-2xl text-[#0d2a49]`
  `placeholder-[#0d2a49]/40`, navy glass shadow, `focus:ring-2 focus:ring-[#1791ab]`.
- Leading icon: `FiSearch` in `text-[#0d2a49]/40`, `left-4`, vertically centered.

### 10.3 Resort Card

**Skeleton (loading):** cream glass card with `#0d2a49/10` placeholder blocks, `animate-pulse`.

**Card shell:**
```
bg:      linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 10%),
         linear-gradient(155deg, #fbfaf6 0%, #eef6f5 100%)
border:  border-white/70 · radius: rounded-md · padding: p-4 md:p-6
shadow:  inset 0 1.5px 0 rgba(255,255,255,0.85),
         inset 0 -3px 6px -3px rgba(13,42,73,0.12),
         0 8px 8px rgba(13,42,73,0.10),
         0 16px 14px rgba(13,42,73,0.08)
hover:   -translate-y-1.5 scale-[1.03] + deeper navy shadow
         (NO glow, NO sheen — intentionally removed)
```

**Image block (non-clipping wrapper + clipped image):**
- Wrapper: `relative h-48 mb-6` (no clip) — lets the rating badge keep a **sharp** outer corner.
- Image: `h-48 rounded-md overflow-hidden border-white/70`, small navy shadow.
- Hover: image zooms `scale-110` (700ms); dark scrim `from-black/40` fades in (hover only).

**Rating badge (corner tab) — top-right of card image:**
- `absolute top-0 right-0 z-10`, `bg-[#fbfaf6]` (matches card surface), `rounded-bl-md`
  (only the inner corner rounds), `pl-3 pr-2.5 py-1.5`.
- Star (`text-[#f2b84b] fill-[#f2b84b]`, w-4) + rating in `text-sm font-semibold text-[#0d2a49]`.
- Left as a **flat** badge: no border, no shadow, no gradient (per product preference).

**Card content:**
- **Title:** `truncate min-w-0 flex-1 text-lg text-[#0d2a49] leading-[1.05] tracking-tight`
  (single line, one-dot ellipsis); row `min-h-[3rem]` keeps equal card heights.
- **Row:** price (teal `text-2xl leading-[1.05] tracking-tight`) + **View button**.
- **View button — cyan glass** (depth recipe for light surfaces):
  ```
  bg: rgba(23,145,171,0.62)   /* on light card, ≤35% tint is invisible — 62% min */
  blur: backdrop-blur-[10px]
  border: border-white/40 · radius: rounded-md
  shadow: 0 8px 24px rgba(13,42,73,0.25)
  text:   white (font-bold), icon MdOutlineDoubleArrow (react-icons/md)
  hover:  arrow slides right — NO color/shadow change
  active: scale(0.95)
  ```

### 10.4 Pagination

- Container: `flex justify-center items-center gap-2 mt-[90px]`.
- **Active page:** `bg-[#1791ab] text-white rounded-xl shadow-[0_8px_8px_rgba(23,145,171,0.30)]`
  (40×40px).
- **Inactive:** `bg-white/70 text-[#0d2a49]/70 border-white/60 hover:bg-white hover:text-[#0d2a49]`.
- **Disabled prev/next:** `bg-white/50 text-[#0d2a49]/30 cursor-not-allowed`.
- Ellipsis: `text-[#0d2a49]/40`.
- Rule: 12 cards/page; search filters title + description and resets to page 1.

### 10.5 Resort Details Drawer (replaces modal on all screens)

Right-side drawer built with framer-motion `<motion.aside>` + Swiper.

**Overlay:** `fixed inset-0 z-50 bg-[#0d2a49]/20 backdrop-blur-sm` — click closes.
**Panel:** `fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[520px]` — fully rectangular
(no rounded corners), `bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)]`,
`border-l border-white/70`, `shadow-[-16px_0_40px_rgba(13,42,73,0.18)]`.
**Motion:** slides from right `x: 100% → 0`, spring `{ damping: 30, stiffness: 300 }`.
**Behavior:** Escape closes; `document.body` scroll locks while open; scrollbar hidden.

**Layout (top → bottom):**
1. **Image swiper** — `h-56 sm:h-72 overflow-hidden`, Swiper 1 slide at a time,
   autoplay 5s, per-slide dark scrim `from-black/60 via-black/20`.
2. **Rating badge — bottom-left of image:** same corner-tab recipe as card
   (`bg-[#fbfaf6] rounded-tr-md`, flush `bottom-0 left-0`).
3. **Nav + price row:** price left (`text-2xl text-[#1791ab]` + `text-sm` "/ night"),
   two **skeuomorphic circular nav buttons** right (`.resort-nav-btn`, 42px):
   ```
   background: linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7))
   border: 1px solid rgba(255,255,255,0.7) · radius: 999px
   shadow:  inset 0 1.5px 0 rgba(255,255,255,0.85),
            0 4px 8px rgba(13,42,73,0.15)
   arrows:  teal chevrons (swiper ::after, 15px/800)
   hover:   translateY(-2px) + deeper navy shadow
   active:  scale(0.94) · disabled: opacity 0.35
   ```
   They are real Swiper `navigation` elements (`.swiper-button-prev/next`) with
   `position: static !important`.
4. **Divider** — `border-t border-[#0d2a49]/10`, inset `mx-5 sm:mx-6 mt-5`.
5. **Title** — `text-xl md:text-2xl text-[#0d2a49] leading-[1.05] tracking-tight`.
6. **About This Resort** — heading in title recipe; **hairline divider** `mb-4`; then
   plain paragraph (`text-[#0d2a49]/70 leading-relaxed text-base`) — **no glass card**,
   keeps drawer light and spare.
7. **Sticky action footer** — `fixed bottom-0 right-0 same widths z-40`,
   `bg-[hero-gradient]/90 backdrop-blur-xl border-t border-[#0d2a49]/10 px-5 sm:px-6 py-4`,
   `flex gap-3` (default `items-stretch` so both buttons are equal height):
   - **Book through WhatsApp** — `flex-1`, the cyan-glass recipe from §10.3,
     label in title typography (normal weight, `leading-[1.05] tracking-tight`), opens
     `wa.me/<phone>?text=<prefilled message>`.
   - **Dialer** — `w-[52px] self-stretch`, **icon-only** lucide `Phone` (white, w-5),
     opens `tel:+918921309190`.
   - Content carries `pb-28` so nothing hides behind the fixed footer.

### 10.6 Motion & Feedback (page re-caps)

- Entrance: header `y:-20/0`; search `y:-20/0 @0.2s`; pagination `y:20/0 @0.4s`;
  cards stagger `y:20→0` at `0.1s` steps (framer-motion variants).
- Press feedback: `scale(0.95)` on every interactive element.
- Scroll-to-top with smooth fallback on page change / data load.
- No hover shadows that "bloom" — only geometry (translate/scale) depth changes.