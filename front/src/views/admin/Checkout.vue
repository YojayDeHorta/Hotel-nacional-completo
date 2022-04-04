<template>
  <div>
    <form @submit.prevent="HandlePayPayment">
    <div class="nes-field">
          <label for="email_field">Credit Card</label>
          <div id="stripe-element-mount-point" class="nes-input" />
    </div>
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
      fontFamily: "Press Start 2P",
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
        stripe:null
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

        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/checkout/create-payment-intent", {
          method: 'POST',
          headers: {"Content-Type": "application/json","auth-token": this.token },
          body: JSON.stringify({amount:200*100})  
          },);
        const { clientSecret, error } = await res.json();
        console.log(clientSecret);
        const appearance = {
          theme: 'stripe',
        };
        this.elements = this.stripe.elements({ appearance, clientSecret });
        const element = this.elements.create("payment");
        element.mount("#stripe-element-mount-point");
        this.loading=false
      },
    /*async HandlePayCard(){
        if (this.loading) return;
        this.loading = true;
        const cardElement = this.elements.getElement("card");
        const {error,paymentMethod} = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          // billing_details: billingDetails
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
      async HandlePayPayment(){
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
      }

    },

  }
</script>
