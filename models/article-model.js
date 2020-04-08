const { Schema, model, ObjectId } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true,
        ref: User
    },
    content: {
        type: String,
        required: true,
        minlength: 100
    },
    publishDate: {
        type: Date,
        required: true
    },
    tags: [{
        type: ObjectId
    }]
}, { timestamps: true })

module.exports = model('Article', articleSchema)