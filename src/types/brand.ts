/**
 * Brand Config Type Definitions
 *
 * Centralized brand identity system for colors, typography, and theming.
 * Supports light/dark mode with semantic color naming.
 */

/** Color palette with semantic naming */
export interface BrandPalette {
  /** Primary dark/foundation color */
  base: string
  /** Primary brand color for emphasis */
  accent: string
  /** High-contrast color for visual pop */
  contrast: string
  /** Supporting accent color */
  secondary: string
  /** Light/neutral color for backgrounds and text */
  neutral: string
  /** Primary background color */
  background: string
}

/** Typography system with semantic font roles */
export interface BrandTypography {
  /** Display/logo font - distinctive, used sparingly */
  logo: string
  /** Header font - strong presence for page titles */
  headers: string
  /** Primary body font - readable, main content */
  primary: string
  /** Secondary font - subheadings, captions, details */
  secondary: string
}

/** Theme mode options */
export type ThemeMode = 'light' | 'dark'

/** Complete brand configuration with theme support */
export interface BrandConfig {
  name: string
  tagline: string | string[]
  /** Light mode palette */
  light: BrandPalette
  /** Dark mode palette */
  dark: BrandPalette
  typography: BrandTypography
}
