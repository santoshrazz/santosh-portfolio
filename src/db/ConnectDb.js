import mongoose from 'mongoose'

let isConnected = false;
export const connectToDb = async () => {
    try {
        const connectionString = process.env.MONGODB_URI
        if (!connectionString) {
            return
        }
        if (isConnected) {
            return
        }
        const connection = await mongoose.connect(connectionString)
        isConnected = connection.connection.readyState === 1
        if (isConnected) {
            console.log("🚀 MongoDB connected successfully.");
        }
    } catch (error) {
        console.log("error", error)
        throw new Error("Mongodb connection error")
    }
}