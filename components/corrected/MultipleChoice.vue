<template>
  <div class="max-w-none mx-auto mb-4">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ props.index+1 }}. {{ question }}
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
        <b>Fehler: </b> Ihre Antwort ist leider falsch!
      </div>
      <div class="px-4 py-5">
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div>
            <input
              id="answerI"
              v-model="inputI"
              type="checkbox"
              value="answer1"
              class="mr-2"
            >
            <label id="aILabel" for="answerI" :style="[answersCorrect.aCI ? {color:'green'}:{color:'red'}]">{{ answerI }}</label>
          </div>
          <div>
            <input
              id="answerII"
              v-model="inputII"
              type="checkbox"
              value="answer2"
              class="mr-2"
            >
            <label id="aIILabel" for="answerII" :style="[answersCorrect.aCII ? {color:'green'}:{color:'red'}]">{{ answerII }}</label>
          </div>
          <div>
            <input
              id="answerIII"
              v-model="inputIII"
              type="checkbox"
              value="answer3"
              class="mr-2"
            >
            <label id="aIIILabel" for="answerIII" :style="[answersCorrect.aCIII ? {color:'green'}:{color:'red'}]">{{ answerIII }}</label>
          </div>
          <div>
            <input
              id="answerIV"
              v-model="inputIV"
              type="checkbox"
              value="answer4"
              class="mr-2"
            >
            <label id="aIVLabel" for="answerIV" :style="[answersCorrect.aCIV? {color:'green'}:{color:'red'}]">{{ answerIV }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { hash } from "ohash";
import { ref } from "vue";
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  fill: {
    type: Boolean,
    required: true
  },
  fillElements: {
    type: String,
    required: true
  },
  correct: {
    type: String,
    required: true
  }
});
const url = "/api/multipleChoice/" + props.id;
const { data: api } = await useFetch(url, {
  key: hash([url])
});
const question = api.value.question;
const answers = api.value.answers.split(",");
const answerI = answers[0];
const answerII = answers[1];
const answerIII = answers[2];
const answerIV = answers[3];
const inputI = (props.fillElements.includes("answer1") ? "true" : "false");
const inputII = (props.fillElements.includes("answer2") ? "true" : "false");
const inputIII = (props.fillElements.includes("answer3") ? "true" : "false");
const inputIV = (props.fillElements.includes("answer4") ? "true" : "false");
const answersCorrectList = props.correct.split(",");
const answersCorrect = { aCI: answersCorrectList[0] === "true", aCII: answersCorrectList[1] === "true", aCIII: answersCorrectList[2] === "true", aCIV: answersCorrectList[3] === "true" };
const helpOpen = ref(answersCorrectList.includes("false"));
</script>
