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

//sending all the data t frontend that save in server
app.get('/get', async (req, res) => {
    try {
        const data = await USchema.find()
        res.json({
            success: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error fetching data"
        })
    }
})

//adding all the data into server, that come from frontend
app.post('/add', async (req, res) => {
    try {
        const { id, website, username, password } = req.body
        const adder = new USchema({
            id,
            website,
            username,
            password
        })
        await adder.save()
        console.log("Data added");
        res.json({
            message: "Data received successfully"
        })
    } catch (error) {
        res.send(error)
    }
})

app.post('/update', async (req, res) => {
    try {
        const { id, ...updated } = req.body
        const finder = await USchema.findOneAndUpdate(
            { id: id },
            { $set: updated },
            { new: true }
        )
        if (!finder) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json(finder)
    } catch (error) {
        res.json(error)
    }
})

app.delete("/delete", async (req, res) => {
    try {
        const { id } = req.body
        const deleter = await USchema.findOneAndDelete({ id: id })
        if (!deleter) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})