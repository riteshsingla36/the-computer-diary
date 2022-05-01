const router = require("express").Router()
const uploadSingle = require("../Middlewares/upload");
const Youtube = require('../Models/youtubeModel')
const cloudinary = require("cloudinary")

router.get("/", async (req, res) => {
    try {
        const youtubes = await Youtube.find().lean().exec();
        res.status(200).send(youtubes);
    }
    catch (e) {
        res.status(400).send({ message: e.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const youtube = await Youtube.findById(req.params.id).lean().exec();
        res.status(200).send(youtube);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


router.post('/', uploadSingle("image"), async (req, res) => {
    
    var obj = { ...req.body };
    if (req.file !== undefined) {

        obj["image"] = req.file.path;
    }
    console.log(obj)
    try {
        const youtube = await Youtube.create(obj)

        res.status(201).send(youtube)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const youtube = await Youtube.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).send(youtube)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const youtube = await Youtube.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


module.exports = router;
