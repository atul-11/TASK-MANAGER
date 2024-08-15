const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id:{
        type:Number,
        require: true

    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
     
    status: {
        type: String,
        enum: ['Todo', 'In Progress','Done'],
        default: 'Todo'
    },

    Priority: {
        type: String,
        required: true
    },

    DueDate: {
        type:Date
    },

    CreatedAt: {
        type:Date,
        default: Date.now
    },

    UpdatedAt: {
        type:Date,
        default: Date.now
    },

    






});


const TaskModel = mongoose.model('task', taskSchema);

module.exports = { TaskModel }



