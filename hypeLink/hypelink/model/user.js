import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    url: String,
    shorturl: String,
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema)