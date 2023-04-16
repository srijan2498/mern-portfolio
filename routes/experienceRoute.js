const express = require('express')
const { addNewExperience, getAllExperiences, deleteExperience, updateExperience } = require('../controllers/experienceController')


const router = express.Router()

router.post('/addNewExperience', addNewExperience)
router.get('/allExperiences', getAllExperiences)
router.delete('/deleteExperience/:id', deleteExperience)
router.put('/updateExperience/:id', updateExperience)

module.exports = router