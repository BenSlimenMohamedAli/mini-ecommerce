<template>
  <NuxtLayout>
    <section
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center px-8 py-5 sticky top-0 bg-white border-b mb-8 z-20"
    >
      <div
        v-for="category in store.categories"
        :key="category"
        class="p-4 border rounded cursor-pointer flex items-center justify-center"
        @click="navigateTo('/products/' + category)"
      >
        {{ category }}
      </div>
      <div
        class="p-4 border rounded cursor-pointer flex items-center justify-center"
        @click="navigateTo('/cart')"
      >
        Cart
      </div>
    </section>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { onMounted, onBeforeMount } from "vue";

const store = useMainStore();

onBeforeMount(() => {
  store.fetchCategories().then(() => {
    navigateTo("/products/" + store.categories[0]);
  });
});
</script>
