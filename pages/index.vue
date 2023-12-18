<template>
  <div class="main mt-7" style="text-align: center">
    <h1 class="text-7xl font-bold title text-center text-white">kwak</h1>
    <h2 class="text-center text mt-3 text-2xl">
      Cosmos Validator, Ecosystem Developer, World Builder
    </h2>
    <NuxtLink
      :to="'/chains'"
      class="btn btn-md btn-outline btn-warning mt-5 text-xl transform transition-all duration-200 hover:scale-105"
    >
      See Chains
    </NuxtLink>
  </div>

  <div class="section">
    <h1 class="text-7xl font-bold title text-center text-white">
      Products <span class="kwak-yello-text">/</span> Services
    </h1>
    <!-- TODO: Make this render based on array -->
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 mt-10">
        <div class="flex items-center m-4">
          <div
            class="max-w-md rounded-lg shadow card transform transition-all duration-200 hover:scale-105"
          >
            <a
              href="https://github.com/kwak-labs/Nexus"
              class="text-decoration-none"
              target="_blank"
            >
              <img class="rounded-t-lg" src="../assets/nexus.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight dark:text-white"
                >
                  Nexus
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                On chain Cosmos based tipping discord bot
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="max-w-md rounded-lg shadow card transform transition-all duration-200 hover:scale-105"
          >
            <a
              href="https://github.com/kwak-labs/glome-cosmos"
              class="text-decoration-none"
              target="_blank"
            >
              <img
                class="rounded-t-lg"
                src="../assets/glome-cosmos.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight dark:text-white"
                >
                  Glome-Cosmos
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                Lazy contract engine built ontop of Cosmos
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="max-w-md rounded-lg shadow card transform transition-all duration-200 hover:scale-105"
          >
            <a
              href="https://github.com/kwak-labs/kwak-tax"
              class="text-decoration-none"
              target="_blank"
            >
              <img class="rounded-t-lg" src="../assets/tax.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight dark:text-white"
                >
                  kwak Tax
                </h5>
              </a>
              <p class="mb-3 font-normal dark:text-gray-400">
                Export your transactions to help with taxes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h1 class="text-7xl font-bold title text-center text-white">Blogs</h1>
    <h2 class="text-center text mt-3 text-2xl">Hosted On Arweave</h2>
    <!-- TODO: Make this render based on array -->
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 mt-10">
        <Card
          v-for="blog in blogs"
          :key="blog.ID"
          :blog="blog"
          :timeSince="timeSince(blog.Date)"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import arConfig from "../config/arweave.json";
let blogs = ref([]);

useSeoMeta({
  title: "kwak",
  ogTitle: "kwak",
  description:
    "Trusted Validator that brings tons of utility to consumers and developers.",
  ogDescription:
    "Trusted Validator that brings tons of utility to consumers and developers.",
  ogImage:
    "https://pbs.twimg.com/profile_images/1533879545312342016/yqDXUM38_400x400.jpg",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  let posts = await (
    await $fetch(arConfig.arweaveGateway + "/graphql", {
      body: JSON.stringify({
        query: `query {
  transactions(owners:["${arConfig.address}"],sort:HEIGHT_ASC, first:100,tags:[{
  name: "Blog",
  values: ["${arConfig.queryTag}"]
}]) {
    pageInfo {
        hasNextPage
    }
    edges {
      cursor
      node {
        id
        tags {
          name
          value
        }
        owner {

          address
        }
        quantity{
          winston
        }
        recipient
        fee {
          winston
        }
        block {
          id
          height
          timestamp
        }

      }
    }
  }
}
`,
      }),
      method: "POST",
      headers: { "Content-type": "application/json" },
    })
  ).data.transactions.edges;

  for (let post of posts) {
    let Title = post.node.tags.find((t) => t.name == "Title");
    let Banner = post.node.tags.find((t) => t.name == "Banner");
    let Timestamp = post.node.tags.find((t) => t.name == "Date");

    blogs.value.push({
      ID: post.node.id,
      Title: Title.value,
      Banner: Banner.value,
      Date: new Date(parseInt(Timestamp.value)),
    });
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

<style>
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
