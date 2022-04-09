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
                                    <select class='form-select mb-5 mt-5' v-model="Reserva">
                                        <option class='selected mb-5 mt-5' v-for="habitacion in items_room" :key="habitacion._id"  v-bind:value="habitacion" style='border: 1px solid red !important;'>
                                            <span class='mt-5 mb-5' style='border: 5px solid red !important'>{{ habitacion.name }} ({{habitacion.tipo_habitacion}})</span>
                                        </option>
                                    </select>
                                </div>
                            </v-col>
                            <v-col class='text-end' cols='6'>
                                <div>
                                    <v-btn style='background-color:black;color:white;margin: auto !important' elevation="2" x-large>{{Reserva.precio}}€</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container class='container_table'>
                        <div class='row_table' id='row_table_1'>
                            <h3>Check In</h3>
                            <p><input type="time" value="12:00" disabled></p>
                            <p>
                                <date-picker v-model="date " type="date" range :disabled-date="disabledRange"></date-picker>
                            </p>
                        </div>
                        <div class='row_table' id='row_table_2'>
                            <h3>Check Out</h3>
                            <p><input type="time" value="14:00" disabled></p>
                            <p><input type="date" step="7"></p>
                        </div>
                        <div class='row_table' id='row_table_3'>
                            <h3>Guest</h3>
                            <p style='padding: 1.7rem !important'>{{Reserva.personas}}</p>
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
                    <img src='@/assets/book_1.webp' alt="" style='margin: auto;width: 100%;'>
                </v-col>
            </v-row>
        </v-container>
        <v-container class='footer_book' fluid style='margin: auto;width: 92%;'>
            <div>
                <img src="@/assets/logo.jpg" alt="" style='width: 70px;'>
            </div>
            <hr>
            <div style='display: flex;' class='mt-5'>
                <p style="width: 50%;">© 2022 Hotel Nacional | All Rights Reserved</p>
                <p style="width: 50%;text-align: end;">Terms and conditions Privacy policy Security Careers</p>
            </div>
        </v-container>
        <!--
        <pie_pagina />
    -->
    </div>
</template>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import comments from '../components/Comments'
import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';



export default {
    components: {
        navbar_2,
        pie_pagina,
        DatePicker
    },
    data() {

        return {
            select: '',
            /*  RESERVA   */
            time_start: '',
            time_end: '',
            check_out: '',
            check_in: '',
            date:[],
            /* RESERVA   */


            /*Reserva: { "name": 'Habitacion #1', "price": "$100", "img_url": require('@/assets/book_1.jpg'), 'person': '3' },

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
            ],*/
            items_room:[],
            Reserva:{},
            fechas:[],

        }

    },
    created() {
        this.getHabitaciones()
        this.getFecha()
    },
    methods: {
        async getHabitaciones() {
            try {
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones/disponibles", {
                headers: {
                    "Content-Type": "application/json",
                },
                });
                const { data, error } = await res.json();
                if (error) {
                // this.notificacion(error)
                return;
                }
                this.items_room=data
                if (this.items_room.length> 0) {
                    this.Reserva=this.items_room[0]
                }
                console.log(data);
                // console.log(this.habitaciones);
            } catch (error) {
                console.log(error);
            }
        },
        disabledRange: function (date) {
            let flag=false
            if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true
            
            this.fechas.forEach(element => {
                var minDate = new Date(element.from).setHours(0, 0, 0, 0);
                var maxDate =  new Date(element.to).setHours(0, 0, 0, 0);
                if (date >= minDate && date <= maxDate ){
                flag=true
                }
            });
            return flag
        },
        
        async getFecha() {
            try {
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/fechanothabitable", {
                headers: {
                    "Content-Type": "application/json"
                },
                });
                const { data, error } = await res.json();
                if (error) {
                console.log(error);
                return;
                }
                this.fechas=JSON.parse(JSON.stringify(data))
            } catch (error) {
                console.log(error);
            }
        },

    },
}
</script>
<style scoped>
/*----------------------------------*/


select {
    outline: none !important;
    border: none !important;
    border-bottom: 1px solid #2c3a52 !important;
    background-image: url("@/assets/arrow-down.png");
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center right;
    width: 50%;
    padding-left: 0.4rem;
    padding-right: 1rem;
    padding-top: 1rem;
    cursor:pointer;

}

select option{
    padding: 50px !important;
}


/*----------------------------------*/



/*
.Marco_Secundario {
     #border: 5px solid red;
} */

/*
.column {
     #border: 5px solid black; 
}*/


.row_container {
    display: flex;
    justify-content: center;
    /* #margin: auto !important; */
}



.contenedor_title {
    background-color: #2c3a52;
    color: #c9cded;
}

.contenedor_title h2 {
    padding: 2rem;
}


.form-select {
    position: relative;
    right: 6rem;
    top: 0.5rem;
    /* #border: 1rem grey !important; */
}

.Marco_Secundario {
    width: 100%;
    /* #border: 5px solid red !important; */
    background-image: url('@/assets/book_fondo.png');
    background-size: cover;
}

.theme-construction {
    position: relative;
    right: 6rem !important;
    top: 1rem;
    /* #border: 5px solid red; */
}


.strong_type_room {
    position: relative;
    top: -0.5rem !important;
    padding: 0 !important;
    margin: 0 !important;
    /* #border: 4px solid black; */
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
    /* #border: 5px solid black; */
    margin: auto;
}

.container_table {
    background-color: rgb(44, 58, 82, 1) !important;
    /* #border: 4px solid red !important; */
    display: flex;
    flex-wrap: wrap;
    padding: 0 !important;

}

.container_table div {
    text-align: center !important;
    width: 33.3%;
    /* #border: 1px solid black !important; */
    color: white !important;
}




.container_table div h3,
.container_table div p {
    border: 1px solid black !important;
    /* #margin-bottom: 0.5rem; */
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
.footer_book {
    border: 5px solid red !important; 
}*/






@media (max-width: 670px) {


    .container_table {
        width: 80% !important;
    }

    /*.container_table div {
         #border: 5px solid purple !important; 
    }*/

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