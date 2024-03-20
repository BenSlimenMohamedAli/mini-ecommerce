<template>
  <div>
    <BackButton />

    <div class="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div
        class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col max-w-screen-sm mx-auto"
      >
        <h1 class="text-center text-2xl mb-8">{{ cartStore?.getTotal }} €</h1>
        <button
          class="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
        >
          <div>
            <SvgApple />
          </div>
          <div>
            <p class="text-base leading-4">Pay</p>
          </div>
        </button>

        <div class="flex flex-row justify-center items-center mt-6">
          <hr class="border w-full" />
          <p
            class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white"
          >
            or pay with card
          </p>
          <hr class="border w-full" />
        </div>

        <div class="mt-8">
          <input
            class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
        </div>

        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50"
          >Card details</label
        >
        <div class="mt-2 flex-col">
          <div>
            <input
              class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="0000 1234 6549 15151"
            />
          </div>
          <div class="flex-row flex">
            <input
              class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="MM/YY"
            />
            <input
              class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="CVC"
            />
          </div>
        </div>

        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50"
          >Name on card</label
        >
        <div class="mt-2 flex-col">
          <div>
            <input
              class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="Name on card"
            />
          </div>
        </div>

        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50"
          >Country or region</label
        >
        <div class="mt-2 flex-col">
          <input
            class="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="COUNTRY"
          />

          <input
            class="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="ZIP"
          />
        </div>

        <button
          class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
        >
          <div>
            <p class="text-base leading-4">Pay</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from "../../store/navigation";
import { useCartStore } from "../../store/cart";

const cartStore = useCartStore();
const navigationStore = useNavigationStore();

navigationStore.changePageTitle("checkout");

useHead({
  title: "checkout",
});
</script>
