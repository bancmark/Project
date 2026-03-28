import mongoose from "mongoose";

const USchema = new mongoose.Schema({
    id:{type: String, unique:true},
    website: { type: String, require: true },
    username: {type: String, required: true, trim: true},
    password: {type: String,required: true}
})

export default mongoose.model("Password_manager", USchema);