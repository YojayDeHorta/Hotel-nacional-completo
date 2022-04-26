const Joi = require('joi');
const cupon = require('../models/cupon');
const schemaCupon = Joi.object({
    nombreCupon: Joi.string().min(3).max(255).required(),
    porcentaje: Joi.number().min(1).max(100).required(),
    limite: Joi.number().min(1).required(),
})
exports.getCupon= async (req,res)=>{
    try {
        const data = await cupon.find({});
        res.json({error: null,data: data})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.addCupon= async (req,res)=>{
    try {
        const { error } = schemaCupon.validate(req.body)
        if (error) return res.status(400).json({error: error.details[0].message})
        
        const fecha = new cupon(req.body);
        const savedCupon = await fecha.save();
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.deleteCupon= async (req,res)=>{
    try {

        const data = await cupon.deleteOne({_id:req.body.id});
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.searchCupon= async (req,res)=>{
    try {
        const data = await cupon.find({nombreCupon:req.body.nombreCupon});
        if (data[0]) {
            if (data[0].usos>=data[0].limite) res.json({error: null,data: null})
            else res.json({error: null,data: {nombreCupon:data[0].nombreCupon,porcentaje:data[0].porcentaje}})
        }else{
            res.json({error: null,data: null})
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}