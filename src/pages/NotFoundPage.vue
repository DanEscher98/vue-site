<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center justify-center py-24">
      <h1 class="text-6xl font-bold text-gray-300">404</h1>
      <p class="mt-4 text-xl text-gray-600">Page not found</p>
      <p class="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>

      <BaseButton
        class="mt-8"
        @click="router.push('/')"
      >
        Go Home
      </BaseButton>
    </div>
  </DefaultLayout>
</template>
