const router = require("express").Router()
const uploadSingle = require("../Middlewares/upload");
const Quiz = require('../Models/quizModel')

router.get("/", async (req, res) => {
    try {
        const quizzes = await Quiz.find().lean().exec();
        res.status(200).send(quizzes);
    }
    catch (e) {
        res.status(400).send({ message: e.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).lean().exec();
        res.status(200).send(quiz);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


router.post('/', uploadSingle("image"), async (req, res) => {
    var obj = { ...req.body };
    if (req.file !== undefined) {

        obj["image"] = req.file.path;
    }
    try {
        const quiz = await Quiz.create(obj);
        res.status(201).send(quiz)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).send(quiz)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


module.exports = router;
