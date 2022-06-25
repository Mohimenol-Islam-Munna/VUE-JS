<script >
import Developer from "./components/Developer.vue";

export default {
  components: {
    Developer
  },

  data() {
    return {
      name: "Md Mohimenol Islam",
      type: "Front End Developer",
      stackName: "React js, Vus js, Nuxt js",
      jobExperience: 1,
    }
  },
  methods: {
    nameChangeHandler(nameArg) {
      console.log("name change handler : ", nameArg);
      this.name = nameArg;
    }
  },
}
</script>


<template>
  <div style="width: 50%; margin: auto; border: 2px solid salmon; padding: 20px; border-radius: 15px;">
    <h2>Welcome {{ name }} to Vue js world!!</h2>

    <button v-on:click="nameChangeHandler('Md Ifti')" style="margin-right: 10px;">
      Click To Chanage Name
    </button>

    <button @click="nameChangeHandler('New Md Ifti')">
      Again Click To Chanage Name
    </button>


    <div>
      <Developer :name="name" :type="type" :stack-name="stackName" :job-experience="jobExperience" />
    </div>
  </div>
</template>