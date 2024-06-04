const mongoose = require("mongoose")

const { Schema } = mongoose

const taskSchema = new Schema({
    title:{
        type:String,
    },
    name:{
        type:String,
    },
    description:{
        type:String,
    },
})

const taskModel = mongoose.model('task',taskSchema)

module.exports = taskModel;