<template>    
   <div>
       <Header/>
        <ModalHelp/>
        <br>
        <br>
     <div class="container" v-animate-css="'rubberBand'">
  <h2 align="left">Subir tus propios Videos.</h2>
  <form v-on:submit.prevent="nuevoVideo">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='videoNuevo.nombre'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='videoNuevo.descripcion'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Url</label>
    <input type="text" class="form-control" id="url" aria-describedby="url" v-model='videoNuevo.url'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Imagen</label>
    <input type="text" class="form-control" id="image" aria-describedby="image" v-model='videoNuevo.image'>
  </div>
    <div class="mb-3">    
      <label for="exampleInputEmail1" class="form-label">Categoria</label>
      <select class="form-select" aria-label="Default select example" v-model="videoNuevo.categoria">
        <option selected >Selecciona una categoria</option>
        <option :value="categoria.nombre" v-for="categoria in categorias" :key="categoria.id" >{{categoria.nombre}}</option>
      </select>
    </div>

<div class="mb-3">    
      <label for="exampleInputEmail1" class="form-label">Carrera</label>
      <select class="form-select" aria-label="Default select example" v-model="videoNuevo.tipo">
        <option selected >Carreras</option>
        <option value="TIC"  >TIC</option>
        <option value="MECATRONICA">MECATRONICA</option>
      </select>
    </div>


  <button type="submit" class="btn btn-success" style="background-color: #cc0088; text-color:white;">Guardar</button> &nbsp;&nbsp;
  <button type="submit" class="btn btn-success" style="background-color: #cc0088; text-color:white;" v-on:click="cancelar()">Cancelar</button>
</form>
</div>
     <div class="alert alert-danger" role="alert" v-if="error">
            {{error_msg}}
    </div>
    <br>
    <br>
    <Footer/>
</div>


</template>

<script>
import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalHelp from '@/components/modalHelp.vue'
export default {
    name: 'subirVideo',
    components: {
        Header,
        Footer,
        ModalHelp
    },
  data() {
    return{
      todos:null,
      botonText:'Agregar nuevo registro',
      video:null,
      cambio:false,
      categorias:"",
      Carreras:"",
      nuevo:false,
      error:false,
      error_msg:"",
      videoNuevo:{descripcion:"",nombre:"",url:"",categoria:"",tipo:"",image:""},
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
  async mounted() {
    if (localStorage.token == ''){
        this.$router.push('/');
      }
    this.getUserValidated();
    this.getCat()
    this.getCar()
  },
  methods:{
    nuevoVideo(){
      axios
      .post(this.URL+'vi/nuevo',this.videoNuevo,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
        .then(response => {
          if(response.data == null){
            console.log('nada');
          }
          this.nuevo = false
        })
        .catch(e => console.log(e))
        this.sleep(5000);
        this.$router.push('/dashboard');
    },
    cancelar(){
      this.$router.push('/dashboard');
    },

    getCat(){
          axios
        .get(this.URL+'cat/index')
          .then(response => {
            this.categorias = response.data
            
          })
          .catch( e=> console.log(e))
    },getCar(){
      axios
        .get(this.URL+'car/index')
          .then(response => {
            this.Carreras = response.data
            
          })
          .catch( e=> console.log(e))
    },getUserValidated(){
              axios
                .get(process.env.VUE_APP_API_HOST+ 'us/Perfil' ,{
                headers: {
                      'Authorization': `Bearer ${localStorage.token}`
                        }
                })
                  .then(response => {
                    this.user = response.data.Perfil
                    this.returnToValidated(response.data.Perfil);
                  })
                  .catch( e=> console.log(e))
            }, 
            returnToValidated(user){
                if (user.m2 == 0) {
                  this.$router.push('codigo');
                }else if (user.m2 == 1 && user.m3 == 1) {
                  console.log('validado');
                }else{
                  this.$router.push('/socket');
                }
            },
    sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
  });
}

  }
  
}
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

table {
  text-align: left;
  line-height: 35px;
  border-collapse: separate;
  border-spacing: 0;
  border: 2px solid #cc0088;
  width: 1100px;
  margin: 50px auto;
  border-radius: .25rem;
}

thead tr:first-child {
  background: #cc0088;
  color: #fff;
  border: none;
}

th:first-child,
td:first-child {
  padding: 0 15px 0 20px;
}

th {
  font-weight: 500;
}

thead tr:last-child th {
  border-bottom: 3px solid #ddd;
}

tbody tr:hover {
  background-color: #f2f2f2;
  cursor: default;
}

tbody tr:last-child td {
  border: none;
}

tbody td {
  border-bottom: 1px solid #ddd;
}

td:last-child {
  text-align: right;
  padding-right: 10px;
}

.button {
  color: #aaa;
  cursor: pointer;
  vertical-align: middle;
  margin-top: -4px;
}

.edit:hover {
  color: #0a79df;
}

.delete:hover {
  color: #dc2a2a;
}
</style>




