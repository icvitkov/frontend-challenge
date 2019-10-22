<template>
  <div>
    <div v-if="this.pokemonName" class="pokemon-item">
      <p class="guessed">#{{id}} {{pokemonName}}</p>
      <img class="image" :src="img" />
    </div>
    <div v-else class="pokemon-item">
      <p>#{{id}}</p>
      <i class="fas fa-question"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonItem",
  props: {
    pokemonName: String,
    img: String,
    id: Number,
    stats: Array
  },

};
</script>

<style scoped>
.pokemon-item {
  display: grid;
  grid-template-rows: 1fr 3fr;
  border-radius: 5px;
  height: 200px;
  background-color: #49d0b0;
  justify-content: center;
}
.image {
  height: 100px;
  justify-self: center;
}
.fas{
  font-size: 50px;
  color: #ffffff57;
  margin-top: 25px;
}

p{
  font-size: 20px;
  color: #ffffff57;
}
.guessed{
  color: white;
}
</style>
