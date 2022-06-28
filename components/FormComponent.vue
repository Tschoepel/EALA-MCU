<template>
  <form ref="form" action="/api/training" method="POST">
    <div v-for="(l, index) in props.list" :key="l.c+l.id">
      <ItemsClosed-text v-if="l.c == 'ItemsClosed-text'" :id="l.id" :index="index" />
      <ItemsMultiple-choice v-if="l.c == 'ItemsMultiple-choice'" :id="l.id" :index="index" />
    </div>
    <div class="max-w-none mx-auto mt-4">
      <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div class="flex-grow" />
            <div class="ml-4 mt-2 flex-shrink-0">
              <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="sendForm">
                Übung abschicken
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
});
const form = ref(null);
onMounted(() => {
  // console.log(form);
  // const formData = new FormData(form.value);
  // for (const [inputName, value] of formData) {
  //   console.log({ inputName, value });
  // }
  // console.log(formData);
  // const arr = Array.from(form.value.elements);
  // for (let i = 0; i < form.value.elements.length; i++) {
  //   const element = form.value.elements[i];
  //   console.log(element);
  //   console.log(element.type);
  //   if (element.includes("input")) { console.log("yas"); } else { console.log("no"); }
  // }
});
// const formParams = getFormElements("training");

// function getFormElements () {
//   console.log(form);
//   // const elements = document.forms[formName].elements;
//   // for (i = 0; i < elements.length; i++) {
//   //   console.log(element);
//   // }
//   // return elements;
// }
async function sendForm () {
  const formData = new FormData(form.value);
  await $fetch("/api/training", {
    method: "POST",
    body: Array.from(formData)
  });
}
</script>
