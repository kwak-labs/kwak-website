<template>
  <div class="main">
    <h1 class="text-center title">kwak</h1>
    <hr />
    <h2 class="text-center text">
      Blockchain Validator, Ecosystem Developer, World Builder
    </h2>
  </div>

  <div class="section">
    <h1 class="text-center title">Projects</h1>
    <hr />
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 g-3 mt-2">
        <div class="col-md-4">
          <a
            href="https://github.com/kwak-labs/Nexus"
            class="text-decoration-none"
            target="_blank"
          >
            <div class="card text-bg-dark">
              <img
                src="../assets/nexus.png"
                class="card-img-top"
                alt="Card
              logo"
              />
              <div class="card-body">
                <h5 class="card-title">Nexus</h5>
                <p class="card-text">
                  On chain Cosmos based tipping discord bot
                </p>
              </div>
            </div></a
          >
        </div>
        <div class="col-md-4">
          <a href="#" class="text-decoration-none" target="_blank">
            <div class="card text-bg-dark">
              <img
                src="../assets/glome-cosmos.png"
                class="card-img-top"
                alt="Card Logo"
              />
              <div class="card-body">
                <h5 class="card-title">Glome-Cosmos</h5>
                <p class="card-text">
                  Lazy contract engine built ontop of Cosmos
                </p>
              </div>
            </div></a
          >
        </div>
        <div class="col-md-4">
          <a href="#" class="text-decoration-none" target="_blank">
            <div class="card text-bg-dark">
              <img
                src="../assets/tax.jpg"
                class="card-img-top"
                alt="Card Logo"
              />
              <div class="card-body">
                <h5 class="card-title">kwak Tax</h5>
                <p class="card-text">
                  Export your transactions to help with taxes
                </p>
              </div>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h1 class="text-center title">Blogs</h1>
    <h2 class="text-center text-light">Hosted On Arweave</h2>
    <hr />
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
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
