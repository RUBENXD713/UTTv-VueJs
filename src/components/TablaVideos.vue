<template>    
   <div>
     <div>
       <h2>Agregar video</h2>
       <button v-animate-css.click="'tada'" v-on:click="botonNuevo()" type="button" class="btn btn-success" >{{botonText}}</button>
     </div>
     <div class="container" v-if="nuevo" v-animate-css="'rubberBand'">
  <h2>Nuevo</h2>
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


  <button type="submit" class="btn btn-success" style="background-color: #cc0088; text-color:white;">Guardar</button>
</form>
</div>
     <div class="alert alert-danger" role="alert" v-if="error">
            {{error_msg}}
    </div>
     <div>
      <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Url</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Tipo</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="videos in todos" :key="videos.id" v-animate-css.hover="'headShake'" v-animate-css.click="'fadeOutLeft'">
              <td>{{videos.id}}</td>
              <td>{{videos.nombre}}</td>
              <td>{{videos.descripcion}}</td>
              <td>{{videos.url}}</td>
              <td>{{videos.image}}</td>
              <td>{{videos.categoria}}</td>
              <td>{{videos.tipo}}</td>
              <td><i class="material-icons button edit" v-on:click="getOne(videos.id)">Actualizar</i></td>
              <td><i class="material-icons button delete" v-on:click="deleteOne(videos.id)">Eliminar</i></td>
            </tr>
          </tbody>
      </table>
     </div>
<br>
<br>
<br>


<div class="container" v-if="cambio" v-animate-css="'zoomIn'">
  <h2>Editar</h2>
  <form v-on:submit.prevent="update">
    
  <div class="mb-3" hidden>
    <label for="exampleInputEmail1" class="form-label">id</label>
    <input type="text" class="form-control" id="id" aria-describedby="id" v-model='video.id'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='video.nombre'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='video.descripcion'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Url</label>
    <input type="text" class="form-control" id="url" aria-describedby="url" v-model='video.url'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Imagen</label>
    <input type="text" class="form-control" id="image" aria-describedby="image" v-model='video.image'>
  </div>
  <div class="mb-3">    
      <label for="exampleInputEmail1" class="form-label">Categoria</label>
      <select class="form-select" aria-label="Default select example" v-model="video.categoria">
        <option selected >categoria</option>
        <option :value="categoria.nombre" v-for="categoria in categorias" :key="categoria.id" >{{categoria.nombre}}</option>
      </select>
    </div>

<div class="mb-3">    
      <label for="exampleInputEmail1" class="form-label">Carrera</label>
      <select class="form-select" aria-label="Default select example" v-model="video.tipo">
        <option selected >Carreras</option>
        <option value="TIC"  >TIC</option>
        <option value="MECATRONICA">MECATRONICA</option>
      </select>
    </div>

  <button type="submit" class="btn" style="background-color: #cc0088; text-color:white;">Modificar</button>
</form>
</div>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


    </div>


</template>

<script>
import axios from "axios";
export default {
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
    this.getTodos()
    this.getCat()
    this.getCar()
  },
  methods:{
    botonNuevo(){
      if (this.nuevo){
          this.nuevo = false
          this.botonText = 'Agregar nuevo registro'
          this.videoNuevo = {descripcion:"",nombre:"",url:"",categoria:"",tipo:"",image:""}
      }else{
          this.nuevo = true
          this.botonText = 'cancelar'
      }
     
    },print(){
      console.log(this.videoNuevo)
    },

    nuevoVideo(){
      axios
      .post(this.URL+'vi/nuevo',this.videoNuevo,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
        .then(response => {
          console.log(response.data)
          this.nuevo = false
          this.getTodos()
        })
        .catch(e => console.log(e))

        this.botonNuevo()
    },


    getTodos(){
      axios
        .get(this.URL+'vi/index')
          .then(response => {
            this.todos = response.data
          })
          .catch( e=> console.log(e))
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
    },


    getOne($num){
      axios
        .get(this.URL+'vi/index/?id='+$num)
          .then(response => {
            this.video = response.data
            this.cambio = true
          })
          .catch( e=> console.log(e))
    },
    getuno($num){
      axios
        .get(this.URL+'vi/index/?id='+$num)
          .then(response => {
            this.video = response.data
          })
          .catch( e=> console.log(e))
    },


    deleteOne($num){
      axios
        .delete(this.URL+'vi/eliminar?id='+$num,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            console.log(response.data)
            this.sleep(2000);
            this.getTodos()
          })
          .catch( e=> console.log(e))
    },


    update(){
      axios
      .put(this.URL+'vi/actualizar',this.video,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
                .then(data=>{
                    if(data.data != "error"){
                        console.log("datos actualizados");
                        this.cambio =false;
                        this.erro=false;
                        this.getTodos();
                    }else{
                        this.error = true;
                        this.error_msg = "los datos no se actualizaron";
                    }
                })
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




