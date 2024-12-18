const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type:String, required: true},
    deadline: {type:Date, required: true},
    isDone: {type:Boolean, default: false}
});

const Task = mongoose.model('task', taskSchema, 'tasks');

module.exports = Task;