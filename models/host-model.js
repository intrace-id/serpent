const { Schema, model } = require('mongoose');

const hostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Host', hostSchema)