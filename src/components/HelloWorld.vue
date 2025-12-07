<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>

    <div class="card">
      <button
        type="button"
        class="rounded bg-brand-accent px-4 py-2 font-medium text-brand-neutral transition hover:brightness-110"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-vue </a
      >, the official Vue + Vite starter
    </p>

    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vue Docs Scaling up Guide </a
      >.
    </p>

    <p class="text-brand-base/50">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
