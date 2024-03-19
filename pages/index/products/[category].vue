<template>
  <section
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 mb-8"
  >
    <div
      v-for="product in store.products"
      :key="product"
      class="cursor-pointer"
    >
      <div
        class="group relative aspect-[1/1] flex flex-col gap-4 items-center justify-between p-5 pt-10 overflow-hidden border rounded"
      >
        <img
          class="max-h-[70%] group-hover:scale-110 transition-all"
          :src="product.image"
          :alt="product.title"
        />
        <div class="text-center space-y-2 py-4">
          <h1 class="text-center font-bold text-[60%] line-clamp-3">
            {{ product.title }}
          </h1>
          <h5>15TND</h5>
        </div>

        <Rating class="absolute top-3 right-3" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from "../../../store";
import { onMounted, onBeforeMount } from "vue";

const store = useMainStore();
const route = useRoute();

onBeforeMount(() => {
  store.fetchProductsByCategory(route.params.category);
});
</script>
