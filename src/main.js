import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Pokedex from './components/Pokedex'
import PokedexItem from './components/PokedexItem'

Vue.config.productionTip = false;

Vue.component('pokedex', Pokedex);
Vue.component('pokedexItem', PokedexItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
