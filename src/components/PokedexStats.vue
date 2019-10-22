<template>
  <div class="pokemon-stats">
     <div v-if="this.pokemonName" class="pokemon__stats--main default" :class="[type1]">
      <p class="name">#{{id}} {{pokemonName}}</p>
      <img class="image" :src="img" />
      <div class="types">
          <div class="type" v-if="type2">{{type2}} </div>
          <div class="type">{{type1}} </div>
      </div>
      <div class="pokemon__stats--container">
          <div class="pokemon__stat">
              bla
          </div>
      </div>
    </div>

    </div>
</template>

<script>
export default {
  name: "PokedexStats",
  props: {
    pokemonName: String,
    img: String,
    id: Number,
    stats: Array,
    type1: String,
    type2: String
  },

  data() {
      return{

      }
  }



};
</script>

<style scoped>
    .pokemon__stats--main{
       background-image: url(../../public/pokeball.png);
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
    }
    .pokemon__stat{
        border-bottom: #ffffff57 3px solid;
    }
    .type{
        display: inline-block;
        margin: 10px;
        background: #ffffff57;
        border-radius: 25px;
        padding: 10px 20px;
        color: white;
    }
</style>