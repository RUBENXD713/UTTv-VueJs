<template>    
   <div>
     <div>
       <h2>Categorias</h2>
       <button v-animate-css.click="'tada'" v-on:click="botonNuevo()" type="button" class="btn btn-success">{{botonText}}</button>
     </div>
     <div class="container" v-if="nuevo">
  <h2>Nuevo</h2>
  <form v-on:submit.prevent="nuevaCategoria">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='categoriaNueva.nombre'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='categoriaNueva.descripcion'>
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
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="categorias in todos" :key="categorias.id" v-animate-css.hover="'headShake'" v-animate-css.click="'fadeOutLeft'">
              <td>{{categorias.id}}</td>
              <td>{{categorias.nombre}}</td>
              <td>{{categorias.descripcion}}</td>
              <td><i class="material-icons button edit" v-on:click="getOne(categorias.id)">Actualizar</i></td>
              <td><i class="material-icons button delete" v-on:click="deleteOne(categorias.id)">Eliminar</i></td>
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
    <input type="text" class="form-control" id="id" aria-describedby="id" v-model='categoria.id'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='categoria.nombre'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='categoria.descripcion'>
  </div>
  <button type="submit" class="btn" style="background-color: #cc0088; text-color:white;">Modificar</button>
</form>
</div>




    </div>


</template>

<script>
import axios from "axios";
export default {
  data() {
    return{
      todos:null,
      categoria:null,
      cambio:false,
      nuevo:false,
      botonText:"Agregar nuevo registro",
      error:false,
      error_msg:"",
      categoriaNueva:{nombre:"",descripcion:""},
      URL:process.env.VUE_APP_API_HOST,
      response:null,
    }
  }, 
  mounted() {
    this.getTodos()
  },
  methods:{
    botonNuevo(){
      if (this.nuevo){
          this.nuevo = false
          this.botonText = 'Agregar nuevo registro'
          this.categoriaNueva = {descripcion:"",nombre:""}
      }else{
          this.nuevo = true
          this.botonText = 'cancelar'
      }
     
    },
    nuevaCategoria(){
      axios
      .post(this.URL+'cat/new',this.categoriaNueva,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
        .then(response => {
          this.response = response
          this.nuevo = false
          this.error = false
          this.getTodos()
        })
        .catch(e => console.log(e))

        this.botonNuevo()
    },

    getTodos(){
      axios
        .get(this.URL+'cat/index')
          .then(response => {
            this.todos = response.data
          })
          .catch( e=> console.log(e))
    },


    getOne($num){
      axios
        .get(this.URL+'cat/index/?id='+$num)
          .then(response => {
            this.categoria = response.data
            this.cambio = true
          })
          .catch( e=> console.log(e))
    },

    deleteOne($num){
      axios
        .delete(this.URL+'cat/drop?id='+$num,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.response = response
            this.getTodos()
          })
          .catch( e=> console.log(e))
    },

    update(){
      axios
      .put(this.URL+'cat/update',this.categoria,{
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
  width: 1000px;
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




