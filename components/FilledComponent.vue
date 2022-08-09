<template>
  <form ref="form" action="/api/training" method="POST" class="p-5 rounded bg-gray-300">
    <div v-for="(l, i) in props.list" :key="l.c+':'+l.id">
      <CorrectedClosed-text
        v-if="l.c == 'ItemsClosed-text'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedMultiple-choice
        v-if="l.c == 'ItemsMultiple-choice'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedImage-selection
        v-if="l.c == 'ItemsImage-selection'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedHearing-task
        v-if="l.c == 'ItemsHearing-task'"
        :id="l.id"
        :index="i"
        :fill-elements="l.fillElements"
        :correct="l.correct"
        :hint="l.hint"
      />
      <CorrectedShort-text
        v-if="l.c == 'ItemsShort-text'"
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
// Component for listed corrected Items as an exercise sheet.
import { ref } from "vue";
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
});
const form = ref(null);
</script>
