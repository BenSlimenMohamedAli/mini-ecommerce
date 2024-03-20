import { productsByCategory } from "~/api/products";
import { allCategories } from "~/api/categories";
import { defineStore } from "pinia";
import type { Product } from "~/api/dto/product.interface";
import { useNavigationStore } from "../store/navigation";

export const useMainStore = defineStore("main", {
  state: () => ({
    categories: [] as string[],
    products: [] as Product[],
    selectedCategory: "",
  }),
  actions: {
    async fetchCategories() {
      const result = await allCategories();
      this.$patch({
        categories: result,
      });
    },
    async fetchProductsByCategory(category: string) {
      const navigationStore = useNavigationStore();
      navigationStore.pageTitle = category;
      const result = await productsByCategory(category);
      this.$patch((state) => {
        state.products = result;
        this.selectedCategory = category;
      });
    },
  },
  getters: {},
});
