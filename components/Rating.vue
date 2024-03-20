<template>
  <div class="flex items-center">
    <SvgStar v-for="r in toInt(rating?.rate)" :key="r" />
    <SvgHalfStar v-if="!isInt(rating?.rate)" />
    <div class="text-[12px] ml-2">( {{ rating?.count }} )</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["rating"]);

const isInt = (n) => {
  return n % 1 === 0;
};

const toInt = (n) => {
  if (n) return parseInt(n);
  return 0;
};
</script>
