<script>
// ref works for all kind of value like string, number , object
// reactive works for object only
// when use ref then extra wrapper(called value) exist.

import { ref, reactive, computed } from "vue";

export default {
  // composition api
  setup() {
    const userName = ref("Munna Islam");
    const player = reactive({ name: "Messi", jersy: 10 });

    const nameChangeHandler = () => {
      console.log("nameChangeHandler ::");
      userName.value = "Md Mohimenol Islam";
    };

    const playerNameChangeHandler = () => {
      console.log("playerNameChangeHandler ::");
      player.name = "Leonel Messi";
      player.jersy = player.jersy + 5;
    };

    const methodForDataBinding = computed(() => {
      console.log("Method For Data Binding handler");
      return "Method For Data Binding Go" + `${player.jersy}`;
    });

    return {
      userName,
      nameChangeHandler,
      player,
      playerNameChangeHandler,
      methodForDataBinding,
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
  <div class="compositionApiContainer">
    <h2>Replacement of option's API data property in composition API</h2>

    <div>
      <h3>Name : {{ name }}</h3>
      <h3>UserName : {{ userName }}</h3>
      <button @click="nameChangeHandler">Change Name</button>
    </div>

    <div>
      <h3>Player Name : {{ player.name }}</h3>
      <h3>Jersy No : {{ player.jersy }}</h3>
      <button @click="playerNameChangeHandler">Change Name And Jersy</button>
    </div>

    <div>
      <h3>Method For Data Binding : {{ methodForDataBinding }}</h3>
    </div>
  </div>
</template>

<style scoped>
.compositionApiContainer {
  border: 1px solid salmon;
  padding: 20px;
}
</style>
