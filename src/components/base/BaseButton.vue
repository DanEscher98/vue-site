<script setup lang="ts">
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'contrast'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

/**
 * Variant classes using brand color tokens from @theme
 * These reference CSS variables set by useBrand composable
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-accent text-brand-neutral hover:brightness-110 focus:ring-brand-accent',
  secondary:
    'bg-brand-secondary text-brand-neutral hover:brightness-110 focus:ring-brand-secondary',
  contrast: 'bg-brand-contrast text-brand-base hover:brightness-110 focus:ring-brand-contrast',
  outline:
    'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10 focus:ring-brand-accent',
  ghost: 'text-brand-base hover:bg-brand-base/10 focus:ring-brand-base',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
</script>

<template>
  <button
    type="button"
    class="inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[variantClasses[variant], sizeClasses[size]]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <svg
      v-if="loading"
      class="mr-2 -ml-1 h-4 w-4 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <slot />
  </button>
</template>
