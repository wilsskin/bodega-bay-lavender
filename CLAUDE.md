# CLAUDE.md

Shopify Dawn theme (v15.4.0) for Bodega Bay Lavender. No build step — edits go live when pushed.

## Scope: Frontend Visual Changes Only

**We make visual/design changes only.** Never touch checkout logic, pricing, cart calculations, payment handling, or any Shopify backend integration. Do not modify `product-form.js`, `cart-drawer.js` (logic), or any Liquid that affects how products, variants, or line items are processed. If a change could affect what a customer pays or how an order is placed, stop and ask.

Safe to edit: CSS, layout/visual HTML in Liquid, section schemas (customizer settings), images, fonts, animations.

## Development

- No local server. Push to git; Shopify auto-syncs from GitHub.
- `shopify theme dev` for local preview (requires CLI + auth).
- `settings_data.json` is modified by the Shopify Theme Editor — pull before editing locally.

Branches: `main` (production), `staging` (testing).

## Key Files

| Path | Purpose |
|------|---------|
| `layout/theme.liquid` | Root shell; CSS variable system (colors, spacing, typography) |
| `assets/base.css` | Base styles |
| `assets/component-*.css` | Component-scoped styles |
| `sections/` | Page sections with inline schema blocks |
| `templates/` | JSON page compositions |
| `snippets/` | Reusable Liquid partials |
| `config/settings_data.json` | Active theme settings (auto-modified by Theme Editor) |

### Custom 2025 Sections

- `sections/hero-2025.liquid`
- `sections/home-about-2025.liquid`
- `sections/gallery-2025.liquid`
- `templates/page.about-2025.json`, `templates/page.staywithus-2025.json`

### CSS

Component-scoped files in `assets/`. CSS custom properties for color schemes defined in `layout/theme.liquid`. Spacing uses 8px base unit: `--spacing-xsmall` → `--spacing-section-large`.
