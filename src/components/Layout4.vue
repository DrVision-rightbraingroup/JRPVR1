<template>
  <section class="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-1 gap-10 items-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-6">What People Say</h2>
      <p class="text-center text-gray-600 mb-10">Read testimonials from satisfied clients and industry leaders.</p>
      <div class="flex justify-center items-center content-center gap-10">
        <!-- Parent container with grid layout -->
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Testimonial 1 -->
          <div class="bg-white p-6 rounded shadow-md flex flex-col justify-between">
            <p class="text-gray-800 text-lg font-medium mb-4">Mr Ross, You are so nice to work with. You always come when we need you with a smile on your face and ready to work. Sometimes you show up before we know we need you. Thanks for all you do and with a great attitude.</p>
            <div class="mt-auto">
              <div class="flex justify-between items-center">
                <div class="flex-grow">
                  <p class="text-gray-800 font-bold">Ms. Johnson</p>
                  <p class="text-gray-600">MTC</p>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <img src="/" alt="Company Logo" class="h-6"> <!-- Replace with your image path -->
                </div>
              </div>
              <span class="text-yellow-400 text-lg block text-right">★★★★★</span>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="bg-white p-6 rounded shadow-md flex flex-col justify-between">
            <p class="text-gray-800 text-lg font-medium mb-4">Thank you Mr. Ross! You are one busy man around here & we greatly appreciate all you do. Thank you for being a part of our team - and always having a smile on your face!</p>
              <div class="mt-auto">
                <div class="flex justify-between items-center">
                  <div class="flex-grow">
                    <p class="text-gray-800 font-bold">Ms. Rigby</p>
                    <p class="text-gray-600">MTC</p>
                  </div>
                  <div class="flex-shrink-0 ml-4">
                    <img src="/" alt="Company Logo" class="h-6"> <!-- Replace with your image path -->
                  </div>
                </div>
              <span class="text-yellow-400 text-lg block text-right">★★★★★</span>
            </div>
          </div>
        <!-- Add more testimonial cards as needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// You can add your script here if needed
</script>

<style scoped>
/* You can add additional styling here if required */
</style>