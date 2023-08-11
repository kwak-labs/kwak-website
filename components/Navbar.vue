<template>
  <nav class="navbar-custom navbar navbar-expand-lg navbar-dark">
    <div class="container text-white">
      <NuxtLink to="/" class="navbar-brand">
        <img src="../assets/logo.jpg" alt="kwak" width="50" height="50" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav navbar-brand text-white">
          <li class="nav-item">
            <a
              class="nav-link text-white"
              href="https://twitter.com/kwak_labs"
              target="_blank"
              >Twitter</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white"
              target="_blank"
              href="https://github.com/kwak-labs"
              >Github</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
