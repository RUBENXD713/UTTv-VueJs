<template>
    <div>
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
</template>

<script>
import axios from "axios";
export default {
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
    this.getTodos()
  },
  methods:{
      getTodos(){
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