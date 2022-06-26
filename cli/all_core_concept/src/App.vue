<script>
// store
import { useCounterStore } from "../src/stores/useCounterStore.js";

import Developer from "./components/Developer.vue";
import Cricketer from "./components/Cricketer.vue";
import Footballer from "./components/Footballer.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import ComputedAndWatch from "./components/ComputedAndWatch.vue";

// composition api
import AlternativeOfDataMethods from "./components/compositionApi/AlternativeOfDataAndMethods.vue";

export default {
  setup() {
    const store = useCounterStore();
    return {
      store,
    };
  },

  components: {
    Developer,
    Cricketer,
    Footballer,
    Contact,
    About,
    AlternativeOfDataMethods,
    ComputedAndWatch,
  },

  data() {
    return {
      name: "Md Mohimenol Islam",
      type: "Front End Developer",
      stackName: "React js, Vus js, Nuxt js",
      jobExperience: 10,
    };
  },
  methods: {
    nameChangeHandler(nameArg) {
      console.log("name change handler : ", nameArg);
      this.name = nameArg;
    },
    increamentJobExperienceHandler() {
      console.log("increament Job Experience Handler");
      this.jobExperience++;
    },
  },
};
</script>

<template>
  <div
    style="
      width: 50%;
      margin: auto;
      border: 2px solid salmon;
      padding: 20px;
      border-radius: 15px;
    "
  >
    <!-- header  -->
    <header
      style="
        display: flex;
        justify-content: space-around;
        background-color: salmon;
        padding: 20px 0px;
      "
    >
      <div>
        <router-link to="/developer/react-js">Developer</router-link>
      </div>
      <div>
        <router-link to="/cricketer">Cricketer</router-link>
      </div>
      <div>
        <router-link to="/footballer">Footballer</router-link>
      </div>

      <div>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div>
        <router-link to="/about">About</router-link>
      </div>
    </header>

    <!-- content  -->
    <div>
      <h2>Pinia Store</h2>
      <p>Counter value :: {{ store.counter }}</p>
      <button @click="store.increment">Increment Counter Store</button>

      <h2>Welcome {{ name }} to Vue js world!!</h2>

      <button
        v-on:click="nameChangeHandler('Md Ifti')"
        style="margin-right: 10px"
      >
        Click To Chanage Name
      </button>

      <!-- composition api  -->
      <div style="border: 2px solid cyan; padding: 10px; margin: 10px 0px">
        <AlternativeOfDataMethods />
      </div>

      <!-- vue router  -->
      <div>
        <Developer
          :name="name"
          :type="type"
          :stack-name="stackName"
          :job-experience="jobExperience"
          :nameChangeHandler="nameChangeHandler"
          @increament-job-experience-handler="increamentJobExperienceHandler"
        />

        <div style="border: 2px solid palegreen; margin-top: 30px">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- computed and watch porperty  -->
    <ComputedAndWatch />
  </div>
</template>
