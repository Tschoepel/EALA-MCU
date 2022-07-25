<template>
  <dashboardsStudent-dashboard nav="training">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Übungsblatt {{ index }}
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <InfoCard>
            <template #title>
              Informationen zur Abgabe des Übungsblattes
            </template>
            <template #text>
              <p>
                Bearbeiten Sie dieses Blatt bitte Eigenständig und ohne Hilfe. Sie können diese Abgabe nur einmal einreichen.
              </p>
            </template>
          </InfoCard>
          <FormComponent :list="[{c: 'ItemsClosed-text', id: 1, fill: false}, {c: 'ItemsClosed-text', id: 2, fill: false}, {c: 'ItemsMultiple-choice', id: 1, fill: false}, {c: 'ItemsMultiple-choice', id: 2, fill: false},{c: 'ItemsHearing-task', id: 1,  fill: false}, {c: 'ItemsImage-selection', id: 1,  fill: false}]">
            <!-- <ItemsClosed-text :id="1" />
          <div><b /></div>
          <ItemsMultiple-choice :id="1" /> -->
          </FormComponent>

          <!-- <ItemsDragDrop :id="1" class="mt-6" />
          <ItemsHearingTask :id="1" class="mt-6" /> -->
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
