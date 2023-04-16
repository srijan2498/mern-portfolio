const adminModel = require("../models/adminModel")
const jwt = require('jsonwebtoken')

// Login Admin
const getAdmin = async (req, res) => {
    try {
        const admin = await adminModel.findOne({
            emailId: req.body.emailId,
            password: req.body.password,
            securitykey: req.body.securitykey
        })
        if(!admin){
            return res.status(200).json({
                message: 'Incorrect credentials!',
                success: false
            })
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRETKEY, { expiresIn: '1d' });
        return res.status(200).json({
            admin: admin.emailId,
            message: 'Logged in successfully!',
            success: true,
            token: token
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error occured while login!',
            success: false
        })
    }
}

module.exports = { getAdmin }