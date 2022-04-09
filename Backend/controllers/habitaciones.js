const Joi = require('joi');
const Habitacion = require('../models/Habitacion');
const jwt = require('jsonwebtoken');  
const schemaHabitacion = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    tipo_habitacion: Joi.string().min(3).max(255).required(),
    servicio: Joi.string().min(3).max(255).required(),
    precio: Joi.number().min(1).required(),
    ocupado: Joi.boolean().required()
})

exports.getHabitacion= async (req,res)=>{
    try {
        const data = await Habitacion.find({});
        res.json({error: null,data: data})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.addHabitacion= async (req,res)=>{
    try {
        const { error } = schemaHabitacion.validate(req.body)
        if (error) return res.status(400).json({error: error.details[0].message})
        
        const habitacion = new Habitacion(req.body);
        const savedHabitacion = await habitacion.save();
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}

exports.deleteHabitacion= async (req,res)=>{
    try {

        const data = await Habitacion.deleteOne({_id:req.body.id});
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}


exports.getHabitacionByDisponible= async (req,res)=>{
    try {
        const data = await Habitacion.find({estado:"Disponible"});
        res.json({error: null,data: data})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}
exports.changeStateHabitacion= async (req,res)=>{
    try {
        let data=null
        if (req.body.estado=='Deshabilitado') 
        data = await Habitacion.updateOne({_id:req.body._id},{estado:'Disponible'})
        else if(req.body.estado=='Disponible')
        data = await Habitacion.updateOne({_id:req.body._id},{estado:'Deshabilitado'})
        res.json({error: null,data: 'ok'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Error interno del servidor'})
    }
   
}