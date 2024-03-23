import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(express.json({limit: "30mb", extend: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is an Outpass System API")
})

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL 

mongoose.connect( DATABASE_URL)
    .then(() => app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))