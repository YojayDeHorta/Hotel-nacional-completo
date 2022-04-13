<template>
    <v-container class='container_navbar_1' fluid>
        <v-row class='row_navbar_1'>
            <v-col class='col_navbar text-end' cols='12' md='7' lg='7'>
                <!--
                <h4 class=''>Last COVID19 update - Security measures</h4>
            -->
                <h4>{{ $t('navbar_1_title') }}</h4>
                <!--
                <h1>{{ $t('welcome',{name:"TechvBlogs"}) }}</h1>
            -->
            </v-col>
            <v-col class='col_navbar text-end' cols='12' md='5' lg='5'>
                <h5> {{ $t('navbar_1_redes') }}
                    <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                        <v-icon color='white'>
                            mdi-instagram
                        </v-icon>
                    </v-btn>
                    <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                        <v-icon color='white'>
                            mdi-facebook
                        </v-icon>
                    </v-btn>
                    <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                        <v-icon color='white'>
                            mdi-twitter
                        </v-icon>
                    </v-btn>
                </h5>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {

}
</script>
<style scoped>
h4,
h5 {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem !important;
}

.container_navbar_1 {
    background-color: #2c3a52;
    color: white !important;
    margin: 0;
}

.container_navbar_1 .col_navbar {
    margin: 0 !important;
    padding: 0 !important;
}

.container_navbar_1 h4 {
    position: relative;
    left: 3%;
    margin-top: 0.7rem !important;
}


@media (max-width: 960px) {

    .col_navbar {
        margin-top: 0.5rem;
        text-align: center !important;
    }

    .col_navbar h4 {
        text-align: center !important;
        left: 0 !important;
    }

    .col_navbar h5 {
        text-align: center !important;
    }

}
</style>