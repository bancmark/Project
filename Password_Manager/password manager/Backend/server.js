import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import USchema from './model/userschems.js'

const app = express()
app.use(express.json());
const port = 3000
const DBconnect = await mongoose.connect("mongodb://localhost:27017/password")
const OptionCors = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400
}
app.use(cors(OptionCors))

app.get('/', (req, res) => {
    res.send("welcome back")
})

app.post('/add', async (req, res)=>{
    try {
        const {website, username, password} = req.body
        const adder = new USchema({
            website,
            username,
            password
        })
        await adder.save()
        console.log("Data added");
        res.send("everything is OK!")
    } catch (error) {
        res.send(error)
    }
})

app.post('/update', (req, res)=>{
    res.send("you got update")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})