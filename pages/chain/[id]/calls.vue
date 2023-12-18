<template>
  <div class="main mt-7" style="text-align: center">
    <h1 class="text-5xl font-bold title text-center text-white">
      {{ SelectedChainData.name }} Community Calls
    </h1>
    <h2 class="text-center text mt-3 text-2xl">Hosted On Arweave</h2>
  </div>

  <div class="grid grid-cols-1 place-items-center">
    <Call v-for="(call, index) in callData" :call="call" :key="index"></Call>
  </div>

  <div class="flex justify-center items-center w-full mt-2">
    <NuxtLink to="./" class="btn text-yellow-200 mb-3">Go Back</NuxtLink>
  </div>
</template>

<script setup>
import { chainData } from "../../config/chains";
import arConfig from "../../config/arweave.json";

let SelectedChain = useRoute().params.id || useRoute().hash.slice(0);
let SelectedChainData = chainData[SelectedChain];

let callData = ref([]);

onMounted(async () => {
  let calls = await (
    await $fetch(arConfig.arweaveGateway + "/graphql", {
      body: JSON.stringify({
        query: `query {
  transactions(owners:["${arConfig.address}"],sort:HEIGHT_ASC, first:100,tags:[{
  name: "kwak-call",
  values: ["${SelectedChainData.arweaveQuery}"]
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

  for (let call of calls) {
    let Title = call.node.tags.find((t) => t.name == "Title");
    let Date = call.node.tags.find((t) => t.name == "Date");

    if (
      !callData.value.some((existingCall) => existingCall.Title === Title.value)
    ) {
      callData.value.push({
        ID: call.node.id,
        Title: Title.value,
        Date: Date,
      });
    }
  }

  callData.value
    .sort((a, b) => {
      return new Date(a.Date.value) - new Date(b.Date.value);
    })
    .reverse();
});
</script>
