<template>
  <div class="flex justify-start flex-col items-start space-y-2 my-4 mx-8">
    <button
      class="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1"
      @click="$router.go(-1)"
    >
      <svg
        class="fill-stroke"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.91681 7H11.0835"
          stroke="currentColor"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.91681 7L5.25014 9.33333"
          stroke="currentColor"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.91681 7.00002L5.25014 4.66669"
          stroke="currentColor"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="text-sm leading-none">Back</p>
    </button>
  </div>
</template>
