const express = require('express')
const { getAdmin } = require('../controllers/adminController')

const router = express.Router()

router.post('/getAdmin', getAdmin)

module.exports = router