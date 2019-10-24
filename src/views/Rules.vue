<template>
  <div class="rules">
    <h1>Rules</h1>
    <p>
      The guessing game consists of a random pokemon image, the guess submission form, the pokedex button, and a progress bar displaying the number of guessed pokemon to total pokemon in the game.
      At the start of each round a random pokemon is fetched with an API call (provided for free by [PokeAPI](https://pokeapi.co/)). The pokemon's sprite (image) is displayed to the user and the user is prompted to guess the pokemon's name. A correct guess stores the pokemon to the user's pokedex, and an incorrect guess starts the game again by fetching a new random pokemon.
      The game should follow these rules:
    </p>
    <ol>
      <li>Only 1st generation pokemon must be used in the game (the first 151 pokemon)</li>
      <li>Pokemon stored in the pokedex must not appear in the guessing game again (if the user guessed the pokemon correctly, that same pokemon won't appear in the game again)</li>
      <li>Every time a pokemon is guessed correctly the pokedex' progress bar is updated</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Rules"
};
</script>

<style scoped>
.rules {
  padding: 0 15px;
  text-align: left;
}
</style>
