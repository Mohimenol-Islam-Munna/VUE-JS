<script>
import { ref } from "vue";

export default {
  // composition api
  setup() {
    const userName = ref("Munna Islam");

    const nameChangeHandler = () => {
      console.log("nameChangeHandle ::");
      userName.value = "Md Mohimenol Islam";
    };

    return {
      userName,
      nameChangeHandler,
    };
  },

  // in option api
  data() {
    return {
      name: "Munna",
    };
  },
};
</script>

<template>
  <div>
    <h2>Replacement of option's API data property in composition API</h2>

    <div>
      <h3>Name : {{ name }}</h3>
      <h3>UserName : {{ userName }}</h3>
      <button @click="nameChangeHandler">Change Name</button>
    </div>
  </div>
</template>
