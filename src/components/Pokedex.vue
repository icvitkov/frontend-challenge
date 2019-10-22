<template>
  <div class="pokedex-container">
    <div @click="closeModal">X</div>
    <div class="pokedex__list" v-if="pokemonList">
      <pokemon-item class="default__list" :class="[pokemon.type1]"
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
      /*   pokemonList: this.$store.state.pokemonAll */
      // pokemonList: this.$store.state.pokemonAll,
      currentPokemon: null

    };
  },
  computed: {
    pokemonList() {
      return this.$store.state.pokemonAll;
    }
  },
  methods: {
    closeModal() {
      console.log("closing modal");
      this.$emit('closePokedex');
    },
    getPokemonStats(pokemon) {
      console.log("bla ", pokemon);
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
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
    overflow: scroll;
    padding-right: 10px;
}

.pokemon__stats {
  background: rgb(9, 23, 70);
}
.pokedex-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 80%;
    margin: auto;
    height: 500px;
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
    background: #fdd2eb83; 
    border-radius: 25px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:#fae2f0; 
  }
</style>