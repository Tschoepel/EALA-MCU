<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Listen closly." }}
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="helpOpen = !helpOpen">
              ?
            </button>
          </div>
        </div>
      </div>
      <div v-show="helpOpen" class="px-4 py-5 border-b border-gray-200 sm:px-6">
        Click on play, guess the MARVEL movie and write down your answer as fast as you can.
      </div>
      <div class="ml-4 mt-2 flex-shrink-0">
        <p> {{ message }}</p>
        <input v-model="message" placeholder="Which film is it?">
        <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click.prevent="playSound('/home/romy/EALA-MCU/assets/audio/adopted.mp3')">
          Play Sound
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const helpOpen = ref(false);
const playSound = (sound) => {
  if (sound) {
    const audio = new Audio("../../assets/audio/adopted.mp3");
    audio.play();
  }
};
</script>
