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
      <div class="grid grid-cols-5 cols-gap-0.5">
        <div>
          <input id="answerI" v-model="answers" type="checkbox" value="answer1">
          <label for="answerI">{{ answerI }}</label>
        </div>
        <div>
          <input id="answerII" v-model="answers" type="checkbox" value="answer2">
          <label for="answerII">{{ answerII }}</label>
        </div>
        <div>
          <input id="answerIII" v-model="answers" type="checkbox" value="answer3">
          <label for="answerIII">{{ answerIII }}</label>
        </div>
        <div>
          <input id="answerIV" v-model="answers" type="checkbox" value="answer4">
          <label for="answerIV">{{ answerIV }}</label>
        </div>
      </div>
      <div>
        <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submitSolution= !submitSolution">
          Submit
        </button>
      </div>
    </div>
    <div v-show="submitSolution" class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <b v-if=" (answers.includes('answer1') && answerICorrect || !answers.includes('answer1') && !answerICorrect) && (answers.includes('answer2') && answerIICorrect || !answers.includes('answer2') && !answerIICorrect)&& (answers.includes('answer3') && answerIIICorrect || !answers.includes('answer3') && !answerIIICorrect)&& (answers.includes('answer4') && answerIVCorrect || !answers.includes('answer4') && !answerIVCorrect)">The chosen answers are correct!</b>
      <b v-else>The chosen answers are not all correct!</b>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});
const { data: api } = await useFetch("/api/multipleChoice/" + props.id);
const question = api.value.question;
const answerI = api.value.answerI;
const answerII = api.value.answerII;
const answerIII = api.value.answerIII;
const answerIV = api.value.answerIV;
const answerICorrect = api.value.answerICorrect;
const answerIICorrect = api.value.answerIICorrect;
const answerIIICorrect = api.value.answerIIICorrect;
const answerIVCorrect = api.value.answerIVCorrect;
const helpOpen = ref(false);
const submitSolution = ref(false);
</script>
<script>
export default {
  data () {
    return {
      answers: []
    };
  }
};
</script>
