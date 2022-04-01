const Joi = require('joi');
const fechaNotAvitable = require('../models/fechaNotAvitable');
const schemaFecha = Joi.object({
    from: Joi.date(),
    to: Joi.date().min(Joi.ref('from')),
})
exports.getFechaNotAvitable= async (req,res)=>{
    try {
        const data = await fechaNotAvitable.find({});
        res.json({error: null,data: data})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.addFechaNotAvitable= async (req,res)=>{
    try {
        const { error } = schemaFecha.validate(req.body)
        if (error) return res.status(400).json({error: error.details[0].message})
        
        const fecha = new fechaNotAvitable(req.body);
        const savedFecha = await fecha.save();
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.deleteFechaNotAvitable= async (req,res)=>{
    try {

        const data = await fechaNotAvitable.deleteOne({_id:req.body.id});
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
