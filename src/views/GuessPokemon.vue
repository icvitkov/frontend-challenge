<template>
  <div class="pokemon__game" v-if="pokemon">
    <p>Nasumični pokemon: {{pokemon.name}}</p>
    <div class="pokemon__img">
      <img :src="pokemon.sprites.front_default" alt />
    </div>
    <input v-model="answer" type="text" />
    <br>
    <button @click="checkAnswer">Provjeri</button>
    <button @click="randomPokemon">Novi pokemon</button>
     <p>Odgovor: {{status}}</p>
  </div>
</template>

<script>
export default {
  name: "GuessPokemon",

  data() {
    return {
      number: "",
      pokemon: "",
      answer: "",
      status: "",
    };
  },

  mounted() {
    this.randomPokemon();
  },
  methods: {
    randomNumber() {
      let min = 1;
      let max = 10;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      this.number = random;
      return random;
    },

    async randomPokemon() {
      let id = this.randomNumber();
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const pokemon = await response.json();
      this.pokemon = pokemon;
    },

    checkAnswer() {
      if (this.answer === this.pokemon.name) {
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
</style>
