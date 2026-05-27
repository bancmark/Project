import mongoose from "mongoose";

const Mongo_DB = process.env.MONGO_URL

if (!Mongo_DB) {
    throw new Error("MongoDb is not connected check /lib/mongoose.js");
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }

}

async function connection() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(Mongo_DB, {
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connection