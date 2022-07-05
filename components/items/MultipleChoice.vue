<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ question }}
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
        <b>Hinweistext: </b>Wählen sie die 0,1..n Antworten, die Sie für richtig halten.
      </div>
      <input type="hidden" :name="'multiplechoice-'+props.index+'-id'" :value="props.id+','+input">
      <div class="grid grid-cols-5 cols-gap-0.5">
        <div>
          <input id="answerI" v-model="input" type="checkbox" value="answer1">
          <label for="answerI">{{ answerI }}</label>
        </div>
        <div>
          <input id="answerII" v-model="input" type="checkbox" value="answer2">
          <label for="answerII">{{ answerII }}</label>
        </div>
        <div>
          <input id="answerIII" v-model="input" type="checkbox" value="answer3">
          <label for="answerIII">{{ answerIII }}</label>
        </div>
        <div>
          <input id="answerIV" v-model="input" type="checkbox" value="answer4">
          <label for="answerIV">{{ answerIV }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
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
const { data: api } = await useFetch("/api/multipleChoice/" + props.id);
const question = api.value.question;
const answers = api.value.answers.split(",");
const answerI = answers[0];
const answerII = answers[1];
const answerIII = answers[2];
const answerIV = answers[3];
const helpOpen = ref(false);
// const answers = ref([]);
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
