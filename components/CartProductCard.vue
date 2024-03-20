<template>
  <div class="border rounded p-4 mb-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      class="relative aspect-[1/1] flex flex-col gap-4 items-center justify-center p-5 pt-10 overflow-hidden sm:border-r"
    >
      <img
        class="max-h-[100%] group-hover:scale-110 transition-all"
        :src="cartItem.product.image"
        :alt="cartItem.product.title"
      />

      <Rating
        :rating="cartItem.product?.rating"
        class="absolute top-3 right-3"
      />
    </div>
    <div class="lg:col-span-2 relative">
      <div
        class="absolute -top-4 -right-4 -left-4 -bottom-4 rounded-r bg-opacity-80 bg-black flex justify-center items-center"
        v-if="showRemoveConfirmation"
      >
        <div class="text-white">
          <h1 class="text-center">REMOVE FROM CART?</h1>
          <div class="uppercase border flex text-center mt-5">
            <div
              class="border-r flex-1 p-2 px-8 cursor-pointer"
              @click="remove()"
            >
              Yes
            </div>
            <div
              class="flex-1 p-2 px-8 cursor-pointer"
              @click="closeRemoveConfirmation()"
            >
              No
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="flex justify-end mb-4" @click="openRemoveConfirmation()">
            <SvgTrash class="cursor-pointer hover:scale-125" />
          </div>
          <h1 class="text-3xl">
            <span class="font-bold">{{ cartItem.quantity }}</span> x
            {{ cartItem?.product?.title }}
          </h1>
        </div>
        <div class="flex justify-between items-center pt-4">
          <div class="border rounded">
            <QuantityControl :cartItem="cartItem" />
          </div>
          <h5 class="text-3xl mt-auto font-bold">{{ itemPrice }} €</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from "../api/dto/cartItem.interface";
import { useCartStore } from "../store/cart";
import { computed, ref } from "vue";

const props = defineProps(["cartItem"]);

const cartStore = useCartStore();

// Remove item from cart
const showRemoveConfirmation = ref(false);

const openRemoveConfirmation = () => {
  showRemoveConfirmation.value = true;
};

const closeRemoveConfirmation = () => {
  showRemoveConfirmation.value = false;
};

const remove = () => {
  cartStore.remove(props.cartItem.product.id);
  closeRemoveConfirmation();
};

const itemPrice = computed(() => {
  return (props.cartItem?.product?.price * props.cartItem.quantity).toFixed(2);
});
</script>
