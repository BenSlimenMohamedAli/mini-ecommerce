import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    sidebarOpened: false,
    pageTitle: "",
  }),
  actions: {
    closeSidebar() {
      this.$patch((state) => {
        state.sidebarOpened = false;
      });
    },
    openSidebar() {
      this.$patch((state) => {
        state.sidebarOpened = true;
      });
    },
    changePageTitle(title: string) {
      this.$patch((state) => {
        state.pageTitle = title;
      });
    },
  },
  getters: {},
});
