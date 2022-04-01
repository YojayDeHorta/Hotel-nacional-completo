const router=require('express').Router()
const authController= require("../controllers/autenticacion")
const HabitacionesController= require("../controllers/habitaciones")
const validateToken= require("../controllers/validate-token")

router.get("/admin",validateToken,(req,res)=>{
    res.json({
        error: null,
        data: "hola"
    })
})

//hoteles
router.get('/habitaciones',validateToken, HabitacionesController.getHabitacion)
router.post('/habitaciones',validateToken, HabitacionesController.addHabitacion)
router.delete('/habitaciones',validateToken, HabitacionesController.deleteHabitacion)
router.get('/habitaciones/state',validateToken, HabitacionesController.getHabitacionByState)
//login
router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router;