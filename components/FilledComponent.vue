<template>
  <form ref="form" action="/api/training" method="POST" class="p-5 rounded bg-gray-300">
    <div v-for="(l, i) in props.list" :key="l.c+':'+l.id">
      <ItemsClosed-text v-if="l.c == 'ItemsClosed-text'" :id="l.id" :index="i" :fill="true" :fill-elements="l.fillElements" />
      <ItemsMultiple-choice v-if="l.c == 'ItemsMultiple-choice'" :id="l.id" :index="i" :fill="true" :fill-elements="l.fillElements" />
      <ItemsImage-selection v-if="l.c == 'ItemsImage-selection'" :id="l.id" :index="i" :fill="true" :fill-elements="l.fillElements" />
      <ItemsHearing-task v-if="l.c == 'ItemsHearing-task'" :id="l.id" :index="i" :fill="true" :fill-elements="l.fillElements" />
      <ItemsShort-text v-if="l.c == 'ItemsShort-text'" :id="l.id" :index="i" :fill="true" :fill-elements="l.fillElements" />
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
</script>
