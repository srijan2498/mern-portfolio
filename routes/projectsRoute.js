const express = require('express')
const { getAllProjects, deleteProject } = require('../controllers/projectsController')
const projectsModel = require('../models/projectsModel');

const router = express.Router()

router.post('/addNewProject', async (req, res) => {
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
})
router.get('/allProjects', getAllProjects)
router.delete('/deleteProject/:id', deleteProject)
router.put('/updateProject/:id', async (req, res) => {
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
                projectDescription: req.body.projectDescription,
                projectDate: req.body.projectDate,
                liveLink: req.body.liveLink
            }
        })
        return res.status(200).json({
            message: 'Project updated successfully!',
            success: true
        })
    }
})

module.exports = router