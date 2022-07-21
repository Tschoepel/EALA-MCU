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
          <input id="answerI" v-model="input" type="text">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submitAnswer">
            Submit
          </button>
        </div>
        <div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import IronMan from "~/assets/images/ironman.resized.jpg";
import Thor from "~/assets/images/Thor.resized.jpg";
import Ajak from "~/assets/images/ajak.resized.jpeg";
import AntMan from "~/assets/images/antman.resized.jpg";
import Aquaman from "~/assets/images/aquaman.resized.webp";
import Batman from "~/assets/images/batman.resized.jpg";
import BlackPanther from "~/assets/images/blackPanther.resized.jpg";
import BlackWidow from "~/assets/images/blackWidow.resized.jpg";
import CaptainAmerica from "~/assets/images/captainAmerica.resized.jpg";
import CaptainMarvel from "~/assets/images/captainMarvel.resized.webp";
import Cyborg from "~/assets/images/cyborg.resized.webp";
import Deadshot from "~/assets/images/deadshot.resized.jpg";
import DoctorStrange from "~/assets/images/doctorStrange.resized.jpg";
import Drax from "~/assets/images/drax.resized.jpg";
import ElDiablo from "~/assets/images/elDiablo.resized.webp";
import Falcon from "~/assets/images/falcon.resized.jpg";
import Gamora from "~/assets/images/gamora.resized.webp";
import Groot from "~/assets/images/groot.resized.jpg";
import Hawkeye from "~/assets/images/hawkeye.resized.webp";
import Heimdall from "~/assets/images/heimdall.resized.webp";
import Hulk from "~/assets/images/hulk.resized.jpg";
import Korg from "~/assets/images/korg.resized.jpg";
import Loki from "~/assets/images/loki.resized.jpeg";
import Mantis from "~/assets/images/mantis.resized.jpg";
import Nebula from "~/assets/images/Nebula.resized.jpg";
import NickFury from "~/assets/images/nickFury.resized.jpg";
import Phastos from "~/assets/images/phastos.resized.jpg";
import QuickSilver from "~/assets/images/quickSilver.resized.webp";
import RocketRacoon from "~/assets/images/rocketRacoon.resized.jpg";
import ScarletWitch from "~/assets/images/scarlettWitch.resized.jpg";
import Shuri from "~/assets/images/shuri.resized.webp";
import Spiderman from "~/assets/images/spiderman.resized.jpg";
import StarLord from "~/assets/images/starLord.resized.webp";
import Superman from "~/assets/images/superman.resized.webp";
import TheFlash from "~/assets/images/theFlash.resized.jpg";
import TheWasp from "~/assets/images/theWasp.resized.jpg";
import Valkyrie from "~/assets/images/valkyrie.resized.webp";
import Vision from "~/assets/images/vision.resized.jpg";
import WarMachine from "~/assets/images/warmachine.resized.jpg";
import WinterSoldier from "~/assets/images/winterSoldier.resized.webp";
import WonderWoman from "~/assets/images/wonderWoman.resized.webp";
import YonduOlunta from "~/assets/images/yonduOlunta.resized.webp";

import BlackImage from "~/assets/images/Solid_black.svg.png";

let blurInt = 100;
let blurIntString = "";
const pxString = "px";

export default {
  data: function () {
    return {
      imgList: [IronMan, Thor, Ajak, AntMan, Aquaman, Batman, BlackPanther, BlackWidow, CaptainAmerica, CaptainMarvel, Cyborg, Deadshot, DoctorStrange, Drax, ElDiablo, Falcon, Gamora, Groot, Hawkeye, Heimdall, Hulk, Korg, Loki, Mantis, Nebula, NickFury, Phastos, QuickSilver, RocketRacoon, ScarletWitch, Shuri, Spiderman, StarLord, Superman, TheFlash, TheWasp, Valkyrie, Vision, WarMachine, WinterSoldier, WonderWoman, YonduOlunta],
      imgSrc: BlackImage,
      blurValue: ref("100px"),
      polling: null
    };
  },
  methods: {
    loadOtherImg () {
      console.log("klappt");
      const min = 0;
      const max = this.imgList.length - 1;
      const x = Math.round((Math.random() * (max - min)) + min);
      blurInt = 100;
      this.changeBlur("100px");
      this.imgSrc = this.imgList[x];
      this.polling = setInterval(function () {
        // this code runs every second
        blurInt--;
        blurIntString = blurInt.toString();
        blurIntString += pxString;
        if (blurInt <= 0) {
          blurInt = 0;
          clearInterval(this.polling);
        }
        this.changeBlur(blurIntString);
        // console.log(blurInt);
      }.bind(this), 100);
    },

    changeBlur (blurPixel) {
      this.blurValue = ref(blurPixel);
    },

    submitAnswer () {
      console.log("Hallo");
      clearInterval(this.polling);
    }
  }

};
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

.image {
  filter: blur(v-bind(blurValue));
}
</style>
