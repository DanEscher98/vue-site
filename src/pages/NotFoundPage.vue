<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center justify-center py-24">
      <h1 class="text-brand-base/30 text-6xl font-bold">404</h1>
      <p class="text-brand-base/60 mt-4 text-xl">Page not found</p>
      <p class="text-brand-base/50 mt-2">The page you're looking for doesn't exist.</p>

      <BaseButton
        class="mt-8"
        @click="router.push('/')"
      >
        Go Home
      </BaseButton>
    </div>
  </DefaultLayout>
</template>
