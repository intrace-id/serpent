const { Schema, model, ObjectId } = require('mongoose');

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Organization', organizationSchema)