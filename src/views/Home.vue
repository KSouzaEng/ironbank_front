<template>
  <div class="" >
   <NavBar ></NavBar>
    
    <div class="mb-5 container">
       <lista-investimentos></lista-investimentos>
    </div>
    <div class="mb-4 my-5 container">
      <formulario></formulario>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar  from '../components/navBar'
import ListaInvestimentos from '../components/ListaInvestimentos.vue'
import Formulario from '../components/Formulario.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ListaInvestimentos,
    Formulario
  },
  
}
</script>
<style scoped>
.input{

height: 50px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 8px;
}
</style>


// https://github.com/Coderockr/backend-test