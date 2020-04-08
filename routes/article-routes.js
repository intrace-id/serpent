const router = require('express').Router();
const articleControllers = require('../controllers/article-controllers');

router.post('/', articleControllers.create);
router.get('/', articleControllers.findAll);
router.get('/:projectId', articleControllers.findOne);
router.patch('/:projectId', articleControllers.updateOne);
router.delete('/:projectId', articleControllers.deleteOne);

module.exports = router;