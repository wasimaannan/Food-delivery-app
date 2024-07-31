import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://dianbo:Pr0ma987@cluster0.uqsrnma.mongodb.net/food-delivery-app").then(()=>console.log("Database connected"));
}