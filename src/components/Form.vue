<template>
  <form
    ref="formRef"
    class="py-1.5 px-4"
    @submit.prevent="handleSubmit"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />

    <div class="flex flex-wrap -mx-1 mb-1.5">
      <div class="w-full md:w-1/2 px-1 mb-1.5 md:mb-0">
        <input
          class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
          id="first-name"
          name="first-name"
          type="text"
          placeholder="First Name"
          autocomplete="given-name"
        />
      </div>
      <div class="w-full md:w-1/2 px-1">
        <input
          class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Last Name"
          autocomplete="family-name"
        />
      </div>
    </div>

    <div class="mb-1.5">
      <input
        class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        autocomplete="email"
      />
    </div>

    <div class="mb-1.5">
      <input
        class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone Number"
        autocomplete="tel"
      />
    </div>

    <div class="mb-1.5">
      <select
        class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
        id="service"
        name="service"
      >
        <option value="">Select a service...</option>
        <option value="auto-rv">Auto + RV</option>
        <option value="decks-fences">Decks + Fences</option>
        <option value="driveways">Driveways</option>
        <option value="res-ext">Residential Exteriors</option>
        <option value="grease-pads">Restaurant Grease Pads</option>
        <option value="shop-floors">Mechanic Shop Floors</option>
        <option value="warehouse-floors">Warehouse Floors</option>
        <option value="dumpster-pads">Dumpster Pads</option>
        <option value="fueling-sites">Fueling Sites</option>
      </select>
    </div>

    <div class="mb-2">
      <input
        class="shadow appearance-none border w-full py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
        id="date"
        name="date"
        type="date"
        autocomplete="date"
      />
    </div>

    <div class="flex items-center justify-center mb-2">
      <button
        class="bg-white text-orange-500 py-2 px-4 text-xs rounded-bl-2xl rounded-br-2xl focus:outline-none focus:shadow-outline font-bold w-full"
        type="submit"
      >
        SCHEDULE A BLAST!
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formRef = ref<HTMLFormElement | null>(null);

const handleSubmit = async () => {
  if (!formRef.value) return;

  try {
    const response = await fetch('https://cespowerwash.netlify.app/.netlify/functions/submit-form', {
      method: 'POST',
      body: new FormData(formRef.value)
    });
    
    if (!response.ok) throw new Error('Failed to submit form.');
    
    const data = await response.json();
    alert('Form submitted successfully!');
    formRef.value.reset();
  } catch (err) {

  }
};

defineExpose({ handleSubmit });
</script>