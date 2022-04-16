const router = require("express").Router()
const Question = require("../Models/questionModel")

//get all questions
router.get("/", async(req,res) => {
    var q = {}
    if(req.query.quiz){
        q.quiz = req.query.quiz
    }
    try{
        const newquestion = await Question.find(q).populate('quiz').lean().exec();
        res.status(200).send(newquestion);
    }
    catch(e){
        res.status(400).send({message : e.message})
    }
}
)

//get question by id
router.get('/:id', async(req,res) => {
    try {
        const newquestion = await Question.findById(req.params.id).lean().exec();
        res.status(200).send(newquestion);
    } catch (e) {
        res.status(400).send({message : e.message})
    }
    }
)

//create question
router.post('/', async(req,res) => {
    try {
        const newquestion = await Question.create(req.body);
        res.status(201).send(newquestion)
    } catch (e) {
        res.status(400).send({message : e.message})
    }
})


//update question
router.patch('/:id', async(req,res) => {
    try {
        const newquestion = await Question.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).send(newquestion)
    } catch (e) {
        res.status(400).send({message : e.message})
    }
});

//delete question
router.delete("/", async(req,res) => {
    try {
        const newquestion = await Question.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    } catch (e) {
        res.status(400).send({message : e.message})
    }
});


module.exports = router;