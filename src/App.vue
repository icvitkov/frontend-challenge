<template>
  <div id="app">
    <div id="nav" class="default" :class="[$store.state.pokemonType1, $store.state.pokemonType2]">
      <router-link to="/">Home</router-link>|
      <router-link to="/rules">Rules</router-link>|
      <a href="http://github.com/icvitkov" target="_blank">GitHub</a> |
      <a href="http://icvitkov.github.io" target="_blank">CV</a>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Press Start 2P", regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333536e7;
  font-size: 10px;
}

#nav {
  padding: 30px;
  text-align: end;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #333536e7;
}

#nav a.router-link-exact-active {
  color: #d44d44;
}
</style>
