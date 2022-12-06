const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true

    },

    tasks: {
        type : Array,
        required: true,
        _id: new mongoose.Types.ObjectId().toHexString()
        
    }
})

module.exports = mongoose.model('todo', todoSchema)