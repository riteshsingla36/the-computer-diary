//name, img, desc

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

});

const Quiz = mongoose.model("quiz", quizSchema)
module.exports = Quiz;

