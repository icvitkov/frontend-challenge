<template>
  <div class="pokedex-container">
    <div class="pokedex__list" v-if="pokemonList">
      <pokemon-item
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemonName="pokemon.name"
        :id="pokemon.id"
        :img="pokemon.img"
      ></pokemon-item>
    </div>
    <div v-else>Nema pokemona</div>
  </div>
</template>

<script>
// @ is an alias to /src

import PokemonItem from "@/components/PokedexItem.vue";

export default {
  name: "home",
  components: {
    PokemonItem
  },
  data() {
    return {
      /*   pokemonList: this.$store.state.pokemonAll */
      pokemonList: 
       this.$store.state.pokemonAll
      
    };
  },
   mounted() {
    this.console();
  },
  methods: {
      console(){
          console.log("bla ", this.pokemonList );
      }
  }
};
</script>
<style scoped>
.pokedex__list {
  display: grid;
  width: 100%;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}
.pokem {
  background: rgba(216, 69, 69, 0.062);
}
.pokemon__stats {
  background: rgb(9, 23, 70);
}
</style>