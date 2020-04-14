const router = require('express').Router()
const HostController = require('../controllers/host-controllers') 

router.get('/', HostController.findAll)
router.post('/', HostController.create)
router.delete('/hostId', HostController.deleteOne)

module.exports = router