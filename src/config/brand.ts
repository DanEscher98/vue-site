import type { BrandConfig } from '@/types/brand'

/**
 * Brand Configuration
 *
 * Central place to define your app's brand identity.
 * Changes here automatically propagate to all components using brand classes.
 *
 * ## Color Theory - Light vs Dark Mode
 *
 * The `base` and `background` colors MUST be inverted between modes:
 *
 * | Color      | Light Mode          | Dark Mode           |
 * |------------|---------------------|---------------------|
 * | base       | DARK (text color)   | LIGHT (text color)  |
 * | background | LIGHT (page bg)     | DARK (page bg)      |
 * | neutral    | LIGHT (card bg)     | DARK (card bg)      |
 *
 * This ensures text remains readable on both light and dark backgrounds.
 *
 * ## Contrast Requirements (WCAG AA)
 *
 * - `base` on `background`: 4.5:1 minimum
 * - `base` on `neutral`: 4.5:1 minimum
 * - `accent` should be visible on all surfaces
 *
 * ## Color Format
 *
 * Use hex colors: `accent: '#6366f1'`
 */
export const brandConfig: BrandConfig = {
  name: 'Vue Template',
  tagline: 'Modern Vue 3 Development',

  /**
   * Light Mode Palette
   * - base: Dark text color for readability on white/light backgrounds
   * - background: Light page background
   * - neutral: Slightly off-white for cards/elevated surfaces
   */
  light: {
    base: '#1a1a2e', // Dark text on light bg
    accent: '#6366f1', // Primary brand - buttons, links
    contrast: '#22d3ee', // High-visibility CTAs
    secondary: '#a855f7', // Secondary actions, tags
    neutral: '#f8fafc', // Cards, subtle backgrounds
    background: '#ffffff', // Page background
  },

  /**
   * Dark Mode Palette
   * - base: Light text color for readability on dark backgrounds (INVERTED)
   * - background: Dark page background (INVERTED)
   * - neutral: Slightly lighter than bg for cards
   */
  dark: {
    base: '#f1f5f9', // Light text on dark bg (INVERTED from light.base)
    accent: '#818cf8', // Brighter for dark mode visibility
    contrast: '#22d3ee', // Cyan works well on dark
    secondary: '#c084fc', // Brighter purple for dark mode
    neutral: '#1e293b', // Dark cards (lighter than background)
    background: '#0f172a', // Dark page background (INVERTED from light.background)
  },

  typography: {
    logo: 'Bungee',
    headers: 'Playfair Display SC',
    primary: 'Source Sans Pro',
    secondary: 'Source Code Pro',
  },
}
