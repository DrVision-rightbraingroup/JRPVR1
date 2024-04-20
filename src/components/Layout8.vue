<template>
    <section class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">Meet Our Team</h2>
          <p class="text-gray-400 mt-2">We are a team of experts dedicated to your success.</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member -->
          <div class="text-center">
            <div class="mb-4">
              <!-- Avatar Image -->
              <img class="w-24 h-24 mx-auto rounded-full" src="/" alt="James Ross">
            </div>
            <h3 class="text-xl font-semibold">James Ross</h3>
            <p class="text-gray-400">CEO</p>
            <p class="text-gray-400 text-sm my-4">With years of experience, James ensures our success through strategic leadership.</p>
            <div class="flex justify-center gap-4">
              <!-- Social Links -->
              <a href="#" class="text-gray-400 hover:text-gray-200">
                <img src="/" class="h-10" alt="Phone">
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-200">
                <img src="/assets/images/LinkedIn-Icon.svg" class="h-10" alt="">
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-200">
                <img src="/" class="h-10" alt="Email=">
              </a>
            </div>
          </div>
        </div>
  
        <div class="text-center mt-12">
          <h3 class="text-xl">We're hiring!</h3>
          <p class="text-gray-400">Join our team and be part of our success story.</p>
          <a href="#" class="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Open positions
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // You can include your Nuxt 3 script setup logic here if needed.
  </script>
  
  <style>
  /* Add any additional global styles you might want outside of Tailwind's scope */
  </style>