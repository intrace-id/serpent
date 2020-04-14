const Tag = require('../models/tag-model');

module.exports = class TagController {
    static create(req, res, next) {
        const { name } = req.body

        Tag.create({ name })
            .then( tag => {
                res.status(201).json(tag)
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        Tag.find()
            .then( tags => {
                res.status(200).json(tags)
            })
            .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.tagId

        Tag.findByIdAndDelete(id)
            .then( tag => {
                res.status(200).json(tag)
            })
            .catch(next)
    }
}