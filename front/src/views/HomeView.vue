<template>
    <div class='Marco_Principal'>
        <navbar_2 class=''></navbar_2>
        <div class='parallax'>
            <img src="@/assets/slider.webp" alt="">
            <anuncio class='anuncio_1'></anuncio>
        </div><br>
        <div class='Marco_Secundario'>
            <v-container class='Nuestro_Hotel mt-5 mb-5' fluid>
                <v-row class='row_img'>
                    <div class='cuadro_texto'>
                        <div>
                            <h1 class='text-center mt-5'>{{ $t('home_welcome') }}</h1>
                            <p> <br>
                                 {{ $t('home_welcome_info') }}
                            </p>
                            <br>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/hotel_1.webp" alt="">
                    </div>
                </v-row><br>
                <v-row class='row_img'>
                    <div>
                        <img src="@/assets/hotel_2.webp" alt="">
                    </div>
                    <div class='cuadro_texto'>
                        <div>
                            <h1 class='text-center mt-5'>{{ $t('home_heritage') }}</h1>
                            <p> <br>
                               {{ $t('home_heritage_info') }}
                            </p>
                        </div>
                    </div>
                </v-row>
            </v-container>
            <v-container fluid>
                <h1 class='text-center'>{{ $t('home_luxury') }}</h1>
                <p class='info_sliders text-center mt-3'>{{ $t('home_luxury_info') }}</p>
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
h1 {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}


p {
    font-weight: initial;
}


.Marco_Principal {
    width: 100% !important;
    overflow: hidden !important;
    #border: 5px solid purple;
    background-color: #f8f8f8 !important;
    #height: auto !important;
}

.Marco_Secundario {
    margin: auto;
    width: 90%;
    #border: 5px solid blue !important;
    background-color: #f8f8f8 !important;
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

.Nuestro_Hotel {
    #border: 5px solid red !important;
}

.Nuestro_Hotel .row_img {
    margin-bottom: 3.5rem;
    #border: 5px solid blue;
}

.Nuestro_Hotel .row_img div {
    text-align: center;
    #border: 5px solid black;
    width: 50%;
}

.cuadro_texto {
    display: flex;
    justify-content: center;
    #border: 5px solid purple !important;
}

.cuadro_texto div {
    #border: 5px solid red !important;
    margin: auto;
    width: 90% !important;
}

.cuadro_texto div p {
    text-align: justify !important;
}


.Nuestro_Hotel .row_img img {
    width: 90%;
    height: 450px;
    object-fit: cover;
}


@media (max-width:700px) {



    .Nuestro_Hotel .row_img div {
        #border: 5px solid purple;
        width: 100% !important;
    }




    /*
    .Nuestro_Hotel .row_img {
        #bor
    }


*/

}








/*

.Nuestro_Hotel .img_1 {
    border: 5px solid black;
}


.Nuestro_Hotel .col {
    border: 5px solid red !important;
}

.Nuestro_Hotel .img {
    border: 5px solid purple !important;
    width: 100% !important;
    height: 500px !important;
    object-fit: cover !important;
}

.container_texto {
    border: 5px solid purple !important;
    margin: auto;
}

.div_texto {
    border: 5px solid blue;
    margin: auto;
}


/*
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

.Nuestro_Hotel {
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
    .Nuestro_Hotel {
        border: 5px solid purple !important;
    }

    .Nuestro_Hotel .img_1 {
        #border: 4px solid red !important;
        margin-top: 1rem !important;
        height: auto !important;
    }

    .Nuestro_Hotel .col {
        border: 5px solid black !important;
    }


}



@media (max-width:600px) {

    .Nuestro_Hotel {
        #border: 5px solid purple !important;
    }

    .Nuestro_Hotel .img_1 {
        #border: 4px solid red !important;
        margin-top: 1rem !important;
        height: auto !important;
    }

    .Nuestro_Hotel .col {
        #border: 5px solid black !important;
    }



}

*/
</style>