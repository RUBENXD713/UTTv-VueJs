<template>
    <div>
        <Header/>
        <br>
        <div class="container">
          <br>
            <div align="left"><h2>Videos</h2></div>
            <br>
            <CardVideo v-animate-css="zoomIn"/>
        </div>
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CardVideo from '@/components/CardVideo.vue'
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Dashboard",
    components: {
        Header,
        Footer,
        CardVideo,
    },
    data() {
        return{
          URL:process.env.VUE_APP_API_HOST,
        }
    },
    mounted() {
      if (localStorage.token == ''){
        this.$router.push('/');
      }
      this.getUserValidated();
    },
    method:{
            getUserValidated(){
              axios
                .get(process.env.VUE_APP_API_HOST+'us/Perfil' ,{
                headers: {
                      'Authorization': `Bearer ${localStorage.token}`
                        }
                })
                  .then(response => {
                    console.log(response.data.Perfil);
                    this.returnToValidated(response.data.Perfil);
                  })
                  .catch( e=> console.log(e))
            },
            returnToValidated(user){
                if (user.m2 == 0) {
                    console.log('validado');
                }else if (user.m2 == 1 && user.m3 == 1) {
                  console.log('dashboard')
                  this.$router.push('dashboard');
                }else{
                  console.log('socket');
                  this.$router.push('socket');
                }
 
            }
    }    
}
</script>

<style scoped>

</style>
