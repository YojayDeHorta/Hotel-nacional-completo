<template>
    <v-container class='container' fluid>
        <div>
            <h3>
                <strong>{{ $t('anuncio_guests') }}</strong>
                <p>
                    10
                </p>
            </h3>
        </div>
        <div>
            <h3>
                <strong>{{ $t('anuncio_chekin') }}</strong>
                <p>
                    28 Feb
                </p>
            </h3>
        </div>
        <div>
            <h3>
                <strong>{{ $t('anuncio_checkout') }}</strong>
                <p>
                     28 Marz
                </p>
            </h3>
        </div>
        <div>
            <h3 class='promo'>
                <strong >{{ $t('anuncio_promo') }}</strong>
                <!--
                <p>
                    PROMO CODE
                </p>
            -->
            </h3>
        </div>
        <div>
            <h3 class='h3_book' style='text-align:center !important;background-color: #5d85d0 !important'>
                  <v-btn to='/book' class='btn_li' elevation="0" large x-large x-small style='background-color: #5d85d0 !important;color:white !important;width: 100%;'>{{ $t('anuncio_book') }} <v-icon>
                        mdi-arrow-right-thin
                    </v-icon>
                </v-btn>
            </h3>
        </div>
    </v-container>
</template>
<script>
export default {

}
</script>
<style scoped>


    .promo{
        #border:4px solid red;
       display: flex;
       justify-content: center;
    }

    .promo strong{
        margin: auto;
    }


    h3{
        font-size: 1rem !important;
    }

    p{
        font-weight: initial;
    }


.container {
    #margin: auto !important;
    #width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    top: -7rem;
    #border: 5px solid red !important;
}

.container div {
    width: 15%;
    #height: 100px;
    #border: 5px solid purple;
}

h3 {
    text-align: center !important;
    color: white !important;
    margin-right: 0.2rem;
    background-color: #2c3a52 !important;
    #margin: 0;
    padding: 0.5rem;
    height: 70px;
}



@media (min-width: 701px) and (max-width: 1100px){


    .container{
        top: -15rem;
        flex-direction: row;
    }

    .container div{
        width: 30%;
    }

}


@media(max-width: 700px){


    .container{
        top: -15.5rem;
        flex-direction: row;
    }

    .container div{
        width: 40%;
    }

    .h3_book{
        margin-top: 0.2rem;
        position: relative;
        right: 5.7rem;
        width: 200%;
        #border: 5px solid red;
    }

}

</style>