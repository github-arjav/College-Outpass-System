import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import studentRoutes from './routes/students.js'
import wardenRoutes from './routes/wardens.js'
import outpassRoutes from './routes/outpass.js'
import moveOutpassRoutes from './routes/outpassMovement.js'
import forgotPassRoutes from './routes/forgotPassword.js'

const app = express();
app.use(express.json({limit: "30mb", extend: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

dotenv.config()

app.get('/', (req, res) => {
    res.send("This is an Outpass System API")
})

app.use('/student', studentRoutes)
app.use('/warden', wardenRoutes)
app.use('/outpass', outpassRoutes)
app.use('/move-outpass', moveOutpassRoutes)
app.use('/forgot-pass', forgotPassRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect( DATABASE_URL)
    .then(() => app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))