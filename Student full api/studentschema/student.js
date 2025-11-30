import mongoose from 'mongoose'


const StudentSchema = new mongoose.Schema({
    name: String,
    class: Number,
    id: Number
})

export const studentSchema = mongoose.model("StudentData", StudentSchema)