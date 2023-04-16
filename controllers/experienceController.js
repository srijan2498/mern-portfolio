const experienceModel = require("../models/experienceModel")

// Add new experience
const addNewExperience = async (req, res) => {
    try {
        const experience = await experienceModel.findOne(req.body)
        if (experience) {
            return res.status(400).json({
                message: "Experience already exists!",
                success: false
            })
        }
        else {
            const newExperience = new experienceModel(req.body)
            await newExperience.save()
            return res.status(200).json({
                message: 'Experience added successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while adding new experience!',
            success: false
        })
    }
}

// Get all experiences
const getAllExperiences = async (req, res) => {
    try {
        const allExperiences = await experienceModel.find()
        return res.status(200).json({
            experiences: allExperiences,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while fetching all experiences!',
            success: false
        })
    }
}

// Delete a experience
const deleteExperience = async (req, res) => {
    try {
        const experience = await experienceModel.findById(req.params.id)
        if (!experience) {
            return res.status(400).json({
                message: "Experience doesn't exists!",
                success: false
            })
        }
        else {
            await experienceModel.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                message: 'Experience deleted successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while deleting the experience!',
            success: false
        })
    }
}

// Update an experience
const updateExperience = async (req, res) => {
    try {
        const experience = await experienceModel.findById(req.params.id)
        if (!experience) {
            return res.status(400).json({
                message: "Experience doesn't exists!",
                success: false
            })
        }
        else {
            await experience.updateOne({
                $set: {
                    company: req.body.company,
                    designation: req.body.designation,
                    jobType: req.body.jobType,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    jobDescription: req.body.jobDescription,
                }
            })
            return res.status(200).json({
                message: 'Experience updated successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while updating the experience!',
            success: false
        })
    }
}

module.exports = { addNewExperience, getAllExperiences, deleteExperience, updateExperience }