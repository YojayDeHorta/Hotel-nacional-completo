const router=require('express').Router()
const configController= require("../controllers/configuracion")
const validateToken= require("../controllers/validate-token")


router.post('/fechanothabitable',validateToken, configController.addFechaNotAvitable)
router.get('/fechanothabitable', configController.getFechaNotAvitable)
router.delete('/fechanothabitable',validateToken, configController.deleteFechaNotAvitable)
module.exports = router;