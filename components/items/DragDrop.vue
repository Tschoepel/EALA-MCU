<template>
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
      { id: "0", title: "Item A", list: 1 },
      { id: "1", title: "Item B", list: 1 },
      { id: "2", title: "Item C", list: 2 }

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
      window.console.log(itemID);
      const item = items.value.find(item => item.id === itemID);
      window.console.log(item);
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
  margin-top: 60px;
}

.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
