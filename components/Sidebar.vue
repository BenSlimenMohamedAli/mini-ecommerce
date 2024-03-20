<template>
  <section>
    <div
      v-if="navigationStore.sidebarOpened"
      class="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-30 transition-all"
      @click="navigationStore.closeSidebar()"
    ></div>
    <aside
      class="fixed top-0 bottom-0 left-0 w-[260px] bg-white z-30 transition-all duration-500 border-r"
      :class="{ '-left-[260px]': !navigationStore.sidebarOpened }"
    >
      <h1
        class="font-bold text-center text-[20px] p-4 border-b shadow py-8 pt-9 uppercase"
      >
        Mini E-Commerce
      </h1>
      <div
        class="uppercase p-4 cursor-pointer flex justify-between items-center hover:bg-black hover:text-white"
        :class="{
          'bg-black text-white': navigationStore.pageTitle === 'home',
        }"
        @click="navigate('/')"
      >
        Home
      </div>
      <div
        class="uppercase p-4 cursor-pointer flex justify-between items-center hover:bg-black hover:text-white"
        v-for="category in store.categories"
        :key="category"
        :class="{
          'bg-black text-white': navigationStore.pageTitle === category,
        }"
        @click="navigate('/products/' + category)"
      >
        {{ category }}
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { useNavigationStore } from "../store/navigation";

const store = useMainStore();
const navigationStore = useNavigationStore();

const navigate = (path) => {
  navigationStore.closeSidebar();
  navigateTo(path);
};
</script>
