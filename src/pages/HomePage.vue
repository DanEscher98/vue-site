<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import BaseButton from '@/components/base/BaseButton.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const counter = useCounterStore()
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center gap-8 py-12">
      <div class="flex gap-8">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vite.svg"
            class="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/vue.svg"
            class="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]"
            alt="Vue logo"
          />
        </a>
      </div>

      <h1 class="text-4xl font-bold text-gray-900">Vite + Vue</h1>

      <div class="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-md">
        <p class="text-lg text-gray-600">
          Count: <span class="font-bold text-blue-600">{{ counter.count }}</span> (Double:
          {{ counter.doubleCount }})
        </p>

        <div class="flex gap-2">
          <BaseButton
            variant="outline"
            @click="counter.decrement"
          >
            -
          </BaseButton>
          <BaseButton @click="counter.increment">+</BaseButton>
          <BaseButton
            variant="secondary"
            @click="counter.reset"
          >
            Reset
          </BaseButton>
        </div>
      </div>

      <p class="text-gray-500">
        Edit <code class="rounded bg-gray-100 px-2 py-1">src/pages/HomePage.vue</code> to test HMR
      </p>
    </div>
  </DefaultLayout>
</template>
