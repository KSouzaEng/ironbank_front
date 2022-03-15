<template>
  <div >
 
  <div class="d-inline-flex" style="width:82%">
    <div class="row  justify-content-center ">
      <div class="card shadow col-sm-6 mx-2 mt-5 rounded-sm mb-5">
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
          <div class="card shadow col-md-5 mx-2 mt-5 rounded-sm mb-5">
            <h5 class="card-title mt-4">
              <strong>Fazer Retirada</strong>
             </h5>
                 <div class="card-body">
          <div class="row">
          <div class="col-md-12">
             <label for="valor_retirada"  class="float-start mb-2"><strong>Valor da retirada</strong></label>
             <input type="number" name="valor_retirada" id="valor_retirada"  class="form-control input" v-model="valor_retirada">
              <h5 v-if="invest == 0" class="text-danger mt-2">Sem saldo para retiradas</h5>
   
          </div>
            <div class="d-flex flex-row-reverse my-3 " >
              <button  type="submit" class="btn btn-dark btn-lg" @click="verificaInvestimento()">Retirar</button>
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
import {  mapActions, mapState } from "vuex";
import axios from 'axios'
import Cookie from 'js-cookie'
import swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {

  },
   computed: {
    ...mapState('investimento', {
        isSaved: 'isSaved',
        investimentos: "investimentos",
    }),
    invest(){
     return this.investimentos.investimentos
    }
  },
  data(){
    return{
     
        user_id:0,
        nome_investidor:'',
        data_investimento: '',
        valor_investimento: 0,
        valor_retirada: 0,
        retirada: true,
        error:''
      
    }
  },
  methods:{
      ...mapActions('investimento',{
        createInvestment: 'createInvestment',
         loadInvestiments: 'loadInvestiments',
         Retirada: 'Retirada'
     
    }),
     async  investir(){
      
          const token = Cookie.get('_my_token');
        
              await   axios({
                    url: '/me',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
                }).then(response => {
                 
                 this.error  = response.data.error
                 this.user_id = response.data.user.id
                 this.nome_investidor = response.data.user.name
                 console.log(this.user_id,this.nome_investidor,this.data_investimento,this.valor_investimento)
                 if(this.data_investimento != '' && this.valor_investimento){
                 this.createInvestment({
                   'user_id' : this.user_id,
                   'nome_investidor': this.nome_investidor,
                   'data_investimento': this.data_investimento,
                    'valor_investimento': this.valor_investimento,
                 })
                  this.loadInvestiments(this.user_id)
                swal.fire({
                   icon: 'success',
                   title:'Investimento realizado',
                  })
                 }else{
                swal.fire({
                   icon: 'error',
                   title:'Preencha o(os) campo(os) em branco',
                })
                 }
               
                            
                })
                // console.log(this.form.data_investimento,this.form.valor_investimento)
    },
    async  verificaInvestimento(){
      
          const token = Cookie.get('_my_token');
        
              await   axios({
                    url: '/me',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
                }).then(response => {
                    
                var data = new Date();
                
                var dia = String(data.getDate()).padStart(2, '0');
                // var mes = String(data.getMonth() + 1).padStart(2, '0');
                // var ano = data.getFullYear();
                // var dataAtual = dia + '/' + mes + '/' + ano;
                if(this.valor_retirada != ''){
                console.log(response);
                    let id = response.data.user.id
                    // this.loadInvestiments(id)
                    for(let i=0;i<this.invest.length;i++){
                        let dados = this.invest[i]
                        let date =  dados.data_investimento
                        let sliced = date.split('-')
                        if(dia >= sliced[2]){
                            console.log('retirada pode ser feita',id)
                            this.Retirada({
                                'valor_retirada': this.valor_retirada,
                                'id': id
                            }) 
                            swal.fire({
                              icon: 'success',
                              title:'Operação Concluída',
                            }).
                             this.retirada = true
                        }else{
                            this.retirada = false
                        }
                    }
                  }else{
                  swal.fire({
                   icon: 'error',
                   title:'Preencha o(os) campo(os) em branco',
                })
                  }
                })
                // console.log(this.form.data_investimento,this.form.valor_investimento)
     },

    //  created(){
    //      this.verificaInvestimento()
    //  }
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


// https://github.com/Coderockr/backend-test