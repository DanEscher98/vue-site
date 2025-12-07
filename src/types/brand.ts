/**
 * Brand Config Type Definitions
 *
 * A semantic color and typography system designed for consistency across any brand.
 * This system follows the 60-30-10 rule and ensures WCAG AA contrast compliance.
 *
 * ## The 6-Color Semantic Palette
 *
 * This palette covers the essential roles needed for any UI:
 *
 * | Role       | Coverage | Purpose                                    |
 * |------------|----------|--------------------------------------------|
 * | background | ~60%     | Page canvas, largest surface area          |
 * | neutral    | ~20%     | Cards, elevated surfaces, subtle sections  |
 * | base       | ~15%     | Text, icons, borders (foreground content)  |
 * | accent     | ~3%      | Primary actions, links, brand emphasis     |
 * | secondary  | ~1%      | Supporting actions, tags, badges           |
 * | contrast   | ~1%      | High-impact CTAs, critical actions         |
 *
 * ## Why This Structure?
 *
 * - **Minimal but complete**: 6 colors handle 95% of UI needs
 * - **Semantic, not descriptive**: "accent" not "blue" - works with any hue
 * - **Theme-aware**: Light/dark modes handled by palette inversion
 * - **Extensible**: Add `error`, `success`, `warning` only when needed
 *
 * ## Not Included (Add When Needed)
 *
 * - `error` / `danger`: Destructive actions, validation errors (typically red)
 * - `success`: Positive feedback, confirmations (typically green)
 * - `warning`: Cautionary states (typically amber/yellow)
 * - `info`: Informational messages (typically blue)
 *
 * These are omitted to keep the base template lean. Most projects need
 * them eventually - add to BrandPalette interface when required.
 */

/**
 * Semantic color palette for a single theme mode.
 *
 * ## Color Selection Guidelines
 *
 * ### The 60-30-10 Rule
 * - 60% dominant color (background) - calming, unobtrusive
 * - 30% secondary colors (neutral, base) - structure, readability
 * - 10% accent colors (accent, secondary, contrast) - emphasis, action
 *
 * ### Contrast Requirements (WCAG AA)
 * - Normal text: 4.5:1 contrast ratio minimum
 * - Large text (18px+ or 14px bold): 3:1 minimum
 * - UI components: 3:1 against adjacent colors
 *
 * Use tools like https://webaim.org/resources/contrastchecker/
 */
export interface BrandPalette {
  /**
   * **Base** - Primary foreground color for text and icons
   *
   * ## Role
   * The main text color. Must be highly readable on `background` and `neutral`.
   *
   * ## Color Theory
   * - Light mode: Use DARK colors (slate-900, gray-800, near-black)
   * - Dark mode: Use LIGHT colors (slate-100, gray-200, near-white)
   * - MUST INVERT between themes - this is not optional
   *
   * ## Contrast Requirements
   * - On `background`: 7:1+ ideal, 4.5:1 minimum
   * - On `neutral`: 4.5:1 minimum
   *
   * ## Usage in Components
   * - Default text color: `text-brand-base`
   * - Subdued text: `text-brand-base/70` or `text-brand-base/50`
   * - Borders: `border-brand-base/10` or `border-brand-base/20`
   * - Icons: `text-brand-base` or `text-brand-base/60`
   *
   * ## Examples
   * - Light mode: `#1a1a2e`, `#0f172a`, `#18181b`
   * - Dark mode: `#f1f5f9`, `#fafafa`, `#f8fafc`
   */
  base: string

  /**
   * **Accent** - Primary brand color for interactive elements
   *
   * ## Role
   * The signature brand color. Used for primary actions, links, and emphasis.
   * This is the color users associate with your brand.
   *
   * ## Color Theory
   * - Choose based on brand identity and psychology:
   *   - Blue: Trust, stability, professionalism
   *   - Purple: Creativity, luxury, wisdom
   *   - Green: Growth, health, sustainability
   *   - Orange: Energy, enthusiasm, warmth
   *   - Red: Urgency, passion, excitement
   * - Should be vibrant enough to stand out but not overwhelming
   * - Dark mode: Often needs to be 1-2 shades lighter for visibility
   *
   * ## Contrast Requirements
   * - On `background`: 3:1 minimum for UI components
   * - On `neutral`: 3:1 minimum
   * - Text on accent: Ensure `neutral` contrasts well
   *
   * ## Usage in Components
   * - Primary buttons: `bg-brand-accent text-brand-neutral`
   * - Links: `text-brand-accent hover:underline`
   * - Active states: `border-brand-accent`, `ring-brand-accent`
   * - Subtle highlights: `bg-brand-accent/10`
   *
   * ## Examples
   * - Indigo brand: light `#6366f1`, dark `#818cf8`
   * - Emerald brand: light `#10b981`, dark `#34d399`
   * - Rose brand: light `#f43f5e`, dark `#fb7185`
   */
  accent: string

  /**
   * **Contrast** - High-visibility color for critical CTAs
   *
   * ## Role
   * Maximum attention-grabbing color for the most important actions.
   * Use sparingly - if everything is high-contrast, nothing stands out.
   *
   * ## Color Theory
   * - Should be visually distinct from `accent`
   * - Often a complementary or triadic color to `accent`
   * - Cyan, yellow, or bright variants work well
   * - Can be the same in both themes if it works on both backgrounds
   *
   * ## Color Harmony Suggestions
   * - If accent is blue/purple → contrast could be cyan, yellow, or orange
   * - If accent is green → contrast could be magenta, coral, or gold
   * - If accent is red/pink → contrast could be cyan, teal, or lime
   *
   * ## Usage in Components
   * - Hero CTAs: `bg-brand-contrast text-brand-base`
   * - Sale badges: `bg-brand-contrast`
   * - Urgent notifications: `border-brand-contrast`
   * - Limit to 1-2 elements per screen
   *
   * ## Examples
   * - Cyan: `#22d3ee`, `#06b6d4`
   * - Yellow: `#facc15`, `#eab308`
   * - Coral: `#fb7185`, `#f43f5e`
   */
  contrast: string

  /**
   * **Secondary** - Supporting accent for variety and hierarchy
   *
   * ## Role
   * A complementary color to `accent` for secondary actions and visual variety.
   * Prevents UI monotony without competing with primary actions.
   *
   * ## Color Theory
   * - Should harmonize with `accent` (analogous or triadic)
   * - Less prominent than `accent` but still noticeable
   * - Dark mode: May need brightness adjustment
   *
   * ## Color Harmony Suggestions
   * - Analogous: Adjacent on color wheel (blue accent → purple secondary)
   * - Triadic: 120° apart (blue accent → orange or green secondary)
   * - Same hue, different saturation/lightness
   *
   * ## Usage in Components
   * - Secondary buttons: `bg-brand-secondary text-brand-neutral`
   * - Tags/badges: `bg-brand-secondary/20 text-brand-secondary`
   * - Progress indicators, charts (second data series)
   * - Decorative accents, illustrations
   *
   * ## Examples
   * - Purple: light `#a855f7`, dark `#c084fc`
   * - Teal: light `#14b8a6`, dark `#2dd4bf`
   * - Amber: light `#f59e0b`, dark `#fbbf24`
   */
  secondary: string

  /**
   * **Neutral** - Elevated surfaces and cards
   *
   * ## Role
   * Background color for cards, modals, and elevated UI elements.
   * Creates visual hierarchy by lifting content off the page background.
   *
   * ## Color Theory
   * - Light mode: Slightly off-white, subtle tint of brand color
   * - Dark mode: Slightly lighter than background, subtle elevation
   * - The difference from `background` should be subtle but perceivable
   *
   * ## Relationship to Background
   * - Light mode: `neutral` slightly darker than `background` (or tinted)
   * - Dark mode: `neutral` slightly lighter than `background`
   * - Difference: ~5-10% lightness shift or subtle hue tint
   *
   * ## Usage in Components
   * - Cards: `bg-brand-neutral`
   * - Modals/dialogs: `bg-brand-neutral`
   * - Dropdown menus: `bg-brand-neutral`
   * - Table headers: `bg-brand-neutral`
   * - Input fields: `bg-brand-neutral` or `bg-brand-background`
   *
   * ## Examples
   * - Light mode: `#f8fafc`, `#f1f5f9`, `#fafafa`
   * - Dark mode: `#1e293b`, `#27272a`, `#262626`
   */
  neutral: string

  /**
   * **Background** - Page canvas and primary surface
   *
   * ## Role
   * The foundational layer. Everything else sits on top of this.
   * Should be calming and unobtrusive - users will see it constantly.
   *
   * ## Color Theory
   * - Light mode: White or very light neutral (avoid pure #fff if harsh)
   * - Dark mode: Dark but not pure black (easier on eyes)
   * - Can have subtle brand tint for personality
   * - MUST INVERT between themes
   *
   * ## Accessibility Notes
   * - Pure white (#ffffff) can cause eye strain
   * - Pure black (#000000) has harsh contrast with text
   * - Slight off-white/off-black is more comfortable
   *
   * ## Usage in Components
   * - Page background: `bg-brand-background`
   * - Full-bleed sections: `bg-brand-background`
   * - Usually applied at layout level, not individual components
   *
   * ## Examples
   * - Light mode: `#ffffff`, `#fafafa`, `#f8fafc`
   * - Dark mode: `#0f172a`, `#09090b`, `#0a0a0a`
   */
  background: string
}

/**
 * Typography system with semantic font roles.
 *
 * ## The 4-Font System
 *
 * | Role      | Purpose                        | Characteristics            |
 * |-----------|--------------------------------|----------------------------|
 * | logo      | Brand mark, hero text          | Distinctive, memorable     |
 * | headers   | Page titles, section headings  | Strong, scannable          |
 * | primary   | Body text, paragraphs          | Readable, comfortable      |
 * | secondary | Code, captions, metadata       | Functional, compact        |
 *
 * ## Font Pairing Principles
 *
 * 1. **Contrast with harmony**: Fonts should differ enough to create hierarchy
 *    but share some quality (x-height, geometric vs humanist, era)
 *
 * 2. **Limit variety**: 2-3 fonts maximum in most UIs. This system allows 4
 *    but `logo` and `headers` can be the same font.
 *
 * 3. **Match the brand personality**:
 *    - Corporate/Professional: Sans-serif headers, serif or sans body
 *    - Creative/Playful: Display headers, rounded sans body
 *    - Technical/Developer: Monospace accents, clean sans body
 *    - Luxury/Editorial: Serif headers, elegant sans body
 */
export interface BrandTypography {
  /**
   * **Logo** - Display font for brand identity
   *
   * ## Role
   * The most distinctive font, used for the logo and hero moments.
   * Should be instantly recognizable as "the brand font."
   *
   * ## Characteristics
   * - Highly distinctive, unique personality
   * - May sacrifice readability for character
   * - Used sparingly - logo, hero headlines only
   *
   * ## Selection Guidelines
   * - **Tech/Modern**: Orbitron, Audiowide, Rajdhani
   * - **Playful**: Bungee, Bangers, Pacifico
   * - **Elegant**: Playfair Display, Cormorant, Italiana
   * - **Bold**: Anton, Bebas Neue, Oswald
   * - **Minimal**: Can be same as `headers` if brand is understated
   *
   * ## Usage
   * - `font-logo` class
   * - Logo text, hero headlines, splash screens
   * - NOT for body text or UI elements
   */
  logo: string

  /**
   * **Headers** - Heading font for titles and sections
   *
   * ## Role
   * Creates visual hierarchy. Users scan headers to navigate content.
   * Should be attention-grabbing but not overwhelming.
   *
   * ## Characteristics
   * - Clear, scannable at various sizes
   * - Works well in bold weights
   * - Distinct from body text
   *
   * ## Selection Guidelines
   * - **Professional**: Inter, Plus Jakarta Sans, DM Sans
   * - **Editorial**: Playfair Display, Lora, Merriweather
   * - **Modern**: Poppins, Montserrat, Raleway
   * - **Technical**: JetBrains Mono, IBM Plex Sans
   * - **Friendly**: Quicksand, Nunito, Comfortaa
   *
   * ## Usage
   * - `font-headers` class
   * - h1, h2, h3 elements
   * - Card titles, modal headers
   * - Navigation items (optional)
   */
  headers: string

  /**
   * **Primary** - Body font for main content
   *
   * ## Role
   * The workhorse font. Users read this for extended periods.
   * Readability is paramount - personality is secondary.
   *
   * ## Characteristics
   * - Highly readable at 14-18px
   * - Good x-height for screen reading
   * - Clear letter differentiation (Il1, O0)
   * - Multiple weights available (400, 500, 600, 700)
   *
   * ## Selection Guidelines
   * - **Sans-serif (modern)**: Inter, Source Sans Pro, Open Sans, Lato
   * - **Sans-serif (geometric)**: Poppins, Montserrat, Raleway
   * - **Sans-serif (humanist)**: Noto Sans, Fira Sans, PT Sans
   * - **Serif (editorial)**: Georgia, Lora, Source Serif Pro
   * - Generally avoid display/decorative fonts for body
   *
   * ## Usage
   * - `font-primary` class
   * - Body paragraphs, descriptions
   * - Form labels, button text
   * - Default font-family on `html`
   */
  primary: string

  /**
   * **Secondary** - Supporting font for technical content
   *
   * ## Role
   * For content that needs differentiation from main body:
   * code snippets, timestamps, metadata, captions.
   *
   * ## Characteristics
   * - Often monospace for code/data
   * - Compact, space-efficient
   * - Clear even at smaller sizes
   *
   * ## Selection Guidelines
   * - **Monospace (code)**: JetBrains Mono, Fira Code, Source Code Pro
   * - **Sans (captions)**: Inter, system-ui (if primary is serif)
   * - **Serif (quotes)**: Georgia, Lora (if primary is sans)
   *
   * ## Usage
   * - `font-secondary` class
   * - Code blocks, inline code
   * - Timestamps, dates, IDs
   * - Captions, footnotes
   * - Table data (optional)
   */
  secondary: string
}

/** Theme mode options */
export type ThemeMode = 'light' | 'dark'

/**
 * Complete brand configuration with theme support.
 *
 * ## Structure Overview
 *
 * ```
 * BrandConfig
 * ├── name: string         - Brand name displayed in UI
 * ├── tagline: string      - Brand slogan/description
 * ├── light: BrandPalette  - Colors for light mode
 * ├── dark: BrandPalette   - Colors for dark mode (inverted base/background)
 * └── typography           - Font family assignments
 * ```
 *
 * ## Theme Inversion Rules
 *
 * When creating light and dark palettes:
 *
 * | Color      | Light Mode    | Dark Mode     | Inversion |
 * |------------|---------------|---------------|-----------|
 * | base       | DARK color    | LIGHT color   | YES       |
 * | background | LIGHT color   | DARK color    | YES       |
 * | neutral    | Light-ish     | Dark-ish      | YES       |
 * | accent     | Vibrant       | Brighter      | Adjust    |
 * | secondary  | Vibrant       | Brighter      | Adjust    |
 * | contrast   | High-vis      | High-vis      | Maybe     |
 */
export interface BrandConfig {
  name: string
  tagline: string | string[]
  /** Light mode palette - base is dark, background is light */
  light: BrandPalette
  /** Dark mode palette - base is light, background is dark */
  dark: BrandPalette
  typography: BrandTypography
}
