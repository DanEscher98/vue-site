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
│   └── useTheme.ts  # Light/dark theme management
├── layouts/         # Layout components
├── pages/           # Route pages
├── stores/          # Pinia stores
├── types/           # TypeScript definitions (see brand.ts for detailed docs)
└── style.css        # Tailwind @theme (references brand CSS vars)
```

## Brand System (REQUIRED)

**All colors and fonts MUST come from `src/config/brand.ts`. No hardcoded values.**

### The 6-Color Semantic Palette

This template uses a minimal but complete 6-color system:

| Color        | Coverage | Role                               | Component Usage                          |
|--------------|----------|------------------------------------|------------------------------------------|
| `background` | ~60%     | Page canvas                        | `bg-brand-background`                    |
| `neutral`    | ~20%     | Cards, elevated surfaces           | `bg-brand-neutral`                       |
| `base`       | ~15%     | Text, icons, borders               | `text-brand-base`, `border-brand-base/10`|
| `accent`     | ~3%      | Primary actions, links             | `bg-brand-accent`, `text-brand-accent`   |
| `secondary`  | ~1%      | Supporting actions, tags           | `bg-brand-secondary`                     |
| `contrast`   | ~1%      | High-impact CTAs (use sparingly!)  | `bg-brand-contrast`                      |

### The 60-30-10 Rule

- **60% dominant** (background, neutral) - calming, unobtrusive
- **30% secondary** (base for text) - structure, readability
- **10% accent** (accent, secondary, contrast) - emphasis, action

### Single Source of Truth

```ts
// src/config/brand.ts - ONLY place to define brand values
export const brandConfig: BrandConfig = {
  light: {
    base: '#1a1a2e',      // Dark text on light surfaces
    accent: '#6366f1',    // Primary brand color
    contrast: '#22d3ee',  // High-visibility CTAs
    secondary: '#a855f7', // Supporting accent
    neutral: '#f8fafc',   // Cards, elevated surfaces
    background: '#ffffff',// Page canvas
  },
  dark: {
    base: '#f1f5f9',      // Light text on dark surfaces (INVERTED)
    accent: '#818cf8',    // Brighter for dark mode
    contrast: '#22d3ee',  // Same or adjusted
    secondary: '#c084fc', // Brighter for dark mode
    neutral: '#1e293b',   // Elevated dark surface
    background: '#0f172a',// Dark page canvas (INVERTED)
  },
  typography: { /* ... */ },
}
```

## Color Usage by Component Type

### Text & Content

```vue
<!-- Primary text -->
<p class="text-brand-base">Main content</p>

<!-- Subdued/secondary text - use opacity -->
<span class="text-brand-base/70">Less important</span>
<small class="text-brand-base/50">Metadata, captions</small>

<!-- Emphasized text -->
<strong class="text-brand-accent">Important link</strong>
```

### Buttons & Actions

```vue
<!-- Primary action - most important -->
<button class="bg-brand-accent text-brand-neutral">Submit</button>

<!-- Secondary action - less prominent -->
<button class="bg-brand-secondary text-brand-neutral">Save Draft</button>

<!-- High-impact CTA - use sparingly! -->
<button class="bg-brand-contrast text-brand-base">Buy Now</button>

<!-- Outline/ghost variants -->
<button class="border-brand-accent text-brand-accent">Cancel</button>
<button class="text-brand-base hover:bg-brand-base/10">Menu</button>
```

### Surfaces & Cards

```vue
<!-- Page background (usually at layout level) -->
<div class="bg-brand-background min-h-screen">

<!-- Elevated card -->
<div class="bg-brand-neutral rounded-lg shadow">
  <h3 class="text-brand-base">Card Title</h3>
</div>

<!-- Inverted section (dark on light, light on dark) -->
<section class="bg-brand-base text-brand-neutral">
  Hero content with inverted colors
</section>
```

### Borders & Dividers

```vue
<!-- Subtle borders - use base with low opacity -->
<div class="border-brand-base/10">Subtle divider</div>
<hr class="border-brand-base/20" />

<!-- Emphasized borders -->
<div class="border-2 border-brand-accent">Focus ring</div>
<input class="border-brand-base/30 focus:border-brand-accent" />
```

### Interactive States

```vue
<!-- Hover states - use brightness or opacity -->
<button class="bg-brand-accent hover:brightness-110">Brighten on hover</button>
<a class="text-brand-accent hover:underline">Link</a>

<!-- Background highlights -->
<div class="hover:bg-brand-accent/10">Subtle hover background</div>
<li class="hover:bg-brand-base/5">List item hover</li>

<!-- Active/selected states -->
<button class="bg-brand-accent/20 text-brand-accent">Selected tab</button>
```

## Typography Usage

### The 4-Font System

| Font Class      | Role                    | Use For                            |
|-----------------|-------------------------|------------------------------------|
| `font-logo`     | Brand identity          | Logo text, hero headlines only     |
| `font-headers`  | Visual hierarchy        | h1, h2, h3, section titles         |
| `font-primary`  | Body content            | Paragraphs, buttons, labels        |
| `font-secondary`| Technical/supporting    | Code, timestamps, captions         |

### Typography Examples

```vue
<!-- Logo/brand mark -->
<span class="font-logo text-brand-accent text-2xl">BrandName</span>

<!-- Page hierarchy -->
<h1 class="font-headers text-brand-base text-3xl">Page Title</h1>
<h2 class="font-headers text-brand-base text-xl">Section</h2>

<!-- Body content (font-primary is default) -->
<p class="font-primary text-brand-base">Main content...</p>

<!-- Technical content -->
<code class="font-secondary text-brand-secondary">const x = 1</code>
<time class="font-secondary text-brand-base/50">2 hours ago</time>
```

## Color Theory Rules

### Contrast Requirements (WCAG AA)

| Combination              | Minimum Ratio | Check Tool                           |
|--------------------------|---------------|--------------------------------------|
| `base` on `background`   | 4.5:1         | webaim.org/resources/contrastchecker |
| `base` on `neutral`      | 4.5:1         | coolors.co/contrast-checker          |
| `accent` on `background` | 3:1 (UI)      | Use for buttons, not body text       |

### Light vs Dark Mode Inversion

```
Light Mode:                    Dark Mode:
┌─────────────────────┐        ┌─────────────────────┐
│ background: #ffffff │   ←→   │ background: #0f172a │  INVERTED
│ neutral:    #f8fafc │   ←→   │ neutral:    #1e293b │  INVERTED
│ base:       #1a1a2e │   ←→   │ base:       #f1f5f9 │  INVERTED
│ accent:     #6366f1 │   →    │ accent:     #818cf8 │  Brightened
│ secondary:  #a855f7 │   →    │ secondary:  #c084fc │  Brightened
│ contrast:   #22d3ee │   →    │ contrast:   #22d3ee │  Often same
└─────────────────────┘        └─────────────────────┘
```

### Color Harmony Guidelines

When customizing the palette:

- **Accent + Secondary**: Should be analogous (adjacent on color wheel)
  - Blue accent → Purple secondary ✓
  - Green accent → Teal secondary ✓

- **Contrast**: Should pop against both accent and secondary
  - Indigo accent → Cyan contrast (complementary) ✓
  - Blue accent → Yellow contrast (complementary) ✓

- **Base + Background**: Must be inverted between themes
  - Light: dark base (#1a1a2e) on light background (#ffffff)
  - Dark: light base (#f1f5f9) on dark background (#0f172a)

## Theme System

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

### How It Works

1. `useTheme()` manages mode and persists to localStorage
2. `useBrand()` reads theme and returns correct palette
3. CSS variables are updated automatically on `:root`
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

Special effects that are NOT brand colors are allowed:

```vue
<!-- OK - Effect styles -->
<div class="shadow-lg backdrop-blur-sm">Glass effect</div>
<div class="animate-pulse opacity-50">Loading</div>
<div class="ring-2 ring-offset-2">Focus ring</div>

<!-- OK - Structural styles -->
<div class="rounded-xl p-4 gap-6">Layout</div>

<!-- OK - Special effect colors in scoped styles -->
<style scoped>
.neon-glow {
  box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
}
</style>
```

## Component Guidelines

### Creating New Components

1. **Use brand Tailwind classes, not colors**
   ```vue
   <button class="bg-brand-accent hover:brightness-110">
   ```

2. **Define variants using brand tokens**
   ```ts
   const variants = {
     primary: 'bg-brand-accent text-brand-neutral',
     secondary: 'bg-brand-secondary text-brand-neutral',
     outline: 'border-brand-accent text-brand-accent',
     ghost: 'text-brand-base hover:bg-brand-base/10',
   }
   ```

3. **Use opacity modifiers for text hierarchy**
   ```vue
   <p class="text-brand-base">Primary text</p>
   <p class="text-brand-base/70">Secondary text</p>
   <p class="text-brand-base/50">Muted text</p>
   ```

4. **Access values programmatically only when needed**
   ```ts
   // Only for dynamic styles that can't use Tailwind
   const { palette } = useBrand()
   const chartColor = palette.value.accent
   ```

## Do NOT

- Hardcode colors: `bg-blue-600`, `text-gray-900`, `#ff0000`
- Hardcode fonts: `font-sans`, `font-mono`
- Use Tailwind's default color palette for UI elements
- Define colors in component `<style>` blocks (except special effects)
- Use same hex value for `base` in both light and dark modes

## Do

- Use `bg-brand-*`, `text-brand-*`, `border-brand-*` classes
- Use `font-logo`, `font-headers`, `font-primary`, `font-secondary`
- Use opacity modifiers: `text-brand-base/70`, `bg-brand-accent/10`
- Use `useBrand()` for dynamic/programmatic needs
- Invert `base`, `background`, `neutral` between light/dark modes
- Brighten `accent`, `secondary` slightly for dark mode visibility

## Changing the Brand

To rebrand the entire app, edit **only** `src/config/brand.ts`:

```ts
export const brandConfig: BrandConfig = {
  name: 'New Brand',
  light: {
    accent: '#ff0000',  // All buttons, links now red
    // ... other colors
  },
  typography: {
    logo: 'Orbitron',   // All logos now Orbitron
    // ... other fonts
  },
}
```

No other files need modification. See `src/types/brand.ts` for detailed
documentation on each color role and selection guidelines.
