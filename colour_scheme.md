# Chess Academy Theme Guide

## Overview
Three distinct themes have been created for the chess academies, each with its own unique visual identity and color palette.

## 🎯 ChessCodex - Modern Tech Blue & Red Theme
**Brand Identity:** Modern, tech-forward, innovative chess education
**Target Audience:** Tech-savvy chess enthusiasts, competitive players

### Color Palette:
- **Primary:** `#1E40AF` - Strong Blue (modern, reliable)
- **Secondary:** `#DC2626` - Modern Red (energy, passion)
- **Accent:** `#3B82F6` - Bright Blue (innovation, clarity)
- **Dark:** `#1E293B` - Slate Dark (sophistication)
- **Light:** `#F8FAFC` - Clean White (minimalism)
- **Highlight:** `#EF4444` - Vibrant Red (call-to-action)
- **Text:** `#334155` - Cool Gray (readability)

### Design Characteristics:
- Clean, minimalist design
- Sharp edges and modern typography
- Tech-inspired gradients
- Bold blue-red contrasts
- Shadow effects with blue tints

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

## 👑 Kolkata Chess Academy (KCA) - Traditional Royal Blue & Red
**Brand Identity:** Traditional, royal, heritage chess institution
**Target Audience:** Classical chess learners, institutional training

### Color Palette:
- **Primary:** `#1D4ED8` - Royal Blue (tradition, trust)
- **Secondary:** `#B91C1C` - Classic Red (heritage, strength)
- **Accent:** `#FBBF24` - Gold Accent (achievement, excellence)
- **Dark:** `#1E3A8A` - Deep Blue (stability, depth)
- **Light:** `#FEF7F0` - Warm Ivory (warmth, comfort)
- **Highlight:** `#DC2626` - Rich Red (importance, action)
- **Text:** `#1F2937` - Elegant Gray (traditional readability)

### Design Characteristics:
- Traditional royal color combinations
- Classic blue-red-gold palette
- Warm, welcoming backgrounds
- Heritage-inspired design elements
- Balanced, institutional feel

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
