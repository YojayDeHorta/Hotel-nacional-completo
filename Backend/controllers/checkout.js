const Stripe=require("stripe")
const stripe=new Stripe(process.env.STRIPE)
exports.stripeCheckout= async(req,res)=>{
    try {
        const {id,amount}=req.body
        const payment=await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description:"silla bonita",
            payment_method: id,
            confirm:true
        })

        res.json({
            error: null,
            data: 'ok'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.raw.message})
    }
}
exports.createPaymentIntent=async (req, res) => {
    const { items } = req.body;
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 20000,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log(paymentIntent.client_secret);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }