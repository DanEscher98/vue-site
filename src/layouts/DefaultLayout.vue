<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="border-b border-gray-200 bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <RouterLink
          to="/"
          class="text-xl font-bold text-gray-900"
        >
          Vue Template
        </RouterLink>
        <div class="flex gap-6">
          <RouterLink
            to="/"
            class="text-gray-600 transition hover:text-gray-900"
            active-class="text-blue-600 font-medium"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-600 transition hover:text-gray-900"
            active-class="text-blue-600 font-medium"
          >
            About
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8">
      <slot />
    </main>

    <footer class="border-t border-gray-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
        Built with Vue 3 + Vite + Tailwind CSS
      </div>
    </footer>
  </div>
</template>
