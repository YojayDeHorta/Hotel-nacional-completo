<template>
    <div fluid>
        <v-card elevation='0' style='background-color: #f8f8f8 !important;'>
            <v-toolbar color="transparent" elevation='0' style='background-color: #f8f8f8 !important;'>
                <template>
                    <v-tabs show-arrows class='' v-model="tabs" style='display: flex;justify-content: center; '>
                        <v-tab v-for="i in Tabs_Name">
                            <p class='name_tabs'>
                                {{i.name}}
                            </p>
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <br>
            <v-tabs-items v-model="tabs" style='background-color: #f8f8f8 !important;'>
                <v-tab-item style='background-color: #f8f8f8 !important;'>
                    <v-container style='width: 90%;margin: auto;' fluid>
                        <v-row class='row_gallery' fluid>
                            <div class='column' id='column_1'>
                                <img class='gallery_1' src="@/assets/hotel_1.webp" alt="" width="100%" height="550px" style='width: 100% !important;'>
                            </div>
                            <div class='column' id='column_2'>
                                <div>
                                    <img class='gallery_2' src="@/assets/hotel_2.webp" alt="" width="100%" height="260px">
                                </div>
                                <div class='d-flex'>
                                    <div style='margin-right:1rem;width: 50% !important;'> <img class='gallery_3' src="@/assets/hotel_3.webp" width="100%" height="280px" alt=""></div>
                                    <div style='width: 50% !important;'> <img class='gallery_4' src="@/assets/hotel_4.webp" width="100%" height="280px" alt=""></div>
                                </div>
                            </div>
                        </v-row>
                        <v-row class='mt-5 row_gallery'>
                            <div class='column' id='column_3'>
                                <img class='gallery_5' src="@/assets/hotel_5.webp" alt="" height="550px" style='width: 100% !important;'>
                            </div>
                            <div class='column' id='column_4'>
                                <div>
                                    <img class='gallery_6' src="@/assets/hotel_6.webp" alt="" width="100%" height="270px">
                                </div>
                                <div>
                                    <img class='gallery_7' src="@/assets/book_1.webp" alt="" width="100%" height="270px">
                                </div>
                            </div>
                        </v-row>
                    </v-container>
                </v-tab-item>
                <v-tab-item style='background-color: #f8f8f8 !important;'>
                    <v-card flat>
                        <v-card-title class="text-h5">
                            An awesome title
                        </v-card-title>
                        <v-card-text>
                            <p>
                                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
                            </p>
                            <p>
                                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
                            </p>
                            <p class="mb-0">
                                Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item style='background-color: #f8f8f8 !important;'>
                    <v-card flat>
                        <v-card-title class="text-h5">
                            An even better title
                        </v-card-title>
                        <v-card-text>
                            <p>
                                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
                            </p>
                            <p class="mb-0">
                                Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: null,
            i:0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            Tabs_Name: [{
                    name: "ALL"
                },
                {
                    name: "Room"
                },
                {
                    name: "Looby"
                },
                {
                    name: "Reception"
                },
                {
                    name: "Dining"
                },
                {
                    name: "Pool"
                }
            ],
        /*

            ALL: [{
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_1.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                },
                {
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_2.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                },
                {
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_3.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                },
                {
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_4.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                },
                {
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_5.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                },
                {
                    "title": "Jane Cooper",
                    "url": require('@/assets/hotel_6.webp'),
                    "text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 100",
                }
            ]
*/
        }
    }
}
</script>
<style scoped>
    
    
p {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}


.row_gallery {
    #border: 5px solid black;
}


.contenedor_img {
    #border: 4px solid black;
}

.column {
    margin-left: 1rem;
    width: 47% !important;
    #border: 5px solid yellow !important;
}

img {

    object-fit: cover;
}

.name_tabs {
    border: 2px solid #93b4f5;
    padding: 0.5rem;
    width: 130px;
    border-radius: 2rem;
    background-color: #e3eaf7;

}


@media (max-width: 650px) {

    .column {
        width: 100% !important;
        #border: 10px solid red !important;

    }

    .name_tabs {
        font-size: 0.7rem !important;
        #padding: 0.3rem;
        width: 110px;
    }

}
</style>