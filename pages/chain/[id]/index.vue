<template>
  <div class="main mt-7" style="text-align: center">
    <h1 class="text-7xl font-bold title text-center text-white">
      {{ SelectedChainData.name }}
    </h1>
    <h2 class="text-center text mt-3 text-2xl">
      {{ SelectedChainData.description }}
    </h2>
    <a
      :href="SelectedChainData.discord"
      class="btn btn-md btn-outline btn-warning mt-5 text-xl transform duration-200 hover:scale-105"
      >Join Discord
    </a>
    <NuxtLink
      :to="'/chains'"
      class="btn btn-md btn btn-warning mt-5 text-xl mx-2 transform transition-all duration-200 hover:scale-105"
    >
      Back to Chains
    </NuxtLink>
  </div>

  <div class="section">
    <h1 class="text-7xl font-bold title text-center text-white">
      Chain Services
    </h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 mt-8">
        <ServiceLabel
          v-for="service in SelectedChainData.Services"
          :data="service"
        ></ServiceLabel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { chainData } from "../../config/chains";

let SelectedChain = useRoute().params.id || useRoute().hash.slice(0);
let SelectedChainData = chainData[SelectedChain];
</script>
