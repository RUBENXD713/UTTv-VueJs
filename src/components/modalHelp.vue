<template>
        <div>
            <b-button v-b-modal.modal-scrollable class="btn-flotante">¿Como subir video?</b-button>

                <b-modal id="modal-scrollable" scrollable title="Como subir un video..">
                    <h4>Paso 1..</h4>
                <p class="my-4">
                 Deberas de copiar la imagen de la miniatura del video que deseas publicar..
                </p>
                <img src='../assets/1.png' id="icon" alt="User Icon" style="max-width: 100%; max-height: 100%;"/>
                <hr>

                    <h4>Paso 2..</h4>
                <p class="my-4">
                 Copiar la url del video, seleccionando compartir despues en incorporar..
                </p>
                <img src='../assets/2.png' id="icon" alt="User Icon" style="max-width: 100%; max-height: 100%;"/>
                <hr>

                    <h4>Paso 3..</h4>
                <p class="my-4">
                 Deberemos de ingresar un titulo y una descripcion de nuestro agrado..
                 Ademas de la categoria Framwork, Herramienta, Sistema operativo entre otras, y la Carrera TIC o MECATRONICA
                </p>
                <img src='../assets/3.png' id="icon" alt="User Icon" style="max-width: 100%; max-height: 100%;"/>
                <hr>

                    <h4>Paso 4..</h4>
                <p class="my-4">
                 Nuestro video se mostrata en el Dashboard una vez este publicado.
                </p>
                <hr>
            </b-modal>
        </div>
</template>



<style scoped>
.btn-flotante {
	font-size: 13px; /* Cambiar el tamaño de la tipografia */
	text-transform: uppercase; /* Texto en mayusculas */
	font-weight: bold; /* Fuente en negrita o bold */
	color: #ffffff; /* Color del texto */
	border-radius: 5px; /* Borde del boton */
	letter-spacing: 2px; /* Espacio entre letras */
	background-color: #E91E63; /* Color de fondo */
	padding: 18px 30px; /* Relleno del boton */
	position: fixed;
	bottom: 1000px;
	right: 30px;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 99;
}
.btn-flotante:hover {
	background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 30px;
		right: 15px;
	}
} 
</style>