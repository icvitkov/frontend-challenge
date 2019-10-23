<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rules">Rules</router-link> |
      <a href="http://github.com/icvitkov" target="_blank">GitHub Profile</a> |
      <a href="http://icvitkov.github.io" target="_blank">CV</a> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333536e7;
}

#nav {
  padding: 30px;
   text-align: end;
}

#nav a {
  font-weight: bold;
  color:#333536e7;
 
}

#nav a.router-link-exact-active {
  color: #d44d44;
}
</style>
