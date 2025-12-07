import { computed, ref, watchEffect } from 'vue'
import type { ThemeMode } from '@/types/brand'

const STORAGE_KEY = 'theme-mode'

/** Get initial theme from localStorage or default to light */
function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return 'light'
}

/** Reactive theme mode state */
const themeMode = ref<ThemeMode>(getInitialTheme())

/** Whether dark mode is currently active */
const isDark = computed(() => themeMode.value === 'dark')

/**
 * Theme management composable
 *
 * Manages light/dark mode with localStorage persistence.
 *
 * @example
 * ```vue
 * <script setup>
 * const { isDark, toggleTheme } = useTheme()
 * </script>
 *
 * <template>
 *   <button @click="toggleTheme">
 *     {{ isDark ? 'Light' : 'Dark' }} Mode
 *   </button>
 * </template>
 * ```
 */
export function useTheme() {
  // Persist to localStorage and update document class
  watchEffect(() => {
    if (typeof window === 'undefined') return

    localStorage.setItem(STORAGE_KEY, themeMode.value)

    // Update document class for Tailwind dark mode (if needed)
    if (themeMode.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  /** Set theme mode */
  function setTheme(mode: ThemeMode) {
    themeMode.value = mode
  }

  /** Toggle between light and dark */
  function toggleTheme() {
    themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    /** Current theme mode (light/dark) */
    themeMode: computed(() => themeMode.value),
    /** Whether dark mode is active */
    isDark,
    /** Set theme mode */
    setTheme,
    /** Toggle between light and dark */
    toggleTheme,
  }
}
