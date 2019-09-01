const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    countShirt: {
        type: Number,
        required: true
    },
    countShoe: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PostDatas', PostSchema);