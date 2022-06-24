<template>
  <div />
</template>

<script setup>
import { onMounted } from "vue";

async function addStatistic (data) {
  await $fetch("/api/statistics", {
    method: "POST",
    body: data
  });
}

onMounted(() => {
  const route = useRoute();
  const data = { userId: 1, action: "nav", params: route.path };
  // console.log(data);
  addStatistic(data);
});
</script>
