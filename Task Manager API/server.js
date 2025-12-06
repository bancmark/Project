import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js'

const app = express()
const port = 3000
const connectDB = await mongoose.connect('mongodb://localhost:27017/task')

app.use(express.json())
app.use('/task', router)

app.get('/', (req, res) => {
    res.send("What do you want add task, update, delete and want to see all")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})