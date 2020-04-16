const router = require('express').Router();
const articleRoutes = require('./article-routes');
const hostRoutes = require('./host-routes');
const organizationRoutes = require('./organization-routes');
const tagRoutes = require('./tag-routes');
const trainingRoutes = require('./training-routes');
const userRoutes = require('./user-routes');

router.use('/articles', articleRoutes);
router.use('/hosts', hostRoutes);
router.use('/organizations', organizationRoutes);
router.use('/tags', tagRoutes);
router.use('/trainings', trainingRoutes);
router.use('/users', userRoutes);

router.get('/', function (req, res) {
    res.send('GET request to the Intrace API')
})
  
router.post('/', function (req, res) {
    res.send('POST request to the Intrace API')
})

module.exports = router;