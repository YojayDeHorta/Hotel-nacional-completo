<template>
    <div fluid>
        <navbar_2 />
        <div class='parallax' style='z-index:10' fluid>
            <div class='gallery_txt'>
                <h1 class='text-center'>NUESTROS SERVICIOS TE ENCANTARÁN</h1>
                <p class='text_gallery text-center mt-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Laudantium doloremque eveniet, eligendi sequi, rem officia? Omnis suscipit asperiores elit. Laudantium doloremque eveniet, eligendi sequi, rem officia? Omnis suscipit asperiores.
                </p>
            </div>
        </div><br>
        <div>
            <div class='title_services mt-5 mb-5'>
            	<br>
                <h1 class='text-center mt-5 mb-5'>PREPARADOS PARA ATENDERTE</h1>
                <p class='text-center mt-5 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur rem laudantium illo sunt velit! Necessitatibus enim tenetur velit error. Illum beatae, facilis neque ullam, quibusdam hic quis sed accusamus?
                </p>
            </div>
        </div>
        <v-container class='mt-5 mb-5'>
            <v-row>
                <v-col class='column' cols='12'>
                    <div class='div_img'><img src="@/assets/reuniones.webp" alt=""></div>
                    <div class='div_text'>
                        <div>
                            <h1>Sala de reuniones</h1>
                            <p class='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus amet repellat veritatis ad illo, totam iusto voluptatum repudiandae fuga reiciendis ab odit labore doloribus consequatur accusamus. Autem, impedit, excepturi?
                            </p>
                        </div>
                    </div>
                </v-col>
                <v-col class='column' cols='12'>
                    <div class='div_text'>
                        <div>
                            <h1>Restaurante</h1>
                            <p class='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus amet repellat veritatis ad illo, totam iusto voluptatum repudiandae fuga reiciendis ab odit labore doloribus consequatur accusamus. Autem, impedit, excepturi?
                            </p>
                        </div>
                    </div>
                    <div class='div_img'><img src="@/assets/restaurante.webp" alt=""></div>
                </v-col>
                <v-col class='column' cols='12'>
                    <div class='div_img'><img src="@/assets/cafeteria.webp" alt=""></div>
                    <div class='div_text'>
                        <div>
                            <h1>Cafetería Moka</h1>
                            <p class='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus amet repellat veritatis ad illo, totam iusto voluptatum repudiandae fuga reiciendis ab odit labore doloribus consequatur accusamus. Autem, impedit, excepturi?
                            </p>
                        </div>
                    </div>
                </v-col>
                <v-col class='column' cols='12'>
                    <div class='div_text'>
                        <div>
                            <h1>El bingo de Hotel Nacional</h1>
                            <p class='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus amet repellat veritatis ad illo, totam iusto voluptatum repudiandae fuga reiciendis ab odit labore doloribus consequatur accusamus. Autem, impedit, excepturi?
                            </p>
                        </div>
                    </div>
                    <div class='div_img'><img src="@/assets/bingo.webp" alt=""></div>
                </v-col>
                <v-col class='column' cols='12'>
                    <div class='div_img'><img src="@/assets/salon.webp" alt=""></div>
                    <div class='div_text'>
                        <div>
                            <h1>Salón social</h1>
                            <p class='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus amet repellat veritatis ad illo, totam iusto voluptatum repudiandae fuga reiciendis ab odit labore doloribus consequatur accusamus. Autem, impedit, excepturi?
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <br>
        <hr class='mt-5 mb-5' style='width: 80%;margin: auto;'>
        <v-container class='mt-5 mb-5'>
            <h1 class='mt-5 mb-5 text-center'>PREPARADOS PARA ATENDERTE</h1>
            <br>
            <v-row class='container_list'>
                <div class='column'>
                    <ul>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp;  Wifi</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Aire acondicionado</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Recepción 24 horas</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Aparcamiento</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Aparcacoches las 24h</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Prensa</li>
                    </ul>
                </div>
                <div class='column'>
                    <ul class='ul_list'>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Ascensor</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Guardaequipajes</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Servicio de lavandería y planchado</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Información turística, alquiler de bicicletas y de coches</li>
                        <li class='icon_check'><v-icon>mdi-check-circle</v-icon>&nbsp; Fax / fotocopiadora</li>
                    </ul>
                </div>
            </v-row>
        </v-container>
        <pie_pagina />
    </div>
</template>
<style scoped>
.parallax {
    display: flex !important;
    justify-content: center !important;
    #border: 5px solid black !important;
    height: 450px !important;
    #border: 5px solid red !important;
    background-image: url('@/assets/hotel_1.webp');
    background-size: cover;
    background-position: center;
}

.gallery_txt {
    color: white !important;
    background: rgba(255, 255, 255, 0.15);
    #border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    #border: 1px solid rgba(255, 255, 255, 0.46);
    margin: auto !important;
    width: 80%;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;
}

.div_img {
    text-align: center;
}

img {
    #border: 1px solid green;
    width: 80%;
    height: 400px;
    object-fit: cover !important;
}

.column {
    display: flex;
    flex-wrap: wrap;
    #border: 5px solid red;
    margin-top: 4rem;
}

.column div {
    #border: 5px solid blue !important;
    width: 50%;
}

.div_text {
    display: flex;
    justify-content: center !important;
}

.div_text div {
    padding: 10px !important;
    margin: 0 !important;
    #border: 5px solid yellow !important;
    width: 80% !important;
    margin: auto !important;
}

.column p {
    padding: 0 !important;
    margin: 0 !important;
    margin-top: 1.5rem !important;
    #margin: auto;
    width: 90%;
    #border: 1px solid red;
}


.container_list{
	#border: 6px solid blue;
}

.container_list div{
	#border: 5px solid blue;
	width: 50%;
}

.container_list ul{
	list-style: none;
	width: 100%;
	#border: 5px solid red;
	height: 500px !important;
	text-align: start;
	display: flex;
	flex-direction: column;
	justify-content: center !important;
}

.container_list ul li{
	position: relative;
	font-size: 1.2rem !important;
	left: 27%;
	top: -5rem;
	width: 65%;
	#border: 1px solid red;
	margin-top: 3rem;

}


.title_services p{
	margin: auto;
	width: 70%;
	#border: 5px solid red;
}

.ul_list{
	position: relative;
	top: -2rem;
}


@media screen and (max-width: 700px) {
    .column div {
        #border: 5px solid blue !important;
        width: 100%;
    }

    .column div {
        text-align: center !important;
    }

    .column p {
        width: 100%;
    }

}
</style>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
export default {
    components: {
        navbar_2,
        pie_pagina
    }
}
</script>