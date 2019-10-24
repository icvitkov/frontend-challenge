<template>
  <div>
    <div v-if="pokemon.name" class="pokemon-item nes-pointer">
      <p class="name guessed">#{{pokemon.id}} {{pokemon.name}}</p>
      <img class="image" :src="pokemon.img" />
    </div>
    <div v-else class="pokemon-item default__list">
      <p>#{{pokemon.id}}</p>
      <i class="fas fa-question"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonItem",
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>
.pokemon-item {
  display: grid;
  grid-template-rows: 1fr 3fr;
  height: 200px;
  justify-content: center;
  background-image: url(../../public/pokeball.png);
  background-size: cover;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
.image {
  height: 100px;
  justify-self: center;
}
.fas {
  font-size: 50px;
  color: #ffffff57;
  margin-top: 25px;
}

p {
  color: #ffffff57;
  padding: 10px 0 0 0;
}
.guessed {
  color: white;
}
</style>
