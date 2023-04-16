const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    skillPercent: {
        type: String,
        required: true
    }
})

const skillsModel = mongoose.model('skillsModel', skillsSchema)
module.exports = skillsModel