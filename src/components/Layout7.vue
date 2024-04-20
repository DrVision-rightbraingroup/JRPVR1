<template>
    <div class="p-6 sm:p-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p class="text-gray-600 text-center mb-10">Find answers to common questions about our services and professional background.</p>
        
        <div class="space-y-4">
          <!-- Question 1 -->
          <details class="bg-white p-4 rounded-lg shadow">
            <summary class="text-lg font-medium cursor-pointer">
              How can I contact you?
              <span class="float-right">+</span>
            </summary>
            <p class="mt-2 text-gray-600">
              You can reach us by email at contact@example.com or call us at (123) 456-7890.
            </p>
          </details>
  
          <!-- Question 2 -->
          <details class="bg-white p-4 rounded-lg shadow">
            <summary class="text-lg font-medium cursor-pointer">
              What services do you offer?
              <span class="float-right">+</span>
            </summary>
            <p class="mt-2 text-gray-600">
              We offer a wide range of services including web development, digital marketing, and SEO consulting.
            </p>
          </details>
  
          <!-- Question 3 -->
          <details class="bg-white p-4 rounded-lg shadow">
            <summary class="text-lg font-medium cursor-pointer">
              Do you have any certifications?
              <span class="float-right">+</span>
            </summary>
            <p class="mt-2 text-gray-600">
              Yes, our team includes certified professionals in various fields, including certified web developers and Google Ads specialists.
            </p>
          </details>
  
          <!-- Question 4 -->
          <details class="bg-white p-4 rounded-lg shadow">
            <summary class="text-lg font-medium cursor-pointer">
              What is your professional background?
              <span class="float-right">+</span>
            </summary>
            <p class="mt-2 text-gray-600">
              Our team has a diverse background, with experience ranging from tech startups to large corporations across different industries.
            </p>
          </details>
          
          <!-- Question 5 -->
          <details class="bg-white p-4 rounded-lg shadow">
            <summary class="text-lg font-medium cursor-pointer">
              Can you handle large-scale projects?
              <span class="float-right">+</span>
            </summary>
            <p class="mt-2 text-gray-600">
              Absolutely, we have the capacity and expertise to manage large-scale projects efficiently.
            </p>
          </details>
        </div>
  
        <div class="text-center mt-12">
          <h3 class="text-xl">Still have questions?</h3>
          <p class="text-gray-600">Feel free to reach out to us.</p>
          <button class="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can place your Nuxt 3 script logic here
  </script>
  
  <style>
  /* Add any additional global styles you might want outside of Tailwind's scope */
  details > summary::-webkit-details-marker {
    display: none; /* to hide the default dropdown icon in chrome */
  }
  
  details > summary:before {
    content: '+';
    float: right;
  }
  
  details[open] > summary:before {
    content: '-';
  }
  </style>