<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="ml-4 mt-2 flex-shrink-0 text-align: center">
           <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "Drag & Drop: Sortieren Sie die folgenden Filme nach ihrem Erscheinungsjahr" }}
            </h3>
            <div>
              <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                  {{ item.title }}
                </div>
              </div>
              <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                  {{ item.title }}
                </div>
              </div>
              <div class="drop-zone" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(3)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                  {{ item.title }}
                </div>
              </div>
              <div class="drop-zone" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup () {
    const dropObj = ref([
      { id: "" }
    ]);

    const items = ref([
      { id: "0", title: "Thor", list: 1 },
      { id: "1", title: "Iron Man 2", list: 2 },
      { id: "2", title: "Marvel's the Avengers", list: 3 },
      { id: "3", title: "Doctor Strange", list: 4 }

    ]);

    const getList = (list) => {
      return items.value.filter(item => item.list === list);
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData = ("itemID", item.id);
      dropObj.value.id = item.id;
    };

    const onDrop = (event, list) => {
      window.console.log(event);
      const itemID = dropObj.value.id;// event.dataTransfer.getData("itemID");
      dropObj.value.id = "";
      const item = items.value.find(item => item.id === itemID);
      item.list = list;
    };

    return {
      getList,
      onDrop,
      startDrag
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothign: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.drop-zone {
  width: 50%;
  margin: 10px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 5px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
