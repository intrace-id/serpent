const { Schema, model, ObjectId } = require('mongoose');

const trainingSchema = new Schema({
    organizationId: {
        type: ObjectId,
        required: true,
        ref: 'Organization'
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    market: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        required: true,
        minlength: 1
    },
    tags: [{
        type: [ObjectId],
        required: true,
        minlength: 1,
        ref: 'Tag'
    }],
    price: {
        required: true
    },
    hostId: {
        type: ObjectId,
        ref: 'Organization',
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    certificate: {
        type: String
    },
    discipline: {
        type: String
    },
    level: {
        type: String
    }
}, { timestamps: true })

module.exports = model('Training', trainingSchema)