const express = require("express")
const cors = require("cors")
const dotenv = require('dotenv')
const cloudinary = require("cloudinary")
const fileUpload = require('express-fileupload');

const quizController = require('./Controllers/quizController')
const questionController = require('./Controllers/questionController')
const userController = require("./Controllers/userController")
const youtubeController = require("./Controllers/youtube.controller")
const connect = require("./config/db")

const app = express()




app.use(cors())
app.use(express.json())
// app.use(fileUpload());
// app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: "./.env" })

app.use('/quiz', quizController)
app.use('/question', questionController)
app.use("/user", userController)
app.use("/youtube", youtubeController)



app.listen(process.env.PORT, async () => {
    await connect()
    console.log('Connected to Database');
})