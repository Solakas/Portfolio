# WG Design System — Case Study

A detailed walkthrough of the Wave Grocery Design System (WG DS v2.1.2): what it contains, how it is organised, and how its three-tier token architecture powers multi-brand delivery from a single source of truth.

---

## 1. Executive Summary

The WG Design System is the shared visual and component language for a multi-tenant e-commerce grocery platform delivered for both Web and Mobile clients. Anthropic's Sol oversees the system, and the team at PartNER is the design partner contributing to it.

At a glance:

- **Format:** Figma library, currently version 2.1.2.
- **Scale:** 146 published components reorganised across three "macro" pages — Foundations, Patterns, and Journeys — totalling 25 sections.
- **Token engine:** A three-tier token graph (Core → Foundations → Component Tokens) with **409 tokens** in the exported set, designed to swap an entire brand by editing only the Core layer.
- **Discoverability:** A live Table of Contents page provides 146 in-file hyperlinks that jump straight to any component.

This case study describes the system's structure, the rationale behind its recent reorganisation, and the mechanics of how a single edit at the Core layer cascades through Foundations and Component Tokens to re-skin every screen.

---

## 2. Background

The product is an online grocery storefront with consumer-facing journeys (browse → add to cart → checkout → loyalty redemption → store finder) plus account/profile flows. It is delivered across responsive Web and native Mobile surfaces.

Until recently, the library was organised on classic atomic-design lines: Atoms, Molecules, Organisms, Templates. As the component count grew past a hundred, designers reported two recurring pains:

1. **Discoverability.** Knowing whether a component lived in Atoms vs Molecules vs Organisms required intuition more than memory. Designers searched component names rather than browsing.
2. **Mental model mismatch.** Most design work happens journey-by-journey ("I'm building the cart screen"), not size-by-size ("I need a molecule"). The categories did not match the way the team actually navigated the library.

The reorganisation documented below addresses both points without disturbing the underlying token architecture, which has been preserved end-to-end.

---

## 3. Organisation — From Atomic to Use-Case Hybrid

### 3.1 The shift

The new top-level structure replaces Atoms/Molecules/Organisms/Templates with three macro-buckets:

| Page | What lives here | Why |
| --- | --- | --- |
| **Foundations** | Truly global, journey-agnostic primitives — form controls, buttons, chips, list rows, cards, modals, alerts, system chrome. | These are reused everywhere; classifying them by journey would force arbitrary choices. |
| **Patterns** | Cross-journey building blocks — navigation, banners, sliders, footer, CMS shells, layouts. | These compose the page-level skeleton across multiple journeys. |
| **Journeys** | Components scoped to a single user flow — onboarding, home, catalogue, product details, cart, checkout, account, loyalty, stores. | Designers building a flow can jump to the relevant cluster instead of stitching from generic atoms. |

The hybrid solves the discoverability problem: a designer needing a checkbox goes to `Foundations → Form Controls` (always the same place); a designer building the cart screen goes to `Journeys → Cart` (everything they need, grouped). Atomic design's compositional logic is preserved internally — Foundations still compose into Patterns and Journeys — but the *navigation* model is now journey-aware.

### 3.2 Final structure

The three pages contain 25 sections in total:

**Foundations — 11 sections, 66 components**

1. Form Controls (18) — Accordion, Checkbox Icon/Option/Card, Radio Icon/Option/Card, Timeslot, Dropdown Item/Group/Select, Link, Animated Dots, Animated CTA, Loaders 1–5.
2. Buttons (4) — FAB, Custom Button, Filter Button, Custom Button / Cart.
3. Chips & Tags (4) — Chip, Relevant Category, Filled Label, Tags.
4. Pickers & Selectors (4) — Menu Option, Tab Option, Language Picker, Service Selector Option.
5. List & Row Primitives (6) — List Row, Selection Row (Service & Loyalty), Selection Row (Generic), Search Result, Country Option, Side Menu Option.
6. Cards (Generic Shells) (4) — Content Card, Rich Media Card, Show More Card, Squared Cards / Web.
7. Messages & Alerts (5) — Alert, Toast Message, Snackbar, Notification Banner, Dev Note.
8. Feedback & Containers (5) — Modal, Bottomsheet, Sidesheet, Empty State – Default, Empty State – Illustrated.
9. Pagination & Progress (4) — Pagination, Step Indicator, Pagination Dot, Progress Bar.
10. Layout & Utility (8) — Spacer, Separator, Scrollbar, Image Placeholder / Mobile, Overlay, Web Overlay, Pin, Bottomsheet Header.
11. System (4) — Status Bar, Status Bar – New, System / Keyboard, Keyboard.

**Patterns — 5 sections, 31 components**

1. Navigation & Wayfinding (9) — Profile Section, Profile Menu, Responsive Menu / Service Switcher, Mobile Header, Responsive Menu / Personal Details, Breadcrumb, Stepper, Sticky Buttons, Sticky Quantity Selector.
2. Banners & Promo (5) — Web Banner, Mobile Banner, Banner Image, Promo Card, USPs.
3. Sliders & Carousels (8) — Content Slider, Category Slider / Desktop, Products Slider, Instagram Slider, Carousel / Horizontal, Carousel / Vertical, Date Selector, Instagram Card.
4. CMS & Layouts (2) — CMS Content, CMS Grid.
5. Footer (7) — Main Footer, Copyrights, Newsletter / Web, Newsletter / Responsive, Social, Store Download, Payment Cards.

**Journeys — 9 sections, 49 components**

1. Onboarding & Location (5) — Map, List Container / Country List, Preference Tab, Social Login / Web, Password Requirements.
2. Home (3) — Home page layouts / Web, Home page layouts / Mobile, Layout Template.
3. Catalogue & Search (7) — Animated Search Bar, Filter Panel, Searchable List, Product Thumbnail, Product Lists / Web, List Card / Mobile, Availability.
4. Product Details (10) — High Lvl Info, Main Image, CTA Section, MYO Card, Ingredients Card, Accordion Section, Comment, Mobile Exclusive, MYO Modal, Ingredients Modal.
5. Cart (3) — Cart Update Modal, Cart Footer / Web, Cart Footer / Mobile.
6. Checkout (7) — Checkout Options / Web, Checkout Options / Responsive, Price Breakdown, Timeslot Options, Coupon (×3).
7. Account & Profile (4) — Address Card, Previous Order / Mobile, Previous Order / Web, List Container / Order History.
8. Loyalty & Rewards (7) — Loyalty Card, Loyalty Option / Web, Loyalty Option / Responsive, Loyalty Redemption Card, Point Redemption Card, Redemption Summary Card, Coupon Card.
9. Stores & Retailer (3) — Store Card, Store Info Card, List Container / Store Cards.

### 3.3 Discoverability — the Table of Contents

A dedicated `📑 Table of Contents` page presents the full inventory as a three-column index (one column per macro-bucket). Every component name is a Figma in-file hyperlink that scrolls the viewer to the exact component on its new page. **146 working hyperlinks** in total. This becomes the team's "homepage" inside the library — open it, click the component you want, you land on it.

---

## 4. The Three-Tier Token System

The visual identity of every component is driven by a three-tier token graph. Each tier has a distinct responsibility, and the graph is unidirectional — Tier 3 references Tier 2, which references Tier 1. Editing happens at the lowest tier that controls the desired axis of change.

### 4.1 Tier 1 — Core (Primitives)

**Token set name:** `Core/Light Mode`. **Count:** 105 colour tokens.

This is the raw value layer — concrete hex colours, no semantic meaning. It is organised into two top-level groups:

- **Global** — palette-neutral scales used everywhere regardless of brand:
  - `Global/grayscale` (13 steps) — neutral ramp from white to black.
  - `Global/red`, `Global/orange`, `Global/green`, `Global/blue` (13 steps each) — status colour scales for errors, warnings, success, info.
  - `Global/shadows` (16 tokens) — elevation shadow recipes.
  - `Global/Always-Light` = `#ffffff`, `Global/Always-Dark` = `#333333` — fixed extremes.
- **Brand** — the two ramps that define the visual identity:
  - `Brand/primary` (11 steps: 0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800). For the Greta brand this ramp is built around `Brand.primary.500 = #f07e0b` (a warm orange).
  - `Brand/secondary` (11 steps: same scale). For Greta this is `Brand.secondary.500 = #8dbe3e` (a fresh green).

The Brand ramps are the only tokens that need to change when re-skinning the library to a new brand. Everything else — semantic palettes, component tokens, components themselves — stays untouched.

### 4.2 Tier 2 — Foundations (Semantic)

**Token set name:** `Foundations/Journey Solutions - Greta`. **Count:** 154 tokens (100 colour + 54 numeric).

This tier translates raw Core values into **semantic meaning**. Tokens here never hard-code a hex; they reference Tier 1.

Example chain (real values from the JSON):

```
palette.basic.primary.primary base   →   { value: "{Brand.primary.500}" }
palette.basic.primary.primary dark   →   { value: "{Brand.primary.800}" }
palette.basic.primary.primary light  →   { value: "{Brand.primary.50}" }
```

The Foundations layer is organised by purpose:

- `palette/basic` — primary, secondary, and a basic palette family (light/base/dark variants of each).
- `palette/additional` — supplementary brand colours.
- `palette/grayscale` — semantic grayscale mappings (background, surface, text, border).
- `palette/interaction-state` — hover, pressed, focused, disabled state colours.
- `radius/` — a scale of corner radii (zero, extra-small=4, small=8, medium=16, large=24, extra-large=32, extra-extra-large=64, full=999).
- `strokes/` — stroke widths (0, 1, 2).
- `spacing/component` and `spacing/layout` — paired spacing scales.
- `Sizing/01–20` — a 20-step sizing scale from 8px to 160px in 8px increments.

The 54 numeric tokens are the spacing and sizing values that designers consume directly when building components. Numeric tokens, like colour tokens, alias to Core when applicable.

### 4.3 Tier 3 — Component Tokens

**Token set name:** `Component Tokens/Journey Solutions - Greta`. **Count:** 150 tokens (86 colour + 28 number + 19 text + 17 boolean).

This is the highest-resolution layer. Every component reads only from here. The names describe **component anatomy**, not visual properties.

Example chain:

```
labels.grid tile labels.color.offer label color   →   "{palette.basic.secondary.secondary light}"
                                                  →   "{Brand.secondary.50}"
                                                  →   #eef6e3  (final rendered value)
```

A single property on a single Figma layer (e.g. the fill of a small ribbon on a product tile) reaches the canvas through three indirections. Each indirection is intentional: changing the Brand at Tier 1 propagates through both other layers without any component edits.

Component tokens are organised by **what they control**, mirroring the page-level structure:

- `labels/` — grid tile labels, order tile labels (offer ribbons, "For you" stickers, status indicators).
- `top bar/` — first row, second row, top bar template.
- `navigation menus/` — web, mobile variants.
- `menu items/` — main menu, bottom nav, category tabs, side menu.
- `qty selector/` — product tile, details/order tile.
- `buttons/` — switch active color, Lists CTA, button radius.
- `product tile/` — tile tokens, unit of measurement.
- `footer/` — separators, footer categories, footer cms, newsletter, main footer section, copyright section.
- `typography/` — font family.
- `home page/` — layout.
- `logo/` — Global Logo.

The presence of boolean and text token types here (alongside colour and number) reflects that this tier can express component logic too — for example a boolean controlling whether an offer ribbon is visible, or a text token containing the brand's logo wordmark.

### 4.4 How a single screen renders

When a designer drops a Product Tile onto a canvas, the rendering pipeline at each layer property is:

1. The Figma component has its fill bound to `labels.grid tile labels.color.offer label ribon` (Tier 3 reference).
2. That Tier 3 token resolves to `palette.basic.secondary.secondary base` (Tier 2 reference).
3. That Tier 2 token resolves to `Brand.secondary.500` (Tier 1 reference).
4. `Brand.secondary.500` resolves to `#8dbe3e` — the actual hex that Figma paints.

The component itself contains zero raw colour values. It only contains token references.

---

## 5. Multi-Brand Functionality

### 5.1 The mechanism in one sentence

> Swap the eleven `Brand/primary` and eleven `Brand/secondary` values at Tier 1, and the entire library re-skins to the new brand on the next publish — no component touched, no semantic token edited.

### 5.2 Why it works

Because every Component Token references a Foundation Token, and every Foundation Token that participates in brand identity references a Brand ramp in Core, the brand is reached through one entry point: the 22 Brand ramp values. Anything not brand-specific (grayscale, status colours, shadows, spacing, radii, sizing) is sourced from `Global/*` or from numeric Foundation scales — and those are intentionally NOT re-skinned per brand.

The split between `Brand/` and `Global/` inside Core is the architectural commitment: it draws the line between "what changes per brand" and "what stays constant across brands."

### 5.3 Evidence in the export

The exported JSON ships with token sets explicitly named per brand:

```
$metadata.tokenSetOrder = [
  "Component Tokens/Journey Solutions - Greta",
  "Core/Ligh Mode",
  "Foundations/Journey Solutions - Greta"
]
```

And the `$themes` array enumerates the brands that this token graph supports:

```
$themes = [
  { group: "Component Tokes",   name: "Gigo" },
  { group: "Core",              name: "Light Mode" },
  { group: "Foundations",       name: "Gigo" }
]
```

Two brand names appear in the export — **Greta** and **Gigo** — confirming that the same component graph drives multiple retail brands from one Figma library. In practice, each consumer brand has its own `Core/Light Mode` variant (different `Brand/primary` and `Brand/secondary` ramps), its own Foundations and Component Tokens sets, but they all reference the same Figma component nodes published by the library.

### 5.4 What a brand swap actually involves

To onboard a new retail brand (`Acme Grocer`):

1. **Duplicate** the existing token sets in Tokens Studio (or equivalent), name them `Core/Acme Light`, `Foundations/Acme`, `Component Tokens/Acme`.
2. **Edit only** the `Brand/primary` and `Brand/secondary` ramps inside `Core/Acme Light` — eleven hex values for primary, eleven for secondary.
3. **Publish** the new token sets as a theme.
4. **Consumer files** switch their Tokens Studio theme to `Acme` — every instance re-renders automatically.

No component edit. No screen rebuild. No designer time beyond filling in 22 colours.

### 5.5 What the architecture protects against

This design enforces several useful constraints by construction:

- **No raw colours in components.** A designer cannot accidentally hard-code `#FF0000` on a layer — only token references are valid.
- **Brand drift is impossible.** Two components cannot end up using different shades of "primary base" because there is only one `palette.basic.primary.primary base`, and it resolves to only one `Brand.primary.500`.
- **Status colours stay consistent across brands.** Error red, success green, info blue come from `Global/*` and are intentionally outside the Brand layer — so an "Acme" toast and a "Greta" toast share the same error red.

---

## 6. Reorganisation Audit Trail

The 2.1.2 reorganisation was completed in five passes:

1. **Page creation.** Three new pages (`Foundations`, `Patterns`, `Journeys`) were created. The old `01. Atoms`, `02. Molecules`, `03. Organisms`, `04. Web Templates`, `05. Mobile Templates`, `06. Input Fields` pages were preserved untouched as historical reference.
2. **Initial migration.** 109 components from `02. Molecules`, `03. Organisms`, and the standalone V2 atom pages (Accordion, Checkbox icon, Radio Option, Dropdown V2, Link) were moved into the new structure.
3. **Atoms migration.** A second pass moved 37 components out of `01. Atoms` — buttons, chips, alerts, pagination, system chrome, layout utilities, pickers — into seven new Foundations sub-sections.
4. **Quality pass.** 31 component renames disambiguated duplicate names (`Selection Row` ×2, `Responsive Menu` ×2, `Coupon` ×3, `Stepper` clash with atomic Step Indicator) and fixed typos (`Commet`, `CMS Conten`, `Layout Tempate`, leading/trailing spaces, slash-spacing).
5. **Layout pass.** Every section was repositioned to stack vertically at `x=0` with consistent 280px gaps, and every component inside every section was restacked vertically with 60px gaps and 80px side padding. Pages went from extremely-wide horizontal layouts (sections overlapping at the same `y=0`) to clean vertical scrolls.

The Table of Contents was rebuilt from scratch after each migration so that it always reflected the canonical inventory.

### 6.1 What was renamed (selected)

| Before | After | Why |
| --- | --- | --- |
| `Selection Row` (×2) | `Selection Row / Service & Loyalty`, `Selection Row / Generic` | Two distinct components shared a name. |
| `Responsive Menu` (×2) | `Responsive Menu / Service Switcher`, `Responsive Menu / Personal Details` | Same reason. |
| `Coupon` (×3) | `Coupon (1) / (2) / (3)` | Three loose duplicate frames disambiguated. |
| `Stepper` (atomic) | `Step Indicator` | Distinguished from the workflow `Stepper` in Patterns. |
| `CMS Conten` | `CMS Content` | Typo. |
| `Layout Tempate` | `Layout Template` | Typo. |
| `Product Detail / Commet` | `Product Detail / Comment` | Typo (component set fully renamed; consumers updated on next publish). |
| `Frame 1000004745` | `Loaders 4 & 5` | Unnamed frame. |
| Trailing-space names (`Animated CTA ` etc.) | trimmed | Hygiene. |

---

## 7. Scope and Out-of-Scope

The reorganisation covered everything the team had categorised under atomic design: Atoms, Molecules, Organisms, plus the standalone V2 atom pages. **Not touched** in this pass:

- `04. Web Templates` and `05. Mobile Templates` — page-level layouts; preserved as-is.
- `06. Input Fields` — 24 text-field and data-entry primitives still in their own page.
- `🧩 Configurable Components`, `Working Space`, `Inbox Concept LVL`, `Multi Retailer Components` — exploration / WIP areas.

These remain candidates for a future migration into the new structure (`Input Fields` → `Foundations / Form Controls` would be the natural target).

---

## 8. Lessons and Recommendations

A few observations worth keeping in mind for the next iteration:

- **Hybrid beats pure use-case.** A pure journey-based grouping forces awkward decisions for components that legitimately live everywhere (checkbox, button, modal). The Foundations / Patterns / Journeys split is a workable middle ground.
- **A Table of Contents is leverage.** With 146 components, name-search is unreliable (typos, version suffixes, capitalisation). One clickable index page eliminated 90% of "where does X live" questions in our test runs.
- **Brand swap is cheap if the token graph is right.** 22 hex values + 1 publish = full re-skin. The investment is in keeping discipline: never paint with raw colours, always alias through the three tiers.
- **Duplicates accumulate silently.** Three different components called `Coupon` and two each called `Selection Row` and `Responsive Menu` lived in the same file until this pass exposed them. A periodic name audit is worth scheduling.
- **One typo can survive forever.** `Commet` was in production for an unknown duration. Component renames affect downstream consumers, so they are deferred — and then forgotten. Treat published-name hygiene as a first-class hygiene task, not a "nice to have."

---

## 9. Appendix — Quick Reference

**Token totals**

| Tier | Set | Count | Types |
| --- | --- | --- | --- |
| 1 — Core | `Core/Light Mode` | 105 | colour ×105 |
| 2 — Foundations | `Foundations/Journey Solutions - Greta` | 154 | colour ×100, number ×54 |
| 3 — Component Tokens | `Component Tokens/Journey Solutions - Greta` | 150 | colour ×86, number ×28, text ×19, boolean ×17 |
| **Total** | | **409** | |

**Brand ramps (Greta)**

| Step | Primary (orange) | Secondary (green) |
| --- | --- | --- |
| 0 | `#fffaf6` | `#f9fcf5` |
| 50 | `#fdeede` | `#eef6e3` |
| 100 | `#fce1c7` | `#e3f0d0` |
| 150 | `#fad5af` | `#d9e9be` |
| 200 | `#f9c898` | `#cee3ac` |
| 300 | `#f6b069` | `#b8d787` |
| 400 | `#f3973a` | `#a3ca63` |
| **500 (base)** | **`#f07e0b`** | **`#8dbe3e`** |
| 600 | `#c06509` | `#729932` |
| 700 | `#904c07` | `#567426` |
| 800 | `#613304` | `#3b4f1a` |

**Pages in the library (after reorganisation)**

- `Cover` — file cover.
- `📑 Table of Contents` — auto-generated index with 146 in-file hyperlinks.
- `Foundations` — 11 sections, 66 components.
- `Patterns` — 5 sections, 31 components.
- `Journeys` — 9 sections, 49 components.
- `01. Atoms` — preserved (now empty of the migrated components).
- `02. Molecules`, `03. Organisms` — preserved (now empty).
- `04. Web Templates`, `05. Mobile Templates` — page-level layouts, untouched.
- `06. Input Fields` — untouched, candidate for next pass.
- Standalone V2 atom pages (`Accordion`, `Checkbox icon`, `Radio Option`, `Dropdown V2`, `Link`) — preserved (now empty).
- Plus exploration pages: `🍪 Flavor Exports`, `App Icons - iOS`, `App Icons - Android`, `🧩 Configurable Components`, `Working Space`, `Inbox Concept LVL`, `Multi Retailer Components`.

**Token graph at a glance**

```
                                 Brand swap point
                                       │
                                       ▼
   ┌─────────────────────────────────────────────────────┐
   │  Tier 1 — Core ( 105 tokens )                       │
   │    Brand/primary       Brand/secondary              │
   │    Global/grayscale    Global/{red,orange,green,blue}
   │    Global/shadows      Always-Light, Always-Dark    │
   └─────────────────────────────────────────────────────┘
                          │  references via "{Brand.…}", "{Global.…}"
                          ▼
   ┌─────────────────────────────────────────────────────┐
   │  Tier 2 — Foundations ( 154 tokens )                │
   │    palette/{basic,additional,grayscale,             │
   │             interaction-state}                      │
   │    radius/, strokes/, spacing/, Sizing/             │
   └─────────────────────────────────────────────────────┘
                          │  references via "{palette.…}", "{radius.…}", …
                          ▼
   ┌─────────────────────────────────────────────────────┐
   │  Tier 3 — Component Tokens ( 150 tokens )           │
   │    labels/, top bar/, navigation menus/,            │
   │    menu items/, qty selector/, buttons/,            │
   │    product tile/, footer/, typography/,             │
   │    home page/, logo/                                │
   └─────────────────────────────────────────────────────┘
                          │  consumed by Figma layers
                          ▼
                  Rendered component on canvas
```
