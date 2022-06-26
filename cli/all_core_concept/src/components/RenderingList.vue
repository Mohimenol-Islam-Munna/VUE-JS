<script>
export default {
  data() {
    return {
      players: [
        { name: "messi", jersy: 10, club: "psg", country: "argentina" },
        { name: "ronaldo", jersy: 7, club: "MU", country: "portugal" },
        { name: "nymer", jersy: 11, club: "psg", country: "brazil" },
        { name: "mbappe", jersy: 9, club: "psg", country: "france" },
        { name: "benzema", jersy: 9, club: "RMD", country: "france" },
      ],
    };
  },
};
</script>

<template>
  <div class="player_container">
    <h2 class="title">Player List</h2>
    <div class="player" v-for="player in players">
      <h3>Player Name: {{ player.name }}</h3>
      <h4>Jersy No: {{ player.jersy }}</h4>
      <h3>Club Name: {{ player.club }}</h3>
      <h3>Country Name: {{ player.country }}</h3>
    </div>
  </div>
</template>

<style scoped>
.player_container {
  border: 1px solid salmon;
  padding: 20px;
  margin: 10px 0px;
}

.title {
  text-align: center;
  padding: 10px 0px;
  background-color: cyan;
}
.player {
  background-color: lightblue;
  padding: 30px;
  margin-top: 20px;
}
</style>
