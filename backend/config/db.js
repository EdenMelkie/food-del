import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://eden:eden@cluster0.vjpxkb6.mongodb.net/?', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected (Local)");
    } catch (error) {
        console.error("MongoDB Connection Error: ", error.message);
    }
};
