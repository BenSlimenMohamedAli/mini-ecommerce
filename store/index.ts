import { productsByCategory } from "~/api/products";
import { allCategories } from "~/api/categories";
import { defineStore } from "pinia";
import type { Product } from "~/api/dto/product.interface";

export const useMainStore = defineStore("main", {
  state: () => ({
    categories: [] as string[],
    products: [] as Product[],
    cart: [],
  }),
  actions: {
    async fetchCategories() {
      const result = await allCategories();
      this.$patch({
        categories: result,
      });
    },
    async fetchProductsByCategory(category: string) {
      const result = await productsByCategory(category);
      this.products = result;
    },
  },
  getters: {
    getAllCategories() {
      return null;
    },
  },
});
