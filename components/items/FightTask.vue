<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "MCU-Kampf der Woche" }}
            </h3>
              <div class="ml-4 mt-2 flex-shrink-0" >
                <StackedBar :data="stackedData" />
                <client-only>
                  <input type="hidden" :name="'fightTask'" :value="test2">
                  <div class="image2">
                    <div class="grid grid-cols-3 cols-gap-0.5">
                        <div @Click="logImage"><img id="test" :src="imgSrc" class="center" style="height:fit-content"/> </div>
                        <img id="test3" :src="imgSrc3" class="center" style="height:260px;" />
                        <img id="test2" :src="imgSrc2" class="center" style="height:fit-content" />
                    </div>
                    <div class="form">
                        <form>
                          <div class="form__group">
                            <label>Warum ist Ihr ausgewählter Charackter stärker?</label>
                            <textarea
                              v-model="newComment"
                              rows="10"
                              required
                              cols="50"
                              placeholder="Schreibe einen Kommentar..."
                            />
                            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Abschicken</button>
                          </div>
                        </form>
                      </div>
                    </div>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import StackedBar from "vue-slim-stackedbar";

export default {
  components: {
    StackedBar
  },
  data: function () {
    return {
      stackedData: [{
        title: "First",
        value: 19,
        percent: 19,
        color: "#007bff"
      },
      {
        title: "Second",
        value: 36,
        percent: 36,
        color: "#20c997"
      }],
      imgSrc: "../../assets/images/valyrie.jpg",
      imgSrc2: "../../assets/images/starlorf.jpg",
      imgSrc3: "../../assets/images/vs.jpg"
    };
  },
  mounted: function () {
    this.loadOtherImg();
  },
  methods: {
    openText () {
      this.helpOpen = !this.helpOpen;
      this.logImage();
    },
    logImage () {
      console.log("first image clicked!");
    }
  }
};
</script>

<style scoped>
.form {
  margin-top: 1.5em;
}

label {
  display: block;
  margin-bottom: 1em;
  font-weight: 700;
  font-family: Padauk, sans-serif;
}

textarea {
  width: 100%;
  margin-top: 0.5em;
}

button {
  border: unset;
  font-weight: 700;
  padding: 1em 2.5em;
}
</style>
