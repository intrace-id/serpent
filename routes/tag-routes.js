const router = require('express').Router()
const TagController = require('../controllers/tag-controllers') 

router.get('/', TagController.findAll)
router.post('/', TagController.create)
router.delete('/tagId', TagController.deleteOne)

module.exports = router