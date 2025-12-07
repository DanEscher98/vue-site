<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useBrand } from '@/composables'

// Initialize brand system - injects CSS variables into :root
// This must be called at app root to ensure all components have access
useBrand()
</script>

<template>
  <RouterView />
</template>
