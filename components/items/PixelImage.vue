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
                  <img id="test" :src="imgSrc"/>
                </div>
              </client-only>
          </div>
        </div>
         <div id="app">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="loadOtherImg">
            Start
          </button>
    <div class="text">hello</div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

import image from "~/assets/images/ironman.jpg";
import image2 from "~/assets/images/Thor.jpg";

export default {
  data: function () {
    changeImage();
    return {
      imgSrc: image2
    };
  },
  methods: {
    loadOtherImg () {
      console.log("klappt");
      this.imgSrc = image;
    }
  }

};

function changeImage () {
  console.log("Hello World");
}
/*
// const color = ref("red");
let blurInt = 10;
let blurIntString = "";
const pxString = "px";
let blurValue = ref("10px");
console.log(blurValue);

function startTimer () {
  setInterval(function () {
  // this code runs every second
    blurInt--;
    blurIntString = blurInt.toString();
    blurIntString += pxString;
    blurValue = ref(blurIntString);
    console.log(blurValue);
    // location.reload(true);
  }, 5000);
}
startTimer();
*/
</script>

<style>
.text {
  color: v-bind(color);
}

.image {
  filter: blur(v-bind(blurValue));
}
</style>
