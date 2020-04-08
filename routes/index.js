const router = require('express').Router();
const articleRoutes = require('./article-routes');
const trainingRoutes = require('./training-routes');

router.use('/articles', articleRoutes);
router.use('/trainings', trainingRoutes);

module.exports = router;