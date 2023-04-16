const projectsModel = require("../models/projectsModel")


// Add new project
const addNewProject = async (req, res) => {
    try {
        const project = await projectsModel.findOne({ projectTitle: req.body.projectTitle })
        if (project) {
            return res.status(400).json({
                message: "Project already exists!",
                success: false
            })
        }
        else {
            const newProject = new projectsModel(req.body)
            await newProject.save()
            return res.status(200).json({
                message: 'Project added successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while adding new project!',
            success: false
        })
    }
}

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const allProjects = await projectsModel.find()
        return res.status(200).json({
            projects: allProjects,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while fetching all projects!',
            success: false
        })
    }
}

// Delete a project
const deleteProject = async (req, res) => {
    try {
        const project = await projectsModel.findById(req.params.id)
        if (!project) {
            return res.status(400).json({
                message: "Project doesn't exists!",
                success: false
            })
        }
        else {
            await projectsModel.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                message: 'Project deleted successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while deleting the project!',
            success: false
        })
    }
}

// Update a project
const updateProject = async (req, res) => {
    try {
        const project = await projectsModel.findById(req.params.id)
        if (!project) {
            return res.status(400).json({
                message: "Project doesn't exists!",
                success: false
            })
        }
        else {
            await project.updateOne({
                $set: {
                    projectTitle: req.body.projectTitle,
                    projectDescription: req.body.projectDescription
                }
            })
            return res.status(200).json({
                message: 'Project updated successfully!',
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while updating the project!',
            success: false
        })
    }
}

module.exports = { addNewProject, getAllProjects, deleteProject, updateProject }