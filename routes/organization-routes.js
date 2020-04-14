const router = require('express').Router()
const OrganizationController = require('../controllers/organization-controllers');

router.get('/', OrganizationController.findAll)
router.post('/', OrganizationController.create)
router.delete('/:organizationId', OrganizationController.deleteOne)

module.exports = router