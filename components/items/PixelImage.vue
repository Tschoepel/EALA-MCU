<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Welcher Superheld ist das?" }}
            </h3>
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="openText">
              ?
            </button>
             <div v-show="helpOpen" class="px-4 py-5 border-b border-gray-200 sm:px-6">
              Ein Bild eines Superhelden entpixelt sich langsam. Geben Sie den Namen des Superhelden ein, sobald Sie ihn erkennen, jedoch nur, wenn es sich um einen Marvel-Helden handelt!
            </div>
              <client-only>
                <div class="image">
                  <img id="test" :src="imgSrc" style="width=200px height=200px"/>
                </div>
                 <div class="solutionText">
                  <p><b>{{ solutionName }}</b></p>
                </div>
              </client-only>
          </div>
        </div>
        <input type="hidden" :name="'pixelImage'" :value="test">
         <div id="app">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="loadOtherImg">
            Neues Spiel
          </button>
          <input id="answerPixelImage" v-model="input" type="text">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submitAnswer">
            Lösung abschicken
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
import IronMan from "~/assets/images/ironMan.resized.jpg";
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
import YonduOlunta from "~/assets/images/yonduUdonta.resized.webp";

import BlackImage from "~/assets/images/Solid_black.svg.png";

let blurInt = 100;
let blurIntString = "";
const pxString = "px";
let gameRunning = false;

export default {
  data () {
    return {
      imgList: [IronMan, Thor, Ajak, AntMan, Aquaman, Batman, BlackPanther, BlackWidow, CaptainAmerica, CaptainMarvel, Cyborg, Deadshot, DoctorStrange, Drax, ElDiablo, Falcon, Gamora, Groot, Hawkeye, Heimdall, Hulk, Korg, Loki, Mantis, Nebula, NickFury, Phastos, QuickSilver, RocketRacoon, ScarletWitch, Shuri, Spiderman, StarLord, Superman, TheFlash, TheWasp, Valkyrie, Vision, WarMachine, WinterSoldier, WonderWoman, YonduOlunta],
      wrongAnwers: ["Batman", "Superman", "Wonder Woman", "Aquaman", "The Flash", "Cyborg", "Deadshot", "El Diablo"],
      imgSrc: BlackImage,
      blurValue: ref("50px"),
      color: ref("green"),
      polling: null,
      timer: 0,
      input: null,
      helpOpen: false,
      firstGame: true,
      timeOut: false,
      solutionName: ""
    };
  },
  methods: {
    loadOtherImg () {
      this.solutionName = "";
      if (this.firstGame) {
        // this.firstGame = false;
        this.input = null;
        gameRunning = true;
        this.timer = 0;
        const min = 0;
        const max = this.imgList.length - 1;
        const x = Math.round((Math.random() * (max - min)) + min);
        blurInt = 50;
        this.changeBlur("50px");
        this.imgSrc = this.imgList[x];
        this.polling = setInterval(function () {
          // this code runs every second
          blurInt -= 0.2;
          blurIntString = blurInt.toString();
          blurIntString += pxString;
          if (blurInt <= 0) {
            blurInt = 0;
            this.submitAnswer();
            this.timeOut = true;
          }
          this.changeBlur(blurIntString);
          this.timer += 100;
          // console.log(blurInt);
        }.bind(this), 100);
      }
    },

    changeBlur (blurPixel) {
      this.blurValue = ref(blurPixel);
    },

    submitAnswer () {
      if (gameRunning) {
        gameRunning = false;
        clearInterval(this.polling);
        const time = this.timer / 1000;
        console.log(time + " Seconds");
        this.changeBlur("0px");
        console.log(this.input);
        let s = this.imgSrc;
        s = s.substring(s.indexOf("images/"));
        s = s.substring(7);
        s = s.substring(0, s.indexOf("."));
        s = s.split(/(?=[A-Z])/).join(" ");
        s = (s.charAt(0).toUpperCase() + s.slice(1));
        console.log(s);
        // this.imgSrc = BlackImage;

        if (this.wrongAnwers.includes(s)) {
          console.log("klappt");
          if (this.input === null) {
            this.color = ref("green");
            this.solutionName = "Korrekt, denn dies ist kein Marvel-Held!";
          }
          if (this.input !== null) {
            this.color = ref("green");
            this.solutionName = "Leider falsch, denn dies ist kein Marvel-Held!";
          }
        } else {
          console.log("");
          if (this.input === s) {
            console.log("Right answer");
            this.color = ref("green");
            this.solutionName = "Korrekt!";

            if ((this.timer / 1000) < 12.5) {
              this.solutionName += " Und du warst sehr schnell mit " + (this.timer / 1000) + " Sekunden. Weiter so!";
            } else {
              this.solutionName += " Du hast " + (this.timer / 1000) + " Sekunden gebraucht. Übe weiter, um ein richtiger Profi zu werden";
            }
          } else {
            console.log("Wrong answer");
            this.color = ref("red");
            this.solutionName = "Leider falsch, der richtige Superheld ist " + s;
          }
        }
        // this.loadOtherImg();
      }
    },
    openText () {
      this.helpOpen = !this.helpOpen;
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
.solutionText {
  color: v-bind(color);
}
</style>
