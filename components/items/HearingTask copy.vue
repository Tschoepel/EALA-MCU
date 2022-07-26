<template>
  <div class="max-w-none mx-auto" style="margin-top: 15px">
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
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <img src="../../assets/images/black_widow.jpg" class="shadow-sm text-sm border-gray-300 rounded-md" />
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/iron_man2.jpg" class="shadow-sm text-sm border-gray-300 rounded-md" />
          </div>
          <div style="padding:10px;" >
            <img src="../../assets/images/thor_the_dark.jpg" class="shadow-sm text-sm border-gray-300 rounded-md" />
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/thor.jpg" class="shadow-sm text-sm border-gray-300 rounded-md" />
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/iron_man.jpg" class="shadow-sm text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div class="grid grid-cols-5 cols-gap-1.5">
          <div style="padding:10px;">
            <input id="answerI" v-model="input" type="checkbox" value="answer1" class="mr-2">
            <label for="answerI">{{ answerI }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerII" v-model="input" type="checkbox" value="answer2" class="mr-2">
            <label for="answerII">{{ answerII }}</label>
          </div>
          <div style="padding:10px;" >
            <input id="answerIII" v-model="input" type="checkbox" value="answer3" class="mr-2">
            <label for="answerIII">{{ answerIII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerIV" v-model="input" type="checkbox" value="answer4" class="mr-2">
            <label for="answerIV">{{ answerIV }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerV" v-model="input" type="checkbox" value="answer5" class="mr-2">
            <label for="answerV">{{ answerV }}</label>
          </div>
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
const answerII = answers[1];
const answerIII = answers[2];
const answerIV = answers[3];
const answerV = answers[4];
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
