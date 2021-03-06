import axios from 'axios'

export default {

    namespaced: true,

    state: {

        investimento: {},
        investimentos: [],
        isSaved: false,
    },
    getters: {
        investimentos (state){
            return state.investimentos;
          },
          investimento (state){
            return state.investimento;
          }
    },
    mutations: {
        SET_INVESTIMENTO_ID(state, id) {
            state.investimentoID = id
          },
          SET_INVESTIMENTO(state, investimento) {
            state.investimento = investimento
          },
          SET_INVESTIMENTOS(state, investimentos) {
            state.investimentos = investimentos
          },
          SET_IS_SAVED(state, response) {
            console.log('set_is_saved', response)
            state.isSaved = response
          },
    },
    actions: {
        async createInvestment({commit}, information) {

            try {
              let response = await axios.post('/investir', {
    
                user_id: information.user_id,
                nome_investidor: information.nome_investidor,
                data_investimento: information.data_investimento,
                valor_investimento: information.valor_investimento,
              })
              console.log('response registrer', response, 'end response registrer')
           
    
              commit('SET_IS_SAVED', true)
              
            } catch (error) {
              console.log('error', error)
              commit('SET_IS_SAVED', false)
            }
          },

          async loadInvestiments({commit},id) {

            let response = await axios.get(`investimentos/${id}`)
           console.log('investimentos', response.data.investimentos)
            commit('SET_INVESTIMENTOS', response.data)
            
          },
          async Calcula({commit}, id) {

            try {
              console.log('Calcula')
              let response = await axios.get(`calcula/${id}`)
              console.log('investimento', response.data.investimento)
              commit('SET_INVESTIMENTO', response.data.investimento)
            } catch (error) {
              console.log('error', error)
              commit('SET_IS_SAVED', false)
            }
    
          },
          async Retirada({commit},information) {

            try {
              // console.log('Retiradaa---------------',information)
              let response = await axios.post('/retirada',{
                valor_retirada: information.valor_retirada,
                id: information.id,
              })
              console.log('Retiradaa', response.data.investimento)
              commit('SET_INVESTIMENTO', response.data.investimento)
            } catch (error) {
              console.log('error', error)
              commit('SET_IS_SAVED', false)
            }
    
          }
        }
}