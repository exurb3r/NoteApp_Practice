import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const databaseUri = process.env.DATABASE_URI;
        if (!databaseUri) {
            throw new Error("DATABASE_URI is not defined");
        }
        await mongoose.connect(databaseUri);
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;