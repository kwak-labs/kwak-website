<template>
  <a
    v-if="!data.nuxt"
    :href="data.link"
    target="_blank"
    class="class=flex items-center justify-center text-3xl font-semibold shadow-2xl rounded-lg label mx-5 w-[275px] h-[75px] transform transition-all duration-200 hover:scale-105"
    >{{ data.label }}
  </a>
  <NuxtLink
    v-else
    :to="data.link"
    class="flex items-center justify-center text-3xl font-semibold shadow-2xl rounded-lg label mx-5 w-[275px] h-[75px] transform transition-all duration-200 hover:scale-105"
  >
    {{ data.label }}
  </NuxtLink>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>

<style scoped>
.label {
  background-color: oklch(0.278078 0.029596 256.847952/1);
}
</style>
