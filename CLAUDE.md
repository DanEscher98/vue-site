# CLAUDE.md

Instructions for AI assistants working on this codebase.

## Architecture

```
src/
├── config/          # App configuration
│   └── brand.ts     # Single source of truth for colors/fonts (light + dark)
├── components/      # Vue components
│   └── base/        # Reusable base components
├── composables/     # Vue composition utilities
│   ├── useBrand.ts  # Brand colors/fonts (theme-aware)
│   └── useTheme.ts  # Light/dark/system theme management
├── layouts/         # Layout components
├── pages/           # Route pages
├── stores/          # Pinia stores
├── types/           # TypeScript definitions
└── style.css        # Tailwind theme (references brand vars)
```

## Brand System (REQUIRED)

**All colors and fonts MUST come from `src/config/brand.ts`. No hardcoded values in components.**

### Single Source of Truth

```ts
// src/config/brand.ts - ONLY place to define brand values
export const brandConfig: BrandConfig = {
  light: {
    base: '#1a1a2e',      // Text on light bg
    accent: '#6366f1',
    contrast: '#22d3ee',
    secondary: '#a855f7',
    neutral: '#f8fafc',   // Cards
    background: '#ffffff',
  },
  dark: {
    base: '#f1f5f9',      // Text on dark bg
    accent: '#818cf8',    // Brighter for dark mode
    contrast: '#22d3ee',
    secondary: '#c084fc',
    neutral: '#1e293b',   // Cards
    background: '#0f172a',
  },
  typography: { /* ... */ },
}
```

### Using Brand Colors in Components

```vue
<!-- CORRECT - Use brand Tailwind classes -->
<template>
  <button class="bg-brand-accent text-brand-neutral">Click</button>
  <h1 class="font-headers text-brand-base">Title</h1>
  <div class="border-brand-secondary bg-brand-neutral">Card</div>
</template>

<!-- WRONG - Hardcoded colors -->
<template>
  <button class="bg-blue-600 text-white">Click</button>  <!-- DON'T DO THIS -->
  <h1 class="text-gray-900">Title</h1>                   <!-- DON'T DO THIS -->
  <div style="color: #6366f1">Text</div>                 <!-- DON'T DO THIS -->
</template>
```

### Available Brand Classes

**Colors:**
- `bg-brand-{base|accent|contrast|secondary|neutral|background}`
- `text-brand-{base|accent|contrast|secondary|neutral}`
- `border-brand-{base|accent|contrast|secondary|neutral}`
- Opacity modifiers work: `bg-brand-accent/50`, `text-brand-base/80`

**Fonts:**
- `font-logo` - Display/logo font
- `font-headers` - Headings (h1, h2, h3)
- `font-primary` - Body text
- `font-secondary` - Code, captions

### When to Access Brand Directly

Use `useBrand()` composable for:
- Dynamic styles that can't use Tailwind classes
- Displaying brand info (name, tagline)
- Programmatic color needs

```vue
<script setup>
import { useBrand } from '@/composables'
const { brand, palette } = useBrand()
</script>

<template>
  <h1>{{ brand.name }}</h1>
  <canvas :style="{ borderColor: palette.accent }"></canvas>
</template>
```

## Theme System

The app supports light/dark mode toggle with localStorage persistence.

### Using Theme in Components

```vue
<script setup>
import { useTheme } from '@/composables'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? 'Light' : 'Dark' }} Mode
  </button>
</template>
```

### Theme Modes

- `light` - Light mode
- `dark` - Dark mode

### How It Works

1. `useTheme()` manages mode and persists to localStorage
2. `useBrand()` reads resolved theme and returns correct palette
3. CSS variables are updated automatically
4. Components using `bg-brand-*` classes adapt instantly

### No Extra Work Needed

Just use brand classes - they automatically use the correct palette:

```vue
<!-- This adapts to light/dark automatically -->
<div class="bg-brand-background text-brand-base">
  <button class="bg-brand-accent">Works in both modes</button>
</div>
```

## Allowed Hardcoded Styles

Special effects and utilities that are NOT brand colors are allowed:

```vue
<!-- OK - Effect styles, not brand colors -->
<div class="shadow-lg backdrop-blur-sm">Glass effect</div>
<div class="animate-pulse opacity-50">Loading</div>
<div class="ring-2 ring-offset-2">Focus ring</div>

<!-- OK - Structural styles -->
<div class="rounded-xl p-4 gap-6">Layout</div>
<div class="flex items-center justify-between">Flex</div>

<!-- OK - Special effect colors (glow, neon, etc.) -->
<style scoped>
.neon-glow {
  box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
</style>
```

## Component Guidelines

### Creating New Components

1. **Import brand classes, not colors**
   ```vue
   <!-- Use Tailwind brand classes -->
   <button class="bg-brand-accent hover:brightness-110">
   ```

2. **Define variants using brand tokens**
   ```ts
   const variants = {
     primary: 'bg-brand-accent text-brand-neutral',
     secondary: 'bg-brand-secondary text-brand-neutral',
     outline: 'border-brand-accent text-brand-accent',
   }
   ```

3. **Never import hex values into components**
   ```ts
   // WRONG
   const accentColor = '#6366f1'

   // CORRECT - if you need the value
   const { palette } = useBrand()
   const accentColor = palette.value.accent
   ```

### Base Components

Extend existing base components when possible:
- `BaseButton.vue` - Buttons with brand variants
- More to come...

## Color Theory Rules

When defining or modifying brand palettes, follow these contrast principles:

### Semantic Color Pairing

| Color | Use On | Purpose |
|-------|--------|---------|
| `base` | `background`, `neutral` | Primary text - must contrast with light surfaces |
| `accent` | `background`, `neutral`, `base` | Buttons, links - visible on all surfaces |
| `contrast` | `base`, `background` | High-visibility CTAs |
| `secondary` | `background`, `neutral` | Secondary actions, tags |
| `neutral` | `background` | Cards, elevated surfaces |
| `background` | - | Page background |

### Light vs Dark Mode

```
Light Mode:
- base = DARK color (text on white bg)
- background = LIGHT color
- neutral = LIGHT color (cards slightly off-white)

Dark Mode:
- base = LIGHT color (text on dark bg)  ← INVERTED
- background = DARK color               ← INVERTED
- neutral = DARK color (cards slightly lighter than bg)
```

### Contrast Requirements

- Text on background: Minimum 4.5:1 contrast ratio (WCAG AA)
- `base` on `background`: Must be readable
- `base` on `neutral`: Must be readable
- `accent` should stand out on all surfaces

### Common Mistakes

```vue
<!-- BUG: gray-900 is dark, invisible on dark background -->
<h1 class="text-gray-900">Title</h1>

<!-- FIX: brand-base adapts to theme -->
<h1 class="text-brand-base">Title</h1>
```

## Do NOT

- Hardcode colors (`bg-blue-600`, `text-gray-900`, `#ff0000`)
- Hardcode font families (`font-sans`, `font-mono`)
- Use Tailwind's default color palette for UI elements
- Define colors in component `<style>` blocks (except special effects)
- Duplicate brand values anywhere outside `src/config/brand.ts`
- Use same hex value for `base` in both light and dark modes (they should be inverted)

## Do

- Use `bg-brand-*`, `text-brand-*`, `border-brand-*` classes
- Use `font-logo`, `font-headers`, `font-primary`, `font-secondary`
- Use opacity modifiers: `bg-brand-accent/50`
- Use `useBrand()` for dynamic/programmatic needs
- Keep special effects (glow, glass, shadows) separate from brand colors

## Changing the Brand

To rebrand the entire app, edit **only** `src/config/brand.ts`:

```ts
export const brandConfig: BrandConfig = {
  name: 'New Brand',
  palette: {
    accent: '#ff0000',  // All buttons, links, emphasis now red
  },
  typography: {
    logo: 'Orbitron',   // All logos now use Orbitron
  },
}
```

No other files need to change.
