const Joi = require('joi');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
    user: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required()
})

exports.register= async (req,res)=>{
    // validate user
    const { error } = schemaRegister.validate(req.body)
    if (error) 
        return res.status(400).json({error: error.details[0].message})

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) 
        return res.status(400).json({error: 'Email ya registrado'})

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordEncrypt
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
}
exports.login= async (req,res)=>{
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    const{user,password}=req.body
    
    if (user!=process.env.USER||password!=process.env.PASSWORD) {
        return res.status(400).json({ error: 'usuario o contraseña no valida' })
    }
    // creamos el token
    const token = jwt.sign({
        name: user
    }, process.env.TOKEN_SECRET)
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })  

}
