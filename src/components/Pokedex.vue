<template>
    <div class="pokedex">
        <div class="pokedex__container">
          <div class="pokemon__list">
               <pokedexItem></pokedexItem>
          </div>
          <div class="pokemon__stats">Pokemon stats</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bla: 'bla',
        }
    }
}
</script>
<style scoped>
.pokedex__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.pokemon__list{
    background: rgb(216, 69, 69);
}
.pokemon__stats{
    background: rgb(76, 109, 216);
}
</style>