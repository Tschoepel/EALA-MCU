<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Steckbrief-Quiz:" }}
            </h3>
             <div class="ml-4 mt-2 flex-shrink-0" style="padding-bottom: 20px">
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="openText">
              ?
            </button>
            </div>
            <div v-show="helpOpen" class="px-4 py-5 border-b border-gray-200 sm:px-6">
              Gegeben ist ein Bild eines Superhelden mit seinem Steckbrief. Prüfen Sie den Steckbrief auf Fehler - falls vorhanden - und markieren Sie diese, indem Sie auf die Checkbox neben der falschen Aussage klicken. Anschließend geben Sie die richtige Antwort im Textfeld daneben ein. Machen Sie beides jedoch nur, wenn es sich um einen Marvek-Helden handelt!
              </div>
              <client-only>
                <input type="hidden" :name="'actorQuiz'" :value="test2">
                <div class="image2">
                   <div class="spalte-1">
                      <img id="test" :src="imgSrc" class="center" style="width=200px height=200px;"/>
                    </div>
                      <div class="solutionText2" style="text-align:center">
                      <p><b>{{ solutionName }}</b></p>
                      </div>
                      <table style="width:100%">
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Falsch? &emsp;&emsp; Korrektur</td>
                      </tr>
                      <tr>
                        <td>Helden-Name:</td>
                        <td><b>{{ name }}</b></td>
                        <td><input id="answerI" v-model="inputA" type="checkbox" value="answer1" class="mr-2"> &emsp;&emsp;
                        <input id="nameInput" v-model="input1" type="text" style="padding: 2px;"></td>
                        <h3 v-if="submitted&&correct1">&#9989;</h3>
                        <h3 v-if="submitted&&!correct1">&#10060;</h3>
                      </tr>
                      <tr>
                        <td>Erster Filmauftritt:</td>
                        <td><b>{{ firstFilm }}</b></td>
                        <td><input id="answerII" v-model="inputB" type="checkbox" value="answer2" class="mr-2"> &emsp;&emsp;
                        <input id="firstFilmInput" v-model="input2" type="text" style="padding: 2px;"></td>
                        <h3 v-if="submitted&&correct2">&#9989;</h3>
                        <h3 v-if="submitted&&!correct2">&#10060;</h3>
                      </tr>
                      <tr>
                        <td>Schauspieler:</td>
                        <td><b>{{ actor }}</b></td>
                        <td><input id="answerIII" v-model="inputC" type="checkbox" value="answer3" class="mr-2"> &emsp;&emsp;
                        <input id="actorInput" v-model="input3" type="text" style="padding: 2px;"></td>
                        <h3 v-if="submitted&&correct3">&#9989;</h3>
                        <h3 v-if="submitted&&!correct3">&#10060;</h3>
                      </tr>
                      <tr>
                        <td>Heimatplanet:</td>
                        <td><b>{{ planet }}</b></td>
                        <td><input id="answerIV" v-model="inputD" type="checkbox" value="answer4" class="mr-2"> &emsp;&emsp;
                        <input id="planetInput" v-model="input4" type="text" style="padding: 2px;"></td>
                        <h3 v-if="submitted&&correct4">&#9989;</h3>
                        <h3 v-if="submitted&&!correct4">&#10060;</h3>
                      </tr>
                      <tr>
                        <td>Mitglied der Avengers?:</td>
                        <td><b> {{ isAvenger }} </b></td>
                        <td><input id="answerV" v-model="inputE" type="checkbox" value="answer5" class="mr-2"> &emsp;&emsp;
                        <input id="avengerInput" v-model="input5" type="text" style="padding: 2px;"></td>
                        <h3 v-if="submitted&&correct5">&#9989;</h3>
                        <h3 v-if="submitted&&!correct5">&#10060;</h3>
                      </tr>
                    </table>
                      <div id="app">
                        <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="loadOtherImg">
                          Neues Spiel
                        </button>
                            <div class="divider"/>
                      <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="checkSolution">
                        Lösung abschicken
                      </button>
                    </div>
                  </div>
              </client-only>
          </div>
        </div>
        <div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import IronMan from "~/assets/images/ironMan.resized.jpg";
import Thor from "~/assets/images/Thor.resized.jpg";
import Ajak from "~/assets/images/ajak.resized.jpeg";
import AntMan from "~/assets/images/antMan.resized.jpg";
import Aquaman from "~/assets/images/aquaman.resized.webp";
import Batman from "~/assets/images/batman.resized.jpg";
import BlackPanther from "~/assets/images/blackPanther.resized.jpg";
import BlackWidow from "~/assets/images/blackWidow.resized.jpg";
import CaptainAmerica from "~/assets/images/captainAmerica.resized.jpg";
import Cyborg from "~/assets/images/cyborg.jpg";
import Deadshot from "~/assets/images/deadshot.resized.jpg";
import DoctorStrange from "~/assets/images/doctorStrange.resized.jpg";
import Drax from "~/assets/images/drax.resized.jpg";
import ElDiablo from "~/assets/images/elDiablo.resized.webp";
import Falcon from "~/assets/images/falcon.webp";
import Gamora from "~/assets/images/gamora.resized.webp";
import Hawkeye from "~/assets/images/hawkeye.resized.webp";
import Heimdall from "~/assets/images/heimdall.jpg";
import Hulk from "~/assets/images/hulk.resized.jpg";
import Korg from "~/assets/images/korg.resized.jpg";
import Loki from "~/assets/images/loki.resized.jpeg";
import Mantis from "~/assets/images/mantis.resized.jpg";
import NickFury from "~/assets/images/nickFury.resized.jpg";
import Phastos from "~/assets/images/phastos.resized.jpg";
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

export default {
  data: function () {
    return {
      imgList: [IronMan, CaptainAmerica, WinterSoldier, NickFury, Hulk, BlackWidow, Thor, Loki, Hawkeye, WarMachine, Falcon, StarLord, Gamora, Drax, YonduUdonta, Mantis, AntMan, BlackPanther, ScarlettWitch, TheWasp, Spiderman, DoctorStrange, Valkyrie, Korg, Shuri, Heimdall, Phastos, Ajak, Batman, Superman, Aquaman, TheFlash, Cyborg, Deadshot, ElDiablo],
      wrongAnwers: [Batman, Superman, Aquaman, TheFlash, Cyborg, Deadshot, ElDiablo],
      imgSrc: BlackImage,
      name: "",
      firstFilm: "",
      actor: "",
      planet: "",
      isAvenger: "",
      answer1Wrong: null,
      answer2Wrong: null,
      answer3Wrong: null,
      answer4Wrong: null,
      answer5Wrong: null,
      trickQuestion: false,
      input1: null,
      input2: null,
      input3: null,
      input4: null,
      input5: null,
      inputA: false,
      inputB: false,
      inputC: false,
      inputD: false,
      inputE: false,
      firstQuestion: true,
      knownWrongAnswers: 0,
      correctRemediation: 0,
      x: null,
      helpOpen: false,
      correct1: false,
      correct2: false,
      correct3: false,
      correct4: false,
      correct5: false,
      submitted: false,
      solutionName: "",
      color: ref("green"),
      solutionChecked: false,
      nameColor: ref("green"),
      filmColor: ref("green"),
      actorColor: ref("green"),
      planetColor: ref("green"),
      avengerColor: ref("green")
    };
  },
  methods: {
    loadOtherImg () {
      // first check Solution
      // const solutionString = (this.input1 + this.input2 + this.input3 + this.input4 + this.input5);
      const min = 0;
      const max = this.imgList.length - 1;
      this.x = Math.round((Math.random() * (max - min)) + min);
      this.imgSrc = this.imgList[this.x];
      this.trickQuestion = false;
      if (this.wrongAnwers.includes(this.imgSrc)) {
        this.trickQuestion = true;
      }

      this.answer1Wrong = false;
      this.answer2Wrong = false;
      this.answer3Wrong = false;
      this.answer4Wrong = false;
      this.answer5Wrong = false;
      this.inputA = false;
      this.inputB = false;
      this.inputC = false;
      this.inputD = false;
      this.inputE = false;
      this.input1 = null;
      this.input2 = null;
      this.input3 = null;
      this.input4 = null;
      this.input5 = null;
      this.submitted = false;
      this.correct1 = false;
      this.correct2 = false;
      this.correct3 = false;
      this.correct4 = false;
      this.correct5 = false;
      this.solutionName = "";
      this.solutionChecked = false;
      this.nameColor = ref("black");
      this.filmColor = ref("black");
      this.actorColor = ref("black");
      this.planetColor = ref("black");
      this.avengerColor = ref("black");

      const a1 = Math.random() < 0.5;
      const a2 = Math.random() < 0.5;
      const a3 = Math.random() < 0.5;
      const a4 = Math.random() < 0.5;
      const a5 = Math.random() < 0.5;
      const r1 = Math.round((Math.random() * (max - min)) + min);

      if (a1) {
        this.name = data[this.x].HeroName;
      } else {
        this.name = data[r1].HeroName;
        if (data[this.x].HeroName !== data[r1].HeroName) {
          this.answer1Wrong = true;
        }
      }
      if (a2) {
        this.firstFilm = data[this.x].FirstFilm;
      } else {
        const a6 = Math.random() < 0.5;
        const r2 = Math.round((Math.random() * (max - min)) + min);
        if (a6 && a1) {
          this.firstFilm = data[r2].FirstFilm;
        } else {
          this.firstFilm = data[r1].HeroName;
        }
        if (data[this.x].FirstFilm !== data[r2].FirstFilm) {
          this.answer2Wrong = true;
        }
      }
      if (a3) {
        this.actor = data[this.x].Actor;
      } else {
        const r3 = Math.round((Math.random() * (max - min)) + min);
        this.actor = data[r3].Actor;
        if (data[this.x].Actor !== data[r3].Actor) {
          this.answer3Wrong = true;
        }
      }
      if (a4) {
        this.planet = data[this.x].Planet;
      } else {
        const r4 = Math.round((Math.random() * (max - min)) + min);
        this.planet = data[r4].Planet;
        if (data[this.x].Planet !== data[r4].Planet) {
          this.answer4Wrong = true;
        }
      }
      if (a5) {
        this.isAvenger = "Ja";
        if (!data[this.x].IsAvenger) {
          this.answer5Wrong = true;
        }
      } else {
        this.isAvenger = "Nein";
        if (data[this.x].IsAvenger) {
          this.answer5Wrong = true;
        }
      }
    },
    checkSolution () {
      if (!this.solutionChecked) {
        this.submitted = true;
        this.solutionChecked = true;
        if (this.trickQuestion && ((this.inputA) || (this.inputB) || (this.inputC) || (this.inputD) || (this.inputE) || (this.input1 !== null) || (this.input2 !== null) || (this.input3 !== null) || (this.input4 !== null) || (this.input5 !== null))) {
          this.color = ref("red");
          this.solutionName = "Leider falsch, denn dies ist kein Marvel-Held!";
          this.submitted = false;
        } else if (this.trickQuestion && ((!this.inputA) && (!this.inputB) && (!this.inputC) && (!this.inputD) && (!this.inputE) && (this.input1 === null) && (this.input2 === null) && (this.input3 === null) && (this.input4 === null) && (this.input5 === null))) {
          this.color = ref("green");
          this.submitted = false;
          this.solutionName = "Korrekt, denn dies ist kein Marvel-Held!";
        }
        this.knownWrongAnswers = 0;
        this.correctRemediation = 0;
        if (!this.answer1Wrong && this.input1 === null) {
          this.correct1 = true;
        }
        if (!this.answer2Wrong && this.input2 === null) {
          this.correct2 = true;
        }
        if (!this.answer3Wrong && this.input3 === null) {
          this.correct3 = true;
        }
        if (!this.answer4Wrong && this.input4 === null) {
          this.correct4 = true;
        }
        if (!this.answer5Wrong && this.input5 === null) {
          this.correct5 = true;
        }
        // first check wheather student knows all wrong statements:
        if (this.answer1Wrong && (this.inputA)) {
          this.knownWrongAnswers++;
          if (data[this.x].HeroName === this.input1) {
            console.log("Right hero name");
            this.correctRemediation++;
            this.correct1 = true;
            this.nameColor = ref("green");
          } else {
            this.nameColor = ref("red");
            this.input1 = this.input1 + "-> " + data[this.x].HeroName;
          }
        }
        if (this.answer2Wrong && (this.inputB)) {
          this.knownWrongAnswers++;
          if (data[this.x].FirstFilm === this.input2) {
            console.log("Right first film");
            this.correctRemediation++;
            this.correct2 = true;
            this.filmColor = ref("green");
          } else {
            this.filmColor = ref("red");
            this.input2 = this.input2 + "-> " + data[this.x].FirstFilm;
          }
        }
        if (this.answer3Wrong && (this.inputC)) {
          this.knownWrongAnswers++;
          if (data[this.x].Actor === this.input3) {
            console.log("Right actor name");
            this.correctRemediation++;
            this.correct3 = true;
            this.actorColor = ref("green");
          } else {
            this.actorColor = ref("red");
            this.input3 = this.input3 + "-> " + data[this.x].Actor;
          }
        }
        if (this.answer4Wrong && (this.inputD)) {
          this.knownWrongAnswers++;
          if (data[this.x].Planet === this.input4) {
            console.log("Right planet name");
            this.correctRemediation++;
            this.correct4 = true;
            this.planetColor = ref("green");
          } else {
            this.planetColor = ref("red");
            this.input4 = this.input4 + "-> " + data[this.x].Planet;
          }
        }
        if (this.answer5Wrong && (this.inputE)) {
          this.knownWrongAnswers++;
          if ((this.isAvenger === "Nein" && this.input5 === "Ja") || (this.isAvenger === "Ja" && this.input5 === "Nein")) {
            console.log("Right avenger membership");
            this.correctRemediation++;
            this.correct5 = true;
            this.avengerColor = ref("green");
          } else {
            this.avengerColor = ref("red");
          }
        }
        if (this.knownWrongAnswers === (this.answer1Wrong + this.answer2Wrong + this.answer3Wrong + this.answer4Wrong + this.answer5Wrong) && !this.trickQuestion) {
          this.color = ref("green");
          this.solutionName = "Gratulation, Sie haben alle falschen Aussagen gewusst. Üben Sie weiter, um in Zukunft auch die richtigen Korrekturen zu wissen.";
        }
        if (this.correctRemediation === (this.answer1Wrong + this.answer2Wrong + this.answer3Wrong + this.answer4Wrong + this.answer5Wrong && !this.trickQuestion)) {
          this.color = ref("green");
          this.solutionName = "Gratulation, Sie haben alle falschen Aussagen gewusst und auch richtig korrigier. Weiter so!";
        }
      }
      this.imgSrc = AntMan;
    },
    openText () {
      this.helpOpen = !this.helpOpen;
    }
  },
  mounted: function () {
    this.loadOtherImg();
  }

};

const data = [
  // Marvel
  { HeroName: "Iron Man", Actor: "Robert Downey Jr.", FirstFilm: "Iron Man", Planet: "Erde", IsAvenger: true },
  { HeroName: "Captain America", Actor: "Chris Evans", FirstFilm: "Captain America: The First Avenger", Planet: "Erde", IsAvenger: true },
  { HeroName: "Winter Soldier", Actor: "Sebastian Stan", FirstFilm: "Captain America: The First Avenger", Planet: "Erde", IsAvenger: false },
  { HeroName: "Nick Fury", Actor: "Samuel L. Jackson", FirstFilm: "Iron Man 2", Planet: "Erde", IsAvenger: false },
  { HeroName: "Hulk", Actor: "Mark Ruffalo", FirstFilm: "The Incredible Hulk", Planet: "Erde", IsAvenger: true },
  { HeroName: "Black Widow", Actor: "Scarlett Johansson", FirstFilm: "Iron Man 2", Planet: "Erde", IsAvenger: true },
  { HeroName: "Thor", Actor: "Chris Hemsworth", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: true },
  { HeroName: "Loki", Actor: "Tom Hiddleston", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Hawkeye", Actor: "Jeremy Renner", FirstFilm: "Thor", Planet: "Erde", IsAvenger: true },
  { HeroName: "War Machine", Actor: "Don Cheadle", FirstFilm: "Iron Man", Planet: "Erde", IsAvenger: true },
  { HeroName: "Falcon", Actor: "Anthony Mackie", FirstFilm: "Captain America: The Winter Soldier", Planet: "Erde", IsAvenger: true },
  { HeroName: "Star Lord", Actor: "Chris Pratt", FirstFilm: "Guardians of the Galaxy", Planet: "Erde", IsAvenger: false },
  { HeroName: "Gamora", Actor: "Zoe Saldana", FirstFilm: "Guardians of the Galaxy", Planet: "Zen-Whoberi", IsAvenger: false },
  { HeroName: "Drax", Actor: "Dave Bautista", FirstFilm: "Guardians of the Galaxy", Planet: "Kylos", IsAvenger: false },
  { HeroName: "Yondu Udonta", Actor: "Michael Rooker", FirstFilm: "Guardians of the Galaxy", Planet: "Centauri-IV", IsAvenger: false },
  { HeroName: "Mantis", Actor: "Pom Klementieff", FirstFilm: "Guardians of the Galaxy Vol. 2", Planet: "Angoma", IsAvenger: false },
  { HeroName: "Ant-Man", Actor: "Paul Rudd", FirstFilm: "Ant-Man", Planet: "Erde", IsAvenger: true },
  { HeroName: "Black Panther", Actor: "Chadwick Boseman", FirstFilm: "Captain America: Civil War", Planet: "Erde", IsAvenger: false },
  { HeroName: "Scarlett Witch", Actor: "Elizabeth Olsen", FirstFilm: "Captain America: The Winter Soldier", Planet: "Erde", IsAvenger: true },
  { HeroName: "The Wasp", Actor: "Evangeline Lilly", FirstFilm: "Ant-Man", Planet: "Erde", IsAvenger: false },
  { HeroName: "Spider Man", Actor: "Tom Holland", FirstFilm: "Iron Man 2", Planet: "Erde", IsAvenger: true },
  { HeroName: "Doctor Strange", Actor: "Benedict Cumberbatch", FirstFilm: "Doctor Strange", Planet: "Erde", IsAvenger: false },
  { HeroName: "Valkyrie", Actor: "Tessa Thompson", FirstFilm: "Thor: Ragnarok", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Korg", Actor: "Taika Waititi", FirstFilm: "Thor: Ragnarok", Planet: "Sakaar", IsAvenger: false },
  { HeroName: "Shuri", Actor: "Letitia Wright", FirstFilm: "Black Panther", Planet: "Erde", IsAvenger: false },
  { HeroName: "Heimdall", Actor: "Idris Elba", FirstFilm: "Thor", Planet: "Asgard", IsAvenger: false },
  { HeroName: "Phastos", Actor: "Brian Tyree Henry", FirstFilm: "Eternals", Planet: "Erde", IsAvenger: false },
  { HeroName: "Ajak", Actor: "Salma Hayek", FirstFilm: "Eternals", Planet: "Erde", IsAvenger: false },
  // DC
  { HeroName: "Batman", Actor: "Ben Affleck", FirstFilm: "Batman v Superman: Dawn of Justice", Planet: "Erde", IsAvenger: false },
  { HeroName: "Superman", Actor: "Henry Cavill", FirstFilm: "Man of Steel", Planet: "Krypton", IsAvenger: false },
  { HeroName: "Aquaman", Actor: "Jason Momoa", FirstFilm: "Justice League", Planet: "Erde", IsAvenger: false },
  { HeroName: "The Flash", Actor: "Ezra Miller", FirstFilm: "Batman v Superman: Dawn of Justice", Planet: "Erde", IsAvenger: false },
  { HeroName: "Cyborg", Actor: "Ray Fisher", FirstFilm: "Justice League", Planet: "Erde", IsAvenger: false },
  { HeroName: "Deadshot", Actor: "Will Smith", FirstFilm: "Suicide Squad", Planet: "Erde", IsAvenger: false },
  { HeroName: "El Diablo", Actor: "Jay Hernandez", FirstFilm: "Suicide Squad", Planet: "Erde", IsAvenger: false }
];
</script>

<style>
td {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 20px;
}

img {
    float: left;
    width:  800px;
    height: 500px;
    object-fit: cover;
}

.answerPixelImage {
 line-height: 3px;
}

.solutionText2 {
  color: v-bind(color);
}

#nameInput {
  color: v-bind(nameColor);
}
#firstFilmInput {
  color: v-bind(filmColor);
}
#actorInput {
  color: v-bind(actorColor);
}
#planetInput {
  color: v-bind(planetColor);
}
#avengerInput {
  color: v-bind(avengerColor);
}
</style>
