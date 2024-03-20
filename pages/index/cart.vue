<template>
  <section class="h-full">
    <div class="mx-8 mt-8" v-if="cartStore.cart.length">
      <h1 class="text-3xl uppercase font-bold">
        Your Cart : {{ cartStore?.getTotal }} €
      </h1>

      <div class="lg:grid lg:grid-cols-3 lg:gap-4 mt-8">
        <div class="lg:col-span-2">
          <CartProductCard
            v-for="cartItem in cartStore.cart"
            :key="cartItem?.product?.id"
            :cartItem="cartItem"
          />
        </div>
        <div>
          <div class="w-full p-4 lg:sticky lg:top-0">
            <h2 class="text-2xl mb-2">
              Total : <span class="font-bold">{{ cartStore?.getTotal }} €</span>
            </h2>
            <button
              class="text-center border w-full p-4 rounded hover:opacity-80 bg-black text-white text-2xl"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-16" v-else>
      <h1 class="text-4xl text-center">YOUR SHOPPING CART IS EMPTY</h1>
      <p class="text-center mt-8">Discover Your Perfect Product with Us!</p>
      <div class="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto mt-4">
        <div
          v-for="category in mainStore.categories"
          :key="category"
          class="p-4 border text-center uppercase cursor-pointer"
        >
          {{ category }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useCartStore } from "../../store/cart";
import { useMainStore } from "../../store";

const cartStore = useCartStore();
const mainStore = useMainStore();
</script>
