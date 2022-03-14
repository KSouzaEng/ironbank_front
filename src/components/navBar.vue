<template>
  <!-- <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav mb-5" role="banner">
  <div class="container bg-success"  >
    <a href="/home"> 
      <img style="width: 25%" src="../../public/segeam-bg-branco.png" alt="">
    </a>
    <p class="text-center text-light">{{thisTitle}}</p>
     <a class="btn btn-success" @click="logout">Sair</a>
  </div>
</header> -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="#FFFF" class="bi bi-bank mx-5" viewBox="0 0 16 16">
      <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
    </svg>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <div class="">
          <a class="btn btn-dark px-5 py-3" @click="logout">Sair</a>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
import Cookie from 'js-cookie';
import axios from 'axios';
import swal from 'sweetalert2'



export default {

  props: {
   thisTitle: {
    type: String,
   }
  },

    methods:{
        home(){
        
          this.$router.push('home');
        },
    logout() {
      const token = Cookie.get('_my_token');
      console.log(token)
          
       axios({
                    url: '/logout',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
                }).then(response => {
                    console.log(response)
                    // if(response.data.success == 'success'){

                      Cookie.remove('_my_token');
                      console.log('deslogado')
                      this.$router.push('/')
                    // }
                }).catch(error => {
                  console.log(error)
                     swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um erro ao tentar sair do sistema!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
                })
    }
    }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase
}

.navbar .nav {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.2rem
}

.navbar-inverse {
  background-color: #c3d3cb
}

.navbar-inverse .navbar-nav>.active>a:hover,
.navbar-inverse .navbar-nav>li>a:hover,
.navbar-inverse .navbar-nav>li>a:focus {
  background-color: #002200
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a:focus {
  background-color: #003300
}

.dropdown-menu {
  background-color: #006B00
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-color: #002200
}

.navbar-inverse {
  background-image: none;
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  background-image: none;
}

.navbar-inverse {
  border-color: #003300
}

.navbar-inverse .navbar-brand {
  color: #FFFFFF
}

.navbar-inverse .navbar-brand:hover {
  color: #FFCC00
}

.navbar-inverse .navbar-nav>li>a {
  color: #FFFFFF
}

.navbar-inverse .navbar-nav>li>a:hover,
.navbar-inverse .navbar-nav>li>a:focus {
  color: #FFCC00
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a:focus {
  color: #FFCC00
}

.navbar-inverse .navbar-nav>.active>a:hover,
.navbar-inverse .navbar-nav>.active>a:focus {
  color: #FFCC00
}

.dropdown-menu>li>a {
  color: #FFFFFF
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
  color: #FFCC00
}

.navbar-inverse .navbar-nav>.dropdown>a .caret {
  border-top-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {
  border-top-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a .caret {
  border-bottom-color: #FFFFFF
}

.navbar-inverse .navbar-nav>.dropdown>a:hover .caret {
  border-bottom-color: #FFFFFF
}
</style>