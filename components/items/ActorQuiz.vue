<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "In welchen der Filmen spielt dieser Superheld mit?" }}
            </h3>
              <client-only>
                <div class="image2">
                   <div class="spalte-1">
                      <img id="test" :src="imgSrc"/>
                    </div>
                      <table style="width:100%">
                      <tr>
                        <td>Helden-Name:</td>
                        <td><b>{{ name }}</b></td>
                        <input id="nameInput" v-model="input1" type="text" style="padding: 2px;">
                      </tr>
                      <tr>
                        <td>Erster Filmauftritt:</td>
                        <td><b>{{ firstFilm }}</b></td>
                        <input id="firstFilmInput" v-model="input2" type="text" style="padding: 2px;">
                      </tr>
                      <tr>
                        <td>Schauspieler:</td>
                        <td><b>{{ actor }}</b></td>
                        <input id="actorInput" v-model="input3" type="text" style="padding: 2px;">
                      </tr>
                      <tr>
                        <td>Heimatplanet:</td>
                        <td><b>{{ planet }}</b></td>
                        <input id="planetInput" v-model="input4" type="text" style="padding: 2px;">
                      </tr>
                      <tr>
                        <td>Mitglied der Avengers?:</td>
                        <td><b> {{ isAvenger }} </b></td>
                        <input id="avengerInput" v-model="input5" type="text" style="padding: 2px;">
                      </tr>
                    </table>
                  </div>
              </client-only>
          </div>
        </div>
         <div id="app">
          <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="loadOtherImg">
            Start Game
          </button>
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
import IronMan from "~/assets/images/ironMan.resized.jpg";
import Thor from "~/assets/images/Thor.resized.jpg";
import Ajak from "~/assets/images/ajak.resized.jpeg";
import AntMan from "~/assets/images/antman.resized.jpg";
import Aquaman from "~/assets/images/aquaman.resized.webp";
import Batman from "~/assets/images/batman.resized.jpg";
import BlackPanther from "~/assets/images/blackPanther.resized.jpg";
import BlackWidow from "~/assets/images/blackWidow.resized.jpg";
import CaptainAmerica from "~/assets/images/captainAmerica.resized.jpg";
import Cyborg from "~/assets/images/cyborg.resized.webp";
import Deadshot from "~/assets/images/deadshot.resized.jpg";
import DoctorStrange from "~/assets/images/doctorStrange.resized.jpg";
import Drax from "~/assets/images/drax.resized.jpg";
import ElDiablo from "~/assets/images/elDiablo.resized.webp";
import Falcon from "~/assets/images/falcon.resized.jpg";
import Gamora from "~/assets/images/gamora.resized.webp";
import Hawkeye from "~/assets/images/hawkeye.resized.webp";
import Heimdall from "~/assets/images/heimdall.resized.webp";
import Hulk from "~/assets/images/hulk.resized.jpg";
import Korg from "~/assets/images/korg.resized.jpg";
import Loki from "~/assets/images/loki.resized.jpeg";
import Mantis from "~/assets/images/mantis.resized.jpg";
import NickFury from "~/assets/images/nickFury.resized.jpg";
import Phastos from "~/assets/images/phastos.resized.jpg";
import Quicksilver from "~/assets/images/quickSilver.resized.webp";
import ScarlettWitch from "~/assets/images/scarlettWitch.resized.jpg";
import Shuri from "~/assets/images/shuri.resized.webp";
import Spiderman from "~/assets/images/spiderman.resized.jpg";
import StarLord from "~/assets/images/starLord.resized.webp";
import Superman from "~/assets/images/superman.resized.webp";
import TheFlash from "~/assets/images/theFlash.resized.jpg";
import TheWasp from "~/assets/images/theWasp.resized.jpg";
import Valkyrie from "~/assets/images/valkyrie.resized.webp";
import WarMachine from "~/assets/images/warmachine.resized.jpg";
import WinterSoldier from "~/assets/images/winterSoldier.resized.webp";
import YonduUdonta from "~/assets/images/yonduUdonta.resized.webp";
import BlackImage from "~/assets/images/Solid_black.svg.png";

let blurInt = 100;
let blurIntString = "";
const pxString = "px";
let gameRunning = false;

export default {
  data: function () {
    return {
      imgList: [IronMan, CaptainAmerica, WinterSoldier, NickFury, Hulk, BlackWidow, Thor, Loki, Hawkeye, WarMachine, Falcon, StarLord, Gamora, Drax, YonduUdonta, Mantis, AntMan, BlackPanther, ScarlettWitch, Quicksilver, TheWasp, Spiderman, DoctorStrange, Valkyrie, Korg, Shuri, Heimdall, Phastos, Ajak, Batman, Superman, Aquaman, TheFlash, Cyborg, Deadshot, ElDiablo],
      wrongAnwers: ["Batman", "Superman", "Aquaman", "The Flash", "Cyborg", "Deadshot", "El Diablo"],
      imgSrc: BlackImage,
      blurValue: ref("50px"),
      polling: null,
      timer: 0,
      input: null,
      name: "",
      firstFilm: "",
      actor: "",
      planet: "",
      isAvenger: ""
    };
  },
  methods: {
    loadOtherImg () {
      this.input = null;
      gameRunning = true;
      this.timer = 0;
      const min = 0;
      const max = this.imgList.length - 1;
      const x = Math.round((Math.random() * (max - min)) + min);
      blurInt = 50;
      this.changeBlur("50px");
      this.imgSrc = this.imgList[x];
      console.log(this.imgList[x]);
      console.log(data[x]);
      this.polling = setInterval(function () {
        // this code runs every second
        blurInt -= 0.2;
        blurIntString = blurInt.toString();
        blurIntString += pxString;
        if (blurInt <= 0) {
          blurInt = 0;
          this.submitAnswer();
        }
        this.changeBlur(blurIntString);
        this.timer += 100;
      }.bind(this), 100);
    },

    changeBlur (blurPixel) {
      this.blurValue = ref(blurPixel);
    },

    submitAnswer () {
      if (gameRunning) {
        gameRunning = false;
        clearInterval(this.polling);
        this.changeBlur("100px");
        let s = this.imgSrc;
        s = s.substring(s.indexOf("images/"));
        s = s.substring(7);
        s = s.substring(0, s.indexOf("."));
        s = s.split(/(?=[A-Z])/).join(" ");
        s = (s.charAt(0).toUpperCase() + s.slice(1));
        // this.imgSrc = BlackImage;

        if (this.wrongAnwers.includes(this.input || s)) {
          console.log("Wrong Universe");
        }

        if (this.input === s) {
          console.log("Right answer");
        } else {
          console.log("Wrong answer");
        }
      }
    }
  }

};

const data = [
  // Marvel
  { HeroName: "Iron Man", Actor: "Robert Downey Jr.", FirstFilm: "Iron Man", Planet: "Earth", IsAvenger: true },
  { HeroName: "Captain America", Actor: "Chris Evans", FirstFilm: "Captain America: The First Avenger", Planet: "Earth", IsAvenger: true },
  { HeroName: "Winter Soldier", Actor: "Sebastian Stan", FirstFilm: "Captain America: The First Avenger", Planet: "Earth", IsAvenger: false },
  { HeroName: "Nick Fury", Actor: "Samuel L. Jackson", FirstFilm: "Iron Man 2", Planet: "Earth", IsAvenger: false },
  { HeroName: "Hulk", Actor: "Mark Ruffalo", FirstFilm: "The Incredible Hulk", Planet: "Earth", IsAvenger: true },
  { HeroName: "Black Widow", Actor: "Scarlett Johansson", FirstFilm: "Iron Man 2", Planet: "Earth", IsAvenger: true },
  { HeroName: "Thor", Actor: "Chris Hemsworth", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: true },
  { HeroName: "Loki", Actor: "Tom Hiddleston", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Hawkeye", Actor: "Jeremy Renner", FirstFilm: "Thor", Planet: "Earth", IsAvenger: true },
  { HeroName: "War Machine", Actor: "Don Cheadle", FirstFilm: "Iron Man", Planet: "Earth", IsAvenger: true },
  { HeroName: "Falcon", Actor: "Anthony Mackie", FirstFilm: "Captain America: The Winter Soldier", Planet: "Earth", IsAvenger: true },
  { HeroName: "Star Lord", Actor: "Chris Pratt", FirstFilm: "Guardians of the Galaxy", Planet: "Earth", IsAvenger: false },
  { HeroName: "Gamora", Actor: "Zoe Saldana", FirstFilm: "Guardians of the Galaxy", Planet: "Zen-Whoberi", IsAvenger: false },
  { HeroName: "Drax", Actor: "Dave Bautista", FirstFilm: "Guardians of the Galaxy", Planet: "Kylos", IsAvenger: false },
  { HeroName: "Yondu Udonta", Actor: "Michael Rooker", FirstFilm: "Guardians of the Galaxy", Planet: "Centauri-IV", IsAvenger: false },
  { HeroName: "Mantis", Actor: "Pom Klementieff", FirstFilm: "Guardians of the Galaxy Vol. 2", Planet: "Angoma", IsAvenger: false },
  { HeroName: "Ant Man", Actor: "Paul Rudd", FirstFilm: "Ant-Man", Planet: "Earth", IsAvenger: true },
  { HeroName: "Black Panther", Actor: "Chadwick Boseman", FirstFilm: "Captain America: Civil War", Planet: "Earth", IsAvenger: false },
  { HeroName: "Scarlett Witch", Actor: "Elizabeth Olsen", FirstFilm: "Captain America: The Winter Soldier", Planet: "Earth", IsAvenger: true },
  { HeroName: "Quicksilver", Actor: "Aaron Taylor-Johnson", FirstFilm: "Captain America: The Winter Soldier", Planet: "Earth", IsAvenger: true },
  { HeroName: "The Wasp", Actor: "Evangeline Lilly", FirstFilm: "Ant-Man", Planet: "Earth", IsAvenger: false },
  { HeroName: "Spider Man", Actor: "Tom Holland", FirstFilm: "Iron Man 2", Planet: "Earth", IsAvenger: true },
  { HeroName: "Doctor Strange", Actor: "Benedict Cumberbatch", FirstFilm: "Doctor Strange", Planet: "Earth", IsAvenger: false },
  { HeroName: "Valkyrie", Actor: "Tessa Thompson", FirstFilm: "Thor: Ragnarok", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Korg", Actor: "Taika Waititi", FirstFilm: "Thor: Ragnarok", Planet: "Sakaar", IsAvenger: false },
  { HeroName: "Shuri", Actor: "Letitia Wright", FirstFilm: "Black Panther", Planet: "Earth", IsAvenger: false },
  { HeroName: "Heimdall", Actor: "Idris Elba", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Phastos", Actor: "Brian Tyree Henry", FirstFilm: "Eternals", Planet: "Earth", IsAvenger: false },
  { HeroName: "Ajak", Actor: "Salma Hayek", FirstFilm: "Eternals", Planet: "Earth", IsAvenger: false },
  // DC
  { HeroName: "Batman", Actor: "Ben Affleck", FirstFilm: "Batman v Superman: Dawn of Justice", Planet: "Earth", IsAvenger: false },
  { HeroName: "Superman", Actor: "Henry Cavill", FirstFilm: "Man of Steel", Planet: "Krypton", IsAvenger: false },
  { HeroName: "Aquaman", Actor: "Jason Momoa", FirstFilm: "Justice League", Planet: "Earth", IsAvenger: false },
  { HeroName: "The Flash", Actor: "Ezra Miller", FirstFilm: "Batman v Superman: Dawn of Justice", Planet: "Earth", IsAvenger: false },
  { HeroName: "Cyborg", Actor: "Ray Fisher", FirstFilm: "Justice League", Planet: "Earth", IsAvenger: false },
  { HeroName: "Deadshot", Actor: "Will Smith", FirstFilm: "Suicide Squad", Planet: "Earth", IsAvenger: false },
  { HeroName: "El Diablo", Actor: "Jay Hernandez", FirstFilm: "Suicide Squad", Planet: "Earth", IsAvenger: false }
];
console.log(data);
</script>

<style>
td {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 20px;
}

.answerPixelImage {
 line-height: 3px;
}
</style>
