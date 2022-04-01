const router=require('express').Router()
const HabitacionesController= require("../controllers/habitaciones")
const validateToken= require("../controllers/validate-token")


//hoteles
router.get('/',validateToken, HabitacionesController.getHabitacion)
router.post('/',validateToken, HabitacionesController.addHabitacion)
router.delete('/',validateToken, HabitacionesController.deleteHabitacion)
router.get('/state',validateToken, HabitacionesController.getHabitacionByState)
router.post('/state',validateToken, HabitacionesController.changeStateHabitacion)

module.exports = router;