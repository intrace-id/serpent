const Host = require('../models/host-model');

module.exports = class HostController {
    static create(req, res, next) {
        const { name, image } = req.body

        Host.create({ name, image })
            .then( host => {
                res.status(201).json(host)
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        Host.find()
            .then( hosts => {
                res.status(200).json(hosts)
            })
            .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.tagId

        Host.findByIdAndDelete(id)
            .then( host => {
                res.status(200).json(host)
            })
            .catch(next)
    }
}