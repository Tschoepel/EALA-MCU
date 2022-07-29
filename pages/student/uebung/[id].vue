<template>
  <dashboardsStudent-dashboard nav="uebung">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Übungsblatt {{ index }}
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
          <FormComponent :list="list" />
        </div>
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>

<script setup>
// Opens exercise sheet based on Index.
const route = useRoute();
const index = route.params.id;
const listOne = [{ c: "ItemsShort-text", id: 2, ex: index }, { c: "ItemsImage-selection", id: 1, ex: index }, { c: "ItemsClosed-text", id: 1, ex: index }, { c: "ItemsMultiple-choice", id: 2, ex: index }, { c: "ItemsHearing-task", id: 1, ex: index }, { c: "ItemsClosed-text", id: 2, ex: index }, { c: "ItemsShort-text", id: 1, ex: index }, { c: "ItemsMultiple-choice", id: 1, ex: index }];
const listTwo = [{ c: "ItemsShort-text", id: 3, ex: index }, { c: "ItemsImage-selection", id: 6, ex: index }, { c: "ItemsClosed-text", id: 3, ex: index }, { c: "ItemsMultiple-choice", id: 4, ex: index }, { c: "ItemsImage-selection", id: 4, ex: index }, { c: "ItemsClosed-text", id: 4, ex: index }, { c: "ItemsShort-text", id: 4, ex: index }, { c: "ItemsMultiple-choice", id: 3, ex: index }];
const list = (index === "1") ? listOne : listTwo;
</script>
