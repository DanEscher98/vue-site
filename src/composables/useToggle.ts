import { ref } from 'vue'
import type { Ref } from 'vue'

interface UseToggleReturn {
  value: Ref<boolean>
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

/**
 * Simple boolean toggle composable
 * @param initialValue - initial boolean value
 */
export function useToggle(initialValue = false): UseToggleReturn {
  const value = ref(initialValue)

  function toggle() {
    value.value = !value.value
  }

  function setTrue() {
    value.value = true
  }

  function setFalse() {
    value.value = false
  }

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  }
}
