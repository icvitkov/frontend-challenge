<template>
  <div class="pokemon__game" v-if="pokemon">
    <div class="pokemon__game--main default" :class="[pokemonType2, pokemonType]">
      <div class="pokemon__game--container">
        <div class="pokemon__img--container">
          <img :src="pokemon.sprites.front_default" alt v-if="this.correct < 1" />
          <p class="won" v-else>YOU WON!</p>
        </div>
      </div>
      <div class="progressbar__container">
        {{correct}} / 151
        <div class="progressbar__status" :style="{width: percent + '%'}"></div>
      </div>
      <div class="pokemon__game--answer">
        <input v-model="answer" type="text" placeholder="Enter name" />
        <div class="buttons" v-if="this.correct < 1">
          <button @click="checkAnswer">Check</button>
          <button @click="randomPokemon">Next</button>
        </div>
        <div class="buttons" v-else>
          <button @click="restart">Restart</button>
        </div>
        <button @click="openPokedex">Pokedex</button>
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
      let max = 151;
      for (let min = 1; min <= max; min++) {
        pokemonList[min] = {
          id: min
        };
      }
      this.$store.state.pokemonAll = pokemonList;
  
    },

    randomNumber() {
      let min = 1;
      let max = 151;
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
      
        this.randomPokemon();
        this.answer = "";
        this.correct++;
      } else {
        this.randomPokemon();
        this.answer = "";
      }
    },
    calcCorrect() {
      let max = 151;
      this.percent = (this.correct / max) * 100;
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
  display: block;
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
.progressbar__container {
  position: relative;
  width: 40%;
  background: #ffffff3d;
  height: 20px;
  border-radius: 5px;
  color: #ffffff57;
}
.progressbar__status {
  width: 20%;
  background: #ffffb185;
  height: 20px;
  margin-top: -19px;
  z-index: 2;
  border-radius: 5px;
}
::placeholder {
  color: #ffffffb2;
}
.won {
  font-size: 25px;
  color: white;
}

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .progressbar__container{
    width: 80%;
  }
  input{
    padding: 0 10px;
  }
}
</style>
