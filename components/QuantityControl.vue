<template>
  <div class="grid grid-cols-2 text-2xl">
    <div
      @click="cartStore.decrementQuantity(cartItem.product.id)"
      class="p-3 px-6 rounded-l cursor-pointer hover:bg-black hover:text-white"
      :class="{
        'opacity-20': cartItem.quantity === 1,
      }"
    >
      -
    </div>
    <div
      @click="cartStore.incrementQuantity(cartItem.product.id)"
      class="p-3 px-6 cursor-pointer border-l hover:bg-black hover:text-white"
    >
      +
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from "../api/dto/cartItem.interface";
import { useCartStore } from "../store/cart";

const props = defineProps(["cartItem"]);

const cartStore = useCartStore();
</script>
