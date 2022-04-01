<template>
    <div class='Marco_Principal'>
        <navbar_2 class=''></navbar_2>
        <div class='parallax'>
            <img src="@/assets/slider.webp" alt="">
            <anuncio class='anuncio_1'></anuncio>
        </div><br>
        <div class='Marco_Secundario'>
            <v-container class='Nuestro_Hotel mt-5 mb-5'>
                <v-row class='img_1 mb-5'>
                    <v-col class='col mb-5' cols='12' sm='6' lg='6'>
                        <div>
                            <h1 class='text-center'>WELCOME TO HOTEL NACIONAL</h1>
                            <p class='mt-5'> <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu magna mauris. Phasellus malesuada turpis nec massa elementum, id consectetur lectus vestibulum. Sed viverra sapien ut elit dapibus, a finibus diam fringilla. In tincidunt molestie odio quis efficitur. Integer fermentum efficitur ligula, a consectetur enim sodales id.
                            </p>
                        </div>
                    </v-col>
                    <br>
                    <v-col class='col mt-5' cols='12' sm='6' lg='6'>
                        <v-img class='img' src='@/assets/hotel_1.webp'>
                        </v-img>
                    </v-col>
                </v-row>
                <br>
                <v-row class='img_1 mt-5'>
                    <v-col class='col' cols='12' sm='6' lg='6'>
                        <v-img class='img' src='@/assets/hotel_2.webp'>
                        </v-img>
                    </v-col>
                    <v-col class='col' cols='12' sm='6' lg='6'>
                        <div>
                            <h1 class='text-center'>OUR HERITAGE</h1>
                            <p> <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu magna mauris. Phasellus malesuada turpis nec massa elementum, id consectetur lectus vestibulum. Sed viverra sapien ut elit dapibus, a finibus diam fringilla. In tincidunt molestie odio quis efficitur. Integer fermentum efficitur ligula, a consectetur enim sodales id.
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid>
                <h1 class='text-center'>Luxury Rooms</h1>
                <p class='info_sliders text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu magna mauris. Phasellus malesuada turpis nec massa elementum, id consectetur lectus vestibulum. Sed viverra sapien ut elit dapibus</p>
                <v-sheet class="mx-auto  mt-3    " elevation="0" width="100%" style='background-color: transparent !important;'>
                    <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                        <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
                            <v-card :color="active ? undefined : 'grey lighten-1'" class="ma-4" height="300" width="400" @click="toggle">
                                <v-row class="fill-height" align="center" justify="center">
                                    <img :src="require(`@/assets/cuarto_${[n]}.webp`)" alt="" style='width: 400px;height: 400px;'>
                                </v-row>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-container>

            <comments />
        </div>
        <pie_pagina />
    </div>
</template>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import comments from '../components/Comments'
import anuncio from '../components/Anuncio'

export default {
    data() {
        return {
            model: null,
        }
    },

    components: {
        navbar_2,
        pie_pagina,
        comments,
        anuncio

    }
}
</script>
<style scoped>
.Marco_Principal {
    width: 100% !important;
    overflow: hidden !important;
    #border: 5px solid purple;
    background-color: #f8f8f8 !important;
    #height: auto !important;
}

.Marco_Secundario {
    background-color: #f8f8f8 !important;
}

.Nuestro_Hotel{
    #border: 5px solid black !important;
}


.container_navbar_1 {
    #border: 5px solid red;
    background-color: #2C3A52;
    color: white !important;
    padding: 15px !important;
}

.columnas_navbar {
    #border: 5px solid black;
    margin: 0;
    padding: 0;
}

.icon_navbar {
    position: relative;
    left: 1rem;
}

.Comentarios {
    #border: 6px solid red;
}

.Comentarios p {
    text-align: center;
    #border: 5px solid black;
    width: 60%;
    margin: auto;
}

.icon_navbar p {
    position: relative;
    #left: 1rem;
}

.parallax {
    height: 450px !important;
    #border: 5px solid red !important;
}

.parallax img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
}



p {
    text-align: justify;
}

.img_1 {
    #border: 5px solid black;
    height: 400px;
    #margin-top: 1rem;
}

.img {
    width: 100%;
    #border: 5px solid purple;
    height: 300px;
}

.info_sliders {
    margin: auto;
    width: 70%;
    #border: 5px solid red;
}

.anuncio_1 {
    #border: 6px solid red;
    width: 100% !important;
}



@media (min-width:600px) and (max-width:960px) {
.Nuestro_Hotel{
    border: 5px solid purple !important;
}

.Nuestro_Hotel .img_1{
    #border: 4px solid red !important;
    margin-top: 1rem !important;
    height: auto !important;
}

.Nuestro_Hotel .col{
    border: 5px solid black !important;
}


} 



@media (max-width:600px) { 

.Nuestro_Hotel{
    #border: 5px solid purple !important;
}

.Nuestro_Hotel .img_1{
    #border: 4px solid red !important;
    margin-top: 1rem !important;
    height: auto !important;
}

.Nuestro_Hotel .col{
    #border: 5px solid black !important;
}



}

</style>