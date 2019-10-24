<template>
  <div class="pokemon-stats" v-if="pokemon">
    <div class="pokemon__stats--main default" :class="[pokemon.type2, pokemon.type1]">
      <p class="name">#{{pokemon.id}} {{pokemon.name}}</p>
      <img class="image" :src="pokemon.img" />
      <div class="types">
        <span class="type" v-if="pokemon.type2">{{pokemon.type2}} | </span>
        <span class="type">{{pokemon.type1}}</span>
      </div>
    </div>
    <div class="pokemon__stats--container">
      <div class="pokemon__stat" v-for="(stat, key) in pokemon.stats" :key="key">
        <span>{{stat.stat.name}}</span>
        <span class="number">{{stat.base_stat}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokedexStats",
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>
.pokemon__stats--main {
  background-image: url(../../public/pokeball.png);
  display: grid;
  justify-content: center;
  text-align: center;
  color: white;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
.pokemon__stat {
  border-bottom: #b1cfcec7 1px solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}
.pokemon-stats {
  margin: 0 15px;
  overflow: scroll;
}

.pokemon__stats--container {
  padding: 15px 0 0 0;
}

.number {
  text-align: right;
}

img {
  justify-self: center;
}

.name {
  padding: 10px 0 0 0;
}
.types {
  padding: 0 5px 5px 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .pokemon-stats{
    margin: 0;
  }
}
</style>