<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useBrand } from '@/composables'
import BaseButton from '@/components/base/BaseButton.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const counter = useCounterStore()
const { brand } = useBrand()

// Display tagline(s) as array
const taglines = Array.isArray(brand.value.tagline) ? brand.value.tagline : [brand.value.tagline]
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col gap-12 py-8">
      <!-- Hero Section -->
      <section class="flex flex-col items-center gap-6 text-center">
        <h1 class="font-logo text-brand-accent text-5xl">
          {{ brand.name }}
        </h1>
        <p
          v-for="(tagline, idx) in taglines"
          :key="idx"
          class="font-headers text-brand-base/80 text-xl"
        >
          {{ tagline }}
        </p>
        <div class="mt-4 flex gap-4">
          <BaseButton size="lg">Get Started</BaseButton>
          <BaseButton
            variant="outline"
            size="lg"
          >
            Learn More
          </BaseButton>
        </div>
      </section>

      <!-- Feature Cards -->
      <section class="grid gap-6 md:grid-cols-3">
        <div class="bg-brand-neutral rounded-xl p-6 shadow-sm">
          <div class="bg-brand-accent/10 mb-4 inline-block rounded-lg p-3">
            <svg
              class="text-brand-accent h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="font-headers text-brand-base text-lg">Lightning Fast</h3>
          <p class="font-primary text-brand-base/60 mt-2">
            Built with Vite for instant HMR and optimized production builds.
          </p>
        </div>

        <div class="bg-brand-neutral rounded-xl p-6 shadow-sm">
          <div class="bg-brand-secondary/10 mb-4 inline-block rounded-lg p-3">
            <svg
              class="text-brand-secondary h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <h3 class="font-headers text-brand-base text-lg">Brand System</h3>
          <p class="font-primary text-brand-base/60 mt-2">
            Centralized colors and typography. Change your brand in one place.
          </p>
        </div>

        <div class="bg-brand-neutral rounded-xl p-6 shadow-sm">
          <div class="bg-brand-contrast/10 mb-4 inline-block rounded-lg p-3">
            <svg
              class="text-brand-contrast h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <h3 class="font-headers text-brand-base text-lg">Component Ready</h3>
          <p class="font-primary text-brand-base/60 mt-2">
            Pre-built base components with brand-aware styling and variants.
          </p>
        </div>
      </section>

      <!-- Interactive Demo -->
      <section class="bg-brand-base text-brand-neutral rounded-2xl p-8">
        <h2 class="font-headers text-2xl">Interactive Demo</h2>
        <p class="font-secondary text-brand-neutral/70 mt-2">
          Counter state managed by Pinia store
        </p>

        <div class="mt-6 flex items-center gap-6">
          <div class="font-logo text-brand-contrast text-4xl">
            {{ counter.count }}
          </div>
          <div class="flex gap-2">
            <BaseButton
              variant="contrast"
              @click="counter.decrement"
            >
              Decrease
            </BaseButton>
            <BaseButton
              variant="secondary"
              @click="counter.increment"
            >
              Increase
            </BaseButton>
            <BaseButton
              variant="ghost"
              class="!text-brand-neutral"
              @click="counter.reset"
            >
              Reset
            </BaseButton>
          </div>
        </div>

        <p class="font-secondary text-brand-neutral/50 mt-4 text-sm">
          Double: {{ counter.doubleCount }}
        </p>
      </section>

      <!-- Button Variants Showcase -->
      <section>
        <h2 class="font-headers text-brand-base text-2xl">Button Variants</h2>
        <p class="text-brand-base/60 mt-2">All buttons use brand colors from BrandConfig</p>

        <div class="mt-6 flex flex-wrap gap-4">
          <BaseButton variant="primary">Primary</BaseButton>
          <BaseButton variant="secondary">Secondary</BaseButton>
          <BaseButton variant="contrast">Contrast</BaseButton>
          <BaseButton variant="outline">Outline</BaseButton>
          <BaseButton variant="ghost">Ghost</BaseButton>
          <BaseButton
            variant="primary"
            disabled
          >
            Disabled
          </BaseButton>
          <BaseButton
            variant="primary"
            loading
          >
            Loading
          </BaseButton>
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-4">
          <BaseButton
            variant="primary"
            size="sm"
          >
            Small
          </BaseButton>
          <BaseButton
            variant="primary"
            size="md"
          >
            Medium
          </BaseButton>
          <BaseButton
            variant="primary"
            size="lg"
          >
            Large
          </BaseButton>
        </div>
      </section>

      <!-- Code Example -->
      <section class="bg-brand-neutral rounded-xl p-6">
        <h2 class="font-headers text-brand-base text-xl">Usage Example</h2>
        <pre
          class="bg-brand-base font-secondary text-brand-neutral mt-4 overflow-x-auto rounded-lg p-4 text-sm"
        ><code>// Change brand colors in src/composables/useBrand.ts
const defaultBrand: BrandConfig = {
  name: '{{ brand.name }}',
  palette: {
    accent: '{{ brand.palette.accent }}',
    // ... other colors
  },
  typography: {
    logo: '{{ brand.typography.logo }}',
    // ... other fonts
  },
}</code></pre>
      </section>
    </div>
  </DefaultLayout>
</template>
