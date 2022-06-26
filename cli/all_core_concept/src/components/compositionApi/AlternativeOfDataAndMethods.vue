<script>
// ref works for all kind of value like string, number , object
// reactive works for object only
// when use ref then extra wrapper(called value) exist.

import { ref, reactive } from "vue";

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
      player.jersy = 30;
    };

    return {
      userName,
      nameChangeHandler,
      player,
      playerNameChangeHandler,
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

    <div>
      <h3>Player Name : {{ player.name }}</h3>
      <h3>Jersy No : {{ player.jersy }}</h3>
      <button @click="playerNameChangeHandler">Change Name</button>
    </div>
  </div>
</template>
