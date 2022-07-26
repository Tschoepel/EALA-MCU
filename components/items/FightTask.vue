<template>
  <div class="max-w-none mx-auto">
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
              <div class="ml-4 mt-2 flex-shrink-0" >
                <h3 class="text-lg text-align: center leading-6 font-medium text-gray-900">
              {{ "MCU-Kampf der Woche" }}
            </h3>
                <StackedBar :data="stackedData" ref="bar" style="visibility: hidden;" />
                <client-only>
                  <input type="hidden" :name="'fightTask'" :value="test2">
                    <div class="grid grid-cols-3 cols-gap-0.5">
                        <div @Click="leftImageClick()"><img id="test" :src="imgSrc" class="center" style="height:fit-content"/> </div>
                        <img id="test3" :src="imgSrc3" class="center" style="height:260px;" />
                        <div @Click="rightImageClick()"><img id="test2" :src="imgSrc2" class="center" style="height:fit-content" /></div>
                    </div>
                    <p>{{ stackedData[0].title + ": " + countLeft }}</p>
                    <p>{{ stackedData[1].title + ": " + countRight }}</p>
                    <br>
                    <p>{{ comments }}</p>
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
                            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submit">Abschicken</button>
                          </div>
                        </form>
                      </div>
              </client-only>
              <StackedBar :data="stackedData" style="visibiity: hidden" />
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
      countLeft: 0,
      countRight: 0,
      hasClicked: false,
      comments: "",
      newComment: "",
      stackedData: [{
        title: "Valkyrie",
        value: 7,
        percent: 70,
        color: "#007bff"
      },
      {
        title: "Starlord",
        value: 3,
        percent: 30,
        color: "#20c997"
      }],
      imgSrc: "../../assets/images/valyrie.jpg",
      imgSrc2: "../../assets/images/starlorf.jpg",
      imgSrc3: "../../assets/images/vs.jpg"
    };
  },
  mounted: function () {
    this.forceUpdate();
  },
  methods: {
    openText () {
      this.helpOpen = !this.helpOpen;
      this.logImage();
    },
    leftImageClick () {
      if (!this.hasClicked) {
        this.hasClicked = true;
        this.countLeft++;
        console.log("first image clicked!");
        this.stackedData[0].value++;
        console.log(this.stackedData[0].value);
        const percentageLeft = 100 * this.stackedData[0].value / (this.stackedData[0].value + this.stackedData[1].value);
        console.log(percentageLeft);
        this.stackedData[0].percent = percentageLeft;
        this.stackedData[1].value = percentageLeft;
        this.stackedData[0].value = "90";
        this.$refs.bar.updateChart();
        // this.forceUpdate();
      }
    },
    rightImageClick () {
      if (!this.hasClicked) {
        this.hasClicked = true;
        this.countRight++;
      }
    },
    submit () {
      if (this.newComment !== null) {
        this.comments += "Stephan: " + this.newComment;
        this.newComment = null;
        console.log("Submit answer");
      }
    },
    forceUpdate () {
      this.$forceUpdate();
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
