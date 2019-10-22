<template>
  <div class="pokemon__game" v-if="pokemon">
    <p>Nasumični pokemon: {{pokemon.name}}</p>
    <div :class="[pokemonType2, pokemonType]" class="pokemon__img--container">
      <img :src="pokemon.sprites.front_default" alt />
    </div>
    <input v-model="answer" type="text" />
    <br />
    <button @click="checkAnswer">Provjeri</button>
    <button @click="randomPokemon">Novi pokemon</button>
    <p>Tip: {{pokemonType}}</p>
    <p v-if="this.pokemonType2">Tip: {{pokemonType2}}</p>
    <p>{{status}}</p>
    <pokedex></pokedex>
  </div>
</template>

<script>
export default {
  name: "GuessPokemon",

  data() {
    return {
      pokemon: null,
      pokemonType: null,
      pokemonType2: null,
      answer: "",
      status: ""
    };
  },

  mounted() {
    this.createPokemonList();
    this.randomPokemon();
  },
  methods: {
    createPokemonList() {
      let pokemonList = {};
      let max = 3;
      for (let min = 1; min <= max; min++) {
        pokemonList[min] = {
          id: min
        };
      }
      this.$store.state.pokemonAll = pokemonList;
      console.log("id svih pokemona: ", this.$store.state.pokemonAll);
    },

    randomNumber() {
      let min = 1;
      let max = 3;
      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (this.$store.state.pokemonAll[randomNum].name) {
        return this.randomNumber(); // recursive function
      } else {
        return randomNum;
      }
    },

    async randomPokemon() {
      let id = this.randomNumber();
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const pokemon = await response.json();
      this.pokemon = pokemon;
      this.pokemonType = pokemon.types[0].type.name;
      if (pokemon.types[1]) {
        this.pokemonType2 = pokemon.types[1].type.name;
      } else {
        this.pokemonType2 = null;
      }
    },

    checkAnswer() {
      if (this.answer.toLowerCase() === this.pokemon.name.toLowerCase()) {
        this.$store.state.pokemonAll[this.pokemon.id] = {
          name: this.pokemon.name,
          img: this.pokemon.sprites.front_default,
          stats: this.pokemon.stats
        };
        console.log(
          "točno," + this.$store.state.pokemonAll[this.pokemon.id].name
        );
        console.log("Pokemon broj: ", this.$store.state.pokemonAll);
        this.status = "točno";
        this.randomPokemon();
        this.answer = "";
      } else {
        this.status = "netočno";
        this.randomPokemon();
        this.answer = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.pokemon__img--container {
  display: grid;
  width: 60%;
  height: 300px;
  border-radius: 10px;
  justify-items: center;
  margin: auto;
  position: relative;
  background-color: #49d0b0;
  background-image: url(../../public/pokeball.png);
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
}


img {
  height: 200px;
  width: auto;
  justify-self: end;
  align-self: center;
}
</style>
