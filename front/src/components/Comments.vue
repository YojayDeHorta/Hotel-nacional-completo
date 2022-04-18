<template>
    <v-container class='container_tabs mb-5' fluid>
        <v-container class='Comentarios mb-5'>
            <h1 class='text-center mt-3' style=''>{{ $t('comment_title') }}</h1>
            <p style='width:70%;margin: auto;' class='texto_coment mt-5 text-center'>{{ $t('comment_subtitle') }}</p>
        </v-container>
        <v-card class='Tarjetas_Card' elevation='0'>
            <v-toolbar class='Tabs_Circle' color="transparent" elevation='0' dark>
                <template>
                    <v-tabs v-model="tabs" centered>
                        <v-tab v-for="n in 3" :key="n">
                            <v-icon style='color: #5d8ade'>mdi-circle</v-icon>
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <v-tabs-items v-model="tabs" class='Content_Tabs' elevation='0' style='width: 90%;margin: auto;background-color: transparent !important;' >
                <v-tab-item class='comment'>
                    <v-row class='comment_row'>
                        <v-col class='comment_col' v-for="(comment , n) in Comments_1" :key="n" cols="12" sm='6' md="4">
                            <v-item v-slot="{ active, toggle }">
                                <v-card class="card_comment d-flex align-center" height="" @click="toggle" elevation='0' style='background-color: transparent;'>
                                    <v-card-text>
                                        <div class='info_card text-center' style="background-color: white !important;padding: 1rem;">
                                            <p>
                                                {{comment.text}}
                                            </p>
                                            <p v-for='i in comment.start' :key='i' style='display: inline;'>
                                                <v-icon style='color:#0083ca'>
                                                    mdi-star
                                                </v-icon>
                                            </p>
                                        </div>
                                        <div class='card_info mt-5'>
                                            <div class='text-center' style='margin: auto;'>
                                                <img :src="comment.url" alt="" style='border-radius: 50%;'>
                                            </div>
                                            <p class='mt-3' style="margin: 0;padding: 0;">
                                                <strong>
                                                    {{comment.nombre}}
                                                </strong>
                                            </p>
                                            <p style="margin: 0;padding: 0;">
                                                {{comment. twitter}}
                                            </p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item class='comment'>
                    <v-row class='comment_row'>
                        <v-col class='comment_col' v-for="(comment , n) in Comments_2" :key="n" cols="12" sm='6' md="4">
                            <v-item v-slot="{ active, toggle }">
                                <v-card class="card_comment d-flex align-center" height="" @click="toggle" elevation='0' style='background-color: transparent;'>
                                    <v-card-text>
                                        <div class='info_card text-center' style="background-color: white !important;padding: 1rem;">
                                            <p>
                                                {{comment.text}}
                                            </p>
                                            <p v-for='i in comment.start' :key='i' style='display: inline;'>
                                                <v-icon style='color:#0083ca'>
                                                    mdi-star
                                                </v-icon>
                                            </p>
                                        </div>
                                        <div class='card_info mt-5'>
                                            <div class='text-center' style='margin: auto;'>
                                                <img :src="comment.url" alt="" style='border-radius:50%;'>
                                            </div>
                                            <p class='mt-3' style="margin: 0;padding: 0;">
                                                <strong>
                                                    {{comment.nombre}}
                                                </strong>
                                            </p>
                                            <p style="margin: 0;padding: 0;">
                                                {{comment. twitter}}
                                            </p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item class='comment' style='background-color: transparent !important;'>
                    <v-row class='comment_row' style='background-color: transparent !important;'>
                        <v-col class='comment_col' v-for="(comment , n) in Comments_3" :key="n" cols="12" sm='6' md="4" style='background-color: transparent !important;'>
                            <v-item v-slot="{ active, toggle }">
                                <v-card class="card_comment d-flex align-center" height="" @click="toggle" elevation='0' style='background-color: transparent;'>
                                    <v-card-text>
                                        <div class='info_card text-center' style="background-color: white !important;padding: 1rem;">
                                            <p>
                                                {{comment.text}}
                                            </p>
                                            <p v-for='i in comment.start' :key='i' style='display: inline;'>
                                                <v-icon style='color:#0083ca'>
                                                    mdi-star
                                                </v-icon>
                                            </p>
                                        </div>
                                        <div class='card_info mb-3 mt-5' style='background-color: transparent !important;'>
                                            <div class='text-center' style='margin: auto;'>
                                                <img :src="comment.url" alt="" style='border-radius:50%;'>
                                            </div>
                                            <p class='mt-3' style="margin: 0;padding: 0;">
                                                <strong>
                                                    {{comment.nombre}}
                                                </strong>
                                            </p>
                                            <p style="margin: 0;padding: 0;">
                                                {{comment. twitter}}
                                            </p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            tabs: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Comments_1: [

                {
                    "url": require('@/assets/comment_1.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                },
                {


                    "url": require('@/assets/comment_2.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4


                },
                {

                    "url": require('@/assets/comment_3.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                }



            ],

            Comments_2: [{
                    "url": require('@/assets/comment_4.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                },
                {
                    "url": require('@/assets/comment_5.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                },
                {

                    "url": require('@/assets/comment_6.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                }

            ],
            Comments_3: [

                {
                    "url": require('@/assets/comment_7.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                },
                {
                    "url": require('@/assets/comment_8.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                },
                {
                    "url": require('@/assets/comment_9.png'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                    "nombre": "Jane Cooper",
                    "twitter": "@Jane Cooper",
                    "start": 4
                }

            ]
        }
    },
}
</script>
<style scoped>
p {
    text-align: center !important;
    font-weight: initial;
}


strong,
h1 {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}


.Tarjetas_Card {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 !important;
    padding: 0 !important;
    #border: 5px solid blue;
    background-color: transparent !important;
}


.comment {
    #border: 5px solid red !important;
    #background-color: transparent !important;
}

.container_tabs {
    #background-color: transparent !important;
    #border: 5px solid blue;
}

.card_comment {
    #background-color: transparent !important;
    #border: 5px solid red;
}

.card_info {
    #border: 1px solid red;
    padding: 0.7rem;
    #background-color: white !important;
}





/*
.Tarjetas_Card {
    margin: 0 !important;
    padding: 0 !important;
    border: 5px solid blue;
    background-color: transparent !important;
}



.Tabs_Circle {
    margin: none !important;
    padding: none !important;
    border: 5px solid green !important;
    position: relative;
    top: 26rem !important;
    #margin-top: 5rem;
    background-color: transparent !important;

}

.Content_Tabs {
    background-color: transparent !important;
    border: 5px solid purple !important;
    position: relative;
    top: -2rem;
}


.container_tabs {
    border: 5px solid black;
    height: 670px;
}

.card_comment {
    border: 5px solid red !important;
    #padding: 1.5rem;
}

.info_card {
    border: 5px solid purple;
    background-color: white !important;
    padding: 0.7rem;
}

.card_info {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

}

.card_info p {
    text-align: center;
}


/*

@media (min-width: 601px) and (max-width: 900px) {


    .container_tabs {
        #border: 5px solid red !important;
        height: auto !important;

        padding-bottom: 5rem !important;
        margin-bottom: 1rem;
    }


    .Tabs_Circle {
        #border: 5px solid purple !important;
        position: absolute;
        top: 100% !important;
        z-index: 100;
        width: 100% !important;
        #margin-top: 2rem;


    }


    .card_comment {
        position: relative;
        margin-top: 2rem;
    }






}








@media (max-width: 600px) {

    .texto_coment {
        width: 100% !important;
        #margin-top: 2rem;
    }

    .container_tabs {
        #border: 5px solid red !important;
        height: auto !important;
        padding-bottom: 5rem !important;
        margin-bottom: 1rem;
    }


    .Tabs_Circle {
        #border: 5px solid purple !important;
        position: absolute;
        top: 100% !important;
        z-index: 100;
        width: 100% !important;
        #margin-top: 2rem;


    }


    .card_comment {
        position: relative;
        margin-top: 2rem;
    }

}


*/
</style>