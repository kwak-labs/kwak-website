// Convert simple name to complex name
export let chainData = {
  elys: {
    name: "Elys Network",
    image: "/chains/elys.png",
    description: "Perpetual trading platform",
    website: "https://elys.network/",
    path: "/chain/elys",
    discord: "https://discord.gg/elysnetwork",
    testnet: true,
    Services: [
      {
        label: "Community Calls",
        link: "/chain/elys/calls",
        nuxt: true,
      },
      {
        label: "kwak Pot",
        link: "https://pot.kwak.tech",
        nuxt: false,
      },
    ],
    arweaveQuery: "elys-call",
  },
};
