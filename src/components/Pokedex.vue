<template>
  <div class="pokedex-container">
    <div class="pokedex__list" v-if="pokemonList">
      <pokemon-item class="default__list" :class="[pokemon.type1]"
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemonName="pokemon.name"
        :id="pokemon.id"
        :img="pokemon.img"
      ></pokemon-item>
    </div>
    <div v-else>Nema pokemona</div>
    <pokemon-stats></pokemon-stats><!-- bind jedan po jedan -->
  </div>
</template>

<script>
import PokemonItem from "@/components/PokedexItem.vue";
import PokemonStats from "@/components/PokedexStats.vue";

export default {
  name: "home",
  components: {
    PokemonItem,
    PokemonStats
  },
  data() {
    return {
      /*   pokemonList: this.$store.state.pokemonAll */
      pokemonList: this.$store.state.pokemonAll,
      id: 1

    };
  },
  mounted() {
    this.console();
  },
  methods: {
    console() {
      console.log("bla ", this.pokemonList);
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
    background:linear-gradient(rgb(70, 187, 171), rgb(113, 122, 202)); 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:linear-gradient(rgb(113, 122, 202), rgb(70, 187, 171)); 
  }
</style>