# Portfolio Design System & Style Guide

This document defines the core styling rules, assets, typography, color palette, and interactive components used in the Portfolio project. You can copy and reference this guide to replicate the exact same premium visual style in other projects.

---

## 🎨 Color Palette & Theme

The project employs a minimalist, high-contrast, light-mode dominant theme with custom "glassmorphic" elements.

| Role | Color Value / Tailwind Class | Visual Description |
| :--- | :--- | :--- |
| **Main Background** | `#FCFCFC` / `bg-[#FCFCFC]` | Soft off-white to reduce glare and feel premium. |
| **Primary Text** | `text-zinc-900` (`#18181b`) | Deep dark gray for high readability. |
| **Secondary Text** | `text-zinc-500` / `text-zinc-400` | Muted grays for labels, dates, and subheaders. |
| **Primary Buttons / CTA** | `bg-zinc-900` / `hover:bg-zinc-800` | High-contrast dark buttons. |
| **Glassmorphic Surface** | `bg-zinc-100/40 backdrop-blur-md` | Frosted glass look for floating navigation elements. |
| **Glassmorphic Border** | `border border-zinc-200/30` | Subtle semi-transparent border. |
| **Selection Highlight** | `selection:bg-zinc-900 selection:text-white` | Custom text selection styling. |

---

## 🔤 Typography & Font Scale

We load fonts from Google Fonts:
- **Plus Jakarta Sans** (Weights: 300, 400, 500, 600, 700, 800, 900) - Used for headings, displays, and UI.
- **Inter** (Weights: 300, 400, 500, 600, 700, 800) - Used for secondary body text.
- **Caveat** (Weights: 400, 700) - Cursive font for hand-written design highlights.

### Font Size Definitions (Tailwind v4 `@theme`)
Instead of standard `rem` steps, the theme defines sizes in `pt` for precision control:

```css
@theme {
  --font-sans: "Plus Jakarta Sans", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-handwriting: "Caveat", cursive;
  
  --font-size-xs: 14pt;
  --font-size-sm: 15.5pt;
  --font-size-base: 17pt;
  --font-size-lg: 19pt;
  --font-size-xl: 22pt;
  --font-size-2xl: 26pt;
  --font-size-3xl: 32pt;
  --font-size-4xl: 40pt;
  --font-size-5xl: 52pt;
  --font-size-6xl: 64pt;
  --font-size-7xl: 78pt;
  --font-size-8xl: 92pt;
  --font-size-9xl: 108pt;
}
```

---

## 📏 Spacing & Page Margins

We follow a 4px/8px incremental grid system. Top-level page layout containers use the following responsive padding rules to ensure consistent alignment:

- **Mobile Viewports (< 640px):** `pt-4 px-6` (16px top, 24px horizontal)
- **Tablet Viewports (640px - 1024px):** `sm:pt-6 sm:px-8` (24px top, 32px horizontal)
- **Desktop Viewports (> 1024px):** `lg:pt-12 lg:px-12` (48px top, 48px horizontal)
- **Content Max Width Constraint:** `max-w-6xl` (1152px) with horizontal centering (`mx-auto`).

---

## ⚡ Interactive CSS Utilities & Animations

### 1. View Transitions API (Page Changes)
Used to smoothly animate transitions between views or routes:
```css
@layer base {
  ::view-transition-old(root) {
    animation: 220ms cubic-bezier(0.16, 1, 0.3, 1) both fade-out;
  }
  ::view-transition-new(root) {
    animation: 320ms cubic-bezier(0.16, 1, 0.3, 1) both fade-in;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: scale(0.995);
    filter: blur(2px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(1.005);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
}
```

### 2. Text Outline Style
Creates transparent text outlined with a dark stroke:
```css
@layer utilities {
  .text-outline {
    -webkit-text-stroke: min(0.2vw, 2.5px) #18181b;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
}
```

### 3. Dynamic Cursor-Tracking Border Glow
Used on cards to create a multi-color radial gradient glow that tracks the hover cursor. 

```css
.border-glow-card {
  --edge-proximity: 0;
  --cursor-angle: 45deg;
  --edge-sensitivity: 30;
  --color-sensitivity: calc(var(--edge-sensitivity) + 20);
  --border-radius: 28px;
  --glow-padding: 40px;
  --cone-spread: 25;

  position: relative;
  border-radius: var(--border-radius);
  isolation: isolate;
  transform: translate3d(0, 0, 0.01px);
  display: grid;
  border: 1px solid rgb(255 255 255 / 15%);
  background: var(--card-bg, #120F17);
  overflow: visible;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 2px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px,
    rgba(0, 0, 0, 0.1) 0px 4px 8px,
    rgba(0, 0, 0, 0.1) 0px 8px 16px;
}

/* Colored mesh-gradient border */
.border-glow-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  border: 1px solid transparent;
  background:
    linear-gradient(var(--card-bg, #120F17) 0 100%) padding-box,
    linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box,
    radial-gradient(at 80% 55%, hsla(268, 100%, 76%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 69% 34%, hsla(349, 100%, 74%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 8% 6%, hsla(136, 100%, 78%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 41% 38%, hsla(192, 100%, 64%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 86% 85%, hsla(186, 100%, 74%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 82% 18%, hsla(52, 100%, 65%, 1) 0px, transparent 50%) border-box,
    radial-gradient(at 51% 4%, hsla(12, 100%, 72%, 1) 0px, transparent 50%) border-box;

  opacity: calc((var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity)));
  mask-image:
    conic-gradient(
      from var(--cursor-angle) at center,
      black calc(var(--cone-spread) * 1%),
      transparent calc((var(--cone-spread) + 15) * 1%),
      transparent calc((100 - var(--cone-spread) - 15) * 1%),
      black calc((100 - var(--cone-spread)) * 1%)
    );
}
```
*(For the full implementation details including the JavaScript tracking hooks, refer to [BorderGlow.tsx](file:///Users/solakidis/Documents/AI%20Projects/Portfolio/src/components/BorderGlow.tsx) and [BorderGlow.css](file:///Users/solakidis/Documents/AI%20Projects/Portfolio/src/components/BorderGlow.css))*
