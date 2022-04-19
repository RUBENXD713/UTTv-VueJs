<template>
<div>
<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
<hr class="mb-4">
<footer class="text-white pt-5 pb-4" style="background-color: #cc0088;">

  <div class="container text-center text-md-left">

    <div class="row text-center text-md-left">

      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold" style="color:#000000;">UTTv</h5>
        <p>
                      Creating innovations for the students of the TORREON UNIVERSITY OF TECHNOLOGY, in order to facilitate learning and the search for relevant information.
        </p>
        
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold" style="color:#000000;">Links</h5>
      <p>
        <a class="text-white" style="text-decoration: none;" href="/" >Home</a>
      </p>
      <p>
        <a class="text-white" style="text-decoration: none;" href="/carrera2">Mecatronica</a>
      </p>
      <p>
        <a type="link" class="text-white" style="text-decoration: none;" href="/carrera">Tic</a>
      </p>
      <p>
        <a type="link" class="text-white" style="text-decoration: none;" href="/perfil">Perfil</a>
      </p>
      <p>
        <a class="text-white" style="text-decoration: none;" href="" v-on:click="logout()">Logout</a>
      </p>
      
      </div>

      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold" style="color:#000000;" > CONTACT US</h5>
        <p>
          <i class="fas fa-home mr-3"></i> Carr. Torreón - Matamoros S/N-Km 10, Ejido el Águila, 27400 Torreón, Coah.
        </p>
        <p>
          <i class="fas fa-phone mr-3"></i> +52 8713452055
        </p>
        <p>
          <i class="fas fa-phone   mr-3"></i> +52 8715900030
        </p>
      </div>
      
    </div>

    <hr class="mb-4">

    <div class="row align-items-center">

      <div class="col-md-7 col-lg-8">
        <p> Copyright ©2022 All rights reserved by:
          <a href="#" style="text-decoration: none;">
            <strong  style="color:#000000;">UTTv industry</strong>
          </a></p>
        
      </div>

      <div class="col-md-5 col-lg-4">
        <div class="text-center text-md-right">

          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-youtube"></i></a>
            </li>
          </ul>
          
        </div>
        
      </div>
      
    </div>

  </div>
  
</footer>

</div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  props: {
    msg: String
  },methods:{
    logout(){
      localStorage.token = ''
      this.$router.push('/');
    },
  }
}
</script>



<style scoped>
#menu{
    background-color: #e4cf4b;
    position: fixed;
    height: 100%;
    width: 230px;
    float: left;
    align-items: center;

}
#categorias{
    color: #ffff;
    font-family: Arial, Helvetica, sans-serif;
}
#boton{
    text-decoration: none;
    display: block;
    height: 50px;
    width: 200px;
    padding-top: 5px;
    outline: none;
    border: 1px solid rgb(118, 103, 11);
    background-color: #404040;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: all .25s;
    z-index: 1;
    position: relative;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}
#boton::before{
    text-decoration: none;
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to right, rgb(118, 103, 11), rgb(118, 103, 11));
    transition: all .25s;
    z-index: -1;
    font-family: Arial, Helvetica, sans-serif;
}
#boton:hover{
    border-radius: 1px solid transparent;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}
#boton:hover::before{
    height: 100%;
}
.wrapper .button{
    display: inline-block;
    height: 75px;
    width: 73px;
    margin: 0 5px;
    overflow: hidden;
    background: #26193a;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-out;
}
.wrapper .button:hover{
    width: 200px;
}
.wrapper .button .icon{
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50px;
    box-sizing: border-box;
    line-height: 60px;
}
.wrapper .button .icon i{
    font-size: 30px;
    line-height: 60px;
    color: #fff;
    justify-content: center;
    padding-left: 17px;
    padding-top: 5px;

}
.wrapper .button span{
    font-size: 20px;
    font-weight: 500;
    line-height: 60px;
    margin-left: 0px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;

}
#Escrito{
    visibility: hidden;
}
#logo{
    height: 91px;
    width: 91px;
    border:#ffff;
    border-color: aqua;
}
#Logo1{
    height: 398px;
    width: 398px;
    display: block;
    margin: auto;
    margin-top: 150px;

}
#fondo{
    background-color: #404040;
}
#fondosl{
    background-color: #404040;
}
#cuadro{
    background-color: #ffff;
}
#cubo{
    padding: 10px;
    /*padding-right: 10px;
    padding-left: 72px;*/
    top: 0;
    left: 0;
    display: block;
}
#busqueda{
    padding-top: 35px;
    padding-left: 180px;
        
}
#buscar{
    height: 43px;
    width: 756px;
    background-color: #404040;
    border-color: #707070;
    padding: 12px;
}
.splash{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #404040;
    z-index: 200;
}
.splash.display-none{
    position: fixed;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #404040;
    z-index: -10;
    transition: all 0.5s;
}

@keyframes fadeIn{
    to{
        opacity: 1;
    }
}
.fade-in{
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
}
#prueba{
    color: #fff;
}
#BotonIncio{
    float: right;
}
#sert
{
    text-align: center;
}
.videossss
{
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center ;
    color: #fff;
}
.titulos
{
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: left ;
    color: #fff;
}
.redes{
    height: 30px;
    width: 30px;
    display: block;
    margin: auto;
    margin-top: 50px;
}

.descript
{
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    text-align: center;
    justify-content: center ;
    color: #fff;
}

.likess
{
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    text-align: right;
    justify-content: right ;
    color: #fff;
}


</style>