<template>
    <div>
        <Header/>
        <div class="container">
            <br>
                <div class="video-container"><iframe width="560" height="315" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <br>
            <h3 style="float: left;">{{video.nombre}} </h3>
            <br>
            <br>
            <h5 style="float: left;">{{video.descripcion}}</h5>
            <br>
            <br>
        </div>
        <Footer/>
    </div>
</template>


<script>
import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Reproductor",
    components: {
        Header,
        Footer,
    },
    data() {
    return{
      video:null,
      error:false,
      error_msg:"",
      idVideo:null,
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
   async mounted() {
      if (localStorage.token == '' || localStorage.token == null){
      this.$router.push('/');
    }
    this.getUserValidated();
    this.idVideo = this.$route.params.id;
    this.getOne();

  },
  methods:{
    getOne(){
      axios
        .get(this.URL+'vi/index/?id='+this.idVideo)
          .then(response => {
            this.video = response.data
            console.log(this.URL+'vi/index/?id='+this.idVideo)
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
                  this.$router.push('/code');
                }else if (user.m2 == 1 && user.m3 == 1) {
                  console.log('validado');
                }else{
                  this.$router.push('/socket');
                }
 
            }
  }
}
</script>

<style scoped>
.video-container {
	position:relative;
	padding-bottom:56.25%;
	padding-top:30px;
	height:0;
	overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
</style>
