const Organization = require('../models/organization-model');

module.exports = class OrganizationController {
    static create(req, res, next) {
        const { name, image } = req.body

        Organization.create({ name, image })
            .then( organization => {
                res.status(201).json(organization)
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        Organization.find()
            .then( organizations => {
                res.status(200).json(organizations)
            })
            .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.tagId

        Organization.findByIdAndDelete(id)
            .then( organization => {
                res.status(200).json(organization)
            })
            .catch(next)
    }
}