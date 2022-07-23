<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="ml-4 mt-2 flex-shrink-0 text-align: center">
          <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
            {{ title }}
          </h3>
          <div class="ml-4 mt-2 flex-shrink-0">
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="helpOpen = !helpOpen">
              ?
            </button>
          </div>
           <div v-show="helpOpen" class="px-4 py-5 border-b border-gray-200 sm:px-6">
            Durch Drag and Drop mit der Maus können Sie die Filme an die richtige Stelle verschieben. Sortieren Sie die Filme vom Ältesten zum Neuesten.
          </div>
          <div>
            <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
            <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
            <div class="drop-zone" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(3)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
            <div class="drop-zone" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
          </div>
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submitAnswer">
            Lösung Abschicken
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const helpOpen = ref(false);

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});
const { data: api } = await useFetch("/api/dragDrop/" + props.id);
const title = api.value.title;

// const texts = api.value.texts;
// const textsArr = texts.split(",");

// const solution = api.value.solution;
// const solutionArr = solution.split(",");

const dropObj = ref([
  {
    id: "",
    list: 99
  }
]);

const getList = (list) => {
  return items.value.filter(item => item.list === list);
};

const items = ref([
  { id: "0", title: "", list: 1 }, // 2011
  { id: "1", title: "", list: 2 }, // 2010
  { id: "2", title: "", list: 3 }, // 2012
  { id: "3", title: "", list: 4 } // 2016

]);

const changeItems = (items, newArr) => {
  for (let i = 0; i < items.value.length; i++) {
    items.value[i].title = newArr[i][2];
  }
};

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData = ("itemID", item.id);
  dropObj.value.id = item.id;
  dropObj.value.list = item.list;
};

const onDrop = (event, list) => {
  window.console.log(event);
  const itemID = dropObj.value.id;// event.dataTransfer.getData("itemID");
  dropObj.value.id = "";
  const item = items.value.find(item => item.id === itemID);
  // console.log(list);

  for (let i = 0; i < items.value.length; i++) {
    if (items.value[i].list === list) {
      // console.log("Item " + items.value[i].title + " should go on " + dropObj.value.list);
      items.value[i].list = dropObj.value.list;
    }
  }
  item.list = list;
};
// Automated Item Generation: Load Wikidata SPARQL Query with all Films and their premiere
// Need to preprocess data because it contains multiple premieres for different countries: We take the first premiere of all countries
const preprocessesFilms = [];
let filmSelection = [];
let solution = [];
const url = "https://query.wikidata.org/sparql?query=SELECT%20DISTINCT%20%3Fitem%20%3FVer_ffentlichungsdatum%20%3FitemLabel%20WHERE%20%7B%0A%20%20%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%7B%0A%20%20%20%20SELECT%20DISTINCT%20%3Fitem%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fitem%20p%3AP179%20%3Fstatement0.%0A%20%20%20%20%20%20%3Fstatement0%20(ps%3AP179%2F(wdt%3AP279*))%20wd%3AQ642878.%0A%20%20%20%20%20%20%3Fitem%20p%3AP577%20%3Fstatement_1.%0A%20%20%20%20%20%20%3Fstatement_1%20psv%3AP577%20%3FstatementValue_1.%0A%20%20%20%20%20%20%3FstatementValue_1%20wikibase%3AtimeValue%20%3FP577_1.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20LIMIT%201000%0A%20%20%7D%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP577%20%3FVer_ffentlichungsdatum.%7D%0A%7D%0AORDER%20BY%20%3FVer_ffentlichungsdatum%0A%20%0A&format=json";
const LoadData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results.bindings);
    for (let i = 0; i < data.results.bindings.length - 1; i++) {
      const filmTriple = [Date.parse(data.results.bindings[i].Ver_ffentlichungsdatum.value), data.results.bindings[i].Ver_ffentlichungsdatum.value, data.results.bindings[i].itemLabel.value];
      if (!(preprocessesFilms.some(a => a[2] === data.results.bindings[i].itemLabel.value))) {
        preprocessesFilms.push(filmTriple);
      }
    }
    // console.log(preprocessesFilms);
    // Now shuffle list to generate randomization
    const randomizeArray = (array, num) => {
      const shuffledList = [...array].sort(() => 0.5 - Math.random());
      return shuffledList.slice(0, num);
    };
    filmSelection = randomizeArray(preprocessesFilms, 4);
    solution = filmSelection.slice().sort();
    changeItems(items, filmSelection);
  } catch (err) {
    // console.error(err);
  }
};

LoadData();
// let submittedAnswer = "";
// let solutionString = "";
// let correctAnswer = false;
let percentCorrect = 0.0;

function submitAnswer () {
  // console.log("Submitted");
  // submittedAnswer = (getList(1)[0].title + ", " + getList(2)[0].title + ", " + getList(3)[0].title + ", " + getList(4)[0].title);
  // console.log(submittedAnswer);
  // console.log(solution);
  // solutionString = "";
  for (let i = 0; i < solution.length; i++) {
    // solutionString += (solution[i][1] + "-" + solution[i][2] + ",");
  }
  // console.log(solutionString);
  percentCorrect = 0.0;
  if (getList(1)[0].title === solution[0][2]) {
    percentCorrect += 0.25;
  }
  if (getList(2)[0].title === solution[1][2]) {
    percentCorrect += 0.25;
  }
  if (getList(3)[0].title === solution[2][2]) {
    percentCorrect += 0.25;
  }
  if (getList(4)[0].title === solution[3][2]) {
    percentCorrect += 0.25;
  }
  if (percentCorrect === 1) {
    // correctAnswer = true;
    window.console.log("Right solution");
  } else {
    // correctAnswer = false;
    window.console.log("Wrong solution");
  }
  console.log(correctAnswer);
}

</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothign: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.drop-zone {
  width: 50%;
  margin: 10px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 5px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
