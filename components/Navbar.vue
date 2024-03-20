<template>
  <div
    class="flex gap-4 justify-between text-center px-8 py-5 bg-white border-b z-20 shadow"
  >
    <div
      class="p-4 border rounded cursor-pointer flex items-center justify-center"
      @click="navigationStore.openSidebar()"
    >
      <SvgMenu />
    </div>
    <div
      class="flex-1 uppercase text-black flex items-center justify-center text-[20px]"
    >
      {{ navigationStore.pageTitle }}
    </div>
    <div
      class="p-4 border rounded cursor-pointer flex items-center justify-center relative"
      @click="navigateTo('/cart')"
    >
      <SvgCart />
      <div
        class="absolute -top-3 -left-3 bg-black text-white rounded-full text-[10px] w-6 h-6 flex items-center justify-center"
      >
        {{ cartStore.cart.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { useNavigationStore } from "../store/navigation";
import { useCartStore } from "../store/cart";
import { computed } from "vue";

const store = useMainStore();
const navigationStore = useNavigationStore();
const cartStore = useCartStore();
</script>
