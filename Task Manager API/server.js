import express from 'express'
import mongoose from 'mongoose'

const app = express()
const connectDB = mongoose.connect('mongodb://localhost:27017/')

app.use(express.json())

