const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const connectDb = require('./config/db')
const path = require('path')

const app = express()
dotenv.config()
app.use(cors());
connectDb()

app.use(express.json())

app.use('/api/v1/skill', require('./routes/skillsRoute'))
app.use('/api/v1/experience', require('./routes/experienceRoute'))
app.use('/api/v1/project', require('./routes/projectsRoute'))
app.use('/api/v1', require('./routes/adminRoute'))
app.use('/api/v1/about', require('./routes/aboutRoute'))

// static files
app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log('Backend running on port 8000')
})