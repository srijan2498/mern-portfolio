const aboutModel = require("../models/aboutModel")

const getAbout = async (req, res) => {
    const about = await aboutModel.find()
    if (about) {
        res.status(200).send({
            aboutDesc: about,
            message: "About Fetched!",
            success: true
        })
    }
    else {
        res.status(200).json({
            message: 'No About!',
            success: false
        })
    }
}

const updateAbout = async (req, res) => {
    const about = await aboutModel.findById(req.params.id)
    if (about) {
        await about.updateOne({
            $set: {
                aboutDesc: req.body.aboutDesc
            }
        })
        res.status(200).json({
            message: "About updated successfully!",
            success: true
        })
    }
    else {
        res.status(200).json({
            message: 'No About!',
            success: false
        })
    }
}

module.exports = { getAbout, updateAbout }