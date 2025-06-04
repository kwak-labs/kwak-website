<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <!-- Hero Section -->
      <section class="container mx-auto px-6 py-20 text-center">
        <div class="mb-8">
          <div class="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚧 Under Construction
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent" style="background: linear-gradient(to right, #ffc400, #ffed4e, #ffc400); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              Blockchain
            </span>
            Services
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build cutting-edge blockchain infrastructure and tools for the decentralized future. 
            Specializing in Elys Chain governance and providing essential services to the ecosystem.
          </p>
        </div>
  
        <!-- Status Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div class="text-gray-300">Service Uptime</div>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl font-bold" style="color: #ffc400;">24/7</div>
            <div class="text-gray-300">Support</div>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">1</div>
            <div class="text-gray-300">Primary Network</div>
          </div>
        </div>
      </section>
  
      <!-- Network Focus Section -->
      <section id="validators" class="container mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Our Focus Network</h2>
          <p class="text-gray-300 text-lg">Specializing in Elys Chain ecosystem development and governance</p>
        </div>
        
        <div class="max-w-2xl mx-auto">
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <div class="mb-6">
              <img src="/chains/elys.svg" alt="Elys Chain" class="w-16 h-16 mx-auto mb-4" />
              <h3 class="text-2xl font-bold text-white mb-2">Elys Chain</h3>
              <p class="text-gray-300 mb-4">
                A high-performance DeFi-focused blockchain built on Cosmos SDK
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-gray-900/50 rounded-lg p-4">
                <div class="text-lg font-bold" style="color: #ffc400;">Governance</div>
                <div class="text-sm text-gray-400">Participant</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4">
                <div class="text-lg font-bold text-green-400">Services</div>
                <div class="text-sm text-gray-400">Provider</div>
              </div>
            </div>
            
            <div class="text-center">
              <span class="inline-flex items-center bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                ⚡ Active Contributor
              </span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Section -->
      <section id="services" class="container mx-auto px-6 py-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p class="text-gray-300 text-lg">Comprehensive blockchain infrastructure and development tools</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">🔍</div>
            <h3 class="text-xl font-bold text-white mb-3">Block Explorer</h3>
            <p class="text-gray-300">Advanced blockchain exploration with real-time transaction monitoring and comprehensive analytics.</p>
          </div>
          
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">🛠️</div>
            <h3 class="text-xl font-bold text-white mb-3">Development Tools</h3>
            <p class="text-gray-300">Professional-grade tools and APIs for developers building on blockchain networks.</p>
          </div>
          
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">⚡</div>
            <h3 class="text-xl font-bold text-white mb-3">Infrastructure</h3>
            <p class="text-gray-300">High-performance nodes, RPC services, and infrastructure solutions for applications.</p>
          </div>
          
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">🏛️</div>
            <h3 class="text-xl font-bold text-white mb-3">Governance</h3>
            <p class="text-gray-300">Active participation in network governance and protocol development decisions.</p>
          </div>
          
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">📊</div>
            <h3 class="text-xl font-bold text-white mb-3">Analytics</h3>
            <p class="text-gray-300">In-depth blockchain analytics and reporting tools for insights and monitoring.</p>
          </div>
          
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div class="text-3xl mb-4">🤝</div>
            <h3 class="text-xl font-bold text-white mb-3">Consulting</h3>
            <p class="text-gray-300">Expert blockchain consulting services and technical advisory for projects.</p>
          </div>
        </div>
      </section>
  
      <!-- Under Construction Notice -->
      <section class="container mx-auto px-6 py-20">
        <div class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 text-center max-w-4xl mx-auto" style="background: linear-gradient(to right, rgba(255, 196, 0, 0.1), rgba(255, 196, 0, 0.2)); border-color: rgba(255, 196, 0, 0.3);">
          <div class="text-4xl mb-4">🚧</div>
          <h2 class="text-3xl font-bold text-white mb-4">Under Construction</h2>
          <p class="text-gray-300 text-lg mb-6">
            We're currently building our comprehensive service platform. 
          </p>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section id="contact" class="container mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p class="text-gray-300 text-lg">Connect with our team and community</p>
        </div>
        
        <div class="flex justify-center space-x-6">
          <a
            href="https://elysscan.io"
            target="_blank"
            class="px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-black hover:opacity-90"
            style="background: linear-gradient(to right, #ffc400, #ffed4e);"
          >
            Visit Elys Scan
          </a>
          <a
            href="https://discord.gg/7gs7qG4QVA"
            target="_blank"
            class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Discord
          </a>
          <a
            href="https://github.com/kwak-labs"
            target="_blank"
            class="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View GitHub
          </a>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="border-t border-gray-800 py-12">
        <div class="container mx-auto px-6">
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-4">
              KWAK <span style="color: #ffc400;">LABS</span>
            </div>
            <p class="text-gray-400 mb-4">Blockchain Infrastructure & Development Services</p>
            <div class="text-sm text-gray-500">
              © 2025 Kwak Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1f2937;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Animation for gradient text */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Custom yellow theme color */
  .theme-yellow {
    color: #ffc400;
  }
  
  .theme-yellow-bg {
    background-color: #ffc400;
  }
  </style>
  