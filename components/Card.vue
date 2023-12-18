<template>
  <div
    class="flex items-center m-4 transform transition-all duration-200 hover:scale-105"
  >
    <NuxtLink :to="'/blog/' + blog.ID" :id="blog.ID">
      <div class="flex items-center m-4">
        <div class="max-w-md rounded-lg shadow card">
          <img class="rounded-t-lg" :src="blog.Banner" alt="" />

          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 font-bold tracking-tight dark:text-white"
                :class="blog.Title.length <= 26 ? 'text-2xl' : 'text-xl'"
              >
                {{ blog.Title }}
              </h5>
            </a>
            <p class="mb-3 font-normal dark:text-gray-400">{{ timeSince }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { blog, timeSince } = defineProps(["blog", "timeSince"]);
</script>

<style scoped>
.card {
  background-color: oklch(0.278078 0.029596 256.847952/1);
}
</style>
