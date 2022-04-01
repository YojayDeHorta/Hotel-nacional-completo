<template>
    <div fluid>
        <navbar_2 />
        <div class='contenedor_title mb-5'>
            <h2 class='text-center'>Book your stay</h2>
        </div>
        <v-container class='Marco_Secundario' fluid>
            <v-row class='row_container'>
                <v-col class='column table_book' cols='12' sm='12' md='7' lg='7' style='#border:5px solid yellow !important'>
                    <v-container class='container_opciones' style='#border: 6px solid red !important;'>
                        <v-row class='row_opciones'>
                            <v-col cols='6'>
                                <br>
                                <div class='div_select' style='padding: 0 !important;margin: 0 !important;display: flex;justify-content: flex-start;'>
                                    <strong class='strong_type_room'>Type of room</strong>
                                    <!--
                                    <select class="theme-construction mt-5">
                                        <option>So many options2</option>
                                        <option>...</option>
                                    </select>
                                -->
                                    
                                    <select style='border:2px solid grey' class='form-select text-start mb-5 mt-5' v-model="Reserva">
                                        <option class='mb-5 mt-5' v-for="habitacion in items_room" v-bind:value="habitacion">
                                            {{ habitacion.name }}
                                        </option>
                                    </select>
                                
                                </div>
                            </v-col>
                            <v-col class='text-end' cols='6'>
                                <div>
                                    <v-btn style='background-color:black;color:white;margin: auto !important' elevation="2" x-large>{{Reserva.price}}</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container class='container_table'>
                        <div class='row_table' id='row_table_1'>
                            <h3>Check In</h3>
                            <p><input type="time" value="12:00" disabled></p>
                            <p>
                                <input type="date" min="2017-08-15" max="2018-08-26" step="7">
                            </p>
                        </div>
                        <div class='row_table' id='row_table_2'>
                            <h3>Check Out</h3>
                            <p><input type="time" value="14:00" disabled></p>
                            <p><input type="date" min="2017-08-15" max="2018-08-26" step="7"></p>
                        </div>
                        <div class='row_table' id='row_table_3'>
                            <h3>Guest</h3>
                            <p style='padding: 1.7rem !important'>{{Reserva.person}}</p>
                            <p style='padding: 0 !important;'>
                                <v-text-field class='text_outline' height='10px' outlined label="Promo Code" append-icon="mdi-gift" dark></v-text-field>
                            </p>
                        </div>
                    </v-container>
                    <v-col class='text-end' cols='12'>
                        <v-btn class='btn_form' style='background-color:#6c95e1 !important;color: white;' elevation="2" x-large>Confirm</v-btn>
                    </v-col>
                </v-col>
                <v-col class='column d-flex justify-center' cols='12' sm='12' md='5' lg='4'>
                    <img :src='Reserva.img_url' alt="" style='margin: auto;width: 100%;'>
                </v-col>
            </v-row>
        </v-container>
        <pie_pagina />
    </div>
</template>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import comments from '../components/Comments'




export default {

    data() {

        return {
            select: '',
            /*  RESERVA   */
            time_start: '',
            time_end: '',
            check_out: '',
            check_in: '',
            /* RESERVA   */


            Reserva: { "name": 'Habitacion #1', "price": "$100", "img_url": require('@/assets/book_1.jpg'), 'person': '3' },

            items_room: [{
                    id: '001',
                    name: 'Habitacion #1',
                    price: '$100',
                    img_url: require('@/assets/book_1.webp'),
                    promo_code: '',
                    person: 3
                },
                {
                    id: '002',
                    name: 'Habitacion #2',
                    price: '$200',
                    img_url: require('@/assets/cuarto_1.jpg'),
                    promo_code: '',
                    person: 2
                },

                {

                    id: '003',
                    name: 'Habitacion #3',
                    price: '$300',
                    img_url: require('@/assets/cuarto_4.jpg'),
                    promo_code: '',
                    person: 5
                }
            ],


            items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

        }

    },

    components: {
        navbar_2,
        pie_pagina,

    },


}
</script>
<style scoped>
/*----------------------------------*/

:root {
    --radius: 2px;
    --baseFg: dimgray;
    --baseBg: white;
    --accentFg: #006fc2;
    --accentBg: #bae1ff;
}

.theme-pink {
    --radius: 2em;
    --baseFg: #c70062;
    --baseBg: #ffe3f1;
    --accentFg: #c70062;
    --accentBg: #ffaad4;
}

.theme-construction {
    --radius: 0;
    --baseFg: white;
    --baseBg: black;
    #--accentFg: black;
    --accentBg: orange;
}

select {
    font: 400 12px/1.3 sans-serif;
    -webkit-appearance: none;
    appearance: none;
    color: var(--baseFg);
    border: 1px solid var(--baseFg);
    line-height: 1;
    outline: 0;
    padding: 0.65em 2.5em 0.55em 0.75em;
    border-radius: var(--radius);
    background-color: var(--baseBg);
    background-image: linear-gradient(var(--baseFg), var(--baseFg)),
        linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
        linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
        linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
    background-position: right 20px center, right bottom, right bottom, right bottom;
}

select:hover {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)),
        linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
        linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
        linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
}

select:active {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)),
        linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
        linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
        linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
    color: var(--accentBg);
    border-color: var(--accentFg);
    background-color: var(--accentFg);
}


/*----------------------------------*/

.contenedor_title {
    background-color: #2c3a52;
    color: #c9cded;
}
.contenedor_title h2 {
    padding: 2rem;
}


.form-select{
    position: relative;
    right: 6rem;
    top: 0.5rem;
    #border: 1rem grey !important;
}

.Marco_Secundario {
    width: 100%;
    #border: 5px solid red !important;
    background-image: url('@/assets/book_fondo.png');
    background-size: cover;
}

.theme-construction{
    position: relative;
    right:6rem !important ;
    top: 1rem;
    #border: 5px solid red;
}


.strong_type_room{
    position: relative;
    top: -0.5rem !important;
    padding: 0 !important;
    margin: 0 !important;
    #border: 4px solid black;
}

/*
.div_select select {
    padding: 0.5rem !important;
    border-radius: 1rem;
    color: #6c95e1 !important;
    font-weight: bold !important;
    border: 0 !important;
    width: 50%;
}*/

.row_container {
    display: flex;
    flex-direction: row-reverse;
    background-color: rgb(233, 238, 248, 0.8);
    width: 100%;
    #border: 5px solid black;
    margin: auto;
}

.container_table {
    background-color: rgb(44, 58, 82, 1) !important;
    #border: 4px solid red !important;
    display: flex;
    flex-wrap: wrap;
    padding: 0 !important;

}

.container_table div {
    text-align: center !important;
    width: 33.3%;
    #border: 1px solid black !important;
    color: white !important;
}




.container_table div h3,
.container_table div p {
    border: 1px solid black !important;
    #margin-bottom: 0.5rem;
    padding: 1rem;
}


.container_table div p {
    margin: 0 !important;
    padding: 0 !important;
    padding: 1.5rem !important;
}

.container_table input {
    width: 100%;
    text-align: center !important;
    color: white !important;
    border: none !important;
}


input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
    color: white !important;
    opacity: 1;
    cursor: Pointer;
    font-size: 1.5rem !important;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
    color: white !important;
    opacity: 1;
    cursor: Pointer;
    font-size: 1.5rem !important;
}

.text_outline {
    position: relative;
    top: 1rem !important;
    margin: auto !important;
    width: 80% !important;
    border: none !important;
    height: 100% !important;
}

/*
.v-input__control {
    border: 4px solid red !important;
}


.v-input__control {
    border: 4px solid red !important;
}



/*
.text_outline {
    border: 0px !important;
    #border: 5px solid red !important;
    #height: 40px !important;
    width: 100% !important;
    height: auto !important;
}

/**/
@media (max-width: 670px) {


    .container_table {
        width: 80% !important;
    }

    .container_table div {
        #border: 5px solid purple !important;
    }

    .container_table #row_table_1,
    .container_table #row_table_2 {
        width: 100% !important;
    }

    .container_table #row_table_3 {
        width: 100% !important;
        margin: auto;
    }




}

/*-------------------------------------------------------*/
</style>