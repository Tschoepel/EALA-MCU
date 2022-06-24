<template>
  <div class="bg-white overflow-hidden sm:rounded sm:shadow mb-6">
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div class="ml-4 mt-2">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            <InformationCircleIcon class="h-5 w-5 inline text-blue-500" aria-hidden="true" /><slot name="title" />
          </h3>
        </div>
      </div>
    </div>
    <div class="px-6 py-4">
      <slot name="text" />
    </div>
  </div>
</template>
<script setup>
// import { ref, onMounted } from "vue";
import {
  InformationCircleIcon
} from "@heroicons/vue/outline";
// import { SearchIcon } from "@heroicons/vue/solid";
</script>
