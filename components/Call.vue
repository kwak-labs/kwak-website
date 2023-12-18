<template>
  <div
    class="flex justify-between items-center border rounded-lg shadow card p-4 mt-3 w-3/4"
  >
    <div class="text-left">
      <h1 class="text-xl text-white font-semibold">{{ call.Title }}</h1>
    </div>

    <div>
      <svg
        v-show="isLoading"
        class="spinner"
        width="32px"
        height="32px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
      <button
        v-show="!isLoading && !isPlaying"
        :id="'playButton' + call.ID"
        class="w-6 h-6 transform transition-all duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e1b723"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-play-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      </button>
      <button
        v-show="!isLoading && isPlaying"
        :id="'pauseButton' + call.ID"
        class="w-6 h-6 transform transition-all duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e1b723"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-pause-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="10" y1="15" x2="10" y2="9"></line>
          <line x1="14" y1="15" x2="14" y2="9"></line>
        </svg>
      </button>
    </div>
    <input
      type="range"
      min="0"
      :max="audio?.duration"
      v-model="currentTime"
      @input="audio.currentTime = currentTime"
      class="w-8/12"
    />
    <div class="text-right text-xl text-white">
      <p>{{ call.Date.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import arConfig from "../config/arweave.json";
const { call } = defineProps(["call"]);
const isLoading = ref(true);
const isPlaying = ref(false);
const currentTime = ref(0);
let audio;

onMounted(async () => {
  try {
    audio = new Audio(arConfig.arweaveGateway + "/" + call.ID);
    const playButton = document.getElementById("playButton" + call.ID);
    const pauseButton = document.getElementById("pauseButton" + call.ID);

    audio.addEventListener("canplaythrough", () => {
      isLoading.value = false;
    });

    audio.addEventListener("seeking", () => {
      isLoading.value = true;
    });

    audio.addEventListener("seeked", () => {
      isLoading.value = false;
    });

    playButton.addEventListener("click", function () {
      audio.play();
      isPlaying.value = true;
    });

    pauseButton.addEventListener("click", function () {
      audio.pause();
      isPlaying.value = false;
    });

    audio.addEventListener("playing", function () {
      isPlaying.value = true;
    });

    audio.addEventListener("pause", function () {
      isPlaying.value = false;
    });

    audio.addEventListener("timeupdate", function () {
      currentTime.value = audio.currentTime;
    });
  } catch (e) {
    console.log(e);
  }
});

watch(currentTime, (newTime) => {
  if (audio && Math.abs(newTime - audio.currentTime) > 0.5) {
    audio.currentTime = newTime;
  }
});
</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  margin: 0 auto;
  z-index: 2;
}

.path {
  stroke: #e1b723;
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}
</style>
