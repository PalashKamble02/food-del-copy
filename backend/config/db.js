import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manojbajpeyi804:12345@cluster0.ujrcaam.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}