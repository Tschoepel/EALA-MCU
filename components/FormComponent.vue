<template>
  <form ref="form" action="/api/training" method="POST" class="p-5 rounded bg-gray-300">
    <div v-for="(l, i) in props.list" :key="l.c+':'+l.id">
      <ItemsClosed-text v-if="l.c == 'ItemsClosed-text'" :id="l.id" :index="i" />
      <ItemsMultiple-choice v-if="l.c == 'ItemsMultiple-choice'" :id="l.id" :index="i" />

    </div>
    <div class="max-w-none mx-auto mt-4">
      <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap pt-3">
        <div class="flex-grow" />
        <div class="ml-4 mt-2 flex-shrink-0">
          <button type="button" class="btn btn-primary" :disabled="state.loading" @click="sendForm">
            Übung abschicken
            <svg v-show="state.loading" class="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </button>
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
const state = reactive({ loading: false });
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
  state.loading = true;
  const formData = new FormData(form.value);
  await $fetch("/api/training", {
    method: "POST",
    body: Array.from(formData)
  }).then((res) => {
    state.loading = false;
    const router = useRouter();
    router.push({ path: "/student/training/" + res.id });
  });
}
</script>
