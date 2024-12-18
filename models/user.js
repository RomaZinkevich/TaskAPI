const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'regular'], default: 'regular' }
});

const User = mongoose.model('user', userSchema, 'users');

module.exports = User