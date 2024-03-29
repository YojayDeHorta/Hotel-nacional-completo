const router=require('express').Router()
const HabitacionesController= require("../controllers/habitaciones")
const validateToken= require("../controllers/validate-token")
const status= require("../controllers/validate-status")
const cupones= require("../controllers/cupones")

status
//hoteles
router.get('/',validateToken, HabitacionesController.getHabitacion)
router.post('/',validateToken, HabitacionesController.addHabitacion)
router.delete('/',validateToken, HabitacionesController.deleteHabitacion)
router.get('/disponibles', HabitacionesController.getHabitacionByDisponible)
router.get('/disponibles/:id', HabitacionesController.getHabitacionByDisponibleAndId)
router.post('/state',validateToken, HabitacionesController.changeStateHabitacion)
//cupones
router.post('/cupon', cupones.searchCupon)
module.exports = router;