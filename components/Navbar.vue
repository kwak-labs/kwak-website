<template>
  <nav class="bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://ro5mh9ts7b.ufs.sh/f/UrrC5VsIzS9awMbQH9cnOmyY3avDG2XQrgLFd0tuKoEUkxHP"
          class="h-12 animate-logo"
          alt="quack Logo"
        />
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700"
        >
          <li>
            <NuxtLink
              :to="'/'"
              class="block py-2 px-3 text-white rounded md:border-0 md:hover:text-yellow-200 md:p-0"
              >Home</NuxtLink
            >
          </li>
          <li>
            <a
              href="https://x.com/kwak_labs"
              class="block py-2 px-3 text-white rounded md:border-0 md:hover:text-yellow-200 md:p-0"
              target="_blank"
              >X</a
            >
          </li>
          <li>
            <a
              href="https://github.com/kwak-labs"
              class="block py-2 px-3 text-white rounded md:border-0 md:hover:text-yellow-200 md:p-0"
              target="_blank"
              >Github</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@keyframes logo-animation {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
  75% {
    transform: scale(0.8) rotate(540deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotate(720deg);
    opacity: 1;
  }
}

.animate-logo {
  animation: logo-animation 2s ease-in-out;
  animation-delay: 0.5s;
}
</style>
