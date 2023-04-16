const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL)
    console.log(`mongodb is connected successfully on ${mongoose.connection.host}`)
}

module.exports = connectDb