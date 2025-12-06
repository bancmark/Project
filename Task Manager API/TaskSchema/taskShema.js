import mongoose, { Schema } from 'mongoose'

const taskshem = new Schema({
    task:{ type: String, required: true, trim: true }, 
    completed:{ type: Boolean, default: false},
    id: {type: String, default: () => Date.now().toString()}
}, {timestamps: true})


export const schema = mongoose.model('task', taskshem)