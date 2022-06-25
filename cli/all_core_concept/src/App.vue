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
  }
}
</script>


<template>
  <h2>Welcome {{ name }} to Vue js world!!</h2>
  <div>
    <Developer :name="name" :type="type" :stack-name="stackName" :job-experience="jobExperience" />
  </div>
</template>