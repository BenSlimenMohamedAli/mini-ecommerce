<template>
  <div class="w-full group">
    <div
      class="relative aspect-[1/1] flex flex-col gap-4 items-center justify-center p-5 pt-10 overflow-hidden border rounded"
    >
      <img
        class="max-h-[100%] group-hover:scale-110 transition-all"
        :src="product.image"
        :alt="product.title"
      />

      <div
        class="items-center justify-center bg-black absolute top-0 right-0 left-0 bottom-0 z-10 hidden group-hover:flex bg-opacity-50 p-8 text-gray-200 text-[14px] uppercase"
      >
        Discover More <SvgArrowRight :color="'#e4e7eb'" />
      </div>

      <Rating :rating="product?.rating" class="absolute top-3 right-3" />
    </div>
    <div class="w-full mt-4 pr-2">
      <h1 class="truncate">
        {{ product.title }}
      </h1>
      <h5 class="font-bold text-[18px]">{{ product.price }} €</h5>
    </div>

    <ProductButton :product="product" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["product"]);
</script>
