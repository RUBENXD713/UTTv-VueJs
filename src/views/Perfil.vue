<template>
<div>
    <Header/>
    <br>
    <ModalHelp/>
    <br>

  <div class="card">
        <div class="card-header">
            <img src="../assets/User.png" alt="Profile Image" class="profile-img">
        </div>
        <div class="card-body">
            <p class="name">{{user.name}}</p>
            <a href="#" class="mail">{{user.email}}</a>
        </div>

        <div class="social-links">
            <a href="#" class="fab fa-github social-icon"></a>
            <a href="#" class="fab fa-twitter social-icon"></a>
            <a href="#" class="fab fa-youtube social-icon"></a>
            <a href="#" class="fab fa-linkedin social-icon"></a>
        </div>

        <div class="card-footer">
            <p class="count" v-if="user.tipo == 0">Usuario | Normal</p>
            <p class="count" v-if="user.tipo == 1">Usuario | Super</p>
            <p class="count" v-if="user.tipo == 2">Usuario | Administrador</p>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer/>
</div>
</template>






<script>
import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalHelp from '@/components/modalHelp.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Perfil",
    components: {
        Header,
        Footer,
        ModalHelp
    },
    data(){
        return{
            user:null,
            URL:process.env.VUE_APP_API_HOST,
        }
    },
    async mounted() {
      if (localStorage.token == '' || !localStorage.token){
      this.$router.push('/');}
        this.getUserValidated();
    },methods:{
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
                  .catch( e=> console.log(e))
            }, 
            returnToValidated(user){
                if (user.m2 == 1 && user.m3 == 1) {
                    console.log('validado');
                }else if (user.m2 == 0) {
                    this.$router.push('codigo');
                }else{
                    this.$router.push('/socket');
                }
 
            }
    }
    
}
</script>






<style scoped>

















* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: 0.3s;
}

body {
    font-family: "Montserrat";
    background-color: #b8b6b6;
    color: #fdfdfd;
}

.card {
    max-width: 250px;
    margin: 150px auto 0;
    background-color: #42515a;
    box-shadow: 0 10px 90px #00000024;
    text-align: center;
    font-size: 20px;
    border-radius: 15px;
}

.card .card-header {
    position: relative;
    height: 48px;
}

.card .card-header .profile-img {
    width: 130px;
    height: 130px;
    border-radius: 1000px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid #c74385;
    box-shadow: 0 0 20px #00000033;
}

.card .card-header .profile-img:hover {
    width: 180px;
    height: 180px;
    border: 8px solid #d885af;
}

.card .card-body {
    padding: 10px 40px;
}

.card .card-body .name {
    margin-top: 30px;
    font-size: 22px;
    font-weight: bold;
    color: #c74385;
}

.card .card-body .name:hover {
    margin-top: 30px;
    font-size: 24px;
    color: #d885af;
}

.card .card-body .mail {
    font-size: 14px;
    color: #c2bdbd;
}

.card .card-body .mail:hover {
    font-size: 16px;
    color: #ffffff;
}

.card .card-body .job {
    margin-top: 10px;
    font-size: 14px;
}

.card .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.card .social-links .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: #c74385;
    color: #ffffff;
    font-size: 20px;
    border-radius: 100%;
    text-decoration: none;
    margin: 0 13px 30px 0;
}

.card .social-links .social-icon:last-child {
    margin-right: 0;
}

.card .social-links .social-icon:hover {
    background-color: #d885af;
    height: 50px;
    width: 50px;
    text-decoration: none;
}

.card .card-footer {
    background-color: #c74385;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 20px 0 20px 0;
}

.card .card-footer .count {
    font-size: 14px;
}

@media screen and (max-width: 575px) {
    .card {
        width: 96%;
    }

    .card .card-body {
        padding: 10px 20px;
    }
}




</style>

