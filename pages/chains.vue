<template>
  <div class="main mt-7" style="text-align: center">
    <h1 class="text-7xl font-bold title text-center text-white">Testnet</h1>
    <div class="flex flex-col justify-center items-center">
      <NuxtLink
        :to="'/'"
        class="btn btn-md btn btn-outline btn-warning text-xl mt-4 mx-2 transform transition-all duration-200 hover:scale-105"
      >
        Go back
      </NuxtLink>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 mt-10">
        <div
          v-for="chain in testnetChains"
          :key="chain.name"
          class="w-[450px] max-w-sm pt-5 border rounded-lg shadow card ms-5"
        >
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-[75px] h-[75px] p-2 mb-3 border rounded-full"
              :src="chain.image"
              :alt="chain.name + ' image'"
            />
            <h5 class="mb-1 text-xl font-medium text-white">
              {{ chain.name }}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              chain.description
            }}</span>
            <div class="flex mt-4 md:mt-6">
              <a
                :href="chain.website"
                class="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-black kwak-yellow-bg rounded-lg transform transition-all duration-200 hover:scale-105"
                >Visit Website
              </a>
              <NuxtLink
                :to="chain.path"
                class="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ms-3 transform transition-all duration-200 hover:scale-105"
                >Services</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { chainData } from "../config/chains";

const chainEntries = Object.entries(chainData);

const testnetChains = Object.fromEntries(
  chainEntries.filter(([, chain]) => chain.testnet)
);

let mainnetChains = Object.fromEntries(
  chainEntries.filter(([, chain]) => !chain.testnet)
);
</script>

<style scoped>
.section {
  margin-top: 125px;
}
/* .section .title {
  color: #fff;
} */

.card {
  background-color: oklch(0.278078 0.029596 256.847952/1);
}

.kwak-yello-text {
  color: #e1b723;
}

.kwak-yellow-bg {
  background-color: #e1b723;
}
</style>
