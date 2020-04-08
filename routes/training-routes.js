const router = require('express').Router();
const trainingControllers = require('../controllers/training-controllers');

router.post('/', trainingControllers.create);
router.get('/', trainingControllers.findAll);
router.get('/:projectId', trainingControllers.findOne);
router.patch('/:projectId', trainingControllers.updateOne);
router.delete('/:projectId', trainingControllers.deleteOne);

module.exports = router;