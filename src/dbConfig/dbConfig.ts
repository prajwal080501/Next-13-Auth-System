import mongoose from 'mongoose';
import { connected } from 'process';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection;


        connection.on("Connected", () => {
            console.log("MongoDB connected Successfully")
        })

        connection.on("error", () => {
            console.log("MongoDB connection failed");
        })
    } catch (error) {
        console.log("Something goes wrong!")
        console.log(error)
    }
}