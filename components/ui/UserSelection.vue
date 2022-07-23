<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
        <label for="country" class="block font-medium text-gray-700 sm:mt-px sm:pt-2">
          Student
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <select id="country" v-model="userSelection" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            <option disabled value="">
              Bitte Studenten auswählen
            </option>
            <option>Stu Dent - 123456789</option>
            <option>Max Mustermann - 978654321</option>
            <option>C</option>
          </select>
        </div>
      </div>
      <div v-show="userSelection !== ''" class="mt-2 text-gray-600 pt-3">
        Ausgewählter Student: {{ userSelection }}
        <hr class="my-3">
        <h4 class="text-lg pb-4">
          Übungsaktivitäten
        </h4>
        <span v-show="state.loading" class="flex">
          <svg class="animate-spin -mr-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          Daten werden geladen.
        </span>
        {{ state.timeline }}
        <div v-if="!state.loading && state.timelineItems.length > 0">
          <ul class="list-disc list-inside">
            <li
              v-for="t in state.timelineItems"
              :key="t"
              :class="{ 'text-indigo-600': t.includes('begonnen'), 'text-green-600': t.includes('abgegeben'), 'text-red-600': t.includes('abgebrochen')}"
            >
              {{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format, parseISO } from "date-fns";

const userSelection = ref("");
const state = reactive({ timeline: "", loading: true, timelineItems: [] });

watch(userSelection, async (user) => {
  state.loading = true;
  state.timeline = "";
  state.timelineItems = [];
  if (user === "Max Mustermann - 978654321") {
    setTimeout(function () {
      state.loading = false;
      state.timeline = "Zu diesem Studenten liegen bisher keine Daten vor.";
    }, 1000);
  } else {
    const { data: api } = await useFetch("/api/statistics");
    const data = api.value;
    data.forEach((item) => {
      if (item.action === "training-1") {
        state.timelineItems.push(format(parseISO(item.createdAt), "dd.MM.yy kk:mm:ss") + " - Übungsblatt 1 " + mapToName(item.params));
      }
    });
    // console.log(timeline);
    setTimeout(function () {
      state.loading = false;
      // state.timeline = "Zu diesem Studenten liegen bisher keine Daten vor.";
    }, 1000);
  }
});
function mapToName (param) {
  const arr = ["start", "submitted", "canceled"];
  const repl = ["begonnen.", "abgegeben.", "abgebrochen."];
  for (let i = 0; i < arr.length; i++) {
    param = param.replace(arr[i], repl[i]);
  }
  return param;
}
</script>
