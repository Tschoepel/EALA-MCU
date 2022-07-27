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
        <b>Hinweistext: </b>Wähle die Waffe aus, die zum jeweiligen Charakter passen.
      </div>
      <div class="px-4 py-5">
        <input type="hidden" :name="'imageselection-'+props.index+'-id-' + area + '-' + difficulty + '-' + hint" :value="props.id+','+input">
        <div class="grid grid-cols-5 cols-gap-0.5">
          <div style="padding:10px;">
            <input id="answerI" v-model="input" type="checkbox" value="answer1" class="mr-2">
            <label for="answerI">{{ answerI }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerII" v-model="input" type="checkbox" value="answer2" class="mr-2">
            <label for="answerII">{{ answerII }}</label>
          </div>
          <div style="padding:10px;">
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
            <input id="answerVI" v-model="input" type="checkbox" value="answer6" class="mr-2">
            <label for="answerVI">{{ answerVI }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerVII" v-model="input" type="checkbox" value="answer7" class="mr-2">
            <label for="answerVII">{{ answerVII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerVIII" v-model="input" type="checkbox" value="answer8" class="mr-2">
            <label for="answerVIII">{{ answerVIII }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerIX" v-model="input" type="checkbox" value="answer9" class="mr-2">
            <label for="answerVIII">{{ answerIX }}</label>
          </div>
          <div style="padding:10px;">
            <input id="answerX" v-model="input" type="checkbox" value="answer10" class="mr-2">
            <label for="answerX">{{ answerX }}</label>
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
  }
});
const url = "/api/imageSelection/" + props.id;
const { data: api } = await useFetch(url, {
  key: hash([url])
});
const question = api.value.question;
const area = api.value.area;
const difficulty = api.value.difficulty;
const hint = api.value.hint;
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
