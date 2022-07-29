<template>
  <div class="max-w-none mx-auto" style="margin-top: 15px">
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
        <b>Fehler: </b> {{ props.hint }}
      </div>
      <div class="px-4 py-5">
        <input type="hidden" :name="'imageselection-'+props.index+'-id'" :value="props.id+','">
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <input id="answerI" v-model="inputI" type="checkbox" value="answer1" class="mr-2">
            <label id="aILabel" for="answerI" :style="[answersCorrect.aCI ? {color:'green'}:{color:'red'}]">{{ answerI }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerII" v-model="inputII" type="checkbox" value="answer2" class="mr-2">
            <label id="aIILabel" for="answerII" :style="[answersCorrect.aCII ? {color:'green'}:{color:'red'}]">{{ answerII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerIII" v-model="inputIII" type="checkbox" value="answer3" class="mr-2">
            <label id="aIIILabel" for="answerIII" :style="[answersCorrect.aCIII ? {color:'green'}:{color:'red'}]">{{ answerIII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerIV" v-model="inputIV" type="checkbox" value="answer4" class="mr-2">
            <label id="aIVLabel" for="answerIV" :style="[answersCorrect.aCIV ? {color:'green'}:{color:'red'}]">{{ answerIV }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerV" v-model="inputV" type="checkbox" value="answer5" class="mr-2">
            <label id="aVLabel" for="answerV" :style="[answersCorrect.aCV ? {color:'green'}:{color:'red'}]">{{ answerV }}</label>
          </div>
        </div>
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <img src="../../assets/images/3.jpg" style="height: 120px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/5.jpg" style="height: 120px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/12.jpg" style="height: 120px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/Batons_Natasha_Romanoff.jpg" style="height: 100px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/captainamerica.jpg" style="height: 120px; width: fit-content;">
          </div>
        </div>
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <input id="answerVI" v-model="inputVI" type="checkbox" value="answer6" class="mr-2">
            <label id="aVILabel" for="answerVI" :style="[answersCorrect.aCVI ? {color:'green'}:{color:'red'}]">{{ answerVI }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerVII" v-model="inputVII" type="checkbox" value="answer7" class="mr-2">
            <label id="aVIILabel" for="answerVII" :style="[answersCorrect.aCVII ? {color:'green'}:{color:'red'}]">{{ answerVII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerVIII" v-model="inputVIII" type="checkbox" value="answer8" class="mr-2">
            <label id="aVIIILabel" for="answerVIII" :style="[answersCorrect.aCVIII ? {color:'green'}:{color:'red'}]">{{ answerVIII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerIX" v-model="inputIX" type="checkbox" value="answer9" class="mr-2">
            <label id="aIXLabel" for="answerIX" :style="[answersCorrect.aCIX ? {color:'green'}:{color:'red'}]">{{ answerIX }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerX" v-model="inputX" type="checkbox" value="answer10" class="mr-2">
            <label id="aXLabel" for="answerX" :style="[answersCorrect.aCX ? {color:'green'}:{color:'red'}]">{{ answerX }}</label>
          </div>
        </div>
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <img src="../../assets/images/Mjolnir.jpg" style="height: 120px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/Necrowords_hela.jpg" style="height: 100px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/quadmaster_Peter_Quill.jpg" style="height: 100px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/8.jpg" style="height: 120px; width: fit-content;">
          </div>
          <div style="padding:10px;">
            <img src="../../assets/images/6.jpg" style="height: 120px; width: fit-content;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// This component is used to show corrected image-selection-item with feedback (red/green text + hint if wrong)
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
  fillElements: {
    type: String,
    required: true
  },
  correct: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    required: true
  }
});
const { data: api } = await useFetch("/api/imageSelection/" + props.id);
const question = api.value.question;
const answersCorrectList = props.correct.split(",");
const answers = api.value.answers.split(",");
const answerI = answers[0];
const answerII = answers[1];
const answerIII = answers[2];
const answerIV = answers[3];
const answerV = answers[4];
const answerVI = answers[5];
const answerVII = answers[6];
const answerVIII = answers[7];
const answerIX = answers[8];
const answerX = answers[9];

const helpOpen = ref(answersCorrectList.includes("false"));
const answersCorrect = { aCI: answersCorrectList[0] === "true", aCII: answersCorrectList[1] === "true", aCIII: answersCorrectList[2] === "true", aCIV: answersCorrectList[3] === "true", aCV: answersCorrectList[4] === "true", aCVI: answersCorrectList[5] === "true", aCVII: answersCorrectList[6] === "true", aCVIII: answersCorrectList[7] === "true", aCIX: answersCorrectList[8] === "true", aCX: answersCorrectList[9] === "true" };
const inputI = (props.fillElements.includes("answer1") ? "true" : "false");
const inputII = (props.fillElements.includes("answer2") ? "true" : "false");
const inputIII = (props.fillElements.includes("answer3") ? "true" : "false");
const inputIV = (props.fillElements.includes("answer4") ? "true" : "false");
const inputV = (props.fillElements.includes("answer5") ? "true" : "false");
const inputVI = (props.fillElements.includes("answer6") ? "true" : "false");
const inputVII = (props.fillElements.includes("answer7") ? "true" : "false");
const inputVIII = (props.fillElements.includes("answer8") ? "true" : "false");
const inputIX = (props.fillElements.includes("answer9") ? "true" : "false");
const inputX = (props.fillElements.includes("answer10") ? "true" : "false");
</script>
