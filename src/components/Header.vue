<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header class="btn-flotante" >=</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <div class="container">
      <img src='../assets/Logo.png' id="icon" alt="User Icon" style="max-width: 60%; max-height: 60%;" v-on:click="router()"/>
    </div>
          <h4 id="sidebar-no-header-title">UTTv industry</h4>
          <p>
            Creating innovations for the students of the TORREON UNIVERSITY OF TECHNOLOGY, in order to facilitate learning and the search for relevant information.
          </p>
          <hr>
          <nav class="mb-3">
            <p>CATEGORIES</p>
            <b-nav vertical>
              <b-nav-item style="color: #cc0088;" v-on:click="Tic()">TIC</b-nav-item>
              <b-nav-item style="color: #cc0088;" v-on:click="Meca()">MECATRONICA</b-nav-item>
            </b-nav>
            <hr>
            <p>USER</p>
            <b-nav vertical>
              <b-nav-item style="color: #cc0088;" v-on:click="perfil()">PROFILE</b-nav-item>
              <!--  <b-nav-item style="color: #cc0088;" v-on:click="subirVideo()">SUBIR VIDEO</b-nav-item>  -->
              <b-nav-item   style="color: #cc0088;" v-on:click="admin()" v-if="user.tipo == 1 || user.tipo == 2" @click="hide">ADMIN CONF</b-nav-item>
              <b-nav-item  style="color: #cc0088;" v-on:click="logout()" @click="hide">LOGOUT</b-nav-item>
            </b-nav>
          </nav>
          <hr>
          <b-button variant="primary" block @click="hide" style="background-color: #cc0088; text-color:white; border-color:white">Close</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>





<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'header',
  props: {
    msg: String
  },
  data() {
    return{
      user:'',
      error:false,
      carrera:"",
      error_msg:"",
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
  mounted(){
    this.getUser();
  },
  methods:{
    router(){
      this.$router.push('/dashboard')
    },
    logout(){
      localStorage.token = ''
      this.$router.push('/');
    },
    perfil(){
      this.$router.push('/perfil');
    },
    admin(){
      this.$router.push('/admin');
    },
    Meca(){
        this.$router.push('/carrera2');
      },
      Tic(){
        this.$router.push('/carrera');
      },subirVideo(){
        this.$router.push('/VideoNuevo');
      },
    getUser(){
      
      axios
        .get(this.URL+ 'us/Perfil' ,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.user = response.data.Perfil
          })
          .catch( e=> console.log(e))
    }
  }
}
</script>


<style scoped>
.color{
  color: #cc0088;
}


.btn-flotante {
	font-size: 20px; /* Cambiar el tamaño de la tipografia */
	text-transform: uppercase; /* Texto en mayusculas */
	font-weight: bold; /* Fuente en negrita o bold */
	color: #ffffff; /* Color del texto */
	border-radius: 5px; /* Borde del boton */
	letter-spacing: 2px; /* Espacio entre letras */
	background-color: #E91E63; /* Color de fondo */
	padding: 18px 30px; /* Relleno del boton */
	position: fixed;
	bottom: 1000px;
	left: 40px;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 99;
}
.btn-flotante:hover {
	background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		left: 20px;
	}
}


</style>
