//reference of quiz + answer array [{option:"abakjfajfa", istrue:false},{},{},{}]

const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "quiz"
    },
    question: {
        type: String
    },
    explaination: {
        type: String
    },
    options: [
        {
            type: Object,
            required: true
        }
    ]
}, {
    versionKey: false,
    timeStamps: true
})

const Question = mongoose.model("question", questionSchema)
module.exports = Question;