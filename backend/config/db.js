import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/food-del', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected (Local)");
    } catch (error) {
        console.error("MongoDB Connection Error: ", error.message);
    }
};
