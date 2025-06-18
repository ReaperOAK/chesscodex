# Chess Academy Theme Guide

## Overview
Three distinct themes have been created for the chess academies, each with its own unique visual identity and color palette.

## 🎯 ChessCodex - Modern Purple & Dark Theme
**Brand Identity:** Modern, tech-forward, innovative chess education
**Target Audience:** Tech-savvy chess enthusiasts, competitive players

### Color Palette:
- **Primary:** `#200e4a` - Deep Purple (main brand color, sophistication)
- **Secondary:** `#461fa3` - Medium Purple (navigation, secondary elements)
- **Accent:** `#7646eb` - Bright Purple (hover states, call-to-action)
- **Dark:** `#14092e` - Very Dark Purple (dark backgrounds)
- **Light:** `#f3f1f9` - Light Purple Tint (light backgrounds)
- **Highlight:** `#af0505` - Alert Red (warnings, notifications)
- **Text:** `#270185` - Dark Purple Text (for light backgrounds)

### Extended Colors:
- **Light Text:** `#e3e1f7` - Light Purple Text (for dark backgrounds)
- **Neutral Text:** `#ffffff` - Pure White (highest contrast)
- **Gray Light:** `#c2c1d3` - Light Gray (dividers, inactive elements)
- **Gray Dark:** `#3b3a52` - Dark Gray (borders, secondary text)

### Design Characteristics:
- Modern purple gradient theme
- Dark and light background variants
- High contrast text options
- Tech-inspired purple palette
- Sophisticated dark mode support
- Accessibility-focused contrast ratios

### Usage Guidelines:
- Use **dark background** (`#14092e`) for dramatic sections
- Use **light background** (`#f3f1f9`) for content-heavy areas
- Use **light text** (`#e3e1f7`) or **neutral text** (`#ffffff`) on dark backgrounds
- Use **dark text** (`#270185`) on light backgrounds
- Utilize **gray light** (`#c2c1d3`) for dividers and **gray dark** (`#3b3a52`) for subtle emphasis
- Ensure contrast ratios meet accessibility standards for readability

---

## ♛ AspireChess - Marble & Stone Theme (Updated for Visibility)
**Brand Identity:** Elegant, premium like chess pieces, sophisticated
**Target Audience:** Luxury chess enthusiasts, traditional players

### Color Palette:
- **Primary:** `#475569` - Charcoal Stone (strength, sophistication)
- **Secondary:** `#F8FAFC` - Pure White Marble (elegance, purity)
- **Accent:** `#94A3B8` - Medium Stone (balanced contrast)
- **Dark:** `#1E293B` - Deep Charcoal (authority, depth)
- **Light:** `#F1F5F9` - Off-White Marble (subtle warmth)
- **Highlight:** `#64748B` - Slate Gray (refined emphasis)
- **Text:** `#0F172A` - Obsidian Black (maximum readability)

### Design Characteristics:
- Marble-like textures and gradients
- Elegant, classic typography
- Subtle shadows mimicking stone depth
- Monochromatic sophistication
- Clean, gallery-like presentation

---

## 👑 Kolkata Chess Academy (KCA) - Royal Heritage & Elegance
**Brand Identity:** Traditional, royal, heritage chess institution with modern elegance
**Target Audience:** Classical chess learners, institutional training, heritage enthusiasts

### Color Palette:
- **Primary:** `#1A365D` - Deep Royal Blue (trust, wisdom, tradition)
- **Secondary:** `#C53030` - Rich Burgundy Red (passion, strength, heritage)
- **Accent:** `#D69E2E` - Royal Gold (achievement, excellence, prestige)
- **Dark:** `#0A1929` - Midnight Navy (depth, sophistication)
- **Light:** `#FBF8F3` - Warm Cream (elegance, comfort)
- **Highlight:** `#E53E3E` - Vibrant Crimson (importance, action)
- **Text:** `#2D3748` - Charcoal Gray (professional readability)

### Extended Colors:
- **Light Text:** `#F7FAFC` - Soft White (for dark backgrounds)
- **Neutral Text:** `#FFFFFF` - Pure White (highest contrast)
- **Gray Light:** `#E2E8F0` - Light Silver (dividers, subtle elements)
- **Gray Dark:** `#4A5568` - Steel Gray (borders, secondary text)
- **Accent Light:** `#FAF089` - Champagne Gold (light accents)
- **Secondary Light:** `#FED7D7` - Rose Blush (soft highlights)

### Design Characteristics:
- Rich royal heritage color combinations
- Deep blue and burgundy with golden accents
- Warm cream backgrounds for elegance
- Traditional yet modern aesthetic
- Sophisticated gradient combinations
- Heritage-inspired luxury feel

### Usage Guidelines:
- Use **midnight navy** (`#0A1929`) for dramatic, premium sections
- Use **warm cream** (`#FBF8F3`) for content areas and backgrounds
- Combine **royal blue** (`#1A365D`) with **royal gold** (`#D69E2E`) for headers
- Use **burgundy red** (`#C53030`) for call-to-action elements
- Apply **champagne gold** (`#FAF089`) for subtle highlights
- Ensure elegant contrast with **charcoal gray** (`#2D3748`) text

---

## Technical Implementation

### CSS Custom Properties
Each theme dynamically sets CSS custom properties when the route changes:
```css
:root {
  --brand-primary: /* Theme-specific color */
  --brand-secondary: /* Theme-specific color */
  --brand-accent: /* Theme-specific color */
  --brand-gradient: /* Theme-specific gradient */
  /* ... more properties */
}
```

### Theme Classes
Body element gets theme-specific classes:
- `.theme-chesscodex` - For ChessCodex styling
- `.theme-aspirechess` - For AspireChess styling  
- `.theme-kca` - For KCA styling

### Tailwind Integration
All themes are integrated with Tailwind CSS using the `brand.*` color utilities that reference CSS custom properties, ensuring consistency across components.

## Usage Guidelines

1. **ChessCodex**: Use for modern, tech-focused chess content
2. **AspireChess**: Use for premium, elegant chess experiences
3. **KCA**: Use for traditional, institutional chess education

Each theme automatically applies when navigating to the respective routes:
- `/chesscodex/*` → ChessCodex theme
- `/aspirechess/*` → AspireChess theme
- Default routes → KCA theme
