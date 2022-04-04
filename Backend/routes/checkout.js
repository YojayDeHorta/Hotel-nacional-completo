const router=require('express').Router()
const checkoutController= require("../controllers/checkout")
const validateToken= require("../controllers/validate-token")
//checkout
router.post('/',validateToken, checkoutController.stripeCheckout)
router.post('/create-payment-intent',validateToken, checkoutController.createPaymentIntent)
module.exports = router;