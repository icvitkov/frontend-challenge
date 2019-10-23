<template>
  <div class="pokemon-stats" v-if="pokemon">
    <div class="pokemon__stats--main default" :class="[pokemon.type1]">
      <p class="name">#{{pokemon.id}} {{pokemon.name}}</p>
      <img class="image" :src="pokemon.img" />
      <div class="types">
        <div class="type" v-if="pokemon.type2">{{pokemon.type2}}</div>
        <div class="type">{{pokemon.type1}}</div>
      </div>
    </div>
    <div class="pokemon__stats--container">
      <div class="pokemon__stat" v-for="(stat, key) in pokemon.stats" :key="key">
        <span class="name">{{stat.stat.name}}</span>
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
  border-radius: 5px;
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
.pokemon-stats{
    margin: 0 15px;
}

.pokemon__stats--container{
    padding: 15px 0 0 0;
}
.type {
  display: inline-block;
  margin: 10px;
  background: #ffffff57;
  border-radius: 25px;
  padding: 10px 20px;
  color: white;
}
.number{
    text-align: right;
}

img{
    justify-self: center;
}
</style>