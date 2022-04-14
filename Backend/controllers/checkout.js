const Stripe=require("stripe")
const Habitacion = require('../models/Habitacion');
const fechaNotAvitable = require('../models/FechaNotAvitable');
const Joi = require('joi');
const stripe=new Stripe(process.env.STRIPE)
const schemaCompra= Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  phone: Joi.string().min(3).max(20).pattern(/^[0-9]+$/).required(),
})
const schemaFecha= Joi.object({
  start: Joi.date().iso().required(),
  end: Joi.date().iso().min(Joi.ref('start')),
  roomId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
})
function getDays(start, end){
  let diffDays=0
  if (start&&end) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(start).setHours(0, 0, 0);
      const secondDate = new Date(end).setHours(0, 0, 0);

       diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }
  return diffDays
}
function checkOnRange(start,end,fechas){
  let flag=false
  if (start==null||end==null) return true
  let now=new Date().setHours(0, 0, 0, 0)
  let startD=new Date(start).setHours(0, 0, 0, 0)
  let endD=new Date(end).setHours(0, 0, 0, 0)
  if(startD < now||endD < now) flag=true
  if (startD>endD) return true
  fechas.forEach(element => {
      var startdate = new Date(element.from.toISOString().substr(0, 10)).setHours(0, 0, 0, 0);
      var enddate =  new Date(element.to.toISOString().substr(0, 10)).setHours(0, 0, 0, 0);
      if ((startD >= startdate && startD <= enddate) ||(startdate >= startD && startdate <= endD)){
          flag=true
      }
  });
  return flag
}
exports.stripeCheckout= async(req,res)=>{
    try {
        const {id,room,billing_details}=req.body

        const { error } = schemaCompra.validate(billing_details);
        if (error) {console.log(error);return res.status(400).json({ error: 'hay un error con sus datos' })}

        const Derror = schemaFecha.validate(room);
        if (Derror.error) {console.log(Derror.error); return res.status(400).json({ error: 'error al buscar habitacion, intente de nuevo mas tarde' })}
        
        const data = await Habitacion.find({_id:room.roomId,estado:"Disponible"});
        if (data.length<=0) res.status(400).json({error:'error buscando habitacion, intente de nuevo'})
        let habitacion=data[0]
        let days=getDays(room.start,room.end)
        let amount=habitacion.precio*days*100

        
        if(amount==0) return res.status(400).json({error:'error interno'})
        const fechas = await fechaNotAvitable.find({});
        // console.log(checkOnRange('2022-04-20','2022-04-21',fechas));
        if(checkOnRange(room.start,room.end,fechas)) return res.status(400).json({error:'error de fechas'})
        const payment=await stripe.paymentIntents.create({
            amount:amount,
            currency: "EUR",
            description:`pago a nombre de ${billing_details.name} por la habitacion: ${habitacion.name}` ,
            payment_method: id,
            confirm:true
        })
        if (payment.status=='succeeded') {
          billing_details.dias_reservados=days
          billing_details.total_reservacion=amount
          let dataHabitacion = await Habitacion.updateOne({_id:room.roomId},{
              usuario:billing_details,
              start:room.start,
              end:room.end,
              estado:'Ocupado',

          })
        }/**/
        res.json({
            error: null,
            data: 'ok'
        })
    } catch (error) {
        console.log(error);
        if (error.raw) res.status(400).json({error:error.raw.message})
        else res.status(400).json({error:'error interno del servidor'})
        
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