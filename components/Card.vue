<template>
  <div class="col-md-4">
    <NuxtLink :to="'/blog/' + blog.ID" :id="blog.ID" class="card text-bg-dark">
      <img :src="blog.Banner" class="card-img-top" alt="Logo" />
      <div class="card-body">
        <h5 class="card-title">{{ blog.Title }}</h5>
      </div>
      <div class="card-footer">{{ timeSince }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { blog, timeSince } = defineProps(["blog", "timeSince"]);
</script>
