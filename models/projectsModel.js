const mongoose = require('mongoose')

const projectsSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectDate: {
        type: String,
        required: true
    },
    liveLink: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
})

const projectsModel = mongoose.model('projectsModel', projectsSchema)
module.exports = projectsModel