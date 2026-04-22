# Bodega Bay Lavender — Design System

**Theme:** Shopify Dawn v15.4.0 (custom)  
**Last Updated:** April 21, 2026 (v2 — unified token pass)

Read this before making any visual change. Colors and typography are the most load-bearing parts of the system — start there.

---

## Colors

### Brand Palette & CSS Tokens

All brand colors are now defined as CSS custom properties in `layout/theme.liquid` `:root`. **Always use the token — never hardcode these hex values.**

| Token | Hex | Use |
|---|---|---|
| `--color-brand-purple` | `#636DCF` | CTA buttons, inline links, accents |
| `--color-brand-purple-hover` | `#505ABC` | CTA button hover state |
| `--color-brand-purple-link-hover` | `#4A52B8` | Text link hover state (Why Lavender section) |
| `--color-brand-purple-deep` | `#6149A2` | Icon SVG fill, accent elements |
| `--color-brand-lavender-bg` | `#EDECFE` | Section backgrounds (About, feature sections) |
| `--color-brand-text-muted` | `#4D4D62` | Feature/benefit italic description text |
| `--color-brand-icon-bg` | `#FAFAFA` | Circular icon container backgrounds |

**Dawn scheme colors** (used via `rgb(var(--color-background))`, `rgb(var(--color-foreground))` etc.):

| Name | Hex | Dawn token usage |
|---|---|---|
| White | `#ffffff` | Scheme 1 background → `rgb(var(--color-background))` |
| Off-white | `#f3f3f3` | Scheme 2 background |
| Near-black | `#121212` | Scheme 1 text → `rgb(var(--color-foreground))` |
| Dark scheme | `#242833` | Scheme 3 background |

**NOTE:** `#000000` (pure black) is intentionally hardcoded in heading styles in custom sections — it is NOT the same as `rgb(var(--color-foreground))` which is `#121212`. Do not swap them.

### Color Schemes (Shopify Theme Editor)

Dawn's color system uses `rgb(var(--color-foreground))` and `rgb(var(--color-background))` built from scheme settings. The active scheme is resolved at render time.

| Scheme | Background | Text | Button | Button Label |
|---|---|---|---|---|
| Scheme 1 (default) | `#ffffff` | `#121212` | `#121212` | `#ffffff` |
| Scheme 2 (secondary) | `#f3f3f3` | `#121212` | `#121212` | `#f3f3f3` |
| Scheme 3 (dark) | `#242833` | (light) | — | — |

**Rules:**
- Use scheme-1 for primary sections, scheme-2 for alternating light-grey sections.
- Custom 2025 sections use `var(--color-brand-*)` tokens defined in `theme.liquid` — never raw hex.
- Never introduce new brand colors without a design decision. If a new color is needed, add it to `theme.liquid` `:root`, document it here, then reference it via its token.

---

## Typography

### Fonts

Both the body and heading font are set to **Lora** (serif) via Shopify's font system. Lora is loaded from Shopify's CDN.

```
--font-body-family: Lora, Georgia, Times New Roman, serif
--font-heading-family: Lora, Georgia, Times New Roman, serif
--font-body-weight: 400
--font-heading-weight: 400 (base; sections override to 600 or 700)
--font-body-scale: 1.0
--font-heading-scale: 1.0
```

All `font-size` values use `rem`. `html { font-size: 62.5% }` is set globally, so **`1rem = 10px`** across the entire theme. Never use `px` for font sizes — convert to rem.

**Font family rule:** Never hardcode `'Lora', serif` in section CSS. Always use `var(--font-heading-family)` or `var(--font-body-family)`. This ensures font changes in the Shopify Theme Editor propagate everywhere automatically.

### Text Scale

Five utility classes defined in `base.css` cover the full hierarchy. Use these classes; do not write custom `font-size` rules outside of scoped section styles.

| Class | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `.text-h1` / `h1` | 32px mobile · 48px desktop | heading weight | ~1.3 | 0.06rem | Page hero heading |
| `.text-h2` / `h2` | 24px mobile · 32px desktop | heading weight | ~1.3 | 0.06rem | Section heading |
| `.text-h3` / `h3` | 24px | heading weight | ~1.3 | 0.06rem | Sub-section heading |
| `.text-body` | 18px | 400 | ~1.5 | 0.06rem | Body paragraphs |
| `.text-tag` | 16px | 600 | ~1.5 | 0.1rem | Tags, labels (uppercase) |

Extended heading scale (also available):

| Class | Size | Use |
|---|---|---|
| `.hxxl` | clamp(56px, 14vw, 72px) | Oversized display text |
| `.hxl` | 50px mobile · 62px desktop | Large hero display |
| `.h0` | 40px mobile · 52px desktop | Large section title |

### Custom Section Typography

The 2025 custom sections define their own type styles via inline `{%- style -%}` blocks, using `var(--font-heading-family)` / `var(--font-body-family)` and rem units. Treat the values below as the source of truth for those sections.

| Section | Element | Font var | Size (rem) | Weight | Color |
|---|---|---|---|---|---|
| Hero 2025 | Heading | `--font-heading-family` | desktop: from h1 class · tablet: 3.6rem · mobile: 2.8rem | 700 | White (configurable via settings) |
| Hero 2025 | Subtitle | `--font-heading-family` | tablet: 2rem · mobile: 1.6rem | 400 | White (configurable via settings) |
| Hero 2025 | CTA Button | `--font-heading-family` | 1.8rem · tablet: 1.6rem · mobile: 1.4rem | 700 | White (configurable via settings) |
| Why Lavender | Section heading | `--font-heading-family` | 3.2rem · mobile: 2.8rem · small: 2.4rem | 600 | `#000000` |
| Why Lavender | Body text | `--font-heading-family` | 1.8rem · mobile: 1.6rem · small: 1.4rem | 400 | `#000000` |
| Why Lavender | Feature title | `--font-heading-family` | 1.8rem · mobile: 1.6rem · small: 1.4rem | 600 | `#000000` |
| Why Lavender | Feature text | `--font-heading-family` | 1.6rem · mobile: 1.4rem | 400 italic | `var(--color-brand-text-muted)` |
| Why Lavender | CTA link | `--font-heading-family` | 1.8rem · mobile: 1.6rem · small: 1.4rem | 600 | `var(--color-brand-purple)` |
| Home About | Body text | `--font-body-family` | 2.4rem · tablet: 2rem · mobile: 1.6rem | 400 | `#000000` |
| Home About | Feature text | `--font-body-family` | 1.6rem · tablet: 1.4rem · mobile: 1.2rem | 400 | `#000000` |
| Collection List | Card title | heading (inherited) | 1.8rem · mobile: 1.6rem | 600 | Foreground |
| Collection List | Card excerpt | body (inherited) | inherited · mobile: 1.4rem | 400 | `var(--color-brand-text-muted)` |
| Collection List | CTA button | `--font-heading-family` | 1.8rem · mobile: 1.6rem · small: 1.4rem | 700 | `rgb(var(--color-button-text))` |

---

## Buttons & Links

### Primary Button

Used for main CTAs (Add to Cart, Shop Now, etc.).

| Property | Value |
|---|---|
| Background | `rgb(var(--color-button))` → `#121212` |
| Text | `rgb(var(--color-button-text))` → `#ffffff` |
| Border radius | `8px` (`--buttons-radius`) |
| Border | None (0 width) |
| Shadow | None |
| Padding | Set by Dawn defaults |
| Font | Lora, heading weight |

### Hero CTA Button (`.hero-2025__button`)

| Property | Value |
|---|---|
| Background | configurable via section settings (default `#636DCF`) |
| Text | configurable via section settings (default `#ffffff`) |
| Border radius | `var(--buttons-radius)` → 8px |
| Padding | `1.2rem 5.6rem` desktop · `1rem 3.2rem` tablet |
| Font | `var(--font-heading-family)` 700, `1.8rem` desktop / `1.6rem` tablet / `1.4rem` mobile |
| Hover background | `var(--color-brand-purple-hover)` → `#505ABC` |
| Hover shadow | `0 4px 12px rgba(0, 0, 0, 0.15)` |
| Transition | `all 0.3s ease` |

### Collection Card CTA Button (`.collection-card__cta`)

| Property | Value |
|---|---|
| Background | `var(--color-brand-purple)` → `#636DCF` |
| Text | `rgb(var(--color-button-text))` → `#ffffff` |
| Border radius | `var(--buttons-radius)` → 8px |
| Padding | `1.2rem 4rem` |
| Font | `var(--font-heading-family)` 700, `1.8rem` |
| Hover background | `var(--color-brand-purple-hover)` → `#505ABC` |
| Focus outline | `3px solid rgba(99, 109, 207, 0.4)` |

### Links

- Default link color: `rgba(var(--color-foreground), 0.85)` (via `--alpha-link: 0.85`)
- Navigation links: use Dawn's built-in `.list-menu__item--link` — no underline, padding top/bottom 1rem (0.5rem at 750px+)
- Body links: inherit text color, standard underline

---

## Spacing

8px base unit. Always use tokens — never hardcode arbitrary pixel values.

### Custom Spacing Tokens

```css
:root {
  --spacing-xsmall: 0.8rem;        /* 8px  — icon-to-text, tight gaps */
  --spacing-small: 1.6rem;          /* 16px — heading-to-paragraph */
  --spacing-medium: 2.4rem;         /* 24px — content blocks, hero padding */
  --spacing-large: 4.8rem;          /* 48px — between major content blocks */
  --spacing-xlarge: 6.4rem;         /* 64px — generous section padding */
  --spacing-section-small: 8rem;    /* 80px — section vertical padding */
  --spacing-section-large: 14.4rem; /* 144px — large section vertical padding */
}
```

### Utility Classes

All tokens are available as margin, padding, and gap utilities:

```
.margin-{size}   → margin: var(--spacing-{size})
.padding-{size}  → padding: var(--spacing-{size})
.gap-{size}      → gap: var(--spacing-{size})
```

Sizes: `xsmall`, `small`, `medium`, `large`, `xlarge`, `section-small`, `section-large`

### Section Spacing in Practice

| Context | Value |
|---|---|
| Section vertical padding (custom sections) | 64px–80px (`--spacing-xlarge` / `--spacing-section-small`) |
| Gap between text and features in sections | `--spacing-medium` (24px) |
| Gap between feature items | `--spacing-xsmall` (8px) |
| Between section header and feature grid | 40px (additional margin-top) |
| Page-level section spacing (Dawn setting) | 0 (sections butt together; padding is section-internal) |

---

## Responsive Breakpoints

Three standard breakpoints. All new section styles should use only these three.

| Breakpoint | Width | What changes |
|---|---|---|
| Mobile (small) | `≤480px` | Hero heights shrink; heading/button font sizes reduce one step; content gaps tighten; icon sizes reduce |
| Mobile | `≤750px` | Feature grids reflow; page-width padding drops to 1.5rem; hero height reduced; h1/h2 drop to smaller sizes |
| Tablet | `750px+` | page-width padding → 5rem; h1 scales to 48px, h2 to 32px; desktop hero height (600px) activates |
| Desktop | `990px+` | Header padding → 5rem; narrow page-width becomes 72.6rem |

**Non-standard breakpoints still present in existing sections** (do not add new ones like these — flagged for future consolidation):

| Breakpoint | File | What it controls |
|---|---|---|
| `≤650px` | why-lavender-2025 | Features go single-column; icon shrinks to 4rem |
| `≤768px` | why-lavender-2025 | Mobile CTA button padding reduces |
| `≤900px` | home-about-2025, why-lavender-2025 | Feature grid: 3-col → 2-col layout |
| `≤1024px` | why-lavender-2025 | Feature cards switch from fluid to fixed width |

---

## Shadows & Rounding

### Border Radius

Always use CSS tokens — never hardcode `8px` or `16px` for contexts that have a token.

| Context | Token | Resolved value |
|---|---|---|
| All buttons (CTA, hero, collection) | `var(--buttons-radius)` | `8px` |
| Product & collection cards | `var(--product-card-corner-radius)` | `16px` |
| Blog / article cards | `var(--blog-card-corner-radius)` | `8px` |
| Variant pills | `var(--variant-pills-radius)` | `40px` |
| Badges | `var(--badge-corner-radius)` | `40px` |
| Feature icons (Why Lavender, full circle) | `6rem` inline | `60px` |
| Card image interior (collection list) | `1.2rem` inline | `12px` |

### Shadows

Product, collection, and blog cards have **no shadow** (shadow-opacity: 0 in settings). Shadows are used only for hover states on CTAs.

| Context | Value |
|---|---|
| Hero button hover | `0 4px 12px rgba(0, 0, 0, 0.15)` |
| Focused elements (outline ring) | `0 0 0 0.3rem rgb(var(--color-background)), 0 0 0.5rem 0.4rem rgba(var(--color-foreground), 0.3)` |
| Focus outline | `0.2rem solid rgba(var(--color-foreground), 0.5)` |

---

## Code Conventions

Rules that apply to every section — Dawn defaults and custom 2025 sections alike.

### Units
- All font sizes: **rem** only. Never `px`. (`1rem = 10px` due to `html { font-size: 62.5% }`)
- All spacing: spacing tokens (`var(--spacing-xsmall)` through `var(--spacing-section-large)`) or rem when no token matches. Never `px`.
- Icon/image dimensions that need fixed sizes: rem. Fixed-pixel heights (hero, etc.) are acceptable exceptions.

### Colors
- Brand colors: always `var(--color-brand-*)` — never raw hex.
- Dawn scheme colors: always `rgb(var(--color-foreground))`, `rgb(var(--color-background))`, `rgb(var(--color-button-text))` — never `#121212` or `#ffffff`.
- `#000000` is the one accepted hardcoded hex — used for section headings where pure black is intentional and distinct from `#121212`.

### Fonts
- Never write `font-family: 'Lora', serif` — always `var(--font-heading-family)` or `var(--font-body-family)`.
- Font weights can be hardcoded (400, 600, 700) since these are design-level overrides, not theme settings.

### Spacing tokens quick reference
```
8px   → var(--spacing-xsmall)
16px  → var(--spacing-small)
24px  → var(--spacing-medium)
48px  → var(--spacing-large)
64px  → var(--spacing-xlarge)
80px  → var(--spacing-section-small)
144px → var(--spacing-section-large)
```
Values between tokens (e.g. 32px = 3.2rem, 40px = 4rem): use rem directly.

### Breakpoints
Use only `480px`, `750px`, `990px`. Do not introduce new breakpoint values.

### New custom sections — checklist
When building a new custom 2025 section:
1. Font family → `var(--font-heading-family)` or `var(--font-body-family)`
2. Font sizes → rem
3. Colors → `var(--color-brand-*)` or `rgb(var(--color-*))`
4. Spacing → spacing tokens or rem equivalents
5. Border radius on buttons → `var(--buttons-radius)`; on cards → `var(--product-card-corner-radius)`
6. Container: `max-width: 120rem; margin: 0 auto; padding: 0 1.5rem` → `0 5rem` at 750px+
7. Breakpoints: only `480px`, `750px`, `990px`

---

## Layout & Structure

### Page Container

```css
.page-width {
  max-width: 120rem;  /* 1200px */
  margin: 0 auto;
  padding: 0 1.5rem;  /* mobile */
}

@media (min-width: 750px) {
  .page-width { padding: 0 5rem; }
}
```

Custom 2025 sections use their own containers that mirror this pattern:

```css
.section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;    /* mobile */
}

@media (min-width: 750px) {
  .section__container { padding: 0 5rem; }
}
```

### Grid

- Desktop horizontal spacing: `3.2rem` (32px)
- Desktop vertical spacing: `0.8rem` (8px, from `spacing_grid_vertical: 8`)
- Mobile horizontal: `1.5rem`; mobile vertical: `0.4rem`

### Page Structure (body grid)

```
body {
  display: grid;
  grid-template-rows: auto auto 1fr auto;  /* announcement / header / main / footer */
  grid-template-columns: 100%;
}
```

### Section-Level Layout Patterns

| Pattern | Use |
|---|---|
| Full-width section → inner `.page-width` | Standard Dawn sections (collection list, featured blog) |
| Full-width section → custom `.section__container` (max 1200px) | Custom 2025 sections |
| Flex column, `align-items: center`, `gap: var(--spacing-medium)` | Most custom section inner content |
| `justify-content: space-between` with `flex-wrap: wrap` | Feature/benefit grids |
| `max-width: 688px` centered text block | Home about section |
| `max-width: 600px` | Hero content block |
| `max-width: 544px` | Home about features row |
