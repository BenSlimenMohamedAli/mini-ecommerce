import type { CartItem } from "./../api/dto/cartItem.interface";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as CartItem[],
  }),
  actions: {
    addToCart(cartItem: CartItem) {
      this.$patch((state) => {
        const tempCartItem = state.cart.find(
          (item: CartItem, index: number) => {
            if (item.product.id === cartItem.product.id) {
              state.cart[index].quantity += 1;
              return item;
            }

            return null;
          }
        );

        if (!tempCartItem) state.cart.push(cartItem);
      });
    },
    incrementQuantity(productId: number) {
      this.$patch((state) => {
        const index = state.cart.findIndex(
          (cartItem: CartItem) => cartItem.product.id === productId
        );

        state.cart[index].quantity += 1;
      });
    },

    decrementQuantity(productId: number) {
      this.$patch((state) => {
        const index = state.cart.findIndex(
          (cartItem: CartItem) => cartItem.product.id === productId
        );

        if (state.cart[index].quantity > 1) state.cart[index].quantity -= 1;
      });
    },

    remove(productId: number) {
      this.$patch((state) => {
        const index = state.cart.findIndex(
          (cartItem: CartItem) => cartItem.product.id === productId
        );

        state.cart.splice(index, 1);
      });
    },
  },
  getters: {
    getTotal(): string {
      let total: number = 0;
      this.cart.forEach((cartItem: CartItem) => {
        total += cartItem.product.price * cartItem.quantity;
      });

      return total.toFixed(2);
    },
  },
});
