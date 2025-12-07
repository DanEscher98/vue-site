<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-2xl py-12">
      <h1 class="mb-6 text-3xl font-bold text-gray-900">About This Template</h1>

      <div class="space-y-4 text-gray-600">
        <p>
          This is a modern Vue 3 template configured with best practices for building static sites
          and web applications.
        </p>

        <h2 class="pt-4 text-xl font-semibold text-gray-800">Features</h2>
        <ul class="list-inside list-disc space-y-2">
          <li>Vue 3 with Composition API and TypeScript</li>
          <li>Vite for fast development and builds</li>
          <li>Tailwind CSS v4 for styling</li>
          <li>Vue Router for navigation</li>
          <li>Pinia for state management</li>
          <li>Vitest for testing</li>
          <li>ESLint + Prettier for code quality</li>
          <li>PWA support with vite-plugin-pwa</li>
        </ul>

        <div class="pt-6">
          <BaseButton @click="router.push('/')">Go Home</BaseButton>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
