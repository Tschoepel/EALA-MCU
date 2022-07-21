<template>
  <div />
</template>

<script setup>
import { onMounted } from "vue";

async function addStatistic (data, reset = false) {
  await $fetch("/api/statistics", {
    method: "POST",
    body: data
  }).then(() => {
    if (reset) { localStorage.setItem("training", "0"); }
  });
}

onMounted(() => {
  const training = localStorage.getItem("training");
  const route = useRoute();
  let data = { userId: 1, action: "nav", params: route.path };
  // console.log(data);
  addStatistic(data);
  if (route.path.includes("student/training/")) {
    data = { userId: 1, action: "training-" + route.params.id, params: "start" };
    localStorage.setItem("training", route.params.id);
    addStatistic(data);
  } else if (route.path.includes("student/results/")) {
    data = { userId: 1, action: "training-" + route.params.id, params: "submitted" };
    if (training === route.params.id) { addStatistic(data, true); }
  } else if (training !== "0") {
    data = { userId: 1, action: "training-" + training, params: "canceled" };
    addStatistic(data, true);
  }
});
</script>
