<template>
    <section class="bg-metallic-silver text-gray-800 py-16 px-4">
      <div class="container mx-auto text-center">
        <div class="mb-8">
          <h4 class="text-sm uppercase text-gray-600 font-semibold tracking-wide">Passions</h4>
          <h2 class="text-3xl font-bold my-2">Explore My Interests and Hobbies</h2>
          <p class="max-w-md mx-auto text-gray-500">
            Discover my diverse range of hobbies and interests, including traveling, notion.so, and Information Technology. These passions have shaped my personal and professional journey, and continue to inspire me in all aspects of life.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <!-- Hobby item -->
          <div class="flex flex-col items-center">
            <span class="material-icons mb-2" style="font-size: 48px;"></span>
            <h3 class="text-lg font-semibold">Traveling</h3>
            <p class="text-sm text-gray-600 mt-1">Embark on exciting adventures around the world.</p>
          </div>
          <!-- Repeat for other hobbies -->
          <div class="flex flex-col items-center">
            <span class="material-icons mb-2" style="font-size: 48px;"></span>
            <h3 class="text-lg font-semibold">Notion.so</h3>
            <p class="text-sm text-gray-600 mt-1">Unlock the power of productivity with Notion.so.</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="material-icons mb-2" style="font-size: 48px;"></span>
            <h3 class="text-lg font-semibold">Computer Technology</h3>
            <p class="text-sm text-gray-600 mt-1">Dive into advanced solutions for networking and IT support.</p>
          </div>
        </div>
        <div class="flex justify-center space-x-4">
          <a href="#" class="px-4 py-2 border text-sm font-medium rounded-md text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
            Explore
          </a>
          <a href="#" class="px-4 py-2 border text-sm font-medium rounded-md bg-gray-700 text-white hover:bg-black transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  </template>