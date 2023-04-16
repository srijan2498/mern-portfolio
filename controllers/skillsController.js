const skillsModel = require("../models/skillsModel")

// Add new skill
const addNewSkill = async (req, res) => {
    try {
        const skill = await skillsModel.findOne({ skillName: req.body.skillName })
        if (skill) {
            return res.status(200).json({
                message: "Skill already exists!",
                success: false
            })
        }
        else {
            const newSkill = new skillsModel(req.body)
            await newSkill.save()
            return res.status(200).json({
                message: 'Skill added successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while adding new skill!',
            success: false
        })
    }
}

// Get all skills
const getAllSkills = async (req, res) => {
    try {
        const allSkills = await skillsModel.find()
        return res.status(200).json({
            skills: allSkills,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while fetching all skills!',
            success: false
        })
    }
}

// Delete a skill
const deleteSkill = async (req, res) => {
    try {
        const skill = await skillsModel.findById(req.params.id)
        if (!skill) {
            return res.status(400).json({
                message: "Skill doesn't exists!",
                success: false
            })
        }
        else {
            await skillsModel.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                message: 'Skill deleted successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while deleting the skill!',
            success: false
        })
    }
}


module.exports = { addNewSkill, getAllSkills, deleteSkill }