<template>    
   <div>
     <div>
       <h2>Users</h2>
       <button v-on:click="botonNuevo()"  v-animate-css.click="'tada'" type="button" class="btn btn-success">{{botonText}}</button>
     </div>
     <div class="container" v-if="nuevo">
  <h2>Nuevo Usuario</h2>
  <form v-on:submit.prevent="nuevoUsuario">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='usuarioNuevo.name'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='usuarioNuevo.email'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='usuarioNuevo.password'>
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
              <th>Email</th>
              <th>IP</th>
              <th>Tipo</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="usuarios in todos" :key="usuarios.id" v-animate-css.hover="'headShake'" v-animate-css.click="'fadeOutLeft'">
              <td>{{usuarios.id}}</td>
              <td>{{usuarios.name}}</td>
              <td>{{usuarios.email}}</td>
              <td>{{usuarios.ip}}</td>
              <td v-if="usuarios.tipo == 2">ADMIN</td>
              <td v-if="usuarios.tipo == 1">SUPER</td>
              <td v-if="usuarios.tipo == 0">COMUN</td>
              <td><i class="material-icons button edit" v-on:click="getOne(usuarios.id)">Actualizar</i></td>
              <td><i class="material-icons button delete" v-on:click="deleteOne(usuarios.id)">Eliminar</i></td>
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
    <input type="text" class="form-control" id="id" aria-describedby="id" v-model='usuario.id'>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombre" v-model='usuario.name'>
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='usuario.email'>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">IP</label>
    <input type="text" class="form-control" id="descripcion" aria-describedby="descripcion" v-model='usuario.ip'>
  </div>
  <div class="mb-3">    
      <label for="exampleInputEmail1" class="form-label">Tipo</label>
      <select class="form-select" aria-label="Default select example" v-model="usuario.tipo">
        <option value="2"  >ADMIN</option>
        <option value="1"  >SUPER</option>
        <option value="0">COMUN</option>
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
      botonText:'Agregar nuevo Usuario',
      usuario:null,
      cambio:false,
      nuevo:false,
      error:false,
      error_msg:"",
      usuarioNuevo:{email:"",password:"",name:""},
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
  mounted() {
    this.getTodos()
  },
  methods:{
    botonNuevo(){
      if (this.nuevo){
          this.nuevo = false
          this.botonText = 'Agregar nuevo Usuario'
          this.usuarioNuevo={email:"",password:"",name:""}
      }else{
          this.nuevo = true
          this.botonText = 'cancelar'
      }
     
    },

    nuevoUsuario(){
      axios
      .post(this.URL+'us/Registro',this.usuarioNuevo,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
        .then(response => {
          console.log(response.data.name)
          this.nuevo = false
          this.getTodos()
        })
        .catch(e => console.log(e))

        this.botonNuevo()
    },


    getTodos(){
      axios
        .get(this.URL+'us/index',{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.todos = response.data.Perfil
            console.log(this.todos);
          })
          .catch( e=> console.log(e))
    },


    getOne($num){
      axios
        .get(this.URL+'us/getOne/?id='+$num,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.usuario = response.data[0]
            this.cambio = true
          })
          .catch( e=> console.log(e))
    },

    deleteOne($num){
      axios
        .delete(this.URL+'us/eliminar?id='+$num,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            console.log(response.data)
            this.getTodos()
          })
          .catch( e=> console.log(e))
    },


    update(){
      axios
      .put(this.URL+'us/Actualizar',this.usuario,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
                .then(data=>{
                    if(data.data != "Algo salio mal"){
                        console.log("datos actualizados");
                        this.cambio =false;
                        this.erro=false;
                        this.getTodos();
                    }else{
                        this.error = true;
                        this.error_msg = "los datos no se actualizaron";
                    }
                })
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

