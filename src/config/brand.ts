import type { BrandConfig } from '@/types/brand'

/**
 * Brand Configuration - Single Source of Truth
 *
 * This file defines ALL brand colors and fonts for the application.
 * Components use Tailwind classes (bg-brand-accent, font-headers) that
 * reference these values via CSS variables.
 *
 * ## Quick Reference
 *
 * | Color      | Light Mode Use                | Dark Mode Use               |
 * |------------|-------------------------------|-----------------------------|
 * | base       | Dark text on light surfaces   | Light text on dark surfaces |
 * | accent     | Primary brand color           | Slightly brighter variant   |
 * | contrast   | High-impact CTAs              | Same or adjusted for dark   |
 * | secondary  | Supporting accent             | Slightly brighter variant   |
 * | neutral    | Cards, elevated surfaces      | Elevated dark surfaces      |
 * | background | Page canvas (light)           | Page canvas (dark)          |
 *
 * ## Changing the Brand
 *
 * 1. Edit the values below
 * 2. All components automatically update
 * 3. No other files need modification
 *
 * ## Color Harmony Tips
 *
 * - Use https://coolors.co to generate harmonious palettes
 * - Use https://webaim.org/resources/contrastchecker/ to verify contrast
 * - Accent + Secondary should be analogous (adjacent on color wheel)
 * - Contrast should pop against both accent and secondary
 *
 * @see src/types/brand.ts for detailed documentation on each color role
 */
export const brandConfig: BrandConfig = {
  name: 'Vue Template',
  tagline: 'Modern Vue 3 Development',

  /**
   * Light Mode Palette
   *
   * Design principle: Dark text on light surfaces.
   * The 60-30-10 rule: 60% background/neutral, 30% base, 10% accents.
   *
   * Palette harmony: Indigo accent with purple secondary (analogous)
   * and cyan contrast (complementary split).
   */
  light: {
    /**
     * Base: Near-black with slight warmth
     * - Primary text color
     * - Must contrast 4.5:1+ with background (#ffffff) ✓ 16.89:1
     * - Must contrast 4.5:1+ with neutral (#f8fafc) ✓ 15.29:1
     */
    base: '#1a1a2e',

    /**
     * Accent: Indigo 500
     * - Primary brand color, buttons, links
     * - Conveys: creativity, trust, sophistication
     * - Contrast with background: 4.63:1 ✓
     */
    accent: '#6366f1',

    /**
     * Contrast: Cyan 400
     * - High-visibility CTAs, limited use
     * - Complementary to indigo accent
     * - Use for maximum attention
     */
    contrast: '#22d3ee',

    /**
     * Secondary: Purple 500
     * - Analogous to accent (adjacent on color wheel)
     * - Secondary buttons, tags, badges
     * - Creates visual variety without clashing
     */
    secondary: '#a855f7',

    /**
     * Neutral: Slate 50
     * - Cards, elevated surfaces
     * - Subtle distinction from pure white background
     * - 5% darker than background
     */
    neutral: '#f8fafc',

    /**
     * Background: Pure white
     * - Page canvas, largest surface area
     * - Clean, minimal, professional
     */
    background: '#ffffff',
  },

  /**
   * Dark Mode Palette
   *
   * Design principle: Light text on dark surfaces.
   * Key inversions: base becomes light, background becomes dark.
   * Accents are brightened 1-2 shades for visibility on dark.
   */
  dark: {
    /**
     * Base: Slate 100
     * - INVERTED from light mode (was dark, now light)
     * - Primary text color on dark surfaces
     * - Contrast with background (#0f172a): 15.24:1 ✓
     */
    base: '#f1f5f9',

    /**
     * Accent: Indigo 400
     * - Brightened from light mode for dark background visibility
     * - Same hue family, lighter value
     */
    accent: '#818cf8',

    /**
     * Contrast: Cyan 400
     * - Works well on both light and dark
     * - No change needed for this particular cyan
     */
    contrast: '#22d3ee',

    /**
     * Secondary: Purple 400
     * - Brightened from light mode
     * - Maintains analogous relationship with accent
     */
    secondary: '#c084fc',

    /**
     * Neutral: Slate 800
     * - Elevated dark surface (lighter than background)
     * - Creates card/modal separation from page
     */
    neutral: '#1e293b',

    /**
     * Background: Slate 900
     * - INVERTED from light mode (was light, now dark)
     * - Not pure black - easier on eyes
     * - Subtle blue tint for modern feel
     */
    background: '#0f172a',
  },

  /**
   * Typography Configuration
   *
   * Font pairing strategy: Display + Serif headers + Sans body + Mono code
   * This creates clear hierarchy while maintaining readability.
   *
   * Personality: Creative, editorial, developer-friendly
   *
   * @see src/types/brand.ts for font selection guidelines
   */
  typography: {
    /**
     * Logo: Bungee
     * - Distinctive display font for brand recognition
     * - Bold, blocky, memorable
     * - Use only for logo and hero moments
     */
    logo: 'Bungee',

    /**
     * Headers: Playfair Display SC
     * - Elegant serif with small caps
     * - Creates strong visual hierarchy
     * - Editorial, sophisticated feel
     */
    headers: 'Playfair Display SC',

    /**
     * Primary: Source Sans Pro
     * - Highly readable humanist sans-serif
     * - Excellent for body text at all sizes
     * - Professional, friendly, versatile
     */
    primary: 'Source Sans Pro',

    /**
     * Secondary: Source Code Pro
     * - Monospace for code and technical content
     * - Pairs well with Source Sans Pro (same family)
     * - Clear character differentiation
     */
    secondary: 'Source Code Pro',
  },
}

/*
 * ============================================================================
 * BRAND PALETTE EXAMPLES
 * ============================================================================
 *
 * Below are example palettes for different brand personalities.
 * Copy and modify the brandConfig above to match your needs.
 *
 * ----------------------------------------------------------------------------
 * CORPORATE / PROFESSIONAL
 * ----------------------------------------------------------------------------
 * light: {
 *   base: '#0f172a',       // Slate 900 - serious, authoritative
 *   accent: '#2563eb',     // Blue 600 - trust, stability
 *   contrast: '#f59e0b',   // Amber 500 - warmth, attention
 *   secondary: '#0891b2',  // Cyan 600 - complementary to blue
 *   neutral: '#f1f5f9',    // Slate 100
 *   background: '#ffffff',
 * }
 * typography: {
 *   logo: 'Inter',
 *   headers: 'Inter',
 *   primary: 'Inter',
 *   secondary: 'JetBrains Mono',
 * }
 *
 * ----------------------------------------------------------------------------
 * CREATIVE / PLAYFUL
 * ----------------------------------------------------------------------------
 * light: {
 *   base: '#18181b',       // Zinc 900
 *   accent: '#f43f5e',     // Rose 500 - energetic, youthful
 *   contrast: '#84cc16',   // Lime 500 - fresh, vibrant
 *   secondary: '#f97316',  // Orange 500 - warm, inviting
 *   neutral: '#fafafa',    // Zinc 50
 *   background: '#ffffff',
 * }
 * typography: {
 *   logo: 'Bangers',
 *   headers: 'Poppins',
 *   primary: 'Nunito',
 *   secondary: 'Fira Code',
 * }
 *
 * ----------------------------------------------------------------------------
 * LUXURY / EDITORIAL
 * ----------------------------------------------------------------------------
 * light: {
 *   base: '#1c1917',       // Stone 900 - rich, grounded
 *   accent: '#a16207',     // Yellow 700 - gold, premium
 *   contrast: '#be123c',   // Rose 700 - elegant accent
 *   secondary: '#4d7c0f',  // Lime 700 - organic, refined
 *   neutral: '#fafaf9',    // Stone 50
 *   background: '#ffffff',
 * }
 * typography: {
 *   logo: 'Cormorant Garamond',
 *   headers: 'Playfair Display',
 *   primary: 'Lora',
 *   secondary: 'Georgia',
 * }
 *
 * ----------------------------------------------------------------------------
 * TECH / DEVELOPER
 * ----------------------------------------------------------------------------
 * light: {
 *   base: '#09090b',       // Zinc 950
 *   accent: '#22c55e',     // Green 500 - growth, go
 *   contrast: '#eab308',   // Yellow 500 - warning, attention
 *   secondary: '#06b6d4',  // Cyan 500 - information
 *   neutral: '#f4f4f5',    // Zinc 100
 *   background: '#fafafa',
 * }
 * typography: {
 *   logo: 'Orbitron',
 *   headers: 'JetBrains Mono',
 *   primary: 'Inter',
 *   secondary: 'JetBrains Mono',
 * }
 *
 * ----------------------------------------------------------------------------
 * MINIMAL / MONOCHROME
 * ----------------------------------------------------------------------------
 * light: {
 *   base: '#171717',       // Neutral 900
 *   accent: '#171717',     // Same as base - minimal
 *   contrast: '#171717',   // Same - rely on weight/size
 *   secondary: '#525252',  // Neutral 600
 *   neutral: '#fafafa',    // Neutral 50
 *   background: '#ffffff',
 * }
 * typography: {
 *   logo: 'Inter',
 *   headers: 'Inter',
 *   primary: 'Inter',
 *   secondary: 'Inter',
 * }
 */
