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
  </div>
</template>

<script>
export default {
  name: "GuessPokemon",

  data() {
    return {
      number: 0,
      pokemon: null,
      pokemonType: null,
      pokemonType2: null,
      answer: "",
      status: ""
    };
  },

  mounted() {
    this.randomPokemon();
    this.createPokemonList(151);
  },
  methods: {
    createPokemonList(max) {
      let pokemonList = {};
      for (let min = 1; min <= max; min++) {
        pokemonList[min] = {
          id: min
        };
      }
      this.$store.state.pokemonAll = pokemonList;
     console.log("Pokemon broj: ", this.$store.state.pokemonAll[this.number].id);
    },

    randomNumber() {
      let min = 1;
      let max = 151;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      this.number = random;
      return random;
    },

    async randomPokemon() {
      let id = this.randomNumber();
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const pokemon = await response.json();
      this.pokemon = pokemon;
      this.pokemonType = pokemon.types[0].type.name;
      if (pokemon.types[1]) {
        this.pokemonType2 = pokemon.types[1].type.name;
      } else{
        this.pokemonType2= null;
      }
    },

    checkAnswer() {
      if (this.answer.toLowerCase() === this.pokemon.name.toLowerCase()) {
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

.pokemon__img--container{
  display: grid;
    width: 200px;
    height: 200px;
    padding: 10px;
    justify-items: center;
    margin: auto;
    border-radius: 50%;
    align-content: center;
    position: relative;
}

.poison{
   background: repeating-linear-gradient(rgb(95, 5, 65), rgb(87, 27, 182));
}
.ground{
   background: repeating-linear-gradient(rgb(236, 130, 77), rgb(94, 63, 43));
}
.electric{
   background: repeating-linear-gradient(rgb(230, 255, 1), rgb(41, 12, 145), rgb(16, 2, 99));
}
/*   background: repeating-linear-gradient(rgb(0, 217, 255), rgb(255, 0, 140)); */
.psychic{
  background: repeating-linear-gradient(rgba(15, 4, 66, 0.788), rgb(255, 1, 192));
}
.bug{
   background: repeating-linear-gradient(rgb(202, 64, 0), rgb(70, 148, 55));
}
.ice{
   background: repeating-linear-gradient( rgb(255, 255, 255), rgb(70, 242, 248));
}
.water {
   background: repeating-linear-gradient( rgb(0, 132, 255), rgb(8, 221, 186));
}
.grass {
   background: repeating-linear-gradient( rgb(7, 80, 80), rgb(0, 202, 168));
}
.fire {
  background: repeating-linear-gradient( rgb(255, 0, 0), rgb(248, 216, 70));
}
.normal{
   background: repeating-linear-gradient(rgb(228, 136, 197),  rgb(81, 179, 236));
}
.fighting{
   background: repeating-linear-gradient(rgb(2, 85, 105),  rgb(45, 21, 110));
}
.fairy{
   background: repeating-linear-gradient(rgb(252, 215, 172),  rgb(186, 111, 236));
}

img{
  height: 200px;
  width: auto;
}
</style>
