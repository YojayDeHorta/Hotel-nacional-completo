const router=require('express').Router()
const configController= require("../controllers/configuracion")
const statusController= require("../controllers/status")
const validateToken= require("../controllers/validate-token")
const cupones= require("../controllers/cupones")

//status
router.get('/status', statusController.getStatus)
router.post('/status',validateToken, statusController.setStatus)
//fechas
router.post('/fechanothabitable',validateToken, configController.addFechaNotAvitable)
router.get('/fechanothabitable', configController.getFechaNotAvitable)
router.delete('/fechanothabitable',validateToken, configController.deleteFechaNotAvitable)

//cupones
router.post('/cupones',validateToken, cupones.addCupon)
router.get('/cupones',validateToken,  cupones.getCupon)
router.delete('/cupones',validateToken, cupones.deleteCupon)

module.exports = router;