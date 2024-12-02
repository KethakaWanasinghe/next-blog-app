import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://kethakawanasinghe:thusara23591@cluster0.w9fq0.mongodb.net/blog-app')
    console.log("DB Connected");
}