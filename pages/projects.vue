<template>
  <div class="main mt-7" style="text-align: center">
    <h1 class="text-7xl font-bold title text-center text-white">Redirecting</h1>
  </div>
</template>

<script setup>
onMounted(() => {
  window.top.location.href = "https://c7a0d2d8.kwak.pages.dev/projects";
});
</script>
