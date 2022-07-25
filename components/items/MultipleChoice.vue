<template>
  <div class="max-w-none mx-auto">
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
        <b>Hinweistext: </b>Wählen sie die 0,1..n Antworten, die Sie für richtig halten.
      </div>
      <div class="px-4 py-5">
        <input type="hidden" :name="'multiplechoice-'+props.index+'-id'" :value="props.id+','+input">
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div>
            <input
              id="answerI"
              v-model="input"
              type="checkbox"
              value="answer1"
              class="mr-2"
            >
            <label id="aILabel" for="answerI" :style="[!props.fill ? {color: 'black'}: answersGiven.aGI ? {color:'green'}:{color:'red'}]">{{ answerI }}</label>
          </div>
          <div>
            <input
              id="answerII"
              v-model="input"
              type="checkbox"
              value="answer2"
              class="mr-2"
            >
            <label id="aIILabel" for="answerII" :style="[!props.fill ? {color: 'black'}: answersGiven.aGII ? {color:'green'}:{color:'red'}]">{{ answerII }}</label>
          </div>
          <div>
            <input
              id="answerIII"
              v-model="input"
              type="checkbox"
              value="answer3"
              class="mr-2"
            >
            <label id="aIIILabel" for="answerIII" :style="[!props.fill ? {color: 'black'}: answersGiven.aGIII ? {color:'green'}:{color:'red'}]">{{ answerIII }}</label>
          </div>
          <div>
            <input
              id="answerIV"
              v-model="input"
              type="checkbox"
              value="answer4"
              class="mr-2"
            >
            <label id="aIVLabel" for="answerIV" :style="[!props.fill ? {color: 'black'}: answersGiven.aGIV? {color:'green'}:{color:'red'}]">{{ answerIV }}</label>
          </div>
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
  },
  fill: {
    type: Boolean,
    required: true
  },
  fillElements: {
    type: String,
    required: true
  }
});
const { data: api } = await useFetch("/api/multipleChoice/" + props.id);
const question = api.value.question;
const answers = api.value.answers.split(",");
const answersCorrectList = api.value.answersCorrect.split(",");

console.log(answersCorrectList[3]);
const answersCorrect = { aCI: answersCorrectList[0] === "true", aCII: answersCorrectList[1] === "true", aCIII: answersCorrectList[2] === "true", aCIV: answersCorrectList[3] === "true" };
const answerI = answers[0];
const answerII = answers[1];
const answerIII = answers[2];
const answerIV = answers[3];
const helpOpen = ref(false);
const answersGiven = reactive({ aGI: false, aGII: false, aGIII: false, aGIV: false });
if (props.fill) {
  answersGiven.aGI = (props.fillElements.includes("answer1") && answersCorrect.aCI) || (!props.fillElements.includes("answer1") && !answersCorrect.aCI);
  answersGiven.aGII = (props.fillElements.includes("answer2") && answersCorrect.aCII) || (!props.fillElements.includes("answer2") && !answersCorrect.aCII);
  answersGiven.aGIII = (props.fillElements.includes("answer3") && answersCorrect.aCIII) || (!props.fillElements.includes("answer3") && !answersCorrect.aCIII);
  answersGiven.aGIV = (props.fillElements.includes("answer4") && answersCorrect.aCIV) || (!props.fillElements.includes("answer4") && !answersCorrect.aCIV);
}
console.log(answersGiven);
onMounted(() => {
  if (props.fill) {
    if (props.fillElements.includes("answer1")) {
      document.getElementById("answerI").checked = true;
    }
    if (props.fillElements.includes("answer2")) {
      document.getElementById("answerII").checked = true;
    }
    if (props.fillElements.includes("answer3")) {
      document.getElementById("answerIII").checked = true;
    }
    if (props.fillElements.includes("answer4")) {
      document.getElementById("answerIV").checked = true;
    }
  }
});
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
<style scoped>
.green{
  color:green;
}
.red{
  color:red;
}
</style>
