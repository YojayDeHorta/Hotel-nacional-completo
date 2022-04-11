<template>
  <div>
    <form @submit.prevent="HandleSeparateCard">
    <div class="nes-field">
          <label for="email_field">Credit Card</label>
          <div id="stripe-element-mount-point" class="nes-input" />
    </div>
    <v-row>
      <v-col cols="4">
        <v-text-field label="Nombre" v-model="billingDetails.name"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Correo electronico" v-model="billingDetails.email"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="telefono" v-model="billingDetails.phone"></v-text-field>
      </v-col>
    </v-row>       
          
    <v-row>
      <v-col cols="4">
        <label for="card-number" >Credit Card</label>
        <div id="card-number" class="tarjeta"></div>
      </v-col>
      <v-col cols="4">
        <label for="card-expiry">Expiry date</label>
        <div id="card-expiry" class="tarjeta"></div>
      </v-col>
      <v-col cols="4">
        <label for="card-cvc">cvc</label>
        <div id="card-cvc" class="tarjeta"></div>
      </v-col>
    </v-row>
    <v-row>
      
      
    </v-row>
    <v-btn depressed color="primary" type="submit" :loading="loading">
      Buy
    </v-btn>
    </form>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import { mapState } from "vuex";

const style = {
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "800",
      fontFamily: "Roboto",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "green"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red"
    }
  }
};
  export default {
    components: {

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
      }
    },
    computed: {
    ...mapState(["token"]),
     
    },
    mounted() {
        this.chargeStripe()
        
    },
    methods: {
      async chargeStripe(){
        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE);

        /*const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/checkout/create-payment-intent", {
          method: 'POST',
          headers: {"Content-Type": "application/json","auth-token": this.token },
          body: JSON.stringify({amount:200*100})  
          },);
        const { clientSecret, error } = await res.json();
        console.log(clientSecret);
        const appearance = {
          theme: 'stripe',
        };*/
        const stylecard = {
            base: {
                'fontSize': '18px',
                'color': '#000000',
                'fontFamily': 'Roboto'
            }
        };
        this.elements = this.stripe.elements();
        const cardNumber = this.elements.create("cardNumber",{'style':stylecard,showIcon: true,});
        const cardExpiry = this.elements.create("cardExpiry",{'style':stylecard});
        const cardCvc = this.elements.create("cardCvc",{'style':stylecard});
        cardNumber.mount("#card-number");
        cardExpiry.mount("#card-expiry");
        cardCvc.mount("#card-cvc");
        // this.elements = this.stripe.elements({ appearance, clientSecret });
        // const element = this.elements.create("payment");
        // element.mount("#stripe-element-mount-point");

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
          headers: {"Content-Type": "application/json","auth-token": this.token },
          body: JSON.stringify({id:paymentMethod.id, amount:200*100})  
          },);
          const { data, error } = await res.json();
          if (error) {
            this.$root.vtoast.show({message: error})
          }
          console.log(paymentMethod);
          console.log(data,error);
          this.loading=false
        }else{
          this.$root.vtoast.show({message: error})
        }
      }
    /*async HandlePayCard(){
        if (this.loading) return;
        this.loading = true;
        const cardElement = this.elements.getElement("card");
        const {error,paymentMethod} = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          // billing_details: this.
        });
        if (!error) {
          const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/checkout", {
          method: 'POST',
          headers: {"Content-Type": "application/json","auth-token": this.token },
          body: JSON.stringify({id:paymentMethod.id, amount:200*100})  
          },);
          const { data, error } = await res.json();

          
          console.log(paymentMethod);
          console.log(data,error);
          this.loading=false
        }
      }*/
      /*async HandlePayPayment(){
        if (this.loading) return;
        this.loading = true;
        let elements=this.elements
        const { error } = await this.stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:8080/admin.html",
          },
        });
        if (error.type === "card_error" || error.type === "validation_error") {
          console.log(error.message);
        } else {
          console.log("An unexpected error occured.");
        }
      }*/

    },

  }
</script>
<style >
  .tarjeta{
    border-bottom: 1px solid black;
  }
</style>