<template>
  <button
    v-if="!productInCart"
    @click="addToCart(product)"
    class="group w-full bg-white border text-black rounded p-4 my-4 hover:border-black flex items-center justify-center gap-2"
  >
    Add To Cart <SvgCart />
  </button>
  <div v-else>
    <div
      v-if="showRemoveConfirmation"
      class="my-4 flex items-center justify-between border border-black rounded bg-black text-white"
    >
      <div class="p-4">REMOVE?</div>
      <div class="uppercase flex">
        <div class="p-4 cursor-pointer border-l" @click="remove()">Yes</div>
        <div
          class="p-4 cursor-pointer border-l"
          @click="closeRemoveConfirmation()"
        >
          No
        </div>
      </div>
    </div>
    <div v-else class="my-4 flex items-center justify-between border rounded">
      <div class="border-r"><QuantityControl :cartItem="productInCart" /></div>
      <div class="text-2xl">{{ productInCart.quantity }}</div>
      <div class="mx-4 cursor-pointer" @click="openRemoveConfirmation()">
        <SvgTrash />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cart";
import type { CartItem } from "../api/dto/cartItem.interface";
import type { Product } from "../api/dto/product.interface";
import { computed, ref } from "vue";

const props = defineProps(["product"]);

const cartStore = useCartStore();

const addToCart = (product: Product) => {
  cartStore.addToCart({ product, quantity: 1 });
};

const productInCart = computed(() => {
  return cartStore.cart.find(
    (cartItem: CartItem) => cartItem.product.id === props.product?.id
  );
});

// Remove item from cart
const showRemoveConfirmation = ref(false);

const openRemoveConfirmation = () => {
  showRemoveConfirmation.value = true;
};

const closeRemoveConfirmation = () => {
  showRemoveConfirmation.value = false;
};

const remove = () => {
  cartStore.remove(props.product.id);
  closeRemoveConfirmation();
};
</script>
