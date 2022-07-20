<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Welcher Superheld ist das?" }}
            </h3>
              <client-only>
                <div class="image">
                  <img src="~/assets/images/ironman.jpg">
                </div>
              </client-only>
          </div>
        </div>
         <div>
    <div class="text">hello</div>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref("red");
let blurInt = 10;
let blurIntString = "";
const pxString = "px";
let blurValue = ref("10px");
console.log(blurValue);

setInterval(function () {
  // this code runs every second
  blurInt--;
  blurIntString = blurInt.toString();
  blurIntString += pxString;
  blurValue = ref(blurIntString);
  console.log(blurValue);
  ref.forceUpdate();
}, 5000);
</script>

<style>
.text {
  color: v-bind(color);
}

.image {
  filter: blur(v-bind(blurValue));
}
</style>
