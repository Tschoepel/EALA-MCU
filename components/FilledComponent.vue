<template>
  <form ref="form" action="/api/training" method="POST" class="p-5 rounded bg-gray-300">
    <div v-for="(l, i) in props.list" :key="l.c+':'+l.id">
      <CorrectedClosed-text v-if="l.c == 'ItemsClosed-text'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedMultiple-choice v-if="l.c == 'ItemsMultiple-choice'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedImage-selection v-if="l.c == 'ItemsImage-selection'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedHearing-task v-if="l.c == 'ItemsHearing-task'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedShort-text v-if="l.c == 'ItemsShort-text'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
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
