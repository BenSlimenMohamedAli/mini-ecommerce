<template>
  <section>
    <h1 class="text-2xl max-w-screen-xl text-center my-8">
      Select Your Desired Product Category, or Explore Options from the Sidebar
    </h1>
    <div class="grid grid-cols-2 gap-4 max-w-screen-xl px-8 mx-auto mt-4">
      <div
        v-for="category in mainStore.categories"
        :key="category"
        @click="navigate('/products/' + category)"
        class="p-4 border text-center uppercase cursor-pointer hover:border-black"
      >
        {{ category }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from "../../store";
import { useNavigationStore } from "../../store/navigation";

const mainStore = useMainStore();
const navigationStore = useNavigationStore();

navigationStore.changePageTitle("home");

const navigate = (path) => {
  navigateTo(path);
};

useHead({
  title: "home",
});
</script>
