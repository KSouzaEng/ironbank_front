<template>
  <div>
    <div class="container">
        <div class="row d-flex justify-content-center ini">
              <div class="card shadow col-md-5 rounded" >
                 <div class="card-body">
                       <h5 class="card-title text-center mb-5"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                         <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
                        </svg></h5>

                        <form  @submit.prevent="submit">
                            <div class="form-group">
                                <label for="email" class="float-start mb-3">E-mail</label>
                                <input type="email" name="email" id="email"  class="form-control input" v-model="form.email">
                            </div>
                            <div class="form-group">
                                <label for="email" class="float-start mb-3 mt-3">Senha</label>
                                <input type="password" name="password" id="password" class="form-control input"  v-model="form.password">
                            </div>
                            <button type="submit" class="btn btn-dark w-100 mt-3 mb-5">Entrar</button>
                        </form>
                 </div>
              </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cookie from 'js-cookie'

export default {
    data(){
        return{
          form:{
              email:'',
              password:'',
          }
        }
    },
    methods:{
        async submit(){
           
           axios.post('/login',this.form).then(response => {
               cookie.set('_my_token',response.data.access_token)
                if(response.data.access_token != null){

                            console.log("ENTROU");
                            this.$router.push('home');
                }
           })
        }
    }
}
</script>

<style>
.ini{
      height: 100vh;
      align-items: center;
}
.container {
  position: relative;
  height: 20px;
  width: 100%;

}
.input{

height: 60px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 8px;
}
.btn{

height: 60px;
}
</style>