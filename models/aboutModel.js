const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
    aboutDesc: {
        type: String,
        required: true
    }
})

const aboutModel = mongoose.model('aboutModel', aboutSchema)
module.exports = aboutModel