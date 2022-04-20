const mongoose = require("mongoose")

const youtubeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
})

const Youtube = mongoose.model("youtube", youtubeSchema)

module.exports = Youtube