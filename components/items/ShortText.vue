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
        <b>Hinweistext: </b>Bitte beantworten sie die Frage kurz.
      </div>
      <div class="px-4 py-5">
        <video v-show="videoEnabled" id="embVideo" controls>
          <source :src="imageSrcM" type="video/webm">
        </video>
        <br>
        <input
          v-model="answer"
          type="text"
          :name="'shorttext-'+props.index+ '-id,' + props.id + answer"
          :checked="checked"
          size="60"
          height="20"
          :placeholder="placeholder"
          class="shadow-sm text-sm border-gray-300 rounded-md"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { hash } from "ohash";
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
const answer = reactive("");
const placeholder = (props.fill) ? props.fillElements : "Your answer goes here...";
console.log("PLACEHOLDER: " + placeholder);
const url = "/api/shortText/" + props.id;
// :style="[!props.fill ? {color: 'black'}: correct.cI ? {color:'green'}:{color:'red'}]"
// const correct = reactive({ cI: false });const answersGiven = reactive({ aGI: false, aGII: false, aGIII: false, aGIV: false });
const { data: api } = await useFetch(url, {
  key: hash([url])
});
const question = api.value.question;
const correct = reactive({ cI: false });
// console.log(correct.cI);
const videoEnabled = api.value.videoExists;
const imageSrcM = "/assets/video/video" + props.id + ".webm";
const helpOpen = ref(false);
const correctWords = api.value.answerKeywords.split(",");
console.log(correctWords);
// console.log("CorrectBEFORE: " + correct.cI);
if (props.fill && props.fillElements.length !== 0) {
  correctWords.array.forEach((element) => {
    if (props.fillElements.ignoreCase().contains(element.ignoreCase())) {
      correct.cI = true;
    }
  });
}
// console.log("CorrectAFTER: " + correct.cI);
</script>
