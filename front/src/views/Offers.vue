<template>
    <div class='Marco_Secundario' fluid>
        <navbar_2 />
        <div class='contenedor_title'>
            <h2 class='text-center'>{{ $t('offers_title') }}</h2>
        </div>
        <br>
        <h3 class='mt-5 mb-5' style='width: 89%;margin: auto;'>{{ $t('offers_subtitle') }}</h3>
        <v-container class='table_1 mt-5 mb-5' style='' fluid>
            <v-row class='title_fondo' style='width: 90%;margin: auto;'>
                <v-col class='column mb-5' cols='12' sm='6' lg='6' style='margin: 0;padding: 0'>
                    <h5 class='title'>
                        {{ $t('offers_title_1') }}
                    </h5>
                    <table class='mb-5' id='table_column_1'>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                              {{ $t('offers_table_1_1') }}
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                            {{ $t('offers_table_1_3') }}
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                             {{ $t('offers_table_1_2') }}
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                            {{ $t('offers_table_1_4') }}
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                             {{ $t('offers_table_1_5') }}
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col> <br>
                <v-col class='column mb-5' cols='12' sm='6' lg='6' style='margin: 0;padding: 0'>
                    <h5 class='title mt-5'>
                   {{ $t('offers_title_2') }}
                    </h5>
                    <table class='mb-5' id='table_column_2'>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p style='width:70%'>
                                            {{ $t('offers_table_2_1') }}
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon color='black'>
                                            mdi-calendar-blank-outline
                                        </v-icon>
                                        <p>
                                            {{ $t('offers_table_2_2_1') }}<br>
                                            10:30 AM - 8:00 PM
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <h3>
                                        <v-icon color='black'>
                                            mdi-calendar-blank-outline
                                        </v-icon>
                                        <p>
                                            <strong>{{ $t('offers_table_2_3_1') }}</strong> <br>
                                            10:00 AM - 3:00 PM
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
            </v-row>
        </v-container>
        <v-container class='table_1 mt-5 mb-5' style='' fluid>
            <v-row class='title_fondo' style='width: 90%;margin: auto;'>
                <v-col class='column mb-5' cols='12' sm='6' lg='6' style='margin: 0;padding: 0'>
                    <h5 class='title'>
                        {{ $t('offers_title_3') }}
                    </h5>
                    <table class='mb-5' id='table_column_1'>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                         
                                             {{ $t('offers_table_3_1') }}
                                        
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                               {{ $t('offers_table_3_2') }}
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                            {{ $t('offers_table_3_3') }}
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                            {{ $t('offers_table_3_4') }}
                                            <!--
                                            Pool Towel
                                        -->
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
                <v-col class='column mb-5' cols='12' sm='6' lg='6' style='margin: 0;padding: 0'>
                    <h5 class='title mt-5'>
                         {{ $t('offers_title_4') }}
                    </h5>
                    <table class='mb-5' id='table_column_2'>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        <v-icon class='ico_check' color='black'>
                                            mdi-check-circle
                                        </v-icon>
                                        <p>
                                             {{ $t('offers_table_4_1') }} <br>
                                        </p>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        <v-icon color='black'>
                                            mdi-calendar-blank-outline
                                        </v-icon>
                                        <p>
                                             {{ $t('offers_table_4_2_1') }}<br>
                                            10:30 AM - 8:00 PM
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <h3>
                                        <v-icon color='black'>
                                            mdi-calendar-blank-outline
                                        </v-icon>
                                        <p>
                                            <strong>{{ $t('offers_table_4_3_1') }}</strong> <br>
                                            10:00 AM - 8:00 PM
                                        </p>
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
            </v-row>
        </v-container>
        <div class='text-center'>
            <v-btn class='btn_form' elevation="2" x-large style='background-color:#6c95e1 !important;color: white;'>{{ $t('offer_btn') }}
                <v-icon class='ml-2'>
                    mdi-arrow-right-thin
                </v-icon>
            </v-btn>
        </div>
        <v-container class='Terminos mt-5 mb-5' fluid>
            <v-row style='width: 90%;margin: auto;'>
                <div class='title_terminos' fluid>
                    <h6 class='title' style='padding: 0.5rem;width: 100%;'>
                       {{ $t('offers_faq') }}
                    </h6>
                </div>
                <v-col cols='12' style='background-color: #ffffff;padding: 2.5rem'>
                    <h3> {{ $t('offers_faq_1') }}</h3>
                    <p class='text-justify mt-3' style='font-size:1.2rem;'>
                       {{ $t('offers_faq_1_info') }}
                    </p>
                </v-col>
                <v-col cols='12' style='background-color: #ffffff;padding: 2.5rem'>
                    <h3>{{ $t('offers_faq_2') }}</h3>
                    <p class='text-justify mt-3' style='font-size:1.2rem;'>
                           {{ $t('offers_faq_2_info') }}
                    </p>
                </v-col>
            </v-row>
        </v-container> <br>
        <pie_pagina class='mt-5' />
    </div>
</template>
<style type="text/css" scoped>

h2,h3{
     font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}



.contenedor_title {
    background-color: #2c3a52;
    color: #c9cded;
}

.contenedor_title h2 {
    padding: 2rem;
}



.Marco_Secundario {
    background-color: #f8f8f8 !important;
}


.title_fondo {
    background-color: white;
    #border: 1px solid black;
}

.title_fondo h5 {
    padding: 0.5rem;
    margin: 0 !important;
    background-color: #5d8ade !Important;
    color: white !important;
    width: 100%;

}


table {
    background-color: white !important;
    #border: 5px solid purple !important;
    width: 100%;
    font-size: 0.7rem !important;
    height: auto;
}

table tr {

    padding: 1rem !important;
}

table tr td {
    #border: 5px solid black !important;
    padding: 1rem;
    margin: 0;
}

table h3 {
    display: flex;

    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
}

table p {
    position: relative;
    #border: 10px solid purple !important;
    width: 100%;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    text-align: start !important;
    margin-left: 0.5rem !important;

}


.Terminos {
    #border: 5px solid black;
}


.title_terminos {
    #border: 5px solid red;
    width: 100% !important;
}

.title_terminos h6 {
    background-color: #5d8ade !Important;
    color: white !important;
    width: 100% !important;
    #padding: 1rem;
    font-size: 1rem !important;
}
</style>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import comments from '../components/Comments'
export default {
    components: {
        navbar_2,
        pie_pagina,



    }
}
</script>