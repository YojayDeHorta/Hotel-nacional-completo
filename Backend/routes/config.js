const router=require('express').Router()
const configController= require("../controllers/configuracion")
const statusController= require("../controllers/status")
const validateToken= require("../controllers/validate-token")


router.get('/status', statusController.getStatus)
router.post('/status',validateToken, statusController.setStatus)
router.post('/fechanothabitable',validateToken, configController.addFechaNotAvitable)
router.get('/fechanothabitable', configController.getFechaNotAvitable)
router.delete('/fechanothabitable',validateToken, configController.deleteFechaNotAvitable)
module.exports = router;