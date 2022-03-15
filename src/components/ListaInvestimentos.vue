<template>
  <div>
     <div class="d-inline-flex" style="width:78%">
         <div class="card shadow-sm col-md-12 mt-5">
         <h5 class="card-header p-2 ">Investimentos</h5>
         <div class="card-body">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accoridon-item" v-for="(item,index) in investimentos.investimentos" :key="index">
                <h2 class="accordion-header" :id="'flush-heading'+index">
                    <button
                    class="accordion-button collapsed"
                        @click="verificar(item.id)"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#flush-collapse'+index"
                        aria-expanded="false"
                        :aria-controls="'flush-collapse-'+index">
                            <h5 class="float-start fs-5">Data do investimento:  {{item.data_investimento}}</h5>
                    </button>
                </h2>
           
                <div
                    :id="'flush-collapse'+index"
                    class="accordion-collapse collapse"
                    :aria-labelledby="'flush-heading'+index"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex justify-content-between"> 
                        
                       <div class="row">
                           <div class="col-md-4">
                                <h5 class="float-start ">Valor do investimento:  R$ {{item.valor_investimento}}</h5>
                           </div>
                           <div class="col-md-4">
                                <h5 class="float-start ">Ganhos :  R$ {{investimento}}</h5>
                        
                           </div>
                           <div class="col-md-4">
                               <h5 class="float-start ">Valor apos retirada :  R$ {{item.valor_investimento_ganho_retirada}}</h5>
                           </div>
                       </div>
                    </div>
                </div>
                <hr>
                </div>
            </div>
         </div>
    </div>    
     </div>
        
  </div>
</template>

<script>
import axios from 'axios'
import Cookie  from 'js-cookie'
import { mapActions,mapState } from "vuex";

export default {

    computed:{
    ...mapState("investimento", {
       investimentos: "investimentos",
        investimento: "investimento",
    }),

    table(){
     return this.investimentos.investimentos
    }

    },
    data(){
        return{
            tableData:{},
            user_id:0,
            nome_investidor:'',
            data_investimento:'',
            valor_investimento:0
        }
    },
    methods: {
 ...mapActions({
      loadInvestiments: "investimento/loadInvestiments",
      Calcula : "investimento/Calcula"
    }),
    verificar(id){

       this.Calcula(id)
    },
     async userLoged(){
        const token = Cookie.get('_my_token');
              await   axios({
                    url: '/me',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
                }).then(response => {
                 
                 this.user_id = response.data.user.id
                  this.loadInvestiments(this.user_id)
                })
      }
    },
    created(){
        this.userLoged()
     
        // console.log(this.investimentos)
        
    }
}
</script>

<style>
    .container{
        /* display: flex;
        justify-content:center;
        align-items:center; */
        padding-bottom: 586px;
        width:100%;
        height: 20vh;
    }
</style>