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
      <AudioPlayer :option="{
        src: '../../assets/audio/adopted.mp3',
        title: 'Play sound snippet',
        //coverImage: 'https://your-cover-image.png',
      }" />
      <div class="px-4 py-5">
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div>
            <input id="image_1"
              type="image"
              alt="1"
              src="../../assets/images/ironman.jpg"
              width="150px"
              @click="logAnswer (this.id)" />
          </div>
          <div>
            <input id="image_2" type="image" alt="2" src="../../assets/images/ironman.jpg" width="150px">
          </div>
          <div>
            <input id="image3" type="image" alt="3" src="../../assets/images/ironman.jpg" width="150px">
          </div>
          <div>
            <input id="image_4" type="image" alt="4" src="../../assets/images/ironman.jpg" width="150px">
          </div>
        </div>
        <div class="ml-4 mt-2 flex-shrink-0">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="giveAnswer()">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
const helpOpen = ref(false);
// const question = api.value.question;
function logAnswer (id) {
  // alert(`Selected image: ${img.alt}`);
  const answerId = id;
  console.log("pic 1 selected!!!" + $image1.alt);
  return answerId;
}
function giveAnswer () {
  console.log(logAnswer);
}
</script>
