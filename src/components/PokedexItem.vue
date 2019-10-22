<template>
    <div class="pokedex-item">
        <div class="pokedex__item--container">
          <div class="pokemon__img">
              <img class="question" v-if="poznati" src="../assets/question.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bla: 'bla',
            poznati: true,
        }
    },

    methods: {
     
    }
}
</script>
<style scoped>
.pokedex__item--container{
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 300px;
}
.pokemon__list{
    background: rgb(216, 69, 69);
}
.pokemon__stats{
    background: rgb(76, 109, 216);
}
.question{
    height: 200px;
}

</style>