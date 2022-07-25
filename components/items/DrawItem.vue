<template>
  <div class="max-w-none mx-auto mb-4">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ props.index+1 }}. {{ question }}
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
      <div id="app" class="px-4 py-5">
        <canvas
          id="canvas"
          :name="'drawitem-'+props.index+ '-id'"
          style="border:solid;"
          width="800px"
          height="500px"
          @mousedown="startPainting"
          @mouseup="finishedPainting"
          @mousemove="draw"
        />
      </div>
    </div>
  </div>
</template>

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
    startPainting (e) {
      this.painting = true;
      this.draw(e);
    },
    finishedPainting () {
      this.painting = false;
      this.ctx.beginPath();
    },
    getMousePos (canvas, e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    },
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
    }
  }
};
</script>
