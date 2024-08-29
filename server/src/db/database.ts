import mongoose from 'mongoose';

const connectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error: ", err);
        process.exit(1); // Terminate server if connection fails
    }
}

export default connectMongoDB;