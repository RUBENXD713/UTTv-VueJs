<template>
    <div>
        <Header/>
        <ModalHelp/>
        <b-nav tabs justified style="background-color: #cc0088; color:#000000;">
            <b-nav-item v-if="user.tipo == 2" v-on:click="changeNav(2)"><strong style="color:#000000;"  >Usuarios</strong></b-nav-item>
            <b-nav-item v-if="user.tipo == 2" v-on:click="changeNav(5)"><strong style="color:#000000;"  >Permiso</strong></b-nav-item>
            <b-nav-item v-on:click="changeNav(3)"><strong style="color:#000000;" >Videos</strong></b-nav-item>
            <b-nav-item v-on:click="changeNav(4)"><strong style="color:#000000;" >Categorias</strong></b-nav-item>
            <b-nav-item v-on:click="changeNav(1)"><strong style="color:#000000;" >Creadores</strong></b-nav-item>
        </b-nav>
        <div>
            <br>
            <TableVideos v-if="nav == 3"/>
            <TableCategories v-if="nav == 4"/>
            <TableUsers v-if="nav == 2"/>
            <TablaPermisos v-if="nav == 5"/>
        </div>
        <Creadores v-if="nav == 1"/>
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TableVideos from '@/components/TablaVideos.vue'
import TableCategories from '@/components/TablaCategorias.vue'
import Creadores from '@/components/creadores.vue'
import TableUsers from '@/components/TablaUsers.vue'
import TablaPermisos from '@/components/TablaPermisos.vue'
import ModalHelp from '@/components/modalHelp.vue'
import axios from "axios";
export default {
    
    // eslint-disable-next-line vue/multi-word-component-names
    name:"AdminDash",
    components: {
        Header,
        Footer,
        Creadores,
        TableVideos,
        TableCategories,
        TableUsers,
        TablaPermisos,
        ModalHelp
    },
    data() {
        return{
        nav:1,
        user:null,
        error:false,
        error_msg:"",
        URL:process.env.VUE_APP_API_HOST,
    }
    },
    async mounted() {
        if(localStorage.token){
        console.log("existe");
      }else{
        localStorage.token = "";
      }
      if (localStorage.token == ''){
      this.$router.push('/');
    }
    this.getUserValidated();
    this.getUser();
    },
    methods:{
        changeNav($num){
          this.nav=$num;
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
    },
            getUserValidated(){
              axios
                .get(process.env.VUE_APP_API_HOST+ 'us/Perfil' ,{
                headers: {
                      'Authorization': `Bearer ${localStorage.token}`
                        }
                })
                  .then(response => {
                    this.user = response.data.Perfil
                    this.returnTo(response.data.Perfil);
                  })
                  .catch( e=> console.log(e))
            }, 
            returnTo(user){
              if (user.m2 == 0) {
                    this.$router.push('codigo');
                }else if (user.m2 == 1 && user.m3 == 1 && user.permiso == 1) {
                  console.log('validado');
                }else{
                  this.$router.push('/socket');
                }
 
            }
      
    }
    
}
</script>

<style scoped>

</style>