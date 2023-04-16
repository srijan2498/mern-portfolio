const express = require('express')
const { addNewSkill, getAllSkills, deleteSkill } = require('../controllers/skillsController')

const router = express.Router()

router.post('/addNewSkill', addNewSkill)
router.get('/allSkills', getAllSkills)
router.delete('/deleteSkill/:id', deleteSkill)

module.exports = router