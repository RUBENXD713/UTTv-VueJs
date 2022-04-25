<template>
    <div>
        <Header/>
        <ModalHelp/>
        <div class="container" >
            <br>
            <div align="left"><h2>Carrera {{carrera.tipo}}</h2></div>
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
import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//import CardVideo from '@/components/CardVideo.vue'
import ModalHelp from '@/components/modalHelp.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Carrera",
    components: {
        Header,
        Footer,
        ModalHelp
    },
    data() {
    return{
      todos:null,
      video:null,
      cambio:false,
      nuevo:false,
      carrera:{tipo:"TIC"},
      error:false,
      error_msg:"",
      err:'',
      URL:process.env.VUE_APP_API_HOST,
    }
  },
  async mounted() {
      //this.carrera.tipo = this.$route.params.carrera;
      
    if (localStorage.token == '' || localStorage.token == null){
      this.$router.push('/');
    }
    this.getUserValidated();
    this.getTodos();
  },
  methods:{
      getTodos(){
      axios
        .get(this.URL+'vi/carrera?tipo='+this.carrera.tipo,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.todos = response.data
          })
          .catch( e=> this.err=e)
    },
      goToReproduction($id){
        this.$router.push('/reproductor/'+$id);
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
                    this.returnToValidated(response.data.Perfil);
                  })
                  .catch( e=> this.err=e)
            }, 
            returnToValidated(user){
                if (user.m2 == 0) {
                  this.$router.push('codigo');
                }else if (user.m2 == 1 && user.m3 == 1) {
                  //console.log('validado');
                }else{
                  this.$router.push('/socket');
                }
 
            }
  }
    
}
</script>
