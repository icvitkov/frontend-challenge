<template>
  <div class="pokemon__game" v-if="pokemon">
    <div class="pokemon__game--main default" :class="[pokemonType2, pokemonType]">
      <div class="pokemon__game--container">
        <div class="pokemon__img--container">
          <img :src="pokemon.sprites.front_default" alt v-if="this.correct !== $store.state.numberOfPokemons " />
          <p class="won" v-else>YOU WON!</p>
        </div>
      </div>
      <!-- <div class="progressbar__container">
        {{correct}} / {{$store.state.numberOfPokemons}}
        <div class="progressbar__status" :style="{width: percent + '%'}"></div>
      </div> -->
      <progress class="nes-progress is-pattern" :value="correct" :max="$store.state.numberOfPokemons"></progress>
      <p>{{correct}} / {{$store.state.numberOfPokemons}}</p>

      <div class="pokemon__game--answer">
    
      <input  class="nes-input" v-model="answer" type="text" placeholder="Enter name" @keyup.enter="checkAnswer">

        <div class="buttons" v-if="this.correct < $store.state.numberOfPokemons">
          <button class="nes-btn is-success" @click="checkAnswer">Check</button>
          <button class="nes-btn is-primary" @click="randomPokemon">Next</button>
        </div>
        <div class="buttons" v-else>
          <button class="nes-btn is-warning" @click="restart">Restart</button>
        </div>
        <button class="nes-btn is-error" @click="openPokedex">Pokedex</button>
      </div>
    </div>
    <modal name="pokedex-modal" width="78%" height="60%" overlayTransition="overlay-fade">
      <pokedex></pokedex>
    </modal>
  </div>
</template>

<script>
import Pokedex from "@/components/Pokedex";

export default {
  name: "GuessPokemon",
  components: {
    Pokedex
  },
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
  updated() {
    this.calcCorrect();
  },
  methods: {
    openPokedex() {
      this.$modal.show("pokedex-modal");
    },
    createPokemonList() {
      let pokemonList = {};
      for (let min = 1; min <= this.$store.state.numberOfPokemons; min++) {
        pokemonList[min] = {
          id: min
        };
      }
      this.$store.state.pokemonAll = pokemonList;
  
    },

    randomNumber() {
      let min = 1;
      let randomNum = Math.floor(Math.random() * (this.$store.state.numberOfPokemons - min + 1)) + min;
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
      
        this.randomPokemon();
        this.answer = "";
        this.correct++;
      } else {
        this.randomPokemon();
        this.answer = "";
      }
    },
    calcCorrect() {
      this.percent = (this.correct / this.$store.state.numberOfPokemons) * 100;
    },
    restart() {
      this.$store.state.pokemonAll = {};
      this.correct = 0;
      this.createPokemonList();
      this.randomPokemon();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemon__game--main {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;

  height: 100%;

  justify-items: center;

  position: relative;

  background-image: url(/img/pokeball.db55b153.png);
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
}


.pokemon__img--container {
  display: grid;
  
}
.pokemon__game--container{
align-self: center;
}
.buttons {
  display: inline;
}
.nes-btn {
  margin: 10px;
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

.nes-progress{
  width: 40%;
}

.won {
  font-size: 25px;
  color: white;
}

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .nes-progress{
  width: 80%;
}
.nes-input{
  width: 100%;
  display: block;
}
}
</style>

<style>
#app > div.pokemon__game > div.v--modal-overlay > div > div.v--modal-box.v--modal{
   border: 4px solid black;
}
</style>