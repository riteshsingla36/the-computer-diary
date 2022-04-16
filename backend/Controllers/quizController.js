const router = require("express").Router()
const Quiz = require('../Models/quizModel')

router.get("/", async(req,res) => {
    try{
        const newquiz = await Quiz.find().lean().exec();
        res.status(200).send(newquiz);
    }
    catch(e){
        res.status(400).send({message : e.message})
    }
})


router.get('/:id', async(req,res) => {
  try {
      const newquiz = await Quiz.findById(req.params.id).lean().exec();
      res.status(200).send(newquiz);
  } catch (error) {
    res.status(400).send({message : error.message})
  }
})


router.post('/', async(req,res) => {
    try {
        const newquiz = await Quiz.create(req.body);
        res.status(201).send(newquiz)
    } catch (error) {
        res.status(400).send({message : error.message})
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const newquiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).send(newquiz)
    } catch (error) {
        res.status(400).send({message : error.message})
    }
})

router.delete("/", async(req,res) => {
    try {
        const newquiz = await Quiz.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({message : error.message})
    }
})


module.exports = router;
