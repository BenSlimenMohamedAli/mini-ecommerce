<template>
  <NuxtLayout>
    <section class="flex flex-col max-h-screen">
      <Sidebar />
      <Navbar />
      <div class="overflow-y-scroll">
        <NuxtPage />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { onMounted, onBeforeMount } from "vue";

const store = useMainStore();

onBeforeMount(() => {
  store.fetchCategories().then(() => {});
});
</script>
