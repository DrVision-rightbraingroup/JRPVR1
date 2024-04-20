<template>
    <header class="z-50 relative">
      <nav class="container mx-auto flex items-center justify-between px-4 py-3 text-white">
        <a href="/" class="text-xl font-bold text-metallic-silver hover:text-vivid-warm-highlight">DrVision®</a>
        <button @click="toggleMobileMenu" class="md:hidden focus:outline-none" aria-label="Toggle navigation menu" :aria-expanded="isMobileMenuOpen.toString()">
          <!-- Hamburger icon -->
          <svg v-show="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <!-- Close icon -->
          <svg v-show="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <ul class="hidden md:flex space-x-6">
          <li><a href="/about" class="text-metallic-silver hover:text-gray-300">About Me</a></li>
          <li><a href="/experience" class="text-metallic-silver hover:text-gray-300">Experience</a></li>
          <li><a href="/projects" class="text-metallic-silver hover:text-gray-300">Projects</a></li>
          <li><a href="/services" class="text-metallic-silver hover:text-gray-300">Services</a></li>
          <li><a href="/blog" class="text-metallic-silver hover:text-gray-300">Blog</a></li>
        </ul>
        <a href="/contact" class="hidden md:block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-vivid-warm-highlight hover:bg-bright-ice-blue">Let's Connect</a>
      </nav>
      <div v-show="isMobileMenuOpen" class="md:hidden absolute inset-x-0 top-full mt-2 p-2 space-y-1 bg-navy-blue text-center rounded-lg shadow-lg">
        <ul>
          <li><a href="/about" class="block text-metallic-silver hover:text-gray-300">About Me</a></li>
          <li><a href="/experience" class="block text-metallic-silver hover:text-gray-300">Experience</a></li>
          <li><a href="/projects" class="block text-metallic-silver hover:text-gray-300">Projects</a></li>
          <li><a href="/services" class="block text-metallic-silver hover:text-gray-300">Services</a></li>
          <li><a href="/blog" class="block text-metallic-silver hover:text-gray-300">Blog</a></li>
        </ul>
      </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Any additional styles you want to apply */
</style>