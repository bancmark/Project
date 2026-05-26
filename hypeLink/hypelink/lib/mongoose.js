import mongoose from "mongoose";

const Mongo_DB = process.env.MONGO_URL

if (!Mongo_DB) {
    throw new Error("MongoDb is not connected check /lib/mongoose.js");
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: nulll
    }

}

async function connection() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connection