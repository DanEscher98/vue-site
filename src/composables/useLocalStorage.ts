import { ref, watch } from 'vue'
import type { Ref } from 'vue'

/**
 * Reactive localStorage composable
 * @param key - localStorage key
 * @param defaultValue - default value if key doesn't exist
 */
export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
  const storedValue = localStorage.getItem(key)
  const data = ref<T>(storedValue ? JSON.parse(storedValue) : defaultValue) as Ref<T>

  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true }
  )

  return data
}
