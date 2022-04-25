<template>
    <div>
        <Header/>
        <br>
        <div class="container">
          <br>
            <div align="left"><h2>Videos</h2></div>
            <br>
            <b-card-group>
                <div v-for="videos in todos" :key="videos.id" v-animate-css.hover="'swing'">
  <b-card
    :title="videos.nombre"
    :img-src="videos.image"
    img-alt="VideoImage"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{videos.descripcion}}
    </b-card-text>

    <b-button variant="primary" v-on:click="goToReproduction(videos.id)">Reproducir</b-button>
  </b-card>
  
</div>
    </b-card-group>
        </div>
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Dashboard",
    components: {
        Header,
        Footer,
    },
    data() {
        return{
          todos:null,
          video:null,
          cambio:false,
          nuevo:false,
          error:false,
          error_msg:"",
          URL:process.env.VUE_APP_API_HOST,
        }
    },
    async mounted() {
      if (localStorage.token == ''){
        this.$router.push('/');
      }
      console.log('mounted');
      this.getTodos()
      this.getUser();
    },
    method:{
            getUserValidated(){
                this.getUser();
            },
            getUser(){
              axios
                .get(process.env.VUE_APP_API_HOST+'us/Perfil' ,{
                headers: {
                      'Authorization': `Bearer ${localStorage.token}`
                        }
                })
                  .then(response => {
                    this.returnToValidated(response.data.Perfil);
                  })
                  .catch( e=> console.log(e))
            },
            returnToValidated(user){
                if (user.m2 == 0) {
                    this.$router.push('codigo');
                }else if (user.m2 == 1 && user.m3 == 1) {
                  console.log('validado')
                }else{
                  this.$router.push('/socket');
                }
 
            },getTodos(){
      axios
        .get(this.URL+'vi/index')
          .then(response => {
            this.todos = response.data
          })
          .catch( e=> console.log(e))
    },
      goToReproduction($id){
        this.$router.push('/reproductor/'+$id);
      }
    }    
}
</script>

<style scoped>

</style>
