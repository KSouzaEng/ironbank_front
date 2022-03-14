<template>
  <div >
   <NavBar ></NavBar>
 
  <div class="container ">
      <div class="mb-5">
       <lista-investimentos></lista-investimentos>
   </div>
    <div class="row ">
      <div class="card shadow col-md-6 mx-4 mt-5 rounded-sm">
        <h5 class="card-title mt-4">
            <strong>Fazer investimento</strong>
        </h5>
        <div class="card-body">
          <div class="row">
               <!-- <div class="col-md-6">
             <label for="data_enevestimento">Código do investidor</label>
             <input type="number" name="user_id" id="user_id"  class="form-control input" v-model="user_id" disabled>
          </div>
          <div class="col-md-6">
             <label for="data_enevestimento">Nome do investidor</label>
             <input type="text" name="nome_investidor" id="nome_investidor"  class="form-control input" v-model="nome_investidor" disabled> 
          </div> -->
          <div class="col-md-6">
             <label for="data_enevestimento" class="float-start mb-2"><strong>Data do investimento</strong></label>
             <input type="date" name="data_enevestimento" id="data_enevestimento"  class="form-control input " v-model="data_investimento">
          </div>
          <div class="col-md-6">
             <label for="data_enevestimento"  class="float-start mb-2"><strong>Valor</strong></label>
             <input type="number" name="data_enevestimento" id="data_enevestimento"  class="form-control input" v-model="valor_investimento">
          </div>
            <div class="d-flex flex-row-reverse my-3">
              <button  type="submit" class="btn btn-dark btn-lg" @click="investir">Aplicar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar  from '../components/navBar'
import {  mapActions, mapState } from "vuex";
import axios from 'axios'
import Cookie from 'js-cookie'
import ListaInvestimentos from '../components/ListaInvestimentos.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ListaInvestimentos
  },
   computed: {
    ...mapState('investimentos', {
        isSaved: 'isSaved'
    }),
  },
  data(){
    return{
     
        user_id:0,
        nome_investidor:'',
        data_investimento: '',
        valor_investimento: 0
      
    }
  },
  methods:{
      ...mapActions('investimento',{
        createInvestment: 'createInvestment',
     
    }),
     async  investir(){
      
          const token = Cookie.get('_my_token');
              await   axios({
                    url: '/me',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
                }).then(response => {
                 
                 this.user_id = response.data.user.id
                 this.nome_investidor = response.data.user.name
                 console.log(this.user_id,this.nome_investidor,this.data_investimento,this.valor_investimento)
                 this.createInvestment({

                   'user_id' : this.user_id,
                   'nome_investidor': this.nome_investidor,
                   'data_investimento': this.data_investimento,
                    'valor_investimento': this.valor_investimento,
                 })
                })
                // console.log(this.form.data_investimento,this.form.valor_investimento)
    }
  }
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