<template>
  <div class="main mt-10">
    <h1 class="text-7xl font-bold title text-center text-white">{{ title }}</h1>
    <h2 class="text-center mt-3 text-3xl">
      Posted On: {{ date.toISOString().slice(0, 10) }}
    </h2>
    <h2 class="text-center mt-3 text-3xl">
      {{ date ? timeSince(date) : "Loading..." }}
    </h2>
  </div>

  <div class="flex flex-col justify-center items-center">
    <div class="markdown-block p-3 prose max-w-[77%]">
      <vue-markdown :source="body"> </vue-markdown>
    </div>
    <div class="flex justify-center items-center w-full">
      <NuxtLink to="/" class="btn text-yellow-200 mb-3">Go Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import arConfig from "../../config/arweave.json";

import VueMarkdown from "vue-markdown-render";

let blogId = useRoute().params.id || useRoute().hash.slice(1);

let title = ref("Loading...");
let body = ref("Loading...");
let date = ref(new Date(0));

onMounted(async () => {
  try {
    let post = await $fetch(arConfig.arweaveGateway + "/" + blogId);
    let text = JSON.parse(await post.text());

    title.value = text.Title;
    body.value = atob(text.Body);
    date.value = new Date(text.Date);
  } catch (e) {
    title.value = "Failed to load blog";
    body.value = "# Failed to load blog";
    date.value = "Failed to load blog";
  }
});

function timeSince(date) {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
</script>

<style scoped>
.markdown-block {
  border-radius: 1rem;
  color: #fff;
  margin: 20px;
  background-color: rgba(20, 20, 20, 15%);
}
</style>
