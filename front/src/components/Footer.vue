<template>
    <div class='footer'>
        <v-container class='container_footer' fluid>
            <div class='columna img-col mb-5'>
                <v-img class='' src='@/assets/logo.jpg' style='width: 100px;'></v-img>
            </div>
            <div class='columna about mb-5'>
                <h3>{{ $t('footer_about') }}</h3><br>
                <p>{{ $t('footer_about_1') }}</p>
                <p>{{ $t('footer_about_2') }}</p>
                <p>{{ $t('footer_about_3') }}</p>
                <p>{{ $t('footer_about_4') }}</p>
                <p>{{ $t('footer_about_5') }}</p>
            </div>
            <div class='columna booking mb-5'>
                <h3>{{ $t('footer_booking') }}</h3> <br>
                <p>{{ $t('footer_booking_1') }}</p>
                <p>{{ $t('footer_booking_2') }}</p>
                <p>{{ $t('footer_booking_3') }}</p>
                <p>{{ $t('footer_booking_4') }}</p>
                <p>{{ $t('footer_booking_5') }}</p>
            </div>
            <div class='columna contact mb-5'>
                <h3>{{ $t('footer_contacts') }}</h3><br>
                <p>
                    {{ $t('footer_contacts_1') }}
                </p>
            </div>
            <div class='columna redes mb-5' id='social' fluid>
                <h3>Social</h3> <br>
                <h4>
                    <p>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-instagram
                            </v-icon>
                        </v-btn>
                    </p>
                    <p>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-twitter
                            </v-icon>
                        </v-btn>
                    </p>
                    <p>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-facebook
                            </v-icon>
                        </v-btn>
                    </p>
                </h4>
            </div>
        </v-container>
        <br>
        <hr class='derechos_hr' style='background: grey;width: 94%;margin: auto;'>
        <v-row class='derechos_autor' style="padding: 1.5rem;">
            <h5 class='text-center' style='margin: auto;padding: 1rem;'>{{ $t('footer_reserved') }}</h5>
        </v-row>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'pie_pagina'
}
</script>
<style scoped>
h3,
h5 {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}

p {
    font-weight: initial;
}


ul {
    padding: 0 !important;
    display: flex;
    justify-content: center;
}

ul li {
    list-style: none;
    display: inline;
    #margin-right: 0.5rem;
    #margin: auto;

}

p {

    color: white !important;
    font-size: 0.9rem !important;
}


.footer {
    color: white !important;
    background-color: #2C3A52;
    #border: 5px solid black;
    padding: 0 !important;
}

.container_footer {
    margin: auto;
    width: 94%;
    padding: 2rem !important;
    #border: 5px solid black !important;
    display: flex;
    flex-wrap: wrap;
}


.container_footer .columna {
    #border: 5px solid red;
    width: 20%;
    text-align: start;
}


.container_footer .redes {
    #border: 5px solid purple;
}

.container_footer .redes h4 {
    #border: 5px solid blue;
    display: flex;
    padding: 0 !important;
    justify-content: center;
}

.container_footer .redes h3 {
    position: relative;
    right: 9%;
    text-align: center !important;
}



.container_footer .redes h4 p {
    padding: 0 !important;
    margin: 0 !important;
}

@media (max-width: 800px) {


    .container_footer {
        flex-direction: row;
    }

    .container_footer .columna {
        #border: 5px solid red;
        width: 50%;
        text-align: start;
    }

    .about , .contact{
        text-align: end !important;
        #margin-top: 5rem;
    }

    .booking , .contact{
        margin-top: 3rem;
    }

    .redes{
        margin-top: 3rem;
        text-align: center !important;
        width: 100% !important;
    }

    .redes h3{
        left: 0;
        right: 0;
    }


}


</style>