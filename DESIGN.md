# DESIGN.md — Direction: Neo Brutalism Portfolio

## Identity & Concept
- **Owner**: Ferry Noer Hendriawan (Information Systems Student · Software Developer)
- **Concept**: Neo-Brutalism Developer Portfolio. Raw, tactile, high-contrast, confident, and utilitarian.
- **Vibe**: Tech-forward zine meets robust engineering workshop. High energy, physical tactile feel, uncompromising readability.

## Antislop Dials
- **ENERGY**: 3 (High contrast, bold 3px borders, hard offset black box-shadows, tactile press animations, sticker badges).
- **RHYTHM**: 3 (Distinct section compositions: bold ticker banner, asymmetric ID card hero with real photo, interactive project dossiers, pill-stamp skills grid, physical interactive contact board).
- **MOTION**: 2 (Snappy 150ms mechanical presses, hard shadow shifts, tab toggles, zero floaty generic fades).

## Color Palette
- **Base Background**: `#FFFDF0` (Warm Cream White) & `#0F0F0F` (True Brutalist Ink Black)
- **Surface**: `#FFFFFF` (Pure White Card / Panel)
- **Primary Accent**: `#FFE600` (Electric Canary Yellow — energetic, attention-grabbing)
- **Secondary Accents**:
  - `#00F0FF` (Cyber Cyan — code & frontend)
  - `#FF5252` (Punch Coral / Red — client highlight & alerts)
  - `#10B981` (Vibrant Mint — active status & verified items)
- **Ink & Borders**: `#000000` (Pitch Black, 2px to 3.5px solid borders)
- **Hard Shadow**: `4px 4px 0px #000000` default, active press `1px 1px 0px #000000`

## Typography
- **Headings**: Heavy sans-serif with punchy tracking and high contrast.
- **Accents & Meta**: Monospace font (`font-mono`) for dates, badges, tags, code metrics, and architectural stacks.
- **Body**: Clean, highly readable sans-serif with generous line height.

## Antislop Rules In Action
- **R-02**: Strictly zero em dashes (`—`) in copy.
- **R-03**: Rock-solid responsive layout with no horizontal overflow, touch targets >= 44px.
- **R-17 & R-38**: 100% authentic data from `data/*.json`, zero fabricated statistics or fictional testimonials.
- **R-24 & R-26**: Every button, link, and tab is functional (copy email with feedback, tab filtering, direct external links, verified cv download).
- **R-25 & R-32**: WCAG AA contrast ratio, full keyboard navigation with high-visibility focus rings.
