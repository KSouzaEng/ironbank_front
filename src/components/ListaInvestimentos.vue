<template>
  <div>
     <div class="container">
        <h3 class="p-3 text-center">Investimentos feitos por você</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Valor do Deposito</th>
                    <th>Data do deposito</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="investimento in investimentos.investimentos" :key="investimento.id">
                    <td>{{investimento.valor_investimento}}</td>
                    <td> {{investimento.data_investimento}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
  </div>
</template>

<script>
// import axios from 'axios'
// import cookie  from 'js-cookie'
import { mapActions,mapState } from "vuex";

export default {

    computed:{
    ...mapState("investimento", {
      investimentos: "investimentos",
    }),

    table(){
     return this.investimentos.investimentos
    }

    },
    data(){
        return{
            tableData:{}
        }
    },
    methods: {
 ...mapActions({
      loadInvestiments: "investimento/loadInvestiments",
    }),
    },
    created(){
        this.loadInvestiments()
        // console.log(this.investimentos)
        
    }
}
</script>

<style>
    .container{
        /* display: flex;
        justify-content:center;
        align-items:center; */
        padding-bottom: 130px;
        width:100%;
        height: 20vh;
    }
</style>