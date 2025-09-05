import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log("Connect successful");

    } catch (err) {
        console.error(err.message);

    }



}
export default connectDB

// 
