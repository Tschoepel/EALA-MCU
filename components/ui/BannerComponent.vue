<template>
  <div v-show="state.modules.length > 0" class="p-2 rounded bg-yellow-600 sm:p-3">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-yellow-800">
          <svg
            class="h-6 w-6 text-white"
            x-description="Heroicon name: outline/speakerphone"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="md:hidden">
            Es wurden Verbesserungen entdeckt.
          </span>
          <span class="hidden md:inline">
            Es wurden mögliche Verbesserungen entdeckt in folgenden Modulen: {{ state.modules.join(", ") }}
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="/prof/analysis" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yellow-600 bg-white hover:bg-indigo-50">
          Mehr erfahren
        </a>
      </div>
      <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white">
          <span class="sr-only">Dismiss</span>
          <svg
            class="h-6 w-6 text-white"
            x-description="Heroicon name: outline/x"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const state = reactive({ analyzeTrainingPercentage: 0, modules: ["Übungsverteilung"] });
onMounted(() => {
  state.analyzeTrainingPercentage = localStorage.getItem("analyzeTraining");
  if (state.analyzeTrainingPercentage > 25) { state.modules.push("Übungsaktivitäten"); }
});
</script>
