<template>
  <div class="flex items-center">
    <SvgStar v-for="rating in toInt(ratingScore)" :key="rating" />
    <SvgHalfStar v-if="!isInt(ratingScore)" />
    <div class="text-[12px] ml-2">( 200 )</div>
  </div>
</template>

<script setup lang="ts">
const ratingScore = 4.4;

const isInt = (n) => {
  return n % 1 === 0;
};

const toInt = (n) => {
  return parseInt(n);
};
</script>
