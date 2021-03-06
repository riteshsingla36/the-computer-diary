//name, img, desc

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Number
    }

});

const Quiz = mongoose.model("quiz", quizSchema)
module.exports = Quiz;

