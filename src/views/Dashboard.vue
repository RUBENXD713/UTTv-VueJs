<template>
    <div>
        <Header/>
        <br>
        <div class="container">
          <br>
            <div align="left"><h2>Videos</h2></div>
            <br>
            <CardVideo/>
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
    async mounted() {
      if (localStorage.token == ''){
        this.$router.push('/');
      }
      console.log('mounted');
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
 
            }
    }    
}
</script>

<style scoped>

</style>
