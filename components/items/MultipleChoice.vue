<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ title }}
            </h3>
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
      <input id="answerI" v-model="checkedNames" type="checkbox" value="answerI">
      <label for="answerI">{{ answerI }}</label>
      <input id="answerII" v-model="checkedNames" type="checkbox" value="answerII">
      <label for="answerII">{{ answerII }}</label>
      <input id="answerIII" v-model="checkedNames" type="checkbox" value="answerIII">
      <label for="answerIII">{{ answerIII }}</label>
      <input id="answerIV" v-model="checkedNames" type="checkbox" value="answerIV">
      <label for="answerIV">{{ answerIV }}</label>
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
const title = api.value.title;
const question = api.value.question;
const answerI = api.value.answerI;
const answerII = api.value.answerII;
const answerIII = api.value.answerIII;
const answerIV = api.value.answerIV;
const helpOpen = ref(false);
</script>
