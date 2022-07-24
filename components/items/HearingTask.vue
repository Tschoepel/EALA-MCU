<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ props.index+1 }} . {{ question }}
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
      <div class="px-4 py-5">
        <input type="hidden" :name="'hearingtask-'+props.index+'-id'" :value="props.id+','+input">
          <AudioPlayer :option=" {
            src: '../../assets/audio/adopted.mp3',
            title: ''
            //coverImage: 'https://your-cover-image.png',
          }" />
          <div style="text-align:center">
            <input id="answerI" v-model="input" type="text" class="shadow-sm text-sm border-gray-300 rounded-md" style="text-align:center" >
            <label for="answerI">{{ answerI }}</label>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});
const { data: api } = await useFetch("/api/hearingTask/" + props.id);
const question = api.value.question;
const answers = api.value.answers.split(",");
const answerI = answers[0];
const helpOpen = ref(false);
</script>
<script>
export default {
  data () {
    return {
      input: []
    };
  }
};
</script>
