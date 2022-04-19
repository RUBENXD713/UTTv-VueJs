<template>    
   <div>
     <div>
       <h2>Permisos</h2>
     </div>
     <div>
      <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo</th>
              <th>DarPermiso</th>
              <th>DenegarPermiso</th>
            </tr>
        </thead>
          <tbody>
            <tr v-for="usuarios in todos" :key="usuarios.user" v-animate-css.hover="'headShake'" v-animate-css.click="'fadeOutLeft'">
              <td>{{usuarios.user}}</td>
              <td>{{usuarios.name}}</td>
              <td>{{usuarios.email}}</td>
              <td v-if="usuarios.tipo == 2">ADMIN</td>
              <td v-if="usuarios.tipo == 1">SUPER</td>
              <td v-if="usuarios.tipo == 0">COMUN</td>
              <td><i class="material-icons button edit" v-on:click="genCode(1)">DarPermiso</i></td>
              <td><i class="material-icons button delete" v-on:click="eliminarCodigo(usuarios.user)">DenegarPermiso</i></td>
            </tr>
          </tbody>
      </table>
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
      error:false,
      error_msg:"",
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
  mounted() {
    this.getTodos()
  },
  methods:{
    getTodos(){
      axios
        .get(this.URL+'us/getPeticiones',{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.todos = response.data.Perfil
          })
          .catch( e=> console.log(e))
    },


    genCode($num){
      console.log('num:'+$num)
      let json = {
                "id":1
              }
      axios
        .post(this.URL+'us/generarCodigo',json,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            console.log(response)
          })
          .catch( e=> console.log(e))

          this.eliminarCodigo(json.id);
    },

    eliminarCodigo($num){
      axios
        .delete(this.URL+'us/eliminarCodigo?id='+$num,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            console.log(response)
            this.getTodos()
          })
          .catch( e=> console.log(e))
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

