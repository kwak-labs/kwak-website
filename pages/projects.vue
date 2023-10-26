<template>
  <div class="container main">
    <div>
      <div class="row align-items-center">
        <img
          style="width: 342px; height: 456px"
          class="col-lg-5 offset-lg-1"
          src="../assets/nomad.png"
        />
        <div class="col-lg-6 text-center">
          <h1 class="title">Examples Of Work</h1>
          <hr />
          <h2 class="text">Just a small selection of content....</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h1 class="text-center title">Graphic Design</h1>
    <hr />
    <div class="container">
      <carousel :items-to-show="1">
        <slide v-for="image in images" :key="index">
          <img :src="image" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>

  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 section">
        <h1 class="text-center" style="color: #fff">Educational Content</h1>
        <hr />
        <div class="container">
          <carousel :items-to-show="1">
            <slide v-for="video in edu" :key="video">
              <video width="500" height="300" controls>
                <source :src="video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
      <div class="col-lg-6 section">
        <h1 class="text-center" style="color: #fff">Discord Bot Magic</h1>
        <hr />
        <div class="container">
          <carousel :items-to-show="1">
            <slide v-for="video in discord" :key="video">
              <video width="500" height="300" controls>
                <source :src="video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h1 class="text-center title">NFTs</h1>
    <hr />
    <div class="container">
      <carousel :items-to-show="1">
        <slide v-for="nft in nfts" :key="nft">
          <img width="360" height="329" :src="nft" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

let images = ref(["/projects/graphic/1.webp", "/projects/graphic/2.webp"]);

let edu = ref(["/projects/edu/1.mp4", "/projects/edu/2.mp4"]);

let discord = ref(["/projects/discord/1.mp4", "/projects/discord/2.mp4"]);

let nfts = ref([
  "/projects/nfts/1.webp",
  "/projects/nfts/2.webp",
  "/projects/nfts/3.webp",
  "/projects/nfts/4.webp",
  "/projects/nfts/5.webp",
  "/projects/nfts/6.webp",
  "/projects/nfts/7.webp",
  "/projects/nfts/8.webp",
  "/projects/nfts/9.webp",
]);
</script>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  width: 50px;
  color: #e1b723;
}

.carousel__pagination-button {
  display: block;
  border: 0;
  margin: 0;
  cursor: pointer;
  padding: 4px;
  background-color: transparent;
}

.carousel__pagination-button::after {
  display: block;
  content: "";
  width: 12px;
  height: 4px;
  border-radius: var(0);
  background-color: #e1b723;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #8c741f;
}
</style>

<style scoped>
.main {
  margin-top: 75px;
  border: 2px solid #e1b723;
  padding: 20px;
}
</style>
