<template>
  <section>
    <BackButton />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 my-8"
    >
      <Product
        v-for="product in store.products"
        :key="product"
        :product="product"
      />
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

useHead({
  title: "products",
});
</script>
