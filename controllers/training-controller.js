 
const Training = require('../models/training-model');

class TrainingController {
    static create(req, res, next) {
        const { organizationId, name, about, market, target, content, tags, price, host, schedule, certificate, discipline, level } = req.body;

        Training.create({  organizationId, name, about, market, target, content, tags, price, host, schedule, certificate, discipline, level })
        .then( data => {
            res.status(201).json(data)
        })
        .catch(next)
    }
    
    static findAll(req, res, next) {
        Training.find().populate(['organizationId','tags', 'hostId'])
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static findOne(req, res, next) {
        const id = req.params.trainingId
        
        Training.findById(id).populate(['organizationId','tags', 'hostId'])
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.trainingId

        Training.findByIdAndDelete(id)
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static updateOne(req, res, next) {
        const id = req.params.trainingId
        const fields = ['organizationId', 'name', 'about', 'market', 'target', 'content', 'tags', 'price', 'host', 'schedule', 'certificate', 'discipline', 'level']
        let update = {}

        fields.forEach(field => {
            req.body[field] && (update[field] = req.body[field])
        });

        Training.findByIdAndUpdate(id, { $set: update }, { new: true, runValidators: true })
        .then( data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = TrainingController