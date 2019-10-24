<template>
  <div class="pokedex-container">
    <!-- <div @click="closeModal">X</div> -->
    <div class="pokedex__list" v-if="pokemonList">
      <pokemon-item class="default__list" :class="[pokemon.type2, pokemon.type1]"
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemon="pokemon"
        @click.native="getPokemonStats(pokemon)"
      ></pokemon-item>
    </div>
    <div v-else>Nema pokemona</div>
    <pokemon-stats v-if="currentPokemon" :pokemon="currentPokemon"></pokemon-stats>
  </div>
</template>

<script>
import PokemonItem from "@/components/PokedexItem.vue";
import PokemonStats from "@/components/PokemonStats.vue";

export default {
  name: "home",
  components: {
    PokemonItem,
    PokemonStats
  },
  data() {
    return {
      search: '',
      currentPokemon: null

    };
  },
  computed: {
    pokemonList() {
      return this.$store.state.pokemonAll;
    }
  },
  methods: {
    getPokemonStats(pokemon) {
      if (!pokemon.name) return;
      this.currentPokemon = pokemon;
    }
  }
};
</script>
<style scoped>
.pokedex__list {
  display: grid;
  width: 100%;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  overflow: scroll;
  padding-right: 10px;
}

.pokedex-container{
    display: grid;
    grid-template-columns: 57% 40%;
    width: 100%;
    margin: 15px;
    height: 100%;
}
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #746f72b6; 
    border-radius: 25px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:#555153b8; 
  }

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .pokedex-container{
  grid-template-columns: 45% 50%;
  margin: 5px;
  }

  .pokedex__list{
    grid-template-columns: 1fr;
  }
}
</style>