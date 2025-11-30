import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js'

const app = express()
const port = 3000
const connectDB = await mongoose.connect('mongodb://localhost:27017/studentTest')


app.use(express.json())
app.use('/student', router)

app.get('/', (req, res)=>{
    res.send("what do you want ")
})


app.listen(port, ()=>{
    console.log(`website is running running on ${port}`);
})