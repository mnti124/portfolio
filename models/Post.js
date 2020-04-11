//Creating a layout for what the databae will have in the colleciton
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);