<template>
  <div class="max-w-none mx-auto mb-4">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 id="headlineQuestion" class="text-lg leading-6 font-medium text-gray-900">
              {{ question }}
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="helpOpen = !helpOpen">
              ?
            </button>
          </div>
        </div>
      </div>
      <div v-show="helpOpen" class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <b>Hinweistext: </b>Bitte malen sie die Antwort.
      </div>
      <!-- Grid with Canvas and solution Page-->
      <div id="app" class="px-4 py-5">
        <div class="grid grid-cols-2 cols-gap-0.1 gap-4">
          <div
            style="border:solid;"
            width="400px"
            height="400px"
          >
            <canvas
              id="canvas"
              :name="'drawitem-'+props.index+ '-id'"
              @mousedown="startPainting"
              @mouseup="finishedPainting"
              @mousemove="draw"
              width="550px"
              height="500px"
            />
          </div>
          <div
            style="border:solid;"
            width="400px"
            height="500px"
          >
          <div class ="img3">
            <img
              id="solutionPlaceholder"
              src="/assets/images/bg.jpg"
              draggable="false"
              width="fit-content"
              height="500px"
            >
          </div>
          </div>
        </div>
        <br>
        <!-- Buttons Restart / NewGame / Reset -->
        <button type="button" class="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="newGame()">
          Neues Spiel
        </button>
        <div class="divider"/>
        <button type="button" class="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="reset()">
          Zeichnung zurücksetzen
        </button>
        <div class="divider"/>
        <button type="button" class="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="showSolution()">
          Lösung anzeigen
        </button>
      </div>
    </div>
  </div>
</template>

<!--Set Props -->

<script setup>
import { ref } from "vue";
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

const { data: api } = await useFetch("/api/drawItem/" + props.id);
const question = api.value.question;
const helpOpen = ref(false);
</script>
<script>

let counter = 0;
let newQuestion = "";

export default {
  el: "#app",
  $data: {
    vueCanvas: null,
    painting: false,
    canvas: null,
    ctx: null
  },
  mounted () {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  },
  methods: {
    // Start / Stop Drawing
    startPainting (e) {
      this.painting = true;
      this.draw(e);
    },
    finishedPainting () {
      this.painting = false;
      this.ctx.beginPath();
    },
    // Calculate Mouse Pos.
    getMousePos (canvas, e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    },
    // Draw on canvas
    draw (e) {
      if (!this.painting) {
        return;
      }
      const pos = this.getMousePos(canvas, e);
      this.ctx.lineWidth = 4;
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    },
    // Show new Question
    showSolution () {
      if ((counter + 1) === this.props.id) {
        console.log("Show solution Props " + this.props.id);
        document.getElementById("solutionPlaceholder").src = "/assets/images/solution" + this.props.id + ".jpg";
      } else {
        console.log("Show solution this Counter " + counter);
        document.getElementById("solutionPlaceholder").src = "/assets/images/solution" + (counter + 1) + ".jpg";
      }
    },
    // Restart Game
    async newGame () {
      this.reset();
      document.getElementById("solutionPlaceholder").src = "/assets/images/bg.jpg";
      const { data: api0 } = await useFetch("/api/drawItem/" + (counter + 1));
      const { data: api1 } = await useFetch("/api/drawItem/" + (counter + 2));
      const { data: api2 } = await useFetch("/api/drawItem/" + (counter + 3));
      const { data: api3 } = await useFetch("/api/drawItem/" + (counter + 4));
      if (counter === 0) {
        newQuestion = api1.value.question;
      }
      if (counter === 1) {
        newQuestion = api2.value.question;
      }
      if (counter === 2) {
        newQuestion = api3.value.question;
      }
      counter += 1;
      if (counter === 3) {
        counter = 0;
        newQuestion = api0.value.question;
      }
      document.getElementById("headlineQuestion").innerHTML = newQuestion;
    },
    reset () {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
};

</script>

<!-- Style Img Grid-->
<style>
  .img3 {
    width:  550px;
    height: 500px;
  }
</style>
