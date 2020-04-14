const { Schema, model, ObjectId } = require('mongoose');
const { encrypt } = require('../helpers/bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please fill a name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please fill an email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Please fill a password']
    },
    
}, { timestamps: true })

userSchema.pre('save', function (next) {
    this.password = encrypt(this.password);
    next();
});

module.exports = model('User', userSchema);