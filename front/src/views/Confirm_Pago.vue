<template>
    <div>
         <navbar_2 style='#border: 5px solid red;'></navbar_2>
        <v-container class='Factura mt-5 mb-5'>
            <v-row style='background-color: rgb(255, 255, 255,0.6);border-radius: 1rem;' elevation='1'>
                <v-col xs='12' sm='12' md='6' lg='6' style='#border: 5px solid red !important;padding: 2.2rem;'>
                    <div class='header_factura '>
                        <section class='mb-1'>
                            <figure>
                                <img src="@/assets/logo.jpg" alt="" style="width: 100%;">
                            </figure>
                            <p>
                                <small>Hotel Nacional</small> <br>
                                <small>Calle Lorem lorem lorem, 9</small> <br>
                                <small>lorem , España</small>
                            </p>
                        </section>
                        <small class='text-muted mt-5'>
                            Guest details - Step 2 of 2
                        </small>
                    </div>
                    <br>
                    <div class='mt-3'>
                        <section style='#padding-left: 1.2rem;#border:5px solid red'>
                            <h4>Reservation data</h4>
                            <small>*All the are mandatary except if otherwise stated</small>
                        </section>
                        <form class='mt-5' action="">
                            <section class='datos_personales'>
                                <div>
                                    <p>
                                        <v-text-field class='input' label="name" v-model="billingDetails.name" outlined></v-text-field>
                                    </p>
                                    <p>
                                        <v-text-field class='input' label="country" v-model="billingDetails.address.country" outlined></v-text-field>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <v-text-field class='input' label="E-mail" v-model="billingDetails.email" outlined></v-text-field>
                                    </p>
                                    <p>
                                        <vue-tel-input-vuetify class='input' v-model="billingDetails.phone" label="Phone"  style='#border:4px solid red !important' outlined></vue-tel-input-vuetify>
                                    </p>
                                </div>
                                <div>
                                    <v-text-field class='input' label="Company (optional)" outlined></v-text-field>
                                </div>
                            </section>
                            <section class='datos_tarjetas'>
                                <v-card style='margin: 0 !important;padding: 0 !important;background-color: rgb(255, 255, 255,0.4) !important;' elevation="1">
                                    <v-card-title class='d-flex' style='margin: 0 !important;padding: 0 !important;#border:5px solid blue'>
                                        <p class='title_card' style='#border: 5px solid black;width: 50%;'>&nbsp;&nbsp;&nbsp;Credit / debit card</p>
                                        <p class='text-end' style='#border:4px solid red;width: 50%;'><img src="@/assets/Credito.png" alt="">&nbsp;&nbsp;&nbsp;</p>
                                    </v-card-title>
                                    <v-card-text>
                                        It will be debited from your card sometime before your arrival
                                        <div class='mt-3' fluid>
                                            <div class='mt-5' fluid>
                                                <label for="card-number" >Credit Card</label>
                                                <div id="card-number" class="tarjeta"></div>                                                
                                            </div>
                                            <v-row class='mt-4' style='#border:5px solid red'>
                                                <v-col cols="6">
                                                    <!-- <v-text-field class='input' label="Cardholder name" placeholder="Cardholder name" append-icon="mdi-credit-card-lock" outlined></v-text-field> -->
                                                    <label for="card-expiry">Expiry date</label>
                                                    <div id="card-expiry" class="tarjeta"></div>
                                                </v-col>
                                                <br>
                                                <v-col cols="6">
                                                    <!-- <v-text-field class='input' label="Expiration" placeholder="Expiration" append-icon="mdi-credit-card-search" outlined></v-text-field> -->
                                                    <label for="card-cvc">cvc</label>
                                                    <div id="card-cvc" class="tarjeta"></div>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </section>
                            <br>
                            <section class='comentarios'>
                                <v-textarea height='140px' outlined name="input-7-4" label="Comments" placeholder="We will try to handle your requests ,  but we cannot always guarentee it"></v-textarea>
                            </section>
                            <section style='#border: 5px solid red;padding: 0 !important;margin: 0 !important'>
                                <terminos style='padding: 0 !important;margin: 0 !important;#border:5px solid black'>
                                </terminos>
                            </section>
                        </form>
                    </div>
                </v-col>
                <v-col xs='12' sm='12' md='6' lg='6' class='check_info' style='#border:5px solid blue;padding: 1.5rem;'>
                    <v-container class='check_container' fluid>
                        <v-card style='#border: 5px solid red;padding: 2rem;' elevation='0'>
                            <div class='header_check'>
                                <label>
                                    <small>Checkin</small>
                                    <p>{{$route.query.start}}</p>
                                </label>
                                <label style='#border: 5px solid green;padding: 0 !important;margin: 0 !important;display: flex;justify-content: center;margin-left: 1rem;margin-right: 1rem;'>
                                    <v-icon style='font-size: 2.5rem !important;#border: 5px solid green;padding: 0 !important;margin: 0 !important;margin: auto !important;'>
                                        mdi-arrow-right-thin
                                    </v-icon>
                                </label>
                                <label>
                                    <small>Checkout</small>
                                    <p>{{$route.query.end}}</p>
                                </label>
                            </div>
                            <div class='text-end mt-5'>
                                <small>Reservation Total</small>
                                <h2>
                                    € {{room.precio}}
                                </h2>
                                <small>(Taxes included)</small>
                            </div>
                            <v-container class='d-flex mt-5'>
                                <figure style='width: 150px;margin-right: 1.5rem;'><img src="@/assets/cuarto_1.webp" alt="" width="100%"></figure>
                                <section>
                                    <small>1 room of the following type</small><br>
                                    <small v-if="room.tipo_habitacion=='doble'">Double room</small><br>
                                    <small v-if="room.tipo_habitacion=='individual'">Single room</small><br>
                                    <small v-if="room.tipo_habitacion=='familiar'">Family room</small><br>
                                    <small>{{room.personas}} adults</small>
                                </section>
                            </v-container>
                            <div class='text-end'>
                                <p class='mt-5'>
                                    <v-text-field class='input' label="Code Prome" placeholder="Code Prome" append-icon="mdi-gift-open" outlined></v-text-field>
                                </p>
                            </div>
                            <div class='text-end'>
                                <v-btn class='btn_form' elevation="2" @click="HandleSeparateCard" :loading="loading" x-large style='background-color:#6c95e1 !important;color: white;'>Book Now
                                    <v-icon class='ml-2'>
                                        mdi-arrow-right-thin
                                    </v-icon>
                                </v-btn>
                            </div>
                        </v-card>
                        <br><br>
                        <hr>
                        <div class='mt-5'><br>
                            <br>
                            <br>
                            <v-container class='terminos_check mt-5'>
                                <section>
                                    <h4>Paymet</h4>
                                    <p>Prepayment required: 100% Credit Card</p>
                                </section>
                                <section>
                                    <h4>Cancellation:</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam earum possimus inventore nobis atque praesentium facere voluptatum vero id enim illum dolorem excepturi necessitatibus fugit nemo iusto quam, sit!</p>
                                </section>
                                <section>
                                    <h4>Privacy:</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Iste odio, veniam animi porro accusamus eveniet esse voluptates ea qui laboriosam aut asperiores quidem id dolor optio possimus rerum ratione, enim.
                                    </p>
                                </section>
                                <h4>
                                </h4>
                            </v-container>
                        </div>
                    </v-container>
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
    </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
import { mapState } from "vuex";
import terminos from '../components/terminos_condiciones.vue'
import navbar_2 from '../components/Navbar_2.vue'
export default {
    components: {
        terminos,navbar_2
    },
    data() {
        return {
            loading:true,
            elements:null,
            stripe:null,
            billingDetails:{
                address:{
                    state:null,
                    postal_code:null,
                },
                email: null,
                name: null,
                phone: null
            },
            phone: null,
            room:{}

        }
    },
    mounted() {
        this.chargeStripe()
        this.getHabitacion()
        
    },
    methods: {
        async chargeStripe(){
        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE);
        const stylecard = {
            base: {
                'fontSize': '18px',
                'color': '#000000',
                
            }
        };
        this.elements = this.stripe.elements();
        const cardNumber = this.elements.create("cardNumber",{'style':stylecard,showIcon: true,});
        const cardExpiry = this.elements.create("cardExpiry",{'style':stylecard});
        const cardCvc = this.elements.create("cardCvc",{'style':stylecard});
        cardNumber.mount("#card-number");
        cardExpiry.mount("#card-expiry");
        cardCvc.mount("#card-cvc");

        this.loading=false
      },
      async HandleSeparateCard(){
        if (this.loading) return;
        this.loading = true;
        const cardElement = this.elements.getElement("cardNumber");
        const {error,paymentMethod} = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: this.billingDetails
        });
        if (!error) {
          const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/checkout", {
          method: 'POST',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify({id:paymentMethod.id, amount:200*100})  
          },);
          const { data, error } = await res.json();
          if (error) {
            this.$root.vtoast.show({message: error})
          }
          console.log(paymentMethod);
          console.log(data,error);
          if (data=="ok") {
              this.$root.vtoast.show({message: "compra realizada correctamente"})
          }
          this.loading=false
        }else{
          this.$root.vtoast.show({message: error.message})
          this.loading=false
        }
      },
      async getHabitacion() {
            try {
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones/disponibles/"+this.$route.params.id, {
                headers: {"Content-Type": "application/json",}});
                const { data, error } = await res.json();
                if (error) return
                this.room=data
                console.log(this.room);
                // console.log(this.habitaciones);
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>
<style scoped>
.tarjeta{
    padding: 0.5rem;
    #margin: 1rem;
    #border: 5px solid red;
    border-bottom: 1px solid black;
}
h4,.title_card,.header_check {
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}

/*
.Factura {
     #border-radius: 5rem !important; 
     #border: 5px solid red !important; 
}

.Factura div {
     #border: 5px solid black; 
}

.header_factura {
     #padding: 0.4rem; 
     #border: 5px solid blue !important; 
}*/

.header_factura section {
    /* #border: 5px solid purple !important; */
    display: flex;
}



.header_factura section figure {
    width: 50%;
    /* #border: 5px solid black !important; */
}

.header_factura section figure img {
    width: 70px !important;
}

.header_factura section p {
    margin: 0 !important;

    text-align: end;
    width: 50%;
    /* #border: 5px solid black !important; */

}

.header_factura section p small {
    position: relative;
    /* #left: 37%; */
    /* #border: 5px solid red; */
}
/*
.datos_personales {
     #border: 5px solid purple; 
     #padding: 1rem; 
}*/

.datos_personales div {
    position: relative;

    padding: none !important;
    margin: none !important;
    display: flex;
    /* #border: 5px solid blue; */
    width: 100% !important;
}

.datos_personales div p {
    /*#padding: 0 !important;
    #margin: 0 !important;
    #margin-left: 1rem !important;
     #border: 1px solid red; */
    width: 50% !important;
    margin-right: 0.5rem;

}

.datos_tarjetas {
    margin: 0 !important;
    padding: 0 !important;
    /* #border: 5px solid red !important; */
}

.datos_tarjetas p {
    /* #border: 5px solid red !important; */
    width: 100%;
}
/*
.datos_tarjetas h6 {
     #border: 5px solid blue;
} */

.datos_tarjetas h6 p {
    /* #border: 5px solid black; */
    width: 90% !important;
    margin: 0 !important;
    padding: 0 !important;
    margin-right: 0.5rem !important;
}
/*
.check_info {
     #background-color: #f9f9f9; 
    #border: 6px solid purple !important;
}*/

.check_container {
    padding: 1rem !important;
    /* #border: 5px solid black; */
}
/*
.check_container div {
     #border: 5px solid black; 
}*/

.header_check {
    display: flex;
    /* #border: 5px solid blue !important; */
}

.header_check h3 {
    border: 5px solid red !important;
    padding: 0 !important;
    margin: 0 !important;
}

.header_check h3 small,
.header_check h3 p {
    /* #border: 5px solid red !important; */
    padding: 0 !important;
    margin: 0 !important;
}

.terminos_check p {
    padding: 1rem;
    text-align: justify;
}

/*
input{
    border: 5px solid red !important;
}

/*
.header_factura h1 {
    width: 50%;
    border: 5px solid yellow;
    font-size: 1rem !important;
    padding: 0 !important;
    margin: 0 !important;
}

.header_factura h1 small {
    border: 1px solid red;
    padding: 0 !important;
    margin: 0 !important;
}
*/
</style>
