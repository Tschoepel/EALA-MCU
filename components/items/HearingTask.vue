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
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click.prevent="playSound('/home/romy/EALA-MCU/assets/audio/adopted.mp3')">
              Play Sound
            </button>
          </div>
        </div>
      </div>
      <p> {{ message }}</p>
      <input v-model="message" placeholder="Which film is it?">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      myObject: {
        title: "The Iron Man 2",
        userURL: "~/assets/images/ironman.jpg"
      }
    };
  },
  methods: {
    playSound (sound) {
      if (sound) {
        const audio = new Audio("../../assets/audio/adopted.mp3");
        audio.play();
      }
    }
  }
};
</script>
