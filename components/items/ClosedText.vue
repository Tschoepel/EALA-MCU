<template>
  <div class="max-w-none mx-auto mb-4">
    <div class="bg-white overflow-hidden sm:rounded sm:shadow">
      <div class="bg-white px-3 py-4 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ props.index+1 }}. {{ title }}
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
        <b>Hinweistext: </b>Füllen Sie alle leeren Felder korrekt aus. Groß- und Kleinschreibung wird hierbei ignoriert.
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <input type="hidden" :name="'closedtext-'+props.index+'-id'" :value="props.id">
      <div class="px-4 py-5" v-html="htmlText" />
      <!--eslint-enable-->
    </div>
  </div>
</template>

<script setup>
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
  fillElements: {
    type: String,
    required: true
  }
});
// Allgemeine Fragen zu Thor; Dies ist ein Text mit $$ Lücken. Die Lücken müssen vorher $$ werden.;diversen,befüllt
const url = "/api/closedText/" + props.id;
const { data: api } = await useFetch(url, {
  key: hash([url])
});

const text = api.value.text;
const title = api.value.title;
const area = api.value.area;
const difficulty = api.value.difficulty;
const hint = api.value.hint;
let i = 0;
const htmlText = computed(() => {
  if (text === null) {
    return "Es gibt aktuell Probleme mit der API";
  }
  const input = "<input type=\"text\" name=\"closedtext-" + props.index + "-num-" + area + "-" + difficulty + "-" + hint + "\" style=\"calcStyle;\" class=\"shadow-sm text-sm border-gray-300 rounded-md\" value=\"testnum\">";
  const value = text.replaceAll("$$", () => {
    i = i + 1;
    return input.replaceAll("num", i);
  });
  return value.replaceAll("calcStyle", () => {
    return ("color:black");
  });
});
const helpOpen = ref(false);
</script>
