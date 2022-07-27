<template>
  <dashboardsStudent-dashboard nav="Interaktiv">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Interaktive Aufgaben {{ index }}
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <!-- <ItemsClosed-text :id="1" />
          <div><b /></div>
          <ItemsMultiple-choice :id="1" /> -->
          <ItemsDrag-drop: :id="1" class="mt-6" />
          <ItemsActor-quiz :id="1" class="mt-6" />
          <ItemsHearingTask :id="1" class="mt-6" />
          <ItemsDraw-item :id="1" class="mt-6" />
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>

<script setup>
const route = useRoute();
const index = route.params.id;
// const date = new Date().toLocaleDateString("de-DE");
</script>
