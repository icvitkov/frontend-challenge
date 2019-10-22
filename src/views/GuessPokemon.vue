<template>
  <div class="pokemon__game" v-if="pokemon">
    <div class="pokemon__game--main default" :class="[pokemonType2, pokemonType]">
      <div class="pokemon__game--container">
        <p>Nasumični pokemon: {{pokemon.name}}</p>
        <div  class="pokemon__img--container">
          <img :src="pokemon.sprites.front_default" alt />
       <!--    <p>Tip: {{pokemonType}}</p>
          <p v-if="this.pokemonType2">Tip: {{pokemonType2}}</p> -->
        </div>
      </div>
      <div class="progressbar__container">
        <div class="progressbar__status" :style="{width: percent + '%'}"> </div>
      </div>
      <div class="pokemon__game--answer">
        <input v-model="answer" type="text" />
        <br />
        <button @click="checkAnswer">Provjeri</button>
        <button @click="randomPokemon">Novi pokemon</button>
      </div>
    </div>
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
      correct: 0,
      percent: 0
    };
  },

  mounted() {
    this.createPokemonList();
    this.randomPokemon();
  },
  updated(){
    this.calcCorrect();
  },
  methods: {
    createPokemonList() {
      let pokemonList = {};
      let max = 15;
      for (let min = 1; min <= max; min++) {
        pokemonList[min] = {
          id: min
        };
      }
      this.$store.state.pokemonAll = pokemonList;
      console.log("id svih pokemona: ", typeof(this.$store.state.pokemonAll[2].id));
    },

    randomNumber() {
      let min = 1;
      let max = 15;
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
        this.pokemonType2 = "";
      }
    },

    checkAnswer() {
      if (this.answer.toLowerCase() === this.pokemon.name.toLowerCase()) {
        this.$store.state.pokemonAll[this.pokemon.id] = {
          id: this.pokemon.id,
          name: this.pokemon.name,
          img: this.pokemon.sprites.front_default,
          stats: this.pokemon.stats,
          type1: this.pokemon.types[0].type.name,
          type2: this.pokemonType2
        };
        console.log(
          "točno," + this.$store.state.pokemonAll[this.pokemon.id].type1
        );
        console.log("Pokemon broj: ", this.$store.state.pokemonAll);
        this.randomPokemon();
        this.answer = "";
        this.correct++;
      } else {
        this.randomPokemon();
        this.answer = "";
         console.log("id svih pokemona: ", typeof(this.pokemon.types[0].type.name));
      }
    },
    calcCorrect() {
      let max = 15;
      this.percent = (this.correct/max)*100;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemon__game--main {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  width: 80%;
  height: 100%;
  justify-items: center;
  margin: 10% auto;
  padding: 0 30px;
  position: relative;
  background-image: url(../../public/pokeball.png);
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
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
}

img {
  height: 200px;
  width: auto;
  justify-self: center;
  align-self: center;
}
.pokemon__game--answer {
  align-self: center;
}
.progressbar__container{
  width: 80%;
  background: #ffffff57;
  height: 20px;
  border-radius: 5px;
}
.progressbar__status{
  width: 20%;
  background: #ffffb1a6;
  height: 20px;
  border-radius: 5px;
}
</style>
