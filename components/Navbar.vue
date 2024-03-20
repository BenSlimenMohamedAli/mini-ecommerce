<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center px-8 py-5 bg-white border-b z-20"
  >
    <div
      v-for="category in store.categories"
      :key="category"
      class="p-4 border rounded cursor-pointer flex items-center justify-center uppercase"
      @click="navigateTo('/products/' + category)"
    >
      {{ category }}
    </div>
    <div
      class="p-4 border rounded cursor-pointer flex items-center justify-center"
      @click="navigateTo('/cart')"
    >
      <SvgCart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";

const store = useMainStore();
</script>
