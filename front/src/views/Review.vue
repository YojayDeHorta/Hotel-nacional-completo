<template>
    <div class='Marco_Secundario' fluid>
        <navbar_2 />
        <div class='contenedor_title'>
            <h2 class='text-center'>Write a Review</h2>
        </div>
        <v-container class='container-form mt-5' fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                    <v-row>
                        <h2 class='text-center mt-5 mb-5' style='width: 100%;'>We are glad you stayed with us, let us know your thoughts</h2>
                        <br>
                        <div class='mt-5' fluid style='width: 100%;'>
                            <v-col cols='12' fluid>
                                <v-text-field v-model="email" name="email" type="email" color="primary" label="Name" solo fluid></v-text-field>
                            </v-col>
                            <v-col cols='12'>
                                <v-text-field v-model="email" name="email" type="email" color="primary" label="Email" solo></v-text-field>
                            </v-col>
                            <v-col cols='12'>
                                <v-textarea solo name="input-7-4" label="Review" height='140px'></v-textarea>
                            </v-col>
                            <v-col cols='12'>
                                <h3 class='star_service' style='height: 100%;width: 100%;'>
                                    <v-rating background-color="grey" color="warning" empty-icon="mdi-star" full-icon="mdi-star" half-icon="mdi-star" width='75%' hover length="5" size="50" value="3">
                                    </v-rating>
                                    <br>
                                    <p class='mt-5' style='height:auto;width: 37%;'>
                                        <strong style="margin: auto  !important;">
                                            Satisfactory
                                        </strong>
                                    </p>
                                </h3>
                            </v-col>
                        </div>
                        <v-col class='text-end' cols='12'>
                            <v-btn class='btn_form' elevation="2" x-large>Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <comments />
        </v-container>
        <pie_pagina />
    </div>
</template>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import comments from '../components/Comments'
export default {
    components: {
        navbar_2,
        pie_pagina,
        comments


    }
}
</script>
<style scoped>
.Marco_Secundario {
    background-color: #f8f8f8 !important;
}



.contenedor_title {
    background-color: #2c3a52;
    color: #c9cded;
}

.contenedor_title h2 {
    padding: 2rem;
}


.container-form {
    #border: 5px solid purple !important;
}

input {
    background-color: #ffffff !important;
    #border: 4px solid red;
    width: 100%;
    outline: none;
    #border: 1px solid red;
    padding: 0.3rem;
}

.btn_form {
    #border: 5px solid red !important;
    width: 15%;
    background-color: #5d8ade !Important;
    color: white !important;
}


.star_service{
    display: flex;
    flex-wrap: wrap;
    #border: 5px solid red;
}


/*

p {
    position: relative;
    right: 27%;
    margin: auto;
    #border: 5px solid red !important;
    height: 100% !important;
}

strong {
    margin: auto;
}
*/
</style>