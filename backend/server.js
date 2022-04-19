const express = require("express")
const cors = require("cors")
const dotenv = require('dotenv')

const quizController = require('./Controllers/quizController')
const questionController = require('./Controllers/questionController')
const userController = require("./Controllers/userController")
const connect = require("./config/db")

const app = express()


app.use(cors())
app.use(express.json())

dotenv.config({ path: "./.env" })

app.use('/quiz', quizController)
app.use('/question', questionController)
app.use("/user", userController)

app.listen(process.env.PORT, async () => {
    await connect()
    console.log('Connected to Database');
})